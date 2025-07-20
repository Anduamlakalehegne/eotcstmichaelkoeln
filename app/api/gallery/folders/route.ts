import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// GET: List folders (optionally by parent_id)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const parent_id = searchParams.get('parent_id')
  let query = supabase.from('gallery_folders').select('*').order('created_at', { ascending: true })
  if (parent_id) {
    query = query.eq('parent_id', parent_id)
  } else {
    query = query.is('parent_id', null)
  }
  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// POST: Create a new folder
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, parent_id } = body
  if (!name) return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  const { data, error } = await supabase.from('gallery_folders').insert([{ name, parent_id: parent_id || null }]).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
} 