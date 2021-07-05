import { Story, Meta } from '@storybook/react/types-6-0'
import NumberField, { NumberFieldProps } from '.'

export default {
  title: 'Form/NumberField',
  component: NumberField,
  args: {
    name: 'horizontalOffset',
    initialValue: 10,
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
  <div style={{ maxWidth: 100, padding: 15 }}>
    <NumberField {...args} />
  </div>
)

export const withError: Story<NumberFieldProps> = (args) => (
  <div style={{ maxWidth: 100, padding: 15 }}>
    <NumberField {...args} />
  </div>
)

withError.args = {
  error: 'An error ocurred.'
}

export const withLoading: Story<NumberFieldProps> = (args) => (
  <div style={{ maxWidth: 100, padding: 15 }}>
    <NumberField {...args} />
  </div>
)

withLoading.args = {
  loading: 'Validating...'
}
