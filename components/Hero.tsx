'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Initial Reveal
    tl.fromTo('.reveal-tag', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    )
    .fromTo('.reveal-heading',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
      '-=0.6'
    )
    .fromTo('.reveal-subtext',
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=0.6'
    )
    .fromTo('.reveal-btn',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
      '-=0.8'
    )
    .fromTo(rightRef.current,
      { opacity: 0, x: 40, scale: 1.05 },
      { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: 'expo.out' },
      '-=1.2'
    );

    // Parallax effect on image
    gsap.to(imageRef.current, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#05080f] pt-32 pb-20 lg:pt-24 lg:pb-24"
    >
      {/* Background Depth Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[60vw] h-[60vh] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vh] bg-red-600/5 rounded-full blur-[100px]" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div ref={leftRef} className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-4 items-center lg:items-start w-full">
              <div className="reveal-tag">
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
                  Serving US-Based Accounting Firms
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                <span className="reveal-heading block text-white/50 text-base md:text-xl font-medium tracking-wide mb-1 md:mb-2 uppercase">
                  Let Us Handle The Work
                </span>
                <span className="reveal-heading block">
                  FOCUS ON{' '}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    GROWTH.
                  </span>
                </span>
              </h1>
              
              <p className="reveal-subtext max-w-xl text-base md:text-xl text-white/70 leading-relaxed font-light">
                Unlock Scalable Growth: More Capacity with Expert US Outsourcing for CPA firms and mid-market businesses.
              </p>
            </div>

            <div className="reveal-btn flex flex-col sm:flex-row gap-6 mt-2 w-full sm:w-auto">
              <a 
                href={getWhatsAppLink("Hello Elite Cloud Books, I'd like to book a consultation.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-red-600/20 hover:shadow-red-500/40 text-center"
              >
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform inline-block">Explore Services</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div ref={rightRef} className="lg:col-span-6 relative">
            <div ref={imageRef} className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/80 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-60" />
              
              <Image 
                src="/images/office-discussion.png" 
                alt="Elite Cloud Books Professional Global Office" 
                fill
                priority 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl z-0" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl z-0" />
            </div>

            {/* Floating Achievement Badge (Optional Extra) */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-bold">Trusted by 50+</div>
                  <div className="text-white/60 text-[10px] uppercase tracking-wider">US CPA Firms</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
