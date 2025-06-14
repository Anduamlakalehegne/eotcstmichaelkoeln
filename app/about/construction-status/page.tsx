"use client"

import { motion } from "framer-motion"
import { HardHat, Timer, CheckCircle2 } from "lucide-react"

export default function ConstructionStatusPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header with subtle animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">የግንባታ ሁኔታ</h1>
      </motion.div>

      {/* Status Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500"
        >
          <div className="flex items-center mb-2">
            <HardHat className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="font-semibold">የግንባታ ሁኔታ</h3>
          </div>
          <p className="text-gray-600">በሂደት ላይ</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500"
        >
          <div className="flex items-center mb-2">
            <Timer className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="font-semibold">የፍቃድ ሁኔታ</h3>
          </div>
          <p className="text-gray-600">በጥብቅ ላይ</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500"
        >
          <div className="flex items-center mb-2">
            <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="font-semibold">የቦታ ሁኔታ</h3>
          </div>
          <p className="text-gray-600">1840 ካሬ ሜትር</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            በጀርመን አገር በኮለን ከተማ የምትገኘው ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቅድስት ቤተ ክርስቲያናችን ከዛሬ ቀደም ከነበራት ርስት የቦታ ባለቤትነት
            በእግዚአብሔር ፈቃድ ተጨማሪ የአምልኮ ፣ የበረከት ፣ የባለቤትነት ዕድሉን አምላከ ሚካኤል አሳክቶላት ከኃይል ወደ ኃይል ፣ ከበረከት ወደ በረከት ፣ ከትጥበት
            ወደ ስፋት ለመሻገር በባዕድ አገር ሰፊ የቦታ (1840 ካሬ ሜትር) ባለቤት ሆናለች ።
          </p>

          <p className="text-lg leading-relaxed mb-6">
            የቤተክርስትያናችን የቦታ ግዢ ከተፈፀመ  በኃላ በተያዘው እቅድ መሰረት የውስጥ ማሰፋፋት ለማድረግ አስፈላጊው ጥናት ለማድረግ ከአርክቴክት ጋር የመግባቢያ ውል
            ተፈርሞ ሰራው ተጀምሯል ቤተክርሰትያናችን በቅርሰነት ሰለተመዘገበ አፍርሶ መስራት ሰለማይቻል የቤተክርሰትያኑን ንድፍ ለማውጣት አስቸጋሪ ነበር። ሆኖም አስፈላጊው
            የግንባታ ሂደት አልፎ ለሚመለከታቸው የመንግሰት አካላት (Stadt Köln Bauamt) የመጀመሪያውን ማመልከቻ ( Bauantrag ) ተደርጐ ነበር ። ሆኖም  ፍቃድ
            አግኝተን ለመስራት ከጐረቤቶቻችን ያለው እርቀት አስፈላጊ ነበር ይህም ምንአልባተ‍ ግንባታው ሲጀመር በወሰን የሚጋሩን  ጐረቤቶቻችን ቦታ ላይ ሊነካ ስለሚችል
            ( Baulast) የእነሱን  ይሁንታ ማግኘት ነበረብን ነገር ግን ጐረቤቶቻችን ለዚህ ብዙ ገንዘብ ሰለጠየቁን ይህን ለማሰቀረት ከ Bauphysik ጋር በመመካከር Baulast
            ፕላኑ በውስጥ  እንዴሆን ተደርጓል ከዚህ በተጨማሪ የመጀመሪያውን ቤተክርስትያን ግዢ ሲደረግ በፊት በኩል ባለው ጓሮ ቦታ ባለቤትነቱ  የአኢቫንኬልሽ ቤ/ክረስትያን
            ይዞታ  ሰለነበር  ይህንም ቦታ ግዢ ተፈፅሞ የኖታሩ እማኝ አባሪ ተደርጐ ይህ ማሻሻያ የተደረገበት ማመልከቻ  በድጋሚ  ለStadt Köln Bauamt ተመልክቷል።
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <p className="text-lg leading-relaxed">
              የእንፃ መስሪያ እቅድ(Bauplan)ማሻሻያ በተደረገ ቁጥር ለአርክቴክቶሮቹ የሚከፈለው ገንዘብ እና ለቦታው መስሪያ ፍቃድ የማግኛው ጊዜ ብዙ ጊዜ ፈጅቷል ። አሁን
              የመስሪያ  ፍቃድ ለማግኘት እየጠበቅን እንገኛለን::
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
