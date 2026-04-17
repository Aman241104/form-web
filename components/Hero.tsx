'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<section>(null);
  const titleRef = useRef<divElement>(null);
  const subtextRef = useRef<pElement>(null);
  const ctaRef = useRef<divElement>(null);
  const dotRef = useRef<divElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Stagger reveal for headline lines
    const lines = titleRef.current?.children;
    if (lines) {
      tl.fromTo(lines, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, delay: 0.5 }
      );
    }

    // Subtext reveal
    tl.fromTo(subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.8'
    );

    // CTA reveal
    tl.fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.6'
    );

    // Micro dot animation
    gsap.to(dotRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.radialGlow}></div>
      </div>

      <div className={styles.container}>
        <div ref={titleRef} className={styles.headline}>
          <div className={styles.line}>PRECISION</div>
          <div className={styles.line}>WITHOUT</div>
          <div className={`${styles.line} ${styles.accentLine}`}>
            BORDERS<span ref={dotRef} className={styles.dot}></span>
          </div>
        </div>

        <p ref={subtextRef} className={styles.subtext}>
          Premium offshore financial talent for US CPA firms.<br />
          Integrated expertise at institutional scale.
        </p>

        <div ref={ctaRef} className={styles.ctaWrapper}>
          <a href="#contact" className={styles.primaryBtn}>
            Book Consultation
          </a>
        </div>
      </div>

      <div className={styles.microLine}></div>
    </section>
  );
}
