import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Create a single instance of the Supabase client to be reused
export const createClient = () => {
  return createClientComponentClient<Database>({
    supabaseUrl: "https://tzjoxzvxynyroiruezrm.supabase.co",
    supabaseKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6am94enZ4eW55cm9pcnVlenJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTEyMjAsImV4cCI6MjA2MDUyNzIyMH0.YcnZas2WfzLXe9ge-fQoTwQvvxgo1t2twd0_fW_7pkY",
  })
}
