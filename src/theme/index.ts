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
  },
});
