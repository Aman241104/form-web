'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Users, 
  RefreshCcw, 
  Shield, 
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { getWhatsAppLink } from './StickyWhatsApp';

const steps = [
  {
    num: '01',
    title: 'Precision Discovery',
    keyword: 'Discovery',
    desc: 'We analyze your capacity bottlenecks and tech stack requirements to build a tailored scaling plan.',
    icon: Search,
    image: '/images/ca-notebook.png'
  },
  {
    num: '02',
    title: 'Talent Matching',
    keyword: 'Matching',
    desc: 'We pair your firm with top-tier Chartered Accountants who align with your specific industry expertise.',
    icon: Users,
    image: '/images/team-leaders.png'
  },
  {
    num: '03',
    title: 'Direct Partnership',
    keyword: 'Partnership',
    desc: 'An integrated extension of your team with direct communication channels and daily ritual alignment.',
    icon: RefreshCcw,
    image: '/images/team-collab.png'
  },
  {
    num: '04',
    title: 'White-Label Option',
    keyword: 'White-Label',
    desc: 'Our experts operate seamlessly behind your brand, providing a consistent experience for your clients.',
    icon: Shield,
    image: '/images/team-meeting.png'
  }
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-24 lg:py-48 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-20 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              Execution Model
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white"
          >
            The Elite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Methodology.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Timeline Steps */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-12">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`group relative pl-0 md:pl-16 cursor-default transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  >
                    {/* Step Indicator Dot/Number */}
                    <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-[#0a0f18] border border-white/10 items-center justify-center z-10 transition-all duration-500 group-hover:border-red-500 group-hover:scale-110">
                      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-red-500 scale-150 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-white/20'}`} />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-red-500/50 group-hover:text-red-500 transition-colors">
                          {step.num}
                        </span>
                        <step.icon size={20} className={`transition-colors duration-500 ${isActive ? 'text-red-500' : 'text-white/40'}`} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {step.title.replace(step.keyword, '')}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                          {step.keyword}
                        </span>
                      </h3>
                      
                      <p className="text-lg text-white/50 font-light leading-relaxed max-w-xl transition-colors group-hover:text-white/70">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Layer Below Steps */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-20 pt-12 border-t border-white/5 flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">100+ Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">15+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Synced Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="relative group">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={steps[activeStep].image} 
                      alt={steps[activeStep].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/90 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Visual Accent */}
                <div className="absolute inset-0 border-[12px] border-white/5 pointer-events-none" />
              </div>

              {/* Floating Decorative Badge */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-48 h-48 border border-white/5 rounded-full border-dashed hidden md:block"
              />
            </div>

            {/* Section CTA */}
            <div className="mt-16 text-center lg:text-left">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppLink("Hello Elite Cloud Books, I'd like to start our engagement and discuss your methodology.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative px-10 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-600/20 transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden"
              >
                <Zap size={20} className="fill-current" />
                <span>Start Your Engagement</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
