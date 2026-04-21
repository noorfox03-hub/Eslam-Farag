import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.heroContent} animate-fade-in-up`}>
          <span className={styles.subtitle}>Welcome</span>
          <h1 className={styles.title}>
            I'm Eslam <span className="text-gold">Farag</span>
          </h1>
          <h2 className={styles.profession}>Professional Accountant</h2>
          <p className={styles.description}>
            Dedicated to bringing financial clarity, precision, and strategic insight to businesses in Egypt. With expertise in advanced accounting and financial analysis, I help companies optimize their operations and secure their financial health.
          </p>
          
          <div className={styles.actionGroup}>
            <a href="#certificates" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
