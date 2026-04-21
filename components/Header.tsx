'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Header.module.css';
import { getWhatsAppLink } from './StickyWhatsApp';

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
            alt="Elite Cloud Books" 
            width={160} 
            height={44} 
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
            HOME
          </Link>

          <div className={styles.navItem}>
            <Link href="/services" className={`${styles.navLink} ${pathname.startsWith('/services') ? styles.active : ''}`}>
              SERVICES
            </Link>
            <div className={styles.megaMenu}>
              <Link href="/services#bookkeeping" className={styles.megaMenuLink}>Bookkeeping & Accounting</Link>
              <Link href="/services#tax" className={styles.megaMenuLink}>Tax Preparation</Link>
              <Link href="/services#audit" className={styles.megaMenuLink}>Audit Services</Link>
              <Link href="/services#cas" className={styles.megaMenuLink}>Client Advisory Services</Link>
              <Link href="/services#fpa" className={styles.megaMenuLink}>FP&A (Planning)</Link>
            </div>
          </div>

          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
            ABOUT
          </Link>

          <div className={styles.navItem}>
            <Link href="/industries" className={`${styles.navLink} ${pathname.startsWith('/industries') ? styles.active : ''}`}>
              INDUSTRIES
            </Link>
            <div className={styles.megaMenu}>
              <Link href="/industries#cpa" className={styles.megaMenuLink}>Accounting Firms</Link>
              <Link href="/industries#businesses" className={styles.megaMenuLink}>Businesses</Link>
            </div>
          </div>

          <Link href="/projects" className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''}`}>
            WORK
          </Link>
          
          <Link href="/blog" className={`${styles.navLink} ${pathname === '/blog' ? styles.active : ''}`}>
            BLOG
          </Link>
        </nav>

        {/* CTA */}
        <div className={styles.ctaGroup}>
          <a 
            href={getWhatsAppLink("Hello Elite Cloud Books, I'd like to book a consultation.")} 
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
                alt="Elite Cloud Books" 
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.mobileLink} ${pathname === '/' ? styles.mobileActive : ''}`}>HOME</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.mobileLink} ${pathname.startsWith('/services') ? styles.mobileActive : ''}`}>SERVICES</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.mobileLink} ${pathname === '/about' ? styles.mobileActive : ''}`}>ABOUT</Link>
            <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.mobileLink} ${pathname.startsWith('/industries') ? styles.mobileActive : ''}`}>INDUSTRIES</Link>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.mobileLink} ${pathname === '/projects' ? styles.mobileActive : ''}`}>WORK</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.mobileLink} ${pathname === '/blog' ? styles.mobileActive : ''}`}>BLOG</Link>
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
