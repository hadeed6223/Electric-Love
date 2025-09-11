import { notFound } from 'next/navigation';
import { locales, Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  // Check if the locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={typedLocale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={typedLocale} />
      <Chatbot locale={typedLocale} />
    </div>
  );
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}