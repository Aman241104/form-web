'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './Header.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

const navLinks = [
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#projects' },
  { label: 'PROCESS', href: '#how-it-works' },
  { label: 'SECURITY', href: '#security' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ['hero', 'services', 'projects', 'how-it-works', 'security'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (current) setActiveActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: id, offsetY: 80 },
      ease: 'power4.inOut'
    });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className={styles.logoGroup}>
          <Image 
            src="/images/logo.png" 
            alt="Caramel Advisors" 
            width={160} 
            height={44} 
            priority
            className={styles.logoImage}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.ctaGroup}>
          <a 
            href={getWhatsAppLink("Hello Caramel Advisors, I'd like to book a consultation.")} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            CONSULTATION
          </a>

          {/* Mobile Toggle */}
          <button 
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.toggleActive : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`${styles.mobileLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={getWhatsAppLink()} 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
            >
              BOOK CONSULTATION
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
