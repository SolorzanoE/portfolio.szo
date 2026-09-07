import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { EmailOutlined, GitHub, LinkedIn, ArrowOutward } from "@mui/icons-material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"

function Contact() {
  return (
    <Stack
      id={dataSection.contact.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Contacto" title="¿Trabajamos" italicWord="juntos?" />

      <Paper
        elevation={0}
        sx={{
          padding: { xs: 3.5, sm: 5, md: 6 },
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: 340,
            height: 340,
            background: (t) =>
              t.palette.mode === "dark"
                ? "radial-gradient(circle at 100% 0%, rgba(34,211,238,0.14), transparent 70%)"
                : "radial-gradient(circle at 100% 0%, rgba(8,145,178,0.10), transparent 70%)",
            pointerEvents: "none"
          }
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                alignSelf: "flex-start",
                paddingInline: 1.5,
                paddingBlock: 0.6,
                borderRadius: 1.2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: (t) =>
                  t.palette.mode === "dark"
                    ? "rgba(34,211,238,0.06)"
                    : "rgba(8,145,178,0.05)"
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  animation: "pulseDot 2s ease-in-out infinite"
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.05em",
                  color: "text.secondary"
                }}
              >
                Respuesta habitual en menos de 24 horas
              </Typography>
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.15
              }}
            >
              ¿Tienes un proyecto en mente o una propuesta técnica?
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", md: "1.08rem" },
                lineHeight: 1.7,
                color: "text.secondary",
                maxWidth: 620
              }}
            >
              Siempre estoy interesado en nuevos retos profesionales, desarrollo de software a medida,
              arquitecturas escalables y oportunidades de colaboración. Escríbeme y conversemos.
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ alignItems: { xs: "stretch", sm: "center" } }}
          >
            <Button
              variant="contained"
              disableElevation
              href={`mailto:${EMAIL_ADDRESS}`}
              startIcon={<EmailOutlined fontSize="small" />}
              endIcon={<ArrowOutward fontSize="small" />}
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                paddingInline: 3,
                paddingBlock: 1.35,
                fontSize: "0.9rem",
                borderRadius: 999,
                minHeight: 44,
                transition: "opacity 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  bgcolor: "primary.main",
                  opacity: 0.92,
                  transform: "translateY(-1px)"
                },
                "&:active": {
                  opacity: 0.85
                }
              }}
            >
              Escríbeme por correo
            </Button>

            <Button
              variant="outlined"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              startIcon={<LinkedIn fontSize="small" />}
              sx={{
                borderColor: "divider",
                color: "text.primary",
                paddingInline: 2.5,
                paddingBlock: 1.35,
                fontSize: "0.88rem",
                borderRadius: 999,
                minHeight: 44,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "secondary.main",
                  bgcolor: (t) =>
                    t.palette.mode === "dark"
                      ? "rgba(34,211,238,0.06)"
                      : "rgba(8,145,178,0.05)",
                  color: "secondary.main",
                  transform: "translateY(-1px)"
                }
              }}
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              startIcon={<GitHub fontSize="small" />}
              sx={{
                borderColor: "divider",
                color: "text.primary",
                paddingInline: 2.5,
                paddingBlock: 1.35,
                fontSize: "0.88rem",
                borderRadius: 999,
                minHeight: 44,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "secondary.main",
                  bgcolor: (t) =>
                    t.palette.mode === "dark"
                      ? "rgba(34,211,238,0.06)"
                      : "rgba(8,145,178,0.05)",
                  color: "secondary.main",
                  transform: "translateY(-1px)"
                }
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Contact
