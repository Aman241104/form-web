'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Overview.module.css';

const stats = [
  { value: '100+', label: 'Partner Exp.' },
  { value: '100+', label: 'Professionals' },
  { value: '2021', label: 'Founded' },
];

export default function Overview() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(imageRef.current,
      { opacity: 0, x: -40, rotate: 1 },
      { opacity: 1, x: 0, rotate: -1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo('.reveal-about', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo('.reveal-stat-about',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );
  }, { scope: sectionRef });

  return (
    <section id="overview" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column: Grounded Image */}
          <div ref={imageRef} className={styles.leftColumn}>
            <div className={styles.imageCard}>
              <div className={styles.imageOverlay}></div>
              <Image 
                src="/images/office-discussion.png"
                alt="Caramel Advisors Team"
                width={700}
                height={900}
                className={styles.aboutImage}
              />
              <div className={styles.imageInnerGlow}></div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div ref={contentRef} className={styles.rightColumn}>
            <span className={`${styles.tag} reveal-about`}>ABOUT US</span>
            
            <h2 className={`${styles.title} reveal-about`}>
              Your Strategic <br />
              <span className={styles.titleEmphasis}>Finance Ally.</span>
            </h2>
            
            <div className={`${styles.divider} reveal-about`}></div>

            <div className={`${styles.paragraphWrapper} reveal-about`}>
              <p className={styles.paragraph}>
                Founded in 2021 as a dedicated U.S. entity, Caramel Advisors unites more than 100 years of combined partner experience.
              </p>
              <p className={styles.paragraph}>
                We guide accounting firms and businesses through their most pressing financial needs and day-to-day operational challenges with precision.
              </p>
            </div>

            <div className={`${styles.credibility} reveal-about`}>
              Trusted by 200+ accounting firms worldwide
            </div>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <div key={idx} className={`${styles.statItem} reveal-stat-about`}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
