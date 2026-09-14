import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ThemeProvider } from "@mui/material/styles"
import { expect, test } from "vitest"
import { DesignSystemProvider } from "@/context/DesignSystemContext"
import Technology from "@/modules/sections/technology/Technology"
import { theme } from "@/design-system"

const renderTechnology = () => render(
  <ThemeProvider theme={theme} defaultMode="light">
    <DesignSystemProvider>
      <Technology />
    </DesignSystemProvider>
  </ThemeProvider>
)

test("filters the technology cards by area", async () => {
  const user = userEvent.setup()
  renderTechnology()

  expect(screen.getByText("HTML5")).toBeTruthy()

  await user.click(screen.getByRole("button", { name: "Backend" }))

  await waitFor(() => {
    expect(screen.getByText("Spring Boot")).toBeTruthy()
    expect(screen.queryByText("HTML5")).toBeNull()
  })
})
