'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { industries } from '@/data/siteData';

// Adding some industry-specific tags for premium feel
const industryTags: Record<string, string[]> = {
  'cpa-accounting': ['High Volume', 'Talent Extension'],
  'healthcare-dental': ['Consolidated Reporting', 'Compliance'],
  'manufacturing-textile': ['Cost Accounting', 'Inventory'],
  'construction-real-estate': ['Project Based', 'WIP Tracking'],
  'technology-saas': ['RevRec', 'KPI Focused'],
  'consumer-lending': ['Precision', 'Audit Ready']
};

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Header Reveal
    tl.fromTo('.reveal-ind-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.1 }
    )
    // Cards Reveal
    .fromTo('.reveal-ind-card',
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      '-=0.6'
    );

    // Floating animation for background glow
    gsap.to('.ind-bg-glow', {
      opacity: 0.3,
      scale: 1.3,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: sectionRef });

  return (
    <section id="industries" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="ind-bg-glow absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-start text-left mb-16 lg:mb-20">
          <div className="reveal-ind-header mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
              Specialized Verticals
            </span>
          </div>
          
          <h2 className="reveal-ind-header text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            Tailored for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Critical Sectors.</span>
          </h2>
          
          <p className="reveal-ind-header max-w-xl text-lg text-white/60 leading-relaxed font-light">
            Deep domain expertise across industries — built for scale, compliance, and institutional performance.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const isFeatured = index === 0;
            const tags = industryTags[industry.id] || [];
            
            return (
              <Link 
                href={`/industries/${industry.id}`}
                key={industry.id} 
                className={`reveal-ind-card group relative flex flex-col p-8 lg:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 overflow-hidden
                  ${isFeatured ? 'lg:col-span-8 lg:row-span-1' : 'lg:col-span-4'}
                  ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'}
                  hover:-translate-y-2 hover:bg-white/[0.08] hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-transparent group-hover:from-red-600/10 transition-all duration-700 pointer-events-none" />
                
                <div className={`flex flex-col h-full ${isFeatured ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}>
                  
                  {/* Icon & Content Wrapper */}
                  <div className={`flex flex-col flex-grow ${isFeatured ? 'lg:w-full' : ''}`}>
                    {/* Icon Section */}
                    <div className="relative mb-8 w-fit">
                      <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600/10 group-hover:border-red-500/40">
                        <div className="text-red-500 w-6 h-6 transition-transform duration-500 group-hover:rotate-12">
                          {industry.icon}
                        </div>
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, i) => (
                          <span key={i} className="text-[9px] font-black uppercase tracking-wider text-white/30 group-hover:text-red-500/60 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className={`font-bold text-white mb-4 group-hover:text-red-400 transition-colors
                        ${isFeatured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl'}
                      `}>
                        {industry.name}
                      </h3>
                      
                      <p className={`text-white/50 leading-relaxed font-light transition-colors group-hover:text-white/70
                        ${isFeatured ? 'text-lg max-w-xl' : 'text-sm line-clamp-3'}
                      `}>
                        {industry.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className={`mt-8 lg:mt-0 ${isFeatured ? 'lg:flex-shrink-0' : 'mt-auto'}`}>
                    <div className="inline-flex items-center gap-4 group/cta cursor-pointer">
                      <span className="relative text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors overflow-hidden py-1">
                        Explore Vertical
                        <div className="absolute bottom-0 left-0 w-full h-px bg-red-600 scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500 origin-left" />
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/cta:bg-red-600 group-hover/cta:border-red-600 group-hover/cta:translate-x-1 group-hover/cta:shadow-[0_0_15px_rgba(230,57,70,0.5)]">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Corner Accent Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/0 group-hover:bg-red-600/5 rounded-full blur-3xl transition-all duration-700" />
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
