import React from 'react';
import { Leaf } from 'lucide-react';
import Button from '@/components/Button';
import { Locale, getTranslation } from '@/lib/i18n';

interface InvestorsPageProps {
  params: { locale: Locale };
}

export default function InvestorsPage({ params: { locale } }: InvestorsPageProps) {
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="container mx-auto my-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* <div className="card text-center"> */}
            <div className="w-16 h-16 bg-[#AF8D2C] rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#AF8D2C] mb-3">
              {t.investors.title}
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t.investors.subtitle}
            </p>
            
            {/* Mission Statement Block */}
            <div 
              className="relative rounded-2xl p-8 text-left shadow-2xl shadow-[#9DAF89]/30 border border-white group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{
                background: '#2D2D2D',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundImage: 'url(/valueCards.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                opacity: 0.9
              }}>
              <div className="absolute inset-0 opacity-40" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay'}} />
              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{backgroundColor: 'rgba(175, 141, 44, 0.15)', borderColor: 'rgba(175, 141, 44, 0.3)'}}>
                  <Leaf className="w-6 h-6 text-[#AF8D2C]" />
                </div>
              </div>
              <div className="relative z-10 mt-10">
                <h3 className="text-4xl font-extralight text-white mb-4 leading-tight whitespace-pre-line">{t.investors.mission}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{t.investors.missionDescription}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <Button
              text={t.investors.getNotified}
              variant="primary"
              className="mt-6 text-sm"
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}