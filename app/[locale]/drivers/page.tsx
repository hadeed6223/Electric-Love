"use client"
import React from 'react';
import Link from 'next/link';
import { Brain, Shield, CreditCard, Zap, CheckCircle, DollarSign, ArrowRight, Star, Users, Award } from 'lucide-react';
import Button from '@/components/Button';
import { Locale, getTranslation } from '@/lib/i18n';
import Image from 'next/image';

interface DriversPageProps {
  params: { locale: Locale };
}

export default function DriversPage({ params: { locale } }: DriversPageProps) {
  const t = getTranslation(locale);

  const features = [
    {
      icon: Brain,
      title: t.drivers.features.ai.title,
      description: t.drivers.features.ai.description
    },
    {
      icon: Shield,
      title: t.drivers.features.compliance.title,
      description: t.drivers.features.compliance.description
    },
    {
      icon: CreditCard,
      title: t.drivers.features.payouts.title,
      description: t.drivers.features.payouts.description
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: t.drivers.benefits.fastApproval.title,
      description: t.drivers.benefits.fastApproval.description
    },
    {
      icon: CheckCircle,
      title: t.drivers.benefits.premiumVehicles.title,
      description: t.drivers.benefits.premiumVehicles.description
    },
    {
      icon: DollarSign,
      title: t.drivers.benefits.higherEarnings.title,
      description: t.drivers.benefits.higherEarnings.description
    }
  ];

  const requirements = [
    t.drivers.requirements.req1,
    t.drivers.requirements.req2,
    t.drivers.requirements.req3,
    t.drivers.requirements.req4,
    t.drivers.requirements.req5,
    t.drivers.requirements.req6
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Same as Homepage */}
      <section className="relative min-h-screen text-white flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center object-cover bg-no-repeat opacity-80" 
          style={{
            backgroundImage: 'url(/driverBg.png)',
            backgroundPosition: 'left center',
            backgroundSize: '100% 100%',
          }}
        ></div>
        
        {/* Content */}
        <div className="container mx-auto relative z-10 pt-20 px-4">
          <div className="max-w-2xl text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              {t.drivers.hero.driverHeadline}
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#AF8D2C] via-[#F4EF89] to-[#EDC967] text-transparent bg-clip-text leading-tight">
              {t.drivers.hero.driverHeadlines}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg leading-relaxed">
              {t.drivers.hero.driversSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Link href={`/${locale}/onboarding`}>
                <Button text={t.drivers.hero.beginApplication} variant="primary" />
              </Link>
              <button 
                className="border-2 border-gray-500 text-white hover:bg-white hover:text-black font-medium px-8 py-3 rounded-lg transition-colors"
                onClick={() => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.drivers.hero.seeRequirements}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Ready Section */}
      <section className="py-16 bg-black/90 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t.drivers.hero.readyToStartEarning}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#AF8D2C] mb-6 leading-tight">
            {t.drivers.hero.withGoElectricLove}
          </h3>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.drivers.hero.joinThousandsOfDrivers}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black border-b border-gray-600 relative overflow-hidden">
        <div className="container mx-auto bg-black py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">{t.drivers.features.title1} </span>
              <span className="text-[#AF8D2C]">{t.drivers.features.title2}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative rounded-2xl p-8 text-left group hover:scale-105 transition-all duration-300 overflow-hidden"
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
                {/* Noise texture overlay */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay'
                  }}
                />
                
                {/* Icon container */}
                <div className="relative z-10 mb-8">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(175, 141, 44, 0.15)',
                      borderColor: 'rgba(175, 141, 44, 0.3)',
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-[#AF8D2C]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-4xl font-extralight text-white mb-4 leading-tight whitespace-pre-line">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black border-b border-gray-600">
        <div className="container mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">{t.drivers.benefits.title1} </span>
              <span className="text-[#AF8D2C]">{t.drivers.benefits.title2}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="relative rounded-2xl p-8 text-left group hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{
                  background: '#2D2D2D',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundImage: 'url(/valueCards.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay',
                  opacity: 0.9,
                  animationDelay: `${index * 200}ms`
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
                
                {/* Icon container */}
                <div className="relative z-10 mb-8">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(175, 141, 44, 0.15)',
                      borderColor: 'rgba(175, 141, 44, 0.3)',
                    }}
                  >
                    <benefit.icon className="w-6 h-6 text-[#AF8D2C]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 mt-10">
                  <h3 className="text-4xl font-extralight text-white mb-4 leading-tight whitespace-pre-line">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">{t.drivers.requirements.title1} </span>
              <span className="text-[#AF8D2C]">{t.drivers.requirements.title2}</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t.drivers.requirements.subheading}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div 
                  key={index} 
                  className="relative rounded-2xl p-6 text-left group hover:scale-105 transition-all duration-300 overflow-hidden"
                  style={{
                    background: '#2D2D2D',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundImage: 'url(/valueCards.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    opacity: 0.9,
                    animationDelay: `${index * 100}ms`
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
                  
                  <div className="flex items-center space-x-4 relative z-10">
                    {/* Icon container */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
                      style={{
                        backgroundColor: 'rgba(175, 141, 44, 0.15)',
                        borderColor: 'rgba(175, 141, 44, 0.3)',
                      }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#AF8D2C]" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-white text-lg font-medium leading-relaxed">
                        {requirement}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#AF8D2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.drivers.hero.readyToStartEarning}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t.drivers.hero.joinThousandsOfDrivers}
            </p>
            <Link href={`/${locale}/onboarding`}>
              <Button text={t.drivers.hero.beginApplication} variant="primary" className="text-lg px-8 py-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}