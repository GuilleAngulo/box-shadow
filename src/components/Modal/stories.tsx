import { Story, Meta } from '@storybook/react/types-6-0'
import Modal from '.'
import { useState } from 'react'
import Button from 'components/Button'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'Modal Title',
    buttonLabel: 'Button'
  },
  argTypes: {
    onSubmit: { action: 'submit' },
    buttonIcon: {
      type: ''
    },
    children: {
      type: ''
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4rem'
        }}
      >
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...args}>
        <p>This is the body of the modal.</p>
      </Modal>
    </>
  )
}
