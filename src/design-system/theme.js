import { createTheme } from '@mui/material'
import { primitives, cssColorVariables } from './tokens/colors'

const display = "'Inter Tight', 'Inter', system-ui, sans-serif"
const sans = "'Inter', system-ui, -apple-system, sans-serif"
const mono = "'JetBrains Mono', ui-monospace, monospace"

export const theme = createTheme({
  typography: {
    fontFamily: sans,
    h1: { fontFamily: display, fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1.02 },
    h2: { fontFamily: display, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.05 },
    h3: { fontFamily: display, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1 },
    h4: { fontFamily: display, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.15 },
    h5: { fontFamily: display, fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.25 },
    h6: { fontFamily: display, fontWeight: 500, letterSpacing: '-0.01em' },
    subtitle1: { fontFamily: sans, fontWeight: 400, letterSpacing: '-0.005em' },
    subtitle2: { fontFamily: mono, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem' },
    body1: { lineHeight: 1.7, letterSpacing: '-0.005em' },
    body2: { lineHeight: 1.65 },
    overline: { fontFamily: mono, letterSpacing: '0.18em', fontWeight: 500, fontSize: '0.72rem', lineHeight: 1 },
    button: { fontWeight: 500, letterSpacing: '-0.005em' },
    caption: { fontFamily: mono, letterSpacing: '0.05em' }
  },
  shape: { borderRadius: 10 },
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: primitives.neutral.zinc[50],
          contrastText: primitives.neutral.zinc[950]
        },
        secondary: {
          main: primitives.brand.cyan[400],
          contrastText: primitives.neutral.dark.canvas
        },
        background: {
          default: primitives.neutral.zinc[950],
          paper: primitives.neutral.dark.card
        },
        text: {
          primary: primitives.neutral.zinc[50],
          secondary: primitives.neutral.zinc[400]
        },
        divider: primitives.alpha.zincLight[80],
        error: { main: primitives.status.error.dark },
        warning: { main: primitives.status.warning.dark },
        info: { main: primitives.status.info.dark },
        success: { main: primitives.status.success.dark }
      }
    },
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: primitives.neutral.zinc[950],
          contrastText: primitives.neutral.zinc[50]
        },
        secondary: {
          main: primitives.brand.cyan[600],
          contrastText: primitives.neutral.zinc[50]
        },
        background: {
          default: primitives.neutral.zinc[50],
          paper: primitives.neutral.white
        },
        text: {
          primary: primitives.neutral.zinc[950],
          secondary: primitives.neutral.zinc[600]
        },
        divider: primitives.alpha.zincDark[90],
        error: { main: primitives.status.error.light },
        warning: { main: primitives.status.warning.light },
        info: { main: primitives.status.info.light },
        success: { main: primitives.status.success.light }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...cssColorVariables,
        body: {
          transition: 'background-color 0.4s ease, color 0.4s ease'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'color 0.25s ease, transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: mono
        }
      }
    }
  }
})

export default theme
