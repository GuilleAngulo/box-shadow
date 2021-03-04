import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Shadow from '.'
import mock from './mock'

describe('<Shadow />', () => {
  it('should render the box-shadow css property correctly', () => {
    renderWithTheme(<Shadow boxShadow={mock}>Card</Shadow>)

    expect(screen.getByText(/card/i)).toHaveStyle({
      'box-shadow':
        '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.5)'
    })
  })
})