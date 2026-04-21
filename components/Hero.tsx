'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Hero.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo('.reveal-hero', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power3.out', delay: 0.5 }
    )
    .fromTo(rightRef.current,
      { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' },
      '-=0.8'
    );
  }, { scope: sectionRef });

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      <div className={styles.backgroundLayer}>
        <div className={styles.glowEffect}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column: Content */}
          <div ref={leftRef} className={styles.leftContent}>
            <div className="reveal-hero">
              <span className={styles.tag}>SERVING US-BASED ACCOUNTING FIRMS</span>
            </div>
            
            <h1 className={`${styles.headline} reveal-hero`}>
              <span className={styles.main}>LET US HANDLE THE WORK</span>
              FOCUS ON <span className={styles.highlight}>GROWTH.</span>
            </h1>
            
            <p className={`${styles.subtext} reveal-hero`}>
              Unlock Scalable Growth: More Capacity with Expert US Outsourcing for CPA firms and mid-market businesses.
            </p>

            <div className={`${styles.ctaGroup} reveal-hero`}>
              <a 
                href={getWhatsAppLink("Hello Elite Cloud Books, I'd like to book a consultation.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.primaryBtn}
              >
                Book Consultation
              </a>
              <a 
                href="/services" 
                className={styles.secondaryBtn}
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div ref={rightRef} className={styles.rightContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageOverlay}></div>
              <Image 
                src="/images/team-collab.png" 
                alt="Elite Cloud Books Professional Team" 
                width={800} 
                height={600} 
                priority 
                className={styles.heroImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
            <div className={styles.floatingGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
