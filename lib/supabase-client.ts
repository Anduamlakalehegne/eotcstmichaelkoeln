import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Fallback values as a last resort (only used if environment variables fail)
const FALLBACK_SUPABASE_URL = "https://tzjoxzvxynyroiruezrm.supabase.co"
const FALLBACK_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6am94enZ4eW55cm9pcnVlenJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTEyMjAsImV4cCI6MjA2MDUyNzIyMH0.YcnZas2WfzLXe9ge-fQoTwQvvxgo1t2twd0_fW_7pkY"

// Get the Supabase URL and key from environment variables or fallbacks
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY

// Create and export the Supabase client directly (for backward compatibility)
export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Create a single instance that can be imported into any file
let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (supabaseInstance) return supabaseInstance

  try {
    supabaseInstance = supabaseClient
    return supabaseInstance
  } catch (error) {
    console.error("Error creating Supabase client:", error)
    throw new Error(`Failed to initialize Supabase client: ${(error as Error).message}`)
  }
}

export async function uploadImage(file: File, bucketName: string, folder: string): Promise<string> {
  const fileName = `${folder}/${Date.now()}-${file.name}`

  const { data, error } = await supabaseClient.storage.from(bucketName).upload(fileName, file, {
    cacheControl: "3600",
    upsert: false,
  })

  if (error) {
    console.error("Supabase upload error:", error)
    throw new Error(`Failed to upload image: ${error.message}`)
  }

  return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${data.path}`
}
