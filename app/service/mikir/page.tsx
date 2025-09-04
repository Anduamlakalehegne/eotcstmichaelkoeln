"use client"

import { motion } from "framer-motion"
import { BookOpen, Quote } from "lucide-react"

export default function MikirPage() {
  return (
    <div className="container mx-auto px-4 py-6 text-justify">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-8">የምክር አገልግሎት</h1>
        
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
                  በቤተ ክርስቲያናችን ውስጥ የምክር አገልግሎት በጣም አስፈላጊ እና የሚያስፈልግ አገልግሎት ነው። ይህ አገልግሎት በመንፈሳዊ እና በሰውነታዊ አቅጣጫ ምክር እና ድጋፍ ለማቅረብ ያለመ ነው።
                </p>
                <p className="text-gray-600 leading-relaxed">
                  በቤተ ክርስቲያናችን ውስጥ የሚሰጡ ምክሮች በመጽሐፍ ቅዱስ እና በቅዱሳን አባቶች ትምህርቶች ላይ የተመሰረቱ ናቸው። እነዚህ ምክሮች በሕይወታችን ውስጥ ትክክለኛ አቅጣጫ ለመሄድ እና በመንፈሳዊ ጉዞ ውስጥ ለመራቅ ይረዱናል።
                </p>
              </div>
              
              {/* Optional Photo Space */}
              <div className="flex justify-center">
                <div className="relative w-64 h-48 bg-gray-100 rounded-xl overflow-hidden shadow-md border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Quote className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">የምክር አገልግሎት ፎቶ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-2">
          <BookOpen className="w-15 h-15 " />
          <p className="text-2xl font-bold">የቅዱሳን ምክሮች</p>
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
            {/* All 16 quotes with the same enhanced structure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  1. ራስህን በሐሰት አትውቀስ ራስን መክሰስ ትህትና አይደለም ታላቁ ትህትና ሰዎች ሲወቅሱህ መታገስ   ነው፡  ቅዱስ ስራፕዮን
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  2. የማታምንበትን ነገር ለሰው ስትል አትስራው ከሰራኸው እንደምትጠፋበት እወቅ ፡፡ መጽሐፈ ምክር
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  3. አንደበቱን ከቧልት ከሐሜት ያየውንም ምስጢር ከመናገር የሚከለከል ሰው ልቦናውን ከኀልዮ ኃጥያት ያርቀዋል፡፡ አረጋዊ መንፈሳዊ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  4. ጸጋ ቢሰጥህ በተሰጠህ ጸጋ አመስግን ያልተሰጠህን እሻለሁ በማለት የተሰጠህን እንዳታጣ፡፡  ማር ይስሐቅ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  5. ራሱን የሚንቅ የሚያቃልል ሰው ከእግዚአብሔር ዘንድ እውቀትን ያገኛል አዋቂ ነኝ የሚል ሰው ከፈጣሪው ጥበብ ይለየዋል፡፡ አረጋዊ መንፈሳዊ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  6. ‹‹እግዚአብሔር ሆይ አፈርና ትቢያ ሆኜ ሳለ ጻድቅ አድርገው  ከሚቆጥሩኝ ሰዎች አድነኝ››    አባ እንጦንስ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  7. ‹‹ፍጡራንን መርምሮ ማወቅ ካልተቻልን ሁሉን የፈጠረ እርሱን መርምሮ ማወቅ እንደምን ይቻልናል››  ቅዱስ አትናቴዎስ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  8. ‹‹ወርቅ በእሳት እንደሚፈተን ሁሉ የክርስቶስንም ፀጋና ክብር ሳይፈተኑ ማግኘት አይቻልም የዚህ ዓለም ፈተናና እሳት ቶሎ ያልፋል ይጠፋል ኃጢያተኞች የሚገቡበት የገሀነም እሳት ግን ለዘላለም እንደ ነደደ ይኖራል››  ቅዱስ ሚናስ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  9. ‹‹በማንም ላይ ክፈትን አትስሩ አትፍርዱ ይህንን ከጠበቃችሁ ርስቱን ትወርሳላችሁና››  ታላቁ አባ መቃርስ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  10. ‹‹ብዙ ጊዜ ብዙ እናገራለሁ በመናገሬም አዝናልሁ በዝምታዬ ግን ያዘንኩበት ጊዜ የለም›› ቅዱስ አርሳንዮስ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  11. ‹‹ቤተክርስትያን መጠጊያችን ነች ቤተክርስትያን የኖኅ መርክብ ነች በውስጧ እንጠለላልን ከውጭዋ ግን ማዕበልና ቀላያት ተከፍተዋል››   ቅዱስ እንድርያስ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  12. ‹‹ልባችንን ጠፊና በስባሽ ከኾነው ከምድራዊው ምኞት አርቀን ከበደል በንስሐ ነጹሕ ካደረግነው በጸጋ መንፈስቅዱስ የተሞላን እንሆናለን›› አባ አብርሃም መፍቀሬ ነዳያን
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  13. ‹‹ስጋዊ ፍላጎቶችን ማሸነፍ ለአክሊለ ህይወት የሚያበቃ ሰማዕትነት ነው›› ብፁዕ አቡነ ጎርጎርዮስ ካልዕ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  14. ‹‹የቤተክርስቲያን ህይወት በመስቀል ላይ ስለሆነ ፈተና ይበዛበታል ስለዚህ ከግል ህይወታችሁ ይልቅ የቤተክርስቲያናችሁን አቋም አጠንክሩ›› ብፁዕ አቡነ ጎርጎርዮስ ካልዕ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  15. ‹‹ከመኝታህ በፊት የምታደርገውን ፀሎት ትተህ እንድትተኛ መንፈስህ ሲገፋፋህ እሺ ብለህ አትቀበለው፡፡ እንዲያውም መዝሙረ ዳዊትን ጨምርና ሌሊቱን በሙሉ ስትፀልይ እደር›› ቅዱስ ይስሐቅ ሶርያዊ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">
                  16. ‹‹ኃጥያታችንን እኛ እያሰብን የምንፀፀት ከሆነ እግዚአብሔር ይረሳልናል  ኃጥያታችንን እኛ እረስትን የምንፅናና ከሆነ እግዚአብሔር ያስብብናል››  ቅዱስ እንጦስ
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}
