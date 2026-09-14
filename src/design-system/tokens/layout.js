/**
 * Shared geometry and motion decisions for the editorial interface.
 */
export const layoutTokens = {
  radius: {
    base: 10,
    none: 0,
    sm: '8px',
    md: '10px',
    lg: '12px',
    control: '8px',
    circular: '50%'
  },
  motion: {
    fast: '0.2s ease',
    standard: '0.25s ease',
    slow: '0.4s ease',
    image: '0.5s ease',
    easeOut: [0.16, 1, 0.3, 1]
  },
  spacing: {
    section: {
      mobile: 8,
      desktop: 14
    },
    sectionCompact: {
      mobile: 8,
      desktop: 12
    },
    content: {
      mobile: 2.5,
      tablet: 4,
      desktop: 6
    }
  },
  contentWidth: {
    copy: 680,
    reading: 620,
    narrow: 560
  }
}

export default layoutTokens
