'use client';

import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import mockImage from '../../public/mock.png';

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

          <Grid container spacing={8} alignItems="stretch">
            <Grid item xs={12} md={5}>
              <motion.div
                variants={fadeInVariant}
                transition={{ delay: 0.2 }}
                style={{ height: '100%' }}
              >
                {/* Elegant portrait with decorative elements */}
                <Box sx={{ position: 'relative', height: '100%' }}>
                  {/* Main portrait frame */}
                  <Paper
                    elevation={3}
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 'calc(100% - 80px)',
                      overflow: 'hidden',
                      borderRadius: 2,
                      border: '8px solid white',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {/* UPDATED: Use the imported image directly */}
                    <Image
                      src={mockImage}
                      alt="Stéphanie Riccini"
                      style={{ 
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        objectPosition: 'center top'
                      }}
                      priority
                    />
                  </Paper>
                  
                  {/* Decorative circle */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.light,
                      opacity: 0.7,
                      zIndex: -1,
                    }}
                  />
                  
                  {/* Decorative circle */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 40,
                      right: -20,
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.light,
                      opacity: 0.5,
                      zIndex: -1,
                    }}
                  />
                  
                  {/* Quote card */}
                  <Paper
                    elevation={2}
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 20,
                      width: '80%',
                      padding: 3,
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        fontFamily: 'var(--font-roboto-serif)',
                      }}
                    >
                      &quot;Chaque patrimoine raconte une histoire unique.&quot;
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <motion.div
                variants={fadeInVariant}
                transition={{ delay: 0.4 }}
                style={{ height: '100%' }}
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
                  Je m&apos;appelle Stéphanie Riccini, Québécoise d&apos;origine et Corse d&apos;adoption.
                  Après plusieurs années d&apos;expérience en tant que paralegal au Québec, j&apos;ai choisi de me réorienter vers un domaine qui me passionne profondément : la gestion de patrimoine.
                  Diplômée de JurisCampus, je mets aujourd&apos;hui mes compétences juridiques et fiscales au service des particuliers et des familles qui souhaitent organiser, protéger et transmettre leur patrimoine avec sérénité.
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
                  Patiente, perfectionniste et toujours à l&apos;écoute, je m&apos;investis pleinement auprès de chaque client avec rigueur, bienveillance et une volonté constante de me dépasser et d&apos;apprendre.
                  J&apos;accorde une attention particulière à la dimension humaine de chaque situation, car derrière chaque chiffre ou disposition prise, il y a une histoire de vie, des objectifs, des valeurs.
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
                  De plus, expatriée moi-même, je propose un accompagnement adapté aux Canadiens vivant en France ainsi qu&apos;aux Français vivant au Canada, en m&apos;appuyant sur ma connaissance du droit canadien et mes bases en fiscalité.
                  Cela me permet de répondre aux besoins spécifiques liés à la gestion de patrimoine en contexte international.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                  }}
                >
                  Je travaille en collaboration avec Atout Conseil Métropole afin d&apos;apporter à mes clients une expertise élargie et des solutions patrimoniales adaptées à chaque situation.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  }}
                >
                  Mon but est simple : vous aider à faire les bons choix, au bon moment, avec clarté et confiance.
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