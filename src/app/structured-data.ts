export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lexchain AI',
  description: 'AI-Powered Dispute Resolution Platform',
  url: 'https://lexchain.ai',
  logo: 'https://lexchain.ai/logo.png',
  sameAs: [
    'https://twitter.com/lexchainai',
    'https://linkedin.com/company/lexchainai',
    'https://github.com/lexchainai'
  ]
};

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lexchain AI Platform',
  applicationCategory: 'LegalService',
  description: 'AI-powered dispute resolution platform using blockchain technology',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
}; 