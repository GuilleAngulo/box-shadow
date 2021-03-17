import { Story, Meta } from '@storybook/react/types-6-0'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Switch',
  component: Switch
} as Meta

export const Default: Story<SwitchProps> = (args) => <Switch {...args} />
