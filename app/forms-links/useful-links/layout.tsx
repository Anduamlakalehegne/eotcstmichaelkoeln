import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, History } from "lucide-react"

export const metadata: Metadata = {
  title: "Useful Links | Ethiopian Orthodox Church",
  description: "Access helpful resources and links related to the Ethiopian Orthodox Church",
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
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/forms-links/useful-links/churches-germany" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Churches in Germany
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/forms-links/useful-links/previous-website" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Previous Website
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
