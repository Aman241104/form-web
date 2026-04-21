'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Industries.module.css';
import { industries } from '@/data/siteData';

export default function Industries() {
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

    // Cards Reveal
    tl.fromTo('.reveal-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      '-=0.6'
    );

    // Background text parallax
    gsap.fromTo('.industryBgText', 
      { x: '-10%', opacity: 0 },
      { 
        x: '2%', 
        opacity: 0.03, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="industries" ref={sectionRef} className={styles.section}>
      {/* Background Parallax Text - Barely visible texture */}
      <div className={`industryBgText ${styles.backgroundText}`}>
        VERTICALS
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.tag} reveal-header`}>SPECIALIZED VERTICALS</span>
          <h2 className={`${styles.title} reveal-header`}>
            Tailored for <span className={styles.desktopBreak}><br /></span>
            <span className={styles.titleEmphasis}>Critical Sectors.</span>
          </h2>

          <p className={`${styles.description} reveal-header`}>
            Specialized expertise across industries — built for scale, compliance, and performance.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <Link 
              href={`/industries/${industry.id}`}
              key={index} 
              className={`${styles.card} reveal-card group ${index === 0 ? styles.featuredCard : ''}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={styles.accentLine}></div>
              <div className={styles.glowOverlay}></div>
              
              <div className={styles.iconContainer}>
                {industry.icon}
              </div>
              
              <div className={styles.content}>
                <h4 className={styles.cardTitle}>{industry.name}</h4>
                <p className={styles.cardDesc}>{industry.desc}</p>
              </div>
              
              <div className={styles.cta}>
                Explore Vertical <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
