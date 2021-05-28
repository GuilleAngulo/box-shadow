import { Story, Meta } from '@storybook/react/types-6-0'
import TopTools, { TopToolsProps } from '.'

export default {
  title: 'TopTools',
  component: TopTools
} as Meta

export const Default: Story<TopToolsProps> = (args) => <TopTools {...args} />
