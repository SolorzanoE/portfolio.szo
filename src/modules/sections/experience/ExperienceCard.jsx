import { Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material"
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { useDesignSystem } from "@/context/DesignSystemContext"

function ExperiencieCard({ data = {} }) {
  const { title, company, description, technologies = [] } = data
  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  const startDate = data.startDate
    .toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }).replace('de', '')
  const endDate = data.endDate
    .toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }).replace('de', '')

  return (
    <Paper
      elevation={0}
      sx={{
        paddingY: { xs: 2.5, md: 3 },
        paddingX: { xs: 2.5, md: 3.5 },
        borderRadius: isScandinavian ? 1.2 : 1.7,
        border: "1px solid",
        borderColor: isScandinavian ? tokens.border : "divider",
        bgcolor: isScandinavian ? tokens.surface : "background.paper",
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
          transform: isScandinavian ? (variant === "quiet" ? "none" : "translateY(-1px)") : "translateY(-2px)",
          boxShadow: isScandinavian
            ? (theme.palette.mode === "dark" ? "0 10px 25px -15px rgba(0,0,0,0.5)" : "0 8px 20px -12px rgba(0,0,0,0.08)")
            : (t => t.palette.mode === "dark" ? "0 24px 40px -28px rgba(0,0,0,0.65)" : "0 18px 40px -24px rgba(8,145,178,0.18)")
        }
      }}
    >
      <Stack spacing={2}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: isScandinavian ? 1 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid",
                borderColor: isScandinavian ? tokens.border : "divider",
                color: isScandinavian ? tokens.secondaryInk : "secondary.main",
                flexShrink: 0,
                bgcolor: isScandinavian
                  ? tokens.hoverFill
                  : (t => t.palette.mode === "dark" ? "rgba(34,211,238,0.06)" : "rgba(8,145,178,0.05)")
              }}
            >
              <MapsHomeWorkOutlinedIcon fontSize="small" />
            </Box>
            <Stack spacing={0.25}>
              <Typography
                sx={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: isScandinavian ? tokens.primaryInk : "inherit"
                }}
              >
                {title || "Título del puesto"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  color: isScandinavian ? tokens.secondaryInk : "secondary.main",
                  fontWeight: 500
                }}
              >
                {company || "Empresa"}
              </Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              paddingInline: 1.25,
              paddingBlock: 0.5,
              borderRadius: isScandinavian ? 0.8 : 1,
              border: "1px solid",
              borderColor: isScandinavian ? tokens.border : "divider",
              bgcolor: isScandinavian ? "transparent" : "inherit",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: isScandinavian ? tokens.mutedInk : "text.secondary",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap"
            }}
          >
            {`${startDate || 'Fecha'}`} - {`${endDate || 'Fecha'}`}
          </Box>
        </Stack>

        <Typography
          sx={{
            color: isScandinavian ? tokens.secondaryInk : "text.secondary",
            fontSize: "0.95rem",
            lineHeight: 1.7
          }}
        >
          {description || "Descripción de tus responsabilidades y logros en este rol."}
        </Typography>

        {technologies.length > 0 && (
          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
            {technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: isScandinavian ? 0.8 : 0.7,
                  borderColor: isScandinavian ? tokens.border : "divider",
                  color: isScandinavian ? tokens.mutedInk : "text.secondary",
                  bgcolor: isScandinavian ? tokens.washFill : "transparent",
                  fontSize: "0.7rem",
                  height: 24,
                  transition: "all 0.2s ease",
                  "&:hover": isScandinavian ? {
                    borderColor: tokens.strongBorder,
                    bgcolor: tokens.hoverFill,
                    color: tokens.primaryInk
                  } : {}
                }}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  )
}

export default ExperiencieCard
