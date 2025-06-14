import { NextResponse } from "next/server"
import { getServerClient } from "@/lib/supabase-server"

export async function POST(request: Request) {
  try {
    const { images } = await request.json()

    if (!Array.isArray(images)) {
      return NextResponse.json({ error: "Images must be an array" }, { status: 400 })
    }

    // Validate each image object
    for (const image of images) {
      if (!image.news_id || !image.image_url) {
        return NextResponse.json(
          { error: "Each image must have news_id and image_url" },
          { status: 400 }
        )
      }
    }

    const supabase = getServerClient()
    if (!supabase) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 })
    }

    const { data, error } = await supabase.from("news_images").insert(images)

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("Error in POST /api/news/gallery:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
} 