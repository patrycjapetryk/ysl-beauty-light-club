import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import './globals.css';
import { singulier } from './fonts';

export const metadata: Metadata = {
  title: 'Konkurs Yves Saint Laurent Beauty',
  description: 'Przygotuj swój własny festiwalowy makijaż w duchu YSL Beauty. ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pl'>
      <body className={`${singulier.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
