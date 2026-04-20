'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getWhatsAppLink } from './StickyWhatsApp';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
      gsap.fromTo('.footerColumn', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
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
      <div className={styles.bgLogo}>CARAMEL</div>
      
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={`footerColumn ${styles.brand}`}>
            <h2 className={styles.logo}>CARAMEL<span className={styles.dot}>.</span></h2>
            <p className={styles.description}>
              Founded in 2021 as a dedicated U.S. entity, Caramel Advisors unites more than 100 years of combined partner experience.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/caramel-advisors/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/CaramelAdvisors" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          <div className={`footerColumn ${styles.column}`}>
            <h3 className={styles.label}>Services</h3>
            <nav className={styles.nav}>
              <Link href="#services" className={styles.link}>Bookkeeping & Accounting</Link>
              <Link href="#services" className={styles.link}>Tax Preparation</Link>
              <Link href="#services" className={styles.link}>FP&A (Financial Planning)</Link>
              <Link href="#services" className={styles.link}>Audit Services</Link>
              <Link href="#services" className={styles.link}>Advisory Services</Link>
            </nav>
          </div>

          <div className={`footerColumn ${styles.column}`}>
            <h3 className={styles.label}>Company</h3>
            <nav className={styles.nav}>
              <Link href="#overview" className={styles.link}>Our Story</Link>
              <Link href="#overview" className={styles.link}>Our Team</Link>
              <Link href="#security" className={styles.link}>Security</Link>
              <Link href="#industries" className={styles.link}>Industries</Link>
              <a href="mailto:admin@carameladvisors.com" className={styles.link}>admin@carameladvisors.com</a>
            </nav>
          </div>

          <div className={`footerColumn ${styles.column}`}>
            <h3 className={styles.label}>Presence</h3>
            <div className={styles.presence}>
              <div className={styles.location}>
                <div className={styles.statusDot}></div>
                <span>+1 267-416-9800 (US)</span>
              </div>
              <div className={styles.location}>
                <div className={styles.statusDot}></div>
                <span>+91 990 996 8080 (IN)</span>
              </div>
              <div className={styles.location}>
                <div className={styles.statusDot}></div>
                <span>Bala Cynwyd, PA 19004</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p>&copy; {new Date().getFullYear()} Caramel Advisors. All rights reserved.</p>
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
