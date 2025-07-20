import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("blog")
      .select("*")
      .eq("id", params.id)
      .single()
    if (error) {
      throw error
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blog:", error)
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient()
    const body = await request.json()
    const { data, error } = await supabase
      .from("blog")
      .update({
        title: body.title,
        content: body.content,
        excerpt: body.excerpt,
        image_url: body.image_url,
        author: body.author,
        featured: body.featured,
        tags: body.tags || [],
        language: body.language
      })
      .eq("id", params.id)
      .select()
      .single()
    if (error) {
      throw error
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient()
    const { error } = await supabase
      .from("blog")
      .delete()
      .eq("id", params.id)
    if (error) {
      throw error
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting blog:", error)
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
  }
} 