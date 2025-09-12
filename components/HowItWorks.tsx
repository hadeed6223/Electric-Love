'use client';

import React, { useEffect, useState } from 'react';
import { Leaf, Zap, Battery } from 'lucide-react';
import { Locale, getTranslation } from '@/lib/i18n';

interface ImpactProps {
  locale: Locale;
}

const Impact: React.FC<ImpactProps> = ({ locale }) => {
  const [counters, setCounters] = useState({ miles: 0, co2: 0, sessions: 0 });
  const t = getTranslation(locale);

  useEffect(() => {
    const targets = { miles: 150000, co2: 75000, sessions: 25000 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      miles: targets.miles / steps,
      co2: targets.co2 / steps,
      sessions: targets.sessions / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        miles: Math.min(Math.floor(increment.miles * step), targets.miles),
        co2: Math.min(Math.floor(increment.co2 * step), targets.co2),
        sessions: Math.min(Math.floor(increment.sessions * step), targets.sessions)
      });

      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Leaf,
      value: counters.miles.toLocaleString(),
      label: t.impact.greenMiles,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverBg: 'group-hover:bg-red-600'
    },
    {
      icon: Zap,
      value: `${counters.co2.toLocaleString()} lbs`,
      label: t.impact.co2Avoided,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverBg: 'group-hover:bg-red-600'
    },
    {
      icon: Battery,
      value: counters.sessions.toLocaleString(),
      label: t.impact.chargingSessions,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverBg: 'group-hover:bg-red-600'
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-balance">
            {t.impact.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See the positive environmental impact we're making together through sustainable transportation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-red-500 via-transparent to-red-300"></div>
              
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${stat.hoverBg} group-hover:scale-110 transition-all duration-300 relative z-10`}>
                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:text-white transition-colors duration-300`} />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-black mb-2 group-hover:text-gradient-primary transition-all duration-300 relative z-10">
                {stat.value}
              </div>
              
              <p className="text-sm text-gray-600 font-medium leading-relaxed relative z-10">
                {stat.label}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 bg-red-600 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-8 flex justify-center relative z-10">
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Impact;