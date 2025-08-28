import { Metadata } from 'next';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'From Breakout to Block Breaker - Evolution of Brick-Breaking Games',
  description: 'Discover the fascinating evolution from Atari\'s Breakout to modern Block Breaker games. Learn about the history and innovation in brick-breaking games.',
};

const timeline = [
  {
    year: '1976',
    title: 'Breakout',
    company: 'Atari',
    description: 'The original brick-breaking game that started it all. Simple concept: use a paddle to bounce a ball and destroy bricks.',
    significance: 'Established the core gameplay mechanics that define the genre.'
  },
  {
    year: '1986',
    title: 'Arkanoid',
    company: 'Taito',
    description: 'Revolutionary enhancement with power-ups, different brick types, and a compelling space theme.',
    significance: 'Introduced power-ups and strategic elements that became genre standards.'
  },
  {
    year: '1989',
    title: 'Arkanoid: Revenge of Doh',
    company: 'Taito',
    description: 'Expanded on the original with new power-ups, enemies, and more complex level designs.',
    significance: 'Showed how the formula could be expanded with new features.'
  },
  {
    year: '1990s',
    title: 'PC Era Innovations',
    company: 'Various',
    description: 'Multiple developers created enhanced versions with better graphics, sound, and new mechanics.',
    significance: 'Democratized game development and introduced creative variations.'
  },
  {
    year: '2000s',
    title: 'Modern Renaissance',
    company: 'Indies & Studios',
    description: 'Games like Peggle and Ricochet brought fresh takes with physics engines and 3D graphics.',
    significance: 'Proved the genre\'s timeless appeal with modern technology.'
  },
  {
    year: '2010s',
    title: 'Mobile Revolution',
    company: 'Mobile Developers',
    description: 'Touch-optimized versions brought brick-breaking to smartphones and tablets worldwide.',
    significance: 'Made the genre accessible to a global audience of casual gamers.'
  },
  {
    year: '2020s',
    title: 'Web-Based Gaming',
    company: 'Modern Studios',
    description: 'Advanced web technologies enable browser-based games with console-quality experiences.',
    significance: 'Instant access without downloads, playable anywhere with internet.'
  }
];

export default function FromBreakoutToBlockBreakerPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-6xl mx-auto py-20 px-4 space-y-12">
        <ContentSection id="evolution-intro" title="From Breakout to Block Breaker" showCTA={true} useH1={true}>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Journey through nearly five decades of brick-breaking game evolution, from Atari's simple Breakout 
            to today's sophisticated web-based Block Breaker experiences.
          </p>
        </ContentSection>
        
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">The Evolution Timeline</h2>
          <div className="space-y-8">
            {timeline.map((era, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-slate-800">
                    <span className="text-white font-bold text-sm">{era.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-purple-400">{era.title}</h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {era.company}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {era.description}
                    </p>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-400 mb-2">Historical Significance:</h4>
                      <p className="text-sm text-gray-300">{era.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <ContentSection id="breakout-origins" title="The Breakout Origins" showCTA={false}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">The Atari Innovation</h3>
              <p className="mb-4">
                In 1976, Atari released Breakout, a game that would define an entire genre. The concept was elegantly simple: 
                use a paddle to bounce a ball and destroy a wall of colorful bricks. But behind this simplicity lay 
                innovative game design that captured players' imagination worldwide.
              </p>
              
              <p className="mb-4">
                What made Breakout special wasn't just its gameplay, but its perfect balance of skill and chance. 
                Players had to master paddle positioning and ball physics while adapting to unpredictable bounces.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Core Elements Established</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <div>
                    <strong className="text-purple-400">Paddle Control:</strong>
                    <span className="text-gray-300"> Precise horizontal movement mechanics</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <div>
                    <strong className="text-cyan-400">Physics-Based Ball:</strong>
                    <span className="text-gray-300"> Realistic bouncing and angle calculations</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <div>
                    <strong className="text-pink-400">Progressive Difficulty:</strong>
                    <span className="text-gray-300"> Faster ball speed as bricks are cleared</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>
        
        <ContentSection id="arkanoid-revolution" title="The Arkanoid Revolution" showCTA={false}>
          <div className="space-y-6">
            <p className="text-lg">
              Ten years after Breakout, Taito's Arkanoid revolutionized the genre by adding layers of strategy and excitement 
              that transformed simple brick-breaking into a rich gaming experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-purple-400 mb-3">🎁 Power-Ups</h4>
                <p className="text-sm text-gray-300">
                  Introduced capsules that dropped from destroyed bricks, providing abilities like multi-ball, 
                  laser paddle, and extended paddle width.
                </p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-cyan-400 mb-3">🧱 Brick Varieties</h4>
                <p className="text-sm text-gray-300">
                  Different colored bricks with varying durability, from single-hit destruction to 
                  multi-hit golden bricks that required strategy.
                </p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h4 className="text-lg font-bold text-green-400 mb-3">👾 Enemy Encounters</h4>
                <p className="text-sm text-gray-300">
                  Added moving enemies and obstacles that created dynamic challenges beyond 
                  simple brick destruction.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
        
        <ContentSection id="modern-block-breaker" title="Modern Block Breaker Innovation" showCTA={false}>
          <div className="space-y-6">
            <p className="text-lg text-center">
              Today's Block Breaker games represent the culmination of decades of innovation, combining the best elements 
              of classic gameplay with modern technology and design principles.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-bold text-purple-400 mb-2">Web-Based</h4>
                <p className="text-sm text-gray-300">No downloads required - play instantly in any modern browser</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold text-cyan-400 mb-2">Cross-Platform</h4>
                <p className="text-sm text-gray-300">Seamless experience across desktop, tablet, and mobile devices</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold text-green-400 mb-2">Performance</h4>
                <p className="text-sm text-gray-300">Smooth 60fps gameplay with modern rendering techniques</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-pink-400 mb-2">Visual Appeal</h4>
                <p className="text-sm text-gray-300">Beautiful graphics and effects while maintaining classic feel</p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">The Future of Block Breaking</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                As web technologies continue to advance, Block Breaker games will evolve with enhanced physics engines, 
                multiplayer capabilities, and immersive visual experiences - all while preserving the simple joy that 
                made Breakout a classic nearly 50 years ago.
              </p>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}