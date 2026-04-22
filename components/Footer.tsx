'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from './StickyWhatsApp';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const footerLinks = {
    services: [
      { name: 'Bookkeeping & Accounting', href: '/services' },
      { name: 'Tax Preparation', href: '/services' },
      { name: 'FP&A (Planning)', href: '/services' },
      { name: 'Audit Services', href: '/services' },
      { name: 'Advisory Services', href: '/services' },
    ],
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Leadership', href: '/about' },
      { name: 'Industries', href: '/industries' },
      { name: 'Careers', href: '/contact' },
      { name: 'Contact', href: '/contact' },
    ]
  };

  return (
    <footer className="relative bg-[#05080f] overflow-hidden pt-24 border-t border-white/5">
      {/* Background Depth & Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Structured Trust Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-y border-white/5 mb-20 gap-4">
          <div className="flex items-center gap-3 text-red-500/80 text-[10px] font-bold uppercase tracking-[0.3em]">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Intelligent Routing Active
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/30 text-[10px] font-bold uppercase tracking-widest">
            <span>Global Delivery</span>
            <span className="hidden md:inline text-white/10">•</span>
            <span>US Compliance</span>
            <span className="hidden md:inline text-white/10">•</span>
            <span>24/7 Operations</span>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <h2 className="text-xl font-bold text-white tracking-[0.2em] uppercase transition-colors group-hover:text-red-500">
                Elite Cloud Books<span className="text-red-500">.</span>
              </h2>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light italic">
              "Built for precision. Designed for scale."
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
              Elite Cloud Books is a U.S.-based accounting partner helping firms scale with reliability and global expertise.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="group relative text-white/40 hover:text-white text-sm transition-colors flex items-center w-fit"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="group relative text-white/40 hover:text-white text-sm transition-colors flex items-center w-fit"
                  >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Global Presence</h4>
            <div className="space-y-6">
              <a href="tel:+12674169800" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-white font-medium text-sm">+1 267-416-9800</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">US Office (Bala Cynwyd, PA)</p>
                </div>
              </a>
              <a href="mailto:admin@elitecloudbooks.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-white font-medium text-sm underline underline-offset-4 decoration-red-500/30 group-hover:decoration-red-500 transition-colors">admin@elitecloudbooks.com</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Inquiries & Support</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-white font-medium text-sm">Domestic & Offshore Delivery</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Strategic Talent Hubs</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/30 font-bold tracking-[0.1em] uppercase">
          <div>
            © {new Date().getFullYear()} Elite Cloud Books. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Legal Disclosures</Link>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-red-500" />
            ISO Aligned • Secure Infra
          </div>
        </div>

      </div>
    </footer>
  );
}
