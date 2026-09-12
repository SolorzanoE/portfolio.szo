import Header from "@/modules/Header"
import Home from "@/modules/sections/home/Home"
import { Box, Container } from "@mui/material"
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
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          paddingBlock: { xs: 2, md: 4 },
          paddingInline: { xs: 2.5, sm: 4, md: 6 }
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
