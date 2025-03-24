import { createTheme } from '@mui/material/styles';

// Creating a custom theme with the specified color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#a39990', // warm beige
      light: '#d6ccc2',
      dark: '#7d6e63',
    },
    secondary: {
      main: '#6d7275', // soft grey
      light: '#9ba0a3',
      dark: '#42474a',
    },
    background: {
      default: '#f5f5f0', // off-white
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
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'var(--font-roboto-serif)',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'var(--font-roboto-serif)',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'var(--font-roboto-serif)',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'var(--font-roboto-serif)',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'var(--font-roboto-serif)',
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '10px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme; 