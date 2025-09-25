"use client"

import Image from "next/image"
import { Tabs } from "@/components/ui/tabs"
import { useLocale } from "@/contexts/locale-context"

export default function TseloteFithatPage() {
  const { translations } = useLocale()
  const t = translations?.service?.tseloteFithat

  return (
    <div className="container mx-auto px-4 text-justify">
      <div className="mb-6 flex justify-end">
        <div className="inline-flex items-center rounded-md border border-input bg-background p-1 text-sm shadow-sm">
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl font-bold mb-2">{t?.title}</h1>
        <h2 className="text-xl text-gray-600 mb-8">{t?.subtitle}</h2>
        <p className="text-sm text-gray-500 mb-8">{t?.source}</p>  

        <Tabs defaultValue="overview" className="mb-12">

            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-4">{t?.purpose}</p>
              <p className="text-lg leading-relaxed mb-4">{t?.connection}</p>
              <p className="text-lg leading-relaxed">{t?.angels}</p>
            </div>

            <div className="prose max-w-none">
              {t?.biblical?.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg leading-relaxed mb-4">{t?.time}</p>
              {t?.exceptions?.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg leading-relaxed mb-4">{t?.church}</p>
              <p className="text-lg leading-relaxed">{t?.faith}</p>
            </div>

        </Tabs>

        
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">{t?.conclusionTitle}</h2>
          <div className="prose max-w-none">
            {t?.conclusion?.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
