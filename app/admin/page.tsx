"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardStats } from "@/components/dashboard-stats"
import { Newspaper, Calendar, Plus, ArrowRight, Loader2 } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"

export default function AdminDashboard() {
  const [recentNews, setRecentNews] = useState<any[]>([])
  const [recentEvents, setRecentEvents] = useState<any[]>([])
  const [recentAnnouncements, setRecentAnnouncements] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecentContent() {
      try {
        // Fetch recent news
        const { data: newsData, error: newsError } = await supabaseClient
          .from("news")
          .select("id, title, publish_date")
          .order("publish_date", { ascending: false })
          .limit(3)

        if (newsError) throw newsError

        // Fetch upcoming events
        const { data: eventsData, error: eventsError } = await supabaseClient
          .from("events")
          .select("id, title, date")
          .order("date", { ascending: true })
          .limit(3)

        if (eventsError) throw eventsError

        // Fetch recent announcements
        const { data: announcementsData, error: announcementsError } = await supabaseClient
          .from("announcements")
          .select("id, title, publish_date")
          .order("publish_date", { ascending: false })
          .limit(3)

        if (announcementsError) throw announcementsError

        setRecentNews(newsData || [])
        setRecentEvents(eventsData || [])
        setRecentAnnouncements(announcementsData || [])
      } catch (err) {
        console.error(err)
        setError("Failed to load recent content")
      } finally {
        setLoading(false)
      }
    }

    fetchRecentContent()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <DashboardStats />

      <Tabs defaultValue="overview" className="mt-8 space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="quick-actions">Quick Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent News</CardTitle>
                <CardDescription>Latest news articles published</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {loading ? (
                  <div className="flex justify-center py-4">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      {recentNews.length > 0 ? (
                        recentNews.map((item) => (
                          <div key={item.id} className="flex items-center justify-between">
                            <div className="truncate">
                              <p className="text-sm font-medium">{item.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(item.publish_date).toLocaleDateString()}
                              </p>
                            </div>
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/admin/news/edit/${item.id}`}>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No news articles found</p>
                      )}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/admin/news">View All News</Link>
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events scheduled in the near future</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {loading ? (
                  <div className="flex justify-center py-4">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      {recentEvents.length > 0 ? (
                        recentEvents.map((item) => (
                          <div key={item.id} className="flex items-center justify-between">
                            <div className="truncate">
                              <p className="text-sm font-medium">{item.title}</p>
                              <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/admin/events/edit/${item.id}`}>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No upcoming events found</p>
                      )}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/admin/events">View All Events</Link>
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quick-actions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Add New Content</CardTitle>
                <CardDescription>Quickly create new content items</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/admin/news/create">
                    <Plus className="mr-2 h-4 w-4" /> Create News Article
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/admin/events/create">
                    <Plus className="mr-2 h-4 w-4" /> Create Event
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Content</CardTitle>
                <CardDescription>Access content management pages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/news">
                    <Newspaper className="mr-2 h-4 w-4" /> Manage News
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/events">
                    <Calendar className="mr-2 h-4 w-4" /> Manage Events
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>View Website</CardTitle>
                <CardDescription>Preview your website as visitors see it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/" target="_blank">
                    <ArrowRight className="mr-2 h-4 w-4" /> View Homepage
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/news/church-news" target="_blank">
                    <ArrowRight className="mr-2 h-4 w-4" /> View News Page
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/news/events" target="_blank">
                    <ArrowRight className="mr-2 h-4 w-4" /> View Events Page
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
