import { industries } from '@/data/siteData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import IndustryDetailClient from '@/components/IndustryDetailClient';

export async function generateStaticParams() {
  return industries.map((industry) => ({
    id: industry.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const industry = industries.find((i) => i.id === id);
  
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `${industry.name} | Industries | Elite Cloud Books`,
    description: industry.desc,
  };
}

export default async function IndustryPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const industry = industries.find((i) => i.id === id);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} />;
}
