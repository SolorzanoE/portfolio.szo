import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useDesignSystem } from "@/context/DesignSystemContext"

/** @param {{eyebrow: string, title: string, italicWord?: string, align?: "left"|"center"}} props */
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
            borderRadius: tokens.layout.radius.circular,
            bgcolor: tokens.mutedInk
          }}
        />
        <Typography
          variant="overline"
          sx={{
            letterSpacing: "0.1em",
            fontSize: tokens.typography.size.caption,
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
          fontSize: {
            xs: tokens.typography.size.section.sm,
            sm: tokens.typography.size.section.tablet,
            md: tokens.typography.size.section.md
          },
          fontWeight: 500,
          letterSpacing: "-0.03em",
          color: tokens.primaryInk
        }}
      >
        {title}
        {italicWord && " "}
        {italicWord && (
          <Box
            component="span"
            sx={{
              fontFamily: tokens.typography.family.editorial,
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
