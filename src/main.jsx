import { createRoot } from 'react-dom/client'
import App from '@/App'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { DesignSystemProvider } from '@/context/DesignSystemContext'

const display = "'Inter Tight', 'Inter', system-ui, sans-serif"
const sans = "'Inter', system-ui, -apple-system, sans-serif"
const mono = "'JetBrains Mono', ui-monospace, monospace"

const theme = createTheme({
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
        primary: { main: '#FAFAFA', contrastText: '#09090B' },
        secondary: { main: '#22D3EE', contrastText: '#0A0A0B' },
        background: { default: '#09090B', paper: '#111114' },
        text: { primary: '#FAFAFA', secondary: '#A1A1AA' },
        divider: 'rgba(250, 250, 250, 0.08)',
        error: { main: '#F87171' },
        warning: { main: '#FBBF24' },
        info: { main: '#60A5FA' },
        success: { main: '#4ADE80' }
      }
    },
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#09090B', contrastText: '#FAFAFA' },
        secondary: { main: '#0891B2', contrastText: '#FAFAFA' },
        background: { default: '#FAFAFA', paper: '#FFFFFF' },
        text: { primary: '#09090B', secondary: '#52525B' },
        divider: 'rgba(9, 9, 11, 0.09)',
        error: { main: '#DC2626' },
        warning: { main: '#D97706' },
        info: { main: '#2563EB' },
        success: { main: '#16A34A' }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
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

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} defaultMode="system">
    <CssBaseline />
    <DesignSystemProvider>
      <App />
    </DesignSystemProvider>
  </ThemeProvider>,
)
