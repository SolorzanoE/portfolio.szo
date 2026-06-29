import { Box, Grid, Stack, Typography } from "@mui/material"
import TechnologyChip from "./TechnologyChip"
import { useState } from "react"
import { dataTechnologies } from "@/data/dataTechnologies"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"

const areas = ["Todos", "Backend", "Frontend", "Mobile", "Database", "Language", "Tool"]

const Technology = () => {
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
        spacing={1.5}
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
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
                transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  borderColor: "secondary.main",
                  transform: "translateY(-3px)",
                  boxShadow: "0 18px 30px -22px rgba(0,0,0,0.5)"
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
                  borderRadius: "50%",
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(243,238,227,0.04)"
                      : "rgba(10,10,10,0.04)",
                  overflow: "hidden"
                }}
              >
                {data.image ? (
                  <Box
                    component="img"
                    src={data.image}
                    alt={data.name}
                    sx={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                      ...(data.invertOnDark && {
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
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.3rem",
                      color: "secondary.main"
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
                  textAlign: "center"
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
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
