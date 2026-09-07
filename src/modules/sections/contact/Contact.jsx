import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material"
import { EmailOutlined, GitHub, LinkedIn, ArrowOutward } from "@mui/icons-material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"
import { useDesignSystem } from "@/context/DesignSystemContext"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"
import MotionFade from "@/components/motion/MotionFade"

function Contact() {
  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  return (
    <Stack
      id={dataSection.contact.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Contacto" title="¿Trabajamos" italicWord="juntos?" />

      <MotionFade delay={0.1}>
        <Paper
          elevation={0}
          sx={{
          padding: { xs: 3.5, sm: 5, md: 6 },
          borderRadius: isScandinavian ? 1.5 : 2,
          border: "1px solid",
          borderColor: isScandinavian ? tokens.border : "divider",
          bgcolor: isScandinavian ? tokens.surface : "background.paper",
          position: "relative",
          overflow: "hidden",
          ...(!isScandinavian && {
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: 320,
              height: 320,
              background: (t) =>
                t.palette.mode === "dark"
                  ? "radial-gradient(circle at 100% 0%, rgba(34,211,238,0.12), transparent 70%)"
                  : "radial-gradient(circle at 100% 0%, rgba(8,145,178,0.08), transparent 70%)",
              pointerEvents: "none"
            }
          })
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: 720 }}>
          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                alignSelf: "flex-start",
                paddingInline: 1.5,
                paddingBlock: 0.6,
                borderRadius: isScandinavian ? 1 : 1.2,
                border: "1px solid",
                borderColor: isScandinavian ? tokens.border : "divider",
                bgcolor: isScandinavian ? tokens.washFill : "transparent"
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: isScandinavian ? tokens.primaryInk : "success.main",
                  animation: "pulseDot 2s ease-in-out infinite"
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.05em",
                  color: isScandinavian ? tokens.mutedInk : "text.secondary"
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
                lineHeight: 1.15,
                color: isScandinavian ? tokens.primaryInk : "inherit"
              }}
            >
              ¿Tienes un proyecto en mente o una propuesta técnica?
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", md: "1.08rem" },
                lineHeight: 1.7,
                color: isScandinavian ? tokens.secondaryInk : "text.secondary",
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
                bgcolor: isScandinavian ? tokens.primaryInk : "primary.main",
                color: isScandinavian ? tokens.canvas : "primary.contrastText",
                paddingInline: 3,
                paddingBlock: 1.35,
                fontSize: "0.9rem",
                borderRadius: isScandinavian ? 1 : 999,
                minHeight: 44,
                transition: "opacity 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  bgcolor: isScandinavian ? tokens.primaryInk : "primary.main",
                  opacity: isScandinavian ? 0.88 : 0.9
                },
                "&:active": {
                  opacity: 0.8
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
                borderColor: isScandinavian ? tokens.border : "divider",
                color: isScandinavian ? tokens.primaryInk : "text.primary",
                paddingInline: 2.5,
                paddingBlock: 1.35,
                fontSize: "0.88rem",
                borderRadius: isScandinavian ? 1 : 999,
                minHeight: 44,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                  bgcolor: isScandinavian ? tokens.hoverFill : "transparent",
                  color: isScandinavian ? tokens.primaryInk : "secondary.main"
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
                borderColor: isScandinavian ? tokens.border : "divider",
                color: isScandinavian ? tokens.primaryInk : "text.primary",
                paddingInline: 2.5,
                paddingBlock: 1.35,
                fontSize: "0.88rem",
                borderRadius: isScandinavian ? 1 : 999,
                minHeight: 44,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                  bgcolor: isScandinavian ? tokens.hoverFill : "transparent",
                  color: isScandinavian ? tokens.primaryInk : "secondary.main"
                }
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </MotionFade>
  </Stack>
  )
}

export default Contact
