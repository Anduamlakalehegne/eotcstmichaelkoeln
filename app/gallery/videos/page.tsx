"use client"

import { useState, useEffect } from "react"
import { Loader2, X, Image as ImageIcon } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

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

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [thumbnailError, setThumbnailError] = useState<{[key: number]: boolean}>({})

  useEffect(() => {
    fetchVideos()
  }, [])

  async function fetchVideos() {
    try {
      const { data, error } = await supabaseClient
        .from("videos")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setVideos(data || [])
    } catch (err) {
      console.error("Error fetching videos:", err)
      setError("Failed to load videos")
    } finally {
      setLoading(false)
    }
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
      <h1 className="text-3xl font-bold mb-8">Video Gallery</h1>
      {videos.length === 0 ? (
        <p className="text-gray-500">No videos available at this time.</p>
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
                      <span className="text-sm text-gray-500">No thumbnail available</span>
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
              <h3 className="font-semibold mb-2">Description</h3>
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
