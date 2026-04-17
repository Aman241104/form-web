'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Blogs.module.css';

const posts = [
  {
    title: 'The 2026 CPA Talent Crisis',
    date: 'APR 15, 2026',
    category: 'INDUSTRY',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Navigating Cross-Border Tax',
    date: 'MAR 28, 2026',
    category: 'TECHNICAL',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'AI in Fractional CFO Services',
    date: 'MAR 12, 2026',
    category: 'TECHNOLOGY',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Blogs() {
  const sectionRef = useRef<section>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.blogHeaderReveal', {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });

      // List Items Animation using class selector
      gsap.from('.blogItemReveal', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="blogs" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Branding & Header */}
          <div className={`blogHeaderReveal ${styles.left}`}>
            <span className={styles.label}>Intelligence</span>
            <h2 className={styles.title}>
              Thought leadership<br />
              for strategic<br />
              growth<span className={styles.dot}>.</span>
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
