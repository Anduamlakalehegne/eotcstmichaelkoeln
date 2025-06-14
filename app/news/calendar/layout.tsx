import type React from "react"

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <main className="py-16">{children}</main>
    </div>
  )
}
