"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  id: number
  image_url: string
  title: string
  excerpt: string
  created_at: string
  formattedDate: {
    day: string
    month: string
    year: string
  }
  rawDate: Date
}

export default function NewsSlider() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const newsPerPage = 2
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get unique years and months from news
  const years = ["all", ...new Set(news.map(item => item.formattedDate.year))]
  const months = [
    "all",
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ]

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news")
        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }
        const data = await response.json()
        
        const formattedNews = data.map((item: any) => ({
          ...item,
          formattedDate: {
            day: new Date(item.created_at).getDate().toString().padStart(2, "0"),
            month: new Date(item.created_at).toLocaleString("default", { month: "short" }).toUpperCase(),
            year: new Date(item.created_at).getFullYear().toString(),
          },
          rawDate: new Date(item.created_at)
        }))
        
        // Sort news by created_at in descending order (newest first)
        formattedNews.sort((a: NewsItem, b: NewsItem) => b.rawDate.getTime() - a.rawDate.getTime())
        
        setNews(formattedNews)
        // Only show the latest two news items by default
        setFilteredNews(formattedNews.slice(0, 2))
      } catch (err) {
        setError("Failed to load news. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Filter news when year or month changes
  useEffect(() => {
    let filtered = [...news]
    
    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter(item => item.formattedDate.year === selectedYear)
    }
    
    // Filter by month
    if (selectedMonth !== "all") {
      filtered = filtered.filter(item => item.formattedDate.month === selectedMonth)
    }
    
    // Only show the latest two news items when no filters are applied
    if (selectedYear === "all" && selectedMonth === "all") {
      filtered = filtered.slice(0, 2)
    }
    
    setFilteredNews(filtered)
    setCurrentPage(0) // Reset to first page when filter changes
  }, [selectedYear, selectedMonth, news])

  useEffect(() => {
    if (!loading && !error && filteredNews.length > 0) {
      const timer = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % pageCount)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [filteredNews, loading, error])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  const pageCount = Math.ceil(filteredNews.length / newsPerPage)

  if (loading) {
    return <div className="text-center">Loading news...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  if (news.length === 0) {
    return <div className="text-center text-gray-500">No news found</div>
  }

  return (
    <div className="relative px-4 md:px-16">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
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

      {/* Show message when no news matches the filters */}
      {filteredNews.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No news available for the selected filters</p>
        </div>
      ) : (
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
              {filteredNews.slice(currentPage * newsPerPage, (currentPage + 1) * newsPerPage).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                      <span className="font-medium">Date:</span> {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link
                    href={`/news/church-news/${item.id}`}
                    className="inline-flex text-blue-600 hover:text-blue-700 text-sm font-medium items-center gap-1"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      )}

      {/* Navigation Buttons */}
      {filteredNews.length > newsPerPage && (
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
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentPage === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}