'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Industries.module.css';

const industries = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    name: 'CPA & Accounting Firms',
    desc: 'Empowering accounting practices with scalable offshore talent extensions.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    name: 'Healthcare & Dental Groups',
    desc: 'Specialized financial controls for multi-site medical and dental operations.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
    name: 'Manufacturing & Textile',
    desc: 'Inventory management and cost accounting for high-volume producers.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    name: 'Construction & Real Estate',
    desc: 'Project-based accounting and financial oversight for developers.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    name: 'Technology & SaaS',
    desc: 'Revenue recognition and KPI dashboarding for high-growth tech firms.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    name: 'Consumer Lending',
    desc: 'Comprehensive accounting support for financial services and lending groups.'
  }
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Header Animation
    gsap.fromTo('.industryHeader', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      }
    );

    // Staggered list items reveal using class selector
    gsap.fromTo('.industryItemReveal', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      }
    );

    // Background text parallax
    gsap.fromTo('.industryBgText', 
      { x: '-10%', opacity: 0 },
      { 
        x: '5%', 
        opacity: 0.05, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      }
    );

    // Background image parallax
    gsap.fromTo('.industryBgImage',
      { y: '-10%', opacity: 0 },
      {
        y: '10%',
        opacity: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="industries" ref={sectionRef} className={styles.section}>
      {/* Background Parallax Text */}
      <div className={`industryBgText ${styles.backgroundText}`}>
        INDUSTRIES
      </div>

      <div className={`industryBgImage ${styles.backgroundImage}`}>
        <Image 
          src="/images/business-icons-overlay.png"
          alt="Business Verticals"
          fill
          className={styles.bgImg}
        />
      </div>

      <div className={styles.container}>
        <div className={`industryHeader ${styles.header}`}>
          <span className={styles.label}>Specialized Verticals</span>
          <h2 className={styles.title}>
            Tailored for your sector<span className={styles.red}>.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <div key={index} className={`industryItemReveal ${styles.card}`}>
              <div className={styles.iconWrapper}>{industry.icon}</div>
              <h4 className={styles.itemName}>{industry.name}</h4>
              <p className={styles.itemDesc}>{industry.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.learnMore}>Explore Vertical →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
