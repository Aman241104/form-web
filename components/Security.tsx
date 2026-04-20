'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Security.module.css';

const securityFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    label: 'NETWORK',
    title: 'Secure Data Portal',
    desc: 'Renowned cloud-based file sharing with high-level encryption for safe exchange of sensitive information.',
    protocol: 'End-to-end encrypted'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    label: 'PHYSICAL',
    title: 'Biometric Controls',
    desc: 'Zero-tolerance clean-desk policy within a biometric-only facility monitored 24/7.',
    protocol: 'Biometric secured'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
    ),
    label: 'STANDARDS',
    title: 'Institutional Compliance',
    desc: 'Operating under ISO 27001 framework with CISM-certified leadership overseeing all protocols.',
    protocol: 'ISO-compliant systems'
  }
];

export default function Security() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.reveal-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    )
    .fromTo('.reveal-badge',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.reveal-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      '-=0.6'
    )
    .fromTo('.reveal-compliance',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.05 },
      '-=0.4'
    );
  }, { scope: sectionRef });

  return (
    <section id="security" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={`${styles.headerContent} reveal-header`}>
            <span className={styles.tag}>Ironclad Compliance</span>
            <h2 className={styles.title}>
              Data residency and <br />
              multi-layer protection.
            </h2>
            <p className={styles.description}>
              Enterprise-grade security architecture designed to protect sensitive financial data at every layer.
            </p>
          </div>
          <div className={`${styles.isoBadgeContainer} reveal-badge`}>
            <div className={styles.isoBadgeWrapper}>
              <Image 
                src="/images/badge-iso-27001.png"
                alt="ISO 27001 Certified"
                width={80}
                height={80}
                className={styles.isoBadge}
              />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {securityFeatures.map((feature, index) => (
            <div key={index} className={`${styles.card} reveal-card group`}>
              <div className={styles.cardTop}>
                <span className={styles.featureLabel}>{feature.label}</span>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.protocolText}>
                  <span className={styles.check}>✔</span> {feature.protocol}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.complianceBar}>
          {['SOC2', 'GDPR', 'ISO 27001', 'ISO 9001'].map((item, idx) => (
            <div key={idx} className={`${styles.complianceItem} reveal-compliance`}>
              <span className={styles.checkSmall}>✔</span> {item}
            </div>
          ))}
        </div>

        <div className={`${styles.trustLine} reveal-compliance`}>
          Trusted by firms handling high-sensitivity financial operations worldwide.
        </div>
      </div>
    </section>
  );
}
