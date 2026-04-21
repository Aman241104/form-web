import { industries } from '@/data/siteData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

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
    title: `${industry.name} | Industries | Caramel Advisors`,
    description: industry.desc,
  };
}

export default async function IndustryPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const industry = industries.find((i) => i.id === id);

  if (!industry) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#05080f', color: '#ffffff', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/industries" style={{ color: '#ff4d4f', textDecoration: 'none', fontSize: '14px', marginBottom: '32px', display: 'inline-block' }}>
          ← Back to All Industries
        </Link>

        <header style={{ marginBottom: '64px' }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#ff4d4f', textTransform: 'uppercase', letterSpacing: '0.4em' }}>
            INDUSTRY VERTICAL
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: '700', lineHeight: '1', marginTop: '16px', marginBottom: '24px' }}>
            {industry.name}
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', maxWidth: '600px' }}>
            {industry.desc}
          </p>
        </header>

        <div style={{ padding: '48px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '24px' }}>Industry Expertise</h2>
            <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
                {industry.fullContent}
            </div>
            
            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '16px' }}>Want to scale your {industry.name} practice?</h3>
                <Link href="/contact" style={{ display: 'inline-block', padding: '16px 32px', background: '#ff4d4f', color: '#ffffff', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
                    Speak with an Expert
                </Link>
            </div>
        </div>
      </div>
    </main>
  );
}
