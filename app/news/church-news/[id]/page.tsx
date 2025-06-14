import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getServerClient } from "@/lib/supabase-server"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { News, NewsGalleryImage } from "@/lib/supabase"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardTitle } from "@/components/ui/card"

async function getNewsArticle(id: string) {
  const supabase = getServerClient()
  if (!supabase) {
    console.error("Database connection failed")
    return null
  }

  const { data, error } = await supabase.from("news").select("*").eq("id", id).single()

  if (error || !data) {
    console.error("Error fetching news article:", error)
    return null
  }

  return data as News
}

async function getNewsGalleryImages(newsId: string) {
  const supabase = getServerClient()
  if (!supabase) {
    console.error("Database connection failed")
    return []
  }

  const { data, error } = await supabase
    .from("news_images")
    .select("*")
    .eq("news_id", newsId)
    .order("display_order", { ascending: true })

  if (error) {
    console.error("Error fetching gallery images:", error)
    return []
  }

  return (data || []) as NewsGalleryImage[]
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = await getNewsArticle(params.id)
  const galleryImages = await getNewsGalleryImages(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/news">News</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/news/church-news/${params.id}`}>{article.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {article.image_url && (
                <div className="relative h-[400px] w-full">
                  <Image
                    src={article.image_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{formatDate(article.created_at)}</span>
                  {article.updated_at && (
                    <>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Updated: {formatDate(article.updated_at)}</span>
                    </>
                  )}
                </div>

                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>

            {/* Gallery Images */}
            {galleryImages.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {galleryImages.map((image) => (
                    <div key={image.id} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={image.image_url}
                        alt={image.caption || "Gallery image"}
                        fill
                        className="object-cover"
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                          {image.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* <Card> */}
              {/* <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Share This Article</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </div>
              </CardContent> */}
            {/* </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}
