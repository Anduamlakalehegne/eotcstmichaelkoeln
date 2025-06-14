"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Calendar, FileText, ImageIcon, ChevronDown, X, Download } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { supabaseClient } from "@/lib/supabase-client"
import type { Archive } from "@/lib/supabase"

export default function ArchivePage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [archiveItems, setArchiveItems] = useState<Archive[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [filteredItems, setFilteredItems] = useState<Archive[]>([])
  const [selectedItem, setSelectedItem] = useState<Archive | null>(null)
  const [activeTab, setActiveTab] = useState("grid")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Fetch archive items
  useEffect(() => {
    fetchArchiveItems()
  }, [])

  const fetchArchiveItems = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("archive")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error

      setArchiveItems(data || [])
      setFilteredItems(data || [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Get unique years, categories, and types for filters
  const years = [...new Set(archiveItems.map((item) => item.year))].sort((a, b) => b.localeCompare(a))
  const categories = [...new Set(archiveItems.map((item) => item.category))]
  const types = [...new Set(archiveItems.map((item) => item.type))]

  // Apply filters when any filter changes
  useEffect(() => {
    let results = archiveItems

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    if (selectedYear) {
      results = results.filter((item) => item.year === selectedYear)
    }

    if (selectedCategory) {
      results = results.filter((item) => item.category === selectedCategory)
    }

    if (selectedType) {
      results = results.filter((item) => item.type === selectedType)
    }

    setFilteredItems(results)
  }, [searchQuery, selectedYear, selectedCategory, selectedType, archiveItems])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedYear(null)
    setSelectedCategory(null)
    setSelectedType(null)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Historical":
        return <Calendar className="w-4 h-4" />
      case "Administrative":
        return <FileText className="w-4 h-4" />
      case "Worship":
        return <Calendar className="w-4 h-4" />
      default:
        return <ImageIcon className="w-4 h-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="w-4 h-4" />
      case "photo":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <ImageIcon className="w-4 h-4" />
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Error loading archive items: {error}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Church Archive</h1>
          <p className="text-gray-600">Explore our historical photos and documents</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter size={16} />
            Filters
            <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
          </Button>

          <div className="w-[200px]">
            <Button
              variant={activeTab === "grid" ? "default" : "outline"}
              className="rounded-r-none w-1/2"
              onClick={() => setActiveTab("grid")}
            >
              Grid
            </Button>
            <Button
              variant={activeTab === "timeline" ? "default" : "outline"}
              className="rounded-l-none w-1/2"
              onClick={() => setActiveTab("timeline")}
            >
              Timeline
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-lg p-4 mb-8 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search archives..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Year</label>
                <Select
                  value={selectedYear || "all-years"}
                  onValueChange={(value) => setSelectedYear(value === "all-years" ? null : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-years">All Years</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select
                  value={selectedCategory || "all-categories"}
                  onValueChange={(value) => setSelectedCategory(value === "all-categories" ? null : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Type</label>
                <Select
                  value={selectedType || "all-types"}
                  onValueChange={(value) => setSelectedType(value === "all-types" ? null : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-types">All Types</SelectItem>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button variant="outline" onClick={clearFilters} className="flex items-center gap-2">
                <X size={16} />
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredItems.length} of {archiveItems.length} items
          {(selectedYear || selectedCategory || selectedType || searchQuery) && " with applied filters"}
        </p>
      </div>

      {/* Content Views */}
      {activeTab === "grid" ? (
        // Grid View
        filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600">{item.year}</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getTypeIcon(item.type)}
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No archive items found with the current filters.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )
      ) : // Timeline View
      filteredItems.length > 0 ? (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-12">
            {years
              .filter((year) => filteredItems.some((item) => item.year === year))
              .map((year, yearIndex) => (
                <div key={year} className="relative">
                  {/* Year marker */}
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="md:w-1/2 pr-4 md:text-right hidden md:block">
                      {yearIndex % 2 === 0 && <h3 className="text-2xl font-bold text-blue-600">{year}</h3>}
                    </div>
                    <div className="h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                    <div className="md:w-1/2 pl-4">
                      {yearIndex % 2 !== 0 && <h3 className="text-2xl font-bold text-blue-600 md:hidden">{year}</h3>}
                      {yearIndex % 2 === 0 && <h3 className="text-2xl font-bold text-blue-600 md:hidden">{year}</h3>}
                      {yearIndex % 2 !== 0 && (
                        <h3 className="text-2xl font-bold text-blue-600 hidden md:block">{year}</h3>
                      )}
                    </div>
                  </div>

                  {/* Year items */}
                  <div className="space-y-6">
                    {filteredItems
                      .filter((item) => item.year === year)
                      .map((item, itemIndex) => (
                        <div key={item.id} className="relative">
                          <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-1/2 pr-4 md:text-right hidden md:block">
                              {itemIndex % 2 === 0 && (
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="bg-white p-4 rounded-lg shadow-md inline-block cursor-pointer"
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-end mb-2">
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      {getTypeIcon(item.type)}
                                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                    </Badge>
                                  </div>
                                  <h4 className="font-bold mb-1">{item.title}</h4>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </motion.div>
                              )}
                            </div>
                            <div className="h-4 w-4 rounded-full bg-gray-300 border-2 border-white absolute left-[-2px] md:left-1/2 transform md:translate-x-[-50%] mt-2"></div>
                            <div className="md:w-1/2 pl-4">
                              {itemIndex % 2 !== 0 && (
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="bg-white p-4 rounded-lg shadow-md inline-block cursor-pointer md:hidden"
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-start mb-2">
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      {getTypeIcon(item.type)}
                                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                    </Badge>
                                  </div>
                                  <h4 className="font-bold mb-1">{item.title}</h4>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </motion.div>
                              )}
                              {itemIndex % 2 === 0 && (
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="bg-white p-4 rounded-lg shadow-md inline-block cursor-pointer md:hidden"
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-start mb-2">
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      {getTypeIcon(item.type)}
                                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                    </Badge>
                                  </div>
                                  <h4 className="font-bold mb-1">{item.title}</h4>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </motion.div>
                              )}
                              {itemIndex % 2 !== 0 && (
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  className="bg-white p-4 rounded-lg shadow-md inline-block cursor-pointer hidden md:block"
                                  onClick={() => setSelectedItem(item)}
                                >
                                  <div className="flex justify-start mb-2">
                                    <Badge variant="outline" className="flex items-center gap-1">
                                      {getTypeIcon(item.type)}
                                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                    </Badge>
                                  </div>
                                  <h4 className="font-bold mb-1">{item.title}</h4>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No archive items found with the current filters.</p>
          <Button variant="outline" onClick={clearFilters} className="mt-4">
            Clear Filters
          </Button>
        </div>
      )}

      {/* Item Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
            <DialogDescription>{selectedItem?.description}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="relative h-[300px] w-full md:w-1/2 rounded-lg overflow-hidden">
              <Image
                src={selectedItem?.image_url || "/placeholder.svg"}
                alt={selectedItem?.title || "Archive item"}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Year</h4>
                <p>{selectedItem?.year}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Type</h4>
                <p className="flex items-center gap-2">
                  {selectedItem && getTypeIcon(selectedItem.type)}
                  {selectedItem?.type.charAt(0).toUpperCase() + selectedItem?.type.slice(1)}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Category</h4>
                <p className="flex items-center gap-2">
                  {selectedItem && getCategoryIcon(selectedItem.category)}
                  {selectedItem?.category}
                </p>
              </div>
              {selectedItem?.tags && selectedItem.tags.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-500">Tags</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                    {selectedItem.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              )}
              <Button className="flex items-center gap-2 w-full">
                <Download size={16} />
                Download {selectedItem?.type === "document" ? "Document" : "Image"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
