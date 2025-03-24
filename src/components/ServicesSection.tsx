'use client';

import { Box, Typography, Container, Grid, Button, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';

const services = [
  {
    title: 'Bilan Patrimonial',
    subtitle: 'Sur devis',
    shortDescription: 'Diagnostic complet et confidentiel de votre situation financière, juridique et fiscale.',
    fullDescription: `Le bilan patrimonial, aussi appelé audit patrimonial, est la première étape essentielle pour toute stratégie de gestion de patrimoine. Il s'agit d'un diagnostic complet et personnalisé de votre situation financière, juridique et fiscale, réalisé en toute confidentialité.

Notre objectif : vous aider à prendre les meilleures décisions pour protéger, valoriser et transmettre votre patrimoine en toute sérénité.`,
    image: '/image-1.png',
    color: '#d6ccc2',
  },
  {
    title: 'Optimisation Fiscale',
    subtitle: '',
    shortDescription: "Réduction d'impôt légale grâce à une organisation intelligente.",
    fullDescription: `L'optimisation fiscale consiste à organiser intelligemment votre patrimoine ou vos revenus pour réduire votre imposition, dans le respect strict du cadre légal. Ce n'est pas échapper à l'impôt, mais payer l'impôt juste, en utilisant les dispositifs et régimes prévus par la loi.

Notre rôle : vous accompagner pour mieux comprendre votre fiscalité, identifier les leviers d'optimisation et mettre en place des solutions adaptées à votre situation.`,
    image: '/image-2.png',
    color: '#c8b7a6',
  },
  {
    title: 'Préparation de la Retraite',
    subtitle: '',
    shortDescription: 'Anticiper la retraite avec une stratégie personnalisée.',
    fullDescription: `Préparer sa retraite ne s'improvise pas. Que vous soyez salarié, indépendant ou chef d'entreprise, il est essentiel d'anticiper cette transition pour maintenir votre niveau de vie et protéger vos proches. La retraite se prépare plusieurs années à l'avance, et chaque choix compte.

Notre mission : vous aider à construire une stratégie de retraite sur-mesure, en tenant compte de votre situation personnelle, professionnelle et patrimoniale.`,
    image: '/image-3.png',
    color: '#baa898',
  },
  {
    title: 'Transmission Anticipée',
    subtitle: '',
    shortDescription: 'Organiser la transmission de votre vivant pour optimiser les droits.',
    fullDescription: `Transmettre son patrimoine ne se limite pas à la succession. Anticiper cette transmission de son vivant permet de protéger ses proches, de réduire les droits de succession et de transmettre dans les meilleures conditions possibles.

Que ce soit dans un cadre familial ou professionnel, il est essentiel d'établir une stratégie réfléchie, adaptée à vos objectifs, à votre situation patrimoniale et à la fiscalité en vigueur.`,
    image: '/image-4.png',
    color: '#a39990',
  },
  {
    title: 'Protection du Conjoint',
    subtitle: '',
    shortDescription: "Sécuriser l'avenir du conjoint survivant en cas de décès.",
    fullDescription: `En cas de décès, le conjoint survivant peut se retrouver dans une situation financière délicate, surtout en présence d'enfants ou en l'absence de dispositions adaptées. Anticiper la protection du conjoint est une démarche essentielle pour garantir sa sécurité matérielle, son cadre de vie et le respect de vos volontés.

Chez Gestion SPR, nous vous aidons à mettre en place des solutions efficaces et personnalisées pour assurer la tranquillité de votre conjoint.`,
    image: '/image-5.png',
    color: '#8c7b70',
  },
];

export default function ServicesSection() {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

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
      id="services"
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
              mb: 2,
              fontWeight: 400,
              color: theme.palette.text.primary,
            }}
          >
            Nos Services
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
            Des solutions personnalisées pour répondre à vos objectifs patrimoniaux, fiscaux et financiers.
          </Typography>
        </motion.div>

        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              variants={fadeInVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Box
                sx={{
                  mb: 5,
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                  backgroundColor: '#ffffff',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <Grid 
                  container 
                  direction={isEven ? 'row' : 'row-reverse'}
                >
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: '250px', md: '100%' },
                        width: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={7}>
                    <Box 
                      sx={{ 
                        p: 4,
                        borderLeft: isEven ? `4px solid ${service.color}` : 'none',
                        borderRight: !isEven ? `4px solid ${service.color}` : 'none',
                        height: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap' }}>
                        <Typography
                          variant="h4"
                          component="h3"
                          sx={{
                            fontWeight: 500,
                            color: theme.palette.text.primary,
                            mr: service.subtitle ? 2 : 0,
                            position: 'relative',
                            display: 'inline-block',
                            pb: 1,
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: hoveredService === index ? '100%' : '40px',
                              height: '2px',
                              backgroundColor: service.color,
                              transition: 'width 0.3s ease',
                            }
                          }}
                        >
                          {service.title}
                        </Typography>
                        
                        {service.subtitle && (
                          <Chip 
                            label={service.subtitle}
                            size="small"
                            sx={{ 
                              backgroundColor: theme.palette.primary.main,
                              color: '#ffffff',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              height: 24,
                              mt: { xs: 1, sm: 0.5 },
                            }}
                          />
                        )}
                      </Box>
                      
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ 
                          mb: 3,
                          lineHeight: 1.7,
                          mt: 3,
                        }}
                      >
                        {service.shortDescription}
                      </Typography>
                      
                      {/* Expandable content with smooth height transition */}
                      <Box
                        sx={{
                          height: expandedService === index ? 'auto' : '0px',
                          overflow: 'hidden',
                          transition: 'all 0.4s ease',
                          opacity: expandedService === index ? 1 : 0,
                          mb: expandedService === index ? 3 : 0,
                        }}
                      >
                        <Divider sx={{ my: 3, borderColor: `${service.color}50` }} />
                        
                        <Typography 
                          variant="body1" 
                          color="text.secondary"
                          sx={{ 
                            whiteSpace: 'pre-line',
                            lineHeight: 1.8,
                          }}
                        >
                          {service.fullDescription}
                        </Typography>
                      </Box>
                      
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={expandedService === index ? <RemoveIcon /> : <AddIcon />}
                        onClick={() => toggleExpand(index)}
                        sx={{ 
                          mt: 2,
                          borderColor: service.color,
                          color: service.color,
                          '&:hover': {
                            borderColor: service.color,
                            backgroundColor: `${service.color}10`,
                          }
                        }}
                      >
                        {expandedService === index ? 'Réduire' : 'En savoir plus'}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          );
        })}
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