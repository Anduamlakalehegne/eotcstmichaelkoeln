"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ArrowLeft, Save } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { ImageUpload } from "@/components/image-upload"
import { RichTextEditor } from "@/components/rich-text-editor"
import { MultiImageUpload, type RelatedImage } from "@/components/multi-image-upload"
import { calculateReadTime } from "@/lib/calculate-read-time"
import type { News } from "@/lib/supabase"

// Sample categories
const categories = ["Community", "Youth", "Announcements", "Music", "Education", "Fundraising"]

export default function EditNewsPage() {
  const params = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<Partial<News>>({
    title: "",
    excerpt: "",
    content: "",
    image_url: "",
    category: "",
    featured: false,
    author: "",
    author_role: "",
    author_image: "",
    read_time: "",
    tags: [],
  })
  const [relatedImages, setRelatedImages] = useState<RelatedImage[]>([])
  const [tagInput, setTagInput] = useState("")

  // Fetch news data
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`/api/news/${params.id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch news article")
        }
        const data = await response.json()
        setFormData(data)

        // Fetch gallery images
        const galleryResponse = await fetch(`/api/news/${params.id}/gallery`)
        if (galleryResponse.ok) {
          const galleryData = await galleryResponse.json()
          setRelatedImages(galleryData.map((item: any) => ({
            image_url: item.image_url,
            caption: item.caption || "",
            display_order: item.display_order
          })))
        }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setFetchLoading(false)
      }
    }

    fetchNews()
  }, [params.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContentChange = (content: string) => {
    // Update content and automatically calculate read time
    setFormData((prev) => ({
      ...prev,
      content,
      read_time: `${calculateReadTime(content)} min read`,
    }))
  }

  const handleImageChange = (url: string) => {
    setFormData((prev) => ({ ...prev, image_url: url }))
  }

  const handleAuthorImageChange = (url: string) => {
    setFormData((prev) => ({ ...prev, author_image: url }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, featured: checked }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault()
      if (!formData.tags?.includes(tagInput.trim())) {
        setFormData((prev) => ({ ...prev, tags: [...(prev.tags || []), tagInput.trim()] }))
      }
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags?.filter((tag) => tag !== tagToRemove) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Update news article
      const response = await fetch(`/api/news/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to update news article")
      }

      // Handle gallery images
      // First, delete existing gallery items
      await fetch(`/api/news/${params.id}/gallery`, {
        method: "DELETE"
      })

      // Then insert new gallery items
      if (relatedImages.length > 0) {
        const galleryItems = relatedImages
          .filter((img) => img.image_url.trim() !== "")
          .map((image, index) => ({
            news_id: Number(params.id),
            image_url: image.image_url,
            caption: image.caption,
            display_order: index,
          }))

        const galleryResponse = await fetch("/api/news/gallery", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ images: galleryItems }),
        })

        if (!galleryResponse.ok) {
          const galleryError = await galleryResponse.json()
          throw new Error(galleryError.error || "Failed to save gallery images")
        }
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/admin/news")
      }, 1500)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (fetchLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Edit News Article</h1>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          News article updated successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  required
                  placeholder="Enter news title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Input
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt || ""}
                  onChange={handleChange}
                  required
                  placeholder="Brief summary of the news article"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <RichTextEditor value={formData.content || ""} onChange={handleContentChange} />
                <p className="text-sm text-gray-500">Estimated reading time: {formData.read_time}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Categorization & Display</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category || ""} onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
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

              <div className="space-y-2">
                <ImageUpload
                  value={formData.image_url || ""}
                  onChange={handleImageChange}
                  label="Featured Image"
                  folder="news"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                    </Badge>
                  ))}
                </div>
                <Input
                  id="tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Type a tag and press Enter"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured">Featured Article</Label>
                  <Switch id="featured" checked={formData.featured || false} onCheckedChange={handleSwitchChange} />
                </div>
                <p className="text-sm text-gray-500">Featured articles are highlighted on the website.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Related Images</CardTitle>
          </CardHeader>
          <CardContent>
            <MultiImageUpload images={relatedImages} onChange={setRelatedImages} folder="news-gallery" />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Author Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author Name *</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author || ""}
                  onChange={handleChange}
                  required
                  placeholder="Author's name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author_role">Author Role</Label>
                <Input
                  id="author_role"
                  name="author_role"
                  value={formData.author_role || ""}
                  onChange={handleChange}
                  placeholder="Author's role or title"
                />
              </div>

              <div className="space-y-2">
                <ImageUpload
                  value={formData.author_image || ""}
                  onChange={handleAuthorImageChange}
                  label="Author Image"
                  folder="authors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="publish_date">Publish Date</Label>
                <Input
                  id="publish_date"
                  name="publish_date"
                  type="date"
                  value={formData.publish_date?.toString().split("T")[0] || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={loading || success} className="w-full md:w-auto">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Update News Article
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
