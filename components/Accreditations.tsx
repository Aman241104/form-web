'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Award, Zap } from 'lucide-react';

const logos = [
  { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80', alt: 'ISO 27001' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80', alt: 'ISO 9001' },
  { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80', alt: 'QuickBooks' },
  { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80', alt: 'Sage Intacct' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80', alt: 'Zoho Books' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=200&q=80', alt: 'Certified Advisor' },
  { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&q=80', alt: 'CPA' },
  { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=200&q=80', alt: 'ICAI' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80', alt: 'Xero' },
  { src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&q=80', alt: 'IIMA' },
  { src: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=200&q=80', alt: 'PICPA' },
];

const stats = [
  { label: 'Professionals', value: 100, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'Global Clients', value: 200, suffix: '+' },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(endValue * progress);

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Accreditations() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <section 
      id="accreditations" 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden"
    >
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[160px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        {/* Moving Grid Accent */}
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              Global Excellence Verified
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8"
          >
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Industry's Best.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-white/50 leading-relaxed font-light"
          >
            Recognized by global platforms and compliance bodies trusted by leading firms. Built for precision. Designed for scale.
          </motion.p>
        </div>

        {/* Dynamic Logo Marquee (Row 1) */}
        <div className="relative group mb-12 overflow-hidden py-10">
          <motion.div 
            style={{ x: x1 }}
            className="flex whitespace-nowrap gap-12 lg:gap-24"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="relative w-32 h-12 lg:w-44 lg:h-16 flex-shrink-0 transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 group/logo"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  fill 
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-red-500/0 group-hover/logo:bg-red-500/5 blur-xl transition-all rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Logo Marquee (Row 2 - Reverse) */}
        <div className="relative group mb-24 overflow-hidden py-10 border-b border-white/5">
          <motion.div 
            style={{ x: x2 }}
            className="flex whitespace-nowrap gap-12 lg:gap-24"
          >
            {[...logos.reverse(), ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="relative w-32 h-12 lg:w-44 lg:h-16 flex-shrink-0 transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 group/logo"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  fill 
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-red-500/0 group-hover/logo:bg-red-500/5 blur-xl transition-all rounded-full" />
              </div>
            ))}
          </motion.div>
          {/* Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05080f] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05080f] to-transparent z-10 pointer-events-none" />
        </div>

        {/* Trust Metrics with Count-Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter group-hover:text-red-500 transition-colors duration-500">
                <CountUp end={stat.value} />{stat.suffix}
              </div>
              <div className="text-white/40 text-xs lg:text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3">
                <div className="w-8 h-px bg-red-500/30" />
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
