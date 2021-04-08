import { createContext, useContext, useEffect, useState } from 'react'
import { SupabaseClient, Session, User } from '@supabase/supabase-js'

export type AuthContextData = {
  user: User | null
  session: Session | null
  loading: boolean
  error: string
  signInGithub: () => void
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
  children: React.ReactNode
}

const AuthProvider = ({ supabaseClient, children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const signInGithub = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    const { error } = await supabaseClient.auth.signIn({ provider: 'github' })
    if (error) setError(error.message)
    setLoading(false)
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
        setUser(session?.user ?? null)

        //Set session cookie for Server Side
        await fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session })
        })
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
