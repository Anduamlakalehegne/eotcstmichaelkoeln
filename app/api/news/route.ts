import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

export async function GET() {
  try {
    const cookieStore = await cookies();
    const supabase = createServerComponentClient<Database>({
      cookies: () => cookieStore,
    });
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createServerComponentClient<Database>({
      cookies: () => cookieStore,
    });
    const body = await request.json()

    const { data, error } = await supabase
      .from("news")
      .insert([
        {
          title: body.title,
          content: body.content,
          excerpt: body.excerpt,
          image_url: body.image_url,
          author: body.author,
          category: body.category,
          featured: body.featured,
          language: body.language || "am" // Default to Amharic if not specified
        }
      ])
      .select()

    if (error) {
      throw error
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error creating news:", error)
    return NextResponse.json(
      { error: "Failed to create news" },
      { status: 500 }
    )
  }
}
