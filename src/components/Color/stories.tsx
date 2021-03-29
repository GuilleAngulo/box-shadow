import { Story, Meta } from '@storybook/react/types-6-0'
import Color from '.'

export default {
  title: 'Color',
  component: Color
} as Meta

export const Default: Story = () => (
  <div style={{ width: '50rem' }}>
    <Color />
  </div>
)

Default.args = {
  initialColor: 0,
  initialOpacity: 0.5
}
