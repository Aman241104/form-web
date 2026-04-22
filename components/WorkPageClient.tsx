'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, TrendingUp, Users, Clock, ChevronRight, Zap } from 'lucide-react';
import { projects } from '@/data/siteData';
import { getWhatsAppLink } from './StickyWhatsApp';

const categories = ['All', 'CPA Firms', 'Healthcare', 'SaaS', 'Construction', 'Manufacturing', 'Private Equity'];

export default function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = projects.find(p => p.featured) || projects[0];

  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
                  Performance Proof
                </span>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                  Real Financial <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
                    Impact.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl">
                  We don't just list services; we deliver measurable outcomes. Explore how we scale capacity and precision for leading firms.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="#case-studies"
                    className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                  >
                    View Case Studies
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                    whileTap={{ scale: 0.98 }}
                    href={getWhatsAppLink("Hello! I'd like to discuss a potential partnership based on your case studies.")}
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                  >
                    Book Consultation
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Featured Card Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                 <Image 
                   src={featuredProject.image} 
                   alt={featuredProject.title}
                   fill
                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-80" />
                 
                 <div className="absolute bottom-10 left-10 right-10 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Featured Outcome</span>
                    <h3 className="text-2xl font-bold text-white leading-tight">{featuredProject.title}</h3>
                    <div className="flex gap-6">
                       {featuredProject.metrics.slice(0,2).map((m, i) => (
                         <div key={i} className="flex flex-col">
                            <span className="text-white font-bold text-lg">{m.value}</span>
                            <span className="text-white/40 text-[9px] uppercase tracking-widest font-black">{m.label}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDY BREAKDOWN */}
      <section className="py-24 bg-[#080c14] border-y border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
               <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                     <Image src={featuredProject.image} alt={featuredProject.title} fill className="object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-40" />
                  </div>
               </div>
               
               <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-6">
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">Deep Dive Breakdown</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Scaling a US CPA Firm by <span className="text-red-500">40% Capacity.</span></h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
                     <div className="space-y-2">
                        <h4 className="text-white font-black text-[10px] uppercase tracking-widest text-red-500">Challenge</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">{featuredProject.challenge}</p>
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-white font-black text-[10px] uppercase tracking-widest text-red-500">Approach</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">{featuredProject.approach}</p>
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-white font-black text-[10px] uppercase tracking-widest text-red-500">Outcome</h4>
                        <p className="text-white/60 text-sm font-light leading-relaxed">{featuredProject.outcome}</p>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-12">
                     {featuredProject.metrics.map((m, i) => (
                       <div key={i} className="flex flex-col">
                          <span className="text-4xl lg:text-5xl font-black text-white">{m.value}</span>
                          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mt-2">{m.label}</span>
                       </div>
                     ))}
                  </div>

                  <Link href={`/projects/${featuredProject.id}`} className="group inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-white/10">
                     Read Full Story
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 3. CASE STUDY GRID + FILTER */}
      <section id="case-studies" className="py-24 lg:py-48">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4 text-left">
               <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">Success <span className="text-red-500">Portfolio.</span></h2>
               <p className="text-white/40 text-lg font-light">Documented transformations across the accounting ecosystem.</p>
            </div>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2">
               {categories.map((cat) => (
                 <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
                    ${activeCategory === cat 
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                      : 'bg-white/5 text-white/40 border border-white/10 hover:text-white hover:bg-white/10'}
                  `}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isLarge = index % 3 === 0;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className={`
                      ${isLarge ? 'lg:col-span-8' : 'lg:col-span-4'}
                    `}
                  >
                    <Link 
                      href={`/projects/${project.id}`}
                      className="group relative block aspect-[16/9] lg:aspect-auto lg:h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:-translate-y-2"
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/40 to-transparent" />
                      
                      <div className="absolute inset-0 p-10 flex flex-col justify-end">
                         <div className="flex items-center gap-4 mb-4">
                            <span className="text-[9px] font-black uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                               {project.category}
                            </span>
                         </div>
                         <h3 className={`font-bold text-white mb-6 leading-tight group-hover:text-red-400 transition-colors
                           ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}
                         `}>
                           {project.title}
                         </h3>
                         
                         <div className="flex gap-8 items-center pt-6 border-t border-white/10">
                            {project.metrics.slice(0, 3).map((m, i) => (
                              <div key={i} className="flex flex-col">
                                 <span className="text-xl font-bold text-white">{m.value}</span>
                                 <span className="text-[9px] text-white/40 uppercase tracking-widest font-black leading-none mt-1">{m.label}</span>
                              </div>
                            ))}
                            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                               <ArrowRight size={18} />
                            </div>
                         </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. TOTAL IMPACT METRICS */}
      <section className="py-24 lg:py-32 bg-[#080c14] border-y border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                 { l: "Global Clients", v: "200+", d: "Ambition served daily." },
                 { l: "Efficiency Boost", v: "30%", d: "Average increase in cycle speed." },
                 { l: "Talent Network", v: "100+", d: "Pre-vetted, CA-qualified pros." }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                    <div className="text-5xl lg:text-7xl font-black text-white group-hover:text-red-500 transition-colors duration-500 tracking-tighter">{stat.v}</div>
                    <div className="space-y-1">
                       <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-500/80">{stat.l}</h4>
                       <p className="text-white/30 text-xs font-light">{stat.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. FINAL CONVERSION CTA */}
      <section className="relative py-32 lg:py-48 bg-[#05080f] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                Let's Build Your Next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">Success Story.</span>
              </h2>
              
              <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
                Ready to transform your financial operations? Join the ranks of firms achieving measurable scaling breakthroughs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                 <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink("Hello! I'm interested in starting a case-study worthy engagement with Elite Cloud Books.")}
                  className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl shadow-red-600/30 flex items-center gap-4"
                >
                  Start Your Engagement
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[140px] opacity-20" />
      </section>

    </main>
  );
}
