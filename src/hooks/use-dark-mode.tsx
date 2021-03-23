import { useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { Mode } from 'types'

const MODE_KEY = 'theme'

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Mode>('light')
  const [isMounted, setIsMounted] = useState(false)

  const setMode = (mode: Mode) => {
    setStorageItem(MODE_KEY, mode)
    setTheme(mode)
  }

  const themeToggler = (mode?: Mode) => {
    if (!mode) {
      theme === 'light' ? setMode('dark') : setMode('light')
      return
    }
    setMode(mode)
  }

  useEffect(() => {
    const storedTheme = getStorageItem(MODE_KEY)
    storedTheme ? setTheme(storedTheme) : setMode('light')
    setIsMounted(true)
  }, [])

  return [theme, themeToggler, isMounted] as const
}
