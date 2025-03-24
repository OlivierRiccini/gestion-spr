import { createTheme } from '@mui/material/styles';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676',
      light: '#66ffa6',
      dark: '#00b248',
    },
    secondary: {
      main: '#00b0ff',
      light: '#69e2ff',
      dark: '#0081cb',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 600,
    },
    h4: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 600,
    },
    h5: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 600,
    },
    h6: {
      fontFamily: spaceGrotesk.style.fontFamily,
      fontWeight: 500,
    },
    body1: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 400,
    },
    body2: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 400,
    },
    button: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme; 