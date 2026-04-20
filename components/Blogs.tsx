'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Blogs.module.css';

const posts = [
  {
    title: 'PE/VC Valuations: From Cost to Calibration',
    date: 'APR 18, 2026',
    category: 'INDUSTRY',
    image: '/images/office-discussion.png'
  },
  {
    title: 'Enter Calibration: What Better Funds Do Differently',
    date: 'APR 18, 2026',
    category: 'TECHNICAL',
    image: '/images/finance-growth.png'
  },
  {
    title: 'AI is Now Part of the 12/31/2025 Cycle',
    date: 'APR 18, 2026',
    category: 'TECHNOLOGY',
    image: '/images/finance-piggybank.png'
  }
];

export default function Blogs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
      // Header Animation
      gsap.fromTo('.blogHeaderReveal', 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );

      // List Items Animation using class selector
      gsap.fromTo('.blogItemReveal', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%'
          }
        }
      );
    }, { scope: sectionRef });

  return (
    <section id="blogs" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Branding & Header */}
          <div className={`blogHeaderReveal ${styles.left}`}>
            <span className={styles.label}>Intelligence</span>
            <h2 className={styles.title}>
              Insights from<br />
              Latest<br />
              Blog<span className={styles.dot}>.</span>
            </h2>
          </div>

          {/* Right: Interactive List */}
          <div className={styles.right}>
            {posts.map((post, index) => (
              <div key={index} className={`blogItemReveal ${styles.blogItem}`}>
                <div className={styles.itemContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h4 className={styles.postTitle}>{post.title}</h4>
                  <div className={styles.imagePreview}>
                    <img src={post.image} alt={post.title} />
                  </div>
                </div>
                <div className={styles.divider}></div>
              </div>
            ))}
            
            <a href="#" className={styles.viewAll}>
              View All Insights <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
