import { AppProps } from 'next/app'
import { BoxShadowProvider } from 'hooks/use-box-shadow'
import { ThemeProvider } from 'hooks/use-theme'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import 'styles/fonts.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <BoxShadowProvider>
        <Head>
          <title>Box Shadow Tool</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="apple-touch-icon" href="/img/icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="CSS Box Shadow Tool" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </BoxShadowProvider>
    </ThemeProvider>
  )
}

export default App
