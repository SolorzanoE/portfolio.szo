import SectionHeader from "@/components/SectionHeader"
import { dataSection } from "@/data/dataSection"
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import { useDesignSystem } from "@/context/DesignSystemContext"

const AboutMe = () => {
  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  return (
    <Stack
      id={dataSection.aboutMe.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Sobre mí" title="Mi" italicWord="historia" />

      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            <Typography
              sx={{
                color: isScandinavian ? tokens.secondaryInk : "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.75
              }}
            >
              Soy estudiante de último semestre en <strong style={{ color: isScandinavian ? tokens.primaryInk : "inherit" }}>Ingeniería en Desarrollo y 
              Tecnologías de Software</strong>. A lo largo de mi formación, he consolidado mi 
              perfil técnico y de liderazgo participando activamente en 
              hackatones de alto nivel organizados por <strong style={{ color: isScandinavian ? tokens.primaryInk : "inherit" }}>Enactus y Apple</strong>.
            </Typography>
            <Typography
              sx={{
                color: isScandinavian ? tokens.secondaryInk : "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.75
              }}
            >
              Cuento con experiencia práctica como <strong style={{ color: isScandinavian ? tokens.primaryInk : "inherit" }}>Desarrollador de Software Freelance
              Subcontratado</strong>, colaborando de manera externa con empresas en la toma de decisiones 
              técnicas y el desarrollo de productos bajo entornos colaborativos.
            </Typography>
            <Typography
              sx={{
                color: isScandinavian ? tokens.secondaryInk : "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.75
              }}
            >
              Actualmente, me encuentro diseñando y construyendo un <strong style={{ color: isScandinavian ? tokens.primaryInk : "inherit" }}>sistema de 
              soporte de servicios</strong> a través de tickets, 
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              position: "relative",
              padding: { xs: 3, md: 4 },
              borderRadius: isScandinavian ? 1.2 : 1.7,
              border: "1px solid",
              borderColor: isScandinavian ? tokens.border : "divider",
              bgcolor: isScandinavian ? tokens.surface : "background.paper",
              overflow: "hidden",
              "&::before": isScandinavian ? {} : {
                content: '""',
                position: "absolute",
                inset: 0,
                background: (t) =>
                  t.palette.mode === "dark"
                    ? "radial-gradient(400px 200px at 100% 0%, rgba(34,211,238,0.10), transparent 60%)"
                    : "radial-gradient(400px 200px at 100% 0%, rgba(8,145,178,0.08), transparent 60%)",
                pointerEvents: "none"
              }
            }}
          >
            <FormatQuoteIcon
              sx={{
                position: "absolute",
                top: 10,
                right: 14,
                fontSize: 52,
                color: isScandinavian ? tokens.border : "secondary.main",
                opacity: isScandinavian ? 0.6 : 0.18
              }}
            />
            <Stack spacing={2.5} sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily: isScandinavian && variant !== "editorial" ? "inherit" : "'Instrument Serif', serif",
                  fontStyle: isScandinavian && variant !== "editorial" ? "normal" : "italic",
                  fontSize: { xs: "1.65rem", md: "2rem" },
                  fontWeight: isScandinavian && variant !== "editorial" ? 500 : 400,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: isScandinavian ? tokens.primaryInk : "inherit"
                }}
              >
                Talk is cheap. Show me the code.
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 24, height: "1px", bgcolor: isScandinavian ? tokens.border : "secondary.main" }} />
                <Typography
                  variant="overline"
                  sx={{
                    color: isScandinavian ? tokens.secondaryInk : "secondary.main",
                    letterSpacing: isScandinavian ? "0.08em" : "0.15em",
                    textTransform: isScandinavian ? "none" : "uppercase"
                  }}
                >
                  Linus Torvalds
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default AboutMe
