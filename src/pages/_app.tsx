import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import 'styles/fonts.css'
import { useState } from 'react'
import SwitchButton from 'components/Switch'

function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false)
  const themeToggler = () => {
    setDarkMode((prev) => !prev)
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Box Shadow</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles dark={darkMode} />
      <SwitchButton onChange={themeToggler} checked={darkMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
