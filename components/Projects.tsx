'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

const projects = [
  {
    category: 'Construction',
    title: 'Financial Controls for a Seattle Firm',
    result: 'Commercial construction company in Seattle',
    image: 'https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Manufacturing',
    title: 'Efficiency for Textile Manufacturer',
    result: 'Textile manufacturer in North Carolina',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'Healthcare',
    title: 'Harmonizing Multi-Site Dental Group',
    result: 'Dental services group in Denver',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Projects() {
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
          }
        }
      );

      // Cards Stagger Reveal using class-based selector
      gsap.fromTo('.projectCard', 
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`headerReveal ${styles.header}`}>
          <span className={styles.label}>Case Studies</span>
          <h2 className={styles.title}>
            Financial Success<br />
            Stories.
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`projectCard ${styles.card}`}>
              <div className={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.image} 
                />
                <div className={styles.overlay}>
                  <div className={styles.content}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <div className={styles.result}>
                      <span className={styles.dot}></span>
                      {project.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
