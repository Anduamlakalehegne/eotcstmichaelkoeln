"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, MapPin, Users, Info, Download } from "lucide-react"
import { format, addDays } from "date-fns"
import { createClient } from "@/lib/supabase/client"

// Ethiopian calendar conversion utilities
const ethiopianMonths = [
  "Meskerem",
  "Tikimt",
  "Hidar",
  "Tahsas",
  "Tir",
  "Yekatit",
  "Megabit",
  "Miyazya",
  "Ginbot",
  "Sene",
  "Hamle",
  "Nehase",
  "Pagume",
]

// Function to convert Gregorian date to Ethiopian date
function toEthiopianDate(gregorianDate: Date): { year: number; month: number; day: number } {
  // Get Gregorian date components
  const gregYear = gregorianDate.getFullYear()
  const gregMonth = gregorianDate.getMonth() + 1 // JavaScript months are 0-indexed
  const gregDay = gregorianDate.getDate()

  // Determine if it's a leap year in the Gregorian calendar
  const isLeapYear = (gregYear % 4 === 0 && gregYear % 100 !== 0) || gregYear % 400 === 0

  // Ethiopian new year in Gregorian calendar is usually September 11
  // But it's September 12 in leap years
  const newYearDay = isLeapYear ? 12 : 11

  let ethYear

  // If date is between January 1 and September 10/11, subtract 8 from Ethiopian year
  if (gregMonth < 9 || (gregMonth === 9 && gregDay < newYearDay)) {
    ethYear = gregYear - 8
  } else {
    ethYear = gregYear - 7
  }

  // Define the number of days in each Gregorian month
  const gregDaysInMonth = [0, 31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Calculate the day of the year in the Gregorian calendar
  let gregDayOfYear = gregDay
  for (let m = 1; m < gregMonth; m++) {
    gregDayOfYear += gregDaysInMonth[m]
  }

  // Calculate the Ethiopian date
  let ethMonth, ethDay

  // If before Ethiopian New Year (Sept 11/12), calculate based on previous Ethiopian year
  if (gregMonth < 9 || (gregMonth === 9 && gregDay < newYearDay)) {
    // Days from Ethiopian new year (Sept 11/12) to December 31
    let daysFromNewYear = 0
    for (let m = 9; m <= 12; m++) {
      if (m === 9) {
        daysFromNewYear += 30 - newYearDay + 1
      } else {
        daysFromNewYear += gregDaysInMonth[m]
      }
    }

    // Add days in current year up to current date
    for (let m = 1; m < gregMonth; m++) {
      daysFromNewYear += gregDaysInMonth[m]
    }
    daysFromNewYear += gregDay

    // Convert to Ethiopian month and day
    // Ethiopian calendar has 12 months of 30 days plus a 13th month of 5 or 6 days
    ethMonth = Math.ceil(daysFromNewYear / 30)
    ethDay = daysFromNewYear % 30

    if (ethDay === 0) ethDay = 30

    // Adjust for Pagume (the 13th month with 5 or 6 days)
    if (ethMonth > 13) {
      ethMonth = 13
      ethDay = daysFromNewYear - 12 * 30
    }
  } else {
    // After Ethiopian New Year, calculate days since new year
    let daysSinceNewYear = 0

    if (gregMonth === 9) {
      daysSinceNewYear = gregDay - newYearDay + 1
    } else {
      // Add days from September new year to end of September
      daysSinceNewYear = gregDaysInMonth[9] - newYearDay + 1

      // Add days for full months between October and current month
      for (let m = 10; m < gregMonth; m++) {
        daysSinceNewYear += gregDaysInMonth[m]
      }

      // Add days in current month
      daysSinceNewYear += gregDay
    }

    // Convert to Ethiopian month and day
    ethMonth = Math.ceil(daysSinceNewYear / 30)
    ethDay = daysSinceNewYear % 30

    if (ethDay === 0) ethDay = 30
  }

  // Correction for the off-by-one error
  ethDay = ethDay
  if (ethDay === 0) {
    ethMonth = ethMonth - 1
    if (ethMonth === 0) {
      ethMonth = 13
      ethYear = ethYear - 1
    }
    ethDay = 30
  }

  return { year: ethYear, month: ethMonth, day: ethDay }
}

// Function to format Ethiopian date as string
function formatEthiopianDate(gregorianDate: Date): string {
  const ethDate = toEthiopianDate(gregorianDate)
  const monthIndex = ethDate.month - 1
  return `${ethiopianMonths[monthIndex]} ${ethDate.day}, ${ethDate.year} E.C.`
}

// Sample church events data with Ethiopian calendar dates
const churchEvents = [
  {
    id: 1,
    title: "Divine Liturgy",
    gregorianDate: new Date(2024, 2, 10),
    time: "8:00 AM - 11:00 AM",
    location: "Main Church",
    type: "regular",
    description: "Weekly Sunday Divine Liturgy service",
    attendees: "All welcome",
    isEthiopianHoliday: false,
  },
  {
    id: 2,
    title: "Ethiopian Easter (Fasika)",
    gregorianDate: new Date(2024, 4, 5),
    time: "6:00 PM - 9:00 PM",
    location: "Main Church",
    type: "holiday",
    description:
      "Celebration of Ethiopian Easter, the most significant holiday celebrating the resurrection of Jesus Christ.",
    attendees: "All welcome",
    isEthiopianHoliday: true,
  },
  {
    id: 3,
    title: "Youth Bible Study",
    gregorianDate: new Date(2024, 2, 15),
    time: "4:00 PM - 5:30 PM",
    location: "Church Hall",
    type: "youth",
    description: "Weekly youth Bible study and discussion",
    attendees: "Youth members",
    isEthiopianHoliday: false,
  },
  {
    id: 4,
    title: "Timkat (Epiphany)",
    gregorianDate: new Date(2024, 0, 19),
    time: "All Day",
    location: "Main Church and Procession",
    type: "holiday",
    description: "Timkat is the Ethiopian Orthodox celebration of Epiphany.",
    attendees: "All welcome",
    isEthiopianHoliday: true,
  },
]

// Add more Ethiopian Orthodox holidays
const ethiopianHolidays = [
  {
    id: 101,
    title: "Enkutatash (Ethiopian New Year)",
    gregorianDate: new Date(2024, 8, 11), // September 11, 2024
    description: "Ethiopian New Year marking the end of the rainy season",
    type: "holiday",
    isEthiopianHoliday: true,
  },
  {
    id: 102,
    title: "Lideta (Birth of Virgin Mary)",
    gregorianDate: new Date(2024, 4, 9), // May 9, 2024 (approximate)
    description: "Celebration of the birth of the Virgin Mary",
    type: "holiday",
    isEthiopianHoliday: true,
  },
]

// Combine all events
const allEvents = [...churchEvents, ...ethiopianHolidays]

interface ChurchCalendar {
  id: string
  year: number
  title: string
  file_path: string
  file_name: string
  file_size: number
  mime_type: string
  is_active: boolean
  created_at: string
}

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"month" | "week" | "day">("month")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [calendarType, setCalendarType] = useState<"gregorian" | "ethiopian">("ethiopian")
  const [holidayInfo, setHolidayInfo] = useState<{ open: boolean; holiday: any | null }>({
    open: false,
    holiday: null,
  })
  const [currentCalendar, setCurrentCalendar] = useState<ChurchCalendar | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchCurrentCalendar()
  }, [])

  const fetchCurrentCalendar = async () => {
    try {
      const currentYear = new Date().getFullYear()
      const { data, error } = await supabase
        .from('church_calendars')
        .select('*')
        .eq('year', currentYear)
        .eq('is_active', true)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No calendar found for current year
          setCurrentCalendar(null)
        } else {
          throw error
        }
      } else {
        // Ensure we have a public URL
        if (data && !data.file_path.startsWith('http')) {
          const { data: { publicUrl } } = supabase.storage
            .from('church-calendars')
            .getPublicUrl(data.file_path)
          setCurrentCalendar({ ...data, file_path: publicUrl })
        } else {
          setCurrentCalendar(data)
        }
      }
    } catch (error) {
      console.error('Error fetching current calendar:', error)
    } finally {
      setLoading(false)
    }
  }

  // Function to get events for a specific date
  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return []
    return allEvents.filter((event) => event.gregorianDate.toDateString() === date.toDateString())
  }

  // Function to render event badges
  const renderEventBadges = (events: typeof allEvents) => {
    return events.map((event) => {
      const badgeColors: Record<string, string> = {
        regular: "bg-blue-500",
        holiday: "bg-red-500",
        youth: "bg-green-500",
        meeting: "bg-purple-500",
        service: "bg-orange-500",
      }

      return (
        <Badge
          key={event.id}
          className={`${badgeColors[event.type] || "bg-gray-500"} cursor-pointer mb-2`}
          onClick={() => setSelectedEvent(event)}
        >
          {event.title}
        </Badge>
      )
    })
  }

  // Function to get upcoming events
  const getUpcomingEvents = () => {
    const today = new Date()
    return allEvents
      .filter((event) => event.gregorianDate >= today)
      .sort((a, b) => a.gregorianDate.getTime() - b.gregorianDate.getTime())
      .slice(0, 5)
  }

  // Function to get Ethiopian holidays
  const getEthiopianHolidays = () => {
    return allEvents.filter((event) => event.isEthiopianHoliday)
  }

  // Function to check if a date has events
  const hasEvents = (date: Date) => {
    return getEventsForDate(date).length > 0
  }

  // Function to check if a date has Ethiopian holidays
  const hasHoliday = (date: Date) => {
    return getEventsForDate(date).some((event) => event.isEthiopianHoliday)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Church Calendar</h1>
        <p className="text-gray-600 mb-6">View our church events in both Gregorian and Ethiopian calendars</p>

        <div className="flex flex-wrap items-center gap-4">
          <Select value={view} onValueChange={(value: "month" | "week" | "day") => setView(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month View</SelectItem>
              <SelectItem value="week">Week View</SelectItem>
              <SelectItem value="day">Day View</SelectItem>
            </SelectContent>
          </Select>

          <Select value={calendarType} onValueChange={(value: "gregorian" | "ethiopian") => setCalendarType(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Calendar type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gregorian">Gregorian Calendar</SelectItem>
              <SelectItem value="ethiopian">Ethiopian Calendar</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-[300px,1fr] gap-8">
        <div className="space-y-6">
          <Card className="p-4">
            <div className="space-y-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  event: hasEvents,
                  holiday: hasHoliday,
                }}
                modifiersStyles={{
                  event: { fontWeight: "bold" },
                  holiday: { color: "red", fontWeight: "bold" },
                }}
                footer={
                  calendarType === "ethiopian" && date ? (
                    <div className="text-center pt-2 border-t mt-2">
                      <p className="text-lg font-medium">{formatEthiopianDate(date)}</p>
                    </div>
                  ) : null
                }
              />
            </div>
          </Card>

        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <Tabs defaultValue="orthodox">
              <TabsList className="mb-4">
                <TabsTrigger value="orthodox">የኢትዮጵያ ኦርቶዶክስ ተዋህዶ የቀን መቁጠሪያ</TabsTrigger>
                <TabsTrigger value="calendar">የቤተክርስቲያን የዓመቱ መቁጠሪያ</TabsTrigger>
              </TabsList>

              <TabsContent value="orthodox">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 pb-10">
                    <h3 className="text-lg font-semibold mb-4">የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን የቀን መቁጠሪያ</h3>
                    
                    <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">የዛሬ ቀን በኢትዮጵያ ካሌንዳር</h3>
                    {date && (
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-800">{formatEthiopianDate(date)}</p>
                        <p className="text-gray-600 mt-2">
                          {format(date, "MMMM d, yyyy")} (Gregorian Calendar)
                        </p>
                      </div>
                    )}
                  </div>
                    <p className="text-gray-600 mb-4">
                      የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን የቀን መቁጠሪያ በራሱ የሚለየው የሆነ የቀን መቁጠሪያ ሲሆን፣ ከግሪጎሪያን ካሌንዳር ከ 7 ወይም 8 ዓመት ይቀየራል። ይህ የቀን መቁጠሪያ በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን ውስጥ ለሃይማኖታዊ በዓላት እና ለሌሎች አስፈላጊ ቀናት ይጠቀማል።
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold mb-2">የኢትዮጵያ የቀን መቁጠሪያ ባህሪያት</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>13 ወራት አሉት (12 ወራት እያንዳንዳቸው 30 ቀን እና 1 ወር 5 ወይም 6 ቀን)</li>
                          <li>የአዲስ ዓመት ቀን በመስከረም 1 (September 11/12)</li>
                          <li>የበዓላት ቀናት በኢትዮጵያ ካሌንዳር ይሰላሉ</li>
                          <li>የጸደቀ የቤተክርስቲያን የቀን መቁጠሪያ ነው</li>
                        </ul>
                      </div>
                      
                      {/* <div>
                        <h4 className="font-semibold mb-2">ዋና ዋና በዓላት</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>አዲስ ዓመት (እንኩታሽ) - መስከረም 1</li>
                          <li>መስቀል (መስቀል) - ታህሳስ 17</li>
                          <li>ገና (ብልሃት) - ታህሳስ 29</li>
                          <li>በገና (በገና) - ጥር 29</li>
                          <li>ፋሲካ (ፋሲካ) - በገና 15</li>
                        </ul>
                      </div> */}
                    </div>
                  </div>

                  
                </div>
              </TabsContent>

              <TabsContent value="calendar">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">የቤተክርስቲያን የዓመቱ መቁጠሪያ</h3>
                    {currentCalendar && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(currentCalendar.file_path, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    )}
                  </div>

                  {loading ? (
                    <div className="text-center py-8">Loading calendar...</div>
                  ) : currentCalendar ? (
                    <div className="border rounded-lg overflow-hidden">
                      <iframe
                        src={currentCalendar.file_path}
                        className="w-full h-[800px]"
                        title={currentCalendar.title}
                      />
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No calendar available for the current year
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedEvent.title}</DialogTitle>
              <DialogDescription>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    <div>
                      <span>{selectedEvent.gregorianDate.toLocaleDateString()}</span>
                      {calendarType === "ethiopian" && (
                        <span className="block text-xs text-gray-500">
                          {formatEthiopianDate(selectedEvent.gregorianDate)}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedEvent.time && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  )}

                  {selectedEvent.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}

                  {selectedEvent.attendees && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{selectedEvent.attendees}</span>
                    </div>
                  )}

                  {selectedEvent.isEthiopianHoliday && <Badge className="bg-red-500">Ethiopian Orthodox Holiday</Badge>}

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-700">{selectedEvent.description}</p>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>

      {/* Holiday Info Dialog */}
      <Dialog open={holidayInfo.open} onOpenChange={(open) => setHolidayInfo({ ...holidayInfo, open })}>
        {holidayInfo.holiday && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl">{holidayInfo.holiday.title}</DialogTitle>
              <DialogDescription>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    <div>
                      <span>{holidayInfo.holiday.gregorianDate.toLocaleDateString()}</span>
                      {calendarType === "ethiopian" && (
                        <span className="block text-xs text-gray-500">
                          {formatEthiopianDate(holidayInfo.holiday.gregorianDate)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-700">{holidayInfo.holiday.description}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">Significance in Ethiopian Orthodox Tradition</h4>
                    <p className="text-gray-700">
                      This holiday holds special significance in the Ethiopian Orthodox Tewahedo Church, with unique
                      traditions and ceremonies that have been preserved for centuries.
                    </p>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
