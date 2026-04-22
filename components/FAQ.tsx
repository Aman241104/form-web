'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CalendarDays, Plus } from 'lucide-react';
import { getWhatsAppLink } from './StickyWhatsApp';

const faqs = [
  {
    category: 'COMPLIANCE',
    q: "How does Elite Cloud Books ensure US compliance?",
    a: "We operate right here in the U.S. with ironclad, compliant contracts and data protection protocols. Our entire process is AICPA-aligned, meaning you get complete peace of mind and zero surprises."
  },
  {
    category: 'CLIENTS',
    q: "Who do you typically work with?",
    a: "We partner exclusively with ambitious U.S. CPA firms, growing accounting practices, and mid-market businesses. If you're a PE-backed company needing scalable financial ops, you're exactly in our wheelhouse."
  },
  {
    category: 'INTEGRATION',
    q: "What software stack are your professionals trained in?",
    a: "We don't do learning curves. Our team arrives proficient in QuickBooks Online, Xero, Sage Intacct, NetSuite, and major tax platforms like ProConnect and UltraTax. We seamlessly plug into whatever workflow you already use."
  },
  {
    category: 'OPERATIONS',
    q: "How do you handle the time zone difference?",
    a: "Time zones shouldn't slow you down. Our teams operate on a hybrid schedule, guaranteeing at least 4 hours of direct overlap with US business hours. This means real-time daily syncs and immediate answers when you need them most."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] opacity-30" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context & CTAs */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
                  Quick Help Guide
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
              >
                Common <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Questions.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-md text-lg text-white/60 leading-relaxed font-light"
              >
                Everything you need to know about working with Elite Cloud Books — from compliance protocols to daily collaboration.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <h4 className="text-white font-bold text-xl mb-2">Still have questions?</h4>
              <p className="text-white/50 text-sm font-light mb-6">Our partners are available to provide custom insights for your firm.</p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={getWhatsAppLink("Hello Elite Cloud Books, I have some questions about how your services work.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 text-white transition-all duration-300 group"
                >
                  <MessageCircle size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm uppercase tracking-wider">Chat on WhatsApp</span>
                </a>
                
                <a 
                  href="#contact"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-500/40 group"
                >
                  <CalendarDays size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-sm uppercase tracking-wider">Book Consultation</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isActive = active === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setActive(isActive ? null : index)}
                      className={`group relative w-full text-left p-6 md:p-8 rounded-[1.5rem] transition-all duration-500 overflow-hidden
                        ${isActive 
                          ? 'bg-white/10 border-white/20 shadow-2xl shadow-red-500/5' 
                          : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-red-500/30 hover:-translate-y-1'
                        } border backdrop-blur-sm
                      `}
                      aria-expanded={isActive}
                    >
                      {/* Active Left Accent Line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-red-600 transition-transform duration-500 origin-top
                        ${isActive ? 'scale-y-100' : 'scale-y-0'}
                      `} />
                      
                      {/* Hover Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-transparent group-hover:from-red-600/5 transition-all duration-500 pointer-events-none" />

                      <div className="relative z-10 flex items-start justify-between gap-6">
                        <div className="flex flex-col gap-3">
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300
                            ${isActive ? 'text-red-500' : 'text-white/30 group-hover:text-red-500/60'}
                          `}>
                            {faq.category}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-bold leading-snug transition-colors duration-300
                            ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}
                          `}>
                            {faq.q}
                          </h3>
                        </div>

                        {/* Animated Plus/Cross Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500
                          ${isActive ? 'bg-red-600 border-red-600 rotate-45' : 'bg-white/5 border-white/10 group-hover:border-red-500/50 group-hover:bg-red-600/10'}
                        `}>
                          <Plus size={20} className={isActive ? 'text-white' : 'text-red-500'} />
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-6 text-base md:text-lg text-white/70 leading-relaxed font-light border-t border-white/10 mt-6">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
