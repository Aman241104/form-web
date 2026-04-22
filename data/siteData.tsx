import React from 'react';

export const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    desc: 'Flawless books. Zero chaos. Audit-ready at all times.',
    features: ['Monthly Financial Reporting', 'Bank & CC Reconciliation', 'Accounts Payable/Receivable', 'Year-end Cleanup'],
    fullContent: `Our bookkeeping services are designed to give you peace of mind. We handle everything from daily transaction entry to month-end close, ensuring your financial records are accurate and IRS-compliant. We specialize in Xero and QuickBooks Online workflows.

    Key Benefits:
    - Real-time visibility into your cash flow
    - Meticulous reconciliation of all accounts
    - Seamless integration with your existing tech stack
    - Monthly financial reporting and insights`,
    featured: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    )
  },
  {
    id: 'tax',
    title: 'Tax Preparation',
    desc: 'Maximize deductions. 100% compliance across all jurisdictions.',
    features: ['Corporate Tax Filing', 'Multi-state Compliance', 'R&D Tax Credits', 'Sales Tax Management'],
    fullContent: `Our tax experts manage the complexities of multi-state returns and federal compliance. We ensure you maximize deductions and stay ahead of filing deadlines, using advanced tax platforms like ProConnect and UltraTax.

    Our Approach:
    - Comprehensive multi-state tax planning
    - Federal and state filing for corporations and partnerships
    - Strategic advice on tax-saving opportunities
    - Year-round support for tax-related inquiries`,
    featured: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    )
  },
  {
    id: 'fpa',
    title: 'FP&A (Planning)',
    desc: 'Strategic forecasting and actionable KPI tracking to scale your firm.',
    features: ['Budgeting & Forecasting', 'Variance Analysis', 'KPI Dashboarding', 'Cash Flow Projections'],
    fullContent: `Strategic financial planning and analysis to help your business scale. We build custom forecasting models, cash flow projections, and scenario plans that provide actionable insights for founders and CFOs.

    What We Offer:
    - Annual budgeting and periodic forecasting
    - Variance analysis (Actual vs. Budget)
    - KPI development and tracking
    - Capital allocation strategy`,
    featured: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
    )
  },
  {
    id: 'audit',
    title: 'Audit Services',
    desc: 'Rigorous internal controls. Pain-free and fully organized external audits.',
    features: ['Audit Workpaper Prep', 'Internal Control Review', 'Compliance Audits', 'External Auditor Liaison'],
    fullContent: `We provide audit support and internal control reviews. Our team ensures your records are meticulously organized, making the external audit process smooth and penalty-free.

    Our Focus:
    - Internal control assessment and improvement
    - Preparation of audit workpapers
    - Coordination with external auditors
    - Compliance readiness reviews`,
    featured: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    )
  },
  {
    id: 'advisory',
    title: 'Advisory',
    desc: 'High-level financial strategy and fractional CFO leadership for growth.',
    features: ['Fractional CFO', 'M&A Support', 'Business Valuation', 'Strategic Consulting'],
    fullContent: `Fractional CFO and transaction advisory services. We help businesses navigate valuations, M&A preparation, and high-level financial strategy to drive long-term value.

    Advisory Areas:
    - Fractional CFO leadership
    - M&A due diligence and preparation
    - Business valuation support
    - Strategic financial consulting`,
    featured: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
    )
  }
];

