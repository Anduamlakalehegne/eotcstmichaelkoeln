"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"
import PageHero from "@/components/page-hero"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin } from "lucide-react"

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(
  () => import("@/components/map-component"),
  { ssr: false }
)

// Sample data for German churches with coordinates
const churchesData = [
  {
    id: 1,
    name: "St. Gabriel Ethiopian Orthodox Tewahedo Church",
    address: "Pfarrstraße 1, 10317 Berlin",
    phone: "+49 30 12345678",
    email: "stgabriel@example.com",
    website: "https://stgabriel-berlin.de",
    region: "Berlin",
    coordinates: [52.520008, 13.404954], // Berlin coordinates
  },
  {
    id: 2,
    name: "St. Michael Ethiopian Orthodox Tewahedo Church",
    address: "Lindweilerweg 94, 50739",
    phone: "+49 221 5992623",
    email: "aeokd@gmx.de",
    website: "https://eotcstmichaelkoeln.de/",
    region: "cologne",
    coordinates: [48.137154, 11.576124], // Munich coordinates
  },
  {
    id: 3,
    name: "St. Mary Ethiopian Orthodox Tewahedo Church",
    address: "Hauptstraße 25, 60313 Frankfurt",
    phone: "+49 69 12345678",
    email: "stmary@example.com",
    website: "https://stmary-frankfurt.de",
    region: "Hessen",
    coordinates: [50.110924, 8.682127], // Frankfurt coordinates
  },
  {
    id: 4,
    name: "St. George Ethiopian Orthodox Tewahedo Church",
    address: "Kirchplatz 5, 50667 Köln",
    phone: "+49 221 87654321",
    email: "stgeorge@example.com",
    website: "https://stgeorge-koeln.de",
    region: "Nordrhein-Westfalen",
    coordinates: [50.935173, 6.953101], // Cologne coordinates
  },
  {
    id: 5,
    name: "Holy Trinity Ethiopian Orthodox Tewahedo Church",
    address: "Marktplatz 3, 20095 Hamburg",
    phone: "+49 40 12345678",
    email: "holytrinity@example.com",
    website: "https://holytrinity-hamburg.de",
    region: "Hamburg",
    coordinates: [53.551086, 9.993682], // Hamburg coordinates
  },
]

export default function ChurchesGermanyPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const [searchTerm, setSearchTerm] = useState(query)
  const [filteredChurches, setFilteredChurches] = useState(churchesData)
  const [selectedChurch, setSelectedChurch] = useState<typeof churchesData[0] | null>(null)

  useEffect(() => {
    if (query) {
      const filtered = churchesData.filter(
        (church) =>
          church.name.toLowerCase().includes(query.toLowerCase()) ||
          church.region.toLowerCase().includes(query.toLowerCase()) ||
          church.address.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredChurches(filtered)
      setSearchTerm(query)
    } else {
      setFilteredChurches(churchesData)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = churchesData.filter(
      (church) =>
        church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        church.address.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredChurches(filtered)

    // Update URL with search query
    const url = new URL(window.location.href)
    url.searchParams.set("query", searchTerm)
    window.history.pushState({}, "", url)
  }

  return (
    <div>
      {/* <PageHero
        title="Ethiopian Orthodox Churches in Germany"
      /> */}

      <p className="text-center text-2xl font-bold">በጀርመን(፣ ሆላንድ፥ ሰዊዘርላንድ፣ ኦስትርያ) የሚገኙ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ አብያተ ክርስቲያናት</p>

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search by name, region, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Component */}
          <div className="h-[600px] rounded-lg overflow-hidden border">
            <MapComponent
              churches={filteredChurches}
              selectedChurch={selectedChurch}
              onChurchSelect={setSelectedChurch}
            />
          </div>

          {/* Church List */}
          <div className="space-y-4">
            {filteredChurches.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">No churches found matching your search criteria.</p>
              </div>
            ) : (
              filteredChurches.map((church) => (
                <Card 
                  key={church.id} 
                  className={`overflow-hidden cursor-pointer transition-colors ${
                    selectedChurch?.id === church.id ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedChurch(church)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {church.id}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{church.name}</h3>
                        <p className="text-gray-600 mb-4">{church.region}</p>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Address:</strong> {church.address}
                          </p>
                          <p>
                            <strong>Phone:</strong> {church.phone}
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${church.email}`} className="text-blue-600 hover:underline">
                              {church.email}
                            </a>
                          </p>
                          <p>
                            <strong>Website:</strong>{" "}
                            <a
                              href={church.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {church.website}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
