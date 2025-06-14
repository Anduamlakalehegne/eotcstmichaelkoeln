"use client"

import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { useLocale } from "@/contexts/locale-context"

// export const metadata: Metadata = {
//   title: "ሕፃናት እና ታዳጊዎች | Sunday School",
//   description: "Coming soon - Children and Youth section of the Ethiopian Orthodox Tewahedo Church in Cologne",
// }

export default function ChildrenPage() {
  const { locale, translations } = useLocale()

  const getTitle = () => {
    switch (locale) {
      case "am":
        return "ሕፃናት እና ታዳጊዎች"
      case "de":
        return "Kinder & Jugend"
      default:
        return "Children & Youth"
    }
  }

  const getSubtitle = () => {
    switch (locale) {
      case "am":
        return "የሕፃናት እና የታዳጊዎች ክፍል"
      case "de":
        return "Kinder- und Jugendabteilung"
      default:
        return "Children and Youth Section"
    }
  }

  const getComingSoonText = () => {
    switch (locale) {
      case "am":
        return "ይህ ክፍል በመዘጋጀት ላይ ነው። እባክዎ በኋላ ላይ ይመልከቱ።"
      case "de":
        return "Dieser Bereich wird derzeit erstellt. Bitte schauen Sie später wieder vorbei."
      default:
        return "We are currently working on this section. Please check back later for updates."
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title={""}
        subtitle={""}
      />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                {getComingSoonText()}
              </p>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 