export const industries = [
  {
    id: 'cpa-accounting',
    name: 'CPA & Accounting Firms',
    desc: 'Empowering accounting practices with scalable offshore talent extensions and high-precision delivery models.',
    fullContent: 'We partner with CPA firms to provide high-quality, scalable offshore talent. Our models are designed to integrate seamlessly with your existing workflows, allowing you to focus on high-level advisory while we handle the heavy lifting of bookkeeping and tax preparation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
  },
    {
    id: 'healthcare-dental',
    name: 'Healthcare & Dental Groups',
    desc: 'Specialized financial controls and consolidated reporting for multi-site medical and dental operations.',
    fullContent: 'Multi-site healthcare operations face unique financial challenges. We provide consolidated reporting and specialized financial controls that give you a clear view of your entire group\'s performance, while ensuring compliance with healthcare-specific regulations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    )
    },
    {
    id: 'manufacturing-textile',
    name: 'Manufacturing & Textile',
    desc: 'Inventory management and cost accounting for high-volume producers across diverse global sectors.',
    fullContent: 'In the manufacturing sector, precision in inventory management and cost accounting is critical. We implement advanced tracking systems and automated workflows that ensure your financial data is as precise as your production lines.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    )
    },
    {
    id: 'construction-real-estate',
    name: 'Construction & Real Estate',
    desc: 'Project-based accounting and financial oversight for developers and heavy industry enterprises.',
    fullContent: 'Construction projects require a high degree of financial oversight. We provide project-based accounting services that help you track costs, manage cash flow, and ensure that every project is on track for profitability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    )
    },
    {
    id: 'technology-saas',
    name: 'Technology & SaaS',
    desc: 'Revenue recognition and KPI dashboarding for high-growth tech firms scaling through complex cycles.',
    fullContent: 'Tech and SaaS firms need specialized accounting for complex revenue recognition and KPI tracking. We build custom dashboards and automated reporting systems that help you scale efficiently through every stage of your growth cycle.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    )
    },
    {
    id: 'consumer-lending',
    name: 'Consumer Lending',
    desc: 'Comprehensive accounting support for financial services and private lending groups requiring precision.',
    fullContent: 'In the world of consumer lending, precision and compliance are paramount. We provide comprehensive accounting support that ensures your financial records are meticulously accurate and fully compliant with all industry regulations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    )
    }
    ];


