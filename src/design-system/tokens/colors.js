/**
 * Design System - Color Tokens
 *
 * Single source of truth for all color primitives, semantic tokens,
 * gradients, shadows, and CSS custom variables across the portfolio.
 */

// ----------------------------------------------------------------------
// 1. PRIMITIVES (Raw color palette)
// ----------------------------------------------------------------------
export const primitives = {
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    zinc: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E4E7',
      300: '#D4D4D8',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
      900: '#18181B',
      950: '#09090B'
    },
    dark: {
      canvas: '#0A0A0A',
      surface: '#121212',
      card: '#111114',
      subtle: '#18181B'
    },
    light: {
      canvas: '#FAFAFA',
      surface: '#FFFFFF',
      card: '#FFFFFF'
    }
  },
  brand: {
    cyan: {
      400: '#22D3EE',
      500: '#06B6D4',
      600: '#0891B2'
    },
    sky: {
      400: '#38BDF8',
      600: '#0284C7'
    }
  },
  status: {
    success: {
      light: '#16A34A',
      dark: '#4ADE80'
    },
    warning: {
      light: '#D97706',
      dark: '#FBBF24'
    },
    error: {
      light: '#DC2626',
      dark: '#F87171'
    },
    info: {
      light: '#2563EB',
      dark: '#60A5FA'
    }
  },
  alpha: {
    white: {
      25: 'rgba(255, 255, 255, 0.025)',
      30: 'rgba(255, 255, 255, 0.03)',
      40: 'rgba(255, 255, 255, 0.04)',
      60: 'rgba(255, 255, 255, 0.06)',
      80: 'rgba(255, 255, 255, 0.08)',
      90: 'rgba(255, 255, 255, 0.09)',
      120: 'rgba(255, 255, 255, 0.12)',
      140: 'rgba(255, 255, 255, 0.14)',
      240: 'rgba(255, 255, 255, 0.24)',
      360: 'rgba(255, 255, 255, 0.36)',
      500: 'rgba(255, 255, 255, 0.50)',
      560: 'rgba(255, 255, 255, 0.56)',
      850: 'rgba(255, 255, 255, 0.85)'
    },
    black: {
      15: 'rgba(0, 0, 0, 0.015)',
      25: 'rgba(0, 0, 0, 0.025)',
      35: 'rgba(0, 0, 0, 0.035)',
      40: 'rgba(0, 0, 0, 0.04)',
      50: 'rgba(0, 0, 0, 0.05)',
      80: 'rgba(0, 0, 0, 0.08)',
      90: 'rgba(0, 0, 0, 0.09)',
      100: 'rgba(0, 0, 0, 0.10)',
      140: 'rgba(0, 0, 0, 0.14)',
      200: 'rgba(0, 0, 0, 0.20)',
      440: 'rgba(0, 0, 0, 0.44)',
      560: 'rgba(0, 0, 0, 0.56)',
      680: 'rgba(0, 0, 0, 0.68)',
      850: 'rgba(0, 0, 0, 0.85)'
    },
    zincLight: {
      20: 'rgba(250, 250, 250, 0.02)',
      30: 'rgba(250, 250, 250, 0.03)',
      60: 'rgba(250, 250, 250, 0.06)',
      80: 'rgba(250, 250, 250, 0.08)',
      720: 'rgba(250, 250, 250, 0.72)'
    },
    zincDark: {
      20: 'rgba(9, 9, 11, 0.02)',
      25: 'rgba(9, 9, 11, 0.025)',
      30: 'rgba(9, 9, 11, 0.03)',
      50: 'rgba(9, 9, 11, 0.05)',
      90: 'rgba(9, 9, 11, 0.09)',
      650: 'rgba(9, 9, 11, 0.65)'
    },
    cyan: {
      60: 'rgba(34, 211, 238, 0.06)',
      80: 'rgba(34, 211, 238, 0.08)',
      100: 'rgba(34, 211, 238, 0.10)',
      120: 'rgba(34, 211, 238, 0.12)',
      140: 'rgba(34, 211, 238, 0.14)',
      150: 'rgba(34, 211, 238, 0.15)',
      280: 'rgba(34, 211, 238, 0.28)',
      550: 'rgba(34, 211, 238, 0.55)'
    },
    teal: {
      50: 'rgba(8, 145, 178, 0.05)',
      60: 'rgba(8, 145, 178, 0.06)',
      80: 'rgba(8, 145, 178, 0.08)',
      100: 'rgba(8, 145, 178, 0.10)',
      120: 'rgba(8, 145, 178, 0.12)',
      180: 'rgba(8, 145, 178, 0.18)',
      220: 'rgba(8, 145, 178, 0.22)',
      450: 'rgba(8, 145, 178, 0.45)'
    },
    sky: {
      60: 'rgba(2, 132, 199, 0.06)',
      80: 'rgba(56, 189, 248, 0.08)',
      150: 'rgba(2, 132, 199, 0.15)',
      200: 'rgba(56, 189, 248, 0.20)'
    },
    selection: {
      scandinavian: 'rgba(128, 128, 128, 0.25)'
    }
  }
}

// ----------------------------------------------------------------------
// 2. SEMANTIC TOKENS (Light and dark color schemes)
// ----------------------------------------------------------------------

