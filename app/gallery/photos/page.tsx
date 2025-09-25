"use client"

import { useState, useEffect } from "react"
import { supabaseClient } from "@/lib/supabase-client"
import { PhotoPreview } from "@/components/PhotoPreview"
import Image from "next/image"
import { Loader2, Folder, ArrowLeft } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

interface Photo {
  id: number
  image_url: string
  title: string
  description: string | null
  category: string | null
  display_order: number
  created_at: string
  updated_at: string
  folder_id?: number | null
}

interface FolderType {
  id: number
  name: string
  parent_id: number | null
  created_at: string
}

export default function PhotosPage() {
  const { locale, translations } = useLocale();
  const t = translations.gallery;
  const [photos, setPhotos] = useState<Photo[]>([])
  const [folders, setFolders] = useState<FolderType[]>([])
  const [currentFolder, setCurrentFolder] = useState<FolderType | null>(null)
  const [folderStack, setFolderStack] = useState<FolderType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetchFolders()
    fetchPhotos()
    // eslint-disable-next-line
  }, [currentFolder])

  const fetchFolders = async () => {
    setLoading(true)
    try {
      const parent_id = currentFolder ? currentFolder.id : null
      const url = parent_id ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery-folders?parent_id=${parent_id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery-folders`
      const res = await fetch(url)
      const data = await res.json()
      setFolders(data)
    } catch (err: any) {
      setError("Failed to load folders")
    } finally {
      setLoading(false)
    }
  }

  const fetchPhotos = async () => {
    setLoading(true)
    try {
      const folder_id = currentFolder ? currentFolder.id : null
      const url = folder_id ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery?folder_id=${folder_id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery`
      const res = await fetch(url)
      const data = await res.json()
      setPhotos(data)
    } catch (err: any) {
      setError("Failed to load photos")
    } finally {
      setLoading(false)
    }
  }

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

  const handleOpenFolder = (folder: FolderType) => {
    setFolderStack([...folderStack, folder])
    setCurrentFolder(folder)
  }

  const handleBack = () => {
    const newStack = [...folderStack]
    newStack.pop()
    setFolderStack(newStack)
    setCurrentFolder(newStack.length > 0 ? newStack[newStack.length - 1] : null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-32">
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
      <div className="flex items-center gap-2 mb-8">
        {currentFolder && (
          <button onClick={handleBack} className="mr-2 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> {t.common.back}
          </button>
        )}
        <h1 className="text-3xl font-bold text-center flex-1">{t.photos.title}</h1>
      </div>

      {/* Folders */}
      {folders.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{t.common.folders}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {folders.map(folder => (
              <div key={folder.id} className="flex items-center gap-2 p-3 border rounded cursor-pointer hover:bg-gray-50" onClick={() => handleOpenFolder(folder)}>
                <Folder className="h-5 w-5 text-primary" />
                <span className="flex-1">{folder.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photos */}
      {photos.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>{t.photos.empty}</p>
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
