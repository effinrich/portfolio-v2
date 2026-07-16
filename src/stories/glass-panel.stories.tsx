import type { Meta, StoryObj } from '@storybook/react-vite'
import { GlassPanel } from '#/features/ui/glass-panel'

const meta: Meta<typeof GlassPanel> = {
  title: 'UI/GlassPanel',
  component: GlassPanel,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof GlassPanel>

export const Default: Story = {
  args: {
    children: (
      <div className="p-8 text-white">
        <h3 className="mb-2 text-xl font-bold">Glass Panel</h3>
        <p className="text-white/50">Neon portfolio aesthetic component</p>
      </div>
    ),
    className: 'rounded-2xl',
  },
}

export const WithNeonBorder: Story = {
  args: {
    children: (
      <div className="p-8 text-white">
        <p>Content with gold neon border accent</p>
      </div>
    ),
    className: 'rounded-2xl neon-border-gold',
  },
}
