"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, History } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export default function UsefulLinksSidebar() {
  const { translations } = useLocale()

  const heading = translations.header?.menuItems?.["Useful Links"] || "Useful Links"
  const churchesGermanyLabel = translations.formsLinks?.usefulLinks?.churchesGermany?.title || "Churches in Germany"
  const previousWebsiteLabel = translations.formsLinks?.usefulLinks?.previousWebsite?.title || "Previous Website"

  return (
    <div className="sticky top-20">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/forms-links/useful-links/churches-germany" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {churchesGermanyLabel}
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/forms-links/useful-links/previous-website" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            {previousWebsiteLabel}
          </Link>
        </Button>
      </div>
    </div>
  )
}

