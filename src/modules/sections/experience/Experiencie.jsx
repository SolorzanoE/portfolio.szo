import { Stack } from "@mui/material"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { dataExperiencie } from "@/data/dataExperience";
import ExperiencieCard from "./ExperienceCard";
import { dataSection } from "@/data/dataSection";
import SectionHeader from "@/components/SectionHeader";

function Experiencie() {
  const sortExperience = dataExperiencie
    .sort((a, b) => a.date <= (b.date))

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
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "secondary.main",
                  boxShadow: (t) =>
                    `0 0 0 4px ${t.palette.mode === "dark" ? "rgba(34,211,238,0.12)" : "rgba(8,145,178,0.10)"}`,
                  width: 14,
                  height: 14,
                  margin: 0,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 3,
                    borderRadius: "50%",
                    bgcolor: "secondary.main"
                  }
                }}
              />
              {idx < dataExperiencie.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: "divider",
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
              <ExperiencieCard data={data} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  )
}

export default Experiencie
