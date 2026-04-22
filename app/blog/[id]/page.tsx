import { blogPosts } from '@/data/siteData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BlogDetailClient from '@/components/BlogDetailClient';

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
    title: `${post.title} | Insights | Elite Cloud Books`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
