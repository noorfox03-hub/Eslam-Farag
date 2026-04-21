import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import styles from './Certificates.module.css';

// Dynamic import for all certificates using Vite's feature
const certModules = import.meta.glob('../assets/certificates/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG}', { eager: true, import: 'default' });
const certImages = Object.values(certModules);

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificates" className={`section ${styles.certificates}`}>
      <div className="container">
        <h2 className="section-title">Certifications & Credentials</h2>
        <p className={styles.subtitle}>
          Professional qualifications demonstrating commitment to excellence and compliance with international and Egyptian accounting standards.
        </p>

        <div className={styles.grid}>
          {certImages.map((src, index) => (
            <div 
              key={index} 
              className={styles.certCard}
              onClick={() => openModal(src)}
            >
              <div className={styles.imageContainer}>
                <img src={src} alt={`Certificate ${index + 1}`} loading="lazy" />
                <div className={styles.overlay}>
                  <ZoomIn size={40} className="text-gold" />
                </div>
              </div>
              <div className={styles.cardInfo}>
                <h4>Professional Qualification {index + 1}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={styles.closeBtn} onClick={closeModal}>
            <X size={32} />
          </button>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate Full View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
