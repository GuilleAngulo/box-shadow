import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

export type Mode = 'light' | 'dark'

const MODE_KEY = 'theme'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Mode>('light')
  const [isMounted, setIsMounted] = useState(false)

  const setMode = (mode: Mode) => {
    setStorageItem(MODE_KEY, mode)
    setTheme(mode)
  }

  const isDarkMode = () => {
    const storedTheme = getStorageItem(MODE_KEY)
    return storedTheme === 'dark'
  }

  const themeToggler = (mode?: Mode) => {
    if (!mode) {
      return theme === 'light' ? setMode('dark') : setMode('light')
    }
    setMode(mode)
  }

  useEffect(() => {
    const storedTheme = getStorageItem(MODE_KEY)
    storedTheme ? setTheme(storedTheme) : setMode('light')
    setIsMounted(true)
  }, [])

  return { theme, themeToggler, isMounted, isDarkMode } as const
}
