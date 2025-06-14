"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, X } from "lucide-react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface SuccessToastProps {
  message: string
  open: boolean
  onClose: () => void
  duration?: number
}

const toastVariants = cva(
  "fixed z-50 flex items-center gap-2 p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out",
  {
    variants: {
      position: {
        "top-right": "top-4 right-4",
        "top-center": "top-4 left-1/2 -translate-x-1/2",
        "bottom-right": "bottom-4 right-4",
      },
      variant: {
        success: "bg-green-100 text-green-800 border border-green-200",
        error: "bg-red-100 text-red-800 border border-red-200",
        warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
        info: "bg-blue-100 text-blue-800 border border-blue-200",
      },
    },
    defaultVariants: {
      position: "top-right",
      variant: "success",
    },
  },
)

export function SuccessToast({ message, open, onClose, duration = 5000 }: SuccessToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300) // Wait for animation to complete
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div
      className={cn(
        toastVariants({ variant: "success", position: "top-right" }),
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]",
      )}
    >
      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
      <span className="flex-1">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
        className="text-green-800 hover:text-green-900"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
