import React from 'react';
import { Leaf } from 'lucide-react';
import Button from '@/components/Button';
import { Locale, getTranslation } from '@/lib/i18n';

interface InvestorsPageProps {
  params: { locale: Locale };
}

export default function InvestorsPage({ params: { locale } }: InvestorsPageProps) {
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto mt-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* <div className="card text-center"> */}
            <div className="w-16 h-16 bg-[#AF8D2C] rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#AF8D2C] mb-3">
              Investor Command Center
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t.investors.subtitle}
            </p>
            
            {/* Mission Statement Block */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left border border-gray-200">
              <h2 className="text-lg font-bold text-black mb-3 text-center">Our Mission</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                At our core we believe that Earth and its biosphere is a life support system for humans and all other creatures. We must avoid abrupt environmental changes to continue to prosper on our planet. The correct technological progress will help transition physical mobility away from fossil fuels (inferior technology) to renewable. We are here to make the transition happen a little bit faster.
              </p>
            </div>
            
            <Button
              text={t.investors.getNotified}
              variant="primary"
              // className="px-5 py-2 text-sm"
            />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}