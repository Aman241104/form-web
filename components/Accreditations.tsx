'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Accreditations.module.css';

const logos = [
  { src: '/images/badge-iso-27001.png', alt: 'ISO 27001' },
  { src: '/images/badge-iso-9001.png', alt: 'ISO 9001' },
  { src: '/images/badge-quickbooks.png', alt: 'QuickBooks' },
  { src: '/images/badge-sage-intacct.png', alt: 'Sage Intacct' },
  { src: '/images/badge-zoho-books.png', alt: 'Zoho Books' },
  { src: '/images/badge-certified-advisor.png', alt: 'Certified Advisor' },
  { src: '/images/logo-cpa.png', alt: 'CPA' },
  { src: '/images/logo-icai.png', alt: 'ICAI' },
  { src: '/images/logo-xero.png', alt: 'Xero' },
  { src: '/images/logo-iima.png', alt: 'IIMA' },
  { src: '/images/logo-picpa.png', alt: 'PICPA' },
];

const stats = [
  { label: 'Professionals', value: '100+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Global Clients', value: '200+' },
];

export default function Accreditations() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Header Reveal
    tl.fromTo('.reveal-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    );

    // Logos Reveal
    tl.fromTo('.reveal-logo',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
      '-=0.6'
    );

    // Stats Reveal
    tl.fromTo('.reveal-stat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15 },
      '-=0.4'
    );
  }, { scope: sectionRef });

  return (
    <section id="accreditations" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.tag} reveal-header`}>GLOBAL EXCELLENCE VERIFIED</span>
          <h2 className={`${styles.title} reveal-header`}>
            Trusted by the <span className={styles.desktopBreak}><br /></span>
            <span className={styles.titleEmphasis}>Industry's Best.</span>
          </h2>

          <p className={`${styles.description} reveal-header`}>
            Recognized by global standards and trusted platforms for precision, compliance, and excellence.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={`${styles.logoWrapper} reveal-logo group`}>
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={140} 
                height={60} 
                className={styles.logo}
              />
            </div>
          ))}
        </div>

        <div className={`${styles.statsContainer} reveal-stat`}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
