import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCard } from '#/features/work/project-card'
import { PROJECTS } from '#/features/content/seed-data'

const meta: Meta<typeof ProjectCard> = {
  title: 'Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
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

export const ForgeKitMcp: Story = {
  args: {
    project: PROJECTS.find((p) => p.slug === 'forgekit-mcp'),
  },
}

export const McpAtlas: Story = {
  args: {
    project: PROJECTS.find((p) => p.slug === 'mcp-atlas'),
  },
}
