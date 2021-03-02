import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import 'styles/fonts.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Box Shadow</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
