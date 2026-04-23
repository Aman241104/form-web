'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  ShieldCheck,
  Zap,
  ChevronRight,
  MessageCircle,
  BarChart3,
  Calculator,
  ClipboardCheck,
  FileText
} from 'lucide-react';
import { getWhatsAppLink } from '@/components/StickyWhatsApp';

interface Industry {
  id: string;
  name: string;
  desc: string;
  fullContent: string;
  icon: React.ReactNode;
}

const industryContent: Record<string, any> = {
  'cpa-accounting': {
    heroImage: '/images/ca-notebook.png',
    valueProp: "Stop managing hiring delays and seasonal bottlenecks. Get instant capacity with a team of high-precision Chartered Accountants.",
    challenges: [
      { q: "Hiring Bottlenecks", a: "Hard to find and retain qualified talent in the US market." },
      { q: "Seasonal Spikes", a: "Tax season pressure leading to burn-out and missed deadlines." },
      { q: "Compliance Pressure", a: "Increasing complexity in multi-state regulations and reporting." }
    ],
    solutions: [
      { q: "Global Talent Pool", a: "Direct access to pre-vetted, CA-qualified professionals." },
      { q: "Scalable Staffing", a: "Flex your team up or down based on your actual engagement load." },
      { q: "Ironclad Accuracy", a: "Meticulous internal controls led by CISM-certified leadership." }
    ],
    features: [
      { title: "Bookkeeping Support", icon: Calculator, bullets: ["Bank & CC Recon", "AP/AR Management", "Month-end Close"] },
      { title: "Tax Preparation", icon: FileText, bullets: ["Corporate Tax Prep", "Multi-state Compliance", "Sales Tax"] },
      { title: "Audit Readiness", icon: ClipboardCheck, bullets: ["Workpaper Prep", "Internal Controls", "Auditor Liaison"] },
      { title: "Client Reporting", icon: BarChart3, bullets: ["KPI Dashboards", "Cash Flow Forecasting", "Management Accounts"] }
    ],
    testimonial: {
      quote: "Elite Cloud Books literally saved our tax season. We scaled our capacity by 40% without a single local hire.",
      author: "Managing Partner",
      firm: "Top 100 CPA Firm — Texas"
    },
    metrics: [
      { label: "CPAs Supported", val: "100+" },
      { label: "Partner Exp", val: "15+ Yrs" },
      { label: "Scale Factor", val: "2.5x" }
    ]
  },
  // Default for other industries
  'default': {
    heroImage: '/images/team-meeting.png',
    valueProp: "Scale your financial operations with high-precision talent built specifically for your sector's complexity.",
    challenges: [
      { q: "Complexity", a: "Managing multi-site operations and consolidated reporting." },
      { q: "Visibility", a: "Lack of real-time financial data for strategic decisions." },
      { q: "Precision", a: "Errors in bookkeeping leading to audit risks." }
    ],
    solutions: [
      { q: "Domain Expertise", a: "Accountants who understand your specific industry rituals." },
      { q: "Live Reporting", a: "Real-time dashboards integrated with your cloud stack." },
      { q: "99.9% Accuracy", a: "Standardized workflows with double-verification." }
    ],
    features: [
      { title: "Financial Controls", icon: ShieldCheck, bullets: ["Internal Audits", "Data Integrity", "Secure Portals"] },
      { title: "Operational Scale", icon: TrendingUp, bullets: ["Staff Extension", "Process Automation", "24/7 Ops"] }
    ],
    testimonial: {
      quote: "The transition was seamless. They understood our industry's nuances in days, not weeks.",
      author: "CFO",
      firm: "Mid-Market Enterprise"
    },
    metrics: [
      { label: "Accuracy", val: "99.9%" },
      { label: "Efficiency", val: "+32%" },
      { label: "Firms Served", val: "200+" }
    ]
  }
};

