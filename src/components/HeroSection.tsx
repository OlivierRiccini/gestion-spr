'use client';

import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HeroSection() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for title lines
  const titleLineVariant = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing for a more elegant motion
      }
    })
  };

  // Animation for subtitle and button
  const contentVariant = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      id="home"
      component="section"
      aria-label="Introduction à la gestion de patrimoine"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // overflow: 'hidden',
        // background: theme.palette.background.default,
        background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
      }}
      ref={ref}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Box sx={{ mb: 4 }}>
            <motion.div
              custom={0}
              variants={titleLineVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  color: theme.palette.text.primary,
                  mb: 1,
                }}
              >
                Optimisez dès aujourd&apos;hui,
              </Typography>
            </motion.div>
            
            <motion.div
              custom={1}
              variants={titleLineVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Typography
                variant="h1"
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  color: theme.palette.text.primary,
                  mb: 3,
                  display: 'block',
                }}
              >
                préparez demain.
              </Typography>
            </motion.div>
          </Box>
          
          <motion.div
            variants={contentVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 400,
                mb: 6,
                mx: 'auto',
                maxWidth: '700px',
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
              }}
            >
              Conseils personnalisés en gestion de patrimoine pour sécuriser votre avenir financier et réaliser vos projets.
            </Typography>
          </motion.div>
          
          <motion.div
            variants={contentVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                const section = document.getElementById('appointment');
                if (section) {
                  const offsetTop = section.offsetTop;
                  window.scrollTo({
                    top: offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}
              aria-label="Prendre rendez-vous pour une consultation en gestion de patrimoine"
              sx={{
                py: 1.5,
                px: 4,
                backgroundColor: '#0f0f0f',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#000000',
                },
              }}
            >
              PRENDRE RENDEZ-VOUS
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
} 