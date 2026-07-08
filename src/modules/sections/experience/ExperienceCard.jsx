import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

function ExperiencieCard({ data = {} }) {
  const { title, company, description, technologies = [] } = data

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
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          borderColor: "secondary.main",
          transform: "translateY(-2px)",
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 24px 40px -28px rgba(0,0,0,0.65)"
              : "0 18px 40px -24px rgba(8,145,178,0.18)"
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
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid",
                borderColor: "divider",
                color: "secondary.main",
                flexShrink: 0,
                bgcolor: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(34,211,238,0.06)"
                    : "rgba(8,145,178,0.05)"
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
                  letterSpacing: "-0.02em"
                }}
              >
                {title || "Título del puesto"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  color: "secondary.main",
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
              borderRadius: 999,
              border: "1px solid",
              borderColor: "divider",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "text.secondary",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap"
            }}
          >
            {`${startDate || 'Fecha'}`} - {`${endDate || 'Fecha'}`}
          </Box>
        </Stack>

        <Typography
          sx={{
            color: "text.secondary",
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
                  borderRadius: 999,
                  borderColor: "divider",
                  color: "text.secondary",
                  fontSize: "0.7rem",
                  height: 24
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
