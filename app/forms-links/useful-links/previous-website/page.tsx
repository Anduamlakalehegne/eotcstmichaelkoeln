import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Archive, Clock, AlertTriangle, CheckCircle, History } from "lucide-react"
import Image from "next/image"

export default function PreviousWebsitePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="my-8 max-w-4xl mx-auto">
        <Card className="mb-8 border-primary/20">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-3">
              <Archive className="h-6 w-6 text-primary" />
              <CardTitle>Accessing Our Previous Website</CardTitle>
            </div>
            <CardDescription>
              Our previous website remains available for reference and accessing historical content
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Previous website screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p>
                  Our previous website served our community for many years. While we've moved to this new platform to
                  better serve you, the previous site remains accessible for historical reference and to access older
                  content.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Last updated: January 2023</span>
                </div>
                <Button className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Previous Website
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
