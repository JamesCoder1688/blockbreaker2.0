'use client';
import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import ContentSection from '@/components/sections/ContentSection';
import FAQSection from '@/components/sections/FAQSection';
import FeatureCard from '@/components/ui/FeatureCard';
import GameCard from '@/components/ui/GameCard';
import CTAButton from '@/components/ui/CTAButton';
import Footer from '@/components/layout/Footer';

export default function Home() {
  // FAQ 数据
  const faqData = [
    {
      question: "Is Block Breaker free?",
      answer: "Yes! Block Breaker is completely free to play. No downloads, no registration, no hidden costs - just open your browser and start playing instantly."
    },
    {
      question: "How do you play Block Breaker? (controls)",
      answer: "Desktop: Use arrow keys (← →) or mouse to control the paddle. Mobile: Swipe left or right to move the paddle. Your goal is to keep the ball in play while destroying all blocks on the screen."
    },
    {
      question: "Can I play on mobile?",
      answer: "Absolutely! Block Breaker is fully optimized for mobile devices. The game works perfectly on smartphones and tablets with intuitive touch controls."
    },
    {
      question: "Is 'Google Block Breaker' the same game?",
      answer: "Google Block Breaker refers to the classic Easter egg version found in Google Search. Our Block Breaker offers the same addictive gameplay with enhanced graphics and additional features."
    },
    {
      question: "How do I save my progress?",
      answer: "Your progress is automatically saved in your browser's local storage. You can continue your game session from where you left off, even after closing the browser."
    }
  ];

  return (
    <div className="min-h-screen game-bg particle-bg relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg z-50 border-b border-cyan-500/20 shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center font-bold text-2xl text-cyan-400 hover:text-cyan-300 transition">
            <div className="w-8 h-8 mr-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            Block Breaker
          </Link>
          <ul className="hidden md:flex gap-6 text-gray-300 font-medium text-sm">
            <li><a href="#what-is" className="hover:text-cyan-400 transition">What is Block Breaker</a></li>
            <li><a href="#features" className="hover:text-cyan-400 transition">Features</a></li>
            <li><a href="#tips" className="hover:text-cyan-400 transition">Tips</a></li>
            <li><a href="#similar-games" className="hover:text-cyan-400 transition">Similar Games</a></li>
            <li><a href="#faq" className="hover:text-cyan-400 transition">FAQ</a></li>
            <li><Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection 
        title="Block Breaker"
        subtitle="– Play the Classic Block-Breaking Game Online"
        description="Experience the ultimate brick-breaking adventure with stunning graphics, explosive power-ups, and addictive gameplay!"
        showGameIframe={true}
      />

      {/* Main Content */}
      <main className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-16">

          {/* 1. What is the Block Breaker */}
          <ContentSection id="what-is" title="What is the Block Breaker">
            <div className="text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              <p className="mb-6">
                Welcome to <strong className="text-cyan-400">Block Breaker</strong>, the modern evolution of the classic brick-breaking arcade experience that's captivating players worldwide. Many ask "What is the Block Breaker Game" - it's a timeless ball-bouncing brick destruction game that combines nostalgic gameplay with cutting-edge design and addictive challenges.
              </p>
              <p className="mb-6">
                Block Breaker is a casual arcade game where you control a paddle to bounce a ball and systematically destroy blocks arranged on the screen. Moving your paddle horizontally, you keep the ball in play while directing it towards colorful brick formations to clear all blocks and advance through increasingly challenging levels.
              </p>
              <p className="text-base text-gray-400">
                Also known as Breakout or Arkanoid, this gaming formula has entertained millions with physics-based gameplay, power-up systems, and progressively difficult level designs that test both reflexes and strategic thinking.
              </p>
            </div>
          </ContentSection>

          {/* 2. Features in a Block Breaker game */}
          <ContentSection id="features" title="Features in a Block Breaker game">
            <div className="mb-8">
              {/* Core Gameplay Features */}
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Core Gameplay Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <FeatureCard 
                  icon="🏓"
                  title="Paddle Control"
                  description="Precise horizontal movement controls the ball's trajectory. Master paddle positioning for strategic ball direction."
                  color="purple"
                />
                <FeatureCard 
                  icon="⚽"
                  title="Ball Physics"
                  description="Realistic physics determine bounce angles off paddle, blocks, and walls for strategic gameplay."
                  color="cyan"
                />
                <FeatureCard 
                  icon="🧱"
                  title="Block Destruction"
                  description="Multiple block types: Standard, Multi-hit, Unbreakable obstacles, and Mystery blocks with power-ups."
                  color="pink"
                />
                <FeatureCard 
                  icon="🎯"
                  title="Scoring System"
                  description="Points for each destroyed block, with bonus points for speed completion and combo hits."
                  color="yellow"
                />
              </div>

              {/* Progression & Variety */}
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Progression & Variety</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard 
                  icon="🎮"
                  title="Level Design"
                  description="Increasingly difficult levels with unique block patterns and creative arrangements."
                  color="green"
                />
                <FeatureCard 
                  icon="⚡"
                  title="Power-ups"
                  description="Paddle extension, multi-ball, laser shooting, and speed modifiers for enhanced gameplay."
                  color="orange"
                />
                <FeatureCard 
                  icon="🏆"
                  title="Game Modes"
                  description="Classic mode, challenge levels, and endless mode for varied gaming experiences."
                  color="purple"
                />
              </div>
            </div>
          </ContentSection>

          {/* 3. From Breakout to Block Breaker */}
          <ContentSection id="breakout-evolution" title="From Breakout to Block Breaker">
            <div className="text-lg leading-relaxed">
              <p className="mb-6">
                The journey from the original <strong className="text-cyan-400">Breakout</strong> (1976) to modern Block Breaker represents decades of gaming evolution. Atari's groundbreaking arcade game laid the foundation with simple paddle-and-ball mechanics that would influence countless titles.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">Classic Era (1976-1980s)</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Atari Breakout - The original arcade sensation</li>
                    <li>• Simple graphics, addictive gameplay</li>
                    <li>• Basic paddle control and ball physics</li>
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold text-purple-400 mb-3">Modern Evolution (2000s+)</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Enhanced graphics and visual effects</li>
                    <li>• Power-ups and special abilities</li>
                    <li>• Multiple game modes and challenges</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-400">
                Today's Block Breaker maintains the core appeal while adding modern features that keep players engaged for hours.
              </p>
            </div>
          </ContentSection>

          {/* 4. Start Play Block Breaker Game Now! */}
          <section id="play-cta" className="relative text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6">
                Start Play Block Breaker Game Now!
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready for the ultimate brick-breaking experience? Jump into action with our optimized game that works perfectly on both desktop and mobile devices. No downloads required!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
                <CTAButton href="#game" variant="primary" size="lg" pulse={true}>
                  🎮 Play Block Breaker Now
                </CTAButton>
                <CTAButton href="#tips" variant="outline" size="lg">
                  📚 Learn Winning Tips
                </CTAButton>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">💻</div>
                  <p className="text-gray-400">Desktop Optimized</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-gray-400">Mobile Ready</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-gray-400">Instant Loading</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. How google block breaker */}
          <ContentSection id="google-block-breaker" title="How google block breaker">
            <div className="text-lg leading-relaxed">
              <p className="mb-6">
                When users search for "google block breaker," they're typically looking for the classic Easter egg version that Google featured in their search results. This hidden game became a beloved tribute to the original Atari Breakout, accessible through specific search terms.
              </p>
              <div className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 mb-6">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">Google's Block Breaker Features:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Classic pixel art graphics reminiscent of retro gaming</li>
                  <li>• Simple controls using arrow keys or mouse</li>
                  <li>• Google's signature colors in the block arrangement</li>
                  <li>• Easter egg accessibility through search interface</li>
                </ul>
              </div>
              <p className="mb-6">
                While Google's version offers nostalgic charm, our enhanced Block Breaker delivers the same classic gameplay with improved graphics, additional power-ups, and optimized performance across all devices.
              </p>
              <div className="text-center bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30">
                <p className="text-cyan-400 font-semibold">
                  Experience the best of both worlds - classic gameplay with modern enhancements!
                </p>
              </div>
            </div>
          </ContentSection>

          {/* 6. Tips to Win in Block Breaker */}
          <ContentSection id="tips" title="Tips to Win in Block Breaker">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-slate-700/30 rounded-xl p-6 border border-green-500/20">
                  <h4 className="font-bold text-green-400 mb-3">🎯 Master Ball Control</h4>
                  <p className="text-gray-300">Position your paddle strategically to control ball direction. Hit the ball with different parts of the paddle to change angles and target specific blocks.</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6 border border-purple-500/20">
                  <h4 className="font-bold text-purple-400 mb-3">⚡ Prioritize Power-ups</h4>
                  <p className="text-gray-300">Always aim for blocks that release power-ups. Multi-ball and paddle extension power-ups can dramatically improve your chances of success.</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20">
                  <h4 className="font-bold text-cyan-400 mb-3">🏗️ Strategic Block Removal</h4>
                  <p className="text-gray-300">Target side blocks first to create angles for reaching hard-to-hit areas. Clear paths systematically rather than random destruction.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-700/30 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-bold text-orange-400 mb-3">🎮 Stay Focused</h4>
                  <p className="text-gray-300">Keep your eyes on the ball's trajectory and anticipate where it will bounce. Quick reflexes combined with prediction win games.</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6 border border-pink-500/20">
                  <h4 className="font-bold text-pink-400 mb-3">🚀 Use Wall Bounces</h4>
                  <p className="text-gray-300">Utilize side walls to reach difficult blocks. Angle shots off walls to access blocks that seem impossible to hit directly.</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="font-bold text-yellow-400 mb-3">💪 Practice Patience</h4>
                  <p className="text-gray-300">Don't rush shots. Sometimes waiting for the right angle is better than making hasty moves that could cost you the ball.</p>
                </div>
              </div>
            </div>
          </ContentSection>

          {/* 7. Why Play Block Breaker on blockbreaker.vip? */}
          <ContentSection id="why-play" title="Why Play Block Breaker on blockbreaker.vip?" showCTA={false}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🆓</div>
                  <div>
                    <h4 className="font-bold text-cyan-400 mb-2">Completely Free</h4>
                    <p className="text-gray-300">No hidden costs, no premium versions, no paywalls. Enjoy unlimited gameplay without spending a penny.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h4 className="font-bold text-purple-400 mb-2">Mobile Optimized</h4>
                    <p className="text-gray-300">Perfect touch controls and responsive design ensure smooth gameplay on all smartphones and tablets.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-green-400 mb-2">Lightning Fast</h4>
                    <p className="text-gray-300">Optimized loading times and smooth 60fps gameplay for the ultimate gaming experience.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🚫</div>
                  <div>
                    <h4 className="font-bold text-orange-400 mb-2">No Ads Interruption</h4>
                    <p className="text-gray-300">Uninterrupted gameplay without annoying pop-ups or video ads breaking your concentration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">💾</div>
                  <div>
                    <h4 className="font-bold text-pink-400 mb-2">Progress Saved</h4>
                    <p className="text-gray-300">Your game progress is automatically saved locally, so you can continue where you left off anytime.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Enhanced Features</h4>
                    <p className="text-gray-300">Modern graphics, particle effects, and improved power-ups beyond the classic version.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <CTAButton href="#game" variant="primary" size="lg" pulse={true}>
                🎮 Experience the Difference - Play Now
              </CTAButton>
            </div>
          </ContentSection>

          {/* 8. Similar Games in the Block-Breaking Genre */}
          <ContentSection id="similar-games" title="Similar Games in the Block-Breaking Genre" showCTA={false}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <GameCard 
                title="Arkanoid"
                description="The legendary arcade classic that defined the block-breaking genre with power-ups and enemy characters."
                ctaText="Or Play Block Breaker"
              />
              <GameCard 
                title="Brick Breaker"
                description="A modern take on the classic formula with enhanced graphics and multiple game modes."
                ctaText="Or Play Block Breaker"
              />
              <GameCard 
                title="Super Breakout"
                description="Atari's enhanced version featuring multiple balls and progressive difficulty levels."
                ctaText="Or Play Block Breaker"
              />
              <GameCard 
                title="DX-Ball"
                description="Popular PC version with fantastic power-ups and creative level designs from the 90s era."
                ctaText="Or Play Block Breaker"
              />
              <GameCard 
                title="Ricochet"
                description="3D block-breaking game with stunning visual effects and innovative gameplay mechanics."
                ctaText="Or Play Block Breaker"
              />
              <GameCard 
                title="Peggle"
                description="Physics-based puzzle game combining block-breaking with pinball-style gameplay."
                ctaText="Or Play Block Breaker"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-6">
                While these games offer their own unique twists, Block Breaker delivers the pure, classic experience you love with modern enhancements.
              </p>
              <CTAButton href="#game" variant="primary" size="lg">
                🎯 Play the Ultimate Block Breaker
              </CTAButton>
            </div>
          </ContentSection>

          {/* FAQ Section */}
          <FAQSection faqs={faqData} />

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}