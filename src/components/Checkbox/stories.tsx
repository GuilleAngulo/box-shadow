import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => {
  const [value, setValue] = useState(false)
  return (
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked={value}
        onCheck={setValue}
        {...args}
      />
    </div>
  )
}
