'use client'
import React from 'react';
import { FileText, CheckCircle, Zap, DollarSign } from 'lucide-react';
import { Locale, getTranslation } from '@/lib/i18n';

interface HowItWorksProps {
  locale: Locale;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ locale }) => {
  const t = getTranslation(locale);

  const steps = [
    {
      icon: FileText,
      title: t.howItWorks.apply.title,
      description: t.howItWorks.apply.description,
      number: '01'
    },
    {
      icon: CheckCircle,
      title: t.howItWorks.verify.title,
      description: t.howItWorks.verify.description,
      number: '02'
    },
    {
      icon: Zap,
      title: t.howItWorks.activate.title,
      description: t.howItWorks.activate.description,
      number: '03'
    },
    {
      icon: DollarSign,
      title: t.howItWorks.earn.title,
      description: t.howItWorks.earn.description,
      number: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#AF8D2C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#9DAF89] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#F9F295] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">How It </span>
            <span className="text-[#AF8D2C]">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Follow these simple steps to start your journey with us
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{
                background: '#2D2D2D',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundImage: 'url(/valueCards.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                opacity: 0.9,
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Noise texture overlay */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }}
              />
              
              {/* Step number badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#AF8D2C] to-[#F9F295] rounded-full flex items-center justify-center shadow-lg z-20">
                <span className="text-black font-bold text-lg">{step.number}</span>
              </div>
              
              {/* Icon container */}
              <div className="relative z-10 mb-6">
                <div 
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border-2 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(175, 141, 44, 0.15)',
                    borderColor: 'rgba(175, 141, 44, 0.4)',
                  }}
                >
                  <step.icon className="w-8 h-8 text-[#AF8D2C]" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#AF8D2C] to-[#F9F295] transform -translate-y-1/2 z-30">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#F9F295] rounded-full"></div>
                </div>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl" style={{
                boxShadow: '0 0 30px rgba(175, 141, 44, 0.3)'
              }} />
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#AF8D2C] rounded-full animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#AF8D2C] via-[#F9F295] to-[#9DAF89] rounded-full"></div>
            <div className="w-3 h-3 bg-[#9DAF89] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;