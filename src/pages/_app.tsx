import Head from 'next/head'
import { AppProps } from 'next/app'

import { supabase } from 'utils/supabaseClient'

import { AuthProvider } from 'hooks/use-auth'
import { ThemeProvider } from 'hooks/use-theme'

import GlobalStyles from 'styles/global'
import 'styles/fonts.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider supabaseClient={supabase}>
      <ThemeProvider>
        <Head>
          <title>Box Shadow Club</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
