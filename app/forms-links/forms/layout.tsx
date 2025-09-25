import type React from "react"
import type { Metadata } from "next"
import FormsSidebar from "./Sidebar"

export const metadata: Metadata = {
  title: "Forms | Ethiopian Orthodox Church",
  description: "Access and submit various forms for church services and activities",
}

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-64 flex-shrink-0">
          <FormsSidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
