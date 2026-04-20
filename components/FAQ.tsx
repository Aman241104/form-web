'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FAQ.module.css';

const faqs = [
  {
    category: 'Compliance',
    q: "How does Caramel ensure US compliance?",
    a: "Via AICPA-aligned processes and real-time IRS monitoring—zero penalties for 98% of clients. We maintain rigorous standards to ensure every filing is accurate and timely."
  },
  {
    category: 'Clients',
    q: "Who do you typically work with?",
    a: "We work with U.S. CPA firms, accounting practices, growing and mid-market businesses, and PE-backed companies across industries."
  },
  {
    category: 'Integration',
    q: "What software stack are your professionals trained in?",
    a: "Our team is proficient in QuickBooks Online, Xero, Sage Intacct, NetSuite, and major US tax platforms like ProConnect and UltraTax. We adapt to your firm's specific workflow rituals."
  },
  {
    category: 'Operations',
    q: "How do you handle the time zone difference?",
    a: "Our teams operate on a hybrid schedule that ensures a minimum of 4 hours of overlap with US business hours for daily syncs, real-time communication, and ritual alignment."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
      // Split Title Animation (Character-by-character reveal)
      if (titleRef.current) {
        const text = titleRef.current.innerText;
        titleRef.current.innerHTML = text.split('').map((char: string) => 
          `<span class="faqChar" style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        gsap.fromTo('.faqChar', 
          { opacity: 0, y: 20, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%'
            }
          }
        );
      }

      // Items stagger entrance
      gsap.fromTo('.faqItemReveal', 
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="faq" ref={sectionRef} className={styles.section}>
      <div className={styles.background}>
        <div className={styles.gridLine}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Branding */}
          <div className={styles.left}>
            <div className={styles.sticky}>
              <span className={styles.label}>Quick Help Guide</span>
              <h2 ref={titleRef} className={styles.title}>
                COMMON INQUIRIES
              </h2>
              <div className={styles.progressTrack}>
                <div 
                  className={styles.progressBar} 
                  style={{ height: `${active !== null ? ((active + 1) / faqs.length) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right: Modern Accordion */}
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faqItemReveal ${styles.item} ${active === index ? styles.active : ''}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.itemMeta}>
                    <span className={styles.category}>[{faq.category}]</span>
                    <span className={styles.num}>0{index + 1}</span>
                  </div>
                  <h4 className={styles.questionText}>{faq.q}</h4>
                  <div className={styles.iconWrapper}>
                    <div className={styles.plus}>
                      <div className={styles.line}></div>
                      <div className={styles.line}></div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.answerWrapper}>
                  <div className={styles.answerContent}>
                    <div className={styles.answerInner}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
