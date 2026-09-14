import Header from "@/modules/Header"
import Home from "@/modules/sections/home/Home"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import AboutMe from "@/modules/sections/about-me/AboutMe"
import Experiencie from "@/modules/sections/experience/Experiencie"
import Proyect from "@/modules/sections/project/Project"
import Technology from "./modules/sections/technology/Technology"
import Contact from "@/modules/sections/contact/Contact"
import Footer from "@/components/Footer"
import { useDesignSystem } from "@/context/DesignSystemContext"

function App() {
  const { tokens } = useDesignSystem()

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        bgcolor: tokens.canvas,
        color: tokens.primaryInk,
        transition: `background-color ${tokens.layout.motion.slow}, color ${tokens.layout.motion.slow}`,
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          paddingBlock: { xs: 2, md: 4 },
          paddingInline: {
            xs: tokens.layout.spacing.content.mobile,
            sm: tokens.layout.spacing.content.tablet,
            md: tokens.layout.spacing.content.desktop
          }
        }}
      >
        <Home />
        <AboutMe />
        <Experiencie />
        <Proyect />
        <Technology />
        <Contact />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
