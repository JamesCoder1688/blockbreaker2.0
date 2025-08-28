import { Metadata } from 'next';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'Google Block Breaker vs Classic Block Breaker Games',
  description: 'Compare Google\'s Block Breaker implementation with classic brick-breaking games. Discover the differences and what makes each unique.',
};

export default function GoogleBlockBreakerPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-6xl mx-auto py-20 px-4 space-y-12">
        <ContentSection id="google-block-breaker-intro" title="Google Block Breaker" showCTA={true} useH1={true}>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore how Google has implemented Block Breaker in various forms, from search Easter eggs to experimental features, 
            and how it compares to dedicated Block Breaker gaming experiences.
          </p>
        </ContentSection>
        
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Google's Approach</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Search Integration</h4>
                  <p className="text-gray-300 text-sm">
                    Google has occasionally featured Block Breaker-style games as search Easter eggs, 
                    integrating simple brick-breaking mechanics directly into search results.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Minimalist Design</h4>
                  <p className="text-gray-300 text-sm">
                    True to Google's design philosophy, their implementations focus on simplicity 
                    and quick accessibility over complex features.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">Experimental Features</h4>
                  <p className="text-gray-300 text-sm">
                    Google often uses simple games like Block Breaker to test new web technologies 
                    and showcase browser capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Dedicated Block Breaker</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Gaming Focus</h4>
                  <p className="text-gray-300 text-sm">
                    Dedicated Block Breaker games prioritize entertainment value, polished gameplay mechanics, 
                    and engaging user experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Rich Features</h4>
                  <p className="text-gray-300 text-sm">
                    Enhanced graphics, sound effects, power-ups, multiple levels, and progressive difficulty 
                    create a more immersive gaming experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-pink-400 mb-2">Player-Centric</h4>
                  <p className="text-gray-300 text-sm">
                    Designed specifically for gamers who want the full brick-breaking experience 
                    with modern enhancements and classic appeal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContentSection id="comparison-table" title="Feature Comparison" showCTA={false}>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/30 rounded-lg overflow-hidden">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="text-left p-4 text-cyan-400 font-bold">Feature</th>
                  <th className="text-center p-4 text-purple-400 font-bold">Google Block Breaker</th>
                  <th className="text-center p-4 text-green-400 font-bold">Dedicated Block Breaker</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-slate-700/30">
                  <td className="p-4 font-semibold">Accessibility</td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Search integration
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Direct web access
                  </td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-4 font-semibold">Graphics Quality</td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-400">~</span> Basic
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Enhanced
                  </td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-4 font-semibold">Sound Effects</td>
                  <td className="p-4 text-center">
                    <span className="text-red-400">✗</span> Minimal/None
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Full audio
                  </td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-4 font-semibold">Power-ups</td>
                  <td className="p-4 text-center">
                    <span className="text-red-400">✗</span> Limited
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Multiple types
                  </td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-4 font-semibold">Level Variety</td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-400">~</span> Basic
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Multiple levels
                  </td>
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="p-4 font-semibold">Mobile Optimization</td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Google optimized
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Touch-friendly
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Gaming Experience</td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-400">~</span> Casual
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-400">✓</span> Immersive
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSection>
        
        <ContentSection id="google-innovations" title="Google's Gaming Innovations" showCTA={false}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Search Easter Eggs</h3>
              <p className="text-gray-300 text-sm">
                Google occasionally hides Block Breaker games in search results, making them discoverable 
                through specific search queries and creating delightful user surprises.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Web Technology Showcase</h3>
              <p className="text-gray-300 text-sm">
                Uses Block Breaker implementations to demonstrate new web standards, browser capabilities, 
                and experimental features to developers and users.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Accessibility Focus</h3>
              <p className="text-gray-300 text-sm">
                Emphasizes accessibility features and cross-platform compatibility, ensuring the game 
                works on the widest possible range of devices and browsers.
              </p>
            </div>
          </div>
        </ContentSection>
        
        <ContentSection id="best-of-both" title="Best of Both Worlds" showCTA={false}>
          <div className="bg-slate-800/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">When to Choose Each Option</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-purple-400 mb-4">Choose Google Block Breaker when:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">▶</span>
                    You want quick, no-commitment gaming
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">▶</span>
                    You're exploring Google search features
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">▶</span>
                    You prefer minimalist design
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">▶</span>
                    You want to test web technologies
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-4">Choose Dedicated Block Breaker when:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">▶</span>
                    You want the full gaming experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">▶</span>
                    You enjoy enhanced graphics and sound
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">▶</span>
                    You want power-ups and multiple levels
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">▶</span>
                    You seek nostalgic arcade gaming
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContentSection>
        
        <section className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Experience the Difference</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              While Google's Block Breaker serves its purpose as a quick distraction, dedicated Block Breaker games 
              offer the rich, engaging experience that brick-breaking fans truly deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#game" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition"
              >
                🎮 Play Full Block Breaker
              </a>
              <a 
                href="/similar-games" 
                className="inline-block border-2 border-purple-500 text-purple-400 font-bold py-3 px-6 rounded-lg hover:bg-purple-500/10 transition"
              >
                🔍 Explore Similar Games
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}