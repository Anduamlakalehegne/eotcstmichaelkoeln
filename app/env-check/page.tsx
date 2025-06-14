"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase-client"

export default function EnvCheckPage() {
  const [status, setStatus] = useState<{
    url: { present: boolean; value: string }
    key: { present: boolean; value: string }
    connection: { status: string; message: string }
    loading: boolean
  }>({
    url: { present: false, value: "" },
    key: { present: false, value: "" },
    connection: { status: "pending", message: "Testing connection..." },
    loading: true,
  })

  useEffect(() => {
    // Check if environment variables are defined
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setStatus((prev) => ({
      ...prev,
      url: {
        present: !!supabaseUrl,
        value: supabaseUrl ? `${supabaseUrl.substring(0, 8)}...` : "Not defined",
      },
      key: {
        present: !!supabaseKey,
        value: supabaseKey ? `${supabaseKey.substring(0, 5)}...` : "Not defined",
      },
      loading: false,
    }))

    // Test Supabase connection
    const testConnection = async () => {
      try {
        if (!supabaseUrl || !supabaseKey) {
          setStatus((prev) => ({
            ...prev,
            connection: {
              status: "failed",
              message: "Cannot test connection: Missing environment variables",
            },
          }))
          return
        }

        const supabase = getSupabaseClient()

        // Try a simple query
        const { error } = await supabase.from("news").select("count", { count: "exact", head: true })

        if (error) {
          setStatus((prev) => ({
            ...prev,
            connection: {
              status: "failed",
              message: `Error: ${error.message}`,
            },
          }))
        } else {
          setStatus((prev) => ({
            ...prev,
            connection: {
              status: "success",
              message: "Connected successfully to Supabase",
            },
          }))
        }
      } catch (error) {
        setStatus((prev) => ({
          ...prev,
          connection: {
            status: "failed",
            message: `Error: ${(error as Error).message}`,
          },
        }))
      }
    }

    testConnection()
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Environment Variable Checker</h1>

      {status.loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Supabase Environment Variables</h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-3 ${status.url.present ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium">NEXT_PUBLIC_SUPABASE_URL</p>
                  <p className="text-sm text-gray-600">{status.url.value}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-3 ${status.key.present ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY</p>
                  <p className="text-sm text-gray-600">{status.key.value}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Connection Test</h2>

            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full mr-3 ${
                  status.connection.status === "success"
                    ? "bg-green-500"
                    : status.connection.status === "failed"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }`}
              ></div>
              <p>{status.connection.message}</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">How to Fix Environment Variable Issues</h2>

            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Go to your{" "}
                <a
                  href="https://vercel.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Vercel Dashboard
                </a>
              </li>
              <li>Select your project</li>
              <li>Go to Settings &gt; Environment Variables</li>
              <li>
                Add or update the following variables:
                <ul className="list-disc pl-5 mt-1">
                  <li>NEXT_PUBLIC_SUPABASE_URL</li>
                  <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
                </ul>
              </li>
              <li>Redeploy your application</li>
            </ol>

            <p className="mt-4 text-sm">
              You can find these values in your{" "}
              <a
                href="https://app.supabase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Supabase Dashboard
              </a>{" "}
              under Project Settings &gt; API.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
