// This file runs checks on environment variables during build

export function checkRequiredEnvVars() {
  const requiredVars = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"]

  const missingVars = requiredVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    console.warn(`
⚠️ Missing required environment variables:
${missingVars.map((v) => `  - ${v}`).join("\n")}

Please add these variables to your Vercel project settings or .env file.
    `)

    // Don't throw an error, just warn - this allows the build to continue
    // but developers will see the warning
  }
}
