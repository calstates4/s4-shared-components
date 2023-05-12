import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
  }
}

export default createTheme({
  typography: {
    fontFamily: '"Albert Sans", sans-serif',
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 24,
    },
    h3: {
      fontSize: 18,
    },
    h4: {
      fontSize: 16,
    },
    h5: {
      fontSize: 14,
    },
    h6: {
      fontSize: 12,
    }
  },
  palette: {
    // Blue.
    primary: {
      main: '#003865',
      dark: '#0d2134',
      light: '#d9e4ed',
    },
    // Gray.
    secondary: {
      main: '#ccc',
      dark: '#4f5254',
      light: '#f2f2f2',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#d32f2f',
    },
    black: {
      main: '#1f1f1f',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          margin: 0,
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
          paddingRight: 16,
          paddingLeft: 16,
        },
      },
    },
  },
});
