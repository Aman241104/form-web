'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

import { getWhatsAppLink } from './StickyWhatsApp';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    ),
    title: 'Bookkeeping & Accounting',
    desc: 'Stay on top of your books with clean, timely records that make sense and keep your business compliant.',
    featured: true
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: 'Tax Preparation',
    desc: 'Handle multi-state returns and compliance without the stress—smooth and spot-on.',
    featured: false
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
    ),
    title: 'FP&A (Planning)',
    desc: 'Turn numbers into action with forecasting and budgeting that drives growth.',
    featured: false
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    title: 'Audit Services',
    desc: 'Get thorough, reliable audits that ensure you are always audit-ready.',
    featured: false
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
    ),
    title: 'Advisory',
    desc: 'Bridging the gap between accounting, valuation, and transactions.',
    featured: false
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.reveal-header', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }
    )
    .fromTo('.reveal-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 },
      '-=0.6'
    );
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundAtmosphere}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.tag} reveal-header`}>OUR SERVICES</span>
          <h2 className={`${styles.title} reveal-header`}>
            Proven Services <br />
            <span className={styles.titleEmphasis}>for Scalable Growth.</span>
          </h2>
          <p className={`${styles.description} reveal-header`}>
            Built for accounting firms and businesses ready to scale efficiently.
          </p>
        </div>

        <div className={styles.layoutGrid}>
          {/* Featured Card */}
          <div className={`${styles.featuredCard} reveal-card group`}>
            <div className={styles.depthLayer}></div>
            <div className={styles.featuredContent}>
              <div className={styles.iconWrapper}>
                {services[0].icon}
              </div>
              <h3 className={styles.featuredTitle}>{services[0].title}</h3>
              <p className={styles.featuredDesc}>{services[0].desc}</p>
              
              <a 
                href={getWhatsAppLink(`Hello Caramel Advisors, I'm interested in ${services[0].title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                EXPLORE SERVICE <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

          {/* Secondary Services Grid */}
          <div className={styles.secondaryGrid}>
            {services.slice(1).map((service, index) => (
              <div key={index} className={`${styles.secondaryCard} reveal-card group`}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.secondaryContent}>
                  <h4 className={styles.secondaryTitle}>{service.title}</h4>
                  <p className={styles.secondaryDesc}>{service.desc}</p>
                </div>
                <a 
                  href={getWhatsAppLink(`Hello Caramel Advisors, I'm interested in ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.smallCta}
                >
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
