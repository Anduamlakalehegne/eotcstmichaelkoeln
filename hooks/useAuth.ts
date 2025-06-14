"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type AuthData = {
  access_token: string
  refresh_token: string
  expires_at: number
  user: {
    id: string
    email: string
    role: string
  }
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedAuth = localStorage.getItem("auth")
    if (storedAuth) {
      const authData = JSON.parse(storedAuth)
      // Check if token is expired
      if (authData.expires_at * 1000 > Date.now()) {
        setAuth(authData)
      } else {
        // Token expired, clear storage
        localStorage.removeItem("auth")
      }
    }
    setLoading(false)
  }, [])

  const signOut = () => {
    localStorage.removeItem("auth")
    setAuth(null)
    router.push("/login")
  }

  return {
    auth,
    loading,
    signOut,
  }
} 