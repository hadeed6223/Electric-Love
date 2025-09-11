'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold btn-animation disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#D32424] to-[#6D1313] hover:from-[#6D1313] hover:to-[#D32424] border border-[#ff8D8D] rounded-md text-white font-semibold px-6 py-3 rounded-lg transition-colors',
    secondary: 'bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white glass',
    ghost: 'text-red-600 hover:bg-red-50'
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;