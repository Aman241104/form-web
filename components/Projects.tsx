'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';
import { projects } from '@/data/siteData';

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
              Financial <span className={styles.desktopBreak}><br /></span>
              Success <span className={styles.desktopBreak}><br /></span>
              <span className={styles.titleEmphasis}>Stories.</span>
            </h2>
            <p className={styles.supportingText}>
              Real results from firms we&apos;ve partnered with — across industries, built for scale.
            </p>
            <Link href="/projects" className={styles.cta}>
              View All Case Studies <span className={styles.arrow}>→</span>
            </Link>
          </div>

          {/* Right Cards Grid */}
          <div className={styles.cardsGrid}>
            {projects.map((project, index) => (
              <Link href={`/projects/${project.id}`} key={index} className={`${styles.card} reveal-project group`}>
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
                  
                  <div className={styles.metricsStack}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className={styles.metricItem}>
                        <span className={styles.metricValue}>{metric.value}</span>
                        <span className={styles.metricLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
