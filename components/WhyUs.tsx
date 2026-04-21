'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyUs.module.css';

const points = [
  {
    num: '01',
    title: 'U.S. Accountability',
    desc: 'Domestic contracts and invoicing providing the legal security you expect from a U.S. entity.'
  },
  {
    num: '02',
    title: 'Expert Delivery',
    desc: 'Chartered Accountant-led delivery team in India ensuring high-precision accounting and tax work.'
  },
  {
    num: '03',
    title: 'Scalable & Secure',
    desc: 'Safe, predictable support with deep expertise across all leading cloud accounting platforms.'
  },
  {
    num: '04',
    title: 'Proven Track Record',
    desc: '15+ years of partner experience and 100+ professionals helping firms scale with confidence.'
  }
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Left side animations
    tl.fromTo('.reveal-left', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    );

    // Right list animations
    tl.fromTo('.reveal-point',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
      '-=0.6'
    );
  }, { scope: sectionRef });

  return (
    <section id="why-us" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <span className={`${styles.tag} reveal-left`}>WHY CHOOSE US</span>
            <h2 className={`${styles.title} reveal-left`}>
              Why Choose <span className={styles.desktopBreak}><br /></span>
              <span className={styles.titleEmphasis}>Caramel Advisors.</span>
            </h2>
            <p className={`${styles.description} reveal-left`}>
              We combine U.S. accountability with global delivery excellence — built for scale, precision, and long-term growth.
            </p>

            <div className={`${styles.imageContainer} reveal-left`}>
              <Image 
                src="/images/team-leaders.png"
                alt="Caramel Advisors Team"
                width={800}
                height={500}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.pointsList}>
              {points.map((point, index) => (
                <div key={index} className={`${styles.pointCard} reveal-point group`}>
                  <div className={styles.accentLine}></div>
                  <span className={styles.pointNum}>{point.num}</span>
                  <div className={styles.pointContent}>
                    <h4 className={styles.pointTitle}>{point.title}</h4>
                    <p className={styles.pointDesc}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
