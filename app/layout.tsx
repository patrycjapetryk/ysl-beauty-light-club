import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import './globals.css';
import { singulier } from './fonts';
import { Footer } from '@/components/Footer/Footer';
import { Navigation } from '@/components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Konkurs Yves Saint Laurent Beauty',
  description: 'Przygotuj swój własny festiwalowy makijaż w duchu YSL Beauty. ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pl' className='scroll-smooth'>
      <body
        className={`${singulier.className} scroll-smooth bg-black text-white`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
