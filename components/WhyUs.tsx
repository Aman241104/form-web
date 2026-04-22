'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const points = [
  {
    num: '01',
    title: 'U.S. Accountability',
    desc: 'Domestic contracts and invoicing providing the legal security you expect from a U.S. entity.'
  },
  {
    num: '02',
    title: 'Expert Delivery',
    desc: 'Chartered Accountant-led delivery team in India ensuring high-precision accounting and tax work.'
  },
  {
    num: '03',
    title: 'Scalable & Secure',
    desc: 'Safe, predictable support with deep expertise across all leading cloud accounting platforms.'
  },
  {
    num: '04',
    title: 'Proven Track Record',
    desc: '15+ years of partner experience and 100+ professionals helping firms scale with confidence.'
  }
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Header & Stats reveal
    tl.fromTo('.reveal-why-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.1 }
    )
    // Feature cards stagger reveal
    .fromTo('.reveal-why-card',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      '-=0.6'
    )
    // Image reveal
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.9, x: -30 },
      { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: 'expo.out' },
      '-=1'
    );

    // Subtle parallax for image
    gsap.to(imageRef.current, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Floating badge animation
    gsap.to(badgeRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: sectionRef });

  return (
    <section 
      id="why-us" 
      ref={sectionRef} 
      className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden"
    >
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-red-600/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vh] bg-red-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <div className="reveal-why-header">
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
                  The Competitive Edge
                </span>
              </div>
              
              <h2 className="reveal-why-header text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                Why Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Elite Cloud Books.</span>
              </h2>
              
              <p className="reveal-why-header max-w-lg text-lg text-white/60 leading-relaxed font-light">
                We bridge the gap between U.S. client expectations and global delivery excellence, providing a seamless extension for your firm.
              </p>

              {/* Trust Signal Row */}
              <div className="reveal-why-header flex flex-wrap gap-8 pt-4">
                {[
                  { label: 'Exp', val: '15+ Yrs' },
                  { label: 'Pros', val: '100+' },
                  { label: 'Firms', val: '200+' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-red-500 font-bold text-xl">{stat.val}</span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={imageRef} className="relative group">
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/10 group-hover:border-red-500/30 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/80 via-transparent to-transparent z-10" />
                <Image 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Elite Cloud Books Leadership Team"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Floating Trusted Badge */}
              <div 
                ref={badgeRef}
                className="absolute -top-6 -right-6 lg:-right-8 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Trusted Choice</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider">For US CPA Firms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className="reveal-why-card group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5 cursor-default"
                >
                  {/* Left Accent Line Animation */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-600 transition-all duration-500 group-hover:h-3/5 rounded-r-full" />
                  
                  <div className="flex gap-8 items-start">
                    {/* Number styling in pill */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 font-display font-bold text-sm transition-all duration-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:scale-110">
                        {point.num}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-white/50 leading-relaxed font-light text-base lg:text-lg">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
