'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Services.module.css';
import { services } from '@/data/siteData';

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

  const featuredService = services.find(s => s.featured) || services[0];
  const otherServices = services.filter(s => s.id !== featuredService.id);

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundAtmosphere}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.tag} reveal-header`}>OUR SERVICES</span>
          <h2 className={`${styles.title} reveal-header`}>
            Proven Services <span className={styles.desktopBreak}><br /></span>
            <span className={styles.titleEmphasis}>for Scalable Growth.</span>
          </h2>
          <p className={`${styles.description} reveal-header`}>
            Built for accounting firms and businesses ready to scale efficiently.
          </p>
        </div>

        <div className={styles.layoutGrid}>
          {/* Featured Card */}
          <Link href={`/services/${featuredService.id}`} className={`${styles.featuredCard} reveal-card group`}>
            <div className={styles.depthLayer}></div>
            <div className={styles.featuredContent}>
              <div className={styles.iconWrapper}>
                {featuredService.icon}
              </div>
              <h3 className={styles.featuredTitle}>{featuredService.title}</h3>
              <p className={styles.featuredDesc}>{featuredService.desc}</p>
              
              <div className={styles.cta}>
                EXPLORE SERVICE <span className={styles.arrow}>→</span>
              </div>
            </div>
          </Link>

          {/* Secondary Services Grid */}
          <div className={styles.secondaryGrid}>
            {otherServices.map((service, index) => (
              <Link href={`/services/${service.id}`} key={index} className={`${styles.secondaryCard} reveal-card group`}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.secondaryContent}>
                  <h4 className={styles.secondaryTitle}>{service.title}</h4>
                  <p className={styles.secondaryDesc}>{service.desc}</p>
                </div>
                <div className={styles.smallCta}>
                  <span className={styles.arrow}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
