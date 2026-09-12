/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo } from "react"
import { useTheme } from "@mui/material"
import { getColorTokens } from "@/design-system/tokens"

const DesignSystemContext = createContext({
  tokens: getColorTokens("light"),
})

export const DesignSystemProvider = ({ children }) => {
  const theme = useTheme()

  const tokens = useMemo(() => {
    return getColorTokens(theme.palette.mode || "light")
  }, [theme.palette.mode])

  return (
    <DesignSystemContext.Provider
      value={{
        tokens,
      }}
    >
      {children}
    </DesignSystemContext.Provider>
  )
}

export const useDesignSystem = () => useContext(DesignSystemContext)
