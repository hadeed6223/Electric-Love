import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Leaf, Zap } from 'lucide-react';
import Image from 'next/image';
import { Locale, getTranslation } from '@/lib/i18n';
import Button from '@/components/Button';

interface BeliefProps {
  locale: Locale;
}

const Belief: React.FC<BeliefProps> = ({ locale }) => {
  const t = getTranslation(locale);

  return (
    <section className="py-12 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-[110rem] relative z-10">
        <div className="max-w-[90rem] mx-auto text-center">
          {/* Icon section */}
          <div className="flex justify-center items-center space-x-3 mb-6 animate-fade-in">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transform scale-110">
              <Leaf className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight animate-slide-up">
            {t.belief.title}
          </h2>
          
          <div className="w-16 h-px bg-white/30 mx-auto mb-6 rounded-full animate-fade-in"></div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-white font-semibold">{t.belief.subtitle}</span>
          </p>
          
          {/* Enhanced CTA section */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`/${locale}/drivers`}>
              <Button text={t.nav.driveNow} variant="primary" />
            </Link>
              
              <Link href={`/${locale}/investors`}>
                <button className="group relative overflow-hidden border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/10">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{t.belief.investorInfo}</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
          <Image src="./Wave.png" alt="/Belief" width={3000} height={500} />
          </div>
        </div>
      </div>
      
      {/* Bottom separator */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="h-4 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      </div> */}
    </section>
  );
};

export default Belief;