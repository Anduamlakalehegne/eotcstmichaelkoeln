"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadImage } from "@/lib/supabase-client"
import { Loader2, Upload, X, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  label?: string
  folder?: string
}

export function ImageUpload({ value, onChange, label = "Image", folder = "uploads" }: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(value || null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDataUrl, setIsDataUrl] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
    if (!validTypes.includes(file.type)) {
      setError("Please select a valid image file (JPEG, PNG, GIF, WEBP)")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB")
      return
    }

    setError(null)
    setUploading(true)

    try {
      // Create a preview immediately
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Try to upload to Supabase
      const imageUrl = await uploadImage(file, "church-images", folder)

      // Check if the result is a data URL (fallback method)
      if (imageUrl.startsWith("data:")) {
        setIsDataUrl(true)
        setError("Warning: Image is stored temporarily. Please contact admin to set up proper storage.")
      } else {
        setIsDataUrl(false)
      }

      onChange(imageUrl)
    } catch (err: any) {
      console.error("Upload error:", err)
      setError(`Upload failed: ${err.message || "Unknown error"}. Using local preview instead.`)

      // Use the preview as fallback
      if (image) {
        onChange(image)
        setIsDataUrl(true)
      }
    } finally {
      setUploading(false)
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
    onChange("")
    setIsDataUrl(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="image">{label}</Label>
        <Input
          ref={fileInputRef}
          id="image"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {image ? (
          <div className="relative">
            <div className="relative h-64 w-full overflow-hidden rounded-md border">
              <Image
                src={image || "/placeholder.svg"}
                alt="Preview"
                fill
                className="object-cover"
                onError={() => {
                  // Handle image load error
                  setImage("/placeholder.svg?height=600&width=800")
                }}
              />
              {isDataUrl && (
                <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 bg-opacity-80 text-white text-xs p-1 text-center">
                  Temporary Image
                </div>
              )}
            </div>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2"
              onClick={handleRemoveImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div
            onClick={triggerFileInput}
            className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
          >
            {uploading ? (
              <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
            ) : (
              <>
                <Upload className="mb-2 h-10 w-10 text-gray-400" />
                <p className="text-sm text-gray-600">Click to upload an image</p>
                <p className="text-xs text-gray-400">JPEG, PNG, GIF, WEBP (max 5MB)</p>
              </>
            )}
          </div>
        )}

        {error && (
          <Alert variant={isDataUrl ? "warning" : "destructive"} className="mt-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{isDataUrl ? "Warning" : "Error"}</AlertTitle>
            <AlertDescription className="flex justify-between items-center">
              <span>{error}</span>
              <Button variant="outline" size="sm" onClick={() => setError(null)}>
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {!uploading && (
          <Button type="button" variant="outline" onClick={triggerFileInput}>
            {image ? "Change Image" : "Select Image"}
          </Button>
        )}
      </div>
    </div>
  )
}
