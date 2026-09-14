export * from './colors'
export * from './layout'
export * from './typography'

import { getColorTokens } from './colors'
import { layoutTokens } from './layout'
import { typographyTokens } from './typography'

export const getDesignTokens = (mode = 'light') => ({
  ...getColorTokens(mode),
  layout: layoutTokens,
  typography: typographyTokens
})
