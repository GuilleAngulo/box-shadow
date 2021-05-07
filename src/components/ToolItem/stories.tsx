import { Story, Meta } from '@storybook/react/types-6-0'
import ToolItem, { ToolItemProps } from '.'

export default {
  title: 'ToolItem',
  component: ToolItem
} as Meta

export const Default: Story<ToolItemProps> = (args) => <ToolItem {...args} />
