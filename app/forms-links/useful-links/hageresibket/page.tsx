import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Book, Calendar, Video, Music, Globe, Library, Clock } from "lucide-react"
import Image from "next/image"

export default function HageresibketPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="my-8">
        <Tabs defaultValue="books" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <TabsTrigger value="books" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span className="hidden md:inline">Books</span>
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden md:inline">Calendar</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span className="hidden md:inline">Videos</span>
              </TabsTrigger>
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                <span className="hidden md:inline">Music</span>
              </TabsTrigger>
              <TabsTrigger value="websites" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">Websites</span>
              </TabsTrigger>
              <TabsTrigger value="archives" className="flex items-center gap-2">
                <Library className="h-4 w-4" />
                <span className="hidden md:inline">Archives</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="books" className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Sacred Books & Literature</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Holy Bible (Amharic)",
                  description:
                    "Complete Amharic translation of the Holy Bible including the 81 books recognized by the Ethiopian Orthodox Church",
                  image: "/placeholder.svg?height=200&width=300",
                  link: "#",
                },
                {
                  title: "Kidasie (Liturgy)",
                  description:
                    "The Divine Liturgy of the Ethiopian Orthodox Tewahedo Church with translations and explanations",
                  image: "/placeholder.svg?height=200&width=300",
                  link: "#",
                },
                {
                  title: "Synaxarium",
                  description:
                    "Collection of saints' lives arranged according to the days of the year in the Ethiopian calendar",
                  image: "/placeholder.svg?height=200&width=300",
                  link: "#",
                },
                {
                  title: "Book of Enoch",
                  description:
                    "Ancient Jewish religious work attributed to Enoch, preserved in its entirety only in the Ge'ez language",
                  image: "/placeholder.svg?height=200&width=300",
                  link: "#",
                },
                {
                  title: "Didascalia",
                  description:
                    "Apostolic teachings and church order document important in Ethiopian Orthodox tradition",
                  image: "/placeholder.svg?height=200&width=300",
                  link: "#",
                },
                {
                  title: "Fetha Nagast",
                  description: "Legal code compiled around 1240, serving as both a civil and religious law in Ethiopia",
                  image: "/placeholder.svg?height=200&width=300",
                  link: "#",
                },
              ].map((book, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 w-full">
                    <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{book.title}</CardTitle>
                    <CardDescription>{book.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={book.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Book className="h-4 w-4" />
                        Access Resource
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Ethiopian Orthodox Calendar</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Ethiopian Calendar Converter</CardTitle>
                  <CardDescription>Convert between Ethiopian and Gregorian calendars</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-md text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Interactive calendar converter would be implemented here
                    </p>
                    <div className="flex justify-center gap-4 items-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">2016</div>
                        <div className="text-xs text-muted-foreground">Ethiopian Year</div>
                      </div>
                      <Clock className="h-6 w-6 text-muted-foreground" />
                      <div className="text-center">
                        <div className="text-3xl font-bold">2024</div>
                        <div className="text-xs text-muted-foreground">Gregorian Year</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Full Calendar Tool
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fasting & Feast Days</CardTitle>
                  <CardDescription>
                    Major fasting periods and feast days in the Ethiopian Orthodox calendar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      {
                        name: "Fast of the Prophets (Tsome Nebiyat)",
                        date: "November 15 - January 6",
                        days: "43 days",
                      },
                      { name: "Great Lent (Hudade or Abiy Tsom)", date: "February - April (varies)", days: "55 days" },
                      { name: "Fast of the Apostles (Tsome Hawariat)", date: "Varies each year", days: "10-40 days" },
                      { name: "Fast of the Assumption (Tsome Filseta)", date: "August 1-15", days: "15 days" },
                      { name: "Wednesdays and Fridays", date: "Throughout the year", days: "Weekly" },
                    ].map((fast, index) => (
                      <li key={index} className="border-b pb-2 last:border-0">
                        <div className="font-medium">{fast.name}</div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{fast.date}</span>
                          <span>{fast.days}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Complete Calendar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Video Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Divine Liturgy (Kidase)",
                  description: "Full recording of the Ethiopian Orthodox Divine Liturgy with explanations",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Spiritual Teachings",
                  description: "Collection of teachings from Ethiopian Orthodox scholars and clergy",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Church History",
                  description: "Documentary series on the history of the Ethiopian Orthodox Tewahedo Church",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Sacred Music (Mezmur)",
                  description: "Traditional Ethiopian Orthodox hymns and spiritual songs",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Holy Sites",
                  description: "Virtual tours of important Ethiopian Orthodox churches and monasteries",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Festivals & Celebrations",
                  description: "Recordings of major feast days and celebrations in the Ethiopian Orthodox tradition",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full group">
                    <Image src={video.image || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Video className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Watch Videos
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Sacred Music (Mezmur)</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Featured Collections</CardTitle>
                    <CardDescription>Traditional Ethiopian Orthodox hymns and chants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        { title: "Tsome Digua", description: "Hymns for the Great Lent", duration: "3:42" },
                        { title: "Kidase Zeema", description: "Liturgical chants", duration: "5:18" },
                        { title: "Mahlet", description: "Night-time hymns", duration: "4:56" },
                        { title: "Mezmur Kidus", description: "Sacred hymns for feast days", duration: "6:24" },
                        {
                          title: "Begena Mezmur",
                          description: "Hymns accompanied by the traditional Ethiopian lyre",
                          duration: "7:15",
                        },
                      ].map((track, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 p-2 hover:bg-muted rounded-md transition-colors"
                        >
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Music className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{track.title}</div>
                            <div className="text-sm text-muted-foreground">{track.description}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">{track.duration}</div>
                          <Button variant="ghost" size="icon">
                            <Video className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Browse All Music
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Musical Instruments</CardTitle>
                    <CardDescription>Traditional instruments used in Ethiopian Orthodox worship</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Begena", description: "Ten-stringed lyre known as 'David's Harp'" },
                      { name: "Kebero", description: "Double-headed conical drum" },
                      { name: "Sistrum", description: "Metal rattles used during services" },
                      { name: "Tsenatsil", description: "Prayer sticks used for rhythm" },
                    ].map((instrument, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Music className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{instrument.name}</div>
                          <div className="text-sm text-muted-foreground">{instrument.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="websites" className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Useful Websites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Ethiopian Orthodox Tewahedo Church",
                  description: "Official website of the Ethiopian Orthodox Tewahedo Church",
                  link: "https://www.ethiopianorthodox.org/",
                  icon: Globe,
                },
                {
                  title: "Debre Selam Medhane Alem",
                  description: "Resources from one of the largest Ethiopian Orthodox churches in North America",
                  link: "https://www.dsmedihanealem.org/",
                  icon: Globe,
                },
                {
                  title: "Tewahedo Resources",
                  description: "Collection of Ethiopian Orthodox resources, books, and articles",
                  link: "#",
                  icon: Library,
                },
                {
                  title: "Ethiopian Orthodox Bible",
                  description: "Online version of the Ethiopian Orthodox Bible with 81 books",
                  link: "#",
                  icon: Book,
                },
                {
                  title: "Ethiopian Calendar",
                  description: "Online Ethiopian calendar converter and feast days",
                  link: "#",
                  icon: Calendar,
                },
                {
                  title: "Kidase (Liturgy) Online",
                  description: "Complete text of the Divine Liturgy with translations",
                  link: "#",
                  icon: Book,
                },
              ].map((site, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <site.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{site.title}</CardTitle>
                    </div>
                    <CardDescription>{site.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={site.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visit Website
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="archives" className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Historical Archives</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Manuscript Collections</CardTitle>
                  <CardDescription>Digital archives of ancient Ethiopian manuscripts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Garima Gospels",
                        description: "Among the world's oldest illuminated Christian manuscripts",
                        date: "4th-7th century",
                      },
                      {
                        name: "Lalibela Manuscripts",
                        description: "Collection from the rock-hewn churches of Lalibela",
                        date: "12th-15th century",
                      },
                      {
                        name: "Tana Gospels",
                        description: "Manuscripts from monasteries around Lake Tana",
                        date: "14th-18th century",
                      },
                      {
                        name: "Royal Chronicles",
                        description: "Historical records of Ethiopian emperors",
                        date: "Various periods",
                      },
                    ].map((manuscript, index) => (
                      <div key={index} className="flex gap-3 items-start border-b pb-3 last:border-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <Library className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{manuscript.name}</div>
                          <div className="text-sm text-muted-foreground">{manuscript.description}</div>
                          <div className="text-xs text-muted-foreground mt-1">{manuscript.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Explore Manuscripts
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historical Documents</CardTitle>
                  <CardDescription>Important documents in Ethiopian Orthodox history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Kebra Nagast",
                        description: "The Glory of Kings - chronicles the Solomonic dynasty",
                        date: "13th century",
                      },
                      {
                        name: "Fetha Nagast",
                        description: "The Law of Kings - legal code of Ethiopia",
                        date: "15th century",
                      },
                      {
                        name: "Letters of Emperor Zara Yaqob",
                        description: "Theological writings of Emperor Zara Yaqob",
                        date: "15th century",
                      },
                      {
                        name: "Council of Boru Meda",
                        description: "Documents from the important theological council",
                        date: "1878",
                      },
                    ].map((document, index) => (
                      <div key={index} className="flex gap-3 items-start border-b pb-3 last:border-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <Book className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{document.name}</div>
                          <div className="text-sm text-muted-foreground">{document.description}</div>
                          <div className="text-xs text-muted-foreground mt-1">{document.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Documents
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Request Additional Resources</h2>
        <p className="text-center text-muted-foreground mb-6">
          Can't find what you're looking for? Let us know what resources would be helpful to you.
        </p>
        <div className="flex justify-center">
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
