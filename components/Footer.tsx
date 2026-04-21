'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.reveal-footer', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%'
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className={styles.footer}>
      {/* Background Watermark */}
      <div className={styles.watermark}>CARAMEL</div>
      <div className={styles.subtleGlow}></div>

      <div className={styles.container}>
        {/* Top Status Bar */}
        <div className={`${styles.statusStrip} reveal-footer`}>
          <div className={styles.statusLeft}>
            <div className={styles.pulseDot}></div>
            <span>Intelligent routing active</span>
          </div>
          <div className={styles.statusRight}>
            Global delivery • US compliance • 24/7 operations
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className={styles.mainGrid}>
          {/* Column 1: Brand */}
          <div className={`${styles.column} reveal-footer`}>
            <h2 className={styles.logo}>CARAMEL<span className={styles.dot}>.</span></h2>
            <p className={styles.brandDesc}>
              Caramel Advisors is a U.S.-based accounting partner helping firms scale with precision, reliability, and global expertise.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className={`${styles.column} reveal-footer`}>
            <h3 className={styles.label}>Services</h3>
            <nav className={styles.navStack}>
              <Link href="/services" className={styles.navLink}>Bookkeeping & Accounting</Link>
              <Link href="/services" className={styles.navLink}>Tax Preparation</Link>
              <Link href="/services" className={styles.navLink}>FP&A (Planning)</Link>
              <Link href="/services" className={styles.navLink}>Audit Services</Link>
              <Link href="/services" className={styles.navLink}>Advisory Services</Link>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className={`${styles.column} reveal-footer`}>
            <h3 className={styles.label}>Company</h3>
            <nav className={styles.navStack}>
              <Link href="/about" className={styles.navLink}>Our Story</Link>
              <Link href="/about" className={styles.navLink}>Leadership</Link>
              <Link href="/industries" className={styles.navLink}>Industries</Link>
              <Link href="/contact" className={styles.navLink}>Careers</Link>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>
          </div>

          {/* Column 4: Presence */}
          <div className={`${styles.column} reveal-footer`}>
            <h3 className={styles.label}>Presence</h3>
            <div className={styles.presenceStack}>
              <div className={styles.presenceItem}>
                <span className={styles.iconSpan}>🇺🇸</span>
                <span>+1 267-416-9800</span>
              </div>
              <div className={styles.presenceItem}>
                <span className={styles.iconSpan}>🇮🇳</span>
                <span>+91 990 996 8080</span>
              </div>
              <div className={styles.presenceItem}>
                <span className={styles.iconSpan}>📍</span>
                <span>Bala Cynwyd, PA</span>
              </div>
              <div className={styles.presenceItem}>
                <span className={styles.iconSpan}>✉️</span>
                <a href="mailto:admin@carameladvisors.com">admin@carameladvisors.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`${styles.bottomBar} reveal-footer`}>
          <div className={styles.bottomLeft}>
            © {new Date().getFullYear()} Caramel Advisors. All rights reserved.
          </div>
          <div className={styles.bottomCenter}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.separator}>•</span>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
          </div>
          <div className={styles.bottomRight}>
            Trusted by global firms • ISO aligned • Secure infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
}
