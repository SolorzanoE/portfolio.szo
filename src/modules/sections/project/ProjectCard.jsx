import { Box, Button, Chip, IconButton, Paper, Stack, Typography } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import GitHubIcon from "@mui/icons-material/GitHub"
import { useDesignSystem } from "@/context/DesignSystemContext"

const ProjectCard = ({ data = {} }) => {
  const {
    title,
    description,
    image,
    imageFit = "cover",
    technologies = [],
    demoUrl,
    repoUrl
  } = data

  const { tokens } = useDesignSystem()
  const primaryUrl = demoUrl || repoUrl
  const isContainedImage = imageFit === "contain"

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 1.2,
        border: "1px solid",
        borderColor: tokens.border,
        bgcolor: tokens.surface,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          borderColor: tokens.strongBorder,
          transform: "translateY(-2px)",
          boxShadow: tokens.shadows.projectHover
        },
        "&:hover .project-cover": {
          transform: "scale(1.02)"
        },
        "&:hover .project-arrow": {
          transform: "translate(2px, -2px)",
          color: tokens.primaryInk,
          borderColor: tokens.strongBorder,
          bgcolor: tokens.hoverFill
        }
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          bgcolor: tokens.surfaceSubtle,
          borderBottom: "1px solid",
          borderColor: tokens.border,
          ...(isContainedImage && {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -24,
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "blur(18px)",
              opacity: 0.42,
              transform: "scale(1.08)",
              zIndex: 0
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: tokens.surfaceSubtle,
              opacity: 0.18,
              zIndex: 0
            }
          })
        }}
      >
        {image ? (
          <Box
            component="img"
            className="project-cover"
            src={image}
            alt={title || "Proyecto"}
            loading="lazy"
            decoding="async"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: imageFit,
              position: isContainedImage ? "relative" : "static",
              zIndex: isContainedImage ? 1 : "auto",
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
              color: tokens.secondaryInk,
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
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
              color: tokens.primaryInk,
              textDecoration: "none",
              cursor: primaryUrl ? "pointer" : "default",
              transition: "opacity 0.2s ease, color 0.2s ease",
              "&:hover": primaryUrl ? {
                color: tokens.primaryInk,
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
              borderColor: tokens.border,
              color: tokens.primaryInk,
              borderRadius: 0.8,
              transition: "all 0.25s ease"
            }}
          >
            <ArrowOutwardIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>

        <Typography
          sx={{
            color: tokens.secondaryInk,
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
                  borderRadius: 0.8,
                  borderColor: tokens.border,
                  color: tokens.mutedInk,
                  bgcolor: tokens.washFill,
                  fontSize: "0.7rem",
                  height: 22,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: tokens.strongBorder,
                    bgcolor: tokens.hoverFill,
                    color: tokens.primaryInk
                  }
                }}
              />
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: tokens.mutedInk,
                letterSpacing: "0.06em",
                textTransform: "none"
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
                  borderRadius: 0.8,
                  borderColor: tokens.border,
                  color: tokens.secondaryInk,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: tokens.strongBorder,
                    color: tokens.primaryInk,
                    bgcolor: tokens.hoverFill
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
                  borderRadius: 0.8,
                  bgcolor: tokens.accent.main,
                  color: tokens.accent.contrast,
                  textTransform: "none",
                  transition: "opacity 0.2s ease",
                  "&:hover": {
                    bgcolor: tokens.accent.main,
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
