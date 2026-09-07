import { dataSection } from "@/data/dataSection"
import { EmailOutlined, GitHub, LinkedIn, ArrowDownward, ArrowOutward } from "@mui/icons-material"
import { Box, Button, IconButton, Stack, Typography, useTheme } from "@mui/material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"
import profile from "@/assets/profile.png"
import { useDesignSystem } from "@/context/DesignSystemContext"
import { motion } from "framer-motion"

const links = [
  { icon: <GitHub fontSize="small" />, link: GITHUB_URL, label: "GitHub" },
  { icon: <LinkedIn fontSize="small" />, link: LINKEDIN_URL, label: "LinkedIn" },
  { icon: <EmailOutlined fontSize="small" />, link: `mailto:${EMAIL_ADDRESS}`, label: "Email" }
]

function Home() {
  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

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
            borderRadius: isScandinavian ? 1 : 1.2,
            border: "1px solid",
            borderColor: isScandinavian ? tokens.border : "divider",
            bgcolor: isScandinavian
              ? tokens.surface
              : (t => t.palette.mode === "dark" ? "rgba(250,250,250,0.03)" : "rgba(9,9,11,0.025)")
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
              letterSpacing: "0.06em",
              color: isScandinavian ? tokens.mutedInk : "text.secondary"
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
            color: isScandinavian ? tokens.primaryInk : "inherit"
          }}
        >
          Eduardo{" "}
          <Box
            component="span"
            sx={{
              fontFamily: isScandinavian && variant !== "editorial" ? "inherit" : "'Instrument Serif', serif",
              fontStyle: isScandinavian && variant !== "editorial" ? "normal" : "italic",
              fontWeight: 400,
              color: isScandinavian ? tokens.primaryInk : "secondary.main"
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
            letterSpacing: isScandinavian ? "0.08em" : "0.14em",
            textTransform: isScandinavian ? "none" : "uppercase",
            color: isScandinavian ? tokens.mutedInk : "text.secondary"
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
            color: isScandinavian ? tokens.secondaryInk : "text.secondary",
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
              bgcolor: isScandinavian ? tokens.primaryInk : "primary.main",
              color: isScandinavian
                ? tokens.canvas
                : "primary.contrastText",
              paddingInline: 2.5,
              paddingBlock: 1.25,
              fontSize: "0.88rem",
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
            Contáctame
          </Button>

          <Button
            variant="outlined"
            href={`#${dataSection.project.id}`}
            sx={{
              borderColor: isScandinavian ? tokens.border : "divider",
              color: isScandinavian ? tokens.primaryInk : "text.primary",
              paddingInline: 2.5,
              paddingBlock: 1.25,
              fontSize: "0.88rem",
              borderRadius: isScandinavian ? 1 : 999,
              minHeight: 44,
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                bgcolor: isScandinavian ? tokens.hoverFill : (t => t.palette.mode === "dark" ? "rgba(34,211,238,0.06)" : "rgba(8,145,178,0.05)"),
                color: isScandinavian ? tokens.primaryInk : "secondary.main"
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
                  borderColor: isScandinavian ? tokens.border : "divider",
                  color: isScandinavian ? tokens.primaryInk : "text.primary",
                  borderRadius: isScandinavian ? 1 : 999,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: isScandinavian ? tokens.primaryInk : "secondary.main",
                    borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                    transform: isScandinavian ? "none" : "translateY(-2px)",
                    bgcolor: isScandinavian ? tokens.hoverFill : "transparent"
                  },
                  "&:active": {
                    bgcolor: isScandinavian ? tokens.pressedFill : "transparent"
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
        {!isScandinavian && (
          <>
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: -1,
                borderRadius: "50%",
                background: (t) =>
                  t.palette.mode === "dark"
                    ? "linear-gradient(135deg, rgba(34,211,238,0.55), rgba(56,189,248,0.2) 40%, transparent 70%)"
                    : "linear-gradient(135deg, rgba(8,145,178,0.45), rgba(2,132,199,0.15) 40%, transparent 70%)",
                filter: "blur(0.5px)"
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 72,
                height: 72,
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "secondary.main",
                display: { xs: "none", sm: "block" }
              }}
            />
          </>
        )}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: -14,
            left: -14,
            paddingInline: 1.25,
            paddingBlock: 0.5,
            borderRadius: isScandinavian ? 1 : 999,
            border: "1px solid",
            borderColor: isScandinavian ? tokens.border : "divider",
            bgcolor: isScandinavian ? tokens.surface : "background.paper",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: isScandinavian ? tokens.secondaryInk : "text.secondary",
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
            borderRadius: isScandinavian ? (variant === "utilitarian" ? 2 : "50%") : "50%",
            border: "1px solid",
            borderColor: isScandinavian ? tokens.border : "divider",
            boxShadow: isScandinavian
              ? "0 10px 30px -15px rgba(0,0,0,0.3)"
              : "0 40px 80px -40px rgba(0,0,0,0.55)"
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
          color: isScandinavian ? tokens.mutedInk : "text.secondary",
          opacity: isScandinavian ? 1 : 0.7
        }}
      >
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: isScandinavian ? "0.1em" : "0.25em",
            textTransform: isScandinavian ? "none" : "uppercase"
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
