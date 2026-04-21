'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './ContactCTA.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.ctaContent', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`ctaContent ${styles.card}`}>
          <div className={styles.content}>
            <h2 className={styles.title}>Seeking a solution to your Accounting challenges?</h2>
            <p className={styles.text}>Discover Tailored Solutions – book a Free Consultation</p>
          </div>
          <a 
            href={getWhatsAppLink("Hello Elite Cloud Books, I'd like to book a free consultation to discuss our accounting challenges.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.button}
          >
            Contact Now <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
