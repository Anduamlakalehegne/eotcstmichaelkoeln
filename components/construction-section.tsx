"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useLocale } from "@/contexts/locale-context"

export default function ConstructionSection() {
  const [isExpanded, setIsExpanded] = useState(true)
  const { translations } = useLocale()

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Header - Above everything on mobile */}
        <div className="mb-8 md:hidden text-center">
          <h2 className="text-2xl font-bold text-blue-600">{translations.home.construction.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Column - Order changes on mobile */}
          <div className="order-1 md:order-2">
            <div className="relative h-[350px] sm:h-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/constraction.jpg"
                alt="Church Construction"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 md:order-1">
            {/* Desktop title - hidden on mobile */}
            <h2 className="hidden md:block text-2xl md:text-3xl lg:text-3xl font-bold text-blue-600 mb-6">{translations.home.construction.title}</h2>
            <div className="space-y-4 text-gray-600 text-justify">
              <p>
                {translations.home.construction.content}
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 overflow-hidden"
                  >
                    {/* <p>
                      The new building will feature a traditional Ethiopian Orthodox architectural design, blending
                      cultural heritage with modern functionality. The construction is planned in three phases, with the
                      first phase focusing on the main sanctuary.
                    </p>
                    <p>
                      We invite all community members to participate in this journey through prayers, donations, and
                      volunteer work. Regular updates on the construction progress will be shared on our website and
                      during Sunday announcements.
                    </p> */}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/about/construction-status"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                {translations.home.construction.readMore}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
