'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Building2, UserCircle2, BarChart3, AlertCircle, Zap, TrendingUp, Globe } from 'lucide-react';
import { getWhatsAppLink } from './StickyWhatsApp';

type FormData = {
  persona: string;
  size: string;
  bottleneck: string;
  email: string;
};

const sanitize = (val: string) => val.replace(/[^a-zA-Z0-9]/g, '-');

export default function GatekeeperForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    persona: '',
    size: '',
    bottleneck: '',
    email: ''
  });
  const [emailError, setEmailError] = useState('');

  const nextStep = (field: keyof FormData, value: string) => {
    setData({ ...data, [field]: value });
    setStep(prev => prev + 1);
  };

  const handleSubmit = () => {
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setEmailError('Please enter a valid professional email address.');
      return;
    }
    setEmailError('');
    const message = `Hello Elite Cloud Books, I've completed the intake brief:
- Representing: ${data.persona}
- Bottleneck: ${data.bottleneck}
- Scale: ${data.size}
- Professional Email: ${data.email}`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  const stepsContent = [
    {
      id: 1,
      tag: "The Identity",
      title: <>Tell us who you <br />represent.</>,
      desc: "Choose your profile to get a customized experience and relevant solutions.",
      field: 'persona' as keyof FormData,
      options: [
        { label: 'US CPA Firm', desc: 'Specialized in 1040, 1120, and 1065 scale.', icon: Building2 },
        { label: 'Private Business', desc: 'Mid-market entities requiring CFO advisory.', icon: UserCircle2 }
      ]
    },
    {
      id: 2,
      tag: "The Friction",
      title: <>Identify your primary <br />bottleneck.</>,
      desc: "We'll tailor our execution model to solve your most pressing capacity challenges.",
      field: 'bottleneck' as keyof FormData,
      options: [
        { label: 'Tax Overload', desc: 'High-volume compliance during peak seasons.', icon: AlertCircle },
        { label: 'Audit Support', desc: 'Substantive testing & workpaper prep.', icon: CheckCircle2 },
        { label: 'Accounting/CAS', desc: 'Monthly close & ledger management.', icon: BarChart3 }
      ]
    },
    {
      id: 3,
      tag: "The Scale",
      title: <>What is your annual <br />revenue?</>,
      desc: "This helps us understand the scale of operations and resource requirements.",
      field: 'size' as keyof FormData,
      options: [
        { label: 'Under $1M', desc: 'Emerging practices and startups.', icon: Zap },
        { label: '$1M — $5M', desc: 'Established mid-market firms.', icon: TrendingUp },
        { label: '$5M+', desc: 'High-scale enterprise operations.', icon: Globe }
      ]
    }
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-48 bg-[#05080f] overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-600/5 rounded-full blur-[180px] opacity-30" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Dynamic Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  Step 0{step} — {step === 4 ? "Alignment" : stepsContent[step-1].tag}
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  {step === 4 ? "Where should we send your brief?" : stepsContent[step-1].title}
                </h2>

                <p className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-md">
                  {step === 4 ? "Enter your professional email to receive your custom capacity and scaling roadmap." : stepsContent[step-1].desc}
                </p>

                {step === 1 && (
                  <button 
                    onClick={() => window.open(getWhatsAppLink("Hello, I am looking for career opportunities at Elite Cloud Books."), '_blank')}
                    className="group flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    Looking for a career instead? 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interaction Cards */}
          <div className="lg:col-span-6">
            <div className="relative min-h-[360px] md:min-h-[440px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step < 4 ? (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="space-y-4"
                  >
                    {stepsContent[step-1].options.map((opt) => (
                      <motion.button
                        key={opt.label}
                        whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.08)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => nextStep(stepsContent[step-1].field, opt.label)}
                        className="w-full text-left p-5 md:p-8 rounded-xl md:rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                             {opt.icon ? <opt.icon size={20} /> : <Zap size={20} />}
                          </div>
                          <div>
                            <p className="text-white font-bold text-lg leading-none mb-2">{opt.label}</p>
                            <p className="text-white/40 text-sm font-light group-hover:text-white/60 transition-colors">{opt.desc}</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all">
                          <ArrowRight size={20} />
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-final"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 md:p-10 rounded-2xl md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl space-y-8 md:space-y-10"
                  >
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Professional Email</label>
                       <div className="relative">
                          <input
                            type="email"
                            placeholder="name@company.com"
                            value={data.email}
                            onChange={(e) => { setData({...data, email: e.target.value}); setEmailError(''); }}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                            className={`w-full bg-white/5 border rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none transition-colors ${emailError ? 'border-red-500/70' : 'border-white/10 focus:border-red-500/50'}`}
                          />
                          {emailError && (
                            <p className="mt-2 text-red-400 text-xs font-bold">{emailError}</p>
                          )}
                       </div>
                    </div>
                    
                    <div className="space-y-6">
                      <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSubmit}
                        className="w-full py-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 transition-all"
                      >
                        Connect on WhatsApp
                        <Send size={16} />
                      </motion.button>
                      
                      <button 
                        onClick={() => setStep(1)}
                        className="w-full text-center text-white/30 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
                      >
                        Start Over
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4 md:gap-6">
              <div className="flex gap-2">
                 {[1,2,3,4].map((s) => (
                   <div key={s} className={`h-1 rounded-full transition-all duration-700 ${step >= s ? 'w-8 bg-red-600' : 'w-4 bg-white/10'}`} />
                 ))}
              </div>
              <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Step {step} of 4</span>
           </div>

           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest italic">Intelligent routing active</span>
           </div>
        </div>
      </div>
    </section>
  );
}

