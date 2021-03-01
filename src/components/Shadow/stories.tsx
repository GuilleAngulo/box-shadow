import { Story, Meta } from '@storybook/react/types-6-0'
import Shadow, { BoxShadowProps } from '.'
import mock from './mock'

export default {
  title: 'Shadow',
  component: Shadow,
  args: {
    boxShadow: mock,
    children: <span style={{ fontSize: '60px' }}>🃏</span>
  }
} as Meta

export const Default: Story<BoxShadowProps> = (args) => <Shadow {...args} />
