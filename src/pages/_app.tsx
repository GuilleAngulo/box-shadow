import Head from 'next/head'
import { AppProps } from 'next/app'

import { AuthProvider } from 'hooks/use-auth'
import { supabase } from 'utils/supabaseClient'

import { ThemeProvider } from 'hooks/use-theme'
import GlobalStyles from 'styles/global'
import 'styles/fonts.css'
import OpenGraph from 'components/OpenGraph'

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
        <OpenGraph
          title={'Box Shadow Tool'}
          description={'CSS Box Shadow Tool'}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
