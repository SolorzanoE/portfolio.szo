import { Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import TechnologyChip from "./TechnologyChip"
import { useState } from "react"
import { dataTechnologies } from "@/data/dataTechnologies"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"
import { useDesignSystem } from "@/context/DesignSystemContext"

const areas = [
  "Todos", "Backend", "Frontend", 
  "Mobile", "Database", "Service", 
  "Language", "Tool"
]

const Technology = () => {
  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)
  const [selectedChip, setSelectedChip] = useState("Todos")

  const handleClick = (item) => setSelectedChip(item)

  const filterTechnology = dataTechnologies
    .filter(data => selectedChip === "Todos" ? true : data.area === selectedChip)

  return (
    <Stack
      id={dataSection.technology.id}
      sx={{
        paddingBlock: { xs: 8, md: 12 }
      }}
    >
      <SectionHeader eyebrow="Tecnologías" title="Stack tecnológico" />

      <Stack
        direction="row"
        spacing={1.25}
        flexWrap="wrap"
        useFlexGap
        sx={{ marginBottom: { xs: 4, md: 6 } }}
      >
        {areas.map(area => (
          <TechnologyChip
            key={area}
            label={area}
            onClick={() => handleClick(area)}
            selected={selectedChip === area}
          />
        ))}
      </Stack>

      <Grid
        container
        columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
        spacing={{ xs: 2, md: 3 }}
      >
        {filterTechnology.map((data) => (
          <Grid key={data.name} size={1}>
            <Stack
              spacing={1.5}
              alignItems="center"
              sx={{
                paddingBlock: 3,
                paddingInline: 2,
                height: "100%",
                borderRadius: isScandinavian ? 0.8 : 1,
                border: "1px solid",
                borderColor: isScandinavian ? tokens.border : "divider",
                bgcolor: isScandinavian ? tokens.surface : "background.paper",
                transition: "border-color 0.2s ease, transform 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                  bgcolor: isScandinavian
                    ? (theme.palette.mode === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.015)")
                    : "background.paper",
                  transform: isScandinavian ? (variant === "quiet" ? "none" : "translateY(-2px)") : "translateY(-3px)",
                  boxShadow: isScandinavian
                    ? (theme.palette.mode === "dark" ? "none" : "0 8px 20px -12px rgba(0,0,0,0.08)")
                    : "0 18px 30px -22px rgba(0,0,0,0.5)"
                }
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: isScandinavian ? 1 : "50%",
                  bgcolor: isScandinavian
                    ? tokens.hoverFill
                    : (theme =>
                        theme.palette.mode === "dark"
                          ? "rgba(243,238,227,0.04)"
                          : "rgba(10,10,10,0.04)"),
                  overflow: "hidden"
                }}
              >
                {data.image ? (
                  <Box
                    component="img"
                    src={theme.palette.mode === "dark" && data.imageDark
                      ? data.imageDark
                      : data.image}
                    alt={data.name}
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                      ...(data.invertOnDark && !data.imageDark && {
                        filter: (theme) =>
                          theme.palette.mode === "dark"
                            ? "invert(1) brightness(1.8)"
                            : "none"
                      })
                    }}
                  />
                ) : (
                  <Typography
                    sx={{
                      fontFamily: isScandinavian ? "'Inter Tight', sans-serif" : "'Cormorant Garamond', serif",
                      fontStyle: isScandinavian ? "normal" : "italic",
                      fontSize: "1.3rem",
                      fontWeight: isScandinavian ? 600 : 400,
                      color: isScandinavian ? tokens.secondaryInk : "secondary.main"
                    }}
                  >
                    {data.name?.charAt(0) ?? "·"}
                  </Typography>
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  textAlign: "center",
                  color: isScandinavian ? tokens.primaryInk : "inherit"
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: isScandinavian ? tokens.mutedInk : "text.secondary",
                  letterSpacing: isScandinavian ? "0.08em" : "0.15em",
                  textTransform: isScandinavian ? "none" : "uppercase",
                  fontSize: "0.65rem"
                }}
              >
                {data.area}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Technology
