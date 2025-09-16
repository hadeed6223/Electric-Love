import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Locale, getTranslation } from '@/lib/i18n';

interface ContactPageProps {
  params: { locale: Locale };
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.02]"> */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#BB8A44] mb-4">
            {t.contact.title}
          </h1>
          
          <p className="text-lg text-white mb-12 leading-relaxed">
            {t.contact.subtitle}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 text-gray-700 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-6 h-6 text-[#BB8A44]" />
              <span className="font-medium">{t.contact.email}:</span>
              <a 
                href="mailto:support@goelectriclove.com" 
                className="text-black hover:text-[#BB8A44] transition-colors"
              >
                support@goelectriclove.com
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-gray-700 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-6 h-6 text-[#BB8A44]" />
              <span className="font-medium">{t.contact.phone}:</span>
              <a 
                href="tel:512.270.9644" 
                className="text-black hover:text-[#BB8A44] transition-colors"
              >
                512.270.9644
              </a>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="w-24 h-1 bg-[#BB8A44]/40 mx-auto rounded-full"></div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}