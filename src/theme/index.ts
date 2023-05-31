import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    blue: Palette['primary'];
    teal: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    teal: PaletteOptions['primary'];
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
      main: '#ffc67e',
      light: '#fff289'
    },
    success: {
      main: '#a3f4b5',
      dark: '#97f089',
      light: '#d7ffd1'
    },
    error: {
      main: '#ffb9b9',
    },
    black: {
      main: '#1f1f1f',
    },
    blue: {
      main: '#a1c7ff'
    },
    teal: {
      main: '#bffff5'
    }
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
