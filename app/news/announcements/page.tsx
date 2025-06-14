"use client"

import { useState, useEffect } from "react"
import type { Announcement } from "@/lib/supabase"
import { Loader2 } from "lucide-react"

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const response = await fetch("/api/announcements")
        if (!response.ok) {
          throw new Error("Failed to fetch announcements")
        }
        const data = await response.json()
        setAnnouncements(data)
      } catch (err) {
        setError("Failed to load announcements. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncements()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Announcements</h1>
      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements available at this time.</p>
      ) : (
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                announcement.priority === "high"
                  ? "border-red-500"
                  : announcement.priority === "medium"
                    ? "border-yellow-500"
                    : "border-blue-500"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{announcement.title}</h2>
                <span className="text-gray-500 text-sm">
                  {new Date(announcement.publish_date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600">{announcement.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
