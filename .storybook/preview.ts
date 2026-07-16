import type { Preview } from '@storybook/react-vite'
import '#/styles/app.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
    layout: 'centered',
  },
}

export default preview
