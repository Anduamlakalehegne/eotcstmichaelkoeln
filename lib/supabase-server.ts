import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Fallback values as a last resort (only used if environment variables fail)
const FALLBACK_SUPABASE_URL = "https://tzjoxzvxynyroiruezrm.supabase.co"
const FALLBACK_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6am94enZ4eW55cm9pcnVlenJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTEyMjAsImV4cCI6MjA2MDUyNzIyMH0.YcnZas2WfzLXe9ge-fQoTwQvvxgo1t2twd0_fW_7pkY"

// Get the Supabase URL and key from environment variables or fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

// Create a single instance for server-side operations
let serverInstance: ReturnType<typeof createClient> | null = null

export function getServerClient() {
  if (serverInstance) return serverInstance

  // For server operations, prefer the service role key if available
  const key = supabaseServiceKey || supabaseAnonKey

  try {
    serverInstance = createClient<Database>(supabaseUrl, key)
    return serverInstance
  } catch (error) {
    console.error("Error creating server Supabase client:", error)
    throw new Error(`Failed to initialize server Supabase client: ${(error as Error).message}`)
  }
}

// Also export a direct instance for backward compatibility
export const serverSupabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey)
