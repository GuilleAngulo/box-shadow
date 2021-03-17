import { Story, Meta } from '@storybook/react/types-6-0'
import ShapeSidebar, { ShapeSidebarProps } from '.'

export default {
  title: 'ShapeSidebar',
  component: ShapeSidebar
} as Meta

export const Default: Story<ShapeSidebarProps> = (args) => (
  <ShapeSidebar {...args} />
)
