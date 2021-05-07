import { Story, Meta } from '@storybook/react/types-6-0'
import { GalleryProps } from 'components/Gallery'
import GalleryTemplate from '.'

export default {
  title: 'GalleryTemplate',
  component: GalleryTemplate
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <GalleryTemplate {...args} />
)
