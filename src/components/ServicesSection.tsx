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
    title: 'Bilan patrimonial',
    subtitle: 'Sur devis',
    shortDescription: 'Diagnostic complet et confidentiel de votre situation financière, juridique et fiscale.',
    fullDescription: `Le Bilan patrimonial, aussi appelé audit patrimonial, est la première étape essentielle pour toute stratégie de gestion de patrimoine. Il s'agit d'un diagnostic complet et personnalisé de votre situation financière, juridique et fiscale, réalisé en toute confidentialité.

Notre objectif : vous aider à prendre les meilleures décisions pour protéger, valoriser et transmettre votre patrimoine en toute sérénité.`,
    image: '/image-1.png',
    color: '#d6ccc2',
    alt: 'Bilan patrimonial personnalisé'
  },
  {
    title: 'Optimisation fiscale',
    subtitle: '',
    shortDescription: "Réduction d'impôt légale grâce à une organisation intelligente.",
    fullDescription: `L'Optimisation fiscale consiste à organiser intelligemment votre patrimoine ou vos revenus pour réduire votre imposition, dans le respect strict du cadre légal. Ce n'est pas échapper à l'impôt, mais payer l'impôt juste, en utilisant les dispositifs et régimes prévus par la loi.

Notre rôle : vous accompagner pour mieux comprendre votre fiscalité, identifier les leviers d'optimisation et mettre en place des solutions adaptées à votre situation.`,
    image: '/image-2.png',
    color: '#c8b7a6',
    alt: 'Stratégies d\'Optimisation fiscale légale'
  },
  {
    title: 'Préparation de la retraite',
    subtitle: '',
    shortDescription: 'Anticiper la retraite avec une stratégie personnalisée.',
    fullDescription: `Préparer sa retraite ne s'improvise pas. Que vous soyez salarié, indépendant ou chef d'entreprise, il est essentiel d'anticiper cette transition pour maintenir votre niveau de vie et protéger vos proches. La retraite se prépare plusieurs années à l'avance, et chaque choix compte.

Notre mission : vous aider à construire une stratégie de retraite sur-mesure, en tenant compte de votre situation personnelle, professionnelle et patrimoniale.`,
    image: '/image-3.png',
    color: '#baa898',
    alt: 'Préparation personnalisée pour la retraite'
  },
  {
    title: 'Transmission anticipée',
    subtitle: '',
    shortDescription: 'Organiser la transmission de votre vivant pour optimiser les droits.',
    fullDescription: `Transmettre son patrimoine ne se limite pas à la succession. Anticiper cette transmission de son vivant permet de protéger ses proches, de réduire les droits de succession et de transmettre dans les meilleures conditions possibles.

Que ce soit dans un cadre familial ou professionnel, il est essentiel d'établir une stratégie réfléchie, adaptée à vos objectifs, à votre situation patrimoniale et à la fiscalité en vigueur.`,
    image: '/image-4.png',
    color: '#a39990',
    alt: 'Stratégies de transmission anticipée de patrimoine'
  },
  {
    title: 'Protection du conjoint',
    subtitle: '',
    shortDescription: "Sécuriser l'avenir du conjoint survivant en cas de décès.",
    fullDescription: `En cas de décès, le conjoint survivant peut se retrouver dans une situation financière délicate, surtout en présence d'enfants ou en l'absence de dispositions adaptées. Anticiper la protection du conjoint est une démarche essentielle pour garantir sa sécurité matérielle, son cadre de vie et le respect de vos volontés.

Chez Gestion SPR, nous vous aidons à mettre en place des solutions efficaces et personnalisées pour assurer la tranquillité de votre conjoint.`,
    image: '/image-5.png',
    color: '#8c7b70',
    alt: 'Solutions de protection pour le conjoint survivant'
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

  // Subtle fade-in animation for section title
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

  // Animation for service cards
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: (custom: number) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2 + (custom * 0.1),
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  // Animation for image reveal
  const imageVariants = {
    hidden: { 
      scale: 1.2,
      opacity: 0
    },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + (custom * 0.1),
        ease: "easeOut"
      }
    })
  };

  return (
    <Box
      id="services"
      component="section"
      aria-labelledby="services-heading"
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
        aria-hidden="true"
      />
      
      <Container maxWidth="lg">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Typography
            id="services-heading"
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 400,
              color: theme.palette.text.primary,
            }}
          >
            Nos services
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
          const serviceId = `service-${service.title.toLowerCase().replace(/\s+/g, '-')}`;
          
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
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
                component="article"
                aria-labelledby={serviceId}
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
                      <motion.div
                        custom={index}
                        variants={imageVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        style={{ height: '100%', width: '100%' }}
                      >
                        <Image
                          src={service.image}
                          alt={service.alt || service.title}
                          fill
                          priority={index < 2} // Prioritize loading first two images
                          sizes="(max-width: 768px) 100vw, 40vw"
                          style={{ 
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                        />
                      </motion.div>
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
                          id={serviceId}
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
                        aria-hidden={expandedService !== index}
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
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={expandedService === index ? <RemoveIcon /> : <AddIcon />}
                          onClick={() => toggleExpand(index)}
                          aria-expanded={expandedService === index}
                          aria-controls={`${serviceId}-details`}
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
                      </motion.div>
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
        aria-hidden="true"
      />
    </Box>
  );
} 