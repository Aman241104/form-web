'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.footerColumn', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%'
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.bgLogo}>CARAMEL</div>
      
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={`footerColumn ${styles.brand}`}>
            <h2 className={styles.logo}>CARAMEL<span className={styles.dot}>.</span></h2>
            <p className={styles.description}>
              Institutional-grade financial expertise.<br />
              Bridging the global talent gap with precision and trust.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>

          <div className={`footerColumn ${styles.column}`}>
            <h3 className={styles.label}>Services</h3>
            <nav className={styles.nav}>
              <Link href="#services" className={styles.link}>Tax Preparation</Link>
              <Link href="#services" className={styles.link}>Audit Support</Link>
              <Link href="#services" className={styles.link}>Accounting & CAS</Link>
              <Link href="#services" className={styles.link}>Virtual CFO</Link>
            </nav>
          </div>

          <div className={`footerColumn ${styles.column}`}>
            <h3 className={styles.label}>Company</h3>
            <nav className={styles.nav}>
              <Link href="#overview" className={styles.link}>Our Story</Link>
              <Link href="#security" className={styles.link}>Security</Link>
              <Link href="#industries" className={styles.link}>Industries</Link>
              <Link href="#contact" className={styles.link}>Contact</Link>
            </nav>
          </div>

          <div className={`footerColumn ${styles.column}`}>
            <h3 className={styles.label}>Presence</h3>
            <div className={styles.presence}>
              <div className={styles.location}>
                <div className={styles.statusDot}></div>
                <span>Philadelphia, PA</span>
              </div>
              <div className={styles.location}>
                <div className={styles.statusDot}></div>
                <span>Ahmedabad, GJ</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p>&copy; {new Date().getFullYear()} Caramel Global Services.</p>
            <div className={styles.legalLinks}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
          <div className={styles.status}>
            <span className={styles.statusLabel}>Network Status:</span>
            <span className={styles.statusValue}>Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
