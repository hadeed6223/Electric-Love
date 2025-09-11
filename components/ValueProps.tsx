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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.valueProps.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="card text-center group hover-lift">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <prop.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gradient-primary transition-all duration-300">
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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