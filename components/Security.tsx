'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Lock, 
  Fingerprint, 
  Server, 
  Eye, 
  CheckCircle2,
  Activity,
  Globe,
  ChevronRight
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    label: 'NETWORK',
    title: 'Secure Data Portal',
    desc: 'Advanced cloud-based file sharing with AES-256 bit encryption for safe exchange of sensitive information.',
    protocol: 'End-to-end encrypted',
    color: 'text-blue-500',
    glow: 'bg-blue-500/20'
  },
  {
    icon: Fingerprint,
    label: 'PHYSICAL',
    title: 'Biometric Controls',
    desc: 'Zero-tolerance clean-desk policy within a biometric-only facility monitored 24/7 by on-site security.',
    protocol: 'Biometric secured',
    color: 'text-green-500',
    glow: 'bg-green-500/20'
  },
  {
    icon: ShieldCheck,
    label: 'STANDARDS',
    title: 'Institutional Compliance',
    desc: 'Operating under ISO 27001 framework with CISM-certified leadership overseeing all data protocols.',
    protocol: 'ISO-compliant systems',
    color: 'text-red-500',
    glow: 'bg-red-500/20'
  }
];

export default function Security() {
  return (
    <section id="security" className="relative py-24 lg:py-48 bg-[#05080f] overflow-hidden">
      {/* 11. BACKGROUND ENHANCEMENT */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient */}
        <motion.div 
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px]" 
        />
        
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

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* 1. LAYOUT UPGRADE: 2-part layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
          
          {/* LEFT: Heading & Context */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-[11px] font-black uppercase tracking-[0.3em] border border-blue-500/20">
                Enterprise-Grade Defense
              </span>
              
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-white">
                Data Residency. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Multi-layer Protection.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl">
                We protect your firm’s most sensitive financial assets with an institutional-grade security architecture designed for the digital age.
              </p>

              {/* 8. ADD METRICS / TRUST SIGNALS */}
              <div className="flex flex-wrap gap-8 pt-4">
                {[
                  { label: "Certified", val: "ISO 27001", icon: ShieldCheck },
                  { label: "Infrastructure", val: "SOC 2 Ready", icon: Server },
                  { label: "Active", val: "24/7 Monitored", icon: Eye }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm tracking-tight">{item.val}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-black">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Animated security visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* 2. HERO VISUAL (Option C: animated shield/network) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 scale-110" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-green-500/10 scale-95" 
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <motion.div
                   animate={{ scale: [1, 1.05, 1] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative z-10 w-48 h-48 bg-gradient-to-br from-blue-600/20 to-green-600/20 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.2)]"
                 >
                    <Image 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80"
                      alt="ISO 27001 Certified"
                      width={120}
                      height={120}
                      className="object-cover rounded-full opacity-80"
                    />
                 </motion.div>
              </div>

              {/* Orbiting Elements */}
              {[Activity, Lock, Globe, Server].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 3.75
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <motion.div 
                    style={{ left: '50%', top: '-20px' }}
                    className="absolute -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0f18] border border-white/10 flex items-center justify-center text-blue-400 shadow-xl"
                  >
                    <Icon size={18} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. CARD DESIGN IMPROVEMENT & 7. VISUAL FLOW */}
        <div className="relative">
          {/* Visual Connecting Line (Conceptual) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* 4. HOVER INTERACTION */}
                <div className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 overflow-hidden h-full">
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-transparent via-transparent to-${feature.color.split('-')[1]}-500/5`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-10">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/50 transition-colors">
                        {feature.label}
                      </span>
                      
                      {/* 5. ICON UPGRADE */}
                      <div className={`relative w-16 h-16 rounded-2xl ${feature.glow} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                         <feature.icon className={`${feature.color} w-8 h-8 transition-transform duration-500 group-hover:scale-110`} />
                         <div className={`absolute inset-0 ${feature.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full`} />
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                    {/* 6. MICRO TRUST DETAILS */}
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-green-500" />
                       <span className="text-[11px] font-bold uppercase tracking-wider text-green-500/80">
                         {feature.protocol}
                       </span>
                    </div>
                  </div>

                  {/* Conceptual Flow Indicator */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/5 z-0">
                      <ChevronRight size={80} strokeWidth={1} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 9. BADGE SECTION IMPROVEMENT: Interactive glowing chips */}
        <div className="mt-24 lg:mt-32">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['SOC2 Ready', 'GDPR Compliant', 'ISO 27001', 'ISO 9001', 'HIPAA Aligned'].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3 group cursor-default transition-all hover:bg-blue-500/10 hover:border-blue-500/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                    {badge}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/30 text-xs font-medium uppercase tracking-[0.2em] text-center"
            >
              Trusted by firms handling high-sensitivity financial operations worldwide.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
