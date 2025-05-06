'use client';

import { Box, Container, Typography, Link, Divider, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NextLink from 'next/link';

export default function Footer() {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-roboto-serif)',
                mb: 2,
              }}
            >
              Stéphanie Riccini
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Conseillère en Gestion de Patrimoine
            </Typography>
            {/* <Typography variant="body2">
              ORIAS n° XXXXXXXX
            </Typography> */}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-roboto-serif)',
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: sriccini@gestionspr.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Téléphone: +33 6 13 08 92 73
            </Typography>
            <Typography variant="body2">
              Localisation: 20200, Bastia
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-roboto-serif)',
                mb: 2,
              }}
            >
              Liens utiles
            </Typography>
            {/* <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ display: 'block', mb: 1 }}
            >
              Mentions légales
            </Link> */}
            <NextLink href="/politique-de-confidentialite" passHref>
              <Link
                color="inherit"
                underline="hover"
                sx={{ display: 'block', mb: 1 }}
              >
                Politique de confidentialité
              </Link>
            </NextLink>
            <Link
              href="#contact"
              color="inherit"
              underline="hover"
              sx={{ display: 'block' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.1)' }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.8 }}
        >
          © {year} Stéphanie Riccini. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
} 