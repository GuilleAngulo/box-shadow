import { Story, Meta } from '@storybook/react/types-6-0'
import Tools from '.'

export default {
  title: 'Tools',
  component: Tools
} as Meta

export const Default: Story = (args) => <Tools {...args} />
