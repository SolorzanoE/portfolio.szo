import { Box, Stack, Typography } from "@mui/material"
import { useDesignSystem } from "@/context/DesignSystemContext"

const SectionHeader = ({ eyebrow, title, italicWord, align = "left" }) => {
  const { tokens } = useDesignSystem()
  const isCenter = align === "center"

  return (
    <Stack
      spacing={{ xs: 1.5, md: 2 }}
      sx={{
        alignItems: isCenter ? "center" : "flex-start",
        textAlign: isCenter ? "center" : "left",
        marginBottom: { xs: 5, md: 7 },
        pb: 2,
        borderBottom: `1px solid ${tokens.border}`
      }}
    >
      <Stack
        direction="row"
        spacing={1.25}
        alignItems="center"
        sx={{ color: tokens.mutedInk }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: tokens.mutedInk
          }}
        />
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
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
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

export default SectionHeader
