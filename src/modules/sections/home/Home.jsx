import { dataSection } from "@/data/dataSection"
import { EmailOutlined, GitHub, LinkedIn, ArrowDownward, ArrowOutward } from "@mui/icons-material"
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"
import profile from "@/assets/profile.png"

const links = [
  { icon: <GitHub fontSize="small" />, link: GITHUB_URL, label: "GitHub" },
  { icon: <LinkedIn fontSize="small" />, link: LINKEDIN_URL, label: "LinkedIn" },
  { icon: <EmailOutlined fontSize="small" />, link: `mailto:${EMAIL_ADDRESS}`, label: "Email" }
]

function Home() {
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
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            alignSelf: "flex-start",
            paddingInline: 1.5,
            paddingBlock: 0.75,
            borderRadius: 1.2,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: (t) =>
              t.palette.mode === "dark"
                ? "rgba(250,250,250,0.03)"
                : "rgba(9,9,11,0.025)"
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: "success.main",
              animation: "pulseDot 2s ease-in-out infinite"
            }}
          />
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
              color: "text.secondary"
            }}
          >
            Disponible para nuevos proyectos
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.75rem", sm: "3.75rem", md: "5rem", lg: "5.75rem" },
            fontWeight: 500
          }}
        >
          Eduardo{" "}
          <Box
            component="span"
            sx={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "secondary.main"
            }}
          >
            Solórzano
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: { xs: "0.78rem", md: "0.85rem" },
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "text.secondary"
          }}
        >
          Full Stack Engineer
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: 560,
            lineHeight: 1.65
          }}
        >
          Ingeniero de Software apasionado por la tecnología y los modelos de negocio, 
          siempre dispuesto a enfrentar nuevos retos, buscando soluciones óptimas y escalables.
        </Typography>

        <Stack
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
              bgcolor: "primary.main",
              color: "primary.contrastText",
              paddingInline: 2.5,
              paddingBlock: 1.25,
              fontSize: "0.88rem",
              "&:hover": {
                bgcolor: "primary.main",
                opacity: 0.92
              }
            }}
          >
            Contáctame
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
                  width: 42,
                  height: 42,
                  border: "1px solid",
                  borderColor: "divider",
                  color: "text.primary",
                  borderRadius: 999,
                  "&:hover": {
                    color: "secondary.main",
                    borderColor: "secondary.main",
                    transform: "translateY(-2px)",
                    bgcolor: "transparent"
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
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: -14,
            left: -14,
            paddingInline: 1.25,
            paddingBlock: 0.5,
            borderRadius: 999,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: "text.secondary",
            display: { xs: "none", sm: "inline-flex" }
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
            borderColor: "divider",
            boxShadow: "0 40px 80px -40px rgba(0,0,0,0.55)"
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
          color: "text.secondary",
          opacity: 0.7
        }}
      >
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase"
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
