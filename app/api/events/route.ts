import { NextResponse } from "next/server"
import { getServerClient } from "@/lib/supabase-server"

export async function GET() {
  try {
    const supabase = getServerClient()
    const { data, error } = await supabase.from("events").select("*").order("date", { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = getServerClient()
    const body = await request.json()

    const { data, error } = await supabase
      .from("events")
      .insert([{ ...body, created_at: new Date().toISOString() }])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error("Error creating event:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
