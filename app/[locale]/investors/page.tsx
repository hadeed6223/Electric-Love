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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto mt-10">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-secondary mb-4">
              {t.investors.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.investors.subtitle}
            </p>
            <Button
              text={t.investors.getNotified}
              variant="primary"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}