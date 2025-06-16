"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"
import type { Gallery } from "@/lib/supabase"

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Gallery[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPhotos()
  }, [])

  async function fetchPhotos() {
    try {
      const { data, error } = await supabaseClient
        .from("gallery")
        .select("*")
        .order("display_order", { ascending: true })

      if (error) throw error
      setPhotos(data || [])
    } catch (err) {
      console.error("Error fetching photos:", err)
      setError("Failed to load photos")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
      {photos.length === 0 ? (
        <p className="text-gray-500">No photos available at this time.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.image_url}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h2 className="font-bold">{photo.title}</h2>
                  {photo.description && <p className="text-sm mb-1">{photo.description}</p>}
                  {photo.category && <p className="text-sm">{photo.category}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
