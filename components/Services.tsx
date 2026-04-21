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

  // Typescript check for features
  interface Service {
    id: string;
    title: string;
    desc: string;
    features?: string[];
    featured?: boolean;
    icon: React.ReactNode;
  }

  const featuredService = (services as Service[]).find(s => s.featured) || (services as Service[])[0];
  const otherServices = (services as Service[]).filter(s => s.id !== featuredService.id);

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundAtmosphere}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.tag} reveal-header`}>PRECISION SOLUTIONS</span>
          <h2 className={`${styles.title} reveal-header`}>
            Specialized Services <span className={styles.desktopBreak}><br /></span>
            <span className={styles.titleEmphasis}>for Modern Firms.</span>
          </h2>
          <p className={`${styles.description} reveal-header`}>
            Elite Cloud Books provides institutional-grade accounting infrastructure designed to scale with your firm.
          </p>
        </div>

        <div className={styles.layoutGrid}>
          {/* Featured Card */}
          <Link href={`/services/${featuredService.id}`} className={`${styles.featuredCard} reveal-card group`}>
            <div className={styles.featuredTop}>
              <div className={styles.iconWrapper}>
                {featuredService.icon}
              </div>
              <h3 className={styles.featuredTitle}>{featuredService.title}</h3>
              <p className={styles.featuredDesc}>{featuredService.desc}</p>
              
              {featuredService.features && (
                <ul className={styles.featuresList}>
                  {featuredService.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.bullet}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className={styles.cta}>
              EXPLORE SERVICE <span className={styles.arrow}>→</span>
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
                
                {service.features && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                        {service.features.slice(0, 2).map((f, i) => (
                            <span key={i} style={{ fontSize: '10px', padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'rgba(255,255,255,0.5)' }}>
                                {f}
                            </span>
                        ))}
                    </div>
                )}

                <div className={styles.cta}>
                  Learn More <span className={styles.arrow}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
