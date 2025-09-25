"use client"

import Image from "next/image"
import { Clock, Book, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLocale } from "@/contexts/locale-context"

export default function SirateKidasePage() {
  const { translations, locale } = useLocale()
  const localizedNumerals = locale === "am" ? ["፩", "፪", "፫"] : ["1", "2", "3"]
  const serviceSchedule = [
    { day: "Sunday", time: "7:00 AM - 12:00 AM" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 text-justify">
      <Tabs defaultValue="amharic" className="w-full">
        <div className="flex justify-center mb-6">
        </div>

        {/* Amharic Content */}
        <TabsContent value="amharic">
          <div>
            <h1 className="text-3xl font-bold mb-8">{translations.service.sirateKidase.title}</h1>

            {/* Hero Section */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
              <Image src="/kidase.jpg" alt="Divine Liturgy" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg md:text-xl font-light">{translations.service.sirateKidase.heroDescription}</p>
              </div>
            </div>

            {/* Definition */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.definition.title}</h2>
              <p className="mb-6">
                {translations.service.sirateKidase.definition.content}
              </p>
            </div>

            {/* Schedule Cards */}
            <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.schedule.title}</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {serviceSchedule.map((schedule, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{index === 0 ? translations.service.sirateKidase.schedule.days.sunday : index === 1 ? translations.service.sirateKidase.schedule.days.wednesday : translations.service.sirateKidase.schedule.days.saturday}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span>{schedule.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Division of Divine Liturgy */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.division.title}</h2>
              <p className="mb-4">{translations.service.sirateKidase.division.intro}</p>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      {localizedNumerals[0]}
                    </div>
                    <div>
                      <h4 className="font-bold">{translations.service.sirateKidase.division.part1Title}</h4>
                      <p className="text-gray-600">
                        {translations.service.sirateKidase.division.part1Content}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      {localizedNumerals[1]}
                    </div>
                    <div>
                      <h4 className="font-bold">{translations.service.sirateKidase.division.part2Title}</h4>
                      <p className="text-gray-600">
                        {translations.service.sirateKidase.division.part2Content}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      {localizedNumerals[2]}
                    </div>
                    <div>
                      <h4 className="font-bold">{translations.service.sirateKidase.division.part3Title}</h4>
                      <p className="text-gray-600">
                        {translations.service.sirateKidase.division.part3Content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-4">{translations.service.sirateKidase.list.intro}</p>
              <ol className="list-decimal pl-6 mb-6 space-y-1">
                {translations.service.sirateKidase.list.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>

            {/* History */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.history.title}</h2>
              <p className="mb-6">
                {translations.service.sirateKidase.history.content}
              </p>
              {translations.service.sirateKidase.history.extra1 && (
                <p className="mb-6">{translations.service.sirateKidase.history.extra1}</p>
              )}
              {translations.service.sirateKidase.history.extra2 && (
                <p className="mb-6">{translations.service.sirateKidase.history.extra2}</p>
              )}
            </div>

            {/* First Celebrants */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.firstCelebrants.title}</h2>
              <p className="mb-6">{translations.service.sirateKidase.firstCelebrants.content}</p>
              {translations.service.sirateKidase.firstCelebrants.extra1 && (
                <p className="mb-6">{translations.service.sirateKidase.firstCelebrants.extra1}</p>
              )}
              {translations.service.sirateKidase.firstCelebrants.extra2 && (
                <p className="mb-6">{translations.service.sirateKidase.firstCelebrants.extra2}</p>
              )}
              {translations.service.sirateKidase.firstCelebrants.extra3 && (
                <p className="mb-6">{translations.service.sirateKidase.firstCelebrants.extra3}</p>
              )}
            </div>

            {/* Main Purpose */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.mainPurpose.title}</h2>
              <p className="mb-6">{translations.service.sirateKidase.mainPurpose.content}</p>
              {translations.service.sirateKidase.mainPurpose.extra1 && (
                <p className="mb-6">{translations.service.sirateKidase.mainPurpose.extra1}</p>
              )}
              {translations.service.sirateKidase.mainPurpose.extra2 && (
                <p className="mb-6">{translations.service.sirateKidase.mainPurpose.extra2}</p>
              )}
            </div>

            {/* Preparation */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.preparation.title}</h2>
              <p className="mb-4">{translations.service.sirateKidase.preparation.content}</p>
              {translations.service.sirateKidase.preparation.sections?.map((sec, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mt-6 mb-3">{sec.title}</h3>
                  {sec.paragraphs.map((pg, i) => (
                    <p key={i} className="mb-4">{pg}</p>
                  ))}
                  {sec.list && sec.list.length > 0 && (
              <ul className="list-disc pl-6 mb-4">
                      {sec.list.map((item, li) => (
                        <li key={li}>{item}</li>
                      ))}
              </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Rules and Etiquette */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">{translations.service.sirateKidase.rules.title}</h2>

              {translations.service.sirateKidase.rules.sections?.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-xl font-bold mt-6 mb-3">{section.title}</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
              </ol>
                </div>
              ))}
            </div>

            {/* Participation Guidelines */}
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">{translations.service.sirateKidase.participation.title}</h3>
                <ul className="space-y-3">
                  {translations.service.sirateKidase.participation.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                      <span>{item}</span>
                  </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/kidase2.jpg"
                  alt="Divine Liturgy Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-bold">{translations.service.sirateKidase.additionalInfo.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-600 pl-9">
                {translations.service.sirateKidase.additionalInfo.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
