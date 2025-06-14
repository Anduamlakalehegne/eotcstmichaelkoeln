"use client"

import { useEffect, useState } from "react"
import { supabaseClient } from "@/lib/supabase-client"

export default function SupabaseTest() {
  const [status, setStatus] = useState("Testing Supabase connection...")

  useEffect(() => {
    async function testConnection() {
      try {
        // Try a simple query
        const { error } = await supabaseClient.from("news").select("count", { count: "exact", head: true })

        if (error) {
          setStatus(`Error: ${error.message}`)
        } else {
          setStatus("Supabase connection successful! ✅")
        }
      } catch (error) {
        setStatus(`Error: ${(error as Error).message}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-md my-4">
      <h3 className="font-medium mb-2">Supabase Connection Test</h3>
      <p className={status.includes("successful") ? "text-green-600" : "text-red-600"}>{status}</p>
    </div>
  )
}
