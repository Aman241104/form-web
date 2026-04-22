'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpenCheck, 
  Calculator, 
  LineChart, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { services } from '@/data/siteData';

// Map IDs to specific Lucide icons
const iconMap: Record<string, React.ElementType> = {
  'bookkeeping': BookOpenCheck,
  'tax': Calculator,
  'fpa': LineChart,
  'audit': ShieldCheck,
  'advisory': Briefcase,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[160px] opacity-30" />
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
              Precision Solutions
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            Specialized Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">for Modern Firms.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-white/60 leading-relaxed font-light"
          >
            Elite Cloud Books provides institutional-grade accounting infrastructure designed to scale with your firm.
          </motion.p>
        </div>

        {/* Dynamic Services Grid */}
        {/* 
          Layout Logic: 
          Total 5 items. 
          Desktop: 6 columns grid. 
          Item 1 (Featured): span 4. Item 2: span 2. 
          Item 3,4,5: span 2 each.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.id] || BookOpenCheck;
            const isFeatured = service.featured;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  ${isFeatured ? 'lg:col-span-4 md:col-span-2' : 'lg:col-span-2'}
                `}
              >
                <Link 
                  href={`/services/${service.id}`} 
                  className={`group relative flex flex-col h-full p-8 lg:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 overflow-hidden
                    hover:-translate-y-2 hover:bg-white/[0.08] hover:border-red-500/40 hover:shadow-[0_20px_40px_-15px_rgba(230,57,70,0.2)]
                  `}
                >
                  {/* Hover Inner Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-transparent group-hover:from-red-600/10 transition-all duration-500 pointer-events-none" />
                  
                  <div className={`relative z-10 flex flex-col h-full ${isFeatured ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}>
                    
                    {/* Top/Left Section: Icon & Header */}
                    <div className={`flex flex-col ${isFeatured ? 'lg:w-1/2' : ''}`}>
                      <div className="relative mb-8 w-fit">
                        <div className={`relative flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600/10 group-hover:border-red-500/50
                          ${isFeatured ? 'w-16 h-16' : 'w-14 h-14'}
                        `}>
                          <IconComponent className={`text-red-500 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${isFeatured ? 'w-8 h-8' : 'w-6 h-6'}`} />
                          
                          {/* Icon Blur Glow */}
                          <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                        </div>
                        
                        {/* Most Popular Badge */}
                        {isFeatured && (
                          <div className="absolute -top-3 -right-6 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-[9px] font-black text-white uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-red-600/30">
                            <Flame size={10} />
                            Most Popular
                          </div>
                        )}
                      </div>

                      <h3 className={`font-bold text-white mb-4 group-hover:text-red-400 transition-colors
                        ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'}
                      `}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-white/60 leading-relaxed font-light mb-8 transition-colors group-hover:text-white/80
                        ${isFeatured ? 'text-lg md:text-xl max-w-sm' : 'text-base line-clamp-3'}
                      `}>
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom/Right Section: Features & CTA */}
                    <div className={`flex flex-col flex-grow ${isFeatured ? 'lg:w-1/2 justify-center' : 'mt-auto'}`}>
                      
                      {/* Features Pills */}
                      {service.features && (
                        <div className={`flex flex-wrap gap-2 mb-8 ${isFeatured ? '' : 'lg:mb-10'}`}>
                          {service.features.slice(0, isFeatured ? 4 : 3).map((feature, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/50 tracking-wider uppercase transition-all duration-300 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 group-hover:scale-[1.02]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA Section */}
                      <div className={`mt-auto pt-6 border-t border-white/5 flex items-center justify-between group/cta
                        ${isFeatured ? 'border-t-0 pt-0' : ''}
                      `}>
                        <span className="text-sm font-bold tracking-[0.15em] uppercase text-white/50 group-hover:text-white transition-all duration-300 flex items-center gap-2 group-hover:translate-x-2">
                          View Details
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/cta:bg-red-600 group-hover/cta:border-red-600 group-hover/cta:translate-x-2 shadow-lg">
                          <ArrowRight size={18} className="text-white" />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Corner Accent Decor */}
                  {isFeatured && (
                     <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-red-600/20" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
