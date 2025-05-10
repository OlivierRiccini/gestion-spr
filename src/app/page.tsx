'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import AppointmentSection from '@/components/AppointmentSection';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import Script from 'next/script';

export default function Home() {
  // Structured data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Stéphanie Riccini Conseil en Gestion de Patrimoine",
    "description": "Conseils personnalisés en gestion de patrimoine pour sécuriser votre avenir financier et réaliser vos projets.",
    "url": "https://www.stephanie-riccini.fr",
    "logo": "https://www.stephanie-riccini.fr/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue de la Finance", // Replace with actual address
      "addressLocality": "Paris", // Replace with actual city
      "postalCode": "75000", // Replace with actual postal code
      "addressCountry": "FR"
    },
    "telephone": "+33123456789", // Replace with actual phone
    "email": "contact@stephanie-riccini.fr", // Replace with actual email
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "priceRange": "€€",
    "sameAs": [
      "https://www.linkedin.com/in/stephanie-riccini", // Replace with actual social profiles
      "https://twitter.com/stephaniericcini"
    ],
    "serviceType": [
      "Bilan patrimonial",
      "Optimisation fiscale",
      "Préparation de la retraite",
      "Transmission anticipée",
      "Protection du conjoint"
    ]
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Structured data script */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </Box>
  );
}
