import { Story, Meta } from '@storybook/react/types-6-0'
import LoginSimple from '.'

export default {
  title: 'LoginSimple',
  component: LoginSimple
} as Meta

export const Default: Story = () => <LoginSimple />
