'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Leadership.module.css';

const leaders = [
  {
    name: 'Deep Parmar',
    role: 'Founder, CEO',
    image: '/images/team-leaders.png',
  },
  {
    name: 'Rajat Shah',
    role: 'Founder, COO',
    image: '/images/team-meeting.png',
  },
  {
    name: 'Charmi Shah',
    role: 'Chartered Accountant',
    image: '/images/team-collab.png',
  },
];

export default function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    // Animate Header
    tl.fromTo(
      '.reveal-header',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    );

    // Animate Member Blocks
    tl.fromTo(
      '.reveal-member',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15 },
      '-=0.6'
    );

    // Image reveal scale effect
    tl.fromTo(
      '.reveal-image',
      { scale: 1.1 },
      { scale: 1, duration: 1.5, ease: 'power3.out' },
      '-=1.2'
    );
  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.sectionLabel} reveal-header`}>People Who Lead Us</span>
          <h2 className={`${styles.title} reveal-header`}>
            Leadership <br />
            <span className={styles.titleEmphasis}>Team.</span>
          </h2>
          <p className={`${styles.introText} reveal-header`}>
            A team built on experience, precision, and trust.
          </p>
        </div>

        <div className={styles.grid}>
          {leaders.map((leader, index) => (
            <div key={index} className={`${styles.memberBlock} reveal-member group`}>
              <div className={styles.imageContainer}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className={`${styles.image} reveal-image`}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.info}>
                <h4 className={styles.name}>{leader.name}</h4>
                <p className={styles.role}>{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
