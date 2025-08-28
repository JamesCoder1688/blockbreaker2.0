import { Metadata } from 'next';
import Link from 'next/link';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'About Block Breaker - Classic Arcade Gaming Experience',
  description: 'Learn about Block Breaker, the ultimate online brick-breaking game. Discover our mission to bring classic arcade gaming to modern browsers.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-4xl mx-auto py-20 px-4 space-y-12">
        <ContentSection id="about-us" title="About Block Breaker" showCTA={false} useH1={true}>
          <div className="space-y-6">
            <p className="text-xl">
              Block Breaker represents the perfect fusion of classic arcade nostalgia and modern web technology. 
              Our mission is to preserve the timeless appeal of brick-breaking games while making them accessible 
              to players worldwide through any modern browser.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Story</h3>
                <p>
                  Born from a passion for classic arcade gaming, Block Breaker was created to honor the legacy 
                  of legendary games like Breakout and Arkanoid. We believe that the simple joy of breaking 
                  bricks with a bouncing ball transcends generations and deserves a place in today's gaming landscape.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Our Vision</h3>
                <p>
                  We envision a world where classic arcade games remain accessible and enjoyable for everyone. 
                  Through cutting-edge web technology, we're bringing these timeless experiences directly to 
                  your browser - no downloads, no installations, just pure gaming fun.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Block Breaker?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Authentic arcade gameplay with modern enhancements</li>
                <li>Instantly playable in any modern web browser</li>
                <li>Responsive design that works on desktop and mobile</li>
                <li>Regular updates and new features</li>
                <li>Community-driven development and feedback</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Join Our Community</h3>
              <p className="mb-4">
                Block Breaker is more than just a game - it's a community of players who share a love for 
                classic arcade experiences. Join thousands of players worldwide who have made Block Breaker 
                their go-to destination for brick-breaking fun.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#game" className="text-cyan-400 hover:text-cyan-300 transition font-semibold">
                  🎮 Start Playing Now
                </Link>
                <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition font-semibold">
                  📖 Read Gaming Tips
                </Link>
                <Link href="/similar-games" className="text-green-400 hover:text-green-300 transition font-semibold">
                  🕹️ Discover Similar Games
                </Link>
                <Link href="/contact" className="text-pink-400 hover:text-pink-300 transition font-semibold">
                  📧 Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}