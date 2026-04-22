'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  TrendingUp, 
  ChevronRight, 
  BarChart3, 
  Target, 
  Activity,
  Layers,
  Quote,
  Layout
} from 'lucide-react';
import { getWhatsAppLink } from '@/components/StickyWhatsApp';
import { projects } from '@/data/siteData';

interface Metric {
  label: string;
  value: string;
}

interface TimelineStep {
  step: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  author: string;
  firm: string;
}

interface Project {
  id: string;
  category: string;
  title: string;
  subtext: string;
  challenge: string;
  approach: string;
  outcome: string;
  industryContext: string;
  testimonial: Testimonial;
  timeline: TimelineStep[];
  metrics: Metric[];
  image: string;
}

function Counter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Power3 ease out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = easedProgress * numericPart;
      
      setDisplayValue(current.toFixed(current % 1 === 0 ? 0 : 1));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericPart]);

  return <span>{displayValue}{suffix}</span>;
}

export default function CaseStudyDetailClient({ project }: { project: Project }) {
  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
                <Link href="/projects" className="group inline-flex items-center gap-2 text-white/40 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-[0.2em]">
                  <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back to Case Studies
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20 mb-2">
                  {project.category} Transformation
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl border-l-2 border-red-600/30 pl-6 italic">
                  "{project.subtext}"
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href={getWhatsAppLink(`Hello! I'd like to discuss a project similar to ${project.title}.`)}
                    className="px-10 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-3"
                  >
                    Discuss Your Project
                    <ArrowRight size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -inset-4 bg-red-600/5 blur-3xl -z-10 rounded-full" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. QUICK METRICS STRIP WITH COUNTERS */}
      <section className="relative z-20 -mt-10 lg:-mt-16">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 lg:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center group hover:border-red-500/30 transition-all"
                >
                   <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                      {i === 0 ? <TrendingUp size={24} /> : i === 1 ? <Target size={24} /> : <Activity size={24} />}
                   </div>
                   <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                     <Counter value={m.value} />
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{m.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. STRUCTURED STORYTELLING & VISUAL PROOF */}
      <section className="py-24 lg:py-48 bg-[#080c14] border-y border-white/5 mt-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-32">
               
               {/* Left: Content Block */}
               <div className="lg:col-span-8 space-y-24">
                  
                  {/* Challenge */}
                  <div className="space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500">
                           <AlertCircle size={20} />
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-tight">The <span className="text-red-500">Challenge.</span></h2>
                     </div>
                     <p className="text-xl text-white/70 leading-relaxed font-light">
                        {project.challenge}
                     </p>
                     
                     {/* Simulated "Before" Visual */}
                     <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 opacity-50 border-dashed">
                        <div className="flex items-center justify-between mb-6">
                           <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Legacy State Analysis</span>
                           <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase">Critical Friction</div>
                        </div>
                        <div className="space-y-4">
                           <div className="h-2 w-full bg-white/5 rounded-full" />
                           <div className="h-2 w-[80%] bg-white/5 rounded-full" />
                           <div className="h-2 w-[60%] bg-white/5 rounded-full" />
                        </div>
                     </div>
                  </div>

                  {/* Our Approach / Solution */}
                  <div className="space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                           <Zap size={20} />
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-tight">The <span className="text-blue-500">Approach.</span></h2>
                     </div>
                     <p className="text-xl text-white/70 leading-relaxed font-light">
                        {project.approach}
                     </p>

                     {/* Simulated "Dashboard Mockup" Visual */}
                     <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition-all" />
                        <div className="relative p-8 rounded-[2.5rem] bg-[#0a0f18] border border-white/10 overflow-hidden">
                           <div className="flex items-center gap-4 mb-8">
                              <div className="w-3 h-3 rounded-full bg-red-500" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500" />
                              <div className="w-3 h-3 rounded-full bg-green-500" />
                           </div>
                           <div className="grid grid-cols-3 gap-4 mb-8">
                              <div className="h-20 rounded-xl bg-white/5 animate-pulse" />
                              <div className="h-20 rounded-xl bg-white/5 animate-pulse delay-75" />
                              <div className="h-20 rounded-xl bg-white/5 animate-pulse delay-150" />
                           </div>
                           <div className="h-32 rounded-xl bg-white/5 flex items-center justify-center text-white/10">
                              <BarChart3 size={48} />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center text-green-500">
                           <CheckCircle2 size={20} />
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-tight">The <span className="text-green-500">Outcome.</span></h2>
                     </div>
                     <p className="text-xl text-white/70 leading-relaxed font-light">
                        {project.outcome}
                     </p>
                  </div>

               </div>

               {/* Right: Side Assets */}
               <div className="lg:col-span-4 space-y-12">
                  
                  {/* Industry Context Block */}
                  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl -mr-16 -mt-16" />
                     <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest flex items-center gap-3">
                        <Layers size={18} className="text-red-500" /> Market Context
                     </h4>
                     <p className="text-white/50 text-sm font-light leading-relaxed italic">
                        "{project.industryContext}"
                     </p>
                  </div>

                  {/* Client Testimonial */}
                  <div className="p-8 rounded-[2rem] bg-gradient-to-br from-red-600/10 to-transparent border border-red-500/20 relative">
                     <Quote size={40} className="text-white/10 absolute top-6 right-6" />
                     <div className="flex gap-1 text-yellow-500 mb-6">
                        {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={12} className="fill-current" />)}
                     </div>
                     <p className="text-lg text-white font-medium mb-8 leading-snug italic">
                        &ldquo;{project.testimonial.quote}&rdquo;
                     </p>
                     <div className="flex flex-col">
                        <p className="text-white font-bold text-sm">{project.testimonial.author}</p>
                        <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em]">{project.testimonial.firm}</p>
                     </div>
                  </div>

                  {/* Timeline / Process */}
                  <div className="space-y-8">
                     <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] pl-2">Execution Protocol</h4>
                     <div className="space-y-6">
                        {project.timeline.map((step, i) => (
                           <div key={i} className="flex gap-6 group">
                              <div className="flex flex-col items-center">
                                 <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">0{i+1}</div>
                                 {i < project.timeline.length - 1 && <div className="w-px flex-grow bg-white/5 my-2" />}
                              </div>
                              <div className="pb-4">
                                 <h5 className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-red-400 transition-colors">{step.step}</h5>
                                 <p className="text-white/40 text-xs font-light mt-1">{step.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </section>

      {/* 4. RELATED CASE STUDIES */}
      <section className="py-24 lg:py-48">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-left mb-16 space-y-4">
               <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Similar <span className="text-red-500">Transformations.</span></h2>
               <p className="text-white/40 text-lg font-light italic">More proof of scalable precision across the ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {relatedProjects.map((rp, i) => (
                 <Link href={`/projects/${rp.id}`} key={i} className="group relative block aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 transition-all hover:-translate-y-2 hover:border-red-500/30">
                    <Image src={rp.image} alt={rp.title} fill className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                       <span className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-2">{rp.category}</span>
                       <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">{rp.title}</h4>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 5. FINAL CONVERSION CTA */}
      <section className="relative py-32 lg:py-48 bg-[#05080f] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-12">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                Want Similar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">Results?</span>
              </h2>
              <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
                Stop managing chaos and start focusing on growth. Let's discuss your firm's bottlenecks and build your scaling roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                 <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink(`I'm ready to achieve results like the ${project.title} case study.`)}
                  className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl shadow-red-600/30 flex items-center gap-4"
                >
                  Book Discovery Call
                  <ArrowRight size={18} />
                </motion.a>
              </div>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Zero Commitment • High Precision • 100% US Compliant</p>
            </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[180px] opacity-20" />
      </section>

    </main>
  );
}
