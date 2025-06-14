"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "News & Events", href: "/news/events" },
  { name: "Service", href: "/service/kirstina" },
  { name: "Gallery", href: "/gallery/photos" },
  { name: "Contact", href: "/contact/location" },
]

const footerLinks2 = [
  { name: "ሰንበት ትምህርት ቤት", href: "/service/sunday-school" },
  { name: "በጀርመን ያሉ አብያተ ክርስቲያናት", href: "/forms-links/useful-links/churches-germany" },
  { name: "የቀን መቁጠሪያ", href: "/news/calendar" },
  { name: "ሕፃናት እና ታዳጊዎች", href: "/sunday-school/children" },
  { name: "ለመለገስ", href: "/forms-links/bank-details" },
]

const contactInfo = {
  phones: ["+49 221 5992623"],
  emails: ["aeokd@gmx.de"],
  address: "የፖስታ አድራሻ፥ Ückerather Str. 2, 50739 Köln",
}

export default function Footer() {
  const { translations } = useLocale()

  return (
    <footer className="bg-[#0a0f2c] text-white">
      {/* Top Section */}
      {/* <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Phone size={20} className="text-blue-500" />
              <h3 className="font-bold uppercase">{translations.footer.call}</h3>
            </div>
            {contactInfo.phones.map((phone, index) => (
              <p key={`phone-${index}`} className="mb-1">
                <Link href={`tel:${phone}`} className="hover:text-blue-400 transition-colors">
                  {phone}
                </Link>
              </p>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail size={20} className="text-blue-500" />
              <h3 className="font-bold uppercase">{translations.footer.email}</h3>
            </div>
            {contactInfo.emails.map((email, index) => (
              <p key={`email-${index}`} className="mb-2">
                <Link href={`mailto:${email}`} className="hover:text-blue-400 transition-colors">
                  {email}
                </Link>
              </p>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={20} className="text-blue-500" />
              <h3 className="font-bold uppercase">{translations.footer.address}</h3>
            </div>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZJvBpl9au7XYXRex05eYQaUTZuZnPm.png"
                  alt="Church Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* First Links Column */}
            <div>
              <h3 className="font-bold mb-4 uppercase">{translations.footer.resources}</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={`first-${link.name}-${index}`}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors">
                      {translations.header.menuItems[link.name] || link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Links Column */}
            <div>
              <h3 className="font-bold mb-4 uppercase">{translations.footer.usefulLink}</h3>
              <ul className="space-y-2">
                {footerLinks2.map((link, index) => (
                  <li key={`second-${link.name}-${index}`}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors">
                      {translations.footer.footerLinks[link.name] || link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold mb-4 uppercase">{translations.footer.contactUs}</h3>
              <p className="mb-4">{contactInfo.address}</p>
              <p className="mb-4">
                <Link href={`tel:${contactInfo.phones[0]}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.phones[0]}
                </Link>
              </p>
              <p className="mb-4">
                <Link href={`mailto:${contactInfo.emails[0]}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.emails[0]}
                </Link>
              </p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>

            {/* 5th Column: Provided Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-[130px] h-[130px] relative overflow-hidden rounded-full mt-7">
                <Image
                  src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fphoto_2025-05-23_21-29-10.jpg-YvRzVcT849PIGP2Crj8MdlRjODzRcm.jpeg&w=1920&q=75"
                  alt="Church Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>{translations.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
