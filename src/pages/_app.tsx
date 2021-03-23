import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { BoxShadowProvider } from 'hooks/use-box-shadow'
import Head from 'next/head'

import { lightTheme, darkTheme } from 'styles/theme'
import GlobalStyles from 'styles/global'
import 'styles/fonts.css'
import SwitchButton from 'components/Switch'
import { useDarkMode } from 'hooks/use-dark-mode'

function App({ Component, pageProps }: AppProps) {
  const [theme, themeToggler, isMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!isMounted) return null
  return (
    <ThemeProvider theme={themeMode as DefaultTheme}>
      <BoxShadowProvider theme={theme} toggleTheme={themeToggler}>
        <Head>
          <title>Box Shadow Tool</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="apple-touch-icon" href="/img/icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="CSS Box Shadow Tool" />
        </Head>
        <GlobalStyles />
        <SwitchButton
          toggleTheme={themeToggler}
          isChecked={theme === 'dark' ? true : false}
        />
        <Component {...pageProps} />
      </BoxShadowProvider>
    </ThemeProvider>
  )
}

export default App
