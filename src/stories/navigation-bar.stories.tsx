import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationBar } from '#/features/layout/navigation-bar'

const meta: Meta<typeof NavigationBar> = {
  title: 'Layout/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof NavigationBar>

export const Home: Story = {
  args: {
    activeItem: 'home',
    isAvailable: true,
  },
}

export const Work: Story = {
  args: {
    activeItem: 'work',
    isAvailable: true,
  },
}

export const Contact: Story = {
  args: {
    activeItem: 'contact',
    isAvailable: false,
  },
}
