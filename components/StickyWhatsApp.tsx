'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './StickyWhatsApp.module.css';

const WHATSAPP_NUMBER = '1234567890'; // Placeholder - replace with client number
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
    <a 
      ref={btnRef}
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.stickyBtn}
      aria-label="Contact on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={styles.icon}
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.273-.137-1.616-.798-1.867-.889-.251-.091-.433-.137-.615.137-.182.274-.707.889-.866 1.072-.16.182-.32.205-.593.068-.273-.137-1.155-.426-2.198-1.356-.811-.724-1.357-1.618-1.517-1.892-.16-.273-.017-.42.119-.557.123-.124.273-.321.41-.482.136-.16.182-.275.273-.457.091-.183.045-.342-.023-.479-.068-.137-.615-1.485-.842-2.033-.221-.532-.446-.461-.615-.469-.16-.008-.342-.008-.524-.008-.182 0-.479.068-.73.342-.251.274-.958.937-.958 2.285 0 1.348.98 2.651 1.117 2.833.136.183 1.934 2.954 4.685 4.143.654.283 1.164.453 1.565.578.657.206 1.254.177 1.724.107.525-.079 1.616-.661 1.843-1.299.228-.638.228-1.185.16-1.299-.068-.114-.251-.183-.524-.32zm-5.441 5.532c-1.62-.001-3.2-.437-4.588-1.261l-.329-.195-3.411.894.911-3.326-.214-.34C3.476 14.153 3 12.385 3 10.518 3 5.556 7.038 1.5 12.031 1.5c2.409 0 4.673.945 6.376 2.66 1.702 1.714 2.64 3.991 2.64 6.402 0 4.962-4.038 9.022-9.016 9.022v0zM12.031 0C5.385 0 0 5.433 0 12.138c0 2.128.552 4.205 1.602 6.037L0 24l5.961-1.577C7.72 23.36 9.848 23.953 12.031 23.953h.004c6.643 0 12.046-5.433 12.046-12.138 0-3.237-1.251-6.281-3.524-8.568C18.284 1.26 15.241.001 12.031.001v-.001z"/>
      </svg>
      <span className={styles.tooltip}>Chat with an Advisor</span>
    </a>
  );
}
