"use client"

import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/contexts/locale-context"

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(
  () => import("@/components/map-component"),
  { ssr: false }
)

function getChurchLocationByLocale(locale: "am" | "en" | "de") {
  const base = {
    id: 1,
    address: "Lindweilerweg 94, 50739",
    coordinates: [50.9777, 6.8977] as [number, number],
    contact: {
      postal: "Ückerather Str. 2, 50739 Köln",
      phone: "+49 221 5992623",
      email: "aeokd@gmx.de",
    },
    phone: "+49 221 5992623",
    email: "aeokd@gmx.de",
    website: "",
  }

  if (locale === "am") {
    return {
      ...base,
      name: "የኮሎኝ ቅዱስ ሚካኤል ቤተ ክርስቲያን",
      city: "ኮሎኝ, ጀርመን",
      region: "ኮሎኝ",
      transport: {
        bus: "አውቶቡስ 136 Lindweilerweg",
        train: "ኤስ ባን S11/S6 Longerich",
      },
    }
  }

  if (locale === "de") {
    return {
      ...base,
      name: "St. Michael Äthiopisch-Orthodoxe Kirche Köln",
      city: "Köln, Deutschland",
      region: "Köln",
      transport: {
        bus: "Bus 136 Lindweilerweg",
        train: "S-Bahn S11/S6 Longerich",
      },
    }
  }

  // default to English
  return {
    ...base,
    name: "St. Michael Ethiopian Orthodox Church Cologne",
    city: "Cologne, Germany",
    region: "Cologne",
    transport: {
      bus: "Bus 136 Lindweilerweg",
      train: "S-Bahn S11/S6 Longerich",
    },
  }
}

export default function LocationPage() {
  const { translations, locale } = useLocale()
  const t = translations.contact.location
  const churchLocation = getChurchLocationByLocale(locale)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">{t.address}</h2>
              <p className="text-gray-600 mb-2">{churchLocation.name}</p>
              <p className="text-gray-600 mb-2">{churchLocation.address}</p>
              <p className="text-gray-600 mb-6">{churchLocation.city}</p>

              <h3 className="font-bold mb-2">{t.transportStops}</h3>
              <p className="text-gray-600 mb-2">{churchLocation.transport.bus}</p>
              <p className="text-gray-600 mb-6">{churchLocation.transport.train}</p>

              {/* <h3 className="font-bold mb-2">የሚቀጥለው ይግባ</h3> */}
              {/* <p className="text-gray-600 mb-2"></p> */}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">{t.contactUsAt}</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>{t.labels.postalAddress}:</strong> {churchLocation.contact.postal}
                </p>
                <p className="text-gray-600">
                  <strong>{t.labels.phone}:</strong>{" "}
                  <a href={`tel:${churchLocation.contact.phone}`} className="text-blue-600 hover:underline">
                    {churchLocation.contact.phone}
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>{t.labels.email}:</strong>{" "}
                  <a href={`mailto:${churchLocation.contact.email}`} className="text-blue-600 hover:underline">
                    {churchLocation.contact.email}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="h-[500px] rounded-lg overflow-hidden border">
        {/* <div className="w-full h-[400px]"> */}
         
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.237020795784!2d6.9000118760123295!3d50.99329207170089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf301e45ab489d%3A0x7a8cddf4bfecdac9!2zTGluZHdlaWxlcndlZyA5NCwgNTA3MzkgS8O2bG4sIOGMgOGIreGImOGKlQ!5e0!3m2!1sde!2sde&hl=de"
           width="100%"
           
           height="100%"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           className="rounded-lg"
           title="Church Location"
         ></iframe>
       </div>
        {/* </div> */}
      </div>
    </div>
  )
}
