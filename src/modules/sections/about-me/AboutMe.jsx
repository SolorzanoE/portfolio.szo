import SectionHeader from "@/components/SectionHeader"
import { dataSection } from "@/data/dataSection"
import { Box, Grid, Stack, Typography } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { useDesignSystem } from "@/context/DesignSystemContext"
import MotionFade from "@/components/motion/MotionFade"

const AboutMe = () => {
  const { tokens } = useDesignSystem()

  return (
    <Stack
      id={dataSection.aboutMe.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Sobre mí" title="Mi" italicWord="historia" />

      <MotionFade delay={0.1}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  color: tokens.secondaryInk,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.75
                }}
              >
              Soy estudiante de último semestre en <strong style={{ color: tokens.primaryInk }}>Ingeniería en Desarrollo y 
              Tecnologías de Software</strong>. A lo largo de mi formación, he consolidado mi 
              perfil técnico y de liderazgo participando activamente en 
              hackatones de alto nivel organizados por <strong style={{ color: tokens.primaryInk }}>Enactus y Apple</strong>.
              </Typography>
              <Typography
                sx={{
                  color: tokens.secondaryInk,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.75
                }}
              >
              Cuento con experiencia práctica como <strong style={{ color: tokens.primaryInk }}>Desarrollador de Software Freelance
              Subcontratado</strong>, colaborando de manera externa con empresas en la toma de decisiones 
              técnicas y el desarrollo de productos bajo entornos colaborativos.
              </Typography>
              <Typography
                sx={{
                  color: tokens.secondaryInk,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: 1.75
                }}
              >
              Actualmente, me encuentro diseñando y construyendo un <strong style={{ color: tokens.primaryInk }}>sistema de 
              soporte de servicios</strong> basado en tickets.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                padding: { xs: 3, md: 4 },
                borderRadius: 1.2,
                border: "1px solid",
                borderColor: tokens.border,
                bgcolor: tokens.surface,
                overflow: "hidden",
              }}
            >
              <FormatQuoteIcon
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 14,
                  fontSize: 52,
                  color: tokens.quote.iconColor,
                  opacity: tokens.quote.iconOpacity
                }}
              />
              <Stack spacing={2.5} sx={{ position: "relative" }}>
                <Typography
                  sx={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: { xs: "1.65rem", md: "2rem" },
                    fontWeight: 400,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    color: tokens.primaryInk
                  }}
                >
                Talk is cheap. Show me the code.
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ width: 24, height: "1px", bgcolor: tokens.border }} />
                  <Typography
                    variant="overline"
                    sx={{
                      color: tokens.secondaryInk,
                      letterSpacing: "0.08em",
                      textTransform: "none"
                    }}
                  >
                  Linus Torvalds
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </MotionFade>
    </Stack>
  )
}

export default AboutMe
