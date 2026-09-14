import Chip from "@mui/material/Chip"
import { useDesignSystem } from "@/context/DesignSystemContext"

const TechnologyChip = ({ label, onClick, selected }) => {
  const { tokens } = useDesignSystem()

  return (
    <Chip
      clickable
      label={label}
      onClick={onClick}
      variant="outlined"
      sx={{
        borderRadius: tokens.layout.radius.sm,
        paddingInline: 0.75,
        minHeight: 34,
        fontFamily: tokens.typography.family.display,
        fontSize: tokens.typography.size.label,
        fontWeight: selected ? 600 : 500,
        letterSpacing: "0.04em",
        borderColor: selected ? tokens.accent.main : tokens.border,
        color: selected ? tokens.accent.contrast : tokens.secondaryInk,
        bgcolor: selected ? tokens.accent.main : "transparent",
        cursor: "pointer",
        transition: `all ${tokens.layout.motion.fast}`,
        "&:hover, &.MuiChip-clickable:hover": {
          bgcolor: selected ? tokens.accent.main : tokens.interactive.chipHover,
          borderColor: selected ? tokens.accent.main : tokens.accent.main,
          color: selected ? tokens.accent.contrast : tokens.primaryInk,
          opacity: selected ? 0.9 : 1,
          transform: "translateY(-1px)"
        },
        "&:active, &.MuiChip-clickable:active": {
          bgcolor: selected ? tokens.accent.main : tokens.pressedFill,
          transform: "scale(0.97)"
        }
      }}
    />
  )
}

export default TechnologyChip
