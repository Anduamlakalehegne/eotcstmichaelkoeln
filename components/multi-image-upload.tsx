"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { uploadImage } from "@/lib/supabase-client"
import { Loader2, Upload, X, Plus, GripVertical, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

export interface RelatedImage {
  id?: number
  image_url: string
  caption: string
  display_order: number
  isDataUrl?: boolean
}

interface MultiImageUploadProps {
  images: RelatedImage[]
  onChange: (images: RelatedImage[]) => void
  folder?: string
}

export function MultiImageUpload({ images, onChange, folder = "news-gallery" }: MultiImageUploadProps) {
  const [uploading, setUploading] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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
    setUploading(index)

    try {
      // Try to upload to Supabase
      const imageUrl = await uploadImage(file, "church-images", folder)

      // Check if the result is a data URL (fallback method)
      const isDataUrl = imageUrl.startsWith("data:")
      if (isDataUrl) {
        setError("Warning: Image is stored temporarily. Please contact admin to set up proper storage.")
      }

      // Update the image URL in the images array
      const updatedImages = [...images]
      updatedImages[index] = {
        ...updatedImages[index],
        image_url: imageUrl,
        isDataUrl,
      }
      onChange(updatedImages)
    } catch (err: any) {
      console.error("Upload error:", err)
      setError(`Upload failed: ${err.message || "Unknown error"}`)
    } finally {
      setUploading(null)
    }
  }

  const handleCaptionChange = (caption: string, index: number) => {
    const updatedImages = [...images]
    updatedImages[index] = { ...updatedImages[index], caption }
    onChange(updatedImages)
  }

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    onChange(updatedImages)
  }

  const handleAddImage = () => {
    onChange([...images, { image_url: "", caption: "", display_order: images.length }])
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(images)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Update display_order for all items
    const updatedItems = items.map((item, index) => ({
      ...item,
      display_order: index,
    }))

    onChange(updatedItems)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Related Images</Label>
        <Button type="button" variant="outline" size="sm" onClick={handleAddImage}>
          <Plus className="h-4 w-4 mr-2" /> Add Image
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription className="flex justify-between items-center">
            <span>{error}</span>
            <Button variant="outline" size="sm" onClick={() => setError(null)}>
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="images">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {images.map((image, index) => (
                <Draggable key={index} draggableId={`image-${index}`} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="border rounded-md p-4 relative"
                    >
                      <div className="flex items-start gap-4">
                        <div {...provided.dragHandleProps} className="mt-2 cursor-move">
                          <GripVertical className="h-5 w-5 text-gray-400" />
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="relative">
                            {image.image_url ? (
                              <div className="relative h-40 w-full overflow-hidden rounded-md border">
                                <Image
                                  src={image.image_url || "/placeholder.svg"}
                                  alt={image.caption || `Image ${index + 1}`}
                                  fill
                                  className="object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = "/placeholder.svg?height=300&width=400"
                                  }}
                                />
                                {image.isDataUrl && (
                                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 bg-opacity-80 text-white text-xs p-1 text-center">
                                    Temporary Image
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                                {uploading === index ? (
                                  <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                                ) : (
                                  <>
                                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                                    <p className="text-sm text-gray-600">Click to upload an image</p>
                                  </>
                                )}
                              </div>
                            )}

                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, index)}
                              className="absolute inset-0 opacity-0 cursor-pointer"
                              disabled={uploading !== null}
                            />
                          </div>

                          <Textarea
                            placeholder="Image caption (optional)"
                            value={image.caption}
                            onChange={(e) => handleCaptionChange(e.target.value, index)}
                            rows={2}
                          />
                        </div>

                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          onClick={() => handleRemoveImage(index)}
                          disabled={uploading !== null}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {images.length === 0 && (
        <div className="text-center p-8 border border-dashed rounded-md">
          <p className="text-gray-500">No images added yet. Click "Add Image" to get started.</p>
        </div>
      )}
    </div>
  )
}
