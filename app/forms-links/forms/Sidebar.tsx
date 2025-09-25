"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Users } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export default function FormsSidebar() {
  const { translations } = useLocale()

  const heading = translations.header?.menuItems?.["Forms"] || "Forms"
  const membershipLabel = translations.formsLinks?.forms?.membership?.title || translations.header?.menuItems?.["Membership Form"] || "Membership Form"
  const kirstinaLabel = translations.formsLinks?.forms?.kirstina?.title || translations.header?.menuItems?.["Kirstina Form"] || "Kirstina Form"

  return (
    <div className="sticky top-20">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/forms-links/forms/membership" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {membershipLabel}
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/forms-links/forms/kirstina" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            {kirstinaLabel}
          </Link>
        </Button>
      </div>
    </div>
  )
}
