import React from 'react';
import { Briefcase, Award, TrendingUp } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const skills = [
    {
      icon: <Briefcase size={28} className="text-gold" />,
      title: "Financial Analysis",
      desc: "Deep insights into corporate financial health."
    },
    {
      icon: <TrendingUp size={28} className="text-gold" />,
      title: "Tax & Compliance",
      desc: "Expertise in Egyptian taxation and regulatory compliance."
    },
    {
      icon: <Award size={28} className="text-gold" />,
      title: "Strategic Advisory",
      desc: "Long-term financial planning and risk management."
    }
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container`}>
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <h3 className={styles.heading}>Building Financial Confidence</h3>
            <p className={styles.paragraph}>
              As a dedicated financial professional based in Egypt, my core mission is to provide businesses with absolute clarity. Complex ledgers, daunting tax regulations, and uncertain forecasts are transformed into actionable insights. 
            </p>
            <p className={styles.paragraph}>
              Over the years, I have established a track record of meticulous bookkeeping, rigorous auditing, and strategic financial planning. Whether you are a rising startup or an established enterprise, my objective is to safeguard and accelerate your financial growth.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Companies Advised</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Compliance Rate</span>
              </div>
            </div>
          </div>
          
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={`glass-box ${styles.skillCard}`}>
                <div className={styles.skillIconWrapper}>{skill.icon}</div>
                <h4 className={styles.skillTitle}>{skill.title}</h4>
                <p className={styles.skillDesc}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
