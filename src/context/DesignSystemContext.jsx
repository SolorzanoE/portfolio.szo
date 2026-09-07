import { createContext, useContext, useEffect } from "react"

const DesignSystemContext = createContext({
  isScandinavian: true,
  variant: "editorial",
  toggleScandinavian: () => {},
  setVariant: () => {},
  getTokens: () => ({})
})

export const DesignSystemProvider = ({ children }) => {
  const isScandinavian = true
  const variant = "editorial"

  useEffect(() => {
    // Clear any obsolete test overrides
    localStorage.removeItem("portfolio_design_system")
    localStorage.removeItem("portfolio_scandinavian_variant")
  }, [])

  const toggleScandinavian = () => {}
  const setVariant = () => {}

  const getTokens = (mode = "light") => {
    const isDark = mode === "dark"
    return {
      canvas: isDark ? "#0A0A0A" : "#FFFFFF",
      surface: isDark ? "#121212" : "#FFFFFF",
      primaryInk: isDark ? "#FFFFFF" : "#000000",
      secondaryInk: isDark ? "rgba(255, 255, 255, 0.56)" : "rgba(0, 0, 0, 0.68)",
      mutedInk: isDark ? "rgba(255, 255, 255, 0.50)" : "rgba(0, 0, 0, 0.56)",
      tertiaryInk: isDark ? "rgba(255, 255, 255, 0.36)" : "rgba(0, 0, 0, 0.44)",
      border: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.10)",
      strongBorder: isDark ? "rgba(255, 255, 255, 0.24)" : "rgba(0, 0, 0, 0.20)",
      hoverFill: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.05)",
      pressedFill: isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(0, 0, 0, 0.09)",
      washFill: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.025)",
      accent: isDark ? "#FFFFFF" : "#000000"
    }
  }

  return (
    <DesignSystemContext.Provider
      value={{
        isScandinavian,
        variant,
        toggleScandinavian,
        setVariant,
        getTokens
      }}
    >
      {children}
    </DesignSystemContext.Provider>
  )
}

export const useDesignSystem = () => useContext(DesignSystemContext)
