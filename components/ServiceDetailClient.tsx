'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ChevronRight
} from 'lucide-react';
import { getWhatsAppLink } from '@/components/StickyWhatsApp';

interface Service {
  id: string;
  title: string;
  desc: string;
  features?: string[];
  fullContent: string;
  icon: React.ReactNode;
}

export default function ServiceDetailClient({ service }: { service: Service }) {
  const isBookkeeping = service.id === 'bookkeeping';
  
  const benefits = service.features || [
    "Real-time financial visibility",
    "Audit-ready books at all times",
    "Zero reconciliation errors",
    "Strategic growth insights"
  ];

  const processSteps = [
    { title: "Discovery", desc: "We analyze your current workflows and identify optimization gaps." },
    { title: "Setup", desc: "Onboarding onto our secure institutional-grade cloud infrastructure." },
    { title: "Execution", desc: "Our CA-led team handles daily operations with 99.9% precision." },
    { title: "Reporting", desc: "Monthly deep-dives with actionable insights for your firm." }
  ];

  const toolBadges = [
    { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80", alt: "QuickBooks" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80", alt: "Xero" },
    { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80", alt: "Sage Intacct" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80", alt: "Zoho Books" }
  ];

  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] opacity-20" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
                <Link href="/services" className="group inline-flex items-center gap-2 text-white/40 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-[0.2em]">
                  <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back to Services
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20 mb-6">
                  Elite Specialized Service
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                  {service.title.split('&').map((part, i) => (
                    <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400" : ""}>
                      {i === 1 ? ` & ${part}` : part}
                    </span>
                  ))}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-12">
                  {service.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href={getWhatsAppLink(`Hello! I'd like to discuss your ${service.title} services.`)} className="px-10 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-3">
                    Start Consulting
                    <ArrowRight size={20} />
                  </motion.a>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xl">100+</span>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-black">Firms Served</span>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xl">99.9%</span>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-black">Accuracy</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                  {toolBadges.map((badge, i) => (
                    <div key={i} className="relative w-24 h-8">
                      <Image src={badge.src} alt={badge.alt} fill className="object-contain" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image src={isBookkeeping ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" : "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                   <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <span className="font-bold text-white uppercase text-xs tracking-widest">Growth Focused</span>
                   </div>
                   <p className="text-white/60 text-sm font-light">"Our firm saw a 32% efficiency increase in 6 months using this service."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & BENEFITS */}
      <section className="py-24 bg-[#080c14] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Institutional-Grade <br /><span className="text-red-500">Service Overview.</span></h2>
                <div className="w-16 h-1 bg-red-600 rounded-full" />
              </div>
              <div className="text-lg md:text-xl text-white/70 leading-relaxed font-light whitespace-pre-line">
                {service.fullContent}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-red-500/30">
                    <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 mb-6">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">{benefit}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">Engineered for zero-chaos operations and maximum scability.</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MID-PAGE CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="p-12 lg:p-20 rounded-[4rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl shadow-3xl">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to see how we plug into your firm?</h3>
              <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">Get a tailored walk-through of our workflows and how we guarantee 99.9% precision.</p>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href={getWhatsAppLink(`I'd like a workflow walk-through for ${service.title}.`)} className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black uppercase text-sm tracking-[0.2em] transition-all hover:bg-red-600 hover:text-white">
                Request Workflow Demo
                <ArrowRight size={18} />
              </motion.a>
           </motion.div>
        </div>
      </section>

      {/* 4. PROCESS WORKFLOW */}
      <section className="py-24 lg:py-32 bg-[#05080f]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 block">The ECB Ritual</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Our 4-Step <span className="text-red-500">Alignment.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="mb-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-red-500 font-bold text-xl group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute left-[calc(50%+40px)] right-[-20px] top-[32px] h-px bg-white/10" />
                  )}
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{step.title}</h4>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TOOLS & SOCIAL PROOF */}
      <section className="py-24 bg-[#080c14] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
               <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" alt="Collaborative Team" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent opacity-40" />
               </div>
            </div>

            <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
               <div className="space-y-6">
                 <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Built on the <br /><span className="text-red-500">Modern Stack.</span></h2>
                 <p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
                   We integrate with your existing cloud accounting ecosystem. No migrations required, just seamless execution within your preferred platforms.
                 </p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                  {toolBadges.map((badge, i) => (
                    <div key={i} className="relative h-12">
                      <Image src={badge.src} alt={badge.alt} fill className="object-contain" />
                    </div>
                  ))}
               </div>

               <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 relative">
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={14} className="fill-current" />)}
                  </div>
                  <p className="text-lg md:text-xl text-white font-medium mb-6 leading-snug italic">
                    "The transition to their bookkeeping team was seamless. They understood our rituals in days, not weeks."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10" />
                    <div>
                       <p className="text-white font-bold text-sm">Managing Partner</p>
                       <p className="text-white/40 text-[10px] uppercase tracking-widest font-black">Top 100 CPA Firm</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="relative py-32 bg-[#05080f] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">Zero Chaos. <br />Maximum Growth.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href={getWhatsAppLink(`I'm ready to scale my ${service.title} with Elite Cloud Books.`)} className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-sm tracking-[0.3em] transition-all shadow-2xl shadow-red-600/30">
                  Book Consultation Now
                </motion.a>
                <Link href="/contact" className="text-white/50 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors flex items-center gap-2">
                  Learn About Pricing <ChevronRight size={16} />
                </Link>
              </div>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Trusted by 200+ Firms Nationwide</p>
            </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[140px] opacity-20" />
      </section>
    </main>
  );
}
