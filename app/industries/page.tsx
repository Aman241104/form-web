import IndustriesPageClient from '@/components/IndustriesPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries | Elite Cloud Books',
  description: 'Specialized accounting and financial solutions tailored for critical sectors including CPA firms, Healthcare, Technology, and more.',
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
