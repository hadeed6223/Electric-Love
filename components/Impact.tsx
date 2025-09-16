'use client';

import React, { useEffect, useState } from 'react';
import { Leaf, Zap, Battery } from 'lucide-react';
import { Locale, getTranslation } from '@/lib/i18n';

interface ImpactProps {
  locale: Locale;
}

const Impact: React.FC<ImpactProps> = ({ locale }) => {
  const [counters, setCounters] = useState({ miles: 0, co2: 0, sessions: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const t = getTranslation(locale);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('impact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { miles: 150000, co2: 75000, sessions: 25000 };
    const duration = 2500;
    const steps = 80;
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
  }, [isVisible]);

  return (
    <section 
      id="impact-section"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/image.png)',
            backgroundPosition: 'left center',
            backgroundSize: '100% 100%',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto relative z-10 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{t.impact.title1} </span>
            <span className="text-[#AF8D2C]">{t.impact.title2}</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.impact.subtitle}
          </p>
        </div>
        
        {/* Stats - Horizontal Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Green Miles */}
            <div className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <Leaf className="w-12 h-12 md:w-16 md:h-16 text-white stroke-2" />
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#AF8D2C] leading-tight">
                  {counters.miles.toLocaleString()}
                </div>
                <div className="text-base md:text-lg text-gray-300 font-medium">
                  {t.impact.greenMiles}
                </div>
              </div>
            </div>

            {/* CO2 Avoided */}
            <div className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <Zap className="w-12 h-12 md:w-16 md:h-16 text-white stroke-2" />
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#AF8D2C] leading-tight">
                  {counters.co2.toLocaleString()}&nbsp;lbs
                </div>
                <div className="text-base md:text-lg text-gray-300 font-medium">
                  {t.impact.co2Avoided}
                </div>
              </div>
            </div>

            {/* Charging Sessions */}
            <div className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <Battery className="w-12 h-12 md:w-16 md:h-16 text-white stroke-2" />
              </div>
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#AF8D2C] leading-tight">
                  {counters.sessions.toLocaleString()}
                </div>
                <div className="text-base md:text-lg text-gray-300 font-medium">
                  {t.impact.chargingSessions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;