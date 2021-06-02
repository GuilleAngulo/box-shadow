import { createContext, useContext, useEffect, useState } from 'react'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider
} from 'styled-components'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { lightTheme, darkTheme } from 'styles/theme'
import { Mode } from 'types'
import NextNProgress from 'nextjs-progressbar'

const MODE_KEY = 'theme'

export type ThemeContextData = {
  theme: Mode
  toggleTheme: () => void
}

const ThemeContextDefaultValues = {
  theme: 'light' as Mode,
  toggleTheme: () => null
}

export const ThemeContext = createContext<ThemeContextData>(
  ThemeContextDefaultValues
)

export type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Mode>('light')

  const saveTheme = (mode: Mode) => {
    setStorageItem(MODE_KEY, mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'light' ? saveTheme('dark') : saveTheme('light')
  }

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    const storedTheme = getStorageItem(MODE_KEY)
    storedTheme ? setTheme(storedTheme) : saveTheme('light')
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      <StyledThemeProvider theme={themeMode as DefaultTheme}>
        {children}
        <NextNProgress
          color={'var(--color-primary)'}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ showSpinner: false }}
        />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
