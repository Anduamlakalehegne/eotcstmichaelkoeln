"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { useLocale } from "@/contexts/locale-context"
import Image from "next/image"
import { Calendar, Users, BookOpen, GraduationCap, Heart } from "lucide-react"

export default function SundaySchoolPage() {
  const { locale } = useLocale()

  const getTitle = () => {
    switch (locale) {
      case "am":
        return "የሰንበት ትምህርት ቤት"
      case "de":
        return "Sonntagsschule"
      default:
        return "Sunday School"
    }
  }

  const getSubtitle = () => {
    switch (locale) {
      case "am":
        return "የሰንበት ትምህርት ቤት ክፍል"
      case "de":
        return "Sonntagsschulabteilung"
      default:
        return "Sunday School Department"
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

  const ageGroups = [
    {
      name: "Children",
      age: "4-12 years",
      description: "Foundation of faith and basic teachings",
      icon: Heart,
    },
    {
      name: "Youth",
      age: "13-18 years",
      description: "Deeper understanding and spiritual growth",
      icon: BookOpen,
    },
    {
      name: "Young Adults",
      age: "19-35 years",
      description: "Advanced studies and leadership",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      {/* <PageHero 
        title={""}
        subtitle={getSubtitle()}
      /> */}
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
      {/* <Footer /> */}
    </div>
  )
}
