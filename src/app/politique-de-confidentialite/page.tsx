'use client';

import { Box, Container, Typography, Breadcrumbs, Link, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

export default function PrivacyPolicy() {
  const theme = useTheme();
  const router = useRouter();
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          pt: 12,
          pb: 8,
          backgroundColor: '#f5f5f0',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Breadcrumbs 
              separator={<NavigateNextIcon fontSize="small" />} 
              aria-label="breadcrumb"
            >
              <NextLink href="/" passHref>
                <Link
                  color="inherit"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Accueil
                </Link>
              </NextLink>
              <Typography color="text.primary">Politique de confidentialité</Typography>
            </Breadcrumbs>
            
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => router.push('/')}
              variant="outlined"
              color="primary"
              size="small"
            >
              Retour à l&apos;accueil
            </Button>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: 2,
                backgroundColor: 'white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 400,
                  color: theme.palette.text.primary,
                  mb: 4,
                }}
              >
                Politique de confidentialité
              </Typography>

              <Typography 
                variant="subtitle1" 
                gutterBottom
                sx={{ 
                  fontStyle: 'italic',
                  color: theme.palette.text.secondary,
                  mb: 4,
                }}
              >
                Dernière mise à jour : {currentDate}
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                1. Introduction
              </Typography>
              <Typography paragraph>
                Bienvenue sur le site gestionspr.com, édité par Gestion SPR.
                Dans le cadre de notre activité, nous attachons une grande importance à la protection de vos données personnelles et au respect de votre vie privée.
              </Typography>
              <Typography paragraph>
                La présente politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement général sur la protection des données (RGPD) et à la législation française.
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                2. Responsable du traitement
              </Typography>
              <Typography paragraph>
                Le responsable du traitement des données personnelles est :
              </Typography>
              <Typography paragraph sx={{ pl: 2 }}>
                Gestion SPR<br />
                Résidence la Colline<br />
                20200, Bastia<br />
                SIRET : [Numéro SIRET à compléter]<br />
                Email : sriccini@gestionspr.com
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                3. Données collectées
              </Typography>
              <Typography paragraph>
                Nous collectons uniquement les données personnelles nécessaires pour répondre à vos demandes ou améliorer Nos services :
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>Nom et prénom</Typography>
                <Typography component="li" paragraph>Adresse e-mail</Typography>
                <Typography component="li" paragraph>Numéro de téléphone</Typography>
                <Typography component="li" paragraph>Données de navigation (adresse IP, cookies)</Typography>
              </Box>
              <Typography paragraph>
                Ces données sont collectées via :
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>Formulaire de contact</Typography>
                <Typography component="li" paragraph>Navigation sur le site (cookies)</Typography>
              </Box>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                4. Finalités du traitement
              </Typography>
              <Typography paragraph>
                Nous traitons vos données personnelles pour les finalités suivantes :
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>Répondre à vos demandes de contact ou d&apos;informations</Typography>
                <Typography component="li" paragraph>Gérer la relation client</Typography>
                <Typography component="li" paragraph>Assurer le bon fonctionnement et la sécurité du site</Typography>
                <Typography component="li" paragraph>Respecter nos obligations légales et réglementaires</Typography>
              </Box>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                5. Destinataires des données
              </Typography>
              <Typography paragraph>
                Vos données personnelles sont destinées uniquement à Gestion SPR et ne sont transmises à aucun tiers sans votre consentement préalable, sauf obligation légale.
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                6. Durée de conservation
              </Typography>
              <Typography paragraph>
                Vos données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, à savoir :
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>Données du formulaire de contact : 3 ans à compter du dernier contact</Typography>
                <Typography component="li" paragraph>Données de navigation : 13 mois maximum</Typography>
              </Box>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                7. Vos droits
              </Typography>
              <Typography paragraph>
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li" paragraph>Droit d&apos;accès</Typography>
                <Typography component="li" paragraph>Droit de rectification</Typography>
                <Typography component="li" paragraph>Droit à l&apos;effacement</Typography>
                <Typography component="li" paragraph>Droit d&apos;opposition</Typography>
                <Typography component="li" paragraph>Droit à la limitation du traitement</Typography>
                <Typography component="li" paragraph>Droit à la portabilité de vos données</Typography>
              </Box>
              <Typography paragraph>
                Pour exercer vos droits, vous pouvez nous contacter par email à : sriccini@gestionspr.com.
              </Typography>
              <Typography paragraph>
                Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                8. Cookies
              </Typography>
              <Typography paragraph>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment paramétrer vos préférences via notre bandeau cookies.
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                9. Sécurité des données
              </Typography>
              <Typography paragraph>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute destruction, perte, altération ou accès non autorisé.
              </Typography>

              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: 'var(--font-roboto-serif)',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  mt: 4,
                  mb: 2,
                }}
              >
                10. Modification de la politique
              </Typography>
              <Typography paragraph>
                Cette politique de confidentialité peut être modifiée à tout moment. Nous vous conseillons de la consulter régulièrement.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </>
  );
} 