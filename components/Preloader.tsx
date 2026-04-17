'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoaded(true);
        document.body.style.overflow = '';
        // Final refresh to ensure all triggers are correct after site is "visible"
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    });

    document.body.style.overflow = 'hidden';

    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    )
    .to(logoRef.current, {
      textShadow: '0 0 20px rgba(230, 57, 70, 0.8)',
      duration: 0.5,
      yoyo: true,
      repeat: 1
    })
    .to(loaderRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'expo.inOut',
      delay: 0.5
    });

  }, []);

  if (isLoaded) return null;

  return (
    <div ref={loaderRef} className={styles.preloader}>
      <div ref={logoRef} className={styles.logo}>
        CARAMEL<span className={styles.dot}>.</span>
      </div>
      <div className={styles.progressLine}></div>
    </div>
  );
}
