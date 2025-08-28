import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  pulse?: boolean;
}

export default function CTAButton({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  children, 
  pulse = false,
  className = '',
  ...props 
}: CTAButtonProps) {
  const baseClasses = 'font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:scale-105',
    secondary: 'bg-slate-700 text-gray-200 hover:bg-slate-600',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const pulseClass = pulse ? 'pulse-cta' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${pulseClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}