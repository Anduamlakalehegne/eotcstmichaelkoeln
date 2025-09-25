"use client"

import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"



export default function MezmurPage() {
  const { locale, translations } = useLocale()
  const getComingSoonText = () =>
    translations?.service?.sundaySchool?.mezmur?.comingSoon 

  return (
    <div className="min-h-screen">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{locale === "am" ? "በቅርብ ቀን" : "Coming Soon"}</h2>
              <p className="text-gray-600 mb-6">{getComingSoonText()}</p>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 