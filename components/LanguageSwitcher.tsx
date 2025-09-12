'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { Us, Es} from 'react-flags-select'
import Image from 'next/image';
import { spawn } from 'child_process';

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ locale, className = '' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  const switchLanguage = async () => {
    setIsAnimating(true);
    
    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newLocale = locale === 'en' ? 'es' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    
    setIsAnimating(false);
  };

  return (
    <div className={`${className}`}>
      <button
        onClick={switchLanguage}
        disabled={isAnimating}
        className="relative inline-flex items-center w-16 h-8 bg-gray-800 rounded-full border border-gray-600 transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#BB8A44] focus:ring-offset-2 disabled:cursor-not-allowed"
      >
        {/* Toggle Circle */}
        <div
          className={`absolute top-0.5 w-7 h-7 rounded-full shadow-lg transform transition-all duration-500 ease-in-out flex items-center justify-center ${
            locale === 'en' ? 'translate-x-1' : 'translate-x-8'
          } ${isAnimating ? 'scale-110' : 'scale-100'}`}
          style={{
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease'
          }}
        >
          {/* Flag */}
          <span className={`text-lg flex items-center gap-2 text-white transition-all duration-300 ${isAnimating ? 'scale-90' : 'scale-100'}`}>
            {locale === 'es' && <span className='text-sm relative right-5'>ES</span>}
            {locale === 'en' ? <Image src='/US.png' alt='US' width={20} height={20} /> : <Image src='/ES.png' alt='ES' width={20} height={20} className='relative right-5' />}
            {locale === 'en' && <span>EN</span>}
          </span>
        </div>
        
        {/* Background Track Labels */}
        {/* <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-bold text-white overflow-hidden">
          <span className={`transition-all duration-500 ${locale === 'en' ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-2'}`}>
            EN
          </span>
          <span className={`transition-all duration-500 ${locale === 'es' ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-2'}`}>
            ES
          </span>
        </div> */}
        
        {/* Ripple Effect */}
        {isAnimating && (
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;