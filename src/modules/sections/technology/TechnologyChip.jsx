import { Chip, useTheme } from "@mui/material"
import { useDesignSystem } from "@/context/DesignSystemContext"

const TechnologyChip = ({ label, onClick, selected }) => {
  const theme = useTheme()
  const { isScandinavian, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  if (isScandinavian) {
    return (
      <Chip
        clickable
        label={label}
        onClick={onClick}
        variant="outlined"
        sx={{
          borderRadius: 0.8,
          paddingInline: 0.75,
          minHeight: 34,
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: "0.78rem",
          fontWeight: selected ? 600 : 500,
          letterSpacing: "0.04em",
          borderColor: selected ? tokens.primaryInk : tokens.border,
          color: selected ? tokens.canvas : tokens.secondaryInk,
          bgcolor: selected ? tokens.primaryInk : "transparent",
          cursor: "pointer",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover, &.MuiChip-clickable:hover": {
            bgcolor: selected ? tokens.primaryInk : tokens.hoverFill,
            borderColor: selected ? tokens.primaryInk : tokens.strongBorder,
            color: selected ? tokens.canvas : tokens.primaryInk,
            opacity: selected ? 0.88 : 1,
            transform: "translateY(-1px)"
          },
          "&:active, &.MuiChip-clickable:active": {
            bgcolor: selected ? tokens.primaryInk : tokens.pressedFill,
            transform: "scale(0.97)"
          }
        }}
      />
    )
  }

  return (
    <Chip
      clickable
      label={label}
      onClick={onClick}
      variant={selected ? "filled" : "outlined"}
      sx={{
        borderRadius: 0.7,
        paddingInline: 0.75,
        minHeight: 34,
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: "0.78rem",
        letterSpacing: "0.06em",
        borderColor: selected ? "primary.main" : "divider",
        color: selected ? "primary.contrastText" : "text.primary",
        bgcolor: selected ? "primary.main" : "transparent",
        cursor: "pointer",
        transition: "all 0.25s ease",
        "&:hover, &.MuiChip-clickable:hover": {
          bgcolor: selected
            ? "primary.main"
            : (t) =>
                t.palette.mode === "dark"
                  ? "rgba(34, 211, 238, 0.08)"
                  : "rgba(8, 145, 178, 0.06)",
          borderColor: selected ? "primary.main" : "secondary.main",
          color: selected ? "primary.contrastText" : "secondary.main",
          opacity: selected ? 0.9 : 1,
          transform: "translateY(-1px)"
        },
        "&:active, &.MuiChip-clickable:active": {
          transform: "scale(0.97)"
        }
      }}
    />
  )
}

export default TechnologyChip
