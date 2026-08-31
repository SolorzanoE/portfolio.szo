import Header from "@/modules/Header"
import Home from "@/modules/sections/home/Home"
import { Box, Container } from "@mui/material"
import AboutMe from "@/modules/sections/about-me/AboutMe"
import Experiencie from "@/modules/sections/experience/Experiencie"
import Proyect from "@/modules/sections/project/Project"
import Technology from "./modules/sections/technology/Technology"
import Footer from "@/components/Footer"

function App() {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(900px 600px at 85% -10%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(700px 500px at -10% 40%, rgba(56,189,248,0.08), transparent 60%)"
              : "radial-gradient(900px 600px at 85% -10%, rgba(8,145,178,0.10), transparent 60%), radial-gradient(700px 500px at -10% 40%, rgba(2,132,199,0.06), transparent 60%)"
        },
        "&::after": {
          content: '""',
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: theme.palette.mode === "dark" ? 0.35 : 0.5,
          backgroundImage:
            theme.palette.mode === "dark"
              ? "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)"
              : "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 30%, transparent 80%)"
        }
      })}
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
        <Footer />
      </Container>
    </Box>
  )
}

export default App
