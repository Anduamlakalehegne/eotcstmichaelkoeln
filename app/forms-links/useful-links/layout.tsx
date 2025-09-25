import type React from "react"
import type { Metadata } from "next"
import UsefulLinksSidebar from "./Sidebar"

export const metadata: Metadata = {
  title: "ጠቃሚ አገናኞች | የኢትዮጵያ ኦርቶዶክስ ቤተክርስቲያን",
  description: "ከኢትዮጵያ ኦርቶዶክስ ቤተክርስቲያን ጋር የተያያዙ ጠቃሚ ምንጮችን እና አገናኞችን ያግኙ",
}

export default function UsefulLinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-64 flex-shrink-0">
          <UsefulLinksSidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
