"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageUpload } from "@/components/image-upload"
import { Loader2, ArrowLeft, FileText, Upload } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"
import { toast } from "sonner"
import { useLocale } from "@/contexts/locale-context"

const categories = [
  "Historical",
  "Administrative",
  "Worship",
  "Community",
  "Construction",
  "Sacraments",
  "Holidays",
  "Youth"
]
const categoryTranslations: Record<string, string> = {
  "Historical": "ታሪካዊ",
  "Administrative": "አስተዳደራዊ",
  "Worship": "መስገጃ",
  "Community": "ማህበረሰብ",
  "Construction": "ሥራ አዳራሽ",
  "Sacraments": "ቅዳሴዎች",
  "Holidays": "በዓላት",
  "Youth": "ወጣቶች"
};
const allowedDocumentTypes = [
  // PDF files
  "application/pdf",
  // Microsoft Word documents
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // Microsoft Excel files
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  // Microsoft PowerPoint files
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  // Text files
  "text/plain",
  "text/csv",
  // Image files
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "image/webp",
  // Audio files
  "audio/mpeg",
  "audio/wav",
  "audio/ogg",
  "audio/mp3",
  // Video files
  "video/mp4",
  "video/avi",
  "video/mov",
  "video/wmv",
  "video/webm",
  // Archive files
  "application/zip",
  "application/x-rar-compressed",
  "application/x-7z-compressed"
]

export default function CreateArchivePage() {
  const { locale } = useLocale();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
    type: "photo" as "photo" | "document",
    category: "",
    image_url: "",
    document_url: "",
    tags: [] as string[],
  })
  const [tagInput, setTagInput] = useState("")
  const [uploadingDocument, setUploadingDocument] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Validate required fields
      if (!formData.title || !formData.year || !formData.category) {
        throw new Error("Please fill in all required fields")
      }

      // Validate document/image based on type
      if (formData.type === "document" && !formData.document_url) {
        throw new Error("Please upload a document")
      }
      if (formData.type === "photo" && !formData.image_url) {
        throw new Error("Please upload an image")
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/archive`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description || null,
          year: formData.year,
          type: formData.type,
          category: formData.category,
          image_url: formData.image_url || "",
          document_url: formData.document_url || null,
          tags: formData.tags
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create archive item")
      }

      toast.success("Archive item created successfully")
      router.push("/admin/archive")
    } catch (err: any) {
      setError(err.message)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDocumentUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!allowedDocumentTypes.includes(file.type)) {
      toast.error("Please upload a supported file format (PDF, Word, Excel, PowerPoint, Text, Image, Audio, Video, or Archive)")
      return
    }

    // Validate file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      toast.error("File size must be less than 50MB")
      return
    }

    setUploadingDocument(true)
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `documents/${fileName}`

      // Upload to the archive bucket
      const { error: uploadError } = await supabaseClient.storage
        .from("archive")
        .upload(filePath, file)

      if (uploadError) {
        console.error("Upload error:", uploadError)
        throw new Error(`Failed to upload document: ${uploadError.message}`)
      }

      const { data: { publicUrl } } = supabaseClient.storage
        .from("archive")
        .getPublicUrl(filePath)

      if (!publicUrl) {
        throw new Error("Failed to get public URL for document")
      }

      // Update form data with the new document URL
      setFormData(prev => ({
        ...prev,
        document_url: publicUrl,
        // Clear image_url when uploading document
        image_url: ""
      }))
      toast.success("Document uploaded successfully")
    } catch (err: any) {
      console.error("Document upload error:", err)
      toast.error(err.message || "Failed to upload document")
    } finally {
      setUploadingDocument(false)
    }
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      })
      setTagInput("")
    }
  }

  const handleRemoveTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Add New Archive Item</h1>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      <Card>
        <CardHeader>
          <CardTitle>Archive Item Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
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
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type *</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: "photo" | "document") => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photo">Photo</SelectItem>
                    <SelectItem value="document">Document</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">{locale === "am" ? "ምድብ *" : "Category *"}</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={locale === "am" ? "ምድብ ይምረጡ" : "Select category"}>
                    {locale === "am"
                      ? categoryTranslations[formData.category] || formData.category
                      : formData.category}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {locale === "am" ? (categoryTranslations[category] || category) : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.type === "photo" ? (
              <div className="space-y-2">
                <Label>Image *</Label>
                <ImageUpload
                  value={formData.image_url}
                  onChange={(url) => setFormData({ ...formData, image_url: url })}
                  folder="archive"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label>Document *</Label>
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp,.mp3,.wav,.ogg,.mp4,.avi,.mov,.wmv,.webm,.zip,.rar,.7z"
                    onChange={handleDocumentUpload}
                    disabled={uploadingDocument}
                    className="hidden"
                    id="document-upload"
                  />
                  <Label
                    htmlFor="document-upload"
                    className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
                  >
                    <Upload className="h-4 w-4" />
                    {uploadingDocument ? "Uploading..." : "Upload Document"}
                  </Label>
                  {formData.document_url && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="h-4 w-4" />
                      Document uploaded
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), 
                  Text (TXT/CSV), Images (JPG/PNG/GIF/BMP/TIFF/WEBP), Audio (MP3/WAV/OGG), 
                  Video (MP4/AVI/MOV/WMV/WEBM), Archives (ZIP/RAR/7Z) - max 50MB
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Add a tag"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddTag()
                    }
                  }}
                />
                <Button type="button" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded text-sm bg-gray-100"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading || uploadingDocument}>
                {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Add Item
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