"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Hard-coded fallback values as a last resort (only used if environment variables fail)
const FALLBACK_SUPABASE_URL = "https://tzjoxzvxynyroiruezrm.supabase.co"
const FALLBACK_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6am94enZ4eW55cm9pcnVlenJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTEyMjAsImV4cCI6MjA2MDUyNzIyMH0.YcnZas2WfzLXe9ge-fQoTwQvvxgo1t2twd0_fW_7pkY"

// Create a single instance that can be imported into any client component
let clientInstance: ReturnType<typeof createClientComponentClient> | null = null

export function createBrowserClient() {
  if (clientInstance) return clientInstance

  // Try to use environment variables first
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY

  try {
    clientInstance = createClientComponentClient<Database>({
      supabaseUrl,
      supabaseKey: supabaseAnonKey,
    })
    return clientInstance
  } catch (error) {
    console.error("Error creating Supabase client:", error)
    throw new Error(`Failed to initialize Supabase client: ${(error as Error).message}`)
  }
}