export const projects = [
  {
    id: 'cpa-tax-scale',
    category: 'CPA Firms',
    title: '40% Capacity Increase for Regional CPA Firm',
    subtext: 'Eliminated seasonal bottlenecks through a dedicated offshore talent extension model.',
    challenge: 'A growing regional firm was turning away new clients during tax season due to local hiring shortages and extreme staff burnout.',
    approach: 'We deployed a dedicated team of 5 tax professionals trained in ProConnect to handle high-volume 1040 and 1120 returns directly in the firm’s cloud environment.',
    outcome: 'The firm increased their engagement capacity by 40% within one cycle while reducing average return turnaround time by 5 days.',
    industryContext: 'Hiring qualified US-based tax professionals has become 3x harder in the last 24 months, forcing firms to choose between burnout or stagnation.',
    testimonial: {
      quote: "Elite Cloud Books literally saved our tax season. We scaled our capacity by 40% without a single local hire.",
      author: "Managing Partner",
      firm: "Top 100 CPA Firm — Texas"
    },
    timeline: [
      { step: 'Discovery', desc: 'Identified bottleneck in return turnaround.' },
      { step: 'Onboarding', desc: 'Synced team with ProConnect workflows.' },
      { step: 'Scaling', desc: 'Full cycle execution of 400+ returns.' }
    ],
    metrics: [
      { label: 'Capacity', value: '+40%' },
      { label: 'Turnaround', value: '-5 Days' },
      { label: 'Cost Savings', value: '35%' }
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'healthcare-consolidation',
    category: 'Healthcare',
    title: 'Consolidated Reporting for 12 Dental Practices',
    subtext: 'Unified fragmented bookkeeping into a single institutional-grade financial dashboard.',
    challenge: 'A private equity-backed dental group had 12 different practices using disparate accounting methods, making group-level visibility impossible.',
    approach: 'Standardized all charts of accounts on Sage Intacct and implemented automated inter-company eliminations and monthly consolidated reporting.',
    outcome: 'Management received group-level financial visibility by the 10th of every month, enabling data-driven acquisition decisions.',
    industryContext: 'Multi-site dental groups often struggle with decentralized ledgers, leading to inaccurate valuation during M&A cycles.',
    testimonial: {
      quote: "The visibility we have now is a game changer for our PE partners.",
      author: "Group CFO",
      firm: "Multi-State Dental Alliance"
    },
    timeline: [
      { step: 'Standardization', desc: 'Unified chart of accounts across sites.' },
      { step: 'Automation', desc: 'Automated inter-company eliminations.' },
      { step: 'Insights', desc: 'Launched real-time group-level dashboards.' }
    ],
    metrics: [
      { label: 'Visibility', value: 'Real-time' },
      { label: 'Close Speed', value: '2x Faster' },
      { label: 'Compliance', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'saas-rev-rec',
    category: 'SaaS',
    title: 'Series B RevRec & KPI Dashboarding',
    subtext: 'Implemented ASC 606 compliance and investor-ready financial reporting.',
    challenge: 'A high-growth SaaS startup needed to transition to ASC 606 revenue recognition standards to satisfy Series B audit requirements.',
    approach: 'Built a custom revenue recognition engine integrated with their billing platform and developed a live SaaS metric dashboard (CAC, LTV, Churn).',
    outcome: 'Successfully cleared a Big 4 audit and provided the board with real-time unit economic visibility.',
    industryContext: 'ASC 606 compliance is the #1 hurdle for SaaS companies entering Series B and C funding rounds.',
    testimonial: {
      quote: "We cleared our Big 4 audit in record time thanks to their RevRec implementation.",
      author: "VP Finance",
      firm: "Unicorn SaaS Platform"
    },
    timeline: [
      { step: 'Audit Gap', desc: 'Identified standard revenue recognition gaps.' },
      { step: 'Implementation', desc: 'Built ASC 606 compliant engine.' },
      { step: 'Visualization', desc: 'Developed live investor dashboards.' }
    ],
    metrics: [
      { label: 'Audit Result', value: 'Clean' },
      { label: 'Metrics', value: 'Live' },
      { label: 'Scalability', value: 'Uncapped' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'seattle-construction',
    category: 'Construction',
    title: 'Financial Controls for a Seattle Firm',
    subtext: 'Optimized internal controls and cash flow management for a commercial construction group.',
    challenge: 'Fragmented reporting across multiple project sites led to significant cash flow gaps and inaccurate WIP (Work in Progress) tracking.',
    approach: 'Integrated Procore with Xero and established rigorous internal controls and standardized weekly project-cost reporting rituals.',
    outcome: 'The firm reached 99% accuracy in project cost forecasting and increased their bonding capacity by 2x.',
    industryContext: 'WIP inaccuracy is the leading cause of insolvency for mid-market construction firms.',
    testimonial: {
      quote: "Our bonding capacity doubled because our financials became undeniable.",
      author: "Principal",
      firm: "Seattle Commercial Build"
    },
    timeline: [
      { step: 'Site Integration', desc: 'Connected Procore to accounting core.' },
      { step: 'Control Setup', desc: 'Established internal review protocols.' },
      { step: 'Performance', desc: 'Launched project-level profit tracking.' }
    ],
    metrics: [
      { label: 'Accuracy', value: '99%' },
      { label: 'Bonding Cap', value: '2x' },
      { label: 'Efficiency', value: '+32%' }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pe-portfolio-sync',
    category: 'Private Equity',
    title: 'Standardizing 8 Portfolio Companies',
    subtext: 'Created a unified financial reporting protocol for a mid-market PE fund.',
    challenge: 'A PE fund was spending 20+ hours a month manually aggregating financial data from 8 different portfolio companies for quarterly reviews.',
    approach: 'Deployed a standardized "ECB Reporting Node" across all portcos, automating the data flow into a central fund-level dashboard.',
    outcome: 'Manual reporting hours were reduced by 90%, allowing the fund partners to focus on strategic value creation instead of data entry.',
    industryContext: 'Data fragmentation across portcos is the #1 efficiency killer for mid-market PE operations.',
    testimonial: {
      quote: "We reclaimed 20 hours a month that we now spend on value creation.",
      author: "Operating Partner",
      firm: "Vision Growth Capital"
    },
    timeline: [
      { step: 'Deployment', desc: 'Installed reporting nodes in 8 portcos.' },
      { step: 'Centralization', desc: 'Aggregated data into fund dashboard.' },
      { step: 'Optimization', desc: 'Automated monthly review generation.' }
    ],
    metrics: [
      { label: 'Manual Work', value: '-90%' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Visibility', value: 'Instant' }
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'textile-manufacturer',
    category: 'Manufacturing',
    title: 'Efficiency for Global Textile Producer',
    subtext: 'Streamlined multi-state tax compliance and inventory accounting.',
    challenge: 'Manual inventory tracking across 4 facilities led to frequent valuation errors and high risk of multi-state non-compliance.',
    approach: 'Integrated their ERP with Avalara and implemented automated inventory valuation workflows based on FIFO principles.',
    outcome: 'Inventory precision reached 99.9% and the company saved $50k annually in potential compliance penalties.',
    industryContext: 'Inventory shrinkage and tax non-compliance are the primary "hidden leaks" in global textile manufacturing.',
    testimonial: {
      quote: "The inventory precision we have now has revolutionized our margins.",
      author: "Operations Director",
      firm: "Heritage Textile Group"
    },
    timeline: [
      { step: 'Integration', desc: 'Connected ERP to tax & valuation core.' },
      { step: 'Workflow', desc: 'Implemented FIFO automated tracking.' },
      { step: 'Precision', desc: 'Achieved 99.9% valuation accuracy.' }
    ],
    metrics: [
      { label: 'Precision', value: '99.9%' },
      { label: 'Penalty Risk', value: '$0' },
      { label: 'Speed', value: '2x' }
    ],
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80'
  }
];

export const blogPosts = [
  {
    id: 'pe-vc-valuations',
    title: 'PE/VC Valuations: From Cost to Calibration',
    date: 'APR 18, 2026',
    category: 'SaaS',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Exploring the shift in how private equity and venture capital funds are calibrating their valuations in a volatile market.',
    takeaway: 'Learn the 3 key calibration metrics top-tier VC funds are using in 2026.',
    featured: true,
    content: `In today's rapidly evolving financial landscape, the methodology behind PE and VC valuations is undergoing a significant transformation...`
  },
  {
    id: 'ai-accounting-2025',
    title: 'AI is Now Part of the 12/31/2025 Cycle',
    date: 'APR 12, 2026',
    category: 'AI',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'How artificial intelligence is transforming the year-end close process for accounting firms.',
    takeaway: 'How to automate up to 80% of your bank reconciliation using AI nodes.',
    featured: false,
    content: `The 2025 year-end cycle marks a turning point in the accounting industry...`
  },
  {
    id: 'us-offshore-compliance',
    title: 'Navigating US Compliance with Offshore Teams',
    date: 'APR 05, 2026',
    category: 'Compliance',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'A comprehensive guide to maintaining ironclad data security and AICPA standards in a global model.',
    takeaway: 'The exact security checklist for CPA firms scaling with global talent.',
    featured: false,
    content: `Security is the #1 concern for US firms looking to scale...`
  },
  {
    id: 'tax-automation-proconnect',
    title: 'ProConnect Workflows for High-Volume Firms',
    date: 'MAR 28, 2026',
    category: 'Tax',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'How to shave 15% off return turnaround time using advanced Intuit automation features.',
    takeaway: 'Step-by-step setup for automated data ingestion in ProConnect.',
    featured: false,
    content: `Efficiency in tax season isn't just about speed, it's about protocol...`
  },
  {
    id: 'saas-asc-606-guide',
    title: 'ASC 606: The Multi-Element Arrangement Pitfall',
    date: 'MAR 15, 2026',
    category: 'SaaS',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Avoiding common revenue recognition errors that kill Series B valuations.',
    takeaway: 'Identify the top 3 RevRec red flags that auditors flag instantly.',
    featured: false,
    content: `For high-growth SaaS entities, the gap between billing and revenue recognition...`
  },
  {
    id: 'outsourced-bookkeeping-roi',
    title: 'ROI Analysis: In-house vs. Talent Extension',
    date: 'MAR 02, 2026',
    category: 'Accounting',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Breaking down the true cost of domestic hiring vs. high-precision global extensions.',
    takeaway: 'Calculate your firms potential margin increase in under 5 minutes.',
    featured: false,
    content: `The cost of a domestic bookkeeper in 2026 has increased by 22%...`
  },
  {
    id: 'multi-state-tax-traps',
    title: 'Nexus Traps for Remote-First Companies',
    date: 'FEB 20, 2026',
    category: 'Tax',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Why your remote employees are creating hidden tax liabilities in 15+ states.',
    takeaway: 'The latest 2026 state-by-state remote work nexus thresholds.',
    featured: false,
    content: `Remote work is great for talent, but it's a minefield for multi-state tax compliance...`
  },
  {
    id: 'fractional-cfo-value',
    title: 'When to Move from a Controller to a CFO',
    date: 'FEB 10, 2026',
    category: 'Accounting',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Signs your mid-market business has outgrown its current financial leadership.',
    takeaway: '5 signs your Controller is actually doing CFO work without the title.',
    featured: false,
    content: `Leadership transitions are high-risk moments for scaling businesses...`
  },
  {
    id: 'iso-27001-accounting',
    title: 'Why ISO 27001 is the New Gold Standard',
    date: 'JAN 25, 2026',
    category: 'Compliance',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'How data residency and security certifications are winning larger enterprise audits.',
    takeaway: 'How to use your security posture as a competitive sales advantage.',
    featured: false,
    content: `In an era of high-sensitivity data, security isn't IT—it's strategy...`
  }
];
