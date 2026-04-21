'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Header.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT', href: '/about' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'WORK', href: '/projects' },
  { label: 'BLOG', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { x: '100%' },
        { x: 0, duration: 0.4, ease: 'power3.out' }
      );
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-menu-open', 'true');
    } else {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-menu-open');
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoGroup}>
          <Image 
            src="/images/logo.png" 
            alt="Caramel Advisors" 
            width={160} 
            height={44} 
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
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
          <div className={styles.mobileMenuHeader}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.logoGroup}>
              <Image 
                src="/images/logo.png" 
                alt="Caramel Advisors" 
                width={140} 
                height={38} 
              />
            </Link>
            <button 
              className={styles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a 
            href={getWhatsAppLink()} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
          >
            BOOK CONSULTATION
          </a>
        </div>
      )}
    </header>
  );
}
