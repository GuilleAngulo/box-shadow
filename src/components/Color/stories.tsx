import { Story, Meta } from '@storybook/react/types-6-0'
import Color, { ColorProps } from '.'

export default {
  title: 'Color',
  component: Color
} as Meta

export const Default: Story<ColorProps> = (args) => (
  <div style={{ width: '50rem' }}>
    <Color {...args} />
  </div>
)

Default.args = {
  initialColor: {
    alpha: 0,
    blue: 0,
    green: 0,
    red: 0
  },
  initialOpacity: 0.5
}
