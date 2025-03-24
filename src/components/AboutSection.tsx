'use client';

import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
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
      id="about"
      component="section"
      sx={{
        py: 12,
        backgroundColor: '#ffffff',
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
              mb: 6,
              fontWeight: 400,
              color: theme.palette.text.primary,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '2px',
                backgroundColor: theme.palette.primary.main,
              }
            }}
          >
            À propos
          </Typography>

          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <motion.div
                variants={fadeInVariant}
                transition={{ delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    position: 'relative',
                    height: { xs: '350px', md: 'auto' }, // Auto height on desktop
                    aspectRatio: { md: '3/4' }, // Maintain aspect ratio
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Placeholder image - replace with actual image */}
                  <Box
                    sx={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: theme.palette.primary.light,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Typography variant="h5" color="white" sx={{ zIndex: 2, textAlign: 'center', px: 2 }}>
                      Photo de Stéphanie Riccini
                    </Typography>
                    
                    {/* Decorative overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.1,
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
                      }}
                    />
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <motion.div
                variants={fadeInVariant}
                transition={{ delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                  }}
                >
                  Je m&apos;appelle Stéphanie Riccini, Québécoise d&apos;origine et Corse d&apos;adoption. Après plusieurs années d&apos;expérience en tant que paralegal au Québec, j&apos;ai choisi de me réorienter vers un domaine qui me passionne profondément : la gestion de patrimoine. Diplômée de JurisCampus, je mets aujourd&apos;hui mes compétences juridiques et fiscales au service des particuliers et des familles qui souhaitent organiser, protéger et transmettre leur patrimoine avec sérénité.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                  }}
                >
                  Patiente, perfectionniste et toujours à l&apos;écoute, je m&apos;investis pleinement auprès de chaque client avec rigueur, bienveillance et une volonté constante de me dépasser et d&apos;apprendre. J&apos;accorde une attention particulière à la dimension humaine de chaque situation, car derrière chaque chiffre ou disposition prise, il y a une histoire de vie, des objectifs, des valeurs.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                  }}
                >
                  Je travaille en collaboration avec Atout Conseil Métropole, ce qui me permet de proposer un accompagnement global et personnalisé, en toute indépendance. Mon but est simple : vous aider à faire les bons choix, au bon moment, avec clarté et confiance.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
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