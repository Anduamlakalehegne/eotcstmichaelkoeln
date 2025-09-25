"use client"

import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { useLocale } from "@/contexts/locale-context"

export default function ChildrenPage() {
  const { locale, translations } = useLocale()

  const getTitle = () => translations?.service?.sundaySchool?.children?.title 

  const getSubtitle = () => translations?.service?.sundaySchool?.children?.subtitle 

  const getComingSoonText = () => translations?.service?.sundaySchool?.children?.comingSoon 

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{locale === "am" ? "በቅርብ ቀን" : "Coming Soon"}</h2>
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