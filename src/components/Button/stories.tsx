import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/link'
}

export const minimal: Story<ButtonProps> = (args) => <Button {...args} />

minimal.args = {
  size: 'medium',
  children: 'Buy Now',
  minimal: true
}

export const loading: Story<ButtonProps> = (args) => <Button {...args} />

loading.args = {
  size: 'medium',
  children: 'Buy Now',
  icon: <AddShoppingCart />,
  loading: true
}
