import Link from 'next/link';
import { ArrowLeft, ShieldCheck, FileText, Globe } from 'lucide-react';

export const metadata = {
  title: 'Legal Disclosures | Elite Cloud Books',
  description: 'Legal disclosures, regulatory compliance statements, and important notices from Elite Cloud Books.',
};

export default function LegalPage() {
  return (
    <main className="bg-[#05080f] text-white min-h-screen">
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-[160px] opacity-40" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-12"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.3em] border border-red-500/20">
              Legal
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.0] tracking-tight text-white mb-6">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Disclosures.</span>
          </h1>
          <p className="text-white/40 text-sm font-light">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">

          {/* Entity Information */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <FileText size={22} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Entity Information</h2>
            </div>
            <div className="pl-4 border-l border-white/5 space-y-4">
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Elite Cloud Books, LLC is a limited liability company incorporated in the Commonwealth of Pennsylvania, United States. Our principal place of business is located in Bala Cynwyd, Pennsylvania.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Legal Entity', value: 'Elite Cloud Books, LLC' },
                  { label: 'Jurisdiction', value: 'Commonwealth of Pennsylvania, USA' },
                  { label: 'Business Address', value: 'Bala Cynwyd, PA, United States' },
                  { label: 'General Inquiries', value: 'admin@elitecloudbooks.com' },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Standards */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <ShieldCheck size={22} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Standards & Compliance</h2>
            </div>
            <div className="pl-4 border-l border-white/5 space-y-6">
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Elite Cloud Books provides outsourced accounting and financial services as a non-CPA accounting firm. We operate as a talent extension partner to licensed CPA firms and do not directly offer services requiring CPA licensure unless performed under the supervision of a licensed CPA.
              </p>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                All services provided to CPA firm clients are delivered in accordance with the supervisory requirements of AICPA professional standards. The licensed CPA firm remains the engagement principal and is responsible for final review and authorization of all client-facing deliverables.
              </p>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Tax preparation services for business entities are performed in support of licensed tax practitioners. Individual tax filings are prepared under the direction and final authorization of the client's designated CPA or enrolled agent.
              </p>
              <div className="mt-8 p-8 rounded-[2rem] bg-white/5 border border-white/10">
                <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Security Certifications</p>
                <div className="space-y-3">
                  {[
                    'ISO 27001 — Information Security Management System (ISMS)',
                    'ISO 9001 — Quality Management System',
                    'AICPA Standards Aligned Delivery Model',
                    'SOC 2 Type II Readiness Framework',
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Website Disclaimer */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                <Globe size={22} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Website Disclaimer</h2>
            </div>
            <div className="pl-4 border-l border-white/5 space-y-6">
              <p className="text-white/60 font-light leading-relaxed text-lg">
                The information provided on this website is for general informational purposes only and does not constitute accounting, tax, legal, or financial advice. No client relationship is formed by accessing or using this website.
              </p>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Content published in our blog and insights section reflects the professional opinions of our editorial team and is intended to provide educational value. It should not be relied upon as a substitute for professional advice tailored to your specific circumstances.
              </p>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Case study results and statistics referenced on this site reflect the specific circumstances of individual engagements and are not a guarantee of results. Individual outcomes may vary based on the unique facts and conditions of each engagement.
              </p>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Elite Cloud Books makes no representations or warranties regarding the accuracy, completeness, or suitability of website content for any particular purpose. We reserve the right to update website content at any time without notice.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Third-Party Links</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Our website may contain links to third-party websites. These links are provided for convenience only. Elite Cloud Books does not endorse or assume any responsibility for the content, privacy practices, or accuracy of third-party websites. Access to linked sites is at your own risk.
            </p>
          </div>

          <div className="mt-8 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-center">
            <p className="text-white/50 font-light text-sm mb-6">
              For legal inquiries or to request additional disclosures, contact us directly.
            </p>
            <a
              href="mailto:admin@elitecloudbooks.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-black text-[11px] uppercase tracking-[0.3em] transition-all"
            >
              Contact Our Team
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
