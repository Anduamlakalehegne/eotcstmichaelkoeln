"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function ConstructionSection() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Column - Order changes on mobile */}
          <div className="order-1 md:order-2">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/constraction.jpg"
                alt="Church Construction"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-blue-600 mb-6">የቤተ ክርስቲያን ሕንፃ ግንባታ</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                በጀርመን አገር በኮለን ከተማ የምትገኘው ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቅድስት ቤተ ክርስቲያናችን ከዛሬ ቀደም ከነበራት ርስት የቦታ ባለቤትነት በእግዚአብሔር ፈቃድ ተጨማሪ የአምልኮ ፣ የበረከት ፣ የባለቤትነት ዕድሉን አምላከ ሚካኤል አሳክቶላት ከኃይል ወደ ኃይል ፣ ከበረከት ወደ በረከት ፣ ከትጥበት ወደ ስፋት ለመሻገር በባዕድ አገር ሰፊ የቦታ (1840 ካሬ ሜትር) ባለቤት ሆናለች ።
                የቤተክርስትያናችን የቦታ ግዢ ከተፈፀመ  በኃላ በተያዘው እቅድ መሰረት የውስጥ ማሰፋፋት ለማድረግ አስፈላጊው ጥናት ለማድረግ ከአርክቴክት ጋር የመግባቢያ ውል ተፈርሞ ሰራው ተጀምሯል ቤተክርሰትያናችን በቅርሰነት ሰለተመዘገበ አፍርሶ መስራት ሰለማይቻል የቤተክርሰትያኑን ንድፍ ለማውጣት አስቸጋሪ ነበር። ሆኖም አስፈላጊው የግንባታ ሂደት አልፎ ለሚመለከታቸው የመንግሰት አካላት (Stadt Köln Bauamt) የመጀመሪያውን ማመልከቻ ( Bauantrag ) ተደርጐ ነበር ። ሆኖም  ፍቃድ አግኝተን ለመስራት ከጐረቤቶቻችን ያለው እርቀት አስፈላጊ ነበር ይህም ምንአልባተ‍ ግንባታው ሲጀመር በወሰን የሚጋሩን  ጐረቤቶቻችን ቦታ ላይ ሊነካ ስለሚችል ( Baulast) የእነሱን  ይሁንታ ማግኘት ነበረብን ነገር ግን ጐረቤቶቻችን ለዚህ ብዙ ገንዘብ ሰለጠየቁን ይህን ለማሰቀረት ከ Bauphysik ጋር በመመካከር Baulast ፕላኑ በውስጥ  እንዴሆን ተደርጓል ከዚህ በተጨማሪ የመጀመሪያውን ቤተክርስትያን ግዢ ሲደረግ በፊት በኩል ባለው ጓሮ ቦታ ባለቤትነቱ  የአኢቫንኬልሽ ቤ/ክረስትያን ይዞታ  ሰለነበር  ይህንም ቦታ ግዢ ተፈፅሞ የኖታሩ እማኝ አባሪ ተደርጐ ይህ ማሻሻያ የተደረገበት ማመልከቻ  በድጋሚ  ለStadt Köln Bauamt ተመልክቷል።
                የእንፃ መስሪያ እቅድ(Bauplan)ማሻሻያ በተደረገ ቁጥር ለአርክቴክቶሮቹ የሚከፈለው ገንዘብ እና ለቦታው መስሪያ ፍቃድ የማግኛው ጊዜ ብዙ ጊዜ ፈጅቷል ። አሁን የመስሪያ  ፍቃድ ለማግኘት እየጠበቅን እንገኛለን::
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
                ተጨማሪ ያንብቡ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
