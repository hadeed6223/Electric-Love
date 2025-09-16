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
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="text-[#AF8D2C]">Electric Love</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props.map((prop, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl p-8 text-left shadow-2xl shadow-[#9DAF89]/50 border border-white group hover:scale-105 transition-all duration-300 overflow-hidden"
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
              {/* Noise texture overlay - exactly like the image */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }}
              />
              
              {/* Icon container - positioned in top left */}
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
              
              {/* Content - positioned in bottom area */}
              <div className="relative z-10 mt-10">
                <h3 className="text-4xl font-extralight text-white mb-4 leading-tight whitespace-pre-line">
                  {prop.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {prop.description}
                </p>
              </div>
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;