import CTAButton from '../ui/CTAButton';

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  useH1?: boolean; // Add option for H1 vs H2
}

export default function ContentSection({ 
  id, 
  title, 
  children, 
  showCTA = true,
  ctaText = "Play Block Breaker",
  ctaHref = "#game",
  className = "",
  useH1 = false
}: ContentSectionProps) {
  return (
    <section 
      id={id} 
      className={`relative ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
        {useH1 ? (
          <h1 
            id={`${id}-heading`}
            className="text-4xl font-bold text-cyan-400 mb-6 text-center"
          >
            {title}
          </h1>
        ) : (
          <h2 
            id={`${id}-heading`}
            className="text-4xl font-bold text-cyan-400 mb-6 text-center"
          >
            {title}
          </h2>
        )}
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
        {showCTA && (
          <div className="mt-8 text-center">
            <CTAButton href={ctaHref} variant="outline" size="sm">
              {ctaText}
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}