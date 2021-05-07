import { Story, Meta } from '@storybook/react/types-6-0'
import LikeButton, { LikeButtonProps } from '.'

export default {
  title: 'LikeButton',
  component: LikeButton
} as Meta

export const Default: Story<LikeButtonProps> = (args) => (
  <LikeButton {...args} />
)
