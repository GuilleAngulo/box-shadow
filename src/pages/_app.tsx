import Head from 'next/head'
import { AppProps } from 'next/app'

import { AuthProvider } from 'hooks/use-auth'
import { supabase } from 'utils/supabaseClient'

import { ThemeProvider } from 'hooks/use-theme'
import GlobalStyles from 'styles/global'
import 'styles/fonts.css'
import NextNprogress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider supabaseClient={supabase}>
      <ThemeProvider>
        <Head>
          <title>Box Shadow Tool</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="CSS Box Shadow Tool" />
        </Head>
        <GlobalStyles />
        <NextNprogress
          color="white"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
