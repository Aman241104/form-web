import type { Metadata } from 'next';
import Overview from '@/components/Overview';

export const metadata: Metadata = {
  title: 'About Us | Elite Cloud Books',
  description: 'Learn about Elite Cloud Books — our leadership, values, and 40+ years of combined expertise serving US accounting firms and businesses.',
};
import Leadership from '@/components/Leadership';
import HowWeWork from '@/components/HowWeWork';
import Accreditations from '@/components/Accreditations';
import Security from '@/components/Security';

export default function AboutPage() {
  return (
    <main>
      <div style={{ paddingTop: '80px' }}> {/* Offset for fixed header */}
        <Overview />
        <Leadership />
        <Security />
        <Accreditations />
        <HowWeWork />
      </div>
    </main>
  );
}
