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
      title: 'Fast Approval',
      description: 'Get approved in under 24 hours with our AI-powered system'
    },
    {
      icon: CheckCircle,
      title: 'Premium Vehicles',
      description: 'Drive the latest Tesla models with full maintenance included'
    },
    {
      icon: DollarSign,
      title: 'Higher Earnings',
      description: 'Earn up to 30% more with electric vehicle incentives'
    }
  ];

  const requirements = [
    'Valid driver\'s license (2+ years)',
    'Clean driving record',
    'Background check clearance',
    'Vehicle insurance',
    'Smartphone with data plan',
    'Age 21 or older'
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
              {t.hero.driverHeadline}
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#AF8D2C] via-[#F4EF89] to-[#EDC967] text-transparent bg-clip-text leading-tight">
              {t.hero.driverHeadlines}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg leading-relaxed">
              {t.drivers.hero.subheadline}
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
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t.hero.driverHeadline}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#AF8D2C] mb-6 leading-tight">
            {t.hero.driverHeadlines}
          </h3>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.driversSubheadline}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Drive With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience the future of rideshare driving with premium electric vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-red-100 relative overflow-hidden">
                {/* Card background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-red-500 via-transparent to-red-300"></div>
                
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                  <feature.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Driver Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Enjoy exclusive perks and higher earnings as an electric vehicle driver
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center group hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-red-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Driver Requirements
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Make sure you meet these basic requirements before applying
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">{requirement}</span>
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
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of drivers earning more with sustainable transportation
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