'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function GSAPInitializer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Global ScrollTrigger configuration
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
    });

    // Handle initial refresh and periodic refreshes
    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refresh);
    
    // Refresh after a delay to catch late-rendering content
    const timers = [
      setTimeout(refresh, 500),
      setTimeout(refresh, 1000),
      setTimeout(refresh, 2000),
    ];

    return () => {
      window.removeEventListener('load', refresh);
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
