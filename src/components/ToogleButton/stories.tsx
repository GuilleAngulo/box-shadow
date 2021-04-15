import { Story, Meta } from '@storybook/react/types-6-0'
import ToogleButton, { ToogleButtonProps } from '.'

export default {
  title: 'ToogleButton',
  component: ToogleButton
} as Meta

export const Default: Story<ToogleButtonProps> = (args) => (
  <ToogleButton {...args} />
)
