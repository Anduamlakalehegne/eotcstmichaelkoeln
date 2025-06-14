"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase-client"

export default function TestEnvPage() {
  const [status, setStatus] = useState<{
    url: string
    key: string
    connection: string
  }>({
    url: "Checking...",
    key: "Checking...",
    connection: "Checking...",
  })

  useEffect(() => {
    // Check if environment variables are defined
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setStatus({
      url: supabaseUrl ? "Defined ✅" : "Missing ❌",
      key: supabaseKey ? "Defined ✅" : "Missing ❌",
      connection: "Testing...",
    })

    // Test Supabase connection
    const testConnection = async () => {
      try {
        const supabase = getSupabaseClient()
        // Try a simple query
        const { error } = await supabase.from("news").select("count", { count: "exact", head: true })

        if (error) {
          setStatus((prev) => ({ ...prev, connection: `Error: ${error.message} ❌` }))
        } else {
          setStatus((prev) => ({ ...prev, connection: "Connected successfully ✅" }))
        }
      } catch (error) {
        setStatus((prev) => ({ ...prev, connection: `Error: ${(error as Error).message} ❌` }))
      }
    }

    testConnection()
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variable Test</h1>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Supabase Environment Variables:</h2>
        <ul className="space-y-2">
          <li>
            <span className="font-medium">NEXT_PUBLIC_SUPABASE_URL:</span>{" "}
            <span className={status.url.includes("✅") ? "text-green-600" : "text-red-600"}>{status.url}</span>
          </li>
          <li>
            <span className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY:</span>{" "}
            <span className={status.key.includes("✅") ? "text-green-600" : "text-red-600"}>{status.key}</span>
          </li>
          <li>
            <span className="font-medium">Connection Test:</span>{" "}
            <span className={status.connection.includes("✅") ? "text-green-600" : "text-red-600"}>
              {status.connection}
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>
          Note: This page checks if the environment variables are defined and tests the Supabase connection. For
          security reasons, we don't display the actual values.
        </p>
      </div>
    </div>
  )
}
