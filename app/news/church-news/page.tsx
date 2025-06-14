"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Grid, List, Filter, ArrowUpRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import type { News } from "@/lib/supabase"
import { useLocale } from "@/contexts/locale-context"

export default function ChurchNewsPage() {
  const { locale } = useLocale()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState<string>("All")
  const [selectedMonth, setSelectedMonth] = useState<string>("All")
  const [filteredNews, setFilteredNews] = useState<News[]>([])
  const [allNews, setAllNews] = useState<News[]>([])
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
  const [activeTab, setActiveTab] = useState<"all" | "featured">("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const [totalPages, setTotalPages] = useState(1)
  const [paginatedNews, setPaginatedNews] = useState<News[]>([])

  // Get translations based on locale
  const getTranslations = () => {
    switch (locale) {
      case "am":
        return {
          title: "የቤተ ክርስቲያን ዜናዎች",
          searchPlaceholder: "ዜናዎችን ይፈልጉ...",
          filters: "ፊልተሮች",
          category: "ምድብ",
          year: "ዓመት",
          month: "ወር",
          sortBy: "በየትኛው እንደሚደርጉ",
          newestFirst: "አዲሶቹ በመጀመሪያ",
          oldestFirst: "ቆዩት በመጀመሪያ",
          resetFilters: "ፊልተሮችን ዳግም ያዘጋጁ",
          noNews: "ምንም ዜናዎች አልተገኙም",
          tryAdjusting: "ፍለጋዎን ወይም ፊልተሮችዎን ይስሩ",
          clearSearch: "ፍለጋን ያጽዱ",
          readMore: "ተጨማሪ ያንብቡ",
          readFullArticle: "ሙሉውን ጽሑፍ ያንብቡ",
          featured: "ተስተውሏል",
          allNews: "ሁሉም ዜናዎች",
          by: "በ",
        }
      case "de":
        return {
          title: "Kirchennachrichten",
          searchPlaceholder: "Nachrichten suchen...",
          filters: "Filter",
          category: "Kategorie",
          year: "Jahr",
          month: "Monat",
          sortBy: "Sortieren nach",
          newestFirst: "Neueste zuerst",
          oldestFirst: "Älteste zuerst",
          resetFilters: "Filter zurücksetzen",
          noNews: "Keine Nachrichten gefunden",
          tryAdjusting: "Versuchen Sie, Ihre Suche oder Filter anzupassen",
          clearSearch: "Suche löschen",
          readMore: "Weiterlesen",
          readFullArticle: "Ganzen Artikel lesen",
          featured: "Hervorgehoben",
          allNews: "Alle Nachrichten",
          by: "Von",
        }
      default:
        return {
          title: "Church News",
          searchPlaceholder: "Search news...",
          filters: "Filters",
          category: "Category",
          year: "Year",
          month: "Month",
          sortBy: "Sort by",
          newestFirst: "Newest first",
          oldestFirst: "Oldest first",
          resetFilters: "Reset Filters",
          noNews: "No news articles found",
          tryAdjusting: "Try adjusting your search or filters",
          clearSearch: "Clear Search",
          readMore: "Read more",
          readFullArticle: "Read Full Article",
          featured: "Featured",
          allNews: "All News",
          by: "By",
        }
    }
  }

  const t = getTranslations()

  // Fetch news data
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news")
        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }
        const data = await response.json()
        
        // Filter news based on language
        const languageFilteredData = data.filter((item: News) => item.language === locale)
        setAllNews(languageFilteredData)

        // Extract unique categories
        const uniqueCategories = ["All", ...new Set(languageFilteredData.map((item: News) => item.category))]
        setCategories(uniqueCategories as string[])

        // Extract unique years
        const uniqueYears = ["All", ...new Set(languageFilteredData.map((item: News) => new Date(item.created_at).getFullYear().toString()))]
        setYears(uniqueYears as string[])
      } catch (err) {
        setError("Failed to load news. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [locale])

  // Filter and sort news based on search query, category, and sort order
  useEffect(() => {
    let filtered = [...allNews]

    // Filter by tab
    if (activeTab === "featured") {
      filtered = filtered.filter((item) => item.featured)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    // Filter by year
    if (selectedYear !== "All") {
      filtered = filtered.filter((item) => new Date(item.created_at).getFullYear().toString() === selectedYear)
    }

    // Filter by month
    if (selectedMonth !== "All") {
      const monthIndex = months.indexOf(selectedMonth) - 1 // -1 because "All" is at index 0
      filtered = filtered.filter((item) => new Date(item.created_at).getMonth() === monthIndex)
    }

    // Sort by date
    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return sortOrder === "newest" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
    })

    setFilteredNews(filtered)
    setTotalPages(Math.ceil(filtered.length / itemsPerPage))
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchQuery, selectedCategory, selectedYear, selectedMonth, sortOrder, activeTab, allNews, months])

  // Handle pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setPaginatedNews(filteredNews.slice(startIndex, endIndex))
  }, [filteredNews, currentPage])

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
            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as "all" | "featured")}
            >
              <TabsList className="w-full mb-4">
                <TabsTrigger value="all" className="flex-1">
                  {t.allNews}
                </TabsTrigger>
                <TabsTrigger value="featured" className="flex-1">
                  {t.featured}
                </TabsTrigger>
              </TabsList>
            </Tabs>

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
                    <SelectItem value="newest">{t.newestFirst}</SelectItem>
                    <SelectItem value="oldest">{t.oldestFirst}</SelectItem>
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
                  setActiveTab("all")
                }}
              >
                {t.resetFilters}
              </Button>
            </div>
          </Card>
        </div>

        <div className="flex-1">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-600">{t.noNews}</h3>
              <p className="text-gray-500 mt-2">{t.tryAdjusting}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setActiveTab("all")
                }}
              >
                {t.clearSearch}
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedNews.map((item) => (
                  <Card key={item.id} className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      {item.featured && <Badge className="absolute top-2 right-2 bg-amber-500">{t.featured}</Badge>}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{item.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-gray-500">{t.by} {item.author}</span>
                        <Button size="sm" variant="ghost" className="gap-1" asChild>
                          <Link href={`/news/church-news/${item.id}`}>
                            {t.readMore} <ArrowUpRight className="h-3 w-3" />
                          </Link>
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
          ) : (
            <>
              <div className="space-y-6">
                {paginatedNews.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="relative h-48 md:h-auto md:w-1/3 md:min-h-[200px]">
                        <Image
                          src={item.image_url || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        {item.featured && <Badge className="absolute top-2 right-2 bg-amber-500">{t.featured}</Badge>}
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <Badge variant="outline">{item.category}</Badge>
                          <span className="text-sm text-gray-500">
                            {new Date(item.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{t.by} {item.author}</span>
                          <Button asChild>
                            <Link href={`/news/church-news/${item.id}`}>{t.readFullArticle}</Link>
                          </Button>
                        </div>
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
