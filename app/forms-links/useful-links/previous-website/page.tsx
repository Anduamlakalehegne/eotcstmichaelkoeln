"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Archive, Clock, AlertTriangle, CheckCircle, History } from "lucide-react"
import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"

export default function PreviousWebsitePage() {
  const { translations } = useLocale()
  const t = translations.formsLinks.usefulLinks.previousWebsite
  return (
    <div className="container mx-auto py-8">
      <div className="my-8 max-w-4xl mx-auto">
        <Card className="mb-8 border-primary/20">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-3">
              <Archive className="h-6 w-6 text-primary" />
              <CardTitle>{t.title}</CardTitle>
            </div>
            <CardDescription>
              {t.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden border">
                <Image
                  src="/old-website.jpg"
                  alt={t.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p>
                  {t.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{t.lastUpdated}</span>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://www.aethiopisch-orthodoxe-kirche-deutschland.de/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {t.visitButton}
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
