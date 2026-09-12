import { dataSection } from "@/data/dataSection"
import { EmailOutlined, GitHub, LinkedIn, ArrowDownward, ArrowOutward } from "@mui/icons-material"
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"
import profile from "@/assets/profile.webp"
import { useDesignSystem } from "@/context/DesignSystemContext"
import { motion } from "framer-motion"

const links = [
  { icon: <GitHub fontSize="small" />, link: GITHUB_URL, label: "GitHub" },
  { icon: <LinkedIn fontSize="small" />, link: LINKEDIN_URL, label: "LinkedIn" },
  { icon: <EmailOutlined fontSize="small" />, link: `mailto:${EMAIL_ADDRESS}`, label: "Email" }
]

function Home() {
  const { tokens } = useDesignSystem()

  return (
    <Stack
      id={dataSection.home.id}
      direction={{ xs: "column-reverse", md: "row" }}
      spacing={{ xs: 5, md: 8 }}
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "92dvh" },
        paddingBlock: { xs: 6, md: 0 },
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Stack
        spacing={{ xs: 3, md: 3.5 }}
        sx={{
          width: { xs: "100%", md: "58%" },
          maxWidth: 680
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            alignSelf: "flex-start",
            paddingInline: 1.5,
            paddingBlock: 0.75,
            borderRadius: 1,
            border: "1px solid",
            borderColor: tokens.border,
            bgcolor: tokens.surface
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
              letterSpacing: "0.06em",
              color: tokens.mutedInk
            }}
          >
            Disponible para nuevos proyectos
          </Typography>
        </Box>

        <Typography
          variant="h1"
          component={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            fontSize: { xs: "2.75rem", sm: "3.75rem", md: "5rem", lg: "5.75rem" },
            fontWeight: 500,
            letterSpacing: "-0.035em",
            color: tokens.primaryInk
          }}
        >
          Eduardo{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: tokens.primaryInk
            }}
          >
            Solórzano
          </Box>
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: { xs: "0.78rem", md: "0.85rem" },
            letterSpacing: "0.08em",
            textTransform: "none",
            color: tokens.mutedInk
          }}
        >
          Full Stack Engineer
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            color: tokens.secondaryInk,
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: 560,
            lineHeight: 1.65
          }}
        >
          Ingeniero de Software apasionado por la tecnología y los modelos de negocio, 
          siempre dispuesto a enfrentar nuevos retos, buscando soluciones óptimas y escalables.
        </Typography>

        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ paddingTop: 1, alignItems: { xs: "stretch", sm: "center" } }}
        >
          <Button
            variant="contained"
            disableElevation
            href={`mailto:${EMAIL_ADDRESS}`}
            endIcon={<ArrowOutward fontSize="small" />}
            sx={{
              bgcolor: tokens.accent.main,
              color: tokens.accent.contrast,
              paddingInline: 2.5,
              paddingBlock: 1.25,
              fontSize: "0.88rem",
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
            Contáctame
          </Button>

          <Button
            variant="outlined"
            href={`#${dataSection.project.id}`}
            sx={{
              borderColor: tokens.border,
              color: tokens.primaryInk,
              paddingInline: 2.5,
              paddingBlock: 1.25,
              fontSize: "0.88rem",
              borderRadius: 1,
              minHeight: 44,
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: tokens.strongBorder,
                bgcolor: tokens.interactive.accentHover,
                color: tokens.primaryInk
              }
            }}
          >
            Ver proyectos
          </Button>

          <Stack direction="row" spacing={1}>
            {links.map(data => (
              <IconButton
                key={data.link}
                href={data.link}
                target="_blank"
                rel="noreferrer"
                aria-label={data.label}
                sx={{
                  width: { xs: 44, sm: 42 },
                  height: { xs: 44, sm: 42 },
                  border: "1px solid",
                  borderColor: tokens.border,
                  color: tokens.primaryInk,
                  borderRadius: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: tokens.primaryInk,
                    borderColor: tokens.strongBorder,
                    transform: "none",
                    bgcolor: tokens.hoverFill
                  },
                  "&:active": {
                    bgcolor: tokens.pressedFill
                  }
                }}
              >
                {data.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          position: "relative",
          width: { xs: "72%", sm: "48%", md: "38%" },
          maxWidth: 400,
          aspectRatio: "1 / 1",
          flexShrink: 0
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: -14,
            left: -14,
            paddingInline: 1.25,
            paddingBlock: 0.5,
            borderRadius: 1,
            border: "1px solid",
            borderColor: tokens.border,
            bgcolor: tokens.surface,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: tokens.secondaryInk,
            display: { xs: "none", sm: "inline-flex" },
            zIndex: 2
          }}
        >
          ./portfolio
        </Box>
        <Box
          component="img"
          src={profile}
          alt="Eduardo Solórzano"
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid",
            borderColor: tokens.border,
            boxShadow: tokens.shadows.profile
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          color: tokens.mutedInk,
          opacity: 1
        }}
      >
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "none"
          }}
        >
          Scroll
        </Typography>
        <ArrowDownward fontSize="small" />
      </Box>
    </Stack>
  )
}

export default Home
