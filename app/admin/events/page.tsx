"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Plus, Search, Loader2, Star, StarOff } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"
import type { Event } from "@/lib/supabase"
import { Pagination } from "@/components/pagination"

export default function EventsAdminPage() {
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    fetchEvents()
  }, [currentPage, searchQuery])

  async function fetchEvents() {
    setLoading(true)
    try {
      let query = supabaseClient.from("events").select("*", { count: "exact" }).order("date", { ascending: false })

      // Apply search filter if provided
      if (searchQuery) {
        query = query.ilike("title", `%${searchQuery}%`)
      }

      // Apply pagination
      const start = (currentPage - 1) * itemsPerPage
      const end = start + itemsPerPage - 1

      const { data, count, error } = await query.range(start, end)

      if (error) throw error

      setEvents(data || [])
      setTotalPages(Math.ceil((count || 0) / itemsPerPage))
    } catch (err: any) {
      console.error("Error fetching events:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function toggleFeatured(id: number, currentValue: boolean) {
    try {
      const { error } = await supabaseClient.from("events").update({ featured: !currentValue }).eq("id", id)

      if (error) throw error

      // Update local state
      setEvents(events.map((event) => (event.id === id ? { ...event, featured: !currentValue } : event)))
    } catch (err: any) {
      console.error("Error updating event:", err)
      setError(err.message)
    }
  }

  async function deleteEvent(id: number) {
    if (!window.confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
      return
    }

    try {
      const { error } = await supabaseClient.from("events").delete().eq("id", id)

      if (error) throw error

      // Remove from local state
      setEvents(events.filter((event) => event.id !== id))
    } catch (err: any) {
      console.error("Error deleting event:", err)
      setError(err.message)
    }
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    setCurrentPage(1) // Reset to first page on new search
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Events Management</h1>
        <Button onClick={() => router.push("/admin/events/create")}>
          <Plus className="mr-2 h-4 w-4" /> Create Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>Manage church events, services, and gatherings</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <div className="mb-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </form>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {searchQuery ? "No events found matching your search." : "No events have been created yet."}
            </div>
          ) : (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Featured</TableHead>
                      <TableHead>RSVPs</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{formatDate(event.date)}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{event.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFeatured(event.id, event.featured)}
                            title={event.featured ? "Remove from featured" : "Add to featured"}
                          >
                            {event.featured ? (
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ) : (
                              <StarOff className="h-4 w-4 text-gray-300" />
                            )}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Link href={`/admin/events/${event.id}/rsvps`} className="text-blue-600 hover:underline">
                            {event.current_attendees || 0} / {event.max_attendees || "∞"}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => router.push(`/admin/events/edit/${event.id}`)}>
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => router.push(`/news/events/${event.id}`)}>
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => router.push(`/admin/events/${event.id}/rsvps`)}>
                                Manage RSVPs
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600" onClick={() => deleteEvent(event.id)}>
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
