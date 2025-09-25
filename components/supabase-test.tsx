"use client"

import { useEffect, useState } from "react"
import { supabaseClient } from "@/lib/supabase-client"

export default function SupabaseTest() {
  const [status, setStatus] = useState("Testing backend connection...")

  useEffect(() => {
    async function testConnection() {
      try {
        // Try a simple query to the new backend
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/news`)

        if (!response.ok) {
          setStatus(`Error: Backend connection failed - ${response.status}`)
        } else {
          setStatus("Backend connection successful! ✅")
        }
      } catch (error) {
        setStatus(`Error: ${(error as Error).message}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-md my-4">
      <h3 className="font-medium mb-2">Backend Connection Test</h3>
      <p className={status.includes("successful") ? "text-green-600" : "text-red-600"}>{status}</p>
    </div>
  )
}
