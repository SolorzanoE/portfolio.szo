/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from "react"
import { useColorScheme } from "@mui/material/styles"
import { getDesignTokens } from "@/design-system/tokens"

const DesignSystemContext = createContext({
  mode: "light",
  tokens: getDesignTokens("light"),
})

export const DesignSystemProvider = ({ children }) => {
  const { mode, systemMode } = useColorScheme()
  const resolvedMode = mode === "system" ? systemMode : mode

  const tokens = useMemo(() => {
    return getDesignTokens(resolvedMode || "light")
  }, [resolvedMode])

  const value = useMemo(() => ({
    mode: resolvedMode || "light",
    tokens
  }), [resolvedMode, tokens])

  return (
    <DesignSystemContext.Provider
      value={value}
    >
      {children}
    </DesignSystemContext.Provider>
  )
}

export const useDesignSystem = () => useContext(DesignSystemContext)
