'use client';

import { Box, Typography, Container, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';

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

          <motion.div
            variants={fadeInVariant}
            transition={{ delay: 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 2,
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '120px',
                  width: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mx: 'auto',
                  mb: 4,
                  border: `4px solid ${theme.palette.primary.light}`,
                }}
              >
                <Image
                  src="/image-1.png"
                  alt="Rencontre découverte"
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
              
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: 4,
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                }}
              >
                Rencontre Découverte
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ 
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Un premier échange pour comprendre vos objectifs, évaluer votre situation patrimoniale actuelle et identifier les opportunités d'optimisation. Cette rencontre sans engagement vous permettra de découvrir comment nous pouvons vous accompagner dans la réalisation de vos projets.
              </Typography>
              
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<CalendarMonthIcon />}
                component="a"
                href="https://calendly.com/pelletierste/bilan-patrimonial"
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
                RÉSERVER UN RENDEZ-VOUS
              </Button>
            </Paper>
          </motion.div>
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