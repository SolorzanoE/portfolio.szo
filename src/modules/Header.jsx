import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, useColorScheme } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import { MenuOutlined } from "@mui/icons-material";
import { dataSection } from "@/data/dataSection";
import Drawer from "@/modules/drawer/Drawer";
import { useState } from "react";
import { useDesignSystem } from "@/context/DesignSystemContext";

function Header() {
  const { mode, setMode, systemMode } = useColorScheme()
  const { tokens } = useDesignSystem()

  const [isOpen, setIsOpen] = useState(false)

  const globalMode = (mode == 'system') ? systemMode : mode

  const toggleMode = () => setMode(globalMode === 'dark' ? 'light' : 'dark')

  const handleCloseDrawer = () => setIsOpen(false)

  const handleOpenDrawer = () => setIsOpen(true)

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: tokens.overlay.header,
        color: tokens.primaryInk,
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        borderBottom: "1px solid",
        borderColor: tokens.border
      }}
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
              color: tokens.primaryInk
            }}
          >
            Solórzano
            <Box
              component="span"
              sx={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: tokens.secondaryInk,
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
            borderColor: tokens.border,
            bgcolor: "transparent"
          }}
        >
          {Object.keys(dataSection).map(key => (
            <Button
              key={key}
              disableRipple
              draggable={false}
              href={`#${dataSection[key].id}`}
              sx={{
                color: tokens.secondaryInk,
                paddingInline: 1.75,
                paddingBlock: 0.6,
                fontSize: "0.82rem",
                fontWeight: 500,
                borderRadius: 1,
                bgcolor: "transparent",
                transition: "color 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  bgcolor: tokens.interactive.navHover,
                  color: tokens.primaryInk
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
              borderColor: tokens.border,
              color: tokens.primaryInk,
              "&:hover": {
                color: tokens.interactive.iconHoverColor,
                borderColor: tokens.strongBorder,
                bgcolor: tokens.hoverFill
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
              borderColor: tokens.border,
              color: tokens.primaryInk,
              "&:hover": {
                color: tokens.interactive.iconHoverColor,
                borderColor: tokens.strongBorder,
                bgcolor: tokens.hoverFill
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
