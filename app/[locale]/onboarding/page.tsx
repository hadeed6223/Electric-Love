'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Upload, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import { Locale, getTranslation } from '@/lib/i18n';

interface OnboardingPageProps {
  params: { locale: Locale };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  license: string;
  dlFront: File | null;
  dlBack: File | null;
  insurance: File | null;
}

export default function OnboardingPage({ params: { locale } }: OnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    license: '',
    dlFront: null,
    dlBack: null,
    insurance: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const router = useRouter();
  const t = getTranslation(locale);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: keyof FormData, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: t.onboarding.step1 },
    { number: 2, title: t.onboarding.step2 },
    { number: 3, title: t.onboarding.step3 },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="container mx-auto mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="group relative rounded-3xl p-8 text-left transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden glass-card">
              {/* Glass background with blur */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20"></div>
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Inner glow on hover */}
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <CheckCircle className="w-12 h-12 text-[#AF8D2C]" />
                </div>
                <h1 className="text-4xl font-extralight text-white mb-4">
                  {t.onboarding.confirmation.title}
                </h1>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {t.onboarding.confirmation.message}
                </p>
                <Button
                  text={t.onboarding.confirmation.cta}
                  variant="primary"
                  onClick={() => router.push(`/${locale}`)}
                />
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#AF8D2C] rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#F9F295] rounded-full opacity-40"></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-[#9DAF89] rounded-full opacity-50"></div>
              
              {/* Bottom highlight line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AF8D2C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto mt-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#AF8D2C] mb-4">
              {t.onboarding.title}
            </h1>
            
            {/* Progress */}
            <div className="flex justify-center space-x-4 mb-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    currentStep >= step.number 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.number}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-400">
                    {step.title}
                  </span>
                  {step.number < steps.length && (
                    <div className="ml-4 w-8 h-0.5 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-secondary mb-6">
                  {t.onboarding.step1}
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.license}
                  </label>
                  <input
                    type="text"
                    value={formData.license}
                    onChange={(e) => handleInputChange('license', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="D123456789"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Document Upload */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-secondary mb-6">
                  {t.onboarding.step2}
                </h2>

                {/* Driver License Front */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.frontDL}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload('dlFront', e.target.files?.[0] || null)}
                      accept="image/*"
                      className="hidden"
                      id="dl-front"
                    />
                    <label htmlFor="dl-front" className="cursor-pointer">
                      <span className="text-primary font-medium">{t.onboarding.clickToUpload}</span>
                    </label>
                    {formData.dlFront && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.dlFront.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Driver License Back */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.backDL}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload('dlBack', e.target.files?.[0] || null)}
                      accept="image/*"
                      className="hidden"
                      id="dl-back"
                    />
                    <label htmlFor="dl-back" className="cursor-pointer">
                      <span className="text-primary font-medium">{t.onboarding.clickToUpload}</span>
                    </label>
                    {formData.dlBack && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.dlBack.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Insurance Document */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.onboarding.insurance}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload('insurance', e.target.files?.[0] || null)}
                      accept="image/*,.pdf"
                      className="hidden"
                      id="insurance"
                    />
                    <label htmlFor="insurance" className="cursor-pointer">
                      <span className="text-primary font-medium">{t.onboarding.clickToUpload}</span>
                    </label>
                    {formData.insurance && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.insurance.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-secondary mb-6">
                  {t.onboarding.step3}
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{t.onboarding.name}</p>
                      <p className="font-semibold">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{t.onboarding.email}</p>
                      <p className="font-semibold">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{t.onboarding.phone}</p>
                      <p className="font-semibold">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{t.onboarding.license}</p>
                      <p className="font-semibold">{formData.license}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">{t.onboarding.documentsUploaded}</p>
                    <div className="space-y-1">
                      {formData.dlFront && (
                        <p className="text-sm text-gray-500"> <span className="text-[#9DAF89]">✓</span> {t.onboarding.driverLicenseFront}</p>
                      )}
                      {formData.dlBack && (
                        <p className="text-sm text-gray-500"> <span className="text-[#9DAF89]">✓</span> {t.onboarding.driverLicenseBack}</p>
                      )}
                      {formData.insurance && (
                        <p className="text-sm text-gray-500"> <span className="text-[#9DAF89]">✓</span> {t.onboarding.insuranceDocument}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                text={t.onboarding.back}
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 h-10 text-black hover:bg-gray-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.onboarding.back}</span>
              </Button>
              
              {currentStep < 3 ? (
                <Button
                  text={t.onboarding.next}
                  variant="primary"
                  onClick={nextStep}
                  className="flex items-center space-x-2 h-10"
                >
                  <span>{t.onboarding.next}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  text={t.onboarding.submit}
                  variant="primary"
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 h-10"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}