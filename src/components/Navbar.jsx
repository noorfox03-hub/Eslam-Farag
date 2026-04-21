import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          Eslam <span className="text-gold">Farag</span>
        </a>

        <div className={styles.desktopMenu}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#certificates" className={styles.navLink}>Certificates</a>
          <a href="#contact" className="btn-primary">Hire Me</a>
        </div>

        <button 
          className={styles.mobileToggle} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#certificates" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Certificates</a>
          <a href="#contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Hire Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
