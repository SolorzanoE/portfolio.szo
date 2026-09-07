import { Box, Stack, Typography, useTheme } from "@mui/material"
import { useDesignSystem } from "@/context/DesignSystemContext"

const SectionHeader = ({ eyebrow, title, italicWord, align = "left" }) => {
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const theme = useTheme()
  const tokens = getTokens(theme.palette.mode)
  const isCenter = align === "center"

  if (isScandinavian) {
    return (
      <Stack
        spacing={{ xs: 1.5, md: 2 }}
        sx={{
          alignItems: isCenter ? "center" : "flex-start",
          textAlign: isCenter ? "center" : "left",
          marginBottom: { xs: 5, md: 7 },
          pb: variant === "editorial" ? 2 : 0,
          borderBottom: variant === "editorial" ? `1px solid ${tokens.border}` : "none"
        }}
      >
        <Stack
          direction="row"
          spacing={1.25}
          alignItems="center"
          sx={{ color: tokens.mutedInk }}
        >
          {variant === "utilitarian" ? (
            <Box
              sx={{
                width: 6,
                height: 6,
                bgcolor: tokens.primaryInk
              }}
            />
          ) : (
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: tokens.mutedInk
              }}
            />
          )}
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.1em",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: tokens.mutedInk,
              textTransform: "none"
            }}
          >
            {eyebrow}
          </Typography>
        </Stack>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: tokens.primaryInk
          }}
        >
          {title}
          {italicWord && (
            <Box
              component="span"
              sx={{
                fontFamily: variant === "editorial" ? "'Instrument Serif', serif" : "inherit",
                fontStyle: variant === "editorial" ? "italic" : "normal",
                fontWeight: variant === "editorial" ? 400 : 500,
                color: tokens.primaryInk,
                paddingLeft: "0.25em"
              }}
            >
              {italicWord}
            </Box>
          )}
        </Typography>
      </Stack>
    )
  }

  return (
    <Stack
      spacing={{ xs: 2, md: 2.5 }}
      sx={{
        alignItems: isCenter ? "center" : "flex-start",
        textAlign: isCenter ? "center" : "left",
        marginBottom: { xs: 5, md: 8 }
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ color: "secondary.main" }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "secondary.main",
            boxShadow: (theme) =>
              `0 0 0 4px ${theme.palette.mode === "dark" ? "rgba(34,211,238,0.15)" : "rgba(8,145,178,0.12)"}`
          }}
        />
        <Typography variant="overline">{eyebrow}</Typography>
      </Stack>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
          fontWeight: 500
        }}
      >
        {title}
        {italicWord && (
          <Box
            component="span"
            sx={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "secondary.main",
              paddingLeft: "0.25em"
            }}
          >
            {italicWord}
          </Box>
        )}
      </Typography>
    </Stack>
  )
}

export default SectionHeader
