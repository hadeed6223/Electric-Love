'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import Button from './Button';
import { Locale, getTranslation } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  locale: Locale;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnWhitePage, setIsOnWhitePage] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = getTranslation(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
    const isOnboardingPage = pathname.includes('/onboarding');
    // const isInvestorPage = pathname.includes('/investors');
    setIsOnWhitePage(isOnboardingPage);
  }, [pathname, locale]);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}#how-it-works`, label: t.nav.howItWorks },
    { href: `/${locale}/drivers`, label: t.nav.drivers },
    { href: `/${locale}/investors`, label: t.nav.investors },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const getTextColor = () => {
    if (isScrolled) return 'text-black';
    if (isOnWhitePage) return 'text-black';
    return 'text-white text-shadow-outline';
  };

  const getBorderColor = () => {
    if (isScrolled || isOnWhitePage) return 'border-gray-300 hover:text-red-500 hover:border-red-500';
    return 'border-white hover:bg-white hover:text-red-500 text-shadow-outline';
  };

  const getMenuButtonColor = () => {
    if (isScrolled || isOnWhitePage) return 'hover:bg-gray-100 text-black';
    return 'hover:bg-white/20 text-white text-shadow-outline';
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className={`absolute inset-0 bg-white shadow-md transition-transform duration-500 ease-out ${
        isScrolled ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}></div>
      
      <div className="container mx-auto relative z-10 px-3">
        <div className="flex justify-between items-center py-4">
          <Link href={`/${locale}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#BB8A44] rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className={`text-xl font-bold transition-colors ${getTextColor()}`}>
              GoElectricLove
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 group">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#AF8D2C] hover:after:w-full after:transition-all after:duration-300 group-hover:after:left-0 ${getTextColor()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {/* <button
              onClick={toggleLocale}
              className={`px-3 py-1 text-sm font-medium border rounded-md transition-colors ${getTextColor()} ${getBorderColor()}`}
            >
              {locale.toUpperCase()}
            </button> */}
            <LanguageSwitcher locale={locale} />
            <Link href={`/${locale}/drivers`}>
              <Button text={t.nav.driveNow} variant="primary" className='py-2'/>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${getMenuButtonColor()}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-red-50 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          <nav className="space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-black hover:text-red-500 py-3 border-b border-gray-100 hover:border-red-500 transform hover:translate-x-2 transition-transform duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
            <button
              onClick={toggleLocale}
              className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg text-black hover:text-red-500 hover:border-red-500 transition-colors"
            >
              Switch to {locale === 'en' ? 'Español' : 'English'}
            </button>
            <Link href={`/${locale}/onboarding`} className="block">
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.driveNow}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;