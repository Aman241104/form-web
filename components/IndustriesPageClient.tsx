'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Building2, 
  Stethoscope, 
  Factory, 
  HardHat, 
  Cpu, 
  Banknote,
  ChevronRight
} from 'lucide-react';
import { industries } from '@/data/siteData';
import { getWhatsAppLink } from '@/components/StickyWhatsApp';

const industryMetadata: Record<string, { tags: string[]; image: string; color: string }> = {
  'cpa-accounting': { 
    tags: ['High Volume', 'Talent Extension'], 
    image: '/images/office-discussion.png',
    color: 'from-blue-600/20'
  },
  'healthcare-dental': { 
    tags: ['Consolidated Reporting', 'HIPAA'], 
    image: '/images/team-leaders.png',
    color: 'from-green-600/20'
  },
  'manufacturing-textile': { 
    tags: ['Cost Accounting', 'Inventory'], 
    image: '/images/team-meeting.png',
    color: 'from-orange-600/20'
  },
  'construction-real-estate': { 
    tags: ['Project Based', 'WIP Tracking'], 
    image: '/images/finance-growth.png',
    color: 'from-yellow-600/20'
  },
  'technology-saas': { 
    tags: ['RevRec', 'KPI Focused'], 
    image: '/images/presentation-blob.png',
    color: 'from-purple-600/20'
  },
  'consumer-lending': { 
    tags: ['Precision', 'Audit Ready'], 
    image: '/images/team-collab.png',
    color: 'from-red-600/20'
  }
};

export default function IndustriesPageClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <motion.div 
            animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }} 
          />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
                Industry-Specific Excellence
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-10"
            >
              Tailored for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
                CRITICAL SECTORS.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12"
            >
              We don't just provide talent; we provide domain-specific expertise built for scale, compliance, and institutional performance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES GRID (FEATURED + ALL) */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {industries.map((industry, index) => {
              const meta = industryMetadata[industry.id] || { tags: [], image: '/images/office-discussion.png', color: 'from-red-600/20' };
              const isFeatured = index === 0;
              const isActive = hoveredIndex === index;

              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    ${isFeatured ? 'lg:col-span-8 lg:row-span-2' : 'lg:col-span-4'}
                  `}
                >
                  <Link 
                    href={`/industries/${industry.id}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group relative block h-full min-h-[340px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-700
                      hover:border-red-500/40 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(230,57,70,0.2)]
                      ${hoveredIndex !== null && !isActive ? 'opacity-40 grayscale' : 'opacity-100'}
                    `}
                  >
                    {/* Background Image Layer (The Active Preview) */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={meta.image} 
                        alt={industry.name}
                        fill
                        className={`object-cover transition-transform duration-1000 ${isActive ? 'scale-110' : 'scale-100'}`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} via-[#05080f]/90 to-[#05080f] opacity-80 group-hover:opacity-60 transition-opacity duration-700`} />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 h-full p-10 md:p-12 flex flex-col">
                      <div className="flex items-start justify-between mb-auto">
                        {/* Icon */}
                        <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600/10 group-hover:border-red-500/50">
                           <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                              {industry.icon}
                           </div>
                           <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 justify-end">
                          {meta.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-black text-white/40 uppercase tracking-widest group-hover:text-white/80 group-hover:bg-red-600/20 group-hover:border-red-500/20 transition-all">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-12">
                        <h3 className={`font-bold text-white mb-4 transition-colors group-hover:text-red-400
                          ${isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl'}
                        `}>
                          {industry.name}
                        </h3>
                        <p className={`text-white/60 font-light leading-relaxed transition-colors group-hover:text-white/80
                          ${isFeatured ? 'text-xl max-w-xl' : 'text-base line-clamp-3'}
                        `}>
                          {industry.desc}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between group/cta">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                          View Solutions
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover/cta:bg-red-600 group-hover/cta:border-red-600 group-hover/cta:translate-x-2 shadow-lg">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="relative py-32 bg-[#05080f] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">Does your industry <br />require precision?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink("Hello! I'd like to discuss accounting solutions for my specific industry.")}
                  className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] transition-all shadow-2xl shadow-red-600/30"
                >
                  Book Industry Consultation
                </motion.a>
              </div>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Expertise Across All High-Volume Sectors</p>
            </motion.div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[140px] opacity-20" />
      </section>

    </main>
  );
}
