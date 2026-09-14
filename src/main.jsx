import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import App from '@/App'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { DesignSystemProvider } from '@/context/DesignSystemContext'
import { theme } from '@/design-system'
import ErrorBoundary from '@/components/ErrorBoundary'
import '../app.css'

const Analytics = lazy(() =>
  import('@vercel/analytics/react').then(({ Analytics: AnalyticsComponent }) => ({
    default: AnalyticsComponent,
  })),
)

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <ThemeProvider theme={theme} defaultMode="system">
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
      <CssBaseline />
      <DesignSystemProvider>
        <App />
      </DesignSystemProvider>
    </ThemeProvider>
  </ErrorBoundary>,
)
