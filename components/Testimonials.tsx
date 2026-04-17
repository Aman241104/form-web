'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    logo: 'RAMP',
    quote: "Caramel Advisors transformed our audit capacity overnight. Their integration with our tech stack was seamless, delivering precision at a scale we didn't think possible.",
    author: "Head of Engineering",
    company: "Ramp Financial"
  },
  {
    logo: 'OPENAI',
    quote: "The precision and trust they radiate is unparalleled in the offshore sector. They function not as a vendor, but as a core strategic extension of our finance team.",
    author: "Gabriel Peal",
    company: "OpenAI"
  },
  {
    logo: 'MERCURY',
    quote: "Our speed is intense, and Caramel helps us maintain that action bias without compromising quality. They are the gold standard for institutional offshore talent.",
    author: "CFO",
    company: "Mercury Banking"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial entrance
      gsap.from('.testimonialReveal', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      <div className={styles.bgText}>TRUST</div>
      
      <div className={styles.container}>
        <div className={`testimonialReveal ${styles.header}`}>
          <span className={styles.label}>Institutional Endorsements</span>
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
