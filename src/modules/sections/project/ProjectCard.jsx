import { Box, Button, Chip, IconButton, Paper, Stack, Typography } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import GitHubIcon from "@mui/icons-material/GitHub"

const ProjectCard = ({ data = {} }) => {
  const {
    title,
    description,
    image,
    technologies = [],
    demoUrl,
    repoUrl
  } = data

  const primaryUrl = demoUrl || repoUrl

  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
        "&:hover": {
          borderColor: "secondary.main",
          transform: "translateY(-4px)",
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 30px 50px -28px rgba(0,0,0,0.65)"
              : "0 24px 44px -22px rgba(8,145,178,0.22)"
        },
        "&:hover .project-cover": {
          transform: "scale(1.05)"
        },
        "&:hover .project-arrow": {
          transform: "translate(3px, -3px)",
          color: "#FAFAFA",
          borderColor: "secondary.main",
          bgcolor: "secondary.main"
        }
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(250,250,250,0.03)"
              : "rgba(9,9,11,0.03)",
          borderBottom: "1px solid",
          borderColor: "divider"
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
              transition: "transform 0.6s ease"
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
              color: "text.secondary",
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "1.5rem",
              transition: "transform 0.6s ease"
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
              textDecoration: "none",
              color: "inherit",
              cursor: primaryUrl ? "pointer" : "default",
              transition: "color 0.2s ease",
              "&:hover": primaryUrl ? {
                color: "secondary.main"
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
              width: 28,
              height: 28,
              border: "1px solid",
              borderColor: "divider",
              color: "text.primary",
              transition: "all 0.3s ease"
            }}
          >
            <ArrowOutwardIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Stack>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.92rem",
            flex: 1,
            lineHeight: 1.6
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
                  borderRadius: 0.7,
                  borderColor: "divider",
                  color: "text.secondary",
                  fontSize: "0.7rem",
                  height: 22
                }}
              />
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: "text.secondary",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
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
                  borderRadius: 999,
                  borderColor: "divider",
                  color: "text.secondary",
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                    color: "secondary.main",
                    bgcolor: (t) =>
                      t.palette.mode === "dark"
                        ? "rgba(34,211,238,0.06)"
                        : "rgba(8,145,178,0.05)"
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
                  borderRadius: 999,
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                  textTransform: "none",
                  transition: "opacity 0.2s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
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
