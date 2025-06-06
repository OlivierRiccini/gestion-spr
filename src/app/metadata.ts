export const defaultMetadata = {
  title: 'Stéphanie Riccini | Conseil en Gestion de Patrimoine',
  description: 'Conseils personnalisés en gestion de patrimoine pour sécuriser votre avenir financier et réaliser vos projets. Optimisation fiscale, préparation retraite et transmission de patrimoine.',
  keywords: 'gestion de patrimoine, conseil financier, Optimisation fiscale, préparation retraite, transmission patrimoine, protection conjoint, Bilan patrimonial',
  authors: [{ name: 'Stéphanie Riccini' }],
  creator: 'Stéphanie Riccini',
  publisher: 'Stéphanie Riccini',
  metadataBase: new URL('https://stephanie-riccini.fr'),
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lexchain.ai',
    siteName: 'Lexchain AI',
    title: 'Lexchain AI - AI-Powered Dispute Resolution Platform',
    description: 'Revolutionize dispute resolution with AI and blockchain technology.',
    images: [
      {
        url: '/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Lexchain AI Platform Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lexchainai',
    creator: '@lexchainai',
    title: 'Lexchain AI - AI-Powered Dispute Resolution Platform',
    description: 'Revolutionize dispute resolution with AI and blockchain technology.',
    images: ['/dashboard.png'],
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
}; 