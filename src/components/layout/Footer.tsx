import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-900/90 backdrop-blur border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Block Breaker</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The ultimate brick-breaking arcade experience with stunning graphics and addictive gameplay. Free to play instantly in your browser!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-purple-400 mb-4">Game & Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#game" className="text-gray-400 hover:text-cyan-400 transition">Play Now</Link></li>
              <li><Link href="/from-breakout-to-block-breaker" className="text-gray-400 hover:text-cyan-400 transition">From Breakout to Block Breaker</Link></li>
              <li><Link href="/google-block-breaker" className="text-gray-400 hover:text-cyan-400 transition">Google Block Breaker</Link></li>
              <li><Link href="/similar-games" className="text-gray-400 hover:text-cyan-400 transition">Similar Games</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-green-400 mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-slate-700">
          <p className="text-gray-500 text-sm mb-2">
            &copy; 2025 blockbreaker.vip - The ultimate Block Breaker gaming experience
          </p>
          <p className="text-gray-400 text-sm">
            🎮 Built by gaming enthusiasts for the classic arcade experience
          </p>
        </div>
      </div>
    </footer>
  );
}