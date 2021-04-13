import { Story, Meta } from '@storybook/react/types-6-0'
import SaveDialog, { SaveDialogProps } from '.'

export default {
  title: 'SaveDialog',
  component: SaveDialog
} as Meta

export const Default: Story<SaveDialogProps> = (args) => (
  <SaveDialog {...args} />
)
