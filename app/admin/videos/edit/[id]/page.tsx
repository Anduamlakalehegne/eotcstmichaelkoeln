"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
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

interface Video {
  id: number
  title: string
  description: string
  video_url: string
  thumbnail_url: string
  duration: string
  category: string
  folder_id?: number | null
  created_at: string
}

export default function EditVideoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [folders, setFolders] = useState<Folder[]>([])
  const [video, setVideo] = useState<Video | null>(null)
  const [videoInputType, setVideoInputType] = useState<'upload' | 'url'>("upload")
  const [videoPreview, setVideoPreview] = useState<string>("")
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("")

  useEffect(() => {
    fetchFolders()
    fetchVideo()
    // eslint-disable-next-line
  }, [params.id])

  useEffect(() => {
    if (video && video.video_url) {
      setVideoPreview(video.video_url)
      // If the video_url is not a local file, default to URL tab
      if (video.video_url && !video.video_url.startsWith("https://")) {
        setVideoInputType("upload")
      } else {
        setVideoInputType("url")
      }
    }
    // Reset thumbnail preview when video input type changes
    setThumbnailPreview("")
    setVideo((prev) => prev ? { ...prev, thumbnail_url: "" } : prev)
    // eslint-disable-next-line
  }, [videoInputType])

  const fetchFolders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/video-folders`)
    const data = await res.json()
    setFolders(data)
  }

  async function fetchVideo() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/videos/${params.id}`)
      if (!res.ok) throw new Error("Failed to load video")
      const data = await res.json()
      setVideo(data)
    } catch (err) {
      setError("Failed to load video")
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!video) return

    setSaving(true)
    setError(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/videos/${video.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(video),
      })
      if (!response.ok) throw new Error("Failed to update video")
      router.push("/admin/videos")
    } catch (err) {
      setError("Failed to update video. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  const handleVideoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setSaving(true)
    setError(null)
    try {
      // Only allow video files
      if (!file.type.startsWith("video/")) {
        setError("Please select a valid video file.")
        setSaving(false)
        return
      }
      // Optional: limit file size (e.g., 100MB)
      if (file.size > 100 * 1024 * 1024) {
        setError("Video size should be less than 100MB.")
        setSaving(false)
        return
      }
      // Upload to Supabase
      const url = await uploadFile(file, "videos", video?.folder_id ? `videos/${video.folder_id}` : "videos")
      setVideo(video ? { ...video, video_url: url } : null)
      setVideoPreview(url)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!video) return
    setVideo(video ? { ...video, video_url: e.target.value } : null)
    setVideoPreview(e.target.value)
  }

  const handleThumbnailFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setSaving(true)
    setError(null)
    try {
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file.")
        setSaving(false)
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("Thumbnail size should be less than 5MB.")
        setSaving(false)
        return
      }
      const url = await uploadFile(file, "videos", video?.folder_id ? `thumbnails/${video.folder_id}` : "thumbnails")
      setVideo((prev) => prev ? { ...prev, thumbnail_url: url } : prev)
      setThumbnailPreview(url)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }


  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || !video) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error || "Video not found"}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Edit Video</h1>
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
                value={video.title}
                onChange={(e) => setVideo(video ? { ...video, title: e.target.value } : null)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={video.description || ""}
                onChange={(e) => setVideo(video ? { ...video, description: e.target.value } : null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={video.category || ""}
                onValueChange={(value) => setVideo(video ? { ...video, category: value } : null)}
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
            <div className="space-y-2">
              <Label htmlFor="folder">Folder</Label>
              <Select
                value={video.folder_id ? String(video.folder_id) : ""}
                onValueChange={value => setVideo(video ? { ...video, folder_id: value ? parseInt(value) : undefined } : null)}
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
                    value={video?.video_url || ""}
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
              <Button type="submit" disabled={saving}>
                {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Update Video
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