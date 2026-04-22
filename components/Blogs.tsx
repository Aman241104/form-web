'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/data/siteData';

export default function Blogs() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <section id="blogs" className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
                Intelligence
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-8"
            >
              Insights from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Latest Blog.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-md text-lg text-white/60 leading-relaxed font-light mb-10"
            >
              Perspectives, strategies, and insights shaping modern finance and business operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/blog" 
                className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm font-bold tracking-[0.2em] uppercase"
              >
                View All Insights 
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Blog Grid */}
          <div className="lg:col-span-7 space-y-10">
            {/* Featured Post Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href={`/blog/${featuredPost.id}`} 
                className="group relative block aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-red-500/30"
              >
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-600 text-[10px] font-black text-white uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/60 text-[11px] font-medium uppercase tracking-widest">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                    {featuredPost.title}
                  </h4>
                  <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em]">
                    {featuredPost.date}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Other Posts List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="group flex flex-col p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-red-500/20 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="px-2">
                      <div className="flex items-center gap-3 mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        <span className="text-red-500/80">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{post.date}</span>
                      </div>
                      <h5 className="text-lg font-bold text-white leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                      {post.title}
                      </h5>
                      <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-[9px] font-black uppercase tracking-widest text-red-500/80 mb-1">Key Learning</p>
                      <p className="text-[11px] text-white/50 line-clamp-2">{post.takeaway}</p>
                      </div>
                      </div>
                      </Link>
                      </motion.div>              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
