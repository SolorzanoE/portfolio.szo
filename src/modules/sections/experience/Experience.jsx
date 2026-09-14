import Stack from "@mui/material/Stack"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { dataExperience } from "@/data/dataExperience";
import ExperienceCard from "./ExperienceCard";
import { dataSection } from "@/data/dataSection";
import SectionHeader from "@/components/SectionHeader";
import MotionFade from "@/components/motion/MotionFade";
import { useDesignSystem } from "@/context/DesignSystemContext";

function Experience() {
  const { tokens } = useDesignSystem();

  const sortExperience = [...dataExperience]
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())

  return (
    <Stack
      id={dataSection.experience.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Experiencia" title="Mi" italicWord="trayectoria" />

      <Timeline
        sx={{
          paddingInline: 0,
          margin: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0
          }
        }}
      >
        {sortExperience.map((data, idx) => (
          <TimelineItem key={data.title ?? idx}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: tokens.surface,
                  border: "1px solid",
                  borderColor: tokens.border,
                  boxShadow: "none",
                  width: 14,
                  height: 14,
                  margin: 0,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 3,
                    borderRadius: tokens.layout.radius.circular,
                    bgcolor: tokens.accent.main
                  }
                }}
              />
              {idx < dataExperience.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: tokens.border,
                    width: "1px"
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                paddingInline: { xs: 2, md: 3 },
                paddingBottom: { xs: 4, md: 5 },
                paddingTop: 0
              }}
            >
              <MotionFade delay={idx * 0.08}>
                <ExperienceCard data={data} />
              </MotionFade>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  )
}

export default Experience
