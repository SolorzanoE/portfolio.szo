import { Box, Button, Chip, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import GitHubIcon from "@mui/icons-material/GitHub"
import { useDesignSystem } from "@/context/DesignSystemContext"

const ProjectCard = ({ data = {} }) => {
  const {
    title,
    description,
    image,
    technologies = [],
    demoUrl,
    repoUrl
  } = data

  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  const primaryUrl = demoUrl || repoUrl

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: isScandinavian ? 1.2 : 2,
        border: "1px solid",
        borderColor: isScandinavian ? tokens.border : "divider",
        bgcolor: isScandinavian ? tokens.surface : "background.paper",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
          transform: isScandinavian ? (variant === "quiet" ? "none" : "translateY(-2px)") : "translateY(-4px)",
          boxShadow: isScandinavian
            ? (theme.palette.mode === "dark" ? "0 14px 30px -18px rgba(0,0,0,0.6)" : "0 10px 25px -15px rgba(0,0,0,0.1)")
            : (t => t.palette.mode === "dark" ? "0 30px 50px -28px rgba(0,0,0,0.65)" : "0 24px 44px -22px rgba(8,145,178,0.22)")
        },
        "&:hover .project-cover": {
          transform: isScandinavian ? "scale(1.02)" : "scale(1.05)"
        },
        "&:hover .project-arrow": {
          transform: isScandinavian ? "translate(2px, -2px)" : "translate(3px, -3px)",
          color: isScandinavian ? tokens.primaryInk : "#FAFAFA",
          borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
          bgcolor: isScandinavian ? tokens.hoverFill : "secondary.main"
        }
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          bgcolor: isScandinavian
            ? tokens.canvas
            : (theme => theme.palette.mode === "dark" ? "rgba(250,250,250,0.03)" : "rgba(9,9,11,0.03)"),
          borderBottom: "1px solid",
          borderColor: isScandinavian ? tokens.border : "divider"
        }}
      >
        {image ? (
          <Box
            component="img"
            className="project-cover"
            src={image}
            alt={title || "Proyecto"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease"
            }}
          />
        ) : (
          <Box
            className="project-cover"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isScandinavian ? tokens.secondaryInk : "text.secondary",
              fontFamily: isScandinavian && variant !== "editorial" ? "inherit" : "'Instrument Serif', serif",
              fontStyle: isScandinavian && variant !== "editorial" ? "normal" : "italic",
              fontSize: "1.4rem",
              transition: "transform 0.5s ease"
            }}
          >
            Vista previa
          </Box>
        )}

      </Box>

      <Stack spacing={1.75} sx={{ padding: { xs: 2.5, md: 3 }, flex: 1 }}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2}>
          <Typography
            component={primaryUrl ? "a" : "h3"}
            href={primaryUrl || undefined}
            target={primaryUrl ? "_blank" : undefined}
            rel={primaryUrl ? "noreferrer" : undefined}
            sx={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              color: isScandinavian ? tokens.primaryInk : "inherit",
              textDecoration: "none",
              cursor: primaryUrl ? "pointer" : "default",
              transition: "opacity 0.2s ease, color 0.2s ease",
              "&:hover": primaryUrl ? {
                color: isScandinavian ? tokens.primaryInk : "secondary.main",
                opacity: 0.8
              } : {}
            }}
          >
            {title || "Título del proyecto"}
          </Typography>

          <IconButton
            className="project-arrow"
            size="small"
            href={demoUrl || "#"}
            target={demoUrl ? "_blank" : undefined}
            rel={demoUrl ? "noreferrer" : undefined}
            aria-label="Abrir proyecto"
            sx={{
              flexShrink: 0,
              display: demoUrl ? "inherit" : "none",
              width: { xs: 36, sm: 32 },
              height: { xs: 36, sm: 32 },
              border: "1px solid",
              borderColor: isScandinavian ? tokens.border : "divider",
              color: isScandinavian ? tokens.primaryInk : "text.primary",
              borderRadius: isScandinavian ? 0.8 : "50%",
              transition: "all 0.25s ease"
            }}
          >
            <ArrowOutwardIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>

        <Typography
          sx={{
            color: isScandinavian ? tokens.secondaryInk : "text.secondary",
            fontSize: "0.92rem",
            flex: 1,
            lineHeight: 1.65
          }}
        >
          {description || "Breve descripción del proyecto, el problema que resuelve y tu rol en él."}
        </Typography>

        <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ paddingTop: 1 }}>
          {technologies.length > 0 ? (
            technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: isScandinavian ? 0.8 : 0.7,
                  borderColor: isScandinavian ? tokens.border : "divider",
                  color: isScandinavian ? tokens.mutedInk : "text.secondary",
                  bgcolor: isScandinavian ? tokens.washFill : "transparent",
                  fontSize: "0.7rem",
                  height: 22,
                  transition: "all 0.2s ease",
                  "&:hover": isScandinavian ? {
                    borderColor: tokens.strongBorder,
                    bgcolor: tokens.hoverFill,
                    color: tokens.primaryInk
                  } : {}
                }}
              />
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: isScandinavian ? tokens.mutedInk : "text.secondary",
                letterSpacing: isScandinavian ? "0.06em" : "0.12em",
                textTransform: isScandinavian ? "none" : "uppercase"
              }}
            >
              Tecnologías
            </Typography>
          )}
        </Stack>

        {(demoUrl || repoUrl) && (
          <Stack direction="row" spacing={1} sx={{ paddingTop: 1 }}>
            {repoUrl && (
              <Button
                size="small"
                variant="outlined"
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                sx={{
                  fontSize: "0.75rem",
                  py: 0.6,
                  px: 1.5,
                  minHeight: 36,
                  borderRadius: isScandinavian ? 0.8 : 999,
                  borderColor: isScandinavian ? tokens.border : "divider",
                  color: isScandinavian ? tokens.secondaryInk : "text.secondary",
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                    color: isScandinavian ? tokens.primaryInk : "secondary.main",
                    bgcolor: isScandinavian ? tokens.hoverFill : (t => t.palette.mode === "dark" ? "rgba(34,211,238,0.06)" : "rgba(8,145,178,0.05)")
                  }
                }}
              >
                Ver código
              </Button>
            )}
            {demoUrl && (
              <Button
                size="small"
                variant="contained"
                disableElevation
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                endIcon={<ArrowOutwardIcon sx={{ fontSize: 14 }} />}
                sx={{
                  fontSize: "0.75rem",
                  py: 0.6,
                  px: 1.5,
                  minHeight: 36,
                  borderRadius: isScandinavian ? 0.8 : 999,
                  bgcolor: isScandinavian ? tokens.primaryInk : "primary.main",
                  color: isScandinavian ? tokens.canvas : "primary.contrastText",
                  textTransform: "none",
                  transition: "opacity 0.2s ease",
                  "&:hover": {
                    bgcolor: isScandinavian ? tokens.primaryInk : "primary.main",
                    opacity: 0.88
                  }
                }}
              >
                Demo en vivo
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Paper>
  )
}

export default ProjectCard
