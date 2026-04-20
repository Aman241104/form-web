'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
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
    title: 'Direct Partnership',
    desc: 'Integrated extension of your team with direct communication and sync.'
  },
  {
    num: '04',
    title: 'White-Label Option',
    desc: 'Seamlessly flex behind your brand for a consistent client experience.'
  }
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      // Header Reveal
      gsap.fromTo('.headerReveal', 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );

      // Steps Stagger Reveal (Left -> Right)
      gsap.fromTo('.stepReveal', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.9, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`headerReveal ${styles.header}`}>
          <span className={styles.label}>Execution Model</span>
          <h2 className={styles.title}>The Caramel Blueprint<span className={styles.dot}>.</span></h2>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.stepsGrid}>
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

          <div ref={imageRef} className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/presentation-blob.png"
                alt="Process Presentation"
                width={600}
                height={600}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
