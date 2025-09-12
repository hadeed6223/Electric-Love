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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            {t.valueProps.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="card text-center group hover-lift bg-black opacity-70 shadow-2xl shadow-[#9DAF89]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B88A44] group-hover:scale-110 transition-all duration-300 shadow-lg">
                <prop.icon className="w-8 h-8 text-[#E0AA3E] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#E0AA3E] mb-4 group-hover:text-[#E0AA3E] transition-all duration-300">
                {prop.title}
              </h3>
              <p className="leading-relaxed text-white">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;