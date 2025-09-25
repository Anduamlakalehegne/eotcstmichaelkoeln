"use client"

import { useState, useEffect } from "react"
import { Loader2, X, Image as ImageIcon, Folder, ArrowLeft } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useLocale } from "@/contexts/locale-context"

interface Video {
  id: number
  title: string
  description: string
  video_url: string
  thumbnail_url: string
  duration: string
  category: string
  created_at: string
}

interface FolderType {
  id: number
  name: string
  parent_id: number | null
  created_at: string
}

export default function VideosPage() {
  const { locale, translations } = useLocale();
  const t = translations.gallery;
  const [videos, setVideos] = useState<Video[]>([])
  const [folders, setFolders] = useState<FolderType[]>([])
  const [currentFolder, setCurrentFolder] = useState<FolderType | null>(null)
  const [folderStack, setFolderStack] = useState<FolderType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [thumbnailError, setThumbnailError] = useState<{[key: number]: boolean}>({})

  useEffect(() => {
    fetchFolders()
    fetchVideos()
    // eslint-disable-next-line
  }, [currentFolder])

  async function fetchFolders() {
    setLoading(true)
    try {
      const parent_id = currentFolder ? currentFolder.id : null
      const url = parent_id ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/video-folders?parent_id=${parent_id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/video-folders`
      const res = await fetch(url)
      const data = await res.json()
      setFolders(data)
    } catch (err: any) {
      setError("Failed to load folders")
    } finally {
      setLoading(false)
    }
  }

  async function fetchVideos() {
    setLoading(true)
    try {
      const folder_id = currentFolder ? currentFolder.id : null
      const url = folder_id ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/videos?folder_id=${folder_id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/videos`
      const res = await fetch(url)
      const data = await res.json()
      setVideos(data)
    } catch (err: any) {
      setError("Failed to load videos")
    } finally {
      setLoading(false)
    }
  }

  function handleOpenFolder(folder: FolderType) {
    setFolderStack([...folderStack, folder])
    setCurrentFolder(folder)
  }

  function handleBack() {
    const newStack = [...folderStack]
    newStack.pop()
    setFolderStack(newStack)
    setCurrentFolder(newStack.length > 0 ? newStack[newStack.length - 1] : null)
  }

  function getYouTubeEmbedUrl(url: string) {
    try {
      // Handle different YouTube URL formats
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      
      if (match && match[2].length === 11) {
        const videoId = match[2]
        return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&origin=${window.location.origin}`
      }
      
      // If it's not a YouTube URL, return the original URL
      return url
    } catch (error) {
      console.error("Error parsing YouTube URL:", error)
      return url
    }
  }

  function getYouTubeThumbnail(url: string) {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)
      
      if (match && match[2].length === 11) {
        const videoId = match[2]
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      }
      
      return null
    } catch (error) {
      console.error("Error parsing YouTube URL:", error)
      return null
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32 mt-32">
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        {currentFolder && (
          <button onClick={handleBack} className="mr-2 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> {t.common.back}
          </button>
        )}
        <h1 className="text-3xl font-bold text-center flex-1">{t.videos.title}</h1>
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

      {/* Videos */}
      {videos.length === 0 ? (
        <p className="text-gray-500">{t.videos.empty}</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => {
            const thumbnailUrl = video.thumbnail_url || getYouTubeThumbnail(video.video_url)
            return (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video">
                  {!thumbnailError[video.id] && thumbnailUrl ? (
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={() => setThumbnailError(prev => ({ ...prev, [video.id]: true }))}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-2">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                      <span className="text-sm text-gray-500">{t.common.noThumbnail}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-bold mb-1">{video.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{video.category}</p>
                  <p className="text-gray-600 text-sm">{new Date(video.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video">
            <iframe
              src={selectedVideo ? getYouTubeEmbedUrl(selectedVideo.video_url) : ""}
              title={selectedVideo?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="origin"
            />
          </div>
          {selectedVideo?.description && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">{t.common.description}</h3>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          )}
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <span>{selectedVideo?.category}</span>
            <span>{new Date(selectedVideo?.created_at || "").toLocaleDateString()}</span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
