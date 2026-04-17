'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Industries.module.css';

const industries = [
  'Healthcare & Pharma',
  'Real Estate Funds',
  'SaaS & Technology',
  'High-Growth Fintech',
  'Manufacturing & Logistics'
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.industryHeader', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      });

      // Staggered list items reveal using class selector
      gsap.from('.industryItemReveal', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      });

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="industries" ref={sectionRef} className={styles.section}>
      {/* Background Parallax Text */}
      <div className={`industryBgText ${styles.backgroundText}`}>
        INDUSTRIES
      </div>

      <div className={styles.container}>
        <div className={`industryHeader ${styles.header}`}>
          <span className={styles.label}>Specialized Verticals</span>
          <h2 className={styles.title}>
            Tailored for your sector<span className={styles.red}>.</span>
          </h2>
        </div>

        <div className={styles.list}>
          {industries.map((industry, index) => (
            <div key={index} className={`industryItemReveal ${styles.listItem}`}>
              <div className={styles.itemContent}>
                <span className={styles.itemNum}>0{index + 1}</span>
                <h4 className={styles.itemName}>{industry}</h4>
                <div className={styles.glow}></div>
              </div>
              <div className={styles.divider}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
