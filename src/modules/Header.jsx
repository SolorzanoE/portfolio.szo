import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, useColorScheme, useTheme } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import { MenuOutlined } from "@mui/icons-material";
import { dataSection } from "@/data/dataSection";
import Drawer from "@/modules/drawer/Drawer";
import { useState } from "react";
import { useDesignSystem } from "@/context/DesignSystemContext";

function Header() {
  const { mode, setMode, systemMode } = useColorScheme()
  const theme = useTheme()
  const { isScandinavian, variant, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  const [isOpen, setIsOpen] = useState(false)

  const globalMode = (mode == 'system') ? systemMode : mode

  const toggleMode = () => setMode(globalMode === 'dark' ? 'light' : 'dark')

  const handleCloseDrawer = () => setIsOpen(false)

  const handleOpenDrawer = () => setIsOpen(true)

  return (
    <AppBar
      elevation={0}
      sx={(theme) => ({
        bgcolor: isScandinavian
          ? (theme.palette.mode === "dark" ? "rgba(10, 10, 10, 0.85)" : "rgba(255, 255, 255, 0.85)")
          : (theme.palette.mode === "dark" ? "rgba(9, 9, 11, 0.65)" : "rgba(250, 250, 250, 0.72)"),
        color: isScandinavian ? tokens.primaryInk : "text.primary",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        borderBottom: "1px solid",
        borderColor: isScandinavian ? tokens.border : "divider"
      })}
    >
      <Drawer open={isOpen} close={handleCloseDrawer} />
      <Toolbar
        sx={{
          paddingInline: { xs: 2.5, sm: 4, md: 6 },
          paddingBlock: 1,
          justifyContent: "space-between",
          minHeight: { xs: 62, md: 72 },
          gap: 2
        }}
      >
        <Stack direction="row" spacing={1.2} alignItems="center">
          <Box
            component="img"
            src={globalMode === "dark" ? "/brand-icon-dark.svg" : "/brand-icon-light.svg"}
            alt="szo"
            sx={{
              width: 28,
              height: 28,
              borderRadius: "8px",
              display: "block"
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              letterSpacing: "-0.02em",
              color: isScandinavian ? tokens.primaryInk : "inherit"
            }}
          >
            Solórzano
            <Box
              component="span"
              sx={{
                fontFamily: isScandinavian && variant !== "editorial" ? "'Inter Tight', sans-serif" : "'Instrument Serif', serif",
                fontStyle: isScandinavian && variant !== "editorial" ? "normal" : "italic",
                fontWeight: isScandinavian ? 600 : 800,
                color: isScandinavian ? tokens.secondaryInk : "secondary.main",
                marginLeft: "0.2em"
              }}
            >
              .szo
            </Box>
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={0.25}
          sx={{
            display: { xs: "none", md: "flex" },
            padding: "4px",
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: isScandinavian ? tokens.border : "divider",
            bgcolor: (t) =>
              isScandinavian
                ? "transparent"
                : (t.palette.mode === "dark"
                    ? "rgba(250,250,250,0.02)"
                    : "rgba(9,9,11,0.02)")
          }}
        >
          {Object.keys(dataSection).map(key => (
            <Button
              key={key}
              disableRipple
              draggable={false}
              href={`#${dataSection[key].id}`}
              sx={{
                color: isScandinavian ? tokens.secondaryInk : "text.secondary",
                paddingInline: 1.75,
                paddingBlock: 0.6,
                fontSize: "0.82rem",
                fontWeight: 500,
                borderRadius: isScandinavian ? 1 : 999,
                bgcolor: "transparent",
                transition: "color 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  bgcolor: isScandinavian ? tokens.hoverFill : (t => t.palette.mode === "dark" ? "rgba(250,250,250,0.06)" : "rgba(9,9,11,0.05)"),
                  color: isScandinavian ? tokens.primaryInk : "text.primary"
                }
              }}
            >
              {dataSection[key].name}
            </Button>
          ))}
        </Stack>

        <Stack direction="row" spacing={0.5} alignItems="center">
          <IconButton
            onClick={toggleMode}
            size="small"
            aria-label="Cambiar tema"
            sx={{
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: isScandinavian ? tokens.border : "divider",
              color: isScandinavian ? tokens.primaryInk : "text.primary",
              "&:hover": {
                color: isScandinavian ? tokens.primaryInk : "secondary.main",
                borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                bgcolor: isScandinavian ? tokens.hoverFill : "transparent"
              }
            }}
          >
            {globalMode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </IconButton>
          <IconButton
            onClick={handleOpenDrawer}
            aria-label="Menú"
            sx={{
              display: { xs: "inherit", md: "none" },
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: isScandinavian ? tokens.border : "divider",
              color: isScandinavian ? tokens.primaryInk : "text.primary",
              "&:hover": {
                color: isScandinavian ? tokens.primaryInk : "secondary.main",
                borderColor: isScandinavian ? tokens.strongBorder : "secondary.main",
                bgcolor: isScandinavian ? tokens.hoverFill : "transparent"
              }
            }}
          >
            <MenuOutlined fontSize="small" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
