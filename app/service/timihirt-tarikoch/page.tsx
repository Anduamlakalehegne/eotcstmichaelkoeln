"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, History, GraduationCap, Loader2 } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"

const BLOG_CATEGORY = "Blog" // or "Reflection" if you prefer
const ITEMS_PER_PAGE = 6

// Biblical figures data (localized later from translations)
const biblicalFiguresBase = [
  { key: "moses", icon: BookOpen, image: "/placeholder.svg?height=300&width=400" },
  { key: "david", icon: GraduationCap, image: "/placeholder.svg?height=300&width=400" },
  { key: "joseph", icon: History, image: "/placeholder.svg?height=300&width=400" },
] as const


export default function TimihirtTarikochPage() {
  const { translations } = useLocale()
  const t = translations.service.timihirtTarikoch || {
    title: "Teachings & Stories",
    noPosts: "No blog posts found.",
    featured: "Featured",
    authorLabel: "Author:",
    hero: { authorName: "", sourceLabel: "Source:", sourceLinkText: "" },
  }
  const localizedFigures = (t.biblicalFigures
    ? [
        {
          title: t.biblicalFigures.moses.title,
          content: t.biblicalFigures.moses.content,
          icon: BookOpen,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          title: t.biblicalFigures.david.title,
          content: t.biblicalFigures.david.content,
          icon: GraduationCap,
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          title: t.biblicalFigures.joseph.title,
          content: t.biblicalFigures.joseph.content,
          icon: History,
          image: "/placeholder.svg?height=300&width=400",
        },
      ]
    : []) as Array<{ title: string; content: string; icon: any; image: string }>
  const [activeSection, setActiveSection] = useState("introduction")

  const [posts, setPosts] = useState<import("@/lib/supabase").Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/news`)
        if (!response.ok) throw new Error("Failed to fetch blog posts")
        const data = await response.json()
        const filtered = (data || []).filter((item: any) => item.category === BLOG_CATEGORY)
        setPosts(filtered)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-12 mt-32">
        <Loader2 className="h-18 w-18 animate-spin text-primary p-50" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-8">{error}</div>
    )
  }

  if (!posts.length) {
    return <div className="text-center text-gray-500 py-8">{t.noPosts}</div>
  }



  return (
    <div className="container mx-auto px-4 py-8 text-justify">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-52">
              <Image
                src={item.image_url || "/placeholder.svg"}
                alt={item.title}
                fill
                // className="object-cover object-center"
                className="object-contain md:object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {item.featured && <Badge className="absolute top-2 right-2 bg-amber-500">{t.featured}</Badge>}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-xs text-gray-500 mb-1">{new Date(item.created_at).toLocaleDateString()}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{item.excerpt}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500">{t.authorLabel} {item.author}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>


      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <Image src="/photo_2025-04-04_01-33-42.jpg?height=800&width=1600" alt={t.title} fill className="object-contain md:object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="text-xl md:text-2xl font-light max-w-2xl">{t.hero.authorName}</p>
          <p className="text-sm mt-2">
            {t.hero.sourceLabel}{" "}
            <Link href="https://eotcmk.org/a/መኑ-ውእቱ-ገብር-ኄር፤-ታማኝ-አገልጋይ-2/" className="underline">
              {t.hero.sourceLinkText}
            </Link>
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="introduction" className="w-full">
         
          <div className="prose max-w-none mb-8">
            {(t.content?.introduction || []).map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mt-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="prose max-w-none mb-8">
            {(t.content?.question || []).map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {localizedFigures.map((figure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4">{figure.title}</h3>
                  <p className="text-gray-600 mb-4">{figure.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="prose max-w-none mb-8">
            {(t.content?.conclusion || []).map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-8">
            {(t.lessons?.list || []).map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-xl mb-2">{lesson.title}</h3>
                {lesson.source && (
                  <div className="text-blue-600 font-medium mb-4">
                    {t.hero.sourceLabel} {lesson.source}
                    {lesson.link && lesson.link !== "#" && (
                      <Link href={lesson.link} className="ml-2 text-sm underline">
                        {t.readMore || "Read more"}
                      </Link>
                    )}
                  </div>
                )}
                <p className="text-gray-700">{lesson.content}</p>
              </motion.div>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  )
}

