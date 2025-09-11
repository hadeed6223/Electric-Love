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
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Follow these simple steps to start your journey with us
          </p>
        </div>
        
        {/* Circular Steps Layout */}
        <div className="relative max-w-2xl mx-auto">
          {/* Connecting Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 384 384">
              {/* Background circle */}
              <circle
                cx="192"
                cy="192"
                r="160"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="4"
              />
              {/* Animated progress circle */}
              <circle
                cx="192"
                cy="192"
                r="160"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeDasharray="1005"
                strokeDashoffset="0"
                className="animate-pulse"
                style={{
                  animation: 'drawCircle 3s ease-in-out infinite'
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="25%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f87171" />
                  <stop offset="75%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Steps positioned in circle */}
          <div className="relative w-96 h-96 mx-auto">
            {steps.map((step, index) => {
              // Calculate position for each step in a circle
              const angle = (index * 90) - 90; // Start from top, go clockwise
              const radian = (angle * Math.PI) / 180;
              const radius = 160;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {/* Step Circle */}
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-1 shadow-2xl group-hover:scale-110 transition-all duration-300">
                      {/* Inner circle */}
                      <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center relative overflow-hidden p-4">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Icon */}
                        <step.icon className="w-8 h-8 text-red-600 relative z-10 group-hover:scale-110 transition-transform duration-300 mb-2" />
                        
                        {/* Step content inside circle */}
                        <div className="text-center relative z-10">
                          <h3 className="text-sm font-bold text-black mb-1 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-xs text-gray-600 leading-tight">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Step number badge */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors duration-300">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Center element */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex flex-col items-center justify-center shadow-2xl z-10 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-center text-white p-2">
              <Zap className="w-6 h-6 mx-auto mb-1" />
              <p className="text-xs font-bold leading-tight">Start<br/>Now</p>
            </div>
          </div> */}
        </div>
        
        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes drawCircle {
          0% {
            stroke-dashoffset: 1005;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1005;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;