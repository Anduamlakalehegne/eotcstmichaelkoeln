"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
// import { createClient } from "@/lib/supabase/client"
import { Download, Upload, Trash2 } from "lucide-react"

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

function generateStorageFileName(originalName: string, year: string): string {
  // Generate a unique identifier
  const timestamp = new Date().getTime()
  // Create a storage-friendly name using only ASCII characters
  return `calendar_${year}_${timestamp}.pdf`
}

export default function CalendarsPage() {
  const [calendars, setCalendars] = useState<ChurchCalendar[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [title, setTitle] = useState("")
  const router = useRouter()
  const { toast } = useToast()
  // const supabase = createClient()

  useEffect(() => {
    fetchCalendars()
  }, [])

  const fetchCalendars = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/church-calendars`)
      if (!res.ok) throw new Error('Failed to fetch calendars')
      const data = await res.json()
      setCalendars(data || [])
    } catch (error) {
      console.error('Error fetching calendars:', error)
      toast({
        title: "Error",
        description: "Failed to fetch calendars",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        })
        return
      }
      setSelectedFile(file)
      setTitle(file.name.replace(".pdf", ""))
    }
  }

  const handleUpload = async () => {
    if (!selectedFile || !year || !title) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and select a file",
        variant: "destructive",
      })
      return
    }

    try {
      setUploading(true)

      // Generate a simple storage-friendly filename
      const timestamp = Date.now()
      const storageFileName = `calendar_${year}_${timestamp}.pdf`

      // Upload file to backend (expects multipart/form-data)
      const form = new FormData()
      form.append('file', selectedFile)
      form.append('year', year)
      form.append('title', title)

      const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/church-calendars/upload`, {
        method: 'POST',
        body: form,
      })
      if (!uploadRes.ok) {
        const err = await uploadRes.json().catch(() => ({}))
        throw new Error(err.error || 'Failed to upload calendar')
      }

      toast({
        title: "Success",
        description: "Calendar uploaded successfully",
      })
      setSelectedFile(null)
      setYear("")
      setTitle("")
      fetchCalendars()
    } catch (error: any) {
      console.error("Error uploading calendar:", {
        message: error.message,
        name: error.name,
        stack: error.stack
      })
      toast({
        title: "Error",
        description: error.message || "Failed to upload calendar",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string, _filePath: string) => {
    if (!confirm("Are you sure you want to delete this calendar?")) return

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/church-calendars/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete calendar')

      toast({
        title: "Success",
        description: "Calendar deleted successfully",
      })

      fetchCalendars()
    } catch (error) {
      console.error("Error deleting calendar:", error)
      toast({
        title: "Error",
        description: "Failed to delete calendar",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Church Calendars</h1>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload New Calendar</h2>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter year"
            />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div>
            <Label htmlFor="file">PDF File</Label>
            <Input
              id="file"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
          </div>
          <Button
            onClick={handleUpload}
            disabled={uploading || !selectedFile}
            className="w-full"
          >
            {uploading ? "Uploading..." : "Upload Calendar"}
          </Button>
        </div>
      </Card>

      <div className="grid gap-4">
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : calendars.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No calendars uploaded yet</div>
        ) : (
          calendars.map((calendar) => (
            <Card key={calendar.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{calendar.title}</h3>
                  <p className="text-sm text-gray-500">Year: {calendar.year}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(calendar.file_path, "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(calendar.id, calendar.file_path)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
} 