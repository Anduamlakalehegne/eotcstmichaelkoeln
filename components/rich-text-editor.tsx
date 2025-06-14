"use client"

import { useState, useEffect } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import TextAlign from "@tiptap/extension-text-align"
import {
  Bold,
  Italic,
  UnderlineIcon,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ImageIcon,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  height?: number
}

export function RichTextEditor({ value, onChange, height = 500 }: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle initial value
  useEffect(() => {
    if (editor && value && editor.getHTML() !== value) {
      editor.commands.setContent(value)
    }
  }, [editor, value])

  if (!isMounted) {
    return <div className="border rounded-md" style={{ height: `${height}px` }}></div>
  }

  const toggleBold = () => {
    editor?.chain().focus().toggleBold().run()
  }

  const toggleItalic = () => {
    editor?.chain().focus().toggleItalic().run()
  }

  const toggleUnderline = () => {
    editor?.chain().focus().toggleUnderline().run()
  }

  const toggleHeading = (level: 1 | 2 | 3) => {
    editor?.chain().focus().toggleHeading({ level }).run()
  }

  const toggleBulletList = () => {
    editor?.chain().focus().toggleBulletList().run()
  }

  const toggleOrderedList = () => {
    editor?.chain().focus().toggleOrderedList().run()
  }

  const setTextAlign = (align: "left" | "center" | "right" | "justify") => {
    editor?.chain().focus().setTextAlign(align).run()
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL")
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }

  const setLink = () => {
    const url = window.prompt("Enter URL")
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run()
    }
  }

  return (
    <div className="border rounded-md overflow-hidden" style={{ minHeight: `${height}px` }}>
      <div className="bg-gray-50 p-2 border-b flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => toggleHeading(1)}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""}`}
          title="Heading 1"
        >
          <Heading1 size={16} />
        </button>
        <button
          type="button"
          onClick={() => toggleHeading(2)}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""}`}
          title="Heading 2"
        >
          <Heading2 size={16} />
        </button>
        <button
          type="button"
          onClick={() => toggleHeading(3)}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("heading", { level: 3 }) ? "bg-gray-200" : ""}`}
          title="Heading 3"
        >
          <Heading3 size={16} />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
        <button
          type="button"
          onClick={toggleBold}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("bold") ? "bg-gray-200" : ""}`}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={toggleItalic}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("italic") ? "bg-gray-200" : ""}`}
          title="Italic"
        >
          <Italic size={16} />
        </button>
        <button
          type="button"
          onClick={toggleUnderline}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("underline") ? "bg-gray-200" : ""}`}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
        <button
          type="button"
          onClick={() => setTextAlign("left")}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""}`}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => setTextAlign("center")}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""}`}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </button>
        <button
          type="button"
          onClick={() => setTextAlign("right")}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""}`}
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>
        <button
          type="button"
          onClick={() => setTextAlign("justify")}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive({ textAlign: "justify" }) ? "bg-gray-200" : ""}`}
          title="Justify"
        >
          <AlignJustify size={16} />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
        <button
          type="button"
          onClick={toggleBulletList}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("bulletList") ? "bg-gray-200" : ""}`}
          title="Bullet List"
        >
          <List size={16} />
        </button>
        <button
          type="button"
          onClick={toggleOrderedList}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("orderedList") ? "bg-gray-200" : ""}`}
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded hover:bg-gray-200 ${editor?.isActive("link") ? "bg-gray-200" : ""}`}
          title="Add Link"
        >
          <LinkIcon size={16} />
        </button>
        <button type="button" onClick={addImage} className="p-2 rounded hover:bg-gray-200" title="Add Image">
          <ImageIcon size={16} />
        </button>
      </div>
      <EditorContent editor={editor} className="p-4 prose max-w-none" style={{ minHeight: `${height - 50}px` }} />
    </div>
  )
}
