import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur z-50 shadow flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center font-bold text-xl text-gray-800">
          <Image src="/favicon.ico" alt="Block Breaker Logo" width={32} height={32} className="w-8 h-8 mr-2" />
          Block Breaker
        </Link>
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><Link href="#features" className="hover:text-green-600">Features</Link></li>
          <li><Link href="#how-to-play" className="hover:text-green-600">How to Play</Link></li>
          <li><Link href="#tips-tricks" className="hover:text-green-600">Tips & Tricks</Link></li>
          <li><Link href="#achievements" className="hover:text-green-600">Achievements</Link></li>
        </ul>
        <Link href="#game-container" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition">Play Now</Link>
      </nav>

      {/* Game Container */}
      <div id="canvas-container" className="w-full h-screen pt-24" role="main" aria-label="Game container">
        <iframe
          id="game-container"
          src="https://blockbreakergame.io/game/block-breaker/"
          title="Play Block Breaker - Google's Classic Brick Breaking Game"
          style={{ width: '100%', height: '100%', border: 'none', minHeight: '600px' }}
          loading="eager"
        ></iframe>
      </div>

      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-indigo-400 to-purple-500 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow">Google&apos;s Block Breaker</h1>
        <p className="text-lg max-w-xl mx-auto mb-8 opacity-90">
          The classic brick-breaking arcade game reimagined with stunning visuals, exciting power-ups, and addictive gameplay. Test your skills and reflexes now!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#game-container" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow">Play Now</a>
          <a href="#features" className="bg-white/20 text-white px-8 py-3 rounded-full font-bold text-lg border border-white/30 hover:bg-white/30 transition">Learn More</a>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 id="features" className="text-3xl font-bold text-center mb-8">Block Breaker - Brick Breaking Excellence</h1>
          <p className="text-center text-gray-600 mb-8">
            Welcome to <strong>Block Breaker</strong>, Google&apos;s reimagining of the classic brick-breaking arcade experience that&apos;s captivating players worldwide. Combining nostalgic gameplay with modern design and addictive challenges, Block Breaker delivers the perfect blend of simplicity and strategic depth that keeps you coming back for &quot;just one more level.&quot;
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-100 rounded-xl p-8 text-center shadow hover:scale-105 transition">
              <div className="text-4xl text-green-500 mb-2"><i className="fas fa-puzzle-piece"></i></div>
              <h3 className="font-bold text-lg mb-2">Addictive Gameplay</h3>
              <p>The perfect balance of simple mechanics and challenging levels ensures hours of entertaining gameplay that never gets old.</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center shadow hover:scale-105 transition">
              <div className="text-4xl text-green-500 mb-2"><i className="fas fa-bolt"></i></div>
              <h3 className="font-bold text-lg mb-2">Exciting Power-ups</h3>
              <p>Collect game-changing power-ups like multi-ball, paddle extenders, and ball accelerators to dominate the leaderboards.</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center shadow hover:scale-105 transition">
              <div className="text-4xl text-green-500 mb-2"><i className="fas fa-trophy"></i></div>
              <h3 className="font-bold text-lg mb-2">Achievement System</h3>
              <p>Unlock badges, trophies and special rewards as you progress through increasingly challenging levels.</p>
            </div>
          </div>

          {/* How to Play */}
          <section id="how-to-play" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">How to Play Google&#39;s Block Breaker</h2>
            <ul className="space-y-3">
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Move Your Paddle:</strong> Use your mouse, trackpad, or arrow keys to slide the paddle left and right to keep the ball in play.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Break All Blocks:</strong> Aim the ball to hit and destroy all blocks on the screen to advance to the next level.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Catch Power-Ups:</strong> Special items will fall from broken blocks - catch them with your paddle to activate their effects!</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Don&apos;t Drop the Ball:</strong> If the ball falls below your paddle, you&apos;ll lose a life. Game over when all lives are lost.</li>
            </ul>
          </section>

          {/* Tips & Tricks */}
          <section id="tips-tricks" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Tips &amp; Tricks for Block Breaker Mastery</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Aim for the Corners:</strong> Hitting blocks at their edges can create unpredictable ball trajectories that clear multiple blocks at once.</li>
              <li><strong>Prioritize Power-Ups:</strong> Some power-ups are more valuable than others - multi-ball and paddle extenders can be game-changers.</li>
              <li><strong>Watch for Special Blocks:</strong> Explosive blocks can clear large areas, while reinforced blocks should be targeted early to wear them down.</li>
              <li><strong>Create Pathways:</strong> Strategically clear blocks to create paths to hard-to-reach areas instead of random hitting.</li>
              <li><strong>Master Ball Control:</strong> Learn to predict ball trajectories and position your paddle to direct the ball where you want it to go.</li>
            </ol>
          </section>

          {/* Achievements */}
          <section id="achievements" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Achievements &amp; Challenges</h2>
            <ul className="space-y-3">
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Perfect Clearer:</strong> Complete a level without losing a single ball.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Speed Demon:</strong> Clear a level in under 30 seconds.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Combo Master:</strong> Break 10 blocks in a single ball trajectory.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Power-Up Collector:</strong> Activate all types of power-ups in a single game.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Marathon Player:</strong> Reach level 50 without continuing.</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Leaderboard Legend:</strong> Maintain a top 100 position on the global leaderboards for a week.</li>
            </ul>
          </section>

          {/* Game Controls */}
          <section id="game-controls">
            <h2 className="text-2xl font-bold mb-4">Game Controls</h2>
            <ul className="space-y-3">
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Mouse Movement:</strong> Move your mouse left and right to control the paddle position</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Left/Right Arrow Keys:</strong> Alternative paddle movement controls</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>Spacebar:</strong> Launch the ball from the paddle / Pause game</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>P Key:</strong> Alternative pause button</li>
              <li className="bg-gray-50 p-4 rounded border-l-4 border-green-500"><strong>M Key:</strong> Mute/unmute game sounds</li>
            </ul>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="cta-section bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-16">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Break Some Blocks?</h2>
          <p className="mb-6">Join millions of players worldwide enjoying Google&apos;s Block Breaker. Challenge yourself, beat your high score, and experience the satisfaction of clearing level after level.</p>
          <Link href="#game-container" className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-gray-100 transition">Play Free Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-8 px-4">
          <div>
            <h3 className="text-green-400 font-bold text-lg mb-2">Block Breaker</h3>
            <p className="opacity-80 mb-4">The ultimate brick-breaking arcade experience reimagined by Google. Free to play, impossible to master!</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram" className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Discord" className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"><i className="fab fa-discord"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-green-400 font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-green-400">Features</Link></li>
              <li><Link href="#how-to-play" className="hover:text-green-400">How to Play</Link></li>
              <li><Link href="#tips-tricks" className="hover:text-green-400">Tips & Tricks</Link></li>
              <li><Link href="#achievements" className="hover:text-green-400">Achievements</Link></li>
              <li><Link href="#game-container" className="hover:text-green-400">Play Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-bold text-lg mb-2">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">FAQs</a></li>
              <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center opacity-60 border-t border-gray-700 pt-6">
          &copy; 2025 Block Breaker. All rights reserved. An unofficial fan site for Google&apos;s Block Breaker game.
        </div>
      </footer>
    </div>
  );
}
