'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, TrendingUp } from 'lucide-react';

export default function Overview() {
  return (
    <section id="overview" className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth & Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px]" 
        />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        {/* Moving Grid */}
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
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            {/* Main Image with Overlap */}
            <motion.div 
              initial={{ opacity: 0, x: -60, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10"
            >
              <Image 
                src="/images/office-discussion.png"
                alt="Elite Cloud Books Team Collaboration"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/80 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Stat Card (Key Feature) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 lg:-right-12 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block max-w-[240px]"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-red-500 mb-4">
                <TrendingUp size={24} />
              </div>
              <div className="text-4xl font-black text-white mb-2">100+</div>
              <div className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40 leading-tight">
                Combined Years of <br />Partner Experience
              </div>
              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-red-600/5 blur-xl -z-10" />
            </motion.div>

            {/* Secondary Overlapping Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Story Driven Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
                The Elite Narrative
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-10"
            >
              Your Strategic <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 group cursor-default">
                Finance Ally.
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-2 left-0 h-1 bg-red-500/30" 
                />
              </span>
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-red-600 mb-12 rounded-full hidden lg:block" 
            />

            <div className="space-y-8 max-w-xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 leading-relaxed font-light"
              >
                Founded in 2021 as a <span className="text-white font-bold">dedicated U.S. entity</span>, Elite Cloud Books unites more than a century of combined expertise.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-white/70 leading-relaxed font-light"
              >
                We guide <span className="text-white font-bold underline decoration-red-500/40 decoration-2 underline-offset-4">accounting firms</span> and mid-market businesses through complex financial cycles with high-precision offshore talent.
              </motion.p>
            </div>

            {/* Credibility & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-col sm:flex-row items-center gap-8"
            >
              <Link 
                href="/services" 
                className="group relative px-8 py-4 bg-white text-black rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-red-600 hover:text-white flex items-center gap-3 shadow-2xl"
              >
                Explore Our Services
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex items-center gap-4 group">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05080f] bg-white/10 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Trusted by 200+ Firms
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
