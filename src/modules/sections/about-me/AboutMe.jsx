import SectionHeader from "@/components/SectionHeader"
import { dataSection } from "@/data/dataSection"
import { Box, Grid, Stack, Typography } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const AboutMe = () => {
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
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.7
              }}
            >
              Soy estudiante de último semestre en <strong>Ingeniería en Desarrollo y 
              Tecnologías de Software</strong>. A lo largo de mi formación, he consolidado mi 
              perfil técnico y de liderazgo participando activamente en 
              hackathones de alto nivel organizados por <strong>Enactus y Apple</strong>.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.7
              }}
            >
              Cuento con experiencia practica como <strong>Desarrollador de Software Freelance
              Subcontratado</strong>, colaborando de manera externa con empresas en la toma de decisiones 
              técnicas y el desarrollo de productos bajo entornos colaborativos.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.7
              }}
            >
              Actualmente, me encuentro diseñando y construyendo un <strong>sistema de 
              soporte de servicios</strong> a traves de tickets, 
              aplicando buenas prácticas de arquitectura y desarrollo de software.
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              position: "relative",
              padding: { xs: 3, md: 4 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              overflow: "hidden",
              "&::before": {
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
                color: "secondary.main",
                opacity: 0.18
              }}
            />
            <Stack spacing={2.5} sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontSize: { xs: "1.75rem", md: "2.1rem" },
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em"
                }}
              >
                Talk is cheap. Show me the code.
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 24, height: "1px", bgcolor: "secondary.main" }} />
                <Typography variant="overline" sx={{ color: "secondary.main" }}>
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
