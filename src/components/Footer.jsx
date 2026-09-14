import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useDesignSystem } from "@/context/DesignSystemContext"

const Footer = () => {
  const { tokens } = useDesignSystem()

  return (
    <Box
      component="footer"
      aria-label="Avisos legales"
      sx={{
        borderTop: "1px solid",
        borderColor: tokens.border,
        paddingBlock: { xs: 2.5, md: 3 }
      }}
    >
      <Typography
        variant="caption"
        sx={{
          display: "block",
          maxWidth: 760,
          marginInline: "auto",
          color: tokens.mutedInk,
          fontSize: tokens.typography.size.micro,
          lineHeight: 1.55,
          letterSpacing: "0.01em",
          textAlign: "center"
        }}
      >
        Vercel, the Vercel design, Next.js and related marks, designs and logos are
        trademarks or registered trademarks of Vercel, Inc. or its affiliates in the
        US and other countries.
      </Typography>
    </Box>
  )
}

export default Footer
