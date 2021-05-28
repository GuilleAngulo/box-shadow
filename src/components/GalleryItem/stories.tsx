import { Story, Meta } from '@storybook/react/types-6-0'
import GalleryItem, { GalleryItemProps } from '.'

export default {
  title: 'GalleryItem',
  component: GalleryItem
} as Meta

export const Default: Story<GalleryItemProps> = (args) => (
  <GalleryItem {...args} />
)
