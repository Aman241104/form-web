'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './GatekeeperForm.module.css';

type FormData = {
  persona: string;
  size: string;
  bottleneck: string;
  email: string;
};

export default function GatekeeperForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    persona: '',
    size: '',
    bottleneck: '',
    email: ''
  });

  const questionRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const transitionStep = (nextStep: number) => {
    const tl = gsap.timeline();
    
    tl.to([questionRef.current, optionsRef.current], {
      opacity: 0,
      x: -30,
      filter: 'blur(10px)',
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setStep(nextStep);
        gsap.fromTo([questionRef.current, optionsRef.current], 
          { opacity: 0, x: 30, filter: 'blur(10px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.1, ease: 'power3.out' }
        );
      }
    });
  };

  const handleSelection = (field: keyof FormData, value: string, next: number) => {
    setData({ ...data, [field]: value });
    transitionStep(next);
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>
      <div className={styles.background}>
        <div className={styles.radialGlow}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side: The Question */}
          <div ref={questionRef} className={styles.left}>
            <div className={styles.meta}>
              <span className={styles.stepNum}>STEP 0{step}</span>
              <div className={styles.progressLine}>
                <div className={styles.progressFill} style={{ width: `${(step / 4) * 100}%` }}></div>
              </div>
            </div>
            <h2 className={styles.question}>
              {step === 1 && "To better assist you, tell us who you represent."}
              {step === 2 && "What is your primary capacity bottleneck?"}
              {step === 3 && "Roughly, what is your annual revenue?"}
              {step === 4 && "Where should we send your capacity brief?"}
            </h2>
          </div>

          {/* Right Side: The Interactive Options */}
          <div ref={optionsRef} className={styles.right}>
            {step === 1 && (
              <div className={styles.options}>
                <button onClick={() => handleSelection('persona', 'CPA Firm', 2)} className={styles.option}>
                  <span className={styles.optionTitle}>US CPA Firm</span>
                  <span className={styles.optionDesc}>Specialized in 1040, 1120, and 1065 scale.</span>
                </button>
                <button onClick={() => handleSelection('persona', 'Business', 2)} className={styles.option}>
                  <span className={styles.optionTitle}>Private Business</span>
                  <span className={styles.optionDesc}>Mid-market entities requiring CFO advisory.</span>
                </button>
                <button onClick={() => setStep(1)} className={styles.secondaryBtn}>
                  I AM LOOKING FOR A CAREER →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.options}>
                <button onClick={() => handleSelection('bottleneck', 'Tax', 3)} className={styles.option}>
                  <span className={styles.optionTitle}>Tax Overload</span>
                  <span className={styles.optionDesc}>High-volume compliance during peak seasons.</span>
                </button>
                <button onClick={() => handleSelection('bottleneck', 'Audit', 3)} className={styles.option}>
                  <span className={styles.optionTitle}>Audit Support</span>
                  <span className={styles.optionDesc}>Substantive testing & workpaper prep.</span>
                </button>
                <button onClick={() => handleSelection('bottleneck', 'CAS', 3)} className={styles.option}>
                  <span className={styles.optionTitle}>Accounting/CAS</span>
                  <span className={styles.optionDesc}>Monthly close & ledger management.</span>
                </button>
              </div>
            )}

            {step === 3 && (
              <div className={styles.options}>
                <button onClick={() => handleSelection('size', '< $1M', 4)} className={styles.option}>
                  <span className={styles.optionTitle}>Under $1M</span>
                </button>
                <button onClick={() => handleSelection('size', '$1M - $5M', 4)} className={styles.option}>
                  <span className={styles.optionTitle}>$1M — $5M</span>
                </button>
                <button onClick={() => handleSelection('size', '$5M+', 4)} className={styles.option}>
                  <span className={styles.optionTitle}>$5M+ (Mid-Market)</span>
                </button>
              </div>
            )}

            {step === 4 && (
              <div className={styles.formFinal}>
                <div className={styles.inputGroup}>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className={styles.input}
                    value={data.email}
                    onChange={(e) => setData({...data, email: e.target.value})}
                  />
                  <button className={styles.submitBtn}>
                    FINISH & ROUTE
                  </button>
                </div>
                <button onClick={() => setStep(1)} className={styles.backBtn}>START OVER</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.trustBadge}>
            <div className={styles.activeDot}></div>
            <span>Intelligent Routing Active</span>
          </div>
          <div className={styles.visualizer}>
            <div className={styles.visLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
