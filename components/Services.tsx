'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';

import { getWhatsAppLink } from './StickyWhatsApp';

const services = [
  {
    label: 'TX',
    title: 'Tax Preparation',
    desc: 'Scalable support for US 1040, 1120, and 1065 compliance during peak seasons. Integrated expertise for domestic CPA firms.',
    featured: true
  },
  {
    label: 'AD',
    title: 'Audit Support',
    desc: 'Substantive testing and workpaper preparation with bank-level security protocols.',
    featured: false
  },
  {
    label: 'CF',
    title: 'Virtual CFO',
    desc: 'Strategic advisory, KPI dashboarding, and cash flow forecasting for high-growth enterprises.',
    featured: false
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
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
          stagger: 0.15,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`headerReveal ${styles.header}`}>
          <h2 className={styles.title}>
            Solutions engineered<br />
            for <span className={styles.highlight}>modern finance.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left: Featured Card */}
          <div className={`serviceCard ${styles.card} ${styles.featuredCard}`}>
            <span className={styles.serviceLabel}>{services[0].label}</span>
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

          {/* Right: Stacked Cards */}
          <div className={styles.rightStack}>
            {services.slice(1).map((service, index) => (
              <div key={index} className={`serviceCard ${styles.card}`}>
                <span className={styles.serviceLabel}>{service.label}</span>
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
