'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyUs.module.css';

const points = [
  {
    num: '01',
    title: 'U.S. Accountability',
    desc: 'As a U.S. Entity offering domestic contracts and invoicing, we provide the legal security you expect.'
  },
  {
    num: '02',
    title: 'Expert Delivery',
    desc: 'Backed by a Chartered Accountant-led delivery team in India for high-precision accounting.'
  },
  {
    num: '03',
    title: 'Scalable & Secure',
    desc: 'Delivering secure, scalable, and predictable support with deep expertise across leading tools.'
  },
  {
    num: '04',
    title: 'Proven Experience',
    desc: 'With 15+ years of experience and 100+ professionals helping firms scale with confidence.'
  }
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      // Left side: fade + slide from left
      gsap.fromTo('.whyUsLeft', 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          }
        }
      );

      // Right side: stagger reveal using class selector
      gsap.fromTo('.whyUsPoint', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          }
        }
      );

      // Image reveal
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="why-us" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={`whyUsLeft ${styles.left}`}>
            <span className={styles.label}>Why Choose Us</span>
            <h2 className={styles.title}>
              Caramel <br />
              <span className={styles.highlight}>Advisors?</span>
            </h2>
            <p className={styles.paragraph}>
              We combine U.S. accountability with global delivery excellence—straightforward, battle-tested solutions built to let you focus on growth, not grind.
            </p>

            <div ref={imageRef} className={styles.imageWrapper}>
              <Image 
                src="/images/team-leaders.png"
                alt="Leadership Team"
                width={600}
                height={400}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
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
