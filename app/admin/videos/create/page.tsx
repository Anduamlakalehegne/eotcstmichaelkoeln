"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, ArrowLeft } from "lucide-react"
import { uploadFile } from "@/lib/supabase-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  "Church Services",
  "Events",
  "Sermons",
  "Mesmur",
  "Youth Programs",
  "Other",
]

interface Folder {
  id: number
  name: string
  parent_id: number | null
  created_at: string
}

export default function CreateVideoPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialFolderId = searchParams.get("folder_id") ? parseInt(searchParams.get("folder_id")!) : undefined
  const showFolderDropdown = initialFolderId === undefined;
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [folders, setFolders] = useState<Folder[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    video_url: "",
    thumbnail_url: "",
    duration: "",
    category: "",
    folder_id: initialFolderId,
  })
  const [videoInputType, setVideoInputType] = useState<'upload' | 'url'>("upload")
  const [videoPreview, setVideoPreview] = useState<string>("")
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("")

  useEffect(() => {
    if (showFolderDropdown) fetchFolders()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    // Reset thumbnail preview when video input type changes
    setThumbnailPreview("")
    setFormData((prev) => ({ ...prev, thumbnail_url: "" }))
    // eslint-disable-next-line
  }, [videoInputType])

  const fetchFolders = async () => {
    const res = await fetch("/api/videos/folders")
    const data = await res.json()
    setFolders(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to create video")

      // Redirect to the current folder if present
      if (initialFolderId) {
        router.push(`/admin/videos?folder_id=${initialFolderId}`)
      } else {
        router.push("/admin/videos")
      }
    } catch (err: any) {
      setError("Failed to create video. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleVideoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setLoading(true)
    setError(null)
    try {
      // Only allow video files
      if (!file.type.startsWith("video/")) {
        setError("Please select a valid video file.")
        setLoading(false)
        return
      }
      // Optional: limit file size (e.g., 100MB)
      if (file.size > 100 * 1024 * 1024) {
        setError("Video size should be less than 100MB.")
        setLoading(false)
        return
      }
      // Upload to Supabase
      const url = await uploadFile(file, "videos", formData.folder_id ? `videos/${formData.folder_id}` : "videos")
      setFormData({ ...formData, video_url: url })
      setVideoPreview(url)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, video_url: e.target.value })
    setVideoPreview(e.target.value)
  }

  const handleThumbnailFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setLoading(true)
    setError(null)
    try {
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file.")
        setLoading(false)
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("Thumbnail size should be less than 5MB.")
        setLoading(false)
        return
      }
      const url = await uploadFile(file, "videos", formData.folder_id ? `thumbnails/${formData.folder_id}` : "thumbnails")
      setFormData({ ...formData, thumbnail_url: url })
      setThumbnailPreview(url)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Add New Video</h1>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}
      <Card>
        <CardHeader>
          <CardTitle>Video Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category || ""}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {showFolderDropdown && (
              <div className="space-y-2">
                <Label htmlFor="folder">Folder</Label>
                <Select
                  value={formData.folder_id ? String(formData.folder_id) : ""}
                  onValueChange={value => setFormData({ ...formData, folder_id: value ? parseInt(value) : undefined })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select folder (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {folders.map(folder => (
                      <SelectItem key={folder.id} value={String(folder.id)}>{folder.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {/* Video Source and Thumbnail sections (as previously enhanced) */}
            <div className="space-y-2">
              <Label>Video Source</Label>
              <Tabs defaultValue={videoInputType} onValueChange={val => setVideoInputType(val as 'upload' | 'url')} className="mb-2">
                <TabsList>
                  <TabsTrigger value="upload">Upload Video</TabsTrigger>
                  <TabsTrigger value="url">Video URL</TabsTrigger>
                </TabsList>
              </Tabs>
              {videoInputType === "upload" && (
                <div className="space-y-2">
                  <Input
                    id="video_file"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoFileChange}
                  />
                </div>
              )}
              {videoInputType === "url" && (
                <div className="space-y-2">
                  <Input
                    id="video_url"
                    type="url"
                    placeholder="https://..."
                    value={formData.video_url || ""}
                    onChange={handleVideoUrlChange}
                  />
                </div>
              )}
              {videoPreview && (
                <video src={videoPreview} controls className="w-full max-h-64 mt-2 rounded border" />
              )}
            </div>
            <div className="space-y-2 mt-4">
              <Label>Thumbnail</Label>
              <div className="space-y-2">
                <div className="text-sm text-gray-600 mb-2">
                  Please upload a thumbnail image file.
                </div>
                <Input
                  id="thumbnail_file"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailFileChange}
                  required
                />
              </div>
              {thumbnailPreview && (
                <img src={thumbnailPreview} alt="Thumbnail Preview" className="w-48 h-32 object-cover rounded border mt-2" />
              )}
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Create Video
              </Button>
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 