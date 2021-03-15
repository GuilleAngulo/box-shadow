import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

export type Mode = 'light' | 'dark'

const MODE_KEY = 'theme'

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [isMounted, setIsMounted] = useState(false)

  const setMode = (mode: Mode) => {
    setStorageItem(MODE_KEY, mode)
    setTheme(mode)
  }
  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }
  useEffect(() => {
    const storedTheme = getStorageItem(MODE_KEY)
    storedTheme ? setTheme(storedTheme) : setMode('light')
    setIsMounted(true)
  }, [])
  return [theme, themeToggler, isMounted] as const
}
