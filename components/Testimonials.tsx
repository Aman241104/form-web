'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    logo: 'CPA FIRM',
    quote: "We are grateful to the Caramel Advisors team for managing and successfully completing our accounting function and helping us clear an audit from a regional CPA firm. Their expertise and dedication made it possible for us to achieve this – we are truly thankful!",
    author: "Founder – Owner",
    company: "CPA Firm – TX"
  },
  {
    logo: 'CONSULTING',
    quote: "For the past year, Caramel Advisors has been our go-to for all our accounting needs. On top of being very cost-effective, their expertise and ability to effectively collaborate with our teams on workflow planning and execution has been nothing short of remarkable. We are 100% satisfied with the professional services and results Caramel Advisors has provided us.",
    author: "Managing Director",
    company: "Management Consulting Firm – PA"
  },
  {
    logo: 'FINANCE',
    quote: "Caramel Advisors handled our entire accounting function and helped me successfully clear an audit from a regional CPA firm. We couldn’t have done it without Caramel Advisors managing the entire process. Kudos to the team and Thanks!",
    author: "CFO",
    company: "Consumer Lending industry – TX"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
      gsap.fromTo('.testimonialReveal', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );

      // Background image parallax
      gsap.to('.bgImage', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, { scope: sectionRef });

  useEffect(() => {
    // Transition animation when active index changes
    if (!quoteRef.current) return;
    
    const tl = gsap.timeline();
    tl.to(quoteRef.current, {
      opacity: 0,
      filter: 'blur(10px)',
      y: -20,
      duration: 0.4,
      onComplete: () => {
        gsap.fromTo(quoteRef.current, 
          { opacity: 0, filter: 'blur(10px)', y: 20 },
          { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.6, ease: 'power2.out' }
        );
      }
    });
  }, [active]);

  return (
    <section id="testimonials" ref={sectionRef} className={styles.section}>
      <div className={styles.bgContainer}>
        <Image 
          src="/images/team-meeting.png"
          alt="Team Meeting"
          fill
          className={`bgImage ${styles.bgImage}`}
        />
        <div className={styles.bgOverlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={`testimonialReveal ${styles.header}`}>
          <span className={styles.label}>What our Customers Say</span>
        </div>

        <div ref={quoteRef} className={styles.content}>
          <p className={styles.quote}>“{testimonials[active].quote}”</p>
          <div className={styles.meta}>
            <span className={styles.author}>{testimonials[active].author}</span>
            <div className={styles.dot}></div>
            <span className={styles.company}>{testimonials[active].company}</span>
          </div>
        </div>

        <div className={`testimonialReveal ${styles.nav}`}>
          {testimonials.map((t, index) => (
            <button 
              key={index}
              onClick={() => setActive(index)}
              className={`${styles.navBtn} ${active === index ? styles.active : ''}`}
            >
              <span className={styles.btnText}>{t.logo}</span>
              <div className={styles.indicator}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
