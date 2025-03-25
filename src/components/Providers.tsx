'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8c7b70',
      light: '#a39990',
      dark: '#5f534c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d6ccc2',
      light: '#e4ded8',
      dark: '#c8b7a6',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'var(--font-montserrat)',
    h1: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h2: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h3: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h4: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h5: {
      fontFamily: 'var(--font-roboto-serif)',
    },
    h6: {
      fontFamily: 'var(--font-roboto-serif)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} 