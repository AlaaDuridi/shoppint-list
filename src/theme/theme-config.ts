import { createTheme, PaletteMode, alpha, Shadows } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypeBackground {
    default: string;
    paper: string;
  }

  interface Palette {
    bright: Palette['primary'];
  }

  interface PaletteOptions {
    bright?: PaletteOptions['primary'];
  }
}

const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)',
};

const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

const pink = {
  50: 'hsl(318, 100%, 97%)',
  100: 'hsl(318, 71%, 94%)',
  200: 'hsl(318, 74%, 80%)',
  300: 'hsl(318, 85%, 75%)',
  400: 'hsl(318, 70%, 73%)',
  500: 'hsl(318, 70%, 60%)',
  600: 'hsl(318, 71%, 40%)',
  700: 'hsl(318, 74%, 30%)',
  800: 'hsl(318, 75%, 20%)',
  900: 'hsl(318, 73%, 10%)',
  1000: 'hsl(291, 64%, 42%)',
};

const mauve = {
  50: 'hsl(291, 47%, 97%)',
  100: 'hsl(291, 47%, 94%)',
  200: 'hsl(291, 47%, 80%)',
  300: 'hsl(291, 47%, 75%)',
  400: 'hsl(291, 47%, 71%)',
  500: 'hsl(291, 47%, 58%)',
  600: 'hsl(291, 47%, 45%)',
  700: 'hsl(291, 47%, 35%)',
  800: 'hsl(291, 47%, 25%)',
  900: 'hsl(291, 47%, 15%)',
};

const defaultShadows = createTheme().shadows;
const customShadows: Shadows = [...defaultShadows];
// Theme configuration with light and dark mode support
export const getThemeOptions = (mode: PaletteMode) => {
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
      : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';
  return {
    palette: {
      mode,
      primary: {
        light: brand[300],
        main: pink[1000],
        dark: brand[500],
        contrastText: brand[50],
        ...(mode === 'dark' && {
          contrastText: brand[50],
          light: brand[700],
          main: brand[800],
          dark: brand[900],
        }),
      },
      secondary: {
        light: orange[300],
        main: orange[400],
        dark: orange[900],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: brand[300],
          light: mauve[300],
          main: mauve[400],
          dark: pink[800],
        }),
      },

      info: {
        light: brand[200],
        main: brand[500],
        dark: brand[900],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: brand[300],
          light: brand[500],
          main: brand[700],
          dark: brand[900],
        }),
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        ...(mode === 'dark' && {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        }),
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
        ...(mode === 'dark' && {
          light: red[400],
          main: red[500],
          dark: red[700],
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        default:
          mode === 'dark'
            ? 'linear-gradient(320deg, rgba(255, 200, 215, 1), rgba(67, 83, 122, 1) 87%)'
            : 'linear-gradient(to right, hsl(291, 47%, 71%), #ffefba)',
        paper: mode === 'dark' ? 'hsl(220, 30%, 7%)' : 'hsl(220, 35%, 97%)',
      },
      text: {
        primary: mode === 'dark' ? pink[400] : pink[50],
        secondary: mode === 'dark' ? gray[400] : gray[600],
        warning: orange[400],
      },
      action: {
        hover: alpha(mode === 'dark' ? gray[600] : gray[200], 0.2),
        selected: `${alpha(mode === 'dark' ? gray[600] : gray[200], 0.3)}`,
      },
    },
    typography: {
      fontFamily: ['"Inter", "sans-serif"'].join(','),
      h1: {
        fontSize: '3rem',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: '1.875rem',
        lineHeight: 1.2,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.125rem',
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: '1.125rem',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '0.875rem',
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: customShadows,
    components: {
      MuiPaper: {
        styleOverrides: {
          rounded: {
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
            borderRadius: '18px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '18px',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '24px',
            paddingBlock: '.9rem',
            paddingInline: '1.5rem',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '18px',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
          },
        },
      },
    },
  };
};

export const theme = (mode: PaletteMode) => createTheme(getThemeOptions(mode));
