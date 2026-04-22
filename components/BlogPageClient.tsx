'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Mail, 
  TrendingUp, 
  Tag, 
  Filter,
  Zap,
  BookOpen
} from 'lucide-react';
import { blogPosts } from '@/data/siteData';

const categories = ['All', 'Accounting', 'Tax', 'SaaS', 'Compliance', 'AI'];

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const postsToShow = filteredPosts.slice(0, visibleCount);

  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[180px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
                  Global Intelligence
                </span>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                  Applied <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
                    Insights.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl">
                  Strategic perspectives on finance, compliance, and scale. We share what we learn from scaling 200+ global firms.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="#intelligence-grid"
                    className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
                  >
                    Explore Articles
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Featured Post Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <Link href={`/blog/${featuredPost.id}`} className="group relative block aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src={featuredPost.image} 
                   alt={featuredPost.title}
                   fill
                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-80" />
                 
                 <div className="absolute bottom-10 left-10 right-10 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Featured Insight</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight transition-colors group-hover:text-red-400">{featuredPost.title}</h3>
                    <div className="flex gap-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
                       <span>{featuredPost.date}</span>
                       <span>•</span>
                       <span>{featuredPost.readTime}</span>
                    </div>
                 </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="sticky top-20 z-50 bg-[#05080f]/80 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Category Filter */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                 <Filter size={14} className="text-red-500 mr-2 hidden md:block" />
                 {categories.map((cat) => (
                   <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all
                      ${activeCategory === cat 
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                        : 'bg-white/5 text-white/40 border border-white/10 hover:text-white hover:bg-white/10'}
                    `}
                   >
                     {cat}
                   </button>
                 ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80 group">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-red-500 transition-colors" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search insights..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm text-white focus:outline-none focus:border-red-500/50 transition-all placeholder:text-white/20"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* 3. BLOG GRID */}
      <section id="intelligence-grid" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {postsToShow.map((post, index) => {
                // Layout logic: 1st is featured (span 8), 2nd & 3rd are medium (span 6 each), rest small (span 4 each)
                const isLarge = index === 0 && searchQuery === '' && activeCategory === 'All';
                const isMedium = (index === 1 || index === 2) && searchQuery === '' && activeCategory === 'All';
                
                let colSpan = 'lg:col-span-4';
                if (isLarge) colSpan = 'lg:col-span-8';
                if (isMedium) colSpan = 'lg:col-span-6';

                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className={colSpan}
                  >
                    <Link 
                      href={`/blog/${post.id}`}
                      className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:-translate-y-2"
                    >
                      {/* Image Layer */}
                      <div className={`relative w-full overflow-hidden ${isLarge ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/20 to-transparent opacity-80" />
                        <div className="absolute top-6 left-6">
                           <span className="px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-widest shadow-lg">
                              {post.category}
                           </span>
                        </div>
                      </div>
                      
                      {/* Content Layer */}
                      <div className="flex-grow p-8 flex flex-col">
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">
                           <span className="flex items-center gap-1.5"><Calendar size={12} className="text-red-500/60" /> {post.date}</span>
                           <span className="flex items-center gap-1.5"><Clock size={12} className="text-red-500/60" /> {post.readTime}</span>
                        </div>
                        
                        <h3 className={`font-bold text-white mb-4 leading-tight group-hover:text-red-400 transition-colors
                          ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}
                        `}>
                          {post.title}
                        </h3>
                        
                        <p className="text-white/50 font-light text-sm md:text-base leading-relaxed line-clamp-3 mb-8">
                           {post.excerpt}
                        </p>

                        {/* Practical Takeaway (Small but powerful idea) */}
                        <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
                           <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-red-500/20 transition-all">
                              <Zap size={14} className="text-red-500 shrink-0 mt-1" />
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-widest text-red-500/80 mb-1">Key Takeaway</p>
                                 <p className="text-xs text-white/60 font-medium leading-normal">{post.takeaway}</p>
                              </div>
                           </div>
                           
                           <div className="flex items-center justify-between group/cta">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">Read Insight</span>
                              <ArrowRight size={16} className="text-white/20 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                           </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Intermittent CTA Card */}
              {visibleCount >= 6 && filteredPosts.length > 6 && (
                <motion.div 
                  layout
                  className="lg:col-span-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                   <div className="h-full rounded-[2.5rem] bg-gradient-to-br from-red-600 to-red-800 p-10 flex flex-col justify-center text-center space-y-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                      <div className="relative z-10 space-y-4">
                         <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-white">
                            <Zap size={28} className="fill-current" />
                         </div>
                         <h3 className="text-2xl font-bold text-white">Need help implementing these strategies?</h3>
                         <p className="text-white/80 text-sm font-light leading-relaxed">Let's build a custom execution roadmap for your specific firm bottlenecks.</p>
                      </div>
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href={getWhatsAppLink("Hello! I was reading your blog and would like to discuss implementing some of these strategies.")}
                        className="relative z-10 py-4 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                      >
                        Book Discovery Call
                      </motion.a>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="mt-20 flex justify-center">
               <button 
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="group flex flex-col items-center gap-4 text-white/30 hover:text-red-500 transition-colors"
               >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Load More Insights</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-all">
                     <ChevronRight size={24} className="rotate-90 group-hover:translate-y-1 transition-transform" />
                  </div>
               </button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="py-32 text-center">
               <BookOpen size={48} className="text-white/5 mx-auto mb-6" />
               <h3 className="text-2xl font-bold text-white mb-2">No matching insights found.</h3>
               <p className="text-white/40 font-light">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. TRENDING ARTICLES SIDEBAR-STYLE SECTION */}
      <section className="py-24 bg-[#080c14] border-y border-white/5">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-20">
               <div className="lg:w-1/3 space-y-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-red-500 font-black text-xs uppercase tracking-widest">
                        <TrendingUp size={18} /> Top Discussions
                     </div>
                     <h2 className="text-4xl font-bold text-white tracking-tight uppercase">Most Read <br />This Month.</h2>
                  </div>
                  <p className="text-white/40 text-lg font-light leading-relaxed">
                     Our most influential pieces currently shaping the global offshore accounting narrative.
                  </p>
               </div>
               
               <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.slice(0, 4).map((post, i) => (
                    <Link key={i} href={`/blog/${post.id}`} className="flex gap-6 group items-center">
                       <div className="text-4xl font-black text-white/5 group-hover:text-red-500/20 transition-colors">0{i+1}</div>
                       <div className="space-y-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-red-500/60">{post.category}</span>
                          <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-tight line-clamp-2">{post.title}</h4>
                       </div>
                    </Link>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. NEWSLETTER SECTION */}
      <section className="relative py-32 lg:py-48 bg-[#05080f] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter">
                Scale Your Intelligence. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">Delivered Weekly.</span>
              </h2>
              
              <p className="text-xl text-white/50 font-light max-w-2xl mx-auto italic">
                Get the latest scaling strategies, compliance alerts, and talent extension workflows directly to your inbox.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                 <input 
                   type="email" 
                   placeholder="Your professional email"
                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/50 transition-colors shadow-2xl"
                 />
                 <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-10 py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all shadow-2xl shadow-red-600/30 whitespace-nowrap flex items-center justify-center gap-3"
                >
                  Join the Network
                  <Mail size={16} />
                </motion.button>
              </div>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">Zero Spam • High Impact • Industry Focused</p>
            </motion.div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[180px] opacity-20" />
      </section>

    </main>
  );
}
