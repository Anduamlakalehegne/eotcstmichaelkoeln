"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type AuthUser = {
  id: string
  email: string
  first_name?: string | null
  last_name?: string | null
  role?: string | null
  is_admin?: boolean | null
}

type AuthSession = {
  access_token: string
  expires_at: number // epoch seconds
  user: AuthUser
}

type AuthContextType = {
  session: AuthSession | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem('auth')
        if (!raw) {
          setSession(null)
          setLoading(false)
          return
        }
        const parsed = JSON.parse(raw) as AuthSession
        if (!parsed?.access_token || !parsed?.expires_at || !parsed?.user) {
          localStorage.removeItem('auth')
          setSession(null)
          setLoading(false)
          return
        }
        if (parsed.expires_at * 1000 <= Date.now()) {
          localStorage.removeItem('auth')
          setSession(null)
        } else {
          setSession(parsed)
        }
      } catch {
        localStorage.removeItem('auth')
        setSession(null)
      } finally {
        setLoading(false)
      }
    }
    load()
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'auth') load()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const signOut = async () => {
    localStorage.removeItem('auth')
    setSession(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
