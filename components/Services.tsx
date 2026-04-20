'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

import { getWhatsAppLink } from './StickyWhatsApp';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    ),
    title: 'Bookkeeping & Accounting',
    desc: 'Stay on top of your books with clean, timely records that make sense and keep your business compliant.',
    featured: true
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: 'Tax Preparation',
    desc: 'Handle multi-state returns and compliance without the stress—smooth, spot-on, and always compliant.',
    featured: false
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
    ),
    title: 'FP&A (Financial Planning)',
    desc: 'Turn numbers into action with forecasting, budgeting, and scenario planning that drives growth.',
    featured: false
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    title: 'Audit Services',
    desc: 'Get thorough, reliable audits that uncover insights and ensure you are audit-ready, without the hassle.',
    featured: false
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
    ),
    title: 'Advisory Services',
    desc: 'Bridging the Gap Between Accounting, Valuation, and Transactions in today’s deal environment.',
    featured: false
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header Animation
      gsap.fromTo('.headerReveal', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Cards Stagger Reveal using class selectors within context
      gsap.fromTo('.serviceCard', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Background image parallax
      gsap.fromTo(bgImageRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 0.1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div ref={bgImageRef} className={styles.backgroundImage}>
        <Image 
          src="/images/ca-notebook.png"
          alt="Professional Notebook"
          width={800}
          height={600}
          className={styles.bgImg}
        />
      </div>

      <div className={styles.container}>
        <div className={`headerReveal ${styles.header}`}>
          <h2 className={styles.title}>
            Proven Services for Accounting Pros &<br />
            Business Owners <span className={styles.highlight}>Ready to Scale.</span>
          </h2>
          <p className={styles.description}>
            We know one approach doesn&apos;t rule them all, so we flex between Direct Partnership and White-Label Options to suit your firm&apos;s unique workflow.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Featured Card */}
          <div className={`serviceCard ${styles.card} ${styles.featuredCard}`}>
            <div className={styles.serviceIcon}>{services[0].icon}</div>
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{services[0].title}</h3>
              <p className={styles.serviceDesc}>{services[0].desc}</p>
            </div>
            <a 
              href={getWhatsAppLink(`Hello Caramel Advisors, I'm interested in learning more about your ${services[0].title} services.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Explore Service <span className={styles.arrow}>→</span>
            </a>
          </div>

          {/* Right: Grid of Cards */}
          <div className={styles.rightGrid}>
            {services.slice(1).map((service, index) => (
              <div key={index} className={`serviceCard ${styles.card}`}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <a 
                  href={getWhatsAppLink(`Hello Caramel Advisors, I'm interested in learning more about your ${service.title} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Explore Service <span className={styles.arrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
