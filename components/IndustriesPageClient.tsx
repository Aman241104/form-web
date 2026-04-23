'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  Users,
  Building2,
  Stethoscope,
  Cpu,
  Coins,
  ShieldCheck,
  Zap
} from 'lucide-react';

const industryCards = [
  {
    id: 'cpa-accounting',
    name: 'CPA & Accounting Firms',
    desc: 'Empowering accounting practices with scalable offshore talent extensions and high-precision delivery models.',
    image: '/images/ca-notebook.png',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'healthcare-dental',
    name: 'Healthcare & Dental Groups',
    desc: 'Specialized financial controls and consolidated reporting for multi-site medical and dental operations.',
    image: '/images/team-meeting.png',
    icon: Stethoscope,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'manufacturing-textile',
    name: 'Manufacturing & Textile',
    desc: 'Inventory management and cost accounting for high-volume producers across diverse global sectors.',
    image: '/images/team-working-blob.png',
    icon: Building2,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'construction-real-estate',
    name: 'Construction & Real Estate',
    desc: 'Project-based accounting and financial oversight for developers and heavy industry enterprises.',
    image: '/images/harbor-sunset.png',
    icon: Zap,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'technology-saas',
    name: 'Technology & SaaS',
    desc: 'Revenue recognition and KPI dashboarding for high-growth tech firms scaling through complex cycles.',
    image: '/images/finance-growth.png',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'consumer-lending',
    name: 'Consumer Lending',
    desc: 'Comprehensive accounting support for financial services and private lending groups requiring precision.',
    image: '/images/finance-piggybank.png',
    icon: Coins,
    color: 'from-pink-500 to-rose-500'
  }
];

export default function IndustriesPageClient() {
  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              Specialized Verticals
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter">
              Tailored for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Critical Sectors.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto">
              Deep domain expertise across high-complexity industries — built for scale, compliance, and institutional performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INDUSTRIES GRID */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCards.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={`/industries/${industry.id}`}
                  className="group relative flex flex-col h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={industry.image} 
                      alt={industry.name}
                      fill
                      className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-10 mt-auto flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-auto group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 group-hover:scale-110">
                      <industry.icon size={24} />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors">{industry.name}</h3>
                      <p className="text-white/60 font-light leading-relaxed line-clamp-3">
                        {industry.desc}
                      </p>
                      <div className="pt-6 flex items-center gap-3 text-red-500 text-xs font-black uppercase tracking-widest">
                        View Vertical
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CONVERSION */}
      <section className="relative py-32 lg:py-48 bg-[#080c14] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-12">
           <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
             Don't See Your Industry? <br />
             <span className="text-red-500">We Likely Support It.</span>
           </h2>
           <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">
             Our accounting infrastructure is built on universal financial principles with deep expertise in 50+ sub-sectors.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/contact" 
                className="px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-xs tracking-[0.4em] transition-all"
              >
                Inquire Specialization
              </motion.a>
              <Link href="/services" className="text-white/50 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors flex items-center gap-2">
                Explore Core Services <ChevronRight size={16} />
              </Link>
           </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[160px] opacity-20" />
      </section>

    </main>
  );
}
