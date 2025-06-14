"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function EnvErrorPage() {
  const [envStatus, setEnvStatus] = useState<{
    url: boolean
    key: boolean
  }>({
    url: false,
    key: false,
  })

  useEffect(() => {
    // Check if environment variables are defined
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setEnvStatus({
      url: !!supabaseUrl,
      key: !!supabaseKey,
    })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900">Environment Configuration Error</h1>

        <div className="p-4 bg-gray-50 rounded-md">
          <h2 className="mb-2 font-medium text-gray-700">Missing Environment Variables:</h2>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <span
                className={`inline-block w-5 h-5 mr-2 rounded-full ${envStatus.url ? "bg-green-500" : "bg-red-500"}`}
              ></span>
              <span>NEXT_PUBLIC_SUPABASE_URL: {envStatus.url ? "Present" : "Missing"}</span>
            </li>
            <li className="flex items-center">
              <span
                className={`inline-block w-5 h-5 mr-2 rounded-full ${envStatus.key ? "bg-green-500" : "bg-red-500"}`}
              ></span>
              <span>NEXT_PUBLIC_SUPABASE_ANON_KEY: {envStatus.key ? "Present" : "Missing"}</span>
            </li>
          </ul>
        </div>

        <div className="p-4 text-sm bg-blue-50 rounded-md text-blue-800">
          <p className="font-medium">How to fix this issue:</p>
          <ol className="pl-5 mt-2 space-y-1 list-decimal">
            <li>Go to your Vercel project dashboard</li>
            <li>Navigate to Settings &gt; Environment Variables</li>
            <li>Add or update the missing environment variables</li>
            <li>Redeploy your application</li>
          </ol>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  )
}
