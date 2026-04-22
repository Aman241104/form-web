import { projects } from '@/data/siteData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CaseStudyDetailClient from '@/components/CaseStudyDetailClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study | Elite Cloud Books`,
    description: project.subtext,
  };
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <CaseStudyDetailClient project={project as any} />;
}
