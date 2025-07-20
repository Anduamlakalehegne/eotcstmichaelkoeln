import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, History } from "lucide-react"

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
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">ጠቃሚ አገናኞች</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/forms-links/useful-links/churches-germany" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  በጀርመን ያሉ ቤተክርስቲያናት
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/forms-links/useful-links/previous-website" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  የቀድሞ ድህረ ገፅ
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