export default function IndustryDetailClient({ industry }: { industry: Industry }) {
  const content = industryContent[industry.id] || industryContent['default'];

  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      
      {/* 1. SPLIT HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <Link 
                  href="/industries" 
                  className="group inline-flex items-center gap-2 text-white/40 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
                >
                  <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Back to All Industries
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-8"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20 mb-6">
                  Elite Specialized Vertical
                </span>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                  {industry.name.split('&').map((part, i) => (
                    <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400" : ""}>
                      {i === 1 ? ` & ${part}` : part}
                    </span>
                  ))}
                </h1>

                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl italic border-l-2 border-red-600/30 pl-6">
                  "{content.valueProp}"
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href={getWhatsAppLink(`Hello! I'm with a ${industry.name} firm and would like to discuss scaling our capacity.`)}
                    className="px-10 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-3"
                  >
                    Scale Your Firm
                    <ArrowRight size={20} />
                  </motion.a>
                  
                  {/* Visual Trust Stats */}
                  <div className="flex items-center gap-8 pl-0 sm:pl-4">
                    {content.metrics.map((m: any, i: number) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-white font-bold text-xl">{m.val}</span>
                        <span className="text-white/40 text-[9px] font-black uppercase tracking-widest leading-none">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                <Image 
                  src={content.heroImage} 
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge */}
                <div className="absolute top-10 right-10 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl animate-pulse">
                  <ShieldCheck size={24} className="text-red-500" />
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-red-600/5 blur-3xl -z-10 rounded-full" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM -> SOLUTION SECTION */}
      <section className="py-24 bg-[#080c14] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Problems */}
            <div className="space-y-12">
               <div className="space-y-4">
                 <h2 className="text-3xl font-bold text-white uppercase tracking-tighter flex items-center gap-3">
                   <AlertCircle className="text-red-500" /> Key Challenges
                 </h2>
                 <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-bold">The Friction Points We Solve</p>
               </div>
               <div className="space-y-8">
                 {content.challenges.map((c: any, i: number) => (
                   <div key={i} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-colors">
                     <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-3">
                       <span className="text-red-500/50 group-hover:text-red-500 transition-colors">0{i+1}</span> {c.q}
                     </h4>
                     <p className="text-white/50 font-light leading-relaxed">{c.a}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Solutions */}
            <div className="space-y-12">
               <div className="space-y-4">
                 <h2 className="text-3xl font-bold text-white uppercase tracking-tighter flex items-center gap-3">
                   <Zap className="text-green-500" /> Our Approach
                 </h2>
                 <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-bold">Engineered for your performance</p>
               </div>
               <div className="space-y-8">
                 {content.solutions.map((s: any, i: number) => (
                   <div key={i} className="group p-6 rounded-3xl bg-green-500/5 border border-green-500/10 hover:border-green-500/30 transition-colors">
                     <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-3">
                       <CheckCircle2 className="text-green-500 w-5 h-5" /> {s.q}
                     </h4>
                     <p className="text-white/60 font-light leading-relaxed">{s.a}</p>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURE BLOCKS */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">Specialized <span className="text-red-500">Service Blocks.</span></h2>
             <p className="text-white/40 text-lg font-light max-w-2xl mx-auto italic">High-precision delivery nodes tailored for {industry.name}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((f: any, i: number) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col h-full group"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 mb-8 transition-all group-hover:bg-red-600 group-hover:text-white group-hover:scale-110">
                   <f.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors">{f.title}</h4>
                <ul className="space-y-3 mt-auto">
                   {f.bullets.map((b: string, j: number) => (
                     <li key={j} className="flex items-center gap-3 text-white/50 text-sm font-light">
                       <div className="w-1 h-1 rounded-full bg-red-500/50" />
                       {b}
                     </li>
                   ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAILORED TESTIMONIAL */}
      <section className="py-24 bg-[#080c14] overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-12 lg:p-20 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden"
            >
               <div className="absolute top-10 left-10 text-white/5 text-[120px] font-black pointer-events-none select-none">"</div>
               <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={16} className="fill-current" />)}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-medium leading-snug tracking-tight text-white italic">
                    &ldquo;{content.testimonial.quote}&rdquo;
                  </h3>
                  <div className="flex flex-col items-center">
                     <div className="w-px h-12 bg-red-600 mb-6" />
                     <p className="text-white font-bold text-xl">{content.testimonial.author}</p>
                     <p className="text-red-500/60 text-[10px] uppercase font-black tracking-[0.3em] mt-1">{content.testimonial.firm}</p>
                  </div>
               </div>
            </motion.div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px]" />
      </section>

      {/* 5. DYNAMIC PROCESS (METHODOLOGY REUSE) */}
      <section className="py-32 lg:py-48 border-t border-white/5">
         <div className="container mx-auto px-6 max-w-7xl text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">Scaling <span className="text-red-500">Protocol.</span></h2>
              <p className="text-white/40 text-lg font-light tracking-widest uppercase">The path from bottleneck to breakthroughs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {[
                 { t: "Discovery", d: "Deep dive into your firm's unique workflows." },
                 { t: "Alignment", d: "Direct matching with sector-expert talent." },
                 { t: "Integration", d: "Seamless team extension into your tech stack." },
                 { t: "Expansion", d: "Monthly scaling cycles with 99.9% precision." }
               ].map((step, i) => (
                 <div key={i} className="space-y-6 group">
                   <div className="w-16 h-16 rounded-full border border-white/10 mx-auto flex items-center justify-center text-red-500 font-black text-xl group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all">0{i+1}</div>
                   <h4 className="text-white font-bold text-xl uppercase tracking-widest">{step.t}</h4>
                   <p className="text-white/40 text-sm font-light leading-relaxed">{step.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. CONVERSION CTA */}
      <section className="relative py-32 lg:py-48 bg-[#05080f] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                Scale Your {industry.id === 'cpa-accounting' ? 'CPA' : ''} Firm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Without Hiring Delays.</span>
              </h2>
              
              <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
                Discover how Elite Cloud Books delivers institutional-grade capacity for high-volume financial operations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                 <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink(`I'm ready to scale our ${industry.name} operations with your experts.`)}
                  className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl shadow-red-600/30 flex items-center gap-4"
                >
                  Book Consultation Now
                  <ArrowRight size={18} />
                </motion.a>
                <Link href="/contact" className="group text-white/50 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors flex items-center gap-2">
                  View Onboarding Pricing <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="pt-12 flex items-center justify-center gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <div className="relative w-12 h-12">
                   <Image src="/images/badge-iso-27001.png" alt="ISO" fill className="object-cover rounded-full" />
                 </div>
                 <div className="relative w-24 h-8">
                   <Image src="/images/badge-quickbooks.png" alt="QB" fill className="object-contain" />
                 </div>
                 <div className="relative w-20 h-8">
                   <Image src="/images/logo-xero.png" alt="Xero" fill className="object-contain" />
                 </div>
              </div>
            </motion.div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[180px] opacity-20" />
      </section>

    </main>
  );
}
