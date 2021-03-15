import { Story, Meta } from '@storybook/react/types-6-0'
import ShadowTool from '.'

export default {
  title: 'ShadowTool',
  component: ShadowTool
} as Meta

export const Default: Story = () => <ShadowTool index={0} />
