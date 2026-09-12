import { Box, Button, Paper, Stack, Typography } from "@mui/material"
import { EmailOutlined, GitHub, LinkedIn, ArrowOutward } from "@mui/icons-material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"
import { useDesignSystem } from "@/context/DesignSystemContext"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"
import MotionFade from "@/components/motion/MotionFade"

function Contact() {
  const { tokens } = useDesignSystem()

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
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: tokens.border,
            bgcolor: tokens.surface,
            position: "relative",
            overflow: "hidden"
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
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: tokens.border,
                  bgcolor: tokens.washFill
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: tokens.badges.availableDot,
                    animation: "pulseDot 2s ease-in-out infinite"
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.05em",
                    color: tokens.mutedInk
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
                  color: tokens.primaryInk
                }}
              >
              ¿Tienes un proyecto en mente o una propuesta técnica?
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.98rem", md: "1.08rem" },
                  lineHeight: 1.7,
                  color: tokens.secondaryInk,
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
                  bgcolor: tokens.accent.main,
                  color: tokens.accent.contrast,
                  paddingInline: 3,
                  paddingBlock: 1.35,
                  fontSize: "0.9rem",
                  borderRadius: 1,
                  minHeight: 44,
                  transition: "opacity 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    bgcolor: tokens.accent.main,
                    opacity: 0.88
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
                  borderColor: tokens.border,
                  color: tokens.primaryInk,
                  paddingInline: 2.5,
                  paddingBlock: 1.35,
                  fontSize: "0.88rem",
                  borderRadius: 1,
                  minHeight: 44,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: tokens.strongBorder,
                    bgcolor: tokens.hoverFill,
                    color: tokens.primaryInk
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
                  borderColor: tokens.border,
                  color: tokens.primaryInk,
                  paddingInline: 2.5,
                  paddingBlock: 1.35,
                  fontSize: "0.88rem",
                  borderRadius: 1,
                  minHeight: 44,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: tokens.strongBorder,
                    bgcolor: tokens.hoverFill,
                    color: tokens.primaryInk
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
