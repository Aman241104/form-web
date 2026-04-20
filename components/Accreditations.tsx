'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Accreditations.module.css';

const badges = [
  { src: '/images/badge-iso-27001.png', alt: 'ISO 27001 Certified' },
  { src: '/images/badge-iso-9001.png', alt: 'ISO 9001 Certified' },
  { src: '/images/badge-quickbooks.png', alt: 'QuickBooks Certified ProAdvisor' },
  { src: '/images/badge-sage-intacct.png', alt: 'Sage Intacct Certified' },
  { src: '/images/badge-zoho-books.png', alt: 'Zoho Books Certified' },
  { src: '/images/badge-certified-advisor.png', alt: 'Certified Advisor' },
];

const logos = [
  { src: '/images/logo-cpa.png', alt: 'CPA' },
  { src: '/images/logo-icai.png', alt: 'ICAI' },
  { src: '/images/logo-xero.png', alt: 'Xero' },
  { src: '/images/logo-iima.png', alt: 'IIMA' },
  { src: '/images/logo-picpa.png', alt: 'PICPA' },
];

export default function Accreditations() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.badgeItem', 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Accreditations and Certifications</span>
          <h2 className={styles.title}>Global Excellence Verified</h2>
        </div>

        <div className={styles.badgeGrid}>
          {badges.map((badge, idx) => (
            <div key={idx} className={`badgeItem ${styles.badgeWrapper}`}>
              <Image 
                src={badge.src} 
                alt={badge.alt} 
                width={120} 
                height={120} 
                className={styles.badge}
              />
            </div>
          ))}
        </div>

        <div className={styles.logoRow}>
          {logos.map((logo, idx) => (
            <div key={idx} className={`badgeItem ${styles.logoWrapper}`}>
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={100} 
                height={50} 
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
