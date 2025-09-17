'use client'
import React from 'react';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import { Locale, getTranslation } from '@/lib/i18n';

interface ValuePropsProps {
  locale: Locale;
}

const ValueProps: React.FC<ValuePropsProps> = ({ locale }) => {
  const t = getTranslation(locale);

  const props = [
    {
      icon: Zap,
      title: t.valueProps.onboard.title,
      description: t.valueProps.onboard.description
    },
    {
      icon: Shield,
      title: t.valueProps.compliance.title,
      description: t.valueProps.compliance.description
    },
    {
      icon: TrendingUp,
      title: t.valueProps.operate.title,
      description: t.valueProps.operate.description
    }
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#AF8D2C]/30 to-[#F9F295]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-[#9DAF89]/25 to-[#AF8D2C]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#F9F295]/10 to-[#9DAF89]/10 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="text-[#AF8D2C]">Electric Love</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AF8D2C] to-[#F9F295] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {props.map((prop, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl p-8 text-left transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden glass-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glass background with blur */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20"></div>
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Inner glow on hover */}
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Icon container with enhanced glass effect */}
              <div className="relative z-20 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/30 bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                >
                  <prop.icon className="w-8 h-8 text-[#AF8D2C] transition-all duration-300 group-hover:text-[#F9F295]" />
                </div>
              </div>
              
              {/* Content with enhanced typography */}
              <div className="relative z-20">
                <h3 className="text-3xl font-light text-white mb-4 leading-tight transition-all duration-300 group-hover:text-[#F9F295]">
                  {prop.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed transition-all duration-300 group-hover:text-white">
                  {prop.description}
                </p>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#AF8D2C] rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#F9F295] rounded-full opacity-40"></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-[#9DAF89] rounded-full opacity-50"></div>
              
              {/* Bottom highlight line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AF8D2C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced decorative bottom element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-[#AF8D2C] rounded-full shadow-lg shadow-[#AF8D2C]/50"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#AF8D2C] via-[#F9F295] to-[#9DAF89] rounded-full shadow-lg"></div>
            <div className="w-4 h-4 bg-[#9DAF89] rounded-full shadow-lg shadow-[#9DAF89]/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;

{
  /* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((prop, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl p-6 text-left shadow-2xl shadow-[#9DAF89]/30 border border-white group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{
                background: '#2D2D2D',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundImage: 'url(/valueCards.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                opacity: 0.9

              }}
            >

              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }}
              />
              
              
              <div className="relative z-10 mb-8" 
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: 'rgba(175, 141, 44, 0.15)',
                    borderColor: 'rgba(175, 141, 44, 0.3)',
                  }}
                >
                  <prop.icon className="w-6 h-6 text-[#AF8D2C]" />
                </div>
              </div>
              
              
              <div className="relative z-10 mt-10">
                <h3 className="text-4xl font-extralight text-white mb-4 leading-tight whitespace-pre-line">
                  {prop.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {prop.description}
                </p>
              </div>
              
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div> */
}
