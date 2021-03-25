import { Story, Meta } from '@storybook/react/types-6-0'
import Editor from '.'
import mock from 'components/Shadow/mock'

export default {
  title: 'Editor',
  component: Editor,
  args: {
    boxShadow: mock
  }
} as Meta

export const Default: Story = (args) => <Editor {...args} />
