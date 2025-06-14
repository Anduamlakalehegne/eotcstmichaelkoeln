import type React from "react"

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="py-8">{children}</main>
}
