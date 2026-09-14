import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { useDesignSystem } from "@/context/DesignSystemContext"

function ExperiencieCard({ data = {} }) {
  const { title, company, description, technologies = [] } = data
  const { tokens } = useDesignSystem()

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
        borderRadius: tokens.layout.radius.lg,
        border: "1px solid",
        borderColor: tokens.border,
        bgcolor: tokens.surface,
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          borderColor: tokens.strongBorder,
          transform: "translateY(-1px)",
          boxShadow: tokens.shadows.cardHover
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
                borderRadius: tokens.layout.radius.control,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid",
                borderColor: tokens.border,
                color: tokens.secondaryInk,
                flexShrink: 0,
                bgcolor: tokens.hoverFill
              }}
            >
              <MapsHomeWorkOutlinedIcon fontSize="small" />
            </Box>
            <Stack spacing={0.25}>
              <Typography
                sx={{
                  fontFamily: tokens.typography.family.display,
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: tokens.primaryInk
                }}
              >
                {title || "Título del puesto"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  color: tokens.secondaryInk,
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
              borderRadius: tokens.layout.radius.sm,
              border: "1px solid",
              borderColor: tokens.border,
              bgcolor: "transparent",
              fontFamily: tokens.typography.family.mono,
              fontSize: "0.7rem",
              color: tokens.mutedInk,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap"
            }}
          >
            {`${startDate || 'Fecha'}`} - {`${endDate || 'Fecha'}`}
          </Box>
        </Stack>

        <Typography
          sx={{
            color: tokens.secondaryInk,
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
                  borderRadius: tokens.layout.radius.sm,
                  borderColor: tokens.border,
                  color: tokens.mutedInk,
                  bgcolor: tokens.washFill,
                  fontSize: tokens.typography.size.micro,
                  height: 24,
                  transition: `all ${tokens.layout.motion.fast}`,
                  "&:hover": {
                    borderColor: tokens.strongBorder,
                    bgcolor: tokens.hoverFill,
                    color: tokens.primaryInk
                  }
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
