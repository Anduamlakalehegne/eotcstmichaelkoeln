"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2, ArrowLeft, Save } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { ImageUpload } from "@/components/image-upload"
import { RichTextEditor } from "@/components/rich-text-editor"
import { MultiImageUpload, type RelatedImage } from "@/components/multi-image-upload"
import { calculateReadTime } from "@/lib/calculate-read-time"

const BLOG_CATEGORY = "Blog"

export default function CreateBlogPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image_url: "",
    category: BLOG_CATEGORY,
    featured: false,
    author: "",
    read_time: "5 min read",
    tags: [] as string[],
    language: "am"
  })
  const [relatedImages, setRelatedImages] = useState<RelatedImage[]>([])
  const [tagInput, setTagInput] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({
      ...prev,
      content,
      read_time: String(calculateReadTime(content)),
    }))
  }

  const handleImageChange = (url: string) => {
    setFormData((prev) => ({ ...prev, image_url: url }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, featured: checked }))
  }

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault()
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }))
      }
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag !== tagToRemove) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/news`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Failed to create blog post")
      setSuccess(true)
      setTimeout(() => {
        router.push("/admin/blog")
      }, 2000)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">አዲስ ብሎግ ይጨምሩ</h1>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> ተመለስ
        </Button>
      </div>
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>የብሎግ መረጃ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">ርዕስ *</Label>
                <Input id="title" name="title" value={formData.title} onChange={handleChange} required placeholder="ርዕስ ያስገቡ..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">ጥቅስ *</Label>
                <Textarea id="excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange} required placeholder="አጭር ጥቅስ ያስገቡ..." className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">ይዘት *</Label>
                <RichTextEditor value={formData.content} onChange={handleContentChange} />
                <p className="text-sm text-gray-500">የሚያነቡት ጊዜ: {formData.read_time}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ምስል</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload value={formData.image_url} onChange={handleImageChange} label="ምስል" folder="blog" />
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ተጨማሪ መረጃ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="author">ደራሲ *</Label>
              <Input id="author" name="author" value={formData.author} onChange={handleChange} required placeholder="ደራሲ ያስገቡ..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">መለያዎች</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                  </Badge>
                ))}
              </div>
              <Input id="tags" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={handleTagKeyDown} placeholder="መለያ ያስገቡ እና Enter ይጫኑ" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="featured">ተስተውሏል</Label>
              <Switch id="featured" checked={formData.featured} onCheckedChange={handleSwitchChange} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={loading || success} className="w-full md:w-auto">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> በማስቀመጥ ላይ...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> ይቀመጡ
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
} 