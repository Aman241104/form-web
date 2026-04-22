'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { getWhatsAppLink } from './StickyWhatsApp';
import { 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  Home, 
  Briefcase, 
  Info, 
  Building2, 
  Layout, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '/', icon: Home },
    { 
      name: 'SERVICES', 
      href: '/services',
      icon: Briefcase,
      subLinks: [
        { name: 'Bookkeeping & Accounting', href: '/services/bookkeeping' },
        { name: 'Tax Preparation', href: '/services/tax' },
        { name: 'Audit Services', href: '/services/audit' },
        { name: 'Advisory Services', href: '/services/advisory' },
        { name: 'FP&A (Planning)', href: '/services/fpa' },
      ]
    },
    { name: 'ABOUT', href: '/about', icon: Info },
    { 
      name: 'INDUSTRIES', 
      href: '/industries',
      icon: Building2,
      subLinks: [
        { name: 'Accounting Firms', href: '/industries/cpa-accounting' },
        { name: 'Healthcare', href: '/industries/healthcare-dental' },
        { name: 'Technology & SaaS', href: '/industries/technology-saas' },
      ]
    },
    { name: 'WORK', href: '/projects', icon: Layout },
    { name: 'BLOG', href: '/blog', icon: BookOpen },
  ];

  const menuVariants: Variants = {
    closed: { x: '100%' },
    opened: { 
      x: 0, 
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      x: '100%', 
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const itemVariants: Variants = {
    closed: { x: 20, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled 
            ? 'h-20 bg-[#05080f]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' 
            : 'h-24 bg-transparent'
        } flex items-center`}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative group flex items-center">
            <div className="absolute -inset-2 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-xl font-black tracking-[0.2em] text-white transition-transform group-hover:scale-[1.02]">
              ELITE CLOUD BOOKS<span className="text-red-600">.</span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/item px-4 py-2">
                <Link 
                  href={link.href} 
                  className={`text-[11px] font-black tracking-[0.2em] uppercase transition-colors flex items-center gap-1.5
                    ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'text-white active-link' : 'text-white/40 hover:text-white'}
                  `}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={10} className="group-hover/item:rotate-180 transition-transform" />}
                  
                  {/* Active/Hover Underline */}
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-red-600 to-red-400 transition-transform duration-500 origin-left scale-x-0 group-hover/item:scale-x-100 ${pathname === link.href ? 'scale-x-100' : ''}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-300">
                    <div className="bg-[#0a0f18] border border-white/10 p-6 rounded-3xl shadow-3xl min-w-[240px] backdrop-blur-2xl">
                      <div className="space-y-4">
                        {link.subLinks.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="block text-[10px] font-bold text-white/40 hover:text-red-500 uppercase tracking-widest transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="flex items-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink("Hello! I'd like to book a consultation.")} 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-red-600/20"
            >
              Consultation
            </motion.a>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white relative z-[1200]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1099] lg:hidden"
            />
            
            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[1100] bg-[#05080f] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,1)] border-l border-white/10"
            >
              <div className="h-24 px-6 flex items-center justify-between border-b border-white/5 shrink-0">
                <span className="text-lg font-black tracking-[0.2em] text-white">
                  ELITE CLOUD BOOKS<span className="text-red-600">.</span>
                </span>
              </div>
              <nav className="flex-grow p-8 space-y-8 overflow-y-auto custom-scrollbar">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  
                  return (
                    <motion.div key={i} variants={itemVariants} className="space-y-4">
                      <Link 
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center gap-4"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-white/5 text-white/40 group-active:scale-95'}`}>
                          <link.icon size={20} />
                        </div>
                        <span className={`text-3xl font-black uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-white/40 active:text-white'}`}>
                          {link.name}
                        </span>
                      </Link>
                      
                      {link.subLinks && (
                        <div className="pl-14 space-y-4 border-l border-white/5 ml-5">
                          {link.subLinks.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link 
                                key={sub.name} 
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between group/sub ${isSubActive ? 'text-red-500' : 'text-white/30 active:text-white'}`}
                              >
                                <span className="text-sm font-bold uppercase tracking-widest">{sub.name}</span>
                                <ArrowRight size={14} className={`transition-transform ${isSubActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-active/sub:opacity-100 group-active/sub:translate-x-0'}`} />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-8 border-t border-white/5 bg-[#080c14] shrink-0">
                <div className="mb-6 flex flex-col items-center text-center space-y-1">
                   <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Ready to scale?</p>
                   <p className="text-white font-bold text-sm flex items-center gap-2">
                     Talk to an expert <ArrowRight size={14} className="text-red-500" />
                   </p>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink()} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl flex items-center justify-center gap-4 font-black uppercase text-xs tracking-widest shadow-xl shadow-red-600/30 transition-all"
                >
                  <MessageCircle size={20} className="fill-current" />
                  Book Consultation
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
