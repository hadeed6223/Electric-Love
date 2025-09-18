"use client";
import React from "react";
import { Leaf } from "lucide-react";
import Button from "@/components/Button";
import { Locale, getTranslation } from "@/lib/i18n";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface InvestorsPageProps {
  params: { locale: Locale };
}

export default function InvestorsPage({
  params: { locale },
}: InvestorsPageProps) {
  const t = getTranslation(locale);

  const [text] = useTypewriter({
    words: [t.investors.comingSoon],
    loop: true, // keeps looping
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500, // wait before deleting
  });

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="container mx-auto my-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* <div className="card text-center"> */}
          <div className="w-16 h-16 bg-[#AF8D2C] rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#AF8D2C] mb-2">
            {t.investors.title}
          </h1>

          <h4 className="text-4xl font-semibold text-[#AF8D2C] my-4 leading-tight text-center whitespace-pre-line">
            {text}
            <Cursor cursorStyle="|" />
          </h4>

          <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-3xl mx-auto">
            {t.investors.subtitle}
          </p>

          {/* Mission Statement Block */}
          <div className="group relative rounded-3xl p-8 text-left transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden glass-card">
            {/* Glass background with blur */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20"></div>

            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl"></div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

            {/* Inner glow on hover */}
            <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Content with enhanced typography */}
            <div className="relative z-10 mt-2">
              <h3 className="text-4xl font-extralight text-white mb-2 leading-tight text-center whitespace-pre-line">
                {t.investors.mission}
              </h3>
              <p className="text-gray-400 text-justify leading-relaxed">
                {t.investors.missionDescription}
              </p>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#AF8D2C] rounded-full opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#F9F295] rounded-full opacity-40"></div>
            <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-[#9DAF89] rounded-full opacity-50"></div>

            {/* Bottom highlight line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AF8D2C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <Button
            text={t.investors.getNotified}
            variant="primary"
            className="mt-6 text-sm"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
