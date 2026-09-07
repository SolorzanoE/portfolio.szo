import { dataProject } from "@/data/dataProject"
import { Grid, Stack } from "@mui/material"
import ProjectCard from "./ProjectCard"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"
import MotionFade from "@/components/motion/MotionFade"

const Project = () => {
  return (
    <Stack
      id={dataSection.project.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Proyectos" title="Trabajos" italicWord="realizados" />

      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        {dataProject.map((data, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={data.title ?? idx}>
            <MotionFade delay={idx * 0.1}>
              <ProjectCard data={data} />
            </MotionFade>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Project
