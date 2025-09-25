"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageUpload } from "@/components/image-upload"
import { Loader2, Plus, Trash2, Edit, Folder, ArrowLeft, Pencil, AlertTriangle } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Gallery } from "@/lib/supabase"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Folder {
  id: number
  name: string
  parent_id: number | null
  created_at: string
}

export default function GalleryPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [folders, setFolders] = useState<Folder[]>([])
  const [photos, setPhotos] = useState<Gallery[]>([])
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null)
  const [folderStack, setFolderStack] = useState<Folder[]>([])
  const [showNewFolder, setShowNewFolder] = useState(false)
  const [newFolderName, setNewFolderName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [deleteFolder, setDeleteFolder] = useState<Folder | null>(null)
  const [isDeletingFolder, setIsDeletingFolder] = useState(false)

  useEffect(() => {
    fetchFolders()
    fetchPhotos()
    // eslint-disable-next-line
  }, [currentFolder])

  const fetchFolders = async () => {
    setLoading(true)
    try {
      const parent_id = currentFolder ? currentFolder.id : null
      const url = parent_id ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery-folders?parent_id=${parent_id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery-folders`
      const res = await fetch(url)
      const data = await res.json()
      setFolders(data)
    } catch (err: any) {
      setError("Failed to load folders")
    } finally {
      setLoading(false)
    }
  }

  const fetchPhotos = async () => {
    setLoading(true)
    try {
      const folder_id = currentFolder ? currentFolder.id : null
      const url = folder_id ? `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery?folder_id=${folder_id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery`
      const res = await fetch(url)
      const data = await res.json()
      setPhotos(data)
    } catch (err: any) {
      setError("Failed to load photos")
    } finally {
      setLoading(false)
    }
  }

  const handleOpenFolder = (folder: Folder) => {
    setFolderStack([...folderStack, folder])
    setCurrentFolder(folder)
  }

  const handleBack = () => {
    const newStack = [...folderStack]
    newStack.pop()
    setFolderStack(newStack)
    setCurrentFolder(newStack.length > 0 ? newStack[newStack.length - 1] : null)
  }

  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newFolderName.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery-folders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newFolderName, parent_id: currentFolder ? currentFolder.id : null })
      })
      if (!res.ok) throw new Error("Failed to create folder")
      setShowNewFolder(false)
      setNewFolderName("")
      fetchFolders()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteFolder = async () => {
    if (!deleteFolder) return
    setIsDeletingFolder(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/api/gallery-folders/${deleteFolder.id}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete folder")
      setDeleteFolder(null)
      fetchFolders()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsDeletingFolder(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          {currentFolder && (
            <Button variant="outline" onClick={handleBack} className="mr-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          )}
          <h1 className="text-3xl font-bold">Gallery Management</h1>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setShowNewFolder(true)}>
            <Folder className="h-4 w-4 mr-2" /> New Folder
          </Button>
          <Button onClick={() => router.push(`/admin/gallery/create${currentFolder ? `?folder_id=${currentFolder.id}` : ''}`)}>
            <Plus className="h-4 w-4 mr-2" /> Add New Photo
          </Button>
        </div>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {/* Folders */}
      <div className="mb-8">
        {folders.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Folders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {folders.map(folder => (
                  <div key={folder.id} className="flex items-center gap-2 p-3 border rounded cursor-pointer hover:bg-gray-50">
                    <Folder className="h-5 w-5 text-primary" onClick={() => handleOpenFolder(folder)} />
                    <span className="flex-1" onClick={() => handleOpenFolder(folder)}>{folder.name}</span>
                    <Button size="sm" variant="ghost" onClick={() => setDeleteFolder(folder)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Photos */}
      <Card>
        <CardHeader>
          <CardTitle>Photos {currentFolder && (<span className="text-sm text-gray-400 ml-2">in {currentFolder.name}</span>)}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Display Order</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {photos.map((photo) => (
                <TableRow key={photo.id}>
                  <TableCell>
                    <div className="relative h-26 w-26">
                      <img src={photo.image_url} alt={photo.title} className="object-cover rounded-md" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{photo.title}</div>
                      {photo.description && (<div className="text-sm text-gray-500">{photo.description}</div>)}
                    </div>
                  </TableCell>
                  <TableCell>{photo.category}</TableCell>
                  <TableCell>{photo.display_order}</TableCell>
                  <TableCell>{formatDate(photo.created_at)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => router.push(`/admin/gallery/edit/${photo.id}`)}><Edit className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* New Folder Modal */}
      {showNewFolder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Create New Folder</h2>
            <form onSubmit={handleCreateFolder} className="space-y-4">
              <Input value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder="Folder name" required />
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setShowNewFolder(false)}>Cancel</Button>
                <Button type="submit" disabled={loading}>{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create"}</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Folder Dialog */}
      <AlertDialog open={!!deleteFolder} onOpenChange={() => setDeleteFolder(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Delete Folder
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this folder? All subfolders and photos inside will also be deleted. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeletingFolder}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteFolder} disabled={isDeletingFolder} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {isDeletingFolder ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Deleting...</>) : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
} 