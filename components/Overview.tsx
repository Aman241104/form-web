'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Overview.module.css';

export default function Overview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
      // Left Content Animation
      gsap.from('.overviewContent', {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      });

      // Stats Stagger Animation
      gsap.from('.statItemReveal', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      });

      // Count-up Animation for Numbers
      const numbers = gsap.utils.toArray('.statNum');
      numbers.forEach((num: any) => {
        const targetValue = parseInt(num.getAttribute('data-value') || '0');
        gsap.fromTo(num, 
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
            scrollTrigger: {
              trigger: num,
              start: 'top 90%',
            },
            onUpdate: function() {
              const val = Math.ceil(Number(this.targets()[0].innerText));
              num.innerHTML = val + (num.getAttribute('data-suffix') || '');
            }
          }
        );
      });
    }, { scope: sectionRef });

  return (
    <section id="overview" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <div className={`overviewContent ${styles.left}`}>
            <span className={styles.label}>Firm Overview</span>
            <h2 className={styles.title}>
              Strategic scaling<br />
              for the modern<br />
              economy.
            </h2>
            <p className={styles.paragraph}>
              Founded in 2017, Caramel Advisors bridges the critical talent gap in North American finance. 
              We operate as an integrated extension of your team, providing institutional-grade expertise 
              without the overhead of local recruitment.
            </p>
          </div>

          {/* Right Column: Stats */}
          <div className={styles.right}>
            <div className={`statItemReveal ${styles.statItem}`}>
              <span className={`statNum ${styles.num}`} data-value="250" data-suffix="+">0</span>
              <span className={styles.statLabel}>CAs & CPAs</span>
            </div>
            <div className={`statItemReveal ${styles.statItem}`}>
              <span className={`statNum ${styles.num}`} data-value="500" data-suffix="M+">0</span>
              <span className={styles.statLabel}>Capital Advised</span>
            </div>
            <div className={`statItemReveal ${styles.statItem}`}>
              <span className={`statNum ${styles.num}`} data-value="15" data-suffix="+">0</span>
              <span className={styles.statLabel}>US States Reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
