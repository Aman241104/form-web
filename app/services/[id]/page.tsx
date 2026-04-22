import { services } from '@/data/siteData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ServiceDetailClient from '@/components/ServiceDetailClient';

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Elite Cloud Books`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
