'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Overview.module.css';

export default function Overview() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.revealText', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.revealStat',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      '-=1.2'
    );
  }, { scope: sectionRef });

  return (
    <section id="overview" ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundLayer}>
        <div className={styles.radialHighlight}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <div ref={contentRef} className={styles.left}>
            <span className={`${styles.label} revealText`}>ABOUT US</span>
            
            <h2 className={`${styles.title} revealText`}>
              Your Strategic <br />
              <span className={styles.titleEmphasis}>Finance Ally.</span>
            </h2>
            
            <div className={`${styles.paragraphWrapper} revealText`}>
              <p className={styles.paragraph}>
                Founded in 2021 as a dedicated U.S. entity, Caramel Advisors unites more than 100 years of combined partner experience.
              </p>
              <p className={styles.paragraph}>
                We guide accounting firms and businesses through their most pressing financial needs and day-to-day operational challenges with precision.
              </p>
            </div>

            <div className={`${styles.credibility} revealText`}>
              Trusted by 200+ accounting firms
            </div>

            <div ref={statsRef} className={styles.statsGrid}>
              <div className={`${styles.statItem} revealStat`}>
                <span className={styles.num}>100+</span>
                <span className={styles.statLabel}>Partner Exp.</span>
              </div>
              <div className={`${styles.statItem} revealStat`}>
                <span className={styles.num}>100+</span>
                <span className={styles.statLabel}>Professionals</span>
              </div>
              <div className={`${styles.statItem} revealStat`}>
                <span className={styles.num}>2021</span>
                <span className={styles.statLabel}>Founded</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div ref={imageRef} className={styles.right}>
            <div className={styles.imageCard}>
              <div className={styles.imageOverlay}></div>
              <Image 
                src="/images/office-discussion.png"
                alt="Caramel Advisors Team"
                width={800}
                height={1000}
                className={styles.image}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className={styles.leadershipSection}>
          <div className={styles.leadershipHeader}>
            <span className={styles.label}>People Who Lead Us</span>
            <h2 className={styles.leadershipTitle}>Leadership Team</h2>
          </div>
          
          <div className={styles.leadershipGrid}>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImageWrapper}>
                <Image src="/images/team-leaders.png" alt="Deep Parmar" fill className={styles.leaderImage} />
              </div>
              <h4 className={styles.leaderName}>Deep Parmar</h4>
              <p className={styles.leaderRole}>Founder, CEO</p>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImageWrapper}>
                <Image src="/images/team-meeting.png" alt="Rajat Shah" fill className={styles.leaderImage} />
              </div>
              <h4 className={styles.leaderName}>Rajat Shah</h4>
              <p className={styles.leaderRole}>Founder, COO</p>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImageWrapper}>
                <Image src="/images/team-collab.png" alt="Charmi Shah" fill className={styles.leaderImage} />
              </div>
              <h4 className={styles.leaderName}>Charmi Shah</h4>
              <p className={styles.leaderRole}>Chartered Accountant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
