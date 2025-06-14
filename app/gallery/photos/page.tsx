import Image from "next/image"
import { getServerClient } from "@/lib/supabase-server"
import type { Gallery } from "@/lib/supabase"

async function getGalleryPhotos() {
  const supabase = getServerClient()
  if (!supabase) {
    console.error("Database connection failed")
    return []
  }

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("display_order", { ascending: true })

  if (error) {
    console.error("Error fetching gallery photos:", error)
    return []
  }

  return data as Gallery[]
}

export default async function PhotosPage() {
  const photos = await getGalleryPhotos()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
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
    </div>
  )
}
