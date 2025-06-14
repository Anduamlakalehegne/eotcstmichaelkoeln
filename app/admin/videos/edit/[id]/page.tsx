"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, ArrowLeft } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"

const categories = [
  "Church Services",
  "Events",
  "Sermons",
  "Mesmur",
  "Youth Programs",
  "Other",
]

interface Video {
  id: number
  title: string
  description: string
  video_url: string
  thumbnail_url: string
  duration: string
  category: string
  created_at: string
}

export default function EditVideoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [video, setVideo] = useState<Video | null>(null)

  useEffect(() => {
    fetchVideo()
  }, [params.id])

  async function fetchVideo() {
    try {
      const { data, error } = await supabaseClient
        .from("videos")
        .select("*")
        .eq("id", params.id)
        .single()

      if (error) throw error
      setVideo(data)
    } catch (err) {
      console.error("Error fetching video:", err)
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
      const { error } = await supabaseClient
        .from("videos")
        .update({
          title: video.title,
          description: video.description,
          video_url: video.video_url,
          thumbnail_url: video.thumbnail_url,
          duration: video.duration,
          category: video.category,
        })
        .eq("id", video.id)

      if (error) throw error

      router.push("/admin/videos")
      router.refresh()
    } catch (err) {
      console.error("Error updating video:", err)
      setError("Failed to update video. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
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
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/videos">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Edit Video</h1>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={video.title}
            onChange={(e) => setVideo({ ...video, title: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={video.description}
            onChange={(e) => setVideo({ ...video, description: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="video_url">Video URL</Label>
          <Input
            id="video_url"
            type="url"
            value={video.video_url}
            onChange={(e) => setVideo({ ...video, video_url: e.target.value })}
            required
            placeholder="https://youtube.com/watch?v=..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="thumbnail_url">Thumbnail URL</Label>
          <Input
            id="thumbnail_url"
            type="url"
            value={video.thumbnail_url}
            onChange={(e) => setVideo({ ...video, thumbnail_url: e.target.value })}
            required
            placeholder="https://..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            value={video.duration}
            onChange={(e) => setVideo({ ...video, duration: e.target.value })}
            required
            placeholder="5:30"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={video.category}
            onValueChange={(value) => setVideo({ ...video, category: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
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

        <div className="flex gap-4">
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/videos">Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
} 