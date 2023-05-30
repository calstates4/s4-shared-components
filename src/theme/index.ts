import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: '"Albert Sans", sans-serif',
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      fontSize: 14,
      fontWeight: 700,
    },
    h6: {
      fontSize: 12,
      fontWeight: 700,
    },
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
      light: '#ffc68b',
    },
    success: {
      main: '#4caf50',
      light: '#d7ffd1',
    },
    error: {
      main: '#d32f2f',
    },
    black: {
      main: '#1f1f1f',
    },
  },
});

export default createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          margin: 0,
          backgroundColor: theme.palette.secondary.light,
          fontSize: '0.875rem',
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          paddingRight: theme.spacing(2),
          paddingLeft: theme.spacing(2),
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(2),
        },
      },
    },
  },
});
