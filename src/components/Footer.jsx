import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            Eslam <span className="text-gold">Farag</span>
          </a>
          <p className={styles.brandSubtitle}>Professional Accountant</p>
          <p className={styles.description}>
            Delivering financial excellence, strategic insights, and comprehensive accounting solutions tailored for businesses in Egypt. Let's build a secure financial future together.
          </p>
        </div>
        
        <div className={styles.contactInfo}>
          <h4 className={styles.sectionTitle}>Get In Touch</h4>
          
          <div className={styles.contactItem}>
            <Mail size={20} className="text-gold" />
            <a href="mailto:contact@eslamfarag.com">contact@eslamfarag.com</a>
          </div>
          
          <div className={styles.contactItem}>
            <Phone size={20} className="text-gold" />
            <a href="tel:+201000000000">+20 10 0000 0000</a>
          </div>
          
          <div className={styles.contactItem}>
            <MapPin size={20} className="text-gold" />
            <span>Cairo, Egypt</span>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Eslam Farag. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
