import type { Metadata } from 'next';
import { Roboto_Serif, Montserrat } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import { Analytics } from "@vercel/analytics/react"

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

export const metadata: Metadata = {
  title: 'Stéphanie Riccini | Conseil en Gestion de Patrimoine',
  description: 'Conseils personnalisés en gestion de patrimoine pour sécuriser votre avenir financier et réaliser vos projets. Optimisation fiscale, préparation retraite et transmission de patrimoine.',
  keywords: 'gestion de patrimoine, conseil financier, optimisation fiscale, préparation retraite, transmission patrimoine, protection conjoint, bilan patrimonial',
  authors: [{ name: 'Stéphanie Riccini' }],
  creator: 'Stéphanie Riccini',
  publisher: 'Stéphanie Riccini',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Stéphanie Riccini | Conseil en Gestion de Patrimoine',
    description: 'Conseils personnalisés en gestion de patrimoine pour sécuriser votre avenir financier et réaliser vos projets.',
    url: 'https://www.stephanie-riccini.fr',
    siteName: 'Stéphanie Riccini Gestion de Patrimoine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stéphanie Riccini Gestion de Patrimoine',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stéphanie Riccini | Conseil en Gestion de Patrimoine',
    description: 'Conseils personnalisés en gestion de patrimoine pour sécuriser votre avenir financier.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Replace with your Google verification token
  },
  alternates: {
    canonical: 'https://www.stephanie-riccini.fr',
  },
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
