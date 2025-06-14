"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Clock, Loader2, Save } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ImageUpload } from "@/components/image-upload"
import { MultiImageUpload, type RelatedImage } from "@/components/multi-image-upload"
import { supabaseClient } from "@/lib/supabase-client"

const EVENT_CATEGORIES = [
  "Church Service",
  "Holiday",
  "Community Event",
  "Prayer Meeting",
  "Bible Study",
  "Youth Event",
  "Children's Event",
  "Worship Night",
  "Conference",
  "Workshop",
  "Fundraiser",
  "Other",
]

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "am", label: "አማርኛ" },
  { value: "de", label: "Deutsch" },
]

export default function CreateEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [relatedImages, setRelatedImages] = useState<RelatedImage[]>([])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Church Service",
    date: format(new Date(), "yyyy-MM-dd"),
    time: "10:00",
    location: "",
    address: "",
    organizer: "",
    contact: "",
    max_attendees: "",
    featured: false,
    image_url: "",
    language: "en",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, featured: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setDate(date)
      setFormData((prev) => ({ ...prev, date: format(date, "yyyy-MM-dd") }))
    }
  }

  const handleDescriptionChange = (html: string) => {
    setFormData((prev) => ({ ...prev, description: html }))
  }

  const handleImageChange = (url: string) => {
    setFormData((prev) => ({ ...prev, image_url: url }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (!formData.title) throw new Error("Title is required")
      if (!formData.description) throw new Error("Description is required")
      if (!formData.date) throw new Error("Date is required")
      if (!formData.time) throw new Error("Time is required")
      if (!formData.location) throw new Error("Location is required")

      // Insert event
      const { data: eventData, error: eventError } = await supabaseClient
        .from("events")
        .insert({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          date: formData.date,
          time: formData.time,
          location: formData.location,
          address: formData.address,
          organizer: formData.organizer,
          contact: formData.contact,
          max_attendees: formData.max_attendees ? Number.parseInt(formData.max_attendees) : null,
          featured: formData.featured,
          image_url: formData.image_url,
          current_attendees: 0,
          language: formData.language,
        })
        .select()

      if (eventError) {
        console.error("Supabase insert error:", eventError) // Log the full error object
        throw new Error(eventError.message || "Failed to create event")
      }

      const eventId = eventData[0].id

      // Handle related images if any
      if (relatedImages.length > 0) {
        const galleryItems = relatedImages.map((image, index) => ({
          event_id: eventId,
          image_url: image.image_url,
          caption: image.caption,
          display_order: index,
        }))

        const { error: galleryError } = await supabaseClient.from("event_gallery").insert(galleryItems)

        if (galleryError) {
          console.error("Supabase gallery insert error:", galleryError) // Log the full error object
          throw new Error(galleryError.message || "Failed to insert gallery images")
        }
      }

      router.push("/admin/events")
    } catch (err: any) {
      console.error("Error creating event:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Create New Event</h1>
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Basic information about the event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title *</Label>
                <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {EVENT_CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="featured">Featured Event</Label>
                    <Switch id="featured" checked={formData.featured} onCheckedChange={handleSwitchChange} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Featured events appear on the homepage and are highlighted in listings
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={handleDateChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time *</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      className="pl-10"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Main Church Building"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Full address of the event location"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organizer">Organizer (Optional)</Label>
                  <Input
                    id="organizer"
                    name="organizer"
                    placeholder="Person or group organizing the event"
                    value={formData.organizer}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact (Optional)</Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder="Contact information for inquiries"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max_attendees">Maximum Attendees (Optional)</Label>
                <Input
                  id="max_attendees"
                  name="max_attendees"
                  type="number"
                  min="1"
                  placeholder="Leave empty for unlimited"
                  value={formData.max_attendees}
                  onChange={handleChange}
                />
                <p className="text-sm text-gray-500">Set a limit for the number of people who can RSVP to this event</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData({ ...formData, language: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Description</CardTitle>
              <CardDescription>Provide details about the event</CardDescription>
            </CardHeader>
            <CardContent>
              <RichTextEditor value={formData.description} onChange={handleDescriptionChange} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
              <CardDescription>Main image displayed for the event</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUpload value={formData.image_url} onChange={handleImageChange} folder="events" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gallery Images</CardTitle>
              <CardDescription>Additional images for the event gallery</CardDescription>
            </CardHeader>
            <CardContent>
              <MultiImageUpload images={relatedImages} onChange={setRelatedImages} folder="event-gallery" />
            </CardContent>
          </Card>

          <CardFooter className="flex justify-between border rounded-lg p-6">
            <Button variant="outline" onClick={() => router.back()} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Create Event
                </>
              )}
            </Button>
          </CardFooter>
        </div>
      </form>
    </div>
  )
}
