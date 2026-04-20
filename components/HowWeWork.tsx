'use client';

import { useRef } from 'react';
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

    // Steps Reveal
    tl.fromTo('.reveal-step',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      '-=0.6'
    );

    // Image Reveal
    tl.fromTo(imageRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      '-=1'
    );
  }, { scope: sectionRef });

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.label} reveal-header`}>Execution Model</span>
          <h2 className={`${styles.title} reveal-header`}>
            The Caramel <br />
            Blueprint<span className={styles.dot}>.</span>
          </h2>
        </div>

        <div className={styles.mainGrid}>
          {/* Left Column: Steps */}
          <div className={styles.stepsContainer}>
            <div className={styles.timeline}></div>
            {steps.map((step, index) => (
              <div key={index} className={`${styles.stepItem} reveal-step group`}>
                <div className={styles.stepIndicator}>
                  <div className={styles.stepCircle}>{step.num}</div>
                  <div className={styles.highlightLine}></div>
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual */}
          <div ref={imageRef} className={styles.imageSection}>
            <div className={styles.imageCard}>
              <div className={styles.imageGlow}></div>
              <Image 
                src="/images/ca-notebook.png" // Replaced blob with notebook as placeholder for clean rectangular visual
                alt="Process Visual"
                width={800}
                height={1000}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
