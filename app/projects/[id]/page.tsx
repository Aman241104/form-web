import { projects } from '@/data/siteData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

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
    title: `${project.title} | Case Study | Caramel Advisors`,
    description: project.subtext,
  };
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#05080f', color: '#ffffff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/projects" style={{ color: '#ff4d4f', textDecoration: 'none', fontSize: '14px', marginBottom: '24px', display: 'inline-block' }}>
          ← Back to All Case Studies
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'start' }}>
          <div style={{ gridColumn: 'span 12' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#ff4d4f', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              {project.category} CASE STUDY
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '700', lineHeight: '1.1', marginTop: '16px', marginBottom: '32px' }}>
              {project.title}
            </h1>
          </div>

          <div style={{ gridColumn: 'span 12' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '48px' }}>
              <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ gridColumn: 'span 12' }}>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '48px' }}>
                {project.metrics.map((metric, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>{metric.value}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: '4px' }}>{metric.label}</div>
                    </div>
                ))}
             </div>

             <div style={{ fontSize: '20px', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)' }}>
                <h2 style={{ color: '#ffffff', marginBottom: '24px' }}>Executive Summary</h2>
                <p style={{ marginBottom: '32px' }}>{project.subtext}</p>
                <h2 style={{ color: '#ffffff', marginBottom: '24px' }}>The Solution</h2>
                <p>{project.fullStory}</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
