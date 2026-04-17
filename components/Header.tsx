'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './Header.module.css';

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
            CARAMEL<span className={styles.dot}>.</span>
          </a>
        </div>
        
        <nav className={styles.nav}>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className={styles.navLink}>Services</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className={styles.navLink}>Work</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, '#how-it-works')} className={styles.navLink}>Process</a>
          <a href="#security" onClick={(e) => scrollToSection(e, '#security')} className={styles.navLink}>Security</a>
        </nav>

        <div className={styles.ctaGroup}>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className={styles.cta}>
            Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
