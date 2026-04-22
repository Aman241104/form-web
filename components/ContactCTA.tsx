'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, Zap } from 'lucide-react';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function ContactCTA() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#05080f] overflow-hidden">
      {/* Dynamic Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Shift */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[180px]" 
        />
        
        {/* Static Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-[0.3em]">
              <Zap size={12} className="fill-current" />
              Decision Moment
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-10"
          >
            Scale Faster.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              Operate Smarter.
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-16"
          >
            Stop managing chaos and start focusing on growth. Join 200+ firms leveraging our high-precision offshore talent.
          </motion.p>

          {/* CTA Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-16 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink("Hello Elite Cloud Books, I'd like to book a consultation to scale our firm's operations.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative px-10 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-4 shadow-[0_20px_50px_-15px_rgba(230,57,70,0.5)] overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight size={22} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Shine Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {/* Pulse Glow */}
              <div className="absolute inset-0 rounded-2xl bg-red-400/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink("Hi! I have a quick question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-6 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-4 w-full sm:w-auto"
            >
              <MessageCircle size={22} className="text-red-500" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              "Free Consultation",
              "No Commitment",
              "Trusted by 200+ Firms"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">
                <CheckCircle2 size={16} className="text-red-500/60" />
                {item}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
