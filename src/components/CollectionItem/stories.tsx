import { Story, Meta } from '@storybook/react/types-6-0'
import CollectionItem, { CollectionItemProps } from '.'

import { mocks } from 'components/CollectionDialog/mock'
import { BoxShadowAuthorProps } from 'services/boxShadows'

export default {
  title: 'CollectionItem',
  component: CollectionItem
} as Meta

export const Default: Story<CollectionItemProps> = (args) => (
  <div
    style={{ display: 'flex', margin: 'auto', width: '17rem', height: '17rem' }}
  >
    <CollectionItem {...args} />
  </div>
)

Default.args = {
  boxShadow: mocks[0] as BoxShadowAuthorProps,
  closeModal: () => console.log('closing modal')
}

export const Light: Story<CollectionItemProps> = (args) => (
  <div
    style={{ display: 'flex', margin: 'auto', width: '17rem', height: '17rem' }}
  >
    <CollectionItem {...args} />
  </div>
)

Light.args = {
  boxShadow: mocks[4] as BoxShadowAuthorProps,
  closeModal: () => console.log('closing modal')
}
