import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function GameCard({ 
  title, 
  description, 
  image, 
  ctaText = "Play Game",
  ctaHref = "#game" 
}: GameCardProps) {
  return (
    <div className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20 card-hover">
      {image && (
        <div className="w-full h-32 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
          <img src={image} alt={title} className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}
      <h3 className="text-xl font-bold text-purple-400 mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
      <Link 
        href={ctaHref}
        className="inline-block text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
      >
        {ctaText} →
      </Link>
    </div>
  );
}