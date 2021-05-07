import { Story, Meta } from '@storybook/react/types-6-0'
import LoadDialog, { LoadDialogProps } from '.'

export default {
  title: 'LoadDialog',
  component: LoadDialog
} as Meta

export const Default: Story<LoadDialogProps> = (args) => (
  <LoadDialog {...args} />
)
