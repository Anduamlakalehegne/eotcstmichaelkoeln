import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Users } from "lucide-react"

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
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">Forms</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/forms-links/forms/membership" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Membership Form
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/forms-links/forms/kirstina" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Kirstina Form
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
