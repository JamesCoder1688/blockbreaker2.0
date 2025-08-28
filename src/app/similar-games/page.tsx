import { Metadata } from 'next';
import Link from 'next/link';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'Similar Games to Block Breaker - Classic Brick-Breaking Games',
  description: 'Discover games similar to Block Breaker. Explore classic brick-breaking, ball-bouncing, and arcade-style games you\'ll love.',
  alternates: {
    canonical: '/similar-games',
  },
};

const similarGames = [
  {
    title: 'Breakout',
    description: 'The legendary Atari classic that started it all. Simple paddle, bouncing ball, and colorful bricks to destroy.',
    features: ['Classic arcade gameplay', 'Historical significance', 'Simple controls'],
    difficulty: 'Beginner',
    year: '1976'
  },
  {
    title: 'Arkanoid',
    description: 'Enhanced Breakout with power-ups, different brick types, and a compelling space theme.',
    features: ['Power-ups and special abilities', 'Varied brick types', 'Boss battles'],
    difficulty: 'Intermediate',
    year: '1986'
  },
  {
    title: 'DX-Ball',
    description: 'Modern take on brick-breaking with spectacular graphics and sound effects.',
    features: ['Enhanced graphics', 'Multiple ball types', 'Level editor'],
    difficulty: 'Intermediate',
    year: '1998'
  },
  {
    title: 'Ricochet',
    description: 'Features unique ring-shaped levels and innovative power-up system.',
    features: ['Circular level design', 'Advanced physics', '3D graphics'],
    difficulty: 'Advanced',
    year: '2000'
  },
  {
    title: 'Peggle',
    description: 'Combines brick-breaking with pinball mechanics and strategic aiming.',
    features: ['Physics-based gameplay', 'Strategic elements', 'Character abilities'],
    difficulty: 'Beginner',
    year: '2007'
  },
  {
    title: 'Bricks n Balls',
    description: 'Mobile-optimized brick breaker with numbered bricks and multiple balls.',
    features: ['Mobile-friendly', 'Numbered bricks', 'Endless levels'],
    difficulty: 'Casual',
    year: '2017'
  }
];

const gameCategories = [
  {
    title: 'Classic Arcade',
    description: 'Traditional brick-breaking games that stay true to the original formula',
    games: ['Breakout', 'Arkanoid', 'Block Breaker']
  },
  {
    title: 'Modern Variations',
    description: 'Contemporary takes with enhanced graphics and new mechanics',
    games: ['DX-Ball', 'Ricochet', 'Peggle']
  },
  {
    title: 'Mobile Optimized',
    description: 'Designed specifically for touch screens and mobile play',
    games: ['Bricks n Balls', 'Ballz', 'Block Breaker Mobile']
  }
];

export default function SimilarGamesPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-6xl mx-auto py-20 px-4 space-y-12">
        <ContentSection id="similar-games-intro" title="Games Similar to Block Breaker" showCTA={true} useH1={true}>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Love Block Breaker? Discover other amazing brick-breaking and arcade games that share the same addictive gameplay, 
            strategic elements, and satisfying ball-bouncing action.
          </p>
        </ContentSection>
        
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Featured Similar Games</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarGames.map((game, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-purple-400">{game.title}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{game.year}</div>
                    <div className="text-xs text-cyan-400">{game.difficulty}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {game.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-bold text-green-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {game.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">Game Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gameCategories.map((category, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                <ul className="space-y-1">
                  {category.games.map((game, idx) => (
                    <li key={idx} className="text-purple-400 text-sm">• {game}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <ContentSection id="why-block-breaker" title="Why Block Breaker Stands Out" showCTA={false}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Modern Web Technology</h3>
              <p className="mb-4">
                Unlike many similar games that require downloads or plugins, Block Breaker runs entirely in your browser 
                using cutting-edge web technology for smooth, responsive gameplay.
              </p>
              
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Instant Access</h3>
              <p>
                No installation, no waiting. Click and play immediately on any device with a modern web browser.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Classic Feel, Modern Polish</h3>
              <p className="mb-4">
                We've preserved the essence of classic brick-breaking games while adding modern visual effects, 
                smooth animations, and responsive controls.
              </p>
              
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Cross-Platform Compatible</h3>
              <p>
                Play seamlessly on desktop, tablet, or mobile. Your progress and experience remain consistent across all devices.
              </p>
            </div>
          </div>
        </ContentSection>
        
        <section className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Ready to Break Some Blocks?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the perfect blend of classic arcade action and modern web gaming. 
              Join thousands of players who've made Block Breaker their favorite brick-breaking game.
            </p>
            <Link 
              href="/#game" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition text-lg"
            >
              🎮 Play Block Breaker Now
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}