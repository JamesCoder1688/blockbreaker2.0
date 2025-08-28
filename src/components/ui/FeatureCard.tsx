import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'yellow' | 'orange';
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  color = 'cyan' 
}: FeatureCardProps) {
  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/50 text-cyan-400',
    purple: 'border-purple-500/20 hover:border-purple-500/50 text-purple-400',
    pink: 'border-pink-500/20 hover:border-pink-500/50 text-pink-400',
    green: 'border-green-500/20 hover:border-green-500/50 text-green-400',
    yellow: 'border-yellow-500/20 hover:border-yellow-500/50 text-yellow-400',
    orange: 'border-orange-500/20 hover:border-orange-500/50 text-orange-400'
  };

  return (
    <div className={`bg-slate-800/50 rounded-xl p-6 text-center border ${colorClasses[color]} card-hover transition-all duration-300`}>
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className={`font-bold text-lg ${colorClasses[color].split(' ')[2]} mb-2`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}