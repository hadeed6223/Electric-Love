import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Locale, getTranslation } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = getTranslation(locale);

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url(/Footer.png)" }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 lg:px-0 md:max-w-[60rem] lg:max-w-[65rem] xl:max-w-[78rem] 2xl:max-w-[90rem] mx-auto py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section - Left */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#BB8A44] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GoElectricLove</h3>
                <p className="text-sm text-gray-400">{t.footer.company}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation - Center */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex gap-8">
              <Link
                href={`/${locale}`}
                className="text-white hover:text-[#BB8A44] transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href={`/${locale}/drivers`}
                className="text-white hover:text-[#BB8A44] transition-colors"
              >
                {t.nav.drivers}
              </Link>
              <Link
                href={`/${locale}/investors`}
                className="text-white hover:text-[#BB8A44] transition-colors"
              >
                {t.nav.investors}
              </Link>
            </div>
          </div>

          {/* Contact Info - Right */}
          <div className="space-y-4 md:ml-auto">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <Mail className="w-4 h-4 text-white" />
              <span>hello@goelectriclove.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <Phone className="w-4 h-4 text-white" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 text-white" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-400 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-sm text-white">
          <div>
            <p>&copy; {t.footer.rights}</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-[#BB8A44] transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-[#BB8A44] transition-colors">
              {t.footer.terms}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-[#BB8A44] transition-colors">
              {t.footer.contact}
            </Link>
          </div>
        </div>
        <div className="flex justify-center relative top-10">
          <Image
            src="/driveElectric.png"
            alt="Wave"
            width={3000}
            height={500}
            className="mt-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
