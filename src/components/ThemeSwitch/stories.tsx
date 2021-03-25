import { Story, Meta } from '@storybook/react/types-6-0'
import Switch, { ThemeSwitchProps } from '.'

export default {
  title: 'Switch',
  component: Switch
} as Meta

export const Default: Story<ThemeSwitchProps> = (args) => <Switch {...args} />
