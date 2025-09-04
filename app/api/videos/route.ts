import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const folder_id = searchParams.get('folder_id')
  let query = supabase.from('videos').select('*').order('created_at', { ascending: false })
  if (folder_id) {
    query = query.eq('folder_id', folder_id)
  } else {
    query = query.is('folder_id', null)
  }
  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Remove display_order if it exists in the request body
    const { display_order, ...videoData } = body
    
    const { data, error } = await supabase
      .from("videos")
      .insert([{ ...videoData, created_at: new Date().toISOString() }])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error("Error creating video:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
} 