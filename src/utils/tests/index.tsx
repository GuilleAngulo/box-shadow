import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { lightTheme } from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>)
