import { RouterProvider } from "@tanstack/react-router"
import { cleanup, render, screen, within } from "@testing-library/react"
import { afterEach, expect, it, vi } from "vitest"
import { getRouter } from "#/router"

// The root shell mounts TanStackDevtools, whose unmount crashes in jsdom
// ("Devtools is not mounted"). Devtools are irrelevant to routing, so stub them.
vi.mock("@tanstack/react-devtools", () => ({
  TanStackDevtools: () => null,
}))

afterEach(cleanup)

// Regression: /projects/forgekit-mcp was once nested under a /projects layout
// route with no <Outlet />, so the catalog grid swallowed the detail page —
// and a later generator race left a phantom parent that 404'd it entirely.
// This test drives the REAL generated route tree (routeTree.gen.ts) through
// the production router factory, so a future route restructure cannot
// silently break the ForgeKit detail page again.
it("renders the ForgeKit detail page at /projects/forgekit-mcp", async () => {
  window.history.pushState({}, "", "/projects/forgekit-mcp")
  const router = getRouter()
  render(<RouterProvider router={router} />)

  const main = await screen.findByRole("main")
  expect(within(main).getByRole("heading", { level: 1 }).textContent).toContain("ForgeKit MCP")
  expect(
    within(main)
      .getByRole("link", { name: /Back to Work/ })
      .getAttribute("href"),
  ).toBe("/work")
  expect(
    within(main)
      .getByRole("link", { name: /forgekit\.cloud/ })
      .getAttribute("href"),
  ).toBe("https://forgekit.cloud")

  // The /projects catalog must not swallow the detail page.
  expect(document.body.textContent).not.toContain("Everything I've")
})
