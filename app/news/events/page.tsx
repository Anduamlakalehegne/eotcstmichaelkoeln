"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Grid, List, Calendar, Filter, MapPin, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import type { Event } from "@/lib/supabase"
import { useLocale } from "@/contexts/locale-context"
import DOMPurify from "dompurify"

export default function EventsPage() {
  const { locale } = useLocale()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState<string>("All")
  const [selectedMonth, setSelectedMonth] = useState<string>("All")
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [allEvents, setAllEvents] = useState<Event[]>([])
  const [categories, setCategories] = useState<string[]>(["All"])
  const [years, setYears] = useState<string[]>(["All"])
  const [months] = useState<string[]>([
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ])
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const [totalPages, setTotalPages] = useState(1)
  const [paginatedEvents, setPaginatedEvents] = useState<Event[]>([])

  // Get translations based on locale
  const getTranslations = () => {
    switch (locale) {
      case "am":
        return {
          title: "መጪ ዝግጅቶች",
          searchPlaceholder: "ዝግጅቶችን ይፈልጉ...",
          filters: "ፊልተሮች",
          category: "ምድብ",
          year: "ዓመት",
          month: "ወር",
          sortBy: "በየትኛው እንደሚደርጉ",
          upcomingFirst: "የሚመጡ በመጀመሪያ",
          laterFirst: "የሚቀጥሉ በመጀመሪያ",
          resetFilters: "ፊልተሮችን ዳግም ያዘጋጁ",
          noEvents: "ምንም ዝግጅቶች አልተገኙም",
          tryAdjusting: "ፍለጋዎን ወይም ፊልተሮችዎን ይስሩ",
          clearSearch: "ፍለጋን ያጽዱ",
          viewDetails: "ዝርዝሮችን ይመልከቱ",
          featured: "ተስተውሏል",
        }
      case "de":
        return {
          title: "Kommende Veranstaltungen",
          searchPlaceholder: "Veranstaltungen suchen...",
          filters: "Filter",
          category: "Kategorie",
          year: "Jahr",
          month: "Monat",
          sortBy: "Sortieren nach",
          upcomingFirst: "Kommende zuerst",
          laterFirst: "Spätere zuerst",
          resetFilters: "Filter zurücksetzen",
          noEvents: "Keine Veranstaltungen gefunden",
          tryAdjusting: "Versuchen Sie, Ihre Suche oder Filter anzupassen",
          clearSearch: "Suche löschen",
          viewDetails: "Details anzeigen",
          featured: "Hervorgehoben",
        }
      default:
        return {
          title: "Upcoming Events",
          searchPlaceholder: "Search events...",
          filters: "Filters",
          category: "Category",
          year: "Year",
          month: "Month",
          sortBy: "Sort by",
          upcomingFirst: "Upcoming first",
          laterFirst: "Later events first",
          resetFilters: "Reset Filters",
          noEvents: "No events found",
          tryAdjusting: "Try adjusting your search or filters",
          clearSearch: "Clear Search",
          viewDetails: "View Details",
          featured: "Featured",
        }
    }
  }

  const t = getTranslations()

  // Fetch events data
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }
        const data = await response.json()
        
        // Filter events based on language
        const languageFilteredData = data.filter((event: Event) => event.language === locale)
        setAllEvents(languageFilteredData)

        // Extract unique categories
        const uniqueCategories = ["All", ...new Set(languageFilteredData.map((item: Event) => item.category))]
        setCategories(uniqueCategories as string[])

        // Extract unique years
        const uniqueYears = ["All", ...new Set(languageFilteredData.map((item: Event) => new Date(item.date).getFullYear().toString()))]
        setYears(uniqueYears as string[])
      } catch (err) {
        setError("Failed to load events. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [locale])

  // Filter and sort events based on search query, category, year, month, and sort order
  useEffect(() => {
    let filtered = [...allEvents]

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((event) => event.category === selectedCategory)
    }

    // Filter by year
    if (selectedYear !== "All") {
      filtered = filtered.filter((event) => new Date(event.date).getFullYear().toString() === selectedYear)
    }

    // Filter by month
    if (selectedMonth !== "All") {
      const monthIndex = months.indexOf(selectedMonth) - 1 // -1 because "All" is at index 0
      filtered = filtered.filter((event) => new Date(event.date).getMonth() === monthIndex)
    }

    // Sort by date
    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return sortOrder === "newest" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
    })

    setFilteredEvents(filtered)
    setTotalPages(Math.ceil(filtered.length / itemsPerPage))
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchQuery, selectedCategory, selectedYear, selectedMonth, sortOrder, allEvents, months])

  // Handle pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setPaginatedEvents(filteredEvents.slice(startIndex, endIndex))
  }, [filteredEvents, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">{t.title}</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={t.searchPlaceholder}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-64 space-y-4">
          <Card className="p-4">
            <h2 className="font-semibold text-lg mb-4 flex items-center">
              <Filter className="mr-2 h-4 w-4" /> {t.filters}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">{t.category}</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.category} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">{t.year}</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.year} />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">{t.month}</label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.month} />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">{t.sortBy}</label>
                <Select value={sortOrder} onValueChange={(value: "newest" | "oldest") => setSortOrder(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.sortBy} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">{t.upcomingFirst}</SelectItem>
                    <SelectItem value="oldest">{t.laterFirst}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedYear("All")
                  setSelectedMonth("All")
                  setSortOrder("newest")
                }}
              >
                {t.resetFilters}
              </Button>
            </div>
          </Card>
        </div>

        <div className="flex-1">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-600">{t.noEvents}</h3>
              <p className="text-gray-500 mt-2">{t.tryAdjusting}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                {t.clearSearch}
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {paginatedEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={event.image_url || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      {event.featured && <Badge className="absolute top-2 right-2 bg-amber-500">{t.featured}</Badge>}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          {event.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
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
                      </div>
                      <div 
                        className="text-gray-600 text-sm line-clamp-3 mb-4 prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ 
                          __html: DOMPurify.sanitize(event.description) 
                        }} 
                      />
                      <Button className="mt-auto" asChild>
                        <Link href={`/news/events/${event.id}`}>{t.viewDetails}</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink onClick={() => handlePageChange(page)} isActive={currentPage === page}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <>
              <div className="space-y-6">
                {paginatedEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="relative h-48 md:h-auto md:w-1/3 md:min-h-[200px]">
                        <Image
                          src={event.image_url || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        {event.featured && <Badge className="absolute top-2 right-2 bg-amber-500">{t.featured}</Badge>}
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
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
                        </div>

                        <Accordion type="single" collapsible className="mb-4">
                          <AccordionItem value="description" className="border-none">
                            <AccordionTrigger className="py-0 text-sm font-medium">Event Description</AccordionTrigger>
                            <AccordionContent>
                              <div 
                                className="text-gray-600 text-sm prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ 
                                  __html: DOMPurify.sanitize(event.description) 
                                }} 
                              />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <Button asChild>
                          <Link href={`/news/events/${event.id}`}>{t.viewDetails}</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink onClick={() => handlePageChange(page)} isActive={currentPage === page}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
