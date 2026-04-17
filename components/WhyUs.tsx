'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyUs.module.css';

const points = [
  {
    num: '01',
    title: 'Elite Talent Pool',
    desc: 'We hire strictly top-tier Chartered Accountants trained in US GAAP and tax laws.'
  },
  {
    num: '02',
    title: 'Zero-Friction Integration',
    desc: 'Our professionals adapt to your tech stack—QBO, Xero, NetSuite—seamlessly.'
  },
  {
    num: '03',
    title: 'Bank-Level Security',
    desc: 'Multi-layered protocols including CISM leadership and restricted data residency.'
  }
];

export default function WhyUs() {
  const sectionRef = useRef<section>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Left side: fade + slide from left
      gsap.from('.whyUsLeft', {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Right side: stagger reveal using class selector
      gsap.from('.whyUsPoint', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={`whyUsLeft ${styles.left}`}>
            <span className={styles.label}>The Difference</span>
            <h2 className={styles.title}>
              Institutional trust meets<br />
              <span className={styles.highlight}>offshore agility.</span>
            </h2>
            <p className={styles.paragraph}>
              We don&apos;t just provide staff; we build strategic talent extensions. 
              Our model is built on unshakeable pillars of precision and accountability.
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.right}>
            {points.map((point, index) => (
              <div key={index} className={`whyUsPoint ${styles.pointItem}`}>
                <div className={styles.divider}></div>
                <div className={styles.pointContent}>
                  <span className={styles.pointNum}>{point.num}</span>
                  <div className={styles.pointText}>
                    <h4 className={styles.pointTitle}>{point.title}</h4>
                    <p className={styles.pointDesc}>{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.divider}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
