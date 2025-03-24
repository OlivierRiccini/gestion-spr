'use client';

import { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Snackbar, Alert, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import { useForm, Controller } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Votre message a été envoyé avec succès !',
          severity: 'success',
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
      id="contact"
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
            Contact
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <motion.div
                variants={fadeInVariant}
                transition={{ delay: 0.2 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                  }}
                >
                  Contactez-moi
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Vous avez des questions ou souhaitez prendre rendez-vous ? N&apos;hésitez pas à me contacter par téléphone, email ou via le formulaire ci-contre.
                </Typography>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography variant="body1">
                    riccini.stephanie@gestionspr.com
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography variant="body1">
                    +33 6 13 08 92 73
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography variant="body1">
                    20200, Bastia
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <motion.div
                variants={fadeInVariant}
                transition={{ delay: 0.4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Controller
                          name="name"
                          control={control}
                          defaultValue=""
                          rules={{ required: 'Veuillez entrer votre nom' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Nom"
                              fullWidth
                              variant="outlined"
                              error={!!errors.name}
                              helperText={errors.name?.message}
                              disabled={isSubmitting}
                            />
                          )}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Controller
                          name="email"
                          control={control}
                          defaultValue=""
                          rules={{ 
                            required: 'Veuillez entrer votre email',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Adresse email invalide'
                            }
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Email"
                              fullWidth
                              variant="outlined"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                              disabled={isSubmitting}
                            />
                          )}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Controller
                          name="message"
                          control={control}
                          defaultValue=""
                          rules={{ required: 'Veuillez entrer votre message' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              label="Message"
                              fullWidth
                              multiline
                              rows={5}
                              variant="outlined"
                              error={!!errors.message}
                              helperText={errors.message?.message}
                              disabled={isSubmitting}
                            />
                          )}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          disabled={isSubmitting}
                          sx={{
                            py: 1.5,
                            mt: 2,
                          }}
                        >
                          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
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
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 