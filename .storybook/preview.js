import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { useDarkMode } from 'storybook-dark-mode'
import { lightTheme, darkTheme } from 'styles/theme'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
