'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import { Locale, getTranslation } from '@/lib/i18n';

interface HeroProps {
  locale: Locale;
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = getTranslation(locale);

  return (
    <section className="relative min-h-screen text-white flex items-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center object-cover bg-no-repeat opacity-80" 
        style={{
          backgroundImage: 'url(/BG.png)',
          backgroundPosition: 'left center',
          backgroundSize: '100% 100%',
        }}
      ></div>
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-red-700/30 via-red-900/10 to-transparent"></div> */}
      
      {/* Content */}
      <div className="container mx-auto relative z-10 pt-20 px-4">
        <div className="max-w-2xl text-left animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            {t.hero.headline}
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#AF8D2C] via-[#F4EF89] to-[#EDC967] text-transparent bg-clip-text leading-tight">
            {t.hero.headlines}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg leading-relaxed">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Link href={`/${locale}/drivers`}>
              <Button text={t.nav.driveNow} variant="primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;