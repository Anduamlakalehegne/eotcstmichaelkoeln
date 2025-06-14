"use client"

import { motion } from "framer-motion"
import { BookOpen, Quote } from "lucide-react"

export default function MikirPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">አገልግሎት ምክር</h1>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <BookOpen className="w-5 h-5" />
          <p>የቅዱሳን ምክሮች</p>
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
