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
  const { isScandinavian, tokens } = useDesignSystem()

  return (
    <Box
      className={isScandinavian ? "scandinavian-mode" : ""}
      sx={{
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        bgcolor: tokens.canvas,
        color: tokens.primaryInk,
        transition: "background-color 0.4s ease, color 0.4s ease",
        "&::before": isScandinavian ? {} : {
          content: '""',
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: tokens.gradients.heroBackground
        },
        "&::after": isScandinavian ? {} : {
          content: '""',
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: tokens.gradients.gridOpacity,
          backgroundImage: tokens.gradients.gridPattern,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 30%, transparent 80%)"
        }
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
