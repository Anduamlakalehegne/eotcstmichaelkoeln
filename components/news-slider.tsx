"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

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
  const { locale, translations } = useLocale();
  const [rawNews, setRawNews] = useState<any[]>([])
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
  // Localized month names
  const amMonths = [
    "መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሀምሌ", "ነሐሴ"
  ];
  const enMonths = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  const months = [
    "all",
    ...(locale === "am" ? amMonths : enMonths)
  ];

  // Correct mapping from Gregorian month index to Amharic month
  // Gregorian: 0=Jan, 1=Feb, ..., 6=Jul, ..., 11=Dec
  // Amharic: 0=መስከረም, ..., 10=ሀምሌ, 11=ነሐሴ
  // For most years, Gregorian July (6) ≈ ሀምሌ (10), August (7) ≈ ነሐሴ (11)
  // We'll use a static mapping for display, but note that Ethiopian months start ~8th of Gregorian months
  const gregorianToAmharicMonth = [
    4, // Jan → ጥር
    5, // Feb → የካቲት
    6, // Mar → መጋቢት
    7, // Apr → ሚያዝያ
    8, // May → ግንቦት
    9, // Jun → ሰኔ
    10, // Jul → ሀምሌ
    11, // Aug → ነሐሴ
    0, // Sep → መስከረም
    1, // Oct → ጥቅምት
    2, // Nov → ኅዳር
    3, // Dec → ታኅሣሥ
  ];

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/news`)
        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }
        const data = await response.json()
        
        // Filter news based on language
        const languageFilteredData = data.filter((item: any) => item.language === locale)
        setRawNews(languageFilteredData)
      } catch (err) {
        setError("Failed to load news. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [locale])

  // Remap news to current locale whenever rawNews or locale changes
  useEffect(() => {
    const mapped = rawNews.map((item: any) => {
      const dateObj = new Date(item.created_at);
      let month;
      if (locale === "am") {
        month = amMonths[gregorianToAmharicMonth[dateObj.getMonth()]];
      } else {
        month = dateObj.toLocaleString("default", { month: "short" }).toUpperCase();
      }
      return {
        ...item,
        formattedDate: {
          day: dateObj.getDate().toString().padStart(2, "0"),
          month,
          year: dateObj.getFullYear().toString(),
        },
        rawDate: dateObj
      };
    });
    // Sort news by created_at in descending order (newest first)
    mapped.sort((a: NewsItem, b: NewsItem) => b.rawDate.getTime() - a.rawDate.getTime())
    setNews(mapped)
  }, [rawNews, locale])

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
    return <div className="text-center">{translations.home.news.loading}</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{translations.home.news.error} {error}</div>
  }

  if (news.length === 0) {
    return <div className="text-center text-gray-500">{translations.home.news.noNews}</div>
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
              {year === "all" ? translations.home.news.allYears : year}
            </option>
          ))}
        </select>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {months.map((month, idx) => (
            <option key={month} value={month}>
              {month === "all" ? translations.home.news.allMonths : month}
            </option>
          ))}
        </select>
      </div>
      {/* Show message when no news matches the filters */}
      {filteredNews.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            {translations.home.news.noNewsForFilters}
          </p>
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
                    className="object-contain md:object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                      <span className="font-medium">{translations.home.news.date}</span> {new Date(item.created_at).toLocaleDateString(locale === "am" ? "am-ET" : undefined)}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link
                    href={`/news/church-news/${item.id}`}
                    className="inline-flex text-blue-600 hover:text-blue-700 text-sm font-medium items-center gap-1"
                  >
                    {translations.home.news.readMore}
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
            aria-label={translations.home.news.previousPage}
          >
            <ChevronLeft className="w-5 h-5 text-blue-600 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors md:right-4"
            aria-label={translations.home.news.nextPage}
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
              aria-label={`${translations.home.news.goToPage} ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}