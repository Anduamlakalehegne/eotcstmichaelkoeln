"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Calendar, Clock, MapPin, ChevronLeft, Users, ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RSVPForm } from "@/components/rsvp-form"
import { supabaseClient } from "@/lib/supabase-client"
import type { Event } from "@/lib/supabase"

export default function EventDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [relatedEvents, setRelatedEvents] = useState<any[]>([])

  useEffect(() => {
    async function fetchEvent() {
      try {
        // Fetch event details
        const { data, error: eventError } = await supabaseClient.from("events").select("*").eq("id", params.id).single()

        if (eventError) throw eventError

        setEvent(data)

        // Fetch related events
        const { data: relatedData, error: relatedError } = await supabaseClient
          .from("related_events")
          .select("related_event_id")
          .eq("event_id", params.id)

        if (relatedError) throw relatedError

        if (relatedData && relatedData.length > 0) {
          const relatedIds = relatedData.map((item) => item.related_event_id)

          const { data: relatedEventsData, error: relatedEventsError } = await supabaseClient
            .from("events")
            .select("id, title, category, image_url, date")
            .in("id", relatedIds)

          if (relatedEventsError) throw relatedEventsError

          setRelatedEvents(relatedEventsData || [])
        }
      } catch (err) {
        console.error("Error fetching event:", err)
        setError("Failed to load event. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/news/events">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">News</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news/events">Events</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{event.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Event Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge>{event.category}</Badge>
              {event.featured && (
                <Badge variant="secondary" className="bg-amber-500 text-white">
                  Featured
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </div>
              {event.max_attendees && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>
                    {event.current_attendees} / {event.max_attendees} attending
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Event Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={event.image_url || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Event Content */}
          <Tabs defaultValue="details" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="organizer">Organizer</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <div className="prose max-w-none">
                {/* Article Content */}
                <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="space-y-4">
                <p className="font-medium">{event.location}</p>
                <p>{event.address}</p>

                {/* Map placeholder */}
                <div className="relative h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-500">Map view would be displayed here</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="organizer">
              <div className="space-y-4">
                <p>
                  <strong>Organized by:</strong> {event.organizer || "Church Committee"}
                </p>
                <p>
                  <strong>Contact:</strong> {event.contact || "Contact the church office for more information"}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1 space-y-6">
          {/* RSVP Form */}
          <RSVPForm
            eventId={event.id}
            eventTitle={event.title}
            maxAttendees={event.max_attendees}
            currentAttendees={event.current_attendees}
          />

          {/* Related Events */}
          {relatedEvents.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Related Events</h3>
              <div className="space-y-4">
                {relatedEvents.map((relatedEvent) => (
                  <Card key={relatedEvent.id} className="overflow-hidden">
                    <div className="flex">
                      <div className="relative w-24 h-24">
                        <Image
                          src={relatedEvent.image_url || "/placeholder.svg"}
                          alt={relatedEvent.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 flex-1">
                        <Badge variant="outline" className="mb-1 text-xs">
                          {relatedEvent.category}
                        </Badge>
                        <h4 className="font-medium text-sm mb-1 line-clamp-1">{relatedEvent.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{relatedEvent.date}</p>
                        <Button size="sm" variant="link" className="p-0 h-auto" asChild>
                          <Link href={`/news/events/${relatedEvent.id}`}>View Event</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
