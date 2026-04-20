'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

const projects = [
  {
    category: 'Construction',
    title: 'Financial Controls for a Seattle Firm',
    subtext: 'Optimized internal controls and cash flow management for a premier commercial construction group.',
    metrics: [
      { label: 'Efficiency', value: '+32%' },
      { label: 'Cost', value: '-18%' },
      { label: 'Scalability', value: '3x' }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Manufacturing',
    title: 'Efficiency for Textile Manufacturer',
    subtext: 'Streamlined multi-state tax compliance and inventory accounting for a large-scale manufacturer.',
    metrics: [
      { label: 'Precision', value: '99.9%' },
      { label: 'Reporting', value: '2x Faster' },
      { label: 'Compliance', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Healthcare',
    title: 'Harmonizing Multi-Site Dental Group',
    subtext: 'Consolidated financial reporting across 12 locations to provide a unified view of performance.',
    metrics: [
      { label: 'Growth', value: '+45%' },
      { label: 'Audit Ready', value: 'Yes' },
      { label: 'ROI', value: '250%' }
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'SaaS',
    title: 'Fractional CFO for Tech Startup',
    subtext: 'Strategic financial leadership for a Series B SaaS company focusing on unit economics.',
    metrics: [
      { label: 'Burn Rate', value: '-22%' },
      { label: 'Runway', value: '+12mo' },
      { label: 'LTV/CAC', value: '4.2x' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.reveal-intro', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    )
    .fromTo('.reveal-project',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15 },
      '-=0.6'
    );
  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Intro Block */}
          <div className={`${styles.introBlock} reveal-intro`}>
            <span className={styles.tag}>CASE STUDIES</span>
            <h2 className={styles.title}>
              Financial <br />
              Success <br />
              <span className={styles.titleEmphasis}>Stories.</span>
            </h2>
            <p className={styles.supportingText}>
              Real results from firms we&apos;ve partnered with — across industries, built for scale.
            </p>
            <a href="#contact" className={styles.cta}>
              View All Case Studies <span className={styles.arrow}>→</span>
            </a>
          </div>

          {/* Right Cards Grid */}
          <div className={styles.cardsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={`${styles.card} reveal-project group`}>
                <div className={styles.imageLayer}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className={styles.image} 
                  />
                  <div className={styles.overlay}></div>
                </div>
                
                <div className={styles.contentLayer}>
                  <span className={styles.categoryTag}>{project.category}</span>
                  <h4 className={styles.cardTitle}>{project.title}</h4>
                  <p className={styles.cardSubtext}>{project.subtext}</p>
                  
                  <div className={styles.metricsStack}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className={styles.metricItem}>
                        <span className={styles.metricValue}>{metric.value}</span>
                        <span className={styles.metricLabel}>{metric.label}</span>
                      </div>
                    ))}
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
