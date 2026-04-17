'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HowWeWork.module.css';

const steps = [
  {
    num: '01',
    title: 'Precision Discovery',
    desc: 'We analyze your capacity bottlenecks and tech stack requirements.'
  },
  {
    num: '02',
    title: 'Talent Matching',
    desc: 'Matching your firm with strictly top-tier Chartered Accountants.'
  },
  {
    num: '03',
    title: 'Secure Onboarding',
    desc: 'Establishing encrypted tunnels and data residency controls.'
  },
  {
    num: '04',
    title: 'Seamless Integration',
    desc: 'Direct integration into your daily rituals and financial software.'
  }
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.from('.headerReveal', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });

      // Steps Stagger Reveal (Left -> Right)
      gsap.from('.stepReveal', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`headerReveal ${styles.header}`}>
          <span className={styles.label}>Execution Model</span>
          <h2 className={styles.title}>The Caramel Blueprint<span className={styles.dot}>.</span></h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={`stepReveal ${styles.stepItem}`}>
              <div className={styles.divider}></div>
              <div className={styles.content}>
                <span className={styles.stepNum}>{step.num}</span>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
