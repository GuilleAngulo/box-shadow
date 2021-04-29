import { createContext, useContext, useEffect, useState } from 'react'
import { SupabaseClient, Session, User } from '@supabase/supabase-js'

import { signInUser } from 'services/users'

export type AuthContextData = {
  user: User | null
  session: Session | null
  loading: boolean
  error: string
  signInGithub: (redirect?: string) => void
  signOut: () => void
}

const AuthContextDefaultValues = {
  user: null,
  session: null,
  loading: false,
  error: '',
  signInGithub: () => null,
  signOut: () => null
}

export const AuthContext = createContext<AuthContextData>(
  AuthContextDefaultValues
)

export type AuthProviderProps = {
  supabaseClient: SupabaseClient
  SSR?: boolean
  children: React.ReactNode
}

const AuthProvider = ({
  supabaseClient,
  SSR = false,
  children
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const signInGithub = async (redirect?: string) => {
    setLoading(true)
    const { error } = await supabaseClient.auth.signIn(
      { provider: 'github' },
      {
        ...(!!redirect && {
          redirectTo: redirect
        })
      }
    )
    if (error) setError(error.message)
    // setLoading(false)
  }

  const signOut = async () => {
    setLoading(true)
    const { error } = await supabaseClient.auth.signOut()
    if (error) setError(error.message)
    setLoading(false)
  }

  useEffect(() => {
    const session = supabaseClient.auth.session()
    setSession(session)
    setUser(session?.user ?? null)

    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        const currentUser = session?.user
        setUser(currentUser ?? null)
        if (currentUser) {
          signInUser({
            id: currentUser.id,
            name: currentUser.user_metadata.full_name,
            avatar_url: currentUser.user_metadata.avatar_url
          })
        }

        //If Server Side is active -> Set session cookie
        if (SSR) {
          await fetch('/api/auth', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ event, session })
          })
        }
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        error,
        signInGithub,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
