import { renderWithTheme } from 'utils/tests'

import Modal from '.'

const props = {
  title: 'Modal Title',
  buttonLabel: 'Button',
  isOpen: true,
  setIsOpen: () => ({})
}

describe('<Modal />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Modal {...props} />)
  })
})
