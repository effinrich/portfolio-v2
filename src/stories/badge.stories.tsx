import type { Meta, StoryObj } from "@storybook/tanstack-react"
import { Badge } from "#/features/ui/badge"

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Gold: Story = {
  args: {
    children: "Featured Analysis",
    variant: "gold",
  },
}

export const Cyan: Story = {
  args: {
    children: "Performance",
    variant: "cyan",
  },
}

export const Magenta: Story = {
  args: {
    children: "AI Engineering",
    variant: "magenta",
  },
}
