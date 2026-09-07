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
          paddingInline: 0.5,
          fontSize: "0.75rem",
          letterSpacing: "0.06em",
          borderColor: selected ? tokens.primaryInk : tokens.border,
          color: selected
            ? tokens.canvas
            : tokens.secondaryInk,
          bgcolor: selected ? tokens.primaryInk : "transparent",
          transition: "all 0.2s ease",
          "&:hover": {
            bgcolor: selected ? tokens.primaryInk : tokens.hoverFill,
            borderColor: selected ? tokens.primaryInk : tokens.strongBorder,
            color: selected
              ? tokens.canvas
              : tokens.primaryInk
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
        paddingInline: 0.5,
        fontSize: "0.78rem",
        letterSpacing: "0.08em",
        borderColor: "divider",
        color: selected ? "primary.contrastText" : "text.primary",
        bgcolor: selected ? "primary.main" : "transparent",
        transition: "all 0.25s ease",
        "&:hover": {
          bgcolor: selected ? "primary.main" : "transparent",
          borderColor: "secondary.main",
          color: selected ? "primary.contrastText" : "secondary.main"
        }
      }}
    />
  )
}

export default TechnologyChip
