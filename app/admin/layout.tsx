"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Loader2, Home, Newspaper, Calendar, LogOut, Image, Video, Archive } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { usePathname } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { session, loading } = useAuth()
  const pathname = usePathname()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !session) {
      window.location.href = "/login"
    }
  }, [loading, session])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    )
  }

  if (!session) return null;

  return (
    <div className="flex min-h-screen bg-gray-100 mt-[100px]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome, {session.user.email}</p>
        </div>
        <nav className="p-4 space-y-2">
          <Button variant="ghost" className={`w-full justify-start ${pathname === "/admin" ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/news") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/news">
              <Newspaper className="mr-2 h-4 w-4" /> News
            </Link>
          </Button>
          {/* Blog menu item */}
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/blog") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/blog">
              <Newspaper className="mr-2 h-4 w-4" /> Blog
            </Link>
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/events") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/events">
              <Calendar className="mr-2 h-4 w-4" /> Events
            </Link>
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/calendars") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/calendars">
              <Calendar className="mr-2 h-4 w-4" /> Church Calendars
            </Link>
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/gallery") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/gallery">
              <Image className="mr-2 h-4 w-4" /> Gallery
            </Link>
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/videos") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/videos">
              <Video className="mr-2 h-4 w-4" /> Videos
            </Link>
          </Button>
          <Button variant="ghost" className={`w-full justify-start ${pathname.startsWith("/admin/archive") ? "bg-blue-100" : ""}`} asChild>
            <Link href="/admin/archive">
              <Archive className="mr-2 h-4 w-4" /> Archive
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-800 hover:bg-red-50"
            onClick={() => {
              localStorage.removeItem("auth")
              window.location.href = "/login"
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
