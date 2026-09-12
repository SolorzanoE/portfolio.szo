/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from "react"
import { useTheme } from "@mui/material"
import { getColorTokens, primitives } from "@/design-system/tokens"

const DesignSystemContext = createContext({
  isScandinavian: true,
  variant: "editorial",
  tokens: getColorTokens("light", true),
  getTokens: () => getColorTokens("light", true),
  primitives
})

export const DesignSystemProvider = ({ children }) => {
  const theme = useTheme()
  const isScandinavian = true
  const variant = "editorial"

  const getTokens = (mode = theme.palette.mode || "light") => {
    return getColorTokens(mode, isScandinavian)
  }

  const tokens = useMemo(() => {
    return getColorTokens(theme.palette.mode || "light", isScandinavian)
  }, [theme.palette.mode, isScandinavian])

  return (
    <DesignSystemContext.Provider
      value={{
        isScandinavian,
        variant,
        tokens,
        getTokens,
        primitives
      }}
    >
      {children}
    </DesignSystemContext.Provider>
  )
}

export const useDesignSystem = () => useContext(DesignSystemContext)
