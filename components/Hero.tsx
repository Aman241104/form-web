'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { getWhatsAppLink } from './StickyWhatsApp';

const servicePills = [
  'Bookkeeping',
  'Tax Preparation',
  'Advisory',
  'Audit Services',
  'Client Advisory (CAS)',
  'Financial Planning',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo('.hero-tag',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
    )
    .fromTo('.hero-h1-line',
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
      '-=0.5'
    )
    .fromTo('.hero-sub',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo('.hero-pill',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.06 },
      '-=0.6'
    )
    .fromTo('.hero-btn',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.4'
    )
    .fromTo('.hero-img-wrap',
      { opacity: 0, x: 50, scale: 1.04 },
      { opacity: 1, x: 0, scale: 1, duration: 1.4, ease: 'expo.out' },
      '-=1.2'
    )
    .fromTo('.hero-stat-card',
      { opacity: 0, scale: 0.85, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)' },
      '-=0.8'
    );

    gsap.to(imageRef.current, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#05080f] pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Primary red glow */}
        <div className="absolute top-[-5%] left-[-10%] w-[70vw] h-[70vh] bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[60vh] bg-red-600/5 rounded-full blur-[120px]" />
        {/* Accent mid glow */}
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vh] bg-red-500/5 rounded-full blur-[100px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">

            {/* Tag */}
            <div className="hero-tag">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black tracking-[0.25em] uppercase border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                US-Based Accounting Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="flex flex-col gap-1">
              <span className="hero-h1-line block text-white/40 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                Let Us Handle The Work
              </span>
              <span className="hero-h1-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white">
                FOCUS ON
              </span>
              <span className="hero-h1-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                GROWTH.
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-sub max-w-md text-sm md:text-base lg:text-lg text-white/60 leading-relaxed font-light">
              Precision Bookkeeping. Strategic Advisory. Total Financial Clarity — for CPA firms and growing businesses across the U.S.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {servicePills.map((pill) => (
                <span
                  key={pill}
                  className="hero-pill px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest hover:border-red-500/30 hover:text-white/70 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppLink("Hello Elite Cloud Books, I'm an accounting firm looking to scale our operations.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn group relative flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.7)] hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
              >
                <span className="relative z-10">For Accounting Firms</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href={getWhatsAppLink("Hello Elite Cloud Books, I'm a business owner looking for accounting support.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-black text-[12px] uppercase tracking-[0.2em] border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.02]"
              >
                For Businesses
              </a>
            </div>

            {/* Trust line */}
            <div className="hero-btn flex items-center gap-3 text-white/30 text-[11px] font-bold uppercase tracking-widest">
              <CheckCircle size={14} className="text-red-500/60" />
              Free Consultation
              <span className="text-white/10">•</span>
              <CheckCircle size={14} className="text-red-500/60" />
              No Commitment
              <span className="text-white/10">•</span>
              <CheckCircle size={14} className="text-red-500/60" />
              US Compliant
            </div>
          </div>

          {/* Right Column: Image + Stat Cards */}
          <div className="hero-img-wrap lg:col-span-7 relative">

            {/* Main Image */}
            <div
              ref={imageRef}
              className="relative w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] border border-white/10 group"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/70 via-[#05080f]/10 to-transparent z-10 transition-opacity group-hover:opacity-50" />
              {/* Left-edge fade for seamless blend */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#05080f]/40 to-transparent z-10" />

              <Image
                src="/images/office-discussion.png"
                alt="Elite Cloud Books Professional Global Office"
                fill
                priority
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              {/* Red corner accent glow */}
              <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-red-600/25 rounded-full blur-3xl z-0" />
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-red-600/10 rounded-full blur-3xl z-0" />
            </div>

            {/* Stat Card: Top Left */}
            <div className="hero-stat-card absolute -top-5 -left-5 lg:-left-8 bg-[#0a0f1a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  <Award size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-xl font-black leading-none">40+</div>
                  <div className="text-white/50 text-[9px] uppercase tracking-widest font-bold mt-0.5">Yrs Combined<br />Experience</div>
                </div>
              </div>
            </div>

            {/* Stat Card: Mid Right */}
            <div className="hero-stat-card absolute top-[38%] -right-5 lg:-right-10 bg-[#0a0f1a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={18} className="text-red-500" />
                </div>
                <div>
                  <div className="text-white text-xl font-black leading-none">10+</div>
                  <div className="text-white/50 text-[9px] uppercase tracking-widest font-bold mt-0.5">Qualified<br />Experts</div>
                </div>
              </div>
            </div>

            {/* Stat Card: Bottom Left */}
            <div className="hero-stat-card absolute -bottom-5 left-6 lg:left-8 bg-[#0a0f1a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-red-500" />
                </div>
                <div>
                  <div className="text-white text-xl font-black leading-none">450+</div>
                  <div className="text-white/50 text-[9px] uppercase tracking-widest font-bold mt-0.5">Happy Clients<br />Across the US</div>
                </div>
              </div>
            </div>

            {/* Live badge */}
            <div className="hero-stat-card absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">99.9% Precision</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
