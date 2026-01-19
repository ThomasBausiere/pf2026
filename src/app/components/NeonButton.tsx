import React, { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function NeonButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '' 
}: NeonButtonProps) {
  const baseStyles = "h-11 px-[18px] rounded-[14px] font-bold transition-all duration-[220ms] focus:outline-none focus:ring-[3px] focus:ring-[rgba(57,255,20,0.22)]";
  
  const primaryStyles = `
    bg-[#39FF14] text-[#050607] 
    hover:bg-[#5DFF3C] hover:-translate-y-0.5
    active:bg-[#26D90C] active:translate-y-0
  `;
  
  const secondaryStyles = `
    bg-[rgba(245,247,250,0.06)] text-[#F5F7FA] border border-[rgba(245,247,250,0.14)]
    hover:bg-[rgba(245,247,250,0.10)] hover:border-[rgba(57,255,20,0.24)]
  `;

  const primaryShadow = variant === 'primary' 
    ? '0 0 0 1px rgba(57, 255, 20, 0.35), 0 0 26px rgba(57, 255, 20, 0.24)'
    : '';
    
  const hoverShadow = variant === 'primary'
    ? '0 0 0 1px rgba(57, 255, 20, 0.45), 0 0 34px rgba(57, 255, 20, 0.30)'
    : '0 0 22px rgba(57, 255, 20, 0.10)';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`}
      style={{ boxShadow: primaryShadow }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = hoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = primaryShadow;
      }}
    >
      {children}
    </button>
  );
}