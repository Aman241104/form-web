'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Deep Parmar',
    role: 'Founder, CEO',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    bio: 'Driving scalable finance systems for global firms with precision and strategic foresight.',
    isCEO: true
  },
  {
    name: 'Rajat Shah',
    role: 'Founder, COO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Operational excellence architect, bridging US workflows with global delivery talent.',
    isCEO: false
  },
  {
    name: 'Charmi Shah',
    role: 'Chartered Accountant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Expert in high-precision audit preparation and institutional-grade bookkeeping.',
    isCEO: false
  },
];

export default function Leadership() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[160px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              The Guiding Minds
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8"
          >
            Leadership <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">& Expertise.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-[11px] font-black uppercase tracking-[0.4em]"
          >
            Led by experienced finance professionals with global exposure
          </motion.p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5
                ${leader.isCEO ? 'lg:col-span-6' : 'lg:col-span-3'}
              `}
            >
              {/* Image Container with Hover Grayscale -> Color */}
              <div className={`relative w-full overflow-hidden ${leader.isCEO ? 'aspect-[16/10]' : 'aspect-square'}`}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/90 via-[#05080f]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Bio Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                   <p className="text-white text-sm font-light leading-relaxed mb-4">
                     {leader.bio}
                   </p>
                   <a 
                     href="https://linkedin.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg hover:bg-red-500 transition-colors"
                   >
                     <Linkedin size={20} />
                   </a>
                </div>
              </div>

              {/* Info Block */}
              <div className="p-8 relative z-10 bg-gradient-to-t from-[#05080f] to-transparent">
                <h4 className={`font-bold text-white mb-1 group-hover:text-red-400 transition-colors ${leader.isCEO ? 'text-3xl' : 'text-xl'}`}>
                  {leader.name}
                </h4>
                <p className="text-red-500/80 text-[10px] font-black uppercase tracking-[0.2em]">
                  {leader.role}
                </p>
              </div>

              {/* CEO Badge */}
              {leader.isCEO && (
                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-tighter shadow-lg z-30">
                  Founder
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
