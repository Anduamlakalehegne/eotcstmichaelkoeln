"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Download, Loader2, Search, Trash2 } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"
import type { Event } from "@/lib/supabase"
import { Pagination } from "@/components/pagination"

interface RSVP {
  id: number
  event_id: number
  name: string
  email: string
  phone: string
  guests: number
  message: string
  created_at: string
}

export default function EventRSVPsPage() {
  const params = useParams()
  const router = useRouter()
  const [event, setEvent] = useState<Event | null>(null)
  const [rsvps, setRSVPs] = useState<RSVP[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    fetchEventAndRSVPs()
  }, [currentPage, searchQuery])

  async function fetchEventAndRSVPs() {
    setLoading(true)
    try {
      // Fetch event details
      const { data: eventData, error: eventError } = await supabaseClient
        .from("events")
        .select("*")
        .eq("id", params.id)
        .single()

      if (eventError) throw eventError
      setEvent(eventData)

      // Fetch RSVPs
      let query = supabaseClient
        .from("event_rsvps")
        .select("*", { count: "exact" })
        .eq("event_id", params.id)
        .order("created_at", { ascending: false })

      // Apply search filter if provided
      if (searchQuery) {
        query = query.or(`name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`)
      }

      // Apply pagination
      const start = (currentPage - 1) * itemsPerPage
      const end = start + itemsPerPage - 1

      const { data: rsvpData, count, error: rsvpError } = await query.range(start, end)

      if (rsvpError) throw rsvpError

      setRSVPs(rsvpData || [])
      setTotalPages(Math.ceil((count || 0) / itemsPerPage))
    } catch (err: any) {
      console.error("Error fetching data:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function deleteRSVP(id: number, guests: number) {
    if (!window.confirm("Are you sure you want to delete this RSVP? This action cannot be undone.")) {
      return
    }

    try {
      // Delete the RSVP
      const { error: deleteError } = await supabaseClient.from("event_rsvps").delete().eq("id", id)

      if (deleteError) throw deleteError

      // Update event attendee count
      if (event) {
        const newAttendeeCount = Math.max(0, (event.current_attendees || 0) - guests)

        const { error: updateError } = await supabaseClient
          .from("events")
          .update({ current_attendees: newAttendeeCount })
          .eq("id", params.id)

        if (updateError) throw updateError

        // Update local state
        setEvent({
          ...event,
          current_attendees: newAttendeeCount,
        })
      }

      // Remove from local state
      setRSVPs(rsvps.filter((rsvp) => rsvp.id !== id))
    } catch (err: any) {
      console.error("Error deleting RSVP:", err)
      setError(err.message)
    }
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    setCurrentPage(1) // Reset to first page on new search
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  function exportToCSV() {
    if (!rsvps.length) return

    // Create CSV header
    const headers = ["Name", "Email", "Phone", "Guests", "Message", "Registration Date"]

    // Create CSV rows
    const rows = rsvps.map((rsvp) => [
      rsvp.name,
      rsvp.email,
      rsvp.phone || "",
      rsvp.guests.toString(),
      rsvp.message || "",
      formatDate(rsvp.created_at),
    ])

    // Combine header and rows
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")),
    ].join("\n")

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `${event?.title.replace(/\s+/g, "-")}-RSVPs.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Button variant="ghost" className="mb-2" onClick={() => router.push("/admin/events")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
          <h1 className="text-2xl font-bold">Save Your Spot for {event?.title}</h1>
        </div>
        {rsvps.length > 0 && (
          <Button onClick={exportToCSV}>
            <Download className="mr-2 h-4 w-4" /> Export to CSV
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Save Your Spot</CardTitle>
          <CardDescription>
            {event ? (
              <>
                {event.current_attendees || 0} {event.current_attendees === 1 ? "person" : "people"} registered
                {event.max_attendees
                  ? ` (${event.max_attendees - (event.current_attendees || 0)} spots remaining)`
                  : ""}
              </>
            ) : (
              "Loading event details..."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <div className="mb-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search by name or email..."
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
          ) : rsvps.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {searchQuery
                ? "No RSVPs found matching your search."
                : "No RSVPs have been submitted for this event yet."}
            </div>
          ) : (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead>Registration Date</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rsvps.map((rsvp) => (
                      <TableRow key={rsvp.id}>
                        <TableCell className="font-medium">{rsvp.name}</TableCell>
                        <TableCell>{rsvp.email}</TableCell>
                        <TableCell>{rsvp.phone || "-"}</TableCell>
                        <TableCell>{rsvp.guests}</TableCell>
                        <TableCell>{formatDate(rsvp.created_at)}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteRSVP(rsvp.id, rsvp.guests)}
                            title="Delete RSVP"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                            <span className="sr-only">Delete</span>
                          </Button>
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