const darkTokens = {
  canvas: primitives.neutral.dark.canvas,
  surface: primitives.neutral.dark.surface,
  surfaceSubtle: primitives.alpha.white[30],
  text: {
    primary: primitives.neutral.white,
    secondary: primitives.alpha.white[560],
    muted: primitives.alpha.white[500],
    tertiary: primitives.alpha.white[360],
    inverse: primitives.neutral.black
  },
  border: {
    default: primitives.alpha.white[120],
    strong: primitives.alpha.white[240],
    subtle: primitives.alpha.white[80]
  },
  interactive: {
    hoverFill: primitives.alpha.white[90],
    pressedFill: primitives.alpha.white[140],
    washFill: primitives.alpha.white[40],
    accentHover: primitives.alpha.white[90],
    navHover: primitives.alpha.white[90],
    cardHover: primitives.alpha.white[30],
    iconBg: primitives.alpha.white[90],
    chipHover: primitives.alpha.white[90],
    iconHoverColor: primitives.neutral.white
  },
  accent: {
    main: primitives.neutral.white,
    contrast: primitives.neutral.dark.canvas,
    hover: 'rgba(255, 255, 255, 0.88)',
    glow: 'none'
  },
  status: {
    success: primitives.status.success.dark,
    warning: primitives.status.warning.dark,
    error: primitives.status.error.dark,
    info: primitives.status.info.dark
  },
  overlay: {
    header: 'rgba(10, 10, 10, 0.85)',
    selection: primitives.alpha.selection.scandinavian,
    selectionText: 'inherit'
  },
  shadows: {
    cardHover: '0 10px 25px -15px rgba(0,0,0,0.5)',
    projectHover: '0 14px 30px -18px rgba(0,0,0,0.6)',
    techHover: 'none',
    profile: '0 10px 30px -15px rgba(0,0,0,0.3)'
  },
  badges: {
    availableDot: primitives.neutral.white
  },
  quote: {
    iconColor: primitives.alpha.white[120],
    iconOpacity: 0.6
  }
}

const lightTokens = {
  canvas: primitives.neutral.white,
  surface: primitives.neutral.white,
  surfaceSubtle: primitives.alpha.black[25],
  text: {
    primary: primitives.neutral.black,
    secondary: primitives.alpha.black[680],
    muted: primitives.alpha.black[560],
    tertiary: primitives.alpha.black[440],
    inverse: primitives.neutral.white
  },
  border: {
    default: primitives.alpha.black[100],
    strong: primitives.alpha.black[200],
    subtle: primitives.alpha.black[90]
  },
  interactive: {
    hoverFill: primitives.alpha.black[50],
    pressedFill: primitives.alpha.black[90],
    washFill: primitives.alpha.black[25],
    accentHover: primitives.alpha.black[50],
    navHover: primitives.alpha.black[50],
    cardHover: primitives.alpha.black[15],
    iconBg: primitives.alpha.black[50],
    chipHover: primitives.alpha.black[50],
    iconHoverColor: primitives.neutral.black
  },
  accent: {
    main: primitives.neutral.black,
    contrast: primitives.neutral.white,
    hover: 'rgba(0, 0, 0, 0.88)',
    glow: 'none'
  },
  status: {
    success: primitives.status.success.light,
    warning: primitives.status.warning.light,
    error: primitives.status.error.light,
    info: primitives.status.info.light
  },
  overlay: {
    header: 'rgba(255, 255, 255, 0.85)',
    selection: primitives.alpha.selection.scandinavian,
    selectionText: 'inherit'
  },
  shadows: {
    cardHover: '0 8px 20px -12px rgba(0,0,0,0.08)',
    projectHover: '0 10px 25px -15px rgba(0,0,0,0.1)',
    techHover: '0 8px 20px -12px rgba(0,0,0,0.08)',
    profile: '0 10px 30px -15px rgba(0,0,0,0.3)'
  },
  badges: {
    availableDot: primitives.neutral.black
  },
  quote: {
    iconColor: primitives.alpha.black[100],
    iconOpacity: 0.6
  }
}

export const colorTokens = {
  dark: darkTokens,
  light: lightTokens
}

/**
 * Returns the resolved editorial token object for the specified color scheme.
 * In addition to structured categories (text, border, interactive, accent, etc.),
 * legacy aliases (primaryInk, secondaryInk, border, strongBorder, hoverFill, washFill)
 * are provided to ensure backwards compatibility.
 *
 * @param {'dark'|'light'} mode
 * @returns {object} Full token tree
 */
export const getColorTokens = (mode = 'dark') => {
  const isDark = mode === 'dark'
  const raw = colorTokens[isDark ? 'dark' : 'light']

  // Attach legacy flat aliases for ease of use and backward compatibility
  return {
    ...raw,
    // Flat ink aliases
    primaryInk: raw.text.primary,
    secondaryInk: raw.text.secondary,
    mutedInk: raw.text.muted,
    tertiaryInk: raw.text.tertiary,
    // Flat border aliases
    border: raw.border.default,
    strongBorder: raw.border.strong,
    subtleBorder: raw.border.subtle,
    // Flat interactive aliases
    hoverFill: raw.interactive.hoverFill,
    pressedFill: raw.interactive.pressedFill,
    washFill: raw.interactive.washFill,
    // Flat accent alias
    accent: raw.accent.main
  }
}

/**
 * CSS custom properties definitions for injection into global CSS / CssBaseline
 */
export const cssColorVariables = {
  ':root': {
    '--color-selection': primitives.alpha.selection.scandinavian
  }
}
