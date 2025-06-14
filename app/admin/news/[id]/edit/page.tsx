"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useLocale } from "@/contexts/locale-context"

export default function EditNewsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { locale } = useLocale()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    image_url: "",
    author: "",
    category: "",
    featured: false,
    language: locale
  })

  // Get translations based on locale
  const getTranslations = () => {
    switch (locale) {
      case "am":
        return {
          title: "ዜና ያርትዑ",
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
          submitButton: "ዜና ያርትዑ",
          cancelButton: "ይቅር",
          successMessage: "ዜና በተሳክቷል ተስተካክሏል",
          errorMessage: "ዜና ማስተካከል አልተሳካም። እባክዎ እንደገና ይሞከሩ።",
          loadingMessage: "ዜናው እየተጫነ ነው..."
        }
      case "de":
        return {
          title: "Nachricht bearbeiten",
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
          submitButton: "Nachricht aktualisieren",
          cancelButton: "Abbrechen",
          successMessage: "Nachricht erfolgreich aktualisiert",
          errorMessage: "Fehler beim Aktualisieren der Nachricht. Bitte versuchen Sie es erneut.",
          loadingMessage: "Nachricht wird geladen..."
        }
      default:
        return {
          title: "Edit News",
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
          submitButton: "Update News",
          cancelButton: "Cancel",
          successMessage: "News updated successfully",
          errorMessage: "Failed to update news. Please try again.",
          loadingMessage: "Loading news..."
        }
    }
  }

  const t = getTranslations()

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`/api/news/${params.id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }
        const data = await response.json()
        setFormData(data)
      } catch (error) {
        console.error("Error fetching news:", error)
        toast({
          title: t.errorMessage,
          variant: "destructive",
        })
      }
    }

    fetchNews()
  }, [params.id, toast, t.errorMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/news/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to update news")
      }

      toast({
        title: t.successMessage,
      })

      router.push("/admin/news")
      router.refresh()
    } catch (error) {
      console.error("Error updating news:", error)
      toast({
        title: t.errorMessage,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">{t.titleLabel}</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={t.titlePlaceholder}
              required
            />
          </div>

          <div>
            <Label htmlFor="content">{t.contentLabel}</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder={t.contentPlaceholder}
              required
              className="min-h-[200px]"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">{t.excerptLabel}</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder={t.excerptPlaceholder}
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="image_url">{t.imageLabel}</Label>
            <Input
              id="image_url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder={t.imagePlaceholder}
            />
          </div>

          <div>
            <Label htmlFor="author">{t.authorLabel}</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              placeholder={t.authorPlaceholder}
              required
            />
          </div>

          <div>
            <Label htmlFor="category">{t.categoryLabel}</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t.categoryPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="announcements">Announcements</SelectItem>
                <SelectItem value="sermons">Sermons</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="language">{t.languageLabel}</Label>
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
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
            />
            <Label htmlFor="featured">{t.featuredLabel}</Label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/news")}
            disabled={loading}
          >
            {t.cancelButton}
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? t.loadingMessage : t.submitButton}
          </Button>
        </div>
      </form>
    </div>
  )
} 