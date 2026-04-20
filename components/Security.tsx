'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Security.module.css';

const securityFeatures = [
  {
    label: 'NETWORK',
    title: 'Secure Data Portal',
    desc: 'Renowned cloud-based file sharing with high-level encryption for safe exchange of sensitive information.',
    detail: 'CLOUD-ENCRYPTED'
  },
  {
    label: 'PHYSICAL',
    title: 'Biometric Controls',
    desc: 'Zero-tolerance clean-desk policy within a biometric-only facility monitored 24/7.',
    detail: 'CCTV & BIOMETRIC'
  },
  {
    label: 'STANDARDS',
    title: 'Institutional Compliance',
    desc: 'Operating under ISO 27001 framework with CISM-certified leadership overseeing all protocols.',
    detail: 'ISO & CISM'
  }
];

export default function Security() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
      // Header Animation
      gsap.fromTo('.securityHeaderReveal', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );

      // Cards Border Draw & Content Stagger
      gsap.fromTo('.securityCardReveal', 
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="security" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`securityHeaderReveal ${styles.header}`}>
          <div className={styles.headerContent}>
            <span className={styles.label}>Ironclad Compliance</span>
            <h2 className={styles.title}>
              Data residency and<br />
              multi-layer protection<span className={styles.red}>.</span>
            </h2>
          </div>
          <div className={styles.isoBadgeWrapper}>
            <Image 
              src="/images/badge-iso-27001.png"
              alt="ISO 27001 Certified"
              width={120}
              height={120}
              className={styles.isoBadge}
            />
          </div>
        </div>

        <div className={styles.grid}>
          {securityFeatures.map((feature, index) => (
            <div key={index} className={`securityCardReveal ${styles.card}`}>
              <div className={styles.scanLine}></div>
              <div className={styles.cardHeader}>
                <span className={styles.featureLabel}>{feature.label}</span>
                <span className={styles.featureDetail}>{feature.detail}</span>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.statusDot}></div>
                <span className={styles.statusText}>Active Protocol</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.trustBar}>
          <div className={styles.badge}>SOC2 COMPLIANT</div>
          <div className={styles.divider}></div>
          <div className={styles.badge}>GDPR READY</div>
          <div className={styles.divider}></div>
          <div className={styles.badge}>ISO 27001</div>
          <div className={styles.divider}></div>
          <div className={styles.badge}>ISO 9001</div>
        </div>
      </div>
    </section>
  );
}
