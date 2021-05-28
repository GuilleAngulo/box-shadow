import { Story, Meta } from '@storybook/react/types-6-0'
import SaveOption, { SaveOptionProps } from '.'

export default {
  title: 'SaveOption',
  component: SaveOption
} as Meta

export const Default: Story<SaveOptionProps> = (args) => (
  <SaveOption {...args} />
)
