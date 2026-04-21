'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    shortQuote: "Elite Cloud Books transformed our accounting operations and helped us clear a complex audit with confidence.",
    fullQuote: "We are grateful to the Elite Cloud Books team for managing and successfully completing our accounting function and helping us clear an audit from a regional CPA firm. Their expertise and dedication made it possible for us to achieve this.",
    name: "John Carter",
    role: "Founder",
    company: "CPA Firm — Texas",
    avatar: "/images/team-leaders.png"
  },
  {
    shortQuote: "Their expertise and ability to collaborate on workflow planning has been remarkable. 100% satisfied with the results.",
    fullQuote: "For the past year, Elite Cloud Books has been our go-to for all our accounting needs. On top of being very cost-effective, their expertise and ability to effectively collaborate with our teams on workflow planning and execution has been nothing short of remarkable.",
    name: "Sarah Jenkins",
    role: "Managing Director",
    company: "Consulting Group — PA",
    avatar: "/images/team-meeting.png"
  },
  {
    shortQuote: "We couldn’t have done it without Elite Cloud Books managing the entire process. They are our go-to for all accounting needs.",
    fullQuote: "Elite Cloud Books handled our entire accounting function and helped me successfully clear an audit from a regional CPA firm. We couldn’t have done it without Elite Cloud Books managing the entire process. Kudos to the team and Thanks!",
    name: "Michael Chen",
    role: "CFO",
    company: "Consumer Lending — TX",
    avatar: "/images/team-collab.png"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.testimonialReveal', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      }
    );
  }, { scope: sectionRef });

  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(cardRef.current, 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [active]);

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className={styles.section}>
      <div className={styles.bgContainer}>
        <Image 
          src="/images/harbor-sunset.png"
          alt="Background"
          fill
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={`testimonialReveal ${styles.header}`}>
          <span className={styles.tag}>What our Customers Say</span>
        </div>

        <div className={`testimonialReveal ${styles.cardWrapper}`}>
          <div ref={cardRef} className={styles.card}>
            <div className={styles.quoteMark}>“</div>
            
            <div className={styles.content}>
              <h3 className={styles.mainQuote}>
                {testimonials[active].shortQuote}
              </h3>
              <p className={styles.fullQuote}>
                {testimonials[active].fullQuote}
              </p>
            </div>

            <div className={styles.clientIdentity}>
              <div className={styles.avatarWrapper}>
                <Image 
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.clientInfo}>
                <h4 className={styles.name}>{testimonials[active].name}</h4>
                <p className={styles.role}>{testimonials[active].role}, {testimonials[active].company}</p>
              </div>
            </div>
          </div>

          <div className={styles.navigation}>
            <button onClick={prevTestimonial} className={styles.navArrow} aria-label="Previous testimonial">
              ←
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActive(index)}
                  className={`${styles.dot} ${active === index ? styles.activeDot : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className={styles.navArrow} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
