"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Event {
  id: number
  date: { day: string; month: string; year: string }
  time: string
  title: string
  description: string
  rawDate: Date
}

type EventType = "upcoming" | "past" | "all"

export default function EventSlider() {
  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [currentEventPage, setCurrentEventPage] = useState(0)
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const [eventType, setEventType] = useState<EventType>("upcoming")
  const eventsPerPage = 2
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get unique years and months from events
  const years = ["all", ...new Set(events.map(event => event.date.year))]
  const months = [
    "all",
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ]

useEffect(() => {
  async function fetchEvents() {
    try {
      const response = await fetch("/api/events")
      if (!response.ok) {
        throw new Error("Failed to fetch events")
      }

      const data = await response.json()

        const formattedEvents = data.map((event: any) => ({
        ...event,
        date: {
          day: new Date(event.date).getDate().toString().padStart(2, "0"),
          month: new Date(event.date).toLocaleString("default", { month: "short" }).toUpperCase(),
          year: new Date(event.date).getFullYear().toString(),
        },
          rawDate: new Date(event.date)
      }))

      setEvents(formattedEvents)
        setFilteredEvents(formattedEvents)
    } catch (err) {
      setError("Failed to load events. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  fetchEvents()
}, [])

  // Filter events when year, month, or event type changes
  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let filtered = [...events]
    
    // Filter by event type (upcoming/past/all)
    if (eventType !== "all") {
      filtered = filtered.filter(event => {
        const eventDate = event.rawDate
        eventDate.setHours(0, 0, 0, 0)
        return eventType === "upcoming" ? eventDate >= today : eventDate < today
      })
    }
    
    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter(event => event.date.year === selectedYear)
    }
    
    // Filter by month
    if (selectedMonth !== "all") {
      filtered = filtered.filter(event => event.date.month === selectedMonth)
    }
    
    // Sort events: upcoming events by ascending date, past events by descending date
    filtered.sort((a, b) => {
      if (eventType === "upcoming") {
        return a.rawDate.getTime() - b.rawDate.getTime()
      } else if (eventType === "past") {
        return b.rawDate.getTime() - a.rawDate.getTime()
      }
      return 0
    })
    
    setFilteredEvents(filtered)
    setCurrentEventPage(0) // Reset to first page when filter changes
  }, [selectedYear, selectedMonth, eventType, events])

  useEffect(() => {
    if (!loading && !error && filteredEvents.length > 0) {
      const timer = setInterval(() => {
        setCurrentEventPage((prev) => (prev + 1) % pageCount)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [filteredEvents, loading, error])

  const nextPage = () => {
    setCurrentEventPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentEventPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  const pageCount = Math.ceil(filteredEvents.length / eventsPerPage)

  if (loading) {
    return <div className="text-center">Loading events...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  if (events.length === 0) {
    return <div className="text-center text-gray-500">No events found</div>
  }

  // Check if there are any upcoming events
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const hasUpcomingEvents = events.some(event => {
    const eventDate = new Date(event.rawDate)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate >= today
  })

  // If no upcoming events and we're in upcoming view, show message
  if (!hasUpcomingEvents && eventType === "upcoming") {
    return (
      <div className="text-center space-y-4">
        <p className="text-gray-500 text-lg">No upcoming events available</p>
        <button
          onClick={() => setEventType("past")}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Past Events
        </button>
      </div>
    )
}

  return (
    <div className="relative px-4 md:px-16">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {/* Event Type Toggle */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setEventType("upcoming")}
            className={`px-4 py-2 rounded-md transition-colors ${
              eventType === "upcoming" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setEventType("past")}
            className={`px-4 py-2 rounded-md transition-colors ${
              eventType === "past" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Past
          </button>
          <button
            onClick={() => setEventType("all")}
            className={`px-4 py-2 rounded-md transition-colors ${
              eventType === "all" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
        </div>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year === "all" ? "All Years" : year}
            </option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month === "all" ? "All Months" : month}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEventPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            {filteredEvents
              .slice(currentEventPage * eventsPerPage, (currentEventPage + 1) * eventsPerPage)
              .map((event, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-4 bg-white p-4 rounded-lg shadow-sm md:p-6">
                  <div className="text-center bg-blue-600 text-white rounded-lg flex flex-col justify-center items-center min-w-[80px] md:min-w-[120px]">
                    <div className="text-2xl font-bold md:text-4xl">{event.date.day}</div>
                    <div className="text-lg md:text-xl">{event.date.month}</div>
                    <div className="text-xs md:text-sm">{event.date.year}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1 md:text-sm md:mb-2">{event.time}</div>
                    <h3 className="text-lg font-bold mb-1 md:text-xl md:mb-2">{event.title}</h3>
                    <div
                      className="text-gray-600 text-xs md:text-sm"
                      dangerouslySetInnerHTML={{ __html: event.description.substring(0, 220) }}
                    />
                  </div>
                  <Link
                    href={`/news/events/${event.id}`}
                    className="inline-flex text-blue-600 hover:text-blue-700 text-sm font-medium items-center gap-1"
                  >
                    Detail
                  </Link>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {filteredEvents.length > eventsPerPage && (
        <>
      <button
        onClick={prevPage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors md:left-4"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5 text-blue-600 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextPage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors md:right-4"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5 text-blue-600 md:w-6 md:h-6" />
      </button>
        </>
      )}

      {/* Pagination Dots */}
      {pageCount > 1 && (
      <div className="flex justify-center gap-2 mt-4 md:mt-8">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentEventPage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentEventPage === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      )}
    </div>
  )
}
