import { dataSection } from "@/data/dataSection"
import { Box, IconButton, List, ListItemButton, Stack, Typography, useTheme } from "@mui/material"
import CloseIcon from "@mui/icons-material/CloseOutlined"
import DrawerLayout from "@mui/material/Drawer"
import { useDesignSystem } from "@/context/DesignSystemContext"

const Drawer = ({ open, close }) => {
  const theme = useTheme()
  const { isScandinavian, getTokens } = useDesignSystem()
  const tokens = getTokens(theme.palette.mode)

  return (
    <DrawerLayout
      open={open}
      onClose={close}
      anchor="right"
      slotProps={{
        paper: {
          sx: {
            width: { xs: "85vw", sm: 340 },
            bgcolor: isScandinavian ? tokens.canvas : "background.default",
            borderLeft: "1px solid",
            borderColor: isScandinavian ? tokens.border : "divider",
            backgroundImage: "none"
          }
        }
      }}
    >
      <Stack
        spacing={4}
        sx={{
          paddingInline: 3,
          paddingBlock: 3,
          height: "100%"
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: isScandinavian ? tokens.secondaryInk : "secondary.main"
              }}
            />
            <Typography variant="overline" sx={{ color: isScandinavian ? tokens.secondaryInk : "text.secondary", textTransform: isScandinavian ? "none" : "uppercase" }}>
              Navegación
            </Typography>
          </Stack>
          <IconButton
            size="small"
            onClick={close}
            aria-label="Cerrar"
            sx={{
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: isScandinavian ? tokens.border : "divider",
              color: isScandinavian ? tokens.primaryInk : "text.primary",
              "&:hover": {
                bgcolor: isScandinavian ? tokens.hoverFill : "transparent",
                borderColor: isScandinavian ? tokens.strongBorder : "secondary.main"
              }
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <List sx={{ padding: 0 }}>
          {Object.keys(dataSection).map((key, idx) => (
            <ListItemButton
              key={key}
              draggable={false}
              href={`#${dataSection[key].id}`}
              onClick={close}
              disableRipple
              sx={{
                paddingInline: 0,
                paddingBlock: 2,
                borderBottom: "1px solid",
                borderColor: isScandinavian ? tokens.border : "divider",
                transition: "padding-left 0.25s ease, color 0.25s ease",
                "&:hover": {
                  bgcolor: "transparent",
                  color: isScandinavian ? tokens.primaryInk : "secondary.main",
                  paddingLeft: 1
                }
              }}
            >
              <Stack direction="row" spacing={2} alignItems="baseline" sx={{ width: "100%" }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: isScandinavian ? tokens.mutedInk : "text.secondary",
                    fontSize: "0.75rem"
                  }}
                >
                  0{idx + 1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: isScandinavian ? tokens.primaryInk : "inherit"
                  }}
                >
                  {dataSection[key].name}
                </Typography>
              </Stack>
            </ListItemButton>
          ))}
        </List>
      </Stack>
    </DrawerLayout>
  )
}

export default Drawer
