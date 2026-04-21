'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Blogs.module.css';
import { blogPosts } from '@/data/siteData';

export default function Blogs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.reveal-left', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
    )
    .fromTo('.reveal-featured',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.reveal-post',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      '-=0.4'
    );
  }, { scope: sectionRef });

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <section id="blogs" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <span className={`${styles.tag} reveal-left`}>INTELLIGENCE</span>
            <h2 className={`${styles.title} reveal-header reveal-left`}>
              Insights from <span className={styles.desktopBreak}><br /></span>
              <span className={styles.titleEmphasis}>Latest Blog.</span>
            </h2>

            <p className={`${styles.description} reveal-left`}>
              Perspectives, strategies, and insights shaping modern finance and business operations.
            </p>
            <Link href="/blog" className={`${styles.ctaButton} reveal-left`}>
              View All Insights <span className={styles.arrow}>→</span>
            </Link>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Featured Post */}
            <Link href={`/blog/${featuredPost.id}`} className={`${styles.featuredCard} reveal-featured group`}>
              <div className={styles.featuredImageWrapper}>
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  fill
                  className={styles.featuredImage}
                />
                <div className={styles.featuredBadge}>FEATURED</div>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{featuredPost.category}</span>
                </div>
                <h4 className={styles.featuredTitle}>{featuredPost.title}</h4>
                <div className={styles.date}>{featuredPost.date}</div>
              </div>
            </Link>

            {/* Other Posts List */}
            <div className={styles.postsList}>
              {otherPosts.map((post, index) => (
                <Link href={`/blog/${post.id}`} key={index} className={`${styles.postItem} reveal-post group`}>
                  <div className={styles.thumbnailWrapper}>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className={styles.thumbnail}
                    />
                  </div>
                  <div className={styles.postItemContent}>
                    <div className={styles.postMetaSmall}>
                      <span className={styles.categorySmall}>{post.category}</span>
                      <span className={styles.dot}>•</span>
                      <span className={styles.dateSmall}>{post.date}</span>
                    </div>
                    <h5 className={styles.postItemTitle}>{post.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
