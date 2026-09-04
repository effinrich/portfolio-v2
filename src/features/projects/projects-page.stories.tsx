import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { expect, within } from "storybook/test"
import { PROJECTS } from "#/features/content/seed-data"
import { ProjectsPage } from "./projects-page"

const meta: Meta<typeof ProjectsPage> = {
  title: "Pages/Projects",
  component: ProjectsPage,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof ProjectsPage>

export const Default: Story = {
  args: { projects: PROJECTS },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Everything I've built/,
    )
    await Promise.all(
      PROJECTS.map((project) => expect(canvas.getByText(project.title)).toBeInTheDocument()),
    )
    // Every card in the catalog renders artwork, including non-featured projects.
    await expect(canvas.getAllByRole("img").length).toBe(PROJECTS.length)
    await expect(canvas.getByRole("link", { name: "Discuss a project" })).toHaveAttribute(
      "href",
      "/contact",
    )
  },
}

export const Empty: Story = {
  args: { projects: [] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Everything I've built/,
    )
    await expect(canvas.queryByText("ForgeKit MCP")).not.toBeInTheDocument()
  },
}
