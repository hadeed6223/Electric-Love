import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GoElectricLove - Drive Electric, Earn More',
  description: 'Join our fleet of Tesla drivers and earn money while reducing your carbon footprint. Fast onboarding, compliance handled, efficient operations.',
  keywords: 'electric vehicles, Tesla, rideshare, sustainable transportation, green driving',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}