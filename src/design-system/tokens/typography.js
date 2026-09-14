/**
 * Typography tokens for the Scandinavian Editorial system.
 *
 * Keep font decisions here so components express hierarchy through tokens
 * instead of repeating font stacks and arbitrary values in sx props.
 */
export const typographyTokens = {
  family: {
    display: "'Inter Tight', 'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    editorial: "'Instrument Serif', Georgia, serif",
    mono: "'JetBrains Mono', ui-monospace, monospace"
  },
  size: {
    display: {
      sm: '2.75rem',
      tablet: '3.75rem',
      md: '5rem',
      lg: '5.75rem'
    },
    section: {
      sm: '2.25rem',
      tablet: '2.75rem',
      md: '3.5rem'
    },
    body: '1rem',
    bodyLarge: '1.1rem',
    heroRole: {
      mobile: '0.78rem',
      desktop: '0.85rem'
    },
    label: '0.88rem',
    caption: '0.72rem',
    micro: '0.65rem'
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600
  },
  tracking: {
    tight: '-0.035em',
    compact: '-0.02em',
    body: '-0.005em',
    label: '0.04em',
    mono: '0.08em',
    overline: '0.18em'
  },
  leading: {
    tight: 1.02,
    heading: 1.1,
    body: 1.7,
    compact: 1.3
  }
}

export default typographyTokens
