'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

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
    <div ref={loaderRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05080f]">
      <div ref={logoRef} className="text-3xl md:text-5xl font-black tracking-[0.4em] text-white">
        ELITE CLOUD BOOKS<span className="text-red-600">.</span>
      </div>
      <div className="absolute bottom-20 left-0 h-[2px] bg-red-600/30 w-full overflow-hidden">
         <motion.div 
           initial={{ x: '-100%' }}
           animate={{ x: '100%' }}
           transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
           className="h-full w-1/3 bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.8)]" 
         />
      </div>
    </div>
  );
}
