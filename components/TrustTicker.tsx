'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const logos = [
  { name: 'Mopani', src: '/images/clients/mopani.png' },
  { name: 'Orbit', src: '/images/clients/orbit.png' },
  { name: 'Quicko', src: '/images/clients/quicko.png' },
  { name: 'Raj Air Cooler', src: '/images/clients/raj-air-cooler.png' },
  { name: 'KPMG', src: '/images/clients/kpmg.png' },
  { name: 'Adani', src: '/images/clients/adani.png' },
  { name: 'JSW', src: '/images/clients/jsw.png' },
  { name: 'ESL Steel Limited', src: '/images/clients/esl-steel.png' },
  { name: 'PwC', src: '/images/clients/pwc.png' },
  { name: 'Kataria Enterprise', src: '/images/clients/kataria.png' },
  { name: 'International Resources Holding', src: '/images/clients/irh.png' },
  { name: 'Balaji Wafers', src: '/images/clients/balaji-wafers.png' },
];

const stats = [
  { id: 'exp', label: 'Partner Experience', value: 40, suffix: 'YRS+', emphasis: 'dominant' },
  { id: 'pro', label: 'Qualified Experts', value: 10, suffix: '+', emphasis: 'vibrant' },
  { id: 'clients', label: 'Happy Clients', value: 450, suffix: '+', emphasis: 'standard' },
  { id: 'accuracy', label: 'Reporting Precision', value: 99.9, suffix: '%', decimal: true, emphasis: 'standard' },
];

export default function TrustTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Infinite Marquee Animation
    const marquee = marqueeRef.current;
    if (marquee) {
      const marqueeWidth = marquee.scrollWidth / 2;
      gsap.to(marquee, {
        x: -marqueeWidth,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
    }

    // 2. Stats Entrance & Count-up Animation
    stats.forEach((stat, index) => {
      const target = { val: 0 };
      const element = document.getElementById(`stat-val-${stat.id}`);
      
      if (element) {
        gsap.to(target, {
          val: stat.value,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          },
          delay: index * 0.1,
          onUpdate: () => {
            element.innerText = stat.decimal 
              ? target.val.toFixed(1) + stat.suffix 
              : Math.floor(target.val) + stat.suffix;
          },
        });
      }
    });

    // 3. Section Entrance Animation
    gsap.fromTo('.reveal-card',
      { opacity: 0, y: 40, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power4.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        }
      }
    );

    // 4. Parallax Shift for Ticker Section
    gsap.to('.ticker-parallax-container', {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Logos Marquee Section */}
        <div className="mb-20 lg:mb-32 ticker-parallax-container">
          <div className="text-center mb-10">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/40 border-b border-white/10 pb-2">
              Our Clients
            </span>
          </div>
          
          <div className="relative group">
            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#05080f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#05080f] to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden mask-blur">
              <div ref={marqueeRef} className="flex whitespace-nowrap">
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 px-6 md:px-10 lg:px-16 flex items-center justify-center">
                    <div className="transition-all duration-500 hover:scale-110 cursor-pointer flex items-center justify-center" style={{ height: '60px', maxWidth: '140px' }}>
                      <img
                        src={logo.src}
                        alt={logo.name}
                        style={{ maxHeight: '60px', maxWidth: '140px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="reveal-card group relative p-6 md:p-8 lg:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col items-center lg:items-start">
                <div 
                  id={`stat-val-${stat.id}`}
                  className={`font-display font-bold leading-none mb-3 tracking-tighter
                    ${stat.emphasis === 'dominant' ? 'text-4xl md:text-5xl lg:text-6xl text-red-500' : ''}
                    ${stat.emphasis === 'vibrant' ? 'text-4xl md:text-5xl lg:text-6xl text-white' : ''}
                    ${stat.emphasis === 'standard' ? 'text-3xl md:text-4xl lg:text-5xl text-white/90' : ''}
                  `}
                >
                  0{stat.suffix}
                </div>
                <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 group-hover:text-white/60 transition-colors">
                  {stat.label}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-red-600/0 group-hover:bg-red-600/50 transition-all duration-500 rounded-full mx-8 right-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
