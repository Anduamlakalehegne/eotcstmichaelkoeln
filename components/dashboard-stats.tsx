"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Calendar, FileText, Loader2, Image, Video, Archive } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"

export function DashboardStats() {
  const [stats, setStats] = useState({
    totalNews: 0,
    totalEvents: 0,
    totalAnnouncements: 0,
    featuredNews: 0,
    featuredEvents: 0,
    totalGallery: 0,
    totalVideos: 0,
    totalArchive: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch news count
        const { data: newsData, error: newsError } = await supabaseClient
          .from("news")
          .select("id, featured")
          .order("id", { ascending: false })

        if (newsError) throw newsError

        // Fetch events count
        const { data: eventsData, error: eventsError } = await supabaseClient
          .from("events")
          .select("id, featured")
          .order("id", { ascending: false })

        if (eventsError) throw eventsError

        // Fetch announcements count
        const { data: announcementsData, error: announcementsError } = await supabaseClient
          .from("announcements")
          .select("id")
          .order("id", { ascending: false })

        if (announcementsError) throw announcementsError

        // Fetch gallery count
        const { data: galleryData, error: galleryError } = await supabaseClient
          .from("gallery")
          .select("id")
          .order("id", { ascending: false })

        if (galleryError) throw galleryError

        // Fetch videos count
        const { data: videosData, error: videosError } = await supabaseClient
          .from("videos")
          .select("id")
          .order("id", { ascending: false })

        if (videosError) throw videosError

        // Fetch archive count
        const { data: archiveData, error: archiveError } = await supabaseClient
          .from("archive")
          .select("id")
          .order("id", { ascending: false })

        if (archiveError) throw archiveError

        setStats({
          totalNews: newsData.length,
          totalEvents: eventsData.length,
          totalAnnouncements: announcementsData.length,
          featuredNews: newsData.filter((item) => item.featured).length,
          featuredEvents: eventsData.filter((item) => item.featured).length,
          totalGallery: galleryData.length,
          totalVideos: videosData.length,
          totalArchive: archiveData.length,
        })
      } catch (err) {
        console.error(err)
        setError("Failed to load dashboard statistics")
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total News</CardTitle>
          <Newspaper className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalNews}</div>
          <p className="text-xs text-muted-foreground">
            {stats.featuredNews} featured ({Math.round((stats.featuredNews / stats.totalNews) * 100) || 0}%)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Events</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalEvents}</div>
          <p className="text-xs text-muted-foreground">
            {stats.featuredEvents} featured ({Math.round((stats.featuredEvents / stats.totalEvents) * 100) || 0}%)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Gallery Items</CardTitle>
          <Image className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalGallery}</div>
          <p className="text-xs text-muted-foreground">Total images in gallery</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Videos</CardTitle>
          <Video className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalVideos}</div>
          <p className="text-xs text-muted-foreground">Total video content</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Archive Items</CardTitle>
          <Archive className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalArchive}</div>
          <p className="text-xs text-muted-foreground">Total archived content</p>
        </CardContent>
      </Card>
    </div>
  )
}
