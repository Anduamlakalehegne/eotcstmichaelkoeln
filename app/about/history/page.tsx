"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, BookOpen, Church, Landmark, Home, Globe, Building } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export default function HistoryPage() {
  const { translations } = useLocale()
  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
      <div className="">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">{translations.history.title}</h1>

        {/* Introduction Section */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Image Container */}
          <div className="w-full">
            <div className="relative h-40 xs:h-48 sm:h-64 md:h-[400px] w-full sm:w-4/5 md:w-3/4 m-auto mb-1 md:mb-6 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/20201213_130221 (2).jpg"
                alt="Church History"
                fill
                className="object-cover"
              />
            </div>
            {/* Caption Section */}
            <div className="py-1 flex flex-col items-center">
              <span className="block text-center text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 bg-white/80 rounded-lg px-2 xs:px-4 sm:px-6 py-2 sm:py-3 shadow-md border border-blue-100 tracking-wide mb-2">
                {translations.history.caption}
              </span>
            </div>

            <p className="text-sm xs:text-base sm:text-lg mb-4 text-gray-700 leading-relaxed px-2 xs:px-4 sm:px-6 md:px-20 py-2 text-justify">
              {translations.history.introduction}
              <p className="py-2">{translations.history.establishment}</p>
              <p className="py-2">{translations.history.development}</p>
              <p className="py-2">{translations.history.question}</p>
            </p>
          </div>

        </div>

        {/* Timeline Section - Enhanced */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">{translations.history.timeline.title}</h2>

          <div className="space-y-12">
            {[
              {
                year: translations.history.timeline.periods.first.year,
                title: translations.history.timeline.periods.first.title,
                description: translations.history.timeline.periods.first.description,
                icon: "Home",
                color: "bg-blue-100 text-blue-700",
                image: "",
              },
              {
                year: translations.history.timeline.periods.second.year,
                title: translations.history.timeline.periods.second.title,
                description: translations.history.timeline.periods.second.description,
                icon: "Users",
                color: "bg-indigo-100 text-indigo-700",
                image: "",
              },
              {
                year: translations.history.timeline.periods.third.year,
                title: translations.history.timeline.periods.third.title,
                description: translations.history.timeline.periods.third.description,
                icon: "BookOpen",
                color: "bg-purple-100 text-purple-700",
                image: "",
              },
              {
                year: translations.history.timeline.periods.fourth.year,
                title: translations.history.timeline.periods.fourth.title,
                description: translations.history.timeline.periods.fourth.description,
                icon: "Globe",
                color: "bg-teal-100 text-teal-700",
                image: "",
              }
            ].map((period, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < 3 && (
                  <div className="absolute left-[39px] top-[80px] h-[calc(100%+40px)] w-1 bg-gray-200 z-0 md:left-1/2 md:-ml-0.5"></div>
                )}

                <div className="relative z-10 md:grid md:grid-cols-2 md:gap-8 items-center">
                  {/* Timeline node */}
                  <div className="flex items-center absolute left-0 md:left-1/2 md:-ml-5 mt-6">
                    <div
                      className={`h-10 w-10 rounded-full ${period.color} flex items-center justify-center shadow-md`}
                    >
                      {period.icon === "Home" && <Home className="h-5 w-5" />}
                      {period.icon === "Users" && <Users className="h-5 w-5" />}
                      {period.icon === "BookOpen" && <BookOpen className="h-5 w-5" />}
                      {period.icon === "Globe" && <Globe className="h-5 w-5" />}
                    </div>
                  </div>

                  {/* Left side (even indexes on mobile, odd on desktop) */}
                  <div
                    className={`ml-16 md:ml-0 ${index % 2 === 1 ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
                  >
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${period.color.split(" ")[0].replace("bg-", "border-")} hover:shadow-lg transition-shadow`}
                    >
                      {/* <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${period.color}`}>
                        {period.year}
                      </span> */}
                      <h3 className="text-xl font-bold mb-2">{period.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{period.description}</p>
                    </div>
                  </div>

                  {/* Right side (empty for layout purposes) */}
                  <div className={`hidden md:block ${index % 2 === 1 ? "md:col-start-2" : "md:col-start-1"}`}></div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Church Administration Section - New Design */}
        <div className="mb-16">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-600"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-blue-600"></div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">{translations.history.administration.title}</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>

              {/* Administrator */}
              <div className="max-w-md mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{translations.history.administration.administrator}</h3>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xl text-blue-700 font-medium">{translations.history.administration.administratorName}</p>
                  </div>
                </div>
              </div>

              {/* Current Council */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {translations.history.administration.currentCouncil} {translations.history.administration.councilPeriod}
                </h3>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="space-y-4">
                    {[
                      "ወይዘሪት ሒሩት መለሰ",
                      "አቶ ታመነ መልአኩ",
                      "አቶ ቴዎድሮስ ሣህሉ",
                      "አቶ በላይ ሶሎሞን"
                    ].map((name, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-3 group"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 font-medium">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{name}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      "አቶ ይበልጣል",
                      "አቶ ወንድም",
                      "ወይዘሮ መሠረት",
                      "ወይዘሮ ዮርዳኖስ"
                    ].map((name, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-3 group"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 font-medium">{index + 5}</span>
                        </div>
                        <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
