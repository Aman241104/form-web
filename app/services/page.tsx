import type { Metadata } from 'next';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Services | Elite Cloud Books',
  description: 'Specialized accounting, tax, advisory, audit, and CAS services for US CPA firms and mid-market businesses. Powered by 40+ years of combined expertise.',
};

export default function ServicesPage() {
  return (
    <main>
      <div style={{ paddingTop: '80px' }}>
        <Services />
        <FAQ />
      </div>
    </main>
  );
}
