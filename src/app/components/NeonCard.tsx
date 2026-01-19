import React, { ReactNode } from 'react';

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function NeonCard({ children, className = '', hover = true }: NeonCardProps) {
  return (
    <div
      className={`
        bg-[#0B0E10] border border-[rgba(245,247,250,0.10)] rounded-[18px] p-5
        transition-all duration-[220ms]
        ${hover ? 'hover:border-[rgba(57,255,20,0.22)] hover:-translate-y-0.5' : ''}
        ${className}
      `}
      style={{
        boxShadow: '0 14px 40px rgba(0, 0, 0, 0.55)',
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.55), 0 0 30px rgba(57, 255, 20, 0.12)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.55)';
        }
      }}
    >
      {children}
    </div>
  );
}