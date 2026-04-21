import { blogPosts } from '@/data/siteData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Elite Cloud Books`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#05080f', color: '#ffffff', minHeight: '100vh', paddingTop: '120px' }}>
      <article className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/blog" style={{ color: '#ff4d4f', textDecoration: 'none', fontSize: '14px', marginBottom: '24px', display: 'inline-block' }}>
          ← Back to Insights
        </Link>
        
        <header style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ color: '#ff4d4f', fontWeight: 'bold' }}>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', fontWeight: '700', marginBottom: '24px' }}>
            {post.title}
          </h1>
        </header>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden', marginBottom: '48px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
          <p style={{ marginBottom: '24px' }}>{post.excerpt}</p>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>
        </div>
      </article>
    </main>
  );
}
