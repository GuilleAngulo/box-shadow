import { Story, Meta } from '@storybook/react/types-6-0'
import ShadowTool, { ShadowToolProps } from '.'

export default {
  title: 'ShadowTool',
  component: ShadowTool
} as Meta

export const Default: Story<ShadowToolProps> = (args) => (
  <div style={{ width: '24rem' }}>
    <ShadowTool {...args} />
  </div>
)

Default.args = {
  index: 0
}
