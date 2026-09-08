import { createRoot } from 'react-dom/client'
import App from '@/App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DesignSystemProvider } from '@/context/DesignSystemContext'
import { theme } from '@/design-system'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme} defaultMode="system">
    <Analytics />
    <CssBaseline />
    <DesignSystemProvider>
      <App />
    </DesignSystemProvider>
  </ThemeProvider>,
)
