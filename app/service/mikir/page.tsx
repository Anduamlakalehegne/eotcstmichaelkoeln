"use client"

import { motion } from "framer-motion"
import { BookOpen, Quote } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"

export default function MikirPage() {
  const { translations } = useLocale()
  const t = translations.serviceMikir

  return (
    <div className="container mx-auto px-4 py-6 text-justify">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
        
        {/* Text Box Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-justify">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {/* Additional description paragraph kept for layout consistency */}
                  {t.description}
                </p>
              </div>
              
              {/* Optional Photo Space */}
              <div className="flex justify-center">
                <div className="relative w-64 h-48 bg-gray-100 rounded-xl overflow-hidden shadow-md border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Quote className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{t.photoPlaceholder}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-2">
          <BookOpen className="w-15 h-15 " />
          <p className="text-2xl font-bold">{t.saintAdviceTitle}</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Map through quotes from translations */}
            {t.quotes.slice(0, 3).map((quote, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    {quote}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map through the remaining quotes from translations */}
            {t.quotes.slice(3).map((quote, index) => (
              <motion.div 
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">
                    {quote}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.div>
    </div>
  )
}
