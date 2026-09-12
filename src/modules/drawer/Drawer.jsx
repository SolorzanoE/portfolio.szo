import { dataSection } from "@/data/dataSection"
import { Box, IconButton, List, ListItemButton, Stack, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/CloseOutlined"
import DrawerLayout from "@mui/material/Drawer"
import { useDesignSystem } from "@/context/DesignSystemContext"

const Drawer = ({ open, close }) => {
  const { tokens } = useDesignSystem()

  return (
    <DrawerLayout
      open={open}
      onClose={close}
      anchor="right"
      slotProps={{
        paper: {
          sx: {
            width: { xs: "85vw", sm: 340 },
            bgcolor: tokens.canvas,
            borderLeft: "1px solid",
            borderColor: tokens.border,
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
                bgcolor: tokens.secondaryInk
              }}
            />
            <Typography
              variant="overline"
              sx={{
                color: tokens.secondaryInk,
                textTransform: "none"
              }}
            >
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
              borderColor: tokens.border,
              color: tokens.primaryInk,
              "&:hover": {
                bgcolor: tokens.hoverFill,
                borderColor: tokens.strongBorder
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
                borderColor: tokens.border,
                transition: "padding-left 0.25s ease, color 0.25s ease",
                "&:hover": {
                  bgcolor: "transparent",
                  color: tokens.primaryInk,
                  paddingLeft: 1
                }
              }}
            >
              <Stack direction="row" spacing={2} alignItems="baseline" sx={{ width: "100%" }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: tokens.mutedInk,
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
                    color: tokens.primaryInk
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
