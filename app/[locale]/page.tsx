import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import Belief from '@/components/Belief';
import { Locale } from '@/lib/i18n';

interface HomePageProps {
  params: { locale: Locale };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <>
      <Hero locale={locale} />
      <ValueProps locale={locale} />
      <HowItWorks locale={locale} />
      <Impact locale={locale} />
      <Belief locale={locale} />
    </>
  );
}