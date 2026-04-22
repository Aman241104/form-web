'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    shortQuote: "Elite Cloud Books transformed our accounting operations and helped us clear a complex audit with confidence.",
    fullQuote: "We are grateful to the Elite Cloud Books team for managing and successfully completing our accounting function and helping us clear an audit from a regional CPA firm. Their expertise and dedication made it possible for us to achieve this.",
    name: "John Carter",
    role: "Founder",
    company: "CPA Firm — Texas",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 2,
    shortQuote: "Their expertise and ability to collaborate on workflow planning has been remarkable. 100% satisfied with the results.",
    fullQuote: "For the past year, Elite Cloud Books has been our go-to for all our accounting needs. On top of being very cost-effective, their expertise and ability to effectively collaborate with our teams on workflow planning and execution has been nothing short of remarkable.",
    name: "Sarah Jenkins",
    role: "Managing Director",
    company: "Consulting Group — PA",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 3,
    shortQuote: "We couldn’t have done it without Elite Cloud Books managing the entire process. They are our go-to for all accounting needs.",
    fullQuote: "Elite Cloud Books handled our entire accounting function and helped me successfully clear an audit from a regional CPA firm. We couldn’t have done it without Elite Cloud Books managing the entire process. Kudos to the team and Thanks!",
    name: "Michael Chen",
    role: "CFO",
    company: "Consumer Lending — TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: 4,
    shortQuote: "Institutional grade infrastructure that scales. Exactly what our mid-market clients needed.",
    fullQuote: "The level of precision and institutional-grade infrastructure Elite Cloud Books brings to the table is unmatched. They've become an indispensable partner in our growth strategy for mid-market entities.",
    name: "David Ross",
    role: "Partner",
    company: "Audit Services — NY",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#05080f] overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[160px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block with Trust Signals */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold tracking-[0.2em] uppercase border border-red-500/20">
              Client Success Stories
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-8"
          >
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Industry Leaders.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em]">
              Average 5.0 Rating from 200+ Firms
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="group relative p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 hover:bg-white/[0.08] hover:border-red-500/20">
                {/* Decorative Quote Mark */}
                <div className="absolute top-10 left-10 text-white/5 opacity-10 transition-opacity group-hover:opacity-20">
                  <Quote size={120} weight="fill" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-8">
                    <div className="flex gap-1 text-yellow-500/80 mb-6 justify-center">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-snug tracking-tight text-white mb-8">
                      &ldquo;{testimonials[index].shortQuote}&rdquo;
                    </h3>
                  </div>

                  <p className="text-lg text-white/60 leading-relaxed font-light mb-12 max-w-2xl italic">
                    {testimonials[index].fullQuote}
                  </p>

                  <div className="flex items-center gap-5 mt-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-500/20 group-hover:border-red-500/50 transition-colors">
                      <Image 
                        src={testimonials[index].avatar}
                        alt={testimonials[index].name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-lg leading-tight">{testimonials[index].name}</h4>
                      <p className="text-white/40 text-sm uppercase tracking-widest">{testimonials[index].role}, {testimonials[index].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 flex justify-between items-center pointer-events-none px-4 lg:-px-20 z-20">
            <button 
              onClick={prevStep}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white pointer-events-auto transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:-translate-x-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextStep}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white pointer-events-auto transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:translate-x-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? 'w-12 bg-red-600' : 'w-6 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
