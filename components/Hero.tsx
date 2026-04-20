'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Hero.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 0.5, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
    )
    .fromTo('.heroLine', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(subtextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 0.7, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.heroCta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(imageContainerRef.current,
      { opacity: 0, scale: 1.05, rotate: 2 },
      { opacity: 1, scale: 1, rotate: -1, duration: 1.5, ease: 'expo.out' },
      '-=1.2'
    );
  }, { scope: sectionRef });

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      <div className={styles.backgroundLayer}>
        <div className={styles.radialHighlight}></div>
        <div className={styles.grainTexture}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.leftContent}>
            <div ref={badgeRef} className={styles.badge}>
              Serving US-based accounting firms
            </div>

            <div ref={titleRef} className={styles.headline}>
              <div className={`${styles.line} heroLine`}>LET US HANDLE</div>
              <div className={`${styles.line} heroLine`}>THE WORK.</div>
              <div className={`${styles.lineSmall} heroLine`}>You focus on</div>
              <div className={`${styles.line} ${styles.accentLine} heroLine`}>
                FOCUS ON GROWTH
              </div>
            </div>

            <p ref={subtextRef} className={styles.subtext}>
              Unlock Scalable Growth: More Capacity with Expert US Outsourcing for CPA firms and mid-market businesses.
            </p>

            <div ref={ctaRef} className={styles.ctaWrapper}>
              <a 
                href={getWhatsAppLink("Hello Caramel Advisors, I'd like to book a consultation.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.primaryBtn} heroCta`}
              >
                Book Consultation
              </a>
              <a 
                href="#services" 
                className={`${styles.secondaryBtn} heroCta`}
              >
                Explore Services
              </a>
            </div>
          </div>

          <div ref={imageContainerRef} className={styles.rightContent}>
            <div className={styles.imageCard}>
              <Image 
                src="/images/office-discussion.png" 
                alt="Professional Team Collaboration" 
                width={700} 
                height={500} 
                priority 
                className={styles.heroImage}
              />
              <div className={styles.glassGlow}></div>
            </div>
            <div className={styles.imageBgDepth}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
