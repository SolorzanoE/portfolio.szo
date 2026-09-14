import { createTheme } from '@mui/material/styles'
import { colorTokens, cssColorVariables } from './tokens/colors'
import { layoutTokens, typographyTokens } from './tokens'

const { family, size, weight, tracking, leading } = typographyTokens

/** @param {"dark"|"light"} mode */
const paletteFor = (mode) => {
  const tokens = colorTokens[mode]

  return {
    mode,
    primary: {
      main: tokens.accent.main,
      contrastText: tokens.accent.contrast
    },
    secondary: {
      main: tokens.accent.main,
      contrastText: tokens.accent.contrast
    },
    background: {
      default: tokens.canvas,
      paper: tokens.surface
    },
    text: {
      primary: tokens.text.primary,
      secondary: tokens.text.secondary
    },
    divider: tokens.border.default,
    error: { main: tokens.status.error },
    warning: { main: tokens.status.warning },
    info: { main: tokens.status.info },
    success: { main: tokens.status.success }
  }
}

export const theme = createTheme({
  typography: /** @type {any} */ ({
    fontFamily: family.body,
    h1: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: tracking.tight, lineHeight: leading.tight },
    h2: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: '-0.03em', lineHeight: 1.05 },
    h3: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: '-0.025em', lineHeight: leading.heading },
    h4: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: tracking.compact, lineHeight: 1.15 },
    h5: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: '-0.015em', lineHeight: 1.25 },
    h6: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: '-0.01em' },
    subtitle1: { fontFamily: family.body, fontWeight: weight.regular, letterSpacing: tracking.body },
    subtitle2: { fontFamily: family.mono, fontWeight: weight.medium, letterSpacing: tracking.mono, textTransform: 'uppercase', fontSize: size.caption },
    body1: { lineHeight: leading.body, letterSpacing: tracking.body },
    body2: { lineHeight: 1.65 },
    overline: { fontFamily: family.mono, letterSpacing: tracking.overline, fontWeight: weight.medium, fontSize: size.caption, lineHeight: 1 },
    button: { fontWeight: weight.medium, letterSpacing: tracking.body },
    caption: { fontFamily: family.mono, letterSpacing: '0.05em' },
    display: { fontFamily: family.display, fontWeight: weight.medium, letterSpacing: tracking.compact, lineHeight: leading.heading },
    editorial: { fontFamily: family.editorial, fontStyle: 'italic', fontWeight: weight.regular, lineHeight: 1.25 },
    eyebrow: { fontFamily: family.mono, fontSize: size.caption, fontWeight: weight.medium, letterSpacing: tracking.overline, lineHeight: 1 },
    code: { fontFamily: family.mono, fontSize: size.caption, letterSpacing: tracking.mono, lineHeight: 1.4 }
  }),
  shape: { borderRadius: layoutTokens.radius.base },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  colorSchemes: {
    dark: { palette: paletteFor('dark') },
    light: { palette: paletteFor('light') }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...cssColorVariables,
        body: {
          transition: `background-color ${layoutTokens.motion.slow}, color ${layoutTokens.motion.slow}`
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: layoutTokens.radius.control,
          transition: `background-color ${layoutTokens.motion.fast}, border-color ${layoutTokens.motion.fast}, color ${layoutTokens.motion.fast}, opacity ${layoutTokens.motion.fast}, transform ${layoutTokens.motion.fast}`
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
          transition: `color ${layoutTokens.motion.standard}, transform ${layoutTokens.motion.standard}, background-color ${layoutTokens.motion.standard}, border-color ${layoutTokens.motion.standard}`
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: family.mono
        }
      }
    }
  }
})

export default theme
