"use client"

import { motion } from "framer-motion"
import { HardHat, Timer, CheckCircle2 } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export default function ConstructionStatusPage() {
  const { translations } = useLocale()
  return (
    <div className="container mx-auto px-4 py-12 text-justify">
      {/* Header with subtle animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">{translations.constructionStatus.title}</h1>
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
            <h3 className="font-semibold">{translations.constructionStatus.statusOverview.constructionStatus}</h3>
          </div>
          <p className="text-gray-600">{translations.constructionStatus.statusOverview.constructionStatusValue}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500"
        >
          <div className="flex items-center mb-2">
            <Timer className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="font-semibold">{translations.constructionStatus.statusOverview.permitStatus}</h3>
          </div>
          <p className="text-gray-600">{translations.constructionStatus.statusOverview.permitStatusValue}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500"
        >
          <div className="flex items-center mb-2">
            <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="font-semibold">{translations.constructionStatus.statusOverview.landStatus}</h3>
          </div>
          <p className="text-gray-600">{translations.constructionStatus.statusOverview.landStatusValue}</p>
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
            {translations.constructionStatus.content.paragraph1}
          </p>

          <p className="text-lg leading-relaxed mb-6">
            {translations.constructionStatus.content.paragraph2}
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <p className="text-lg leading-relaxed">
              {translations.constructionStatus.content.highlightBox}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
