import { Story, Meta } from '@storybook/react/types-6-0'
import { MoveHorizontal } from '@styled-icons/boxicons-regular'
import InputRange, { InputRangeProps } from '.'

export default {
  title: 'InputRange',
  component: InputRange
} as Meta

export const Default: Story<InputRangeProps> = (args) => (
  <div style={{ width: '50rem' }}>
    <InputRange {...args} />
  </div>
)

Default.args = {
  label: 'Offset',
  name: 'offset',
  initialValue: 10,
  min: 0,
  max: 50,
  icon: <MoveHorizontal />
}
