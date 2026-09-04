import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { expect, within } from "storybook/test"
import { PROJECTS } from "#/features/content/seed-data"
import { ProjectCard } from "./project-card"

const meta: Meta<typeof ProjectCard> = {
  title: "Cards/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const ProjectWithImage: Story = {
  args: { project: PROJECTS.find((p) => p.slug === "forgekit-mcp") },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("ForgeKit MCP")).toBeInTheDocument()
    await expect(canvas.getByText("Project")).toBeInTheDocument()
    await expect(canvas.getByRole("img")).toHaveAttribute("alt", "ForgeKit MCP screenshot")
    await expect(canvas.getByRole("link")).toHaveAttribute("href", "/projects/forgekit-mcp")
  },
}

export const CaseStudy: Story = {
  args: { project: PROJECTS.find((p) => p.slug === "nx-monorepo-scale") },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Nx Monorepo Scale")).toBeInTheDocument()
    await expect(canvas.getByText("Case Study")).toBeInTheDocument()
    // The tanstack-react storybook mock renders Link's raw `to` — exact
    // param resolution is asserted in project-card.router.test.tsx.
    await expect(canvas.getByRole("link")).toHaveAttribute("href", "/case-studies/$slug")
  },
}

export const Article: Story = {
  args: { project: PROJECTS.find((p) => p.slug === "flagship-mobile") },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Flagship Mobile App")).toBeInTheDocument()
    await expect(canvas.getByText("Article")).toBeInTheDocument()
    // The tanstack-react storybook mock renders Link's raw `to` — exact
    // param resolution is asserted in project-card.router.test.tsx.
    await expect(canvas.getByRole("link")).toHaveAttribute("href", "/insights/$slug")
  },
}

export const ExternalLink: Story = {
  args: { project: PROJECTS.find((p) => p.slug === "tokencast") },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole("link")).toHaveAttribute("href", "https://tokencast.vercel.app")
  },
}

// Every seeded project ships with artwork, so the icon fallback is exercised
// with an explicit fixture lacking an image.
export const WithoutImage: Story = {
  args: {
    project: {
      slug: "no-image",
      title: "Icon Fallback",
      description: "A project without artwork renders the icon fallback instead.",
      tags: ["React", "Fallback"],
      href: "https://example.com",
      featured: false,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("Icon Fallback")).toBeInTheDocument()
    await expect(canvas.queryByRole("img")).not.toBeInTheDocument()
  },
}
