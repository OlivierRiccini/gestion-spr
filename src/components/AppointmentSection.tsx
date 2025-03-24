'use client';

import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EuroIcon from '@mui/icons-material/Euro';
import Image from 'next/image';

// Appointment types with their details
const appointmentTypes = [
  {
    title: 'Première rencontre d\'information gratuite',
    duration: '30 minutes',
    price: 'Gratuite',
    description: 'Un premier échange pour comprendre vos besoins et objectifs',
    calendlyUrl: 'https://calendly.com/your-calendly/premiere-rencontre',
    image: '/image-6.png',
  },
  {
    title: 'Audit patrimonial',
    duration: '1 heure 30 minutes',
    price: '',
    description: 'Analyse complète de votre situation financière et patrimoniale',
    calendlyUrl: 'https://calendly.com/your-calendly/audit-patrimonial',
    image: '/image-1.png',
  },
  {
    title: 'Suivi annuel',
    duration: '1 heure 30 minutes',
    price: '150,00 €',
    description: 'Bilan et ajustement de votre stratégie patrimoniale',
    calendlyUrl: 'https://calendly.com/your-calendly/suivi-annuel',
    image: '/image-7.png',
  },
];

export default function AppointmentSection() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Subtle fade-in animation
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      id="appointment"
      component="section"
      sx={{
        py: 12,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={ref}
    >
      {/* Decorative element */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          opacity: 0.03,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
          pointerEvents: 'none',
        }}
      />
      
      <Container maxWidth="lg">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 400,
              color: theme.palette.text.primary,
            }}
          >
            Prendre rendez-vous
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
            }}
          >
            Chaque situation est unique. Un premier échange permet de faire le point sur vos besoins, vos projets, et de voir comment nous pouvons vous accompagner efficacement.
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
            }}
          >
            Prenez rendez-vous dès maintenant pour bénéficier d&apos;un conseil personnalisé, en toute confidentialité.
          </Typography>

          <Box 
            sx={{ 
              backgroundColor: '#ffffff',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
            }}
          >
            {appointmentTypes.map((appointment, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderBottom: index !== appointmentTypes.length - 1 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    },
                  }}
                >
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={2}>
                      <Box
                        sx={{
                          position: 'relative',
                          height: '80px',
                          width: '80px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          mx: { xs: 'auto', md: 0 },
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        <Image
                          src={appointment.image}
                          alt={appointment.title}
                          fill
                          style={{ 
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                        />
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={5}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 1,
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        {appointment.title}
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 3, 
                        mb: 2,
                        justifyContent: { xs: 'center', md: 'flex-start' },
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                          <Typography variant="body2" color="text.secondary">
                            {appointment.duration}
                          </Typography>
                        </Box>
                        
                        {appointment.price && (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EuroIcon sx={{ mr: 1, color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                            <Typography variant="body2" color="text.secondary">
                              {appointment.price}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ 
                          lineHeight: 1.7,
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        {appointment.description}
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CalendarMonthIcon />}
                        component="a"
                        href={appointment.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          px: 4,
                          py: 1.5,
                          backgroundColor: '#0f0f0f',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: '#000000',
                          },
                        }}
                      >
                        PROGRAMMER
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
      
      {/* Decorative element */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '200px',
          height: '200px',
          opacity: 0.03,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
          transform: 'translate(-30%, 30%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
} 