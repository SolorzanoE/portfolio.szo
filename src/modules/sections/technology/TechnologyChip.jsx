import { Chip } from "@mui/material"

const TechnologyChip = ({ label, onClick, selected }) => {
  return (
    <Chip
      clickable
      label={label}
      onClick={onClick}
      variant={selected ? "filled" : "outlined"}
      sx={{
        borderRadius: 1,
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
