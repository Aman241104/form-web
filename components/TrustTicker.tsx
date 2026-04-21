'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './TrustTicker.module.css';

const logos = [
  { name: 'Xero', src: '/images/logo-xero.png' },
  { name: 'QuickBooks', src: '/images/badge-quickbooks.png' },
  { name: 'Sage Intacct', src: '/images/badge-sage-intacct.png' },
  { name: 'Zoho Books', src: '/images/badge-zoho-books.png' },
  { name: 'PICPA', src: '/images/logo-picpa.png' },
  { name: 'ICAI', src: '/images/logo-icai.png' },
  { name: 'CPA', src: '/images/logo-cpa.png' },
];

const stats = [
  { id: 'exp', label: 'Partner Experience', value: 100, suffix: '+' },
  { id: 'pro', label: 'Qualified Experts', value: 150, suffix: '+' },
  { id: 'firms', label: 'Firms Scaled', value: 200, suffix: '+' },
  { id: 'accuracy', label: 'Reporting Precision', value: 99.9, suffix: '%', decimal: true },
];

export default function TrustTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Marquee Animation
    const marqueeWidth = marqueeRef.current?.offsetWidth || 0;
    gsap.to(marqueeRef.current, {
      x: `-${marqueeWidth / 2}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    // Stats Animation
    stats.forEach((stat) => {
      const target = { val: 0 };
      const element = document.getElementById(`stat-${stat.id}`);
      
      if (element) {
        gsap.to(target, {
          val: stat.value,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
          },
          onUpdate: () => {
            element.innerText = stat.decimal 
              ? target.val.toFixed(1) + stat.suffix 
              : Math.floor(target.val) + stat.suffix;
          },
        });
      }
    });

    // Hover effect for ticker
    gsap.fromTo('.reveal-stats', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {/* Logos Marquee */}
      <div className={styles.marqueeContainer}>
        <div ref={marqueeRef} className={styles.marquee}>
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.logoItem}>
              <Image src={logo.src} alt={logo.name} width={120} height={40} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Stats */}
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={`${styles.statCard} reveal-stats`}>
              <div id={`stat-${stat.id}`} className={styles.statValue}>0{stat.suffix}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.glow}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
