import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import NumberField, { NumberFieldProps } from '.'

export default {
  title: 'Form/NumberField',
  component: NumberField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />,
    iconPosition: 'left',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<NumberFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <NumberField {...args} />
  </div>
)

export const withError: Story<NumberFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <NumberField {...args} />
  </div>
)

withError.args = {
  error: 'An error ocurred.'
}

export const withLoading: Story<NumberFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <NumberField {...args} />
  </div>
)

withLoading.args = {
  loading: 'Validating...'
}
