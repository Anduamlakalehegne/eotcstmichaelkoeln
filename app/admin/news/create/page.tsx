"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
import { SuccessToast } from "@/components/success-toast"
import { calculateReadTime } from "@/lib/calculate-read-time"
import { useToast } from "@/components/ui/use-toast"
import { useLocale } from "@/contexts/locale-context"

// Sample categories
const categories = ["Community", "Youth", "Announcements", "Music", "Education", "Fundraising"]

export default function CreateNewsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { locale } = useLocale()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image_url: "",
    category: "",
    featured: false,
    author: "",
    author_role: "",
    author_image: "",
    read_time: "5 min read",
    publish_date: new Date().toISOString().split("T")[0],
    tags: [] as string[],
    language: locale // Default to current locale
  })
  const [relatedImages, setRelatedImages] = useState<RelatedImage[]>([])
  const [tagInput, setTagInput] = useState("")

  // Get translations based on locale
  const getTranslations = () => {
    switch (locale) {
      case "am":
        return {
          title: "አዲስ ዜና ይጨምሩ",
          formTitle: "ዜና መረጃ",
          titleLabel: "ርዕስ",
          titlePlaceholder: "ዜናውን ያስገቡ...",
          contentLabel: "ይዘት",
          contentPlaceholder: "ዜናውን ያስገቡ...",
          excerptLabel: "ጥቅስ",
          excerptPlaceholder: "አጭር ጥቅስ ያስገቡ...",
          imageLabel: "ምስል URL",
          imagePlaceholder: "ምስል URL ያስገቡ...",
          authorLabel: "ደራሲ",
          authorPlaceholder: "ደራሲውን ያስገቡ...",
          categoryLabel: "ምድብ",
          categoryPlaceholder: "ምድብ ይምረጡ...",
          featuredLabel: "ተስተውሏል",
          languageLabel: "ቋንቋ",
          submitButton: "ዜና ይጨምሩ",
          cancelButton: "ይቅር",
          successMessage: "ዜና በተሳክቷል ተጨምሯል",
          errorMessage: "ዜና ማክም አልተሳካም። እባክዎ እንደገና ይሞከሩ።"
        }
      case "de":
        return {
          title: "Neue Nachricht erstellen",
          formTitle: "Nachrichtendetails",
          titleLabel: "Titel",
          titlePlaceholder: "Nachrichtentitel eingeben...",
          contentLabel: "Inhalt",
          contentPlaceholder: "Nachrichteninhalt eingeben...",
          excerptLabel: "Auszug",
          excerptPlaceholder: "Kurzen Auszug eingeben...",
          imageLabel: "Bild-URL",
          imagePlaceholder: "Bild-URL eingeben...",
          authorLabel: "Autor",
          authorPlaceholder: "Autor eingeben...",
          categoryLabel: "Kategorie",
          categoryPlaceholder: "Kategorie auswählen...",
          featuredLabel: "Hervorgehoben",
          languageLabel: "Sprache",
          submitButton: "Nachricht erstellen",
          cancelButton: "Abbrechen",
          successMessage: "Nachricht erfolgreich erstellt",
          errorMessage: "Fehler beim Erstellen der Nachricht. Bitte versuchen Sie es erneut."
        }
      default:
        return {
          title: "Create News",
          formTitle: "News Details",
          titleLabel: "Title",
          titlePlaceholder: "Enter news title...",
          contentLabel: "Content",
          contentPlaceholder: "Enter news content...",
          excerptLabel: "Excerpt",
          excerptPlaceholder: "Enter short excerpt...",
          imageLabel: "Image URL",
          imagePlaceholder: "Enter image URL...",
          authorLabel: "Author",
          authorPlaceholder: "Enter author name...",
          categoryLabel: "Category",
          categoryPlaceholder: "Select category...",
          featuredLabel: "Featured",
          languageLabel: "Language",
          submitButton: "Create News",
          cancelButton: "Cancel",
          successMessage: "News created successfully",
          errorMessage: "Failed to create news. Please try again."
        }
    }
  }

  const t = getTranslations()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContentChange = (content: string) => {
    // Update content
    setFormData((prev) => ({
      ...prev,
      content,
      // Automatically calculate read time based on content
      read_time: calculateReadTime(content),
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
      // Create news article first
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create news article")
      }

      const newsId = data.id

      // Handle gallery images if any
      if (relatedImages.length > 0) {
        const galleryItems = relatedImages
          .filter((img) => img.image_url.trim() !== "")
          .map((image, index) => ({
            news_id: newsId,
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

      toast({
        title: t.successMessage,
      })

      // Redirect after 3 seconds
      setTimeout(() => {
        router.push("/admin/news")
      }, 3000)
    } catch (err: any) {
      setError(err.message)
      toast({
        title: t.errorMessage,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      <SuccessToast
        message={t.successMessage}
        open={success}
        onClose={() => setSuccess(false)}
      />

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t.formTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">{t.titleLabel} *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder={t.titlePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">{t.excerptLabel} *</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  placeholder={t.excerptPlaceholder}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">{t.contentLabel} *</Label>
                <RichTextEditor value={formData.content} onChange={handleContentChange} />
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
                <Label htmlFor="category">{t.categoryLabel} *</Label>
                <Select value={formData.category} onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder={t.categoryPlaceholder} />
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
                  value={formData.image_url}
                  onChange={handleImageChange}
                  label={t.imageLabel}
                  folder="news"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.map((tag) => (
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
                  <Label htmlFor="featured">{t.featuredLabel}</Label>
                  <Switch id="featured" checked={formData.featured} onCheckedChange={handleSwitchChange} />
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
                <Label htmlFor="author">{t.authorLabel} *</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  placeholder={t.authorPlaceholder}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author_role">Author Role</Label>
                <Input
                  id="author_role"
                  name="author_role"
                  value={formData.author_role}
                  onChange={handleChange}
                  placeholder="Author's role or title"
                />
              </div>

              <div className="space-y-2">
                <ImageUpload
                  value={formData.author_image}
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
                  value={formData.publish_date}
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
                  <Save className="mr-2 h-4 w-4" /> {t.submitButton}
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t.languageLabel}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={formData.language}
              onValueChange={(value) => setFormData({ ...formData, language: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t.languageLabel} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="am">አማርኛ</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
