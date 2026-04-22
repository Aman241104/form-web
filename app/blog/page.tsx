import BlogPageClient from '@/components/BlogPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligence & Insights | Elite Cloud Books',
  description: 'Explore our latest perspectives on financial scaling, compliance, and offshore talent extension. Applied intelligence for modern firms.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
