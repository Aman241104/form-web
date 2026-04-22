'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Share2, Zap, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { getWhatsAppLink } from '@/components/StickyWhatsApp';
import { blogPosts } from '@/data/siteData';

export default function BlogDetailClient({ post }: { post: any }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
  if (relatedPosts.length < 3) {
     const more = blogPosts.filter(p => p.id !== post.id && !relatedPosts.includes(p));
     relatedPosts.push(...more.slice(0, 3 - relatedPosts.length));
  }

  // Smart content parser: breaks string blob into paragraphs and structural blocks
  const rawParagraphs = post.content.split('\n\n').map((p: string) => p.trim()).filter(Boolean);

  return (
    <main className="bg-[#05080f] text-white min-h-screen relative">
      
      {/* 0. READING PROGRESSION */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-red-400 origin-left z-[1001]" 
      />

      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Return to Intelligence
            </Link>
          </motion.div>

          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white shadow-lg shadow-red-600/20">{post.category}</span>
              <div className="flex items-center gap-2"><Calendar size={14} className="text-red-500/60" /> {post.date}</div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-red-500/60" /> {post.readTime}</div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed italic border-l-2 border-red-600/30 pl-8">
              "{post.excerpt}"
            </p>

            {/* SMALL BUT POWERFUL ENGAGEMENT HOOK */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 max-w-2xl mt-12 backdrop-blur-md shadow-2xl"
            >
              <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                 <Zap size={16} /> In this article you'll learn:
              </p>
              <ul className="space-y-4">
                 <li className="flex items-start gap-4 text-white/80 font-light leading-snug">
                   <CheckCircle2 size={18} className="text-red-500/50 shrink-0 mt-0.5" /> {post.takeaway}
                 </li>
                 <li className="flex items-start gap-4 text-white/80 font-light leading-snug">
                   <CheckCircle2 size={18} className="text-red-500/50 shrink-0 mt-0.5" /> High-precision strategies to scale your financial operations.
                 </li>
                 <li className="flex items-start gap-4 text-white/80 font-light leading-snug">
                   <CheckCircle2 size={18} className="text-red-500/50 shrink-0 mt-0.5" /> Real-world impacts and compliance benchmarks for 2026.
                 </li>
              </ul>
            </motion.div>
          </motion.header>
        </div>
      </section>

      {/* 2. STRUCTURED ARTICLE CONTENT */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Main Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mb-24"
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/40 to-transparent" />
          </motion.div>

          <div className="space-y-8">
             {rawParagraphs.map((p: string, idx: number) => {
                const lines = p.split('\n').map(l => l.trim());
                
                // 3. CALLOUT BLOCKS (Auto-detecting sections from the raw text)
                if (lines.length > 1 && lines[0].endsWith(':')) {
                   const [title, ...rest] = lines;
                   return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-16 p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group shadow-2xl"
                      >
                         <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl -mr-24 -mt-24 transition-all group-hover:bg-red-600/20" />
                         <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
                            <FileText className="text-red-500" size={28} /> {title.replace(':', '')}
                         </h3>
                         <ul className="space-y-6">
                            {rest.filter(Boolean).map((line, i) => (
                               <li key={i} className="flex items-start gap-4 text-white/70 text-lg font-light leading-relaxed">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                                  <span>{line.replace(/^-\s|^\d+\.\s/, '')}</span>
                               </li>
                            ))}
                         </ul>
                      </motion.div>
                   );
                }

                return (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                   >
                      <p className="mb-10 text-xl text-white/80 font-light leading-loose tracking-wide">
                         {p}
                      </p>
                      
                      {/* 9. INLINE CTA (Placed after 2nd paragraph) */}
                      {idx === 1 && (
                         <div className="my-20 p-10 lg:p-12 rounded-[3rem] bg-gradient-to-br from-red-600/20 to-[#05080f] border border-red-500/20 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                            <div className="relative z-10 max-w-md">
                               <h4 className="text-3xl font-bold text-white mb-4">Need help implementing this?</h4>
                               <p className="text-white/60 text-lg font-light">Talk to our experts about your specific operational bottlenecks and build a custom scaling roadmap.</p>
                            </div>
                            <a 
                              href={getWhatsAppLink(`Hello! I'm reading "${post.title}" and would like to talk to an expert about implementing these strategies.`)} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="relative z-10 shrink-0 px-8 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-red-600/20 whitespace-nowrap flex items-center gap-3"
                            >
                              Talk to an Expert
                              <ArrowRight size={16} />
                            </a>
                         </div>
                      )}
                   </motion.div>
                );
             })}
          </div>

          {/* 7. SHARE & AUTHOR SECTION */}
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                   <User size={24} />
                </div>
                <div>
                   <p className="text-white font-bold text-lg">Editorial Team</p>
                   <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-loose">Elite Cloud Books</p>
                </div>
             </div>
             <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-lg group">
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* 8. RELATED POSTS */}
      <section className="py-24 lg:py-32 bg-[#080c14] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">Continue <span className="text-red-500">Reading.</span></h2>
              <Link href="/blog" className="hidden md:flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                 View All Insights <ArrowRight size={14} />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={`/blog/${rp.id}`} 
                    className="group flex flex-col h-full p-4 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-red-500/20 hover:-translate-y-2"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden mb-6">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </div>
                    <div className="px-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4 text-[9px] font-black uppercase tracking-widest text-white/40">
                        <span className="text-red-500/80">{rp.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{rp.readTime}</span>
                      </div>
                      <h5 className="text-xl font-bold text-white leading-snug group-hover:text-red-400 transition-colors mb-4">
                        {rp.title}
                      </h5>
                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">Read Insight</span>
                         <ArrowRight size={16} className="text-white/20 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 10. END CTA */}
      <section className="relative py-32 lg:py-48 bg-[#05080f] overflow-hidden border-t border-white/5">
         <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95]">
                Turn Insights Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Action.</span>
              </h2>
              <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                Theory doesn't scale firms—execution does. Let our expert partners implement these strategies directly into your workflow.
              </p>
              <div className="flex justify-center pt-4">
                 <Link 
                  href="/contact" 
                  className="group flex items-center gap-4 px-12 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] transition-all shadow-2xl shadow-red-600/30"
                 >
                    Book Free Consultation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>
         </div>
         {/* Background Decoration */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[160px] opacity-30" />
      </section>

    </main>
  );
}
