import WorkPageClient from '@/components/WorkPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work & Case Studies | Elite Cloud Books',
  description: 'Explore our portfolio of successful financial transformations. Measurable results for CPA firms, healthcare, and SaaS companies.',
};

export default function ProjectsPage() {
  return <WorkPageClient />;
}
