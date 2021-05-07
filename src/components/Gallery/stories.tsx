import { Story, Meta } from '@storybook/react/types-6-0'
import Gallery, { GalleryProps } from '.'

export default {
  title: 'Gallery',
  component: Gallery
} as Meta

export const Default: Story<GalleryProps> = (args) => <Gallery {...args} />
