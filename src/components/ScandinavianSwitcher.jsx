import { useState } from "react"
import { Box, Button, Chip, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material"
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { useDesignSystem } from "@/context/DesignSystemContext"

const variants = [
  { id: "quiet", label: "Quiet", desc: "Espaciosa, sobria y serena" },
  { id: "editorial", label: "Editorial", desc: "Contraste tipográfico nítido" },
  { id: "utilitarian", label: "Utilitarian", desc: "Densidad funcional y claridad" }
]

const ScandinavianSwitcher = () => {
  const { isScandinavian, variant, toggleScandinavian, setVariant, getTokens } = useDesignSystem()
  const theme = useTheme()
  const tokens = getTokens(theme.palette.mode)
  const [collapsed, setCollapsed] = useState(false)

  if (collapsed) {
    return (
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999
        }}
      >
        <IconButton
          onClick={() => setCollapsed(false)}
          size="medium"
          aria-label="Abrir switcher escandinavo"
          sx={{
            bgcolor: isScandinavian ? tokens.primaryInk : "background.paper",
            color: isScandinavian ? tokens.canvas : "text.primary",
            border: "1px solid",
            borderColor: isScandinavian ? "transparent" : "divider",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            "&:hover": {
              bgcolor: isScandinavian ? tokens.primaryInk : "background.paper",
              transform: "scale(1.05)"
            }
          }}
        >
          <AutoAwesomeOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
    )
  }

  return (
    <Paper
      elevation={0}
      sx={{
        position: "fixed",
        bottom: { xs: 16, sm: 24 },
        right: { xs: 16, sm: 24 },
        zIndex: 9999,
        maxWidth: { xs: "calc(100vw - 32px)", sm: 360 },
        padding: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: isScandinavian ? tokens.border : "divider",
        bgcolor: isScandinavian ? tokens.surface : "background.paper",
        boxShadow: "0 20px 45px -15px rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease"
      }}
    >
      <Stack spacing={1.5}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <AutoAwesomeOutlinedIcon sx={{ fontSize: 18, color: isScandinavian ? tokens.primaryInk : "secondary.main" }} />
            <Typography
              sx={{
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: isScandinavian ? tokens.primaryInk : "text.primary"
              }}
            >
              Test: Scandinavian Design
            </Typography>
          </Stack>
          <IconButton
            size="small"
            onClick={() => setCollapsed(true)}
            aria-label="Minimizar panel"
            sx={{
              color: isScandinavian ? tokens.mutedInk : "text.secondary",
              width: 24,
              height: 24
            }}
          >
            <CloseOutlinedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant={!isScandinavian ? "contained" : "outlined"}
            onClick={() => isScandinavian && toggleScandinavian()}
            sx={{
              flex: 1,
              fontSize: "0.75rem",
              py: 0.6,
              borderRadius: 1,
              textTransform: "none",
              bgcolor: !isScandinavian ? "primary.main" : "transparent",
              color: !isScandinavian ? "primary.contrastText" : tokens.secondaryInk,
              borderColor: isScandinavian ? tokens.border : "divider",
              "&:hover": {
                borderColor: isScandinavian ? tokens.strongBorder : "text.primary"
              }
            }}
          >
            Original
          </Button>
          <Button
            size="small"
            variant={isScandinavian ? "contained" : "outlined"}
            onClick={() => !isScandinavian && toggleScandinavian()}
            sx={{
              flex: 1,
              fontSize: "0.75rem",
              py: 0.6,
              borderRadius: 1,
              textTransform: "none",
              bgcolor: isScandinavian ? tokens.primaryInk : "transparent",
              color: isScandinavian ? tokens.canvas : "text.secondary",
              borderColor: isScandinavian ? tokens.primaryInk : "divider",
              "&:hover": {
                borderColor: "text.primary"
              }
            }}
          >
            Escandinavo
          </Button>
        </Stack>

        {isScandinavian && (
          <Stack spacing={1} sx={{ pt: 0.5, borderTop: "1px solid", borderColor: tokens.border }}>
            <Typography
              sx={{
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                textTransform: "none",
                color: tokens.secondaryInk,
                fontWeight: 600
              }}
            >
              Ejes nórdicos:
            </Typography>
            <Stack direction="row" spacing={0.75}>
              {variants.map((v) => {
                const isSelected = variant === v.id
                return (
                  <Chip
                    key={v.id}
                    label={v.label}
                    size="small"
                    clickable
                    onClick={() => setVariant(v.id)}
                    sx={{
                      borderRadius: 1,
                      fontSize: "0.72rem",
                      bgcolor: isSelected ? tokens.primaryInk : "transparent",
                      color: isSelected
                        ? tokens.canvas
                        : tokens.secondaryInk,
                      border: "1px solid",
                      borderColor: isSelected ? tokens.primaryInk : tokens.border,
                      transition: "all 0.2s ease"
                    }}
                  />
                )
              })}
            </Stack>
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: tokens.mutedInk,
                fontStyle: "italic",
                lineHeight: 1.3
              }}
            >
              {variants.find((v) => v.id === variant)?.desc}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Paper>
  )
}

export default ScandinavianSwitcher
