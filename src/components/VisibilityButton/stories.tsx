import { Story, Meta } from '@storybook/react/types-6-0'
import VisibilityButton, { VisibilityButtonProps } from '.'

export default {
  title: 'VisibilityButton',
  component: VisibilityButton
} as Meta

export const Default: Story<VisibilityButtonProps> = (args) => (
  <VisibilityButton {...args} />
)
