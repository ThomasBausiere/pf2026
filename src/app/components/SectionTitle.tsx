import React from 'react';

interface SectionTitleProps {
  children: string;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 
      className={`text-2xl md:text-[26px] lg:text-[28px] font-extrabold tracking-[-0.02em] mb-8 md:mb-10 lg:mb-12 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #F5F7FA 0%, rgba(245, 247, 250, 0.85) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </h2>
  );
}