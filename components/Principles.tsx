'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    num: '01',
    title: 'We only promise what we can deliver.',
    desc: 'No overpromising, no shortcuts. Every commitment we make is backed by a proven process and the expertise to follow through.'
  },
  {
    num: '02',
    title: 'Precision in numbers is precision in decisions.',
    desc: 'Accurate books aren\'t just about compliance — they\'re the foundation of every smart business decision your clients will ever make.'
  },
  {
    num: '03',
    title: 'Your success is the only metric that matters.',
    desc: 'We measure ourselves by the growth, efficiency, and peace of mind we create for your firm — nothing else.'
  },
  {
    num: '04',
    title: 'Security and confidentiality are non-negotiable.',
    desc: 'We treat your clients\' financial data with the same care we\'d give our own. ISO-certified protocols, every time, no exceptions.'
  },
  {
    num: '05',
    title: 'Technology should simplify, not complicate.',
    desc: 'We plug into the tools you already use — QuickBooks, Xero, Sage, and more — delivering expertise without disrupting your workflow.'
  },
  {
    num: '06',
    title: 'Transparency builds the partnerships that last.',
    desc: 'Clear communication, honest reporting, and no surprises. You always know exactly what we\'re doing and why.'
  },
  {
    num: '07',
    title: 'Continuous improvement drives better results.',
    desc: 'Our team of CAs, CPAs, and EAs never stops learning. Your work is handled by professionals who are always ahead of regulatory change.'
  },
];

export default function Principles() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080c14] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/5 rounded-full blur-[160px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              What We Stand For
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            Our Guiding <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Principles.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-white/50 leading-relaxed font-light"
          >
            The values that guide every engagement, every deliverable, and every relationship we build.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.slice(0, 6).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08] hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600/0 group-hover:bg-red-600 transition-all duration-500 rounded-l-3xl" />
              <div className="text-5xl font-black text-white/5 group-hover:text-red-500/10 transition-colors duration-500 mb-4 leading-none font-display">
                {p.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-red-400 transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 7th principle — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="group relative mt-6 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-red-600/10 to-red-600/5 border border-red-500/20 backdrop-blur-sm transition-all duration-500 hover:border-red-500/40 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="text-6xl font-black text-red-500/20 font-display leading-none flex-shrink-0">
            {principles[6].num}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2 leading-snug">{principles[6].title}</h3>
            <p className="text-white/50 leading-relaxed font-light">{principles[6].desc}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
