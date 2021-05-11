import { Story, Meta } from '@storybook/react/types-6-0'
import CollectionDialog, { CollectionDialogProps } from '.'

export default {
  title: 'CollectionDialog',
  component: CollectionDialog
} as Meta

export const Default: Story<CollectionDialogProps> = (args) => (
  <CollectionDialog {...args} />
)
