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
    primary: 'bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] via-[#FBF499] to-[#BB8A44] hover:from-[#FBF499] hover:via-[#BB8A4B] hover:to-[#F9F295] border border-[#ffffff] rounded-md text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 ease-in-out',
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