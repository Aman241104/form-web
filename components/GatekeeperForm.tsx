'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './GatekeeperForm.module.css';
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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [data, setData] = useState<FormData>({
    persona: '',
    size: '',
    bottleneck: '',
    email: ''
  });

  const questionRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const transitionStep = (nextStep: number, field: keyof FormData, value: string) => {
    setSelectedOption(value);
    
    const tl = gsap.timeline();
    
    // Selection feedback
    tl.to(`.option-${value.replace(/\s+/g, '-')}`, {
      scale: 1.02,
      duration: 0.2,
      ease: 'power2.out'
    });

    tl.to([questionRef.current, optionsRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      delay: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setData({ ...data, [field]: value });
        setStep(nextStep);
        setSelectedOption(null);
        gsap.fromTo([questionRef.current, optionsRef.current], 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
        );
      }
    });
  };

  const handleSubmit = () => {
    const message = `Hello Caramel Advisors, I've completed the intake brief:
- Persona: ${data.persona}
- Bottleneck: ${data.bottleneck}
- Firm Size: ${data.size}
- Email: ${data.email}`;
    
    window.open(getWhatsAppLink(message), '_blank');
  };

  useGSAP(() => {
    gsap.fromTo('.reveal-gatekeeper',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundLayer}>
        <div className={styles.subtleGlow}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column: Content */}
          <div ref={questionRef} className={`${styles.leftColumn} reveal-gatekeeper`}>
            <span className={styles.stepTag}>STEP 0{step}</span>
            <h2 className={styles.title}>
              {step === 1 && <>Tell us who <br /> you represent.</>}
              {step === 2 && <>Identify your primary <br /> bottleneck.</>}
              {step === 3 && <>What is your <br /> annual revenue?</>}
              {step === 4 && <>Where should we send <br /> your brief?</>}
            </h2>
            <p className={styles.description}>
              {step === 1 && "Choose your profile to get a customized experience and relevant solutions."}
              {step === 2 && "We'll tailor our execution model to solve your most pressing capacity challenges."}
              {step === 3 && "This helps us understand the scale of operations and resource requirements."}
              {step === 4 && "Enter your professional email to receive your custom capacity and scaling roadmap."}
            </p>
            
            {step === 1 && (
              <button 
                onClick={() => window.open(getWhatsAppLink("Hello, I am looking for career opportunities at Caramel Advisors."), '_blank')} 
                className={styles.careerLink}
              >
                Looking for a career instead? <span className={styles.arrowSmall}>→</span>
              </button>
            )}
          </div>

          {/* Right Column: Options */}
          <div ref={optionsRef} className={`${styles.rightColumn} reveal-gatekeeper`}>
            <div className={styles.optionsStack}>
              {step === 1 && (
                <>
                  {[
                    { label: 'US CPA Firm', desc: 'Specialized in 1040, 1120, and 1065 scale.' },
                    { label: 'Private Business', desc: 'Mid-market entities requiring CFO advisory.' }
                  ].map((opt) => (
                    <div 
                      key={opt.label}
                      onClick={() => transitionStep(2, 'persona', opt.label)}
                      className={`${styles.optionCard} ${selectedOption === opt.label ? styles.active : ''} option-${opt.label.replace(/\s+/g, '-')}`}
                    >
                      <div className={styles.cardContent}>
                        <p className={styles.optionLabel}>{opt.label}</p>
                        <p className={styles.optionDesc}>{opt.desc}</p>
                      </div>
                      <span className={styles.arrow}>→</span>
                    </div>
                  ))}
                </>
              )}

              {step === 2 && (
                <>
                  {[
                    { label: 'Tax Overload', desc: 'High-volume compliance during peak seasons.' },
                    { label: 'Audit Support', desc: 'Substantive testing & workpaper prep.' },
                    { label: 'Accounting/CAS', desc: 'Monthly close & ledger management.' }
                  ].map((opt) => (
                    <div 
                      key={opt.label}
                      onClick={() => transitionStep(3, 'bottleneck', opt.label)}
                      className={`${styles.optionCard} ${selectedOption === opt.label ? styles.active : ''} option-${opt.label.replace(/\s+/g, '-')}`}
                    >
                      <div className={styles.cardContent}>
                        <p className={styles.optionLabel}>{opt.label}</p>
                        <p className={styles.optionDesc}>{opt.desc}</p>
                      </div>
                      <span className={styles.arrow}>→</span>
                    </div>
                  ))}
                </>
              )}

              {step === 3 && (
                <>
                  {[
                    { label: 'Under $1M', desc: 'Emerging practices and startups.' },
                    { label: '$1M — $5M', desc: 'Established mid-market firms.' },
                    { label: '$5M+', desc: 'High-scale enterprise operations.' }
                  ].map((opt) => (
                    <div 
                      key={opt.label}
                      onClick={() => transitionStep(4, 'size', opt.label)}
                      className={`${styles.optionCard} ${selectedOption === opt.label ? styles.active : ''} option-${opt.label.replace(/\s+/g, '-')}`}
                    >
                      <div className={styles.cardContent}>
                        <p className={styles.optionLabel}>{opt.label}</p>
                        <p className={styles.optionDesc}>{opt.desc}</p>
                      </div>
                      <span className={styles.arrow}>→</span>
                    </div>
                  ))}
                </>
              )}

              {step === 4 && (
                <div className={styles.finalForm}>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      className={styles.emailInput}
                      value={data.email}
                      onChange={(e) => setData({...data, email: e.target.value})}
                    />
                    <button onClick={handleSubmit} className={styles.submitButton}>
                      CONNECT ON WHATSAPP
                    </button>
                  </div>
                  <button onClick={() => setStep(1)} className={styles.resetButton}>START OVER</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Progress Area */}
        <div className={`${styles.bottomArea} reveal-gatekeeper`}>
          <div className={styles.progressIndicator}>
            <div className={styles.dotStack}>
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`${styles.progressDot} ${step >= s ? styles.dotActive : ''}`}></div>
              ))}
            </div>
            <span className={styles.progressText}>Step {step} of 4</span>
          </div>
          
          <div className={styles.statusLine}>
            <div className={styles.statusPulse}></div>
            <span className={styles.statusText}>Intelligent routing active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
