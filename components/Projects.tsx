'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

const projects = [
  {
    category: 'Tax & Compliance',
    title: 'Fortune 500 Tax Scale',
    result: '30% Margin Increase',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'Strategic Finance',
    title: 'Fintech vCFO Advisory',
    result: 'Zero Audit Deficiencies',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'Audit Support',
    title: 'Real Estate Fund Audit',
    result: '100% Backlog Cleared',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.headerReveal', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      });

      // Cards Stagger Reveal using class-based selector
      gsap.from('.projectCard', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`headerReveal ${styles.header}`}>
          <span className={styles.label}>Success Stories</span>
          <h2 className={styles.title}>
            Institutional impact<br />
            across diverse sectors.
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
