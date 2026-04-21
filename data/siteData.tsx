import React from 'react';

export const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    desc: 'Stay on top of your books with clean, timely records that make sense and keep your business compliant.',
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
    desc: 'Handle multi-state returns and compliance without the stress—smooth and spot-on.',
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
    desc: 'Turn numbers into action with forecasting and budgeting that drives growth.',
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
    desc: 'Get thorough, reliable audits that ensure you are always audit-ready.',
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
    desc: 'Bridging the gap between accounting, valuation, and transactions.',
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
    id: 'seattle-construction',
    category: 'Construction',
    title: 'Financial Controls for a Seattle Firm',
    subtext: 'Optimized internal controls and cash flow management for a premier commercial construction group.',
    fullStory: `This Seattle-based firm was struggling with cash flow visibility and project-level profitability tracking. Caramel Advisors stepped in to overhaul their financial operations.

    The Challenge:
    - Fragmented reporting across multiple project sites
    - Delayed month-end closes leading to outdated data
    - Inconsistent internal controls

    The Solution:
    We implemented a real-time reporting system integrated with their project management software. We also established rigorous internal controls and a streamlined month-end process.

    The Result:
    The firm saw a 3x increase in scalability within 12 months, with 99% accuracy in project cost forecasting.`,
    metrics: [
      { label: 'Efficiency', value: '+32%' },
      { label: 'Cost', value: '-18%' },
      { label: 'Scalability', value: '3x' }
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'textile-manufacturer',
    category: 'Manufacturing',
    title: 'Efficiency for Textile Manufacturer',
    subtext: 'Streamlined multi-state tax compliance and inventory accounting for a large-scale manufacturer.',
    fullStory: `A large textile manufacturer needed help managing complex inventory valuations and multi-state tax compliance across four different production facilities.

    The Challenge:
    - Manual inventory tracking that led to frequent errors
    - High risk of non-compliance in multiple state jurisdictions
    - Slow reporting cycles that hindered decision-making

    The Solution:
    We integrated their ERP with a modern tax platform and implemented automated inventory accounting workflows. We also established a centralized tax compliance calendar.

    The Result:
    Reporting speed doubled, and inventory precision reached 99.9%, while ensuring 100% compliance across all states.`,
    metrics: [
      { label: 'Precision', value: '99.9%' },
      { label: 'Reporting', value: '2x Faster' },
      { label: 'Compliance', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1000&q=80'
  }
];

export const blogPosts = [
  {
    id: 'pe-vc-valuations',
    title: 'PE/VC Valuations: From Cost to Calibration',
    date: 'APR 18, 2026',
    category: 'INDUSTRY',
    readTime: '6 min read',
    image: '/images/office-discussion.png',
    excerpt: 'Exploring the shift in how private equity and venture capital funds are calibrating their valuations in a volatile market.',
    content: `In today's rapidly evolving financial landscape, the methodology behind PE and VC valuations is undergoing a significant transformation. Moving away from static cost-based models, funds are increasingly adopting dynamic calibration techniques.

    Why Calibration Matters:
    Calibration is the process of using observable market data to adjust valuation models. It ensures that the valuation reflects current market conditions rather than historical figures that may no longer be relevant.

    Key Trends:
    1. Increased Frequency: Valuations are being updated more frequently to account for market volatility.
    2. Data Integrity: There is a heightened focus on the quality and source of data used in valuation models.
    3. Regulatory Scrutiny: Regulators are looking more closely at how funds determine "Fair Value."

    As we move forward, the ability to effectively calibrate valuations will be a key differentiator for successful PE and VC funds.`
  },
  {
    id: 'ai-accounting-2025',
    title: 'AI is Now Part of the 12/31/2025 Cycle',
    date: 'APR 12, 2026',
    category: 'TECHNOLOGY',
    readTime: '5 min read',
    image: '/images/finance-piggybank.png',
    excerpt: 'How artificial intelligence is transforming the year-end close process for accounting firms.',
    content: `The 2025 year-end cycle marks a turning point in the accounting industry. For the first time, AI-driven automation is not just an experimental tool but a core component of the close process.

    Transforming the Close:
    AI is being used to automate repetitive tasks such as data entry, reconciliation, and anomaly detection. This allows accountants to focus on higher-value activities like analysis and strategic advisory.

    Tools of the Trade:
    - Automated Reconciliation Engines: Reducing the time spent on bank and credit card reconciliations by up to 80%.
    - Predictive Analytics: Helping firms identify potential issues before they become major problems.
    - Intelligent Document Processing: Speeding up the extraction of data from invoices and receipts.

    The firms that embrace these technologies are seeing significant improvements in efficiency, accuracy, and employee satisfaction.`
  }
];
