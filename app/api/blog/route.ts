import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.from("blog").select("*").order("created_at", { ascending: false })
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json()
    const { data, error } = await supabase
      .from("blog")
      .insert([
        {
          title: body.title,
          content: body.content,
          excerpt: body.excerpt,
          image_url: body.image_url,
          author: body.author,
          featured: body.featured,
          tags: body.tags || [],
          language: body.language || "am"
        }
      ])
      .select()
    if (error) {
      throw error
    }
    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error creating blog:", error)
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    )
  }
} 