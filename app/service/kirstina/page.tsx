"use client"

import Image from "next/image"
import { Calendar, Clock, Users } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"

export default function KirstinaPage() {
  const { translations } = useLocale()


  return (
    <div className="container mx-auto px-4 pb-12 text-justify">
      <div className="mb-6 flex justify-end">
        <div className="flex items-center gap-2 rounded-lg border p-1">
        </div>
      </div>

      <div className="">
        <h1 className="mb-8 text-3xl font-bold">ክርስትና (የልጅነት ጥምቀት)</h1>

        {/* Hero Section */}
        <div className="relative mb-12 h-[500px] overflow-hidden rounded-xl">
          <Image src="/photo_2025-06-05_21-57-13.jpg" alt="Baptism Ceremony" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-lg font-light md:text-xl">
              {translations.service.kirstina.heroDescription}
            </p>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Calendar className="text-blue-600" />
              <h3 className="font-semibold">{translations.service.kirstina.serviceDetails.when.title}</h3>
            </div>
            <p className="text-gray-600">
              {translations.service.kirstina.serviceDetails.when.description}
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Clock className="text-blue-600" />
              <h3 className="font-semibold">{translations.service.kirstina.serviceDetails.duration.title}</h3>
            </div>
            <p className="text-gray-600">{translations.service.kirstina.serviceDetails.duration.description}</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Users className="text-blue-600" />
              <h3 className="font-semibold">{translations.service.kirstina.serviceDetails.participants.title}</h3>
            </div>
            <p className="text-gray-600">
              {translations.service.kirstina.serviceDetails.participants.description}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">

          <h2 className="mb-4 text-2xl font-bold">{translations.service.kirstina.about.title}</h2>
          <p className="mb-6">{translations.service.kirstina.about.content}</p>

          <div className="mb-8 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.howPerformed.title}</h3>
            <p className="mb-4">{translations.service.kirstina.howPerformed.content}</p>
          </div>

          <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.howCeremony.title}</h3>
          <p className="mb-6">{translations.service.kirstina.howCeremony.part1}</p>

          <p className="mb-6">{translations.service.kirstina.howCeremony.part2}</p>

          <p className="mb-6">{translations.service.kirstina.howCeremony.part3}</p>

          <p className="mb-6">{translations.service.kirstina.howCeremony.part4}</p>

          <div className="my-8 grid gap-8 md:grid-cols-2">
            <div className="relative h-[300px] sm:h-[350px] overflow-hidden rounded-lg">
              <Image
                src="/photo_2025-06-05_21-57-14.jpg?height=300&width=400"
                alt="የጥምቀት ዝግጅት"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[300px] sm:h-[350px] overflow-hidden rounded-lg">
              <Image
                src="/photo_2023-01-22_21-43-32.jpg?height=300&width=400"
                alt="የጥምቀት ሥነ-ሥርዓት"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.naming.title}</h3>
          <p className="mb-6">{translations.service.kirstina.naming.content}</p>

          <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.baptismAge.title}</h3>
          <p className="mb-6">{translations.service.kirstina.baptismAge.part1}</p>
          <p className="mb-6">{translations.service.kirstina.baptismAge.part2}</p>
          <p className="mb-6">{translations.service.kirstina.baptismAge.part3}</p>

          <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.godparents.title}</h3>
          <p className="mb-6">{translations.service.kirstina.godparents.content}</p>

          <p className="mb-6">{translations.service.kirstina.godparentsRestrictions}</p>

          <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.maeteb.title}</h3>
          <p className="mb-6">{translations.service.kirstina.maeteb.part1}</p>

          <p className="mb-6">{translations.service.kirstina.maeteb.part2}</p>

          <h3 className="mb-4 text-xl font-bold">{translations.service.kirstina.visibleGrace.title}</h3>
          <p className="mb-6">{translations.service.kirstina.visibleGrace.content}</p>

          <div className="p-4 border rounded-md shadow-sm max-w-md">
            <label htmlFor="christianFormLink" className="block mb-2 text-gray-700">
              {translations.service.kirstina.formLink.label}
            </label>

            {/* Or use a Link if you're using React Router */}
            <a href="/forms-links/forms/kirstina" className="text-blue-600 hover:underline mt-2 block">
              {translations.service.kirstina.formLink.linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
