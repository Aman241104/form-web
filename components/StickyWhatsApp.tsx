'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './StickyWhatsApp.module.css';

const WHATSAPP_NUMBER = '12674169800'; // US Office Number
const DEFAULT_MESSAGE = "Hello Caramel Advisors, I'm interested in a consultation for my firm.";

export const getWhatsAppLink = (message = DEFAULT_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function StickyWhatsApp() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.fromTo(btnRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 2, ease: 'back.out(1.7)' }
    );
  }, { scope: btnRef });

  return (
    <div className={styles.wrapper}>
      <a 
        ref={btnRef}
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.stickyBtn}
        aria-label="Contact on WhatsApp"
      >
        <div className={styles.pulse}></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className={styles.icon}
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.78.47 3.45 1.28 4.9L2 22l5.24-1.28A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.8 14.1c-.2.57-1.15 1.08-1.6 1.15-.43.06-1 .15-3.08-.62-2.48-1-4.14-3.57-4.26-3.73-.12-.16-1.02-1.36-1.02-2.6 0-1.23.64-1.84.87-2.07.22-.24.48-.3.63-.3.16 0 .31 0 .45.01.15.01.34-.06.53.39.2.48.66 1.63.72 1.75.06.12.1.26.02.42-.07.16-.11.26-.23.4-.11.13-.24.28-.33.39-.11.13-.23.27-.1.47.13.2.58.94 1.2 1.45.8.66 1.53.86 1.73.97.2.1.33.09.46-.05.13-.13.56-.66.72-.89.15-.22.31-.19.53-.1.22.1 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.15z"/>
        </svg>
        <span className={styles.tooltip}>Chat with an Advisor</span>
      </a>
    </div>
  );
}
