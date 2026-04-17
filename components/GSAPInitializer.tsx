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
      setTimeout(refresh, 2500),
    ];

    // Use ResizeObserver to dynamically detect layout shifts (e.g., images loading)
    let resizeObserver: ResizeObserver | null = null;
    if (typeof window !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        // Debounce the refresh slightly to prevent excessive calls during rapid resizing
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener('load', refresh);
      timers.forEach(clearTimeout);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return null;
}
