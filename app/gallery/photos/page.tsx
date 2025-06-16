"use client"

import { useState, useEffect } from "react"
import { supabaseClient } from "@/lib/supabase-client"
import { PhotoPreview } from "@/components/PhotoPreview"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface Photo {
  id: number
  image_url: string
  title: string
  description: string | null
  category: string | null
  display_order: number
  created_at: string
  updated_at: string
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data, error } = await supabaseClient
          .from("gallery")
          .select("*")
          .order("display_order", { ascending: true })

        if (error) throw error
        setPhotos(data || [])
      } catch (err) {
        setError("Failed to load photos. Please try again later.")
        console.error("Error loading photos:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  const handlePhotoClick = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const handleClosePreview = () => {
    setSelectedPhoto(null)
  }

  const handleNavigate = (direction: "prev" | "next") => {
    if (!selectedPhoto) return

    let newIndex
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1
    }

    setCurrentIndex(newIndex)
    setSelectedPhoto(photos[newIndex])
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      
      {photos.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No photos available at this time.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => handlePhotoClick(photo, index)}
            >
              <Image
                src={photo.image_url}
                alt={photo.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                  {photo.description && (
                    <p className="text-sm text-gray-200 mt-1 line-clamp-2">{photo.description}</p>
                  )}
                  {photo.category && (
                    <p className="text-sm text-gray-300 mt-1">{photo.category}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <PhotoPreview
        isOpen={!!selectedPhoto}
        onClose={handleClosePreview}
        currentPhoto={selectedPhoto}
        photos={photos}
        onNavigate={handleNavigate}
      />
    </div>
  )
}
