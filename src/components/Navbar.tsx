'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

const pages = [
  { name: 'Accueil', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'À propos', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const wasScrolled = latest > 50;
    if (wasScrolled !== isScrolled) {
      setIsScrolled(wasScrolled);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = pages.map(page => page.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = () => {
    setMobileOpen(true);
  };

  const handleCloseNavMenu = () => {
    setMobileOpen(false);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
      setMobileOpen(false);
    }
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: { xs: 70, md: 80 } }}>
          {/* Mobile menu icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: theme.palette.text.primary, p: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo - Mobile */}
          <Box 
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              justifyContent: 'center',
              ml: -4, // Reduce left margin to center the logo better
            }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                width: 180,
                height: 50,
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('home')}
            >
              <Image
                src="/logo.png"
                alt="Stéphanie Riccini Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Box>

          {/* Logo - Desktop */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              mr: 4,
              cursor: 'pointer',
            }}
            onClick={() => handleNavClick('home')}
          >
            <Box sx={{ position: 'relative', width: 80, height: 55 }}>
              <Image
                src="/logo.png"
                alt="Stéphanie Riccini Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          </Box>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                sx={{
                  my: 2,
                  mx: 1.5,
                  color: theme.palette.text.primary,
                  display: 'block',
                  fontSize: '0.95rem',
                  position: 'relative',
                  fontWeight: activeSection === page.id ? 600 : 400,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: activeSection === page.id ? '100%' : hoveredItem === page.id ? '100%' : '0%',
                    height: '2px',
                    bottom: '10px',
                    left: 0,
                    backgroundColor: theme.palette.primary.main,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
                onMouseEnter={() => setHoveredItem(page.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* CTA Button - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              onClick={() => handleNavClick('appointment')}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff',
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Prendre RDV
            </Button>
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiDrawer-paper': { 
                width: '100%', 
                backgroundColor: theme.palette.background.default,
                boxSizing: 'border-box',
                pt: 2,
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
              <IconButton
                onClick={handleCloseNavMenu}
                sx={{ color: theme.palette.text.primary }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <Box sx={{ position: 'relative', width: 200, height: 55 }}>
                <Image
                  src="/logo.png"
                  alt="Stéphanie Riccini Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Box>
            <Divider sx={{ mb: 4 }} />
            <List sx={{ px: 4 }}>
              {pages.map((page) => (
                <ListItem key={page.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavClick(page.id)}
                    sx={{
                      py: 2,
                      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                      fontWeight: activeSection === page.id ? 600 : 400,
                    }}
                  >
                    <ListItemText 
                      primary={page.name} 
                      sx={{ 
                        '& .MuiTypography-root': { 
                          fontSize: '1.2rem',
                          color: theme.palette.text.primary,
                        } 
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem disablePadding sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleNavClick('appointment')}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: '#ffffff',
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Prendre Rendez-vous
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 