import { Story, Meta } from '@storybook/react/types-6-0'
import HomeTemplate from '.'

export default {
  title: 'HomeTemplate',
  component: HomeTemplate
} as Meta

export const Default: Story = () => <HomeTemplate />
