'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './Header.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: id, offsetY: 80 },
      ease: 'power4.inOut'
    });
  };

  return (
    <header 
      ref={headerRef} 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className={styles.logo}>
            <Image 
              src="/images/logo.png" 
              alt="Caramel Advisors" 
              width={180} 
              height={50} 
              priority
              className={styles.logoImage}
            />
          </a>
        </div>
        
        <nav className={styles.nav}>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className={styles.navLink}>SERVICES</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className={styles.navLink}>WORK</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, '#how-it-works')} className={styles.navLink}>PROCESS</a>
          <a href="#security" onClick={(e) => scrollToSection(e, '#security')} className={styles.navLink}>SECURITY</a>
        </nav>

        <div className={styles.ctaGroup}>
          <a 
            href={getWhatsAppLink("Hello Caramel Advisors, I'd like to book a consultation.")} 
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cta} ${styles.ctaPrimary}`}
          >
            CONSULTATION
          </a>
        </div>
      </div>
    </header>
  );
}
