import { Metadata } from 'next';
import Link from 'next/link';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'Block Breaker Blog - Gaming Tips, Updates & News',
  description: 'Stay updated with the latest Block Breaker news, gaming tips, strategies, and classic arcade game insights.',
  alternates: {
    canonical: '/blog',
  },
};

const blogPosts = [
  {
    id: 'accessibility-in-gaming',
    title: 'Making Block Breaker Accessible: Gaming for Everyone',
    excerpt: 'Explore how modern Block Breaker games incorporate accessibility features to ensure inclusive gaming experiences.',
    date: '2024-12-20',
    category: 'Accessibility',
    readTime: '6 min read'
  },
  {
    id: 'competitive-block-breaker',
    title: 'The Rise of Competitive Block Breaker: From Casual to Esports',
    excerpt: 'Discover how Block Breaker evolved from casual entertainment to competitive gaming with tournaments and professional players.',
    date: '2024-12-18',
    category: 'Esports',
    readTime: '7 min read'
  },
  {
    id: 'mastering-block-breaker',
    title: 'Mastering Block Breaker: Advanced Strategies and Tips',
    excerpt: 'Discover expert techniques to boost your scores and clear levels faster in Block Breaker.',
    date: '2024-12-15',
    category: 'Strategy',
    readTime: '5 min read'
  },
  {
    id: 'history-of-brick-breakers',
    title: 'The Evolution of Brick-Breaking Games: From Breakout to Modern Web',
    excerpt: 'Explore the fascinating history of brick-breaking games and how they evolved into modern web experiences.',
    date: '2024-12-10',
    category: 'History',
    readTime: '8 min read'
  },
  {
    id: 'mobile-vs-desktop',
    title: 'Mobile vs Desktop: Which Platform Offers the Best Block Breaker Experience?',
    excerpt: 'Compare the pros and cons of playing Block Breaker on different devices and platforms.',
    date: '2024-12-05',
    category: 'Gaming',
    readTime: '6 min read'
  },
  {
    id: 'physics-in-block-breaker',
    title: 'The Physics Behind Block Breaker: Understanding Ball Mechanics',
    excerpt: 'Dive deep into the physics that make Block Breaker challenging and engaging.',
    date: '2024-11-28',
    category: 'Technical',
    readTime: '7 min read'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <ContentSection id="blog-header" title="Block Breaker Blog" showCTA={false} useH1={true}>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Stay updated with the latest gaming strategies, industry insights, and Block Breaker news.
          </p>
        </ContentSection>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <time className="text-sm text-gray-400" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <h2 className="text-xl font-bold text-cyan-400 mb-3 leading-tight">
                <Link href={`/blog/${post.id}`} className="hover:text-cyan-300 transition">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{post.readTime}</span>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Want to Contribute?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have gaming tips, strategies, or insights to share? We'd love to feature your content on our blog.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}