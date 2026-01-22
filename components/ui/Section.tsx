import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${dark ? 'bg-primary-950 text-white' : 'bg-primary-50 text-slate-800'} ${className}`}
    >
      <div 
        ref={ref}
        className={`container mx-auto px-4 md:px-6 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        {children}
      </div>
    </section>
  );
};