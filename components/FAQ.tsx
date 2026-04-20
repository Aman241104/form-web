'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FAQ.module.css';

const faqs = [
  {
    category: 'COMPLIANCE',
    q: "How does Caramel ensure US compliance?",
    a: "We operate as a U.S.-based entity with compliant contracts, invoicing, and data protection protocols. Our processes are AICPA-aligned, ensuring zero penalties for 98% of our clients through rigorous IRS monitoring."
  },
  {
    category: 'CLIENTS',
    q: "Who do you typically work with?",
    a: "We partner with U.S. CPA firms, growing accounting practices, and mid-market businesses. Our services are also tailored for PE-backed companies requiring scalable financial operations."
  },
  {
    category: 'INTEGRATION',
    q: "What software stack are your professionals trained in?",
    a: "Our team is proficient in QuickBooks Online, Xero, Sage Intacct, NetSuite, and major US tax platforms like ProConnect and UltraTax. We seamlessly adapt to your firm's specific workflow rituals."
  },
  {
    category: 'OPERATIONS',
    q: "How do you handle the time zone difference?",
    a: "Our teams operate on a hybrid schedule ensuring a minimum of 4 hours overlap with US business hours. This allows for daily syncs, real-time communication, and ritual alignment."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.reveal-left', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    )
    .fromTo('.reveal-faq',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
      '-=0.6'
    );
  }, { scope: sectionRef });

  return (
    <section id="faq" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <span className={`${styles.tag} reveal-left`}>QUICK HELP GUIDE</span>
            <h2 className={`${styles.title} reveal-left`}>
              Common <br />
              Questions.
            </h2>
            <p className={`${styles.description} reveal-left`}>
              Everything you need to know about working with Caramel Advisors — from compliance to collaboration.
            </p>
            
            <div className={`${styles.ctaBlock} reveal-left`}>
              <p className={styles.ctaText}>Still have questions?</p>
              <a href="#contact" className={styles.ctaButton}>
                Contact Support
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.item} reveal-faq ${active === index ? styles.active : ''}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.headerLeft}>
                    <span className={styles.categoryTag}>{faq.category}</span>
                    <h4 className={styles.question}>{faq.q}</h4>
                  </div>
                  <div className={styles.iconWrapper}>
                    <div className={styles.plusIcon}>
                      <div className={styles.line}></div>
                      <div className={styles.line}></div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.answerWrapper}>
                  <div className={styles.answerContent}>
                    <p className={styles.answer}>{faq.a}</p>
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
