import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://tzjoxzvxynyroiruezrm.supabase.co"
const supabaseAnonKey = ""
const supabaseServiceKey = ""

// Client-side Supabase client (limited permissions)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client with admin privileges
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Types for our database tables
export type News = {
  id: number
  title: string
  excerpt: string
  content: string
  image_url: string
  category: string
  featured: boolean
  author: string
  author_role: string
  author_image: string
  read_time: string
  created_at: string
  updated_at: string
  gallery_images?: EventGalleryImage[]
  language: "en" | "am" | "de"
}

export type NewsGalleryImage = {
  id: number
  news_id: number
  image_url: string
  caption: string | null
  display_order: number
  created_at: string
}

export type Announcement = {
  id: number
  title: string
  content: string
  priority: "high" | "medium" | "normal"
  publish_date: string
  created_at: string
  updated_at: string
}

export type Event = {
  id: number
  title: string
  date: string
  time: string
  location: string
  address?: string
  image_url?: string
  description: string
  category: string
  featured: boolean
  organizer?: string
  contact?: string
  max_attendees?: number
  current_attendees?: number
  created_at: string
  updated_at: string
  related_events?: number[]
  gallery_images?: EventGalleryImage[]
  language: "en" | "am" | "de"
}

export type EventGalleryImage = {
  id: number
  event_id: number
  image_url: string
  caption: string | null
  display_order: number
  created_at: string
}

export type EventRSVP = {
  id: number
  event_id: number
  name: string
  email: string
  phone?: string
  guests: number
  message?: string
  created_at: string
}

export type Tag = {
  id: number
  name: string
}

export type Gallery = {
  id: number
  title: string
  description: string | null
  image_url: string
  category: string | null
  display_order: number
  created_at: string
  updated_at: string
}

export type Archive = {
  id: string
  title: string
  description: string | null
  year: string
  type: "photo" | "document"
  category: string
  image_url: string
  document_url: string | null
  tags: string[]
  created_at: string
  updated_at: string
}
