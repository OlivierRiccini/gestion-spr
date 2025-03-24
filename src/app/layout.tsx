import { Roboto_Serif, Montserrat } from 'next/font/google';
import { defaultMetadata } from './metadata';
import Providers from '@/components/Providers';
import { Analytics } from "@vercel/analytics/react"
import './globals.css';

// Using more elegant fonts for a high-end feel
const robotoSerif = Roboto_Serif({ 
  subsets: ['latin'],
  variable: '--font-roboto-serif',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  ...defaultMetadata,
  title: 'Stéphanie Riccini | Conseillère en Gestion de Patrimoine',
  description: 'Optimisez votre patrimoine avec Stéphanie Riccini, conseillère en gestion de patrimoine. Bilan patrimonial, optimisation fiscale, préparation retraite.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${robotoSerif.variable} ${montserrat.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f5f5f0" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
