import CTAButton from '../ui/CTAButton';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showGameIframe?: boolean;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  description, 
  primaryCTA,
  secondaryCTA,
  showGameIframe = false
}: HeroSectionProps) {
  return (
    <section id="game" className="relative z-10 text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {showGameIframe && (
          <div className="mb-8">
            {/* Game Container */}
            <div className="relative w-full max-w-5xl mx-auto">
              {/* Neon Frame Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur-sm opacity-75 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg"></div>
              
              {/* Game Frame */}
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
                <iframe
                  src="https://blockbreakergame.io/game/block-breaker/"
                  title="Play Block Breaker - Classic Brick Breaking Game"
                  className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] border-none"
                  loading="eager"
                  allow="gamepad; fullscreen; autoplay"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    minHeight: '500px',
                    display: 'block'
                  }}
                ></iframe>
              </div>
              
              {/* Game Info Overlay */}
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur rounded-lg px-4 py-2 border border-cyan-500/30">
                <span className="text-cyan-400 text-sm font-bold">🎮 Block Breaker Game</span>
              </div>
            </div>
          </div>
        )}
        
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 leading-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">
            {subtitle}
          </p>
        )}
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
      </div>
    </section>
  );
}