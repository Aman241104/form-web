import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Elite Cloud Books',
  description: 'How Elite Cloud Books collects, uses, and protects your personal and financial information.',
};

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly to us when you contact us through our website, submit our intake form, or communicate with us via WhatsApp, email, or phone. This includes your name, professional email address, company name, phone number, and details about your accounting or financial service needs.',
      'We may also collect technical data automatically when you visit our site, including IP address, browser type, pages visited, and session duration. This data is used solely to improve site performance and user experience.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to respond to your inquiries, provide our accounting and financial services, and communicate with you about your engagement. We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
      'Client financial data processed as part of a service engagement is handled exclusively within ISO 27001 certified infrastructure, with access restricted to personnel assigned to your specific engagement.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'Elite Cloud Books maintains an Information Security Management System (ISMS) aligned with ISO 27001 standards. All client data is encrypted in transit using TLS 1.2 or higher and encrypted at rest using AES-256 encryption. Access to client data is controlled through role-based access management and multi-factor authentication.',
      'We conduct annual third-party security audits and penetration tests on our infrastructure. In the event of a data security incident, we will notify affected clients within 24 hours of confirmed detection.',
    ],
  },
  {
    title: 'Client Financial Data',
    content: [
      'Financial records, tax documents, and accounting data provided to us for service delivery are treated as strictly confidential. This data is used exclusively to perform the services described in your engagement agreement and is never disclosed to third parties except as required by applicable law or with your explicit written consent.',
      'Upon engagement termination, client financial data is retained for the period required by applicable professional standards and tax regulations, after which it is securely deleted from our systems.',
    ],
  },
  {
    title: 'Cookies and Tracking',
    content: [
      'Our website uses essential cookies necessary for basic site functionality. We do not currently use third-party advertising cookies or behavioral tracking cookies. If you disable cookies in your browser, certain site features may not function as intended.',
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      'We use third-party platforms including cloud accounting software (QuickBooks Online, Xero, Sage Intacct), communication tools, and project management systems to deliver our services. These platforms are selected for their security and compliance credentials. We maintain data processing agreements with all third-party service providers that handle client data.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to request access to the personal information we hold about you, to request correction of inaccurate data, and to request deletion of your data subject to any legal retention obligations. To exercise these rights, contact us at admin@elitecloudbooks.com.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions about this Privacy Policy or our data practices, please contact our team at admin@elitecloudbooks.com or by phone at +1 267-416-9800. Our office is located in Bala Cynwyd, Pennsylvania.',
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Policy.</span>
          </h1>
          <p className="text-white/40 text-sm font-light">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg text-white/70 font-light leading-relaxed mb-16 pb-16 border-b border-white/5">
            Elite Cloud Books, LLC ("Elite Cloud Books," "we," "us," or "our") is committed to protecting the privacy and security of your personal and financial information. This Privacy Policy explains how we collect, use, and safeguard information when you engage with our services or visit our website.
          </p>

          <div className="space-y-16">
            {sections.map((section, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-red-500/50 text-[11px] font-black uppercase tracking-widest mt-1 shrink-0">
                    0{i + 1}
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
              Questions about our privacy practices? We're here to help.
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
