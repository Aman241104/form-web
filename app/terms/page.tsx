import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Elite Cloud Books',
  description: 'Terms and conditions governing the use of Elite Cloud Books services and website.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By engaging Elite Cloud Books, LLC ("Elite Cloud Books") for accounting, tax, bookkeeping, or advisory services, or by accessing our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.',
      'These Terms of Service constitute a legally binding agreement between you ("Client") and Elite Cloud Books. They are supplemented by your individual engagement agreement, which governs the specific scope, fees, and deliverables of your service engagement.',
    ],
  },
  {
    title: 'Services',
    content: [
      'Elite Cloud Books provides outsourced accounting, bookkeeping, tax preparation, audit support, financial planning and analysis (FP&A), and advisory services to CPA firms and mid-market businesses. The specific services provided to you are defined in your engagement agreement or service order.',
      'We reserve the right to modify, suspend, or discontinue any service with reasonable notice. Service modifications that materially affect your engagement will be communicated with a minimum of 30 days notice.',
      'All work product delivered by Elite Cloud Books is subject to the quality standards described in your engagement agreement. Final responsibility for reviewing and approving all deliverables before submission to third parties, including the IRS, state agencies, and external auditors, rests with the Client or their designated licensed CPA or attorney.',
    ],
  },
  {
    title: 'Client Responsibilities',
    content: [
      'You agree to provide accurate, complete, and timely information necessary for us to perform the agreed services. Delays or errors caused by incomplete or inaccurate information provided by you are not the responsibility of Elite Cloud Books.',
      'You agree to maintain appropriate access credentials and to promptly notify us of any unauthorized access to shared systems. You are responsible for the security of your own systems and access credentials.',
      'Tax and regulatory filings require your review and authorization before submission. You remain responsible for the accuracy and completeness of all returns and filings submitted on your behalf.',
    ],
  },
  {
    title: 'Fees and Payment',
    content: [
      'Service fees are set forth in your engagement agreement. Invoices are due within 15 days of issuance unless alternate terms are specified in writing. Late payments may be subject to a 1.5% monthly finance charge.',
      'We reserve the right to suspend services on accounts more than 30 days past due. Resumption of services following a payment suspension may require a retainer at our discretion.',
      'All fees are exclusive of applicable taxes, which will be added to invoices as required by law.',
    ],
  },
  {
    title: 'Confidentiality',
    content: [
      'Elite Cloud Books treats all client financial information as strictly confidential. We will not disclose your financial data, business information, or engagement details to third parties except as required by law, with your written consent, or as necessary to perform the agreed services using vetted sub-processors under binding confidentiality obligations.',
      'Our confidentiality obligations survive the termination of your engagement for a period of five years, except where prohibited by applicable law.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'To the fullest extent permitted by applicable law, Elite Cloud Books\'s total liability to you for any claim arising from or related to our services shall not exceed the fees paid by you to us in the three months preceding the claim.',
      'Elite Cloud Books shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, loss of data, or business interruption, arising from the use of or inability to use our services.',
      'Nothing in these Terms limits our liability for gross negligence, willful misconduct, or fraud.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'Work product specifically created for you under an engagement agreement and fully paid for becomes your property upon payment. General methodologies, frameworks, templates, and proprietary processes developed or owned by Elite Cloud Books remain our intellectual property.',
      'Our website content, branding, and materials are protected by copyright and may not be reproduced without written permission.',
    ],
  },
  {
    title: 'Termination',
    content: [
      'Either party may terminate an engagement with 30 days written notice. In the event of material breach by either party, the non-breaching party may terminate with 10 days written notice if the breach is not cured within that period.',
      'Upon termination, you will be invoiced for all services rendered through the termination date. Client data will be returned or securely deleted in accordance with our data retention policy.',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms of Service are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Montgomery County, Pennsylvania.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'For questions about these Terms of Service, contact us at admin@elitecloudbooks.com or +1 267-416-9800.',
    ],
  },
];

export default function TermsPage() {
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
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Service.</span>
          </h1>
          <p className="text-white/40 text-sm font-light">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-16 pb-16 border-b border-white/5">
            Please read these Terms of Service carefully before using Elite Cloud Books services. These terms govern your relationship with Elite Cloud Books, LLC and outline the rights and responsibilities of both parties.
          </p>

          <div className="space-y-16">
            {sections.map((section, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-red-500/50 text-[11px] font-black uppercase tracking-widest mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="pl-12 space-y-4 border-l border-white/5 ml-4">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-white/60 font-light leading-relaxed text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-center">
            <p className="text-white/50 font-light text-sm mb-6">
              Questions about these terms? Our team is available to clarify.
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
