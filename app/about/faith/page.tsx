"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cross, Church, Calendar, Heart, Book, History } from "lucide-react"
import { motion } from "framer-motion"

export default function FaithPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [language, setLanguage] = useState<"en" | "am">("am")

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          {language === "en" ? "Our Faith" : "እምነታችን"}
        </h1>
        <p className="text-2xl md:text-2xl mb-6 text-center">የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን</p>

        {/* Language Toggle */}
        {/* <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                language === "en" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage("am")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                language === "am" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              አማርኛ
            </button>
          </div>
        </div> */}

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/photo_2025-06-05_22-08-11.jpg"
            alt="Ethiopian Orthodox Faith"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-lg md:text-xl font-light">
              {language === "en"
                ? "One of the oldest Christian traditions in the world"
                : "ከዓለም ላይ ካሉት ጥንታዊ የክርስትና ወግና ባህሎች አንዱ"}
            </p>
          </div>
        </div>


        {/* Main Content Tabs */}
        <Tabs defaultValue="history" className="w-full mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="history">{language === "en" ? "History" : "የኢኦተቤ ታሪክ"}</TabsTrigger>
            <TabsTrigger value="beliefs">{language === "en" ? "Core Beliefs" : "የእምነታችን መሠረት"}</TabsTrigger>
            <TabsTrigger value="sacraments">{language === "en" ? "Sacraments" : "አዕማደ ምሥጢራት"}</TabsTrigger>
            <TabsTrigger value="liturgy">{language === "en" ? "Liturgy" : "ምሥጢራተ ቤተ ክርስቲያን"}</TabsTrigger>
            <TabsTrigger value="calendar">{language === "en" ? "Calendar" : "መጽሐፍ ቅዱስ"}</TabsTrigger>
          </TabsList>

          {/* History Tab */}
          <TabsContent value="history" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <History className="mr-2 text-blue-600" />
              {language === "en" ? "History of the Ethiopian Orthodox Church" : "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ታሪክ በአጭሩ"}
            </h2>

            {language === "en" ? (
              <div className="space-y-4">
                <p>
                  Ancient Greek poets, writers, and historians wrote extensively about Ethiopia. Among them, Homer
                  described the country and its people as "flawless races," while Herodotus described Ethiopia's
                  geographical location as "a territory extending south of Egypt, around the Red Sea area, approaching
                  the Indian Ocean." Speaking of its people, he said, "They are long-lived, wealthy, and truthful
                  people."
                </p>
                <p>
                  In the Old Testament, the Queen of Sheba's visit to King Solomon in Jerusalem is recorded in 1 Kings
                  10:1-13. Among Ethiopians, this journey is believed to have spread the Old Testament in Ethiopia and
                  brought the Ark of the Covenant to Ethiopia through Menelik I, the son of King Solomon and the Queen
                  of Sheba.
                </p>
                <p>
                  Since then, Jewish faith and worship have become the people's belief and daily life guide. The kingdom
                  founded by Menelik I was known as the Axumite Dynasty. Additionally, many historical records indicate
                  that a free state was established in Ethiopia around 4,522 BC. Today's Axum was the capital of ancient
                  Ethiopia, the center of civilization, and the birthplace of Christianity, as evidenced by the people's
                  way of life and religiosity, historical heritage, standing monuments, and various works of art. Axum
                  remains a primary sacred place of religious manifestation.
                </p>
                <p>
                  Christianity entered Ethiopia during the apostolic era, as evidenced by biblical and other historical
                  records (Acts 8:26-36). Eusebius, the great church historian of the fourth century, called "the
                  baptism of the Ethiopian eunuch the first fruit of Christian faith in the world." This significant
                  event was also recorded by Rufinus, followed by historians Theodoret, Socrates, and Sozomen.
                </p>
                <p>
                  However, Christianity became the state religion and began to be led at the episcopal level in the
                  fourth century during the Axumite period. This happened when the Patriarch of Alexandria, Saint
                  Athanasius, appointed Abba Frumentius as the first bishop of Ethiopia during the reign of Abraha and
                  Atsbeha. King Ezana replaced the moon images on his coins with the sign of the cross, gaining primacy
                  among the kings of the world. In 356 AD, the Arian king Constantius wrote to the Axumite king, saying,
                  "Bishop Frumentius is a destroyer of the Christian faith and should be sent to Rome." However, this
                  request was not accepted. Saint Frumentius later became known among Ethiopians as Abba Salama (Father
                  of Peace) and Kasate Berhan (Revealer of Light). From this time on, he received the title Abun, which
                  means "our father."
                </p>
                <p>
                  The arrival of the Nine Saints (Tse'atu Qiddusan) to Ethiopia strengthened the Ethiopian Orthodox
                  Tewahedo Church. These Nine Saints are said to have come to Ethiopia from the Byzantine Empire in 479
                  AD. They learned the local language, Ge'ez, and the culture, and translated the Bible and many
                  different spiritual books from Hebrew, Greek, and Syriac languages into Ge'ez. In addition to
                  preaching the Gospel, they established Christian monasteries, founding monastic life.
                </p>
                <p>
                  The Ethiopian Orthodox Tewahedo Church reached a high level of development in the sixth century. This
                  was when Saint Yared prepared church music, poetry, and hymns for service. In general, the periods
                  from the 4th to the 7th century are known as the golden ages of church development, marked by
                  significant growth.
                </p>
                <p>
                  Ethiopia is known as the center of Christianity in Central Africa, preserving its own Christian faith
                  and history, and standing as a symbol of freedom for all ages.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  ኢትዮጵያ የጁዲዮ የክርስትያን እምነትና ባሕል ያላት ጥንታዊት አገር ስትሆን የክርስትና እምነት ተከታዮች በብዛት የሚግኙባት ነች። አስገራሚ ታሪክ፣ ድንቅ ሥልጣኔዋ፣ባሕልና
                  ሃይማኖታዊ የሆነው የሕዝቧችዋ አኗኗር ልዩ ያደርጋታል። በኦሪት ዘፍጥረት እንደተጻፈው “የሁለተኛው ወንዝ ስም ግዮን ነው፣እርሱም የኢትዮጵያን ምድር ሁሉ ይከብባል።” (ዘፍ. 2፥13)
                  በዳዊት መዝሙር ደግሞ “ኢትዮጵያ እጆችዋን ወደ እግዚአብሔር ትዘረጋለች” (መዝ. 67(68)፥31)። ከመጽሐፍ ቅዱስ ሌላ በብዙ የታሪክ መዛግብትና መጽሐፍት ላይ ስለ ኢትዮጵያ
                  ተዘግቧል። በተጨማሪ ታሪካዊና አርኬኦሎጂካል ግኝቶች የሚያስገርሙ ሃቆችን ስለ ኢትዮጵያ እየገለጹ ነው። ኢትዮጵያ የራስዋ የሆነ ፊደል ከነአጻጻፉና ሥርዓቱ ጋር ያላት ብቸኛ አፍሪካዊት አገር ነች።

                </p>
                <p>
                  ጥንታዊ የግሪክ ባለ ቅኔዎች፣ ገጣሚዎችና የታሪክ ጸሐፊዎች ስለኢትዮጵያ ብዙ ጽፈዋል፤ ከነዚህ መካከል ሆሜር ስለአገሪቱና ስለሕዝቧ ሲገልጽ “እንከን የሌለባቸው ዘሮች” ሲል ሔሮዶቱስ ደግሞ
                  የኢትዮጵያን የመልክዐ ምድር አቀማመጥን እንዲህ ሲል ገልጾታል፣ “ከግብፅ በስተደቡብና የቀይ ባሕር አካባቢን ይዞ እስከ ሕንድ ወቂያኖስ የሚጠጋ ግዛት ነው” ስለሕዝቧም ሲናገር “የረጅም እድሜ ባለፀጎችና እውነተኛ የሆኑ ሕዝቦች ናቸው”ብሏል።
                </p>
                <p>
                  በብሉይ ኪዳን ንግሥተ ሳባ ንጉሥ ሰለሞንን ለመጎብኘት ወደ የኢየሩሳሌም ያደረገችውን  ጉዞ በ1ኛ ነገ. 10፥1-13 ተጽፎ ሲገኝ በኢትዮጵያውያንም ዘንድ ይህ ጉዞ ብሉይ ኪዳን በኢትዮጵያ እንዲስፋፋ ያደረገና፤ የንጉሥ ሰለሞንና
                  የንግሥት ሳባ ልጅ የሆነው ቀዳማዊ ምኒሊክ ጽላተ ሙሴን ወደ ኢትዮጵያ እንዲመጣ ያደረገ ነው ተብሎ ይታመናል።
                </p>
                <p>
                  በኢትዮጵያ የክርስትና እምነት የገባው በሐዋርያት ዘመን እንደሆነ መጽሐፍ ቅዱሳዊ የሆኑና ሌሎች ታሪካዊ ማስረጃዎች ይመሰክራሉ። (ሐዋ. 8፥26-36) ላይና
                  በአራተኛው ክፍለ ዘመን የነበረው ታላቁ የቤተ ክርስቲያን ታሪክ ጸሐፊ አውሳቢዮስ "የኢትዮጵያው ጃንደረባ ጥምቀት በዓለም የመጀመሪያው የክርስትና እምነት ፍሬ"
                  ብሎታል በተጨማሪም ሩፊኖስ ቀጥሎም በቴዎድሬት፣ሶቅራጦስና ሶዝሜን ታሪክ ዘጋቢዎች ይህንን ታላቅ ሁኔታ ዘግበውታል።
                </p>
                <p>
                  ከዚያን ጊዜ በኋላ የአይሁድ እምነትና ሥርዓተ አምልኮ የሕዝቧ እምነትና የቀን ተቀን ኑሮ መመሪያ ሆኗል። በቀዳማዊ ምኒሊክ የተመሰረተው የአክሱም ሥርወ መንግሥት
                  ተብላ ትታወቅ ነበር። በተጨማሪ ብዙ የታሪክ መረጃዎች እንደሚያስረዱት በኢትዮጵያ ነፃ መንግሥት የተመሰረተው ከ 4,522 ከክርስቶስ ልደት በፊት ነው። የዛሬይቱ አክሱም
                  የጥንታዊት ኢትዮጵያ ዋና መዲና፣የሥልጣኔ መገኛና የክርስትና እምነት መወለጃ እንደሆነች ዛሬ የሚታዩት የሕዝቧ ኣኗኗርና ሃይማኖታዊነት፣ ታሪካዊ ቅርሶችዋ፣የቆሙት ሐውልቶችዋና
                  ልዩ ልዩ የሥነ ጥበብ ሥራዎቿ ሲመሰክሩ አክሱም አሁንም ዋነኛ የሃይማኖት መንጸባረቂያ ቅድስት ቦታ ነች።
                </p>
                <p>
                  የኢትዮጵያ ኦርቶዶክስት ተዋህዶ ቤተ ክርስቲያን ብዙ ሊቃውንቶችና የተማሩ ቀሳውስቶች ያላት ሲሆን በአሁኑ ጊዜ ቁጥራቸው ከሰላሳ ሺህ በላይ የሆኑ አብያተ ክርስቲያናት
                  ከሦስት መቶ ሺህ በላይ የሚሆኑ ቀሳውስቶችና ወደ አርባ አምስት ሚሊዮን የሚጠጉ ምዕመናን ያላት አገር ስትሆን በዚህም ከምሥራቃውያን የኦርቶዶክስ ሃይማኖት ተከታይ
                  አገሮች በምዕመናን ብዛት የቀዳሚነትን ሥፍራ ይዛለች።
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">በኢትዮጵያ የክርስትና እምነት አመጣጥ</h3>
                <p>
                  የክርስትና እምነት ወደ ኢትዮጵያ የገባው በሐዋርያት ዘመን እንደሆነ መጽሐፍ ቅዱሳዊ የሆኑና ሌሎች ታሪካዊ ማስረጃዎች ይመሰክራሉ። (ሐዋ. 8፥26-36) ላይና በአራተኛው
                  ክፍለ ዘመን የነበረው ታላቁ የቤተ ክርስቲያን ታሪክ ጸሐፊ አውሳቢዮስ “የኢትዮጵያው ጃንደረባ ጥምቀት በዓለም የመጀመሪያው የክርስትና እምነት ፍሬ” ብሎታል በተጨማሪም
                  ሩፊኖስ ቀጥሎም በቴዎድሬት፣ሶቅራጦስና ሶዝሜን ታሪክ ዘጋቢዎች ይህንን ታላቅ ሁኔታ ዘግበውታል። ይሁን እንጂ ክርስትና የመንግሥት እምነት ሆኖ በኤጲስ ቆጶስ ደረጃ መመራት
                  የጀመረው በአራተኛው ክፍለ ዘመን በአክሱም ዘመነ መንግሥት እንደሆነ ይተረካል። ይኸውም የእስክንድርያው ፓትርያርክ ቅዱስ አትናቴዎስ አባ ፍሬሚናጦስ የመጀመሪያው የኢትዮጵያ
                  ጳጳስ አድርጎ የሾመው በዘመነ አብርሃና አፅብሃ ጊዜ ነው። ንጉሥ ኤዛና በገንዘቦቹ ላይ የነበሩትን የጨረቃ ሥዕልን ቀይሮ የመስቀል ምልክት በማድረግ በዓለም ከነበሩት ነገሥታቶች
                  መካከል ቀድምትነትን ቦታ አግኝቷል። በ356 ዓ.ም.  አርያናው ንጉሥ ኮንስታንትዩስ ለአክሱም ንጉሥ ሲጽፍ “ጳጳሱ ፍሬሚናጦስ የክርስትናን እምነት አጥፊ ስለሆነ ወደ ሮም ተይዞ ይላክ” ብሎ ነበር።
                  ነገር ግን ይህ ጥያቄው ተቀባይነት ሳያገኝለት ቀርቷል። ቅዱስ ፍሬሚናጦስ በኋላ በኢትዮጵያውያን ኣባ ሰላማ (የሰላም አባት) ከሳቴ ብርሃን (የብርሃን ገላጭ) እየተባለ ሲታወቅ ከዚህ ጊዜ ጀምሮ የጳጳሳት
                  መጠሪያ የሆነውን አቡን የሚባለው አጠራር ማለትም (አባታችን) ተቀብሎ ነበር።
                </p>
                <p>
                  የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ሦስቱን ዓለም አቀፍ ጉባኤዎችን ብቻ ትቀበላለች እነርሱም የኒቅያው ጉባኤ (325 ዓ.ም.) የኤፌሶን ጉባኤ (381 ዓ.ም.) የቁስጥንጥንያ ጉባኤ (431 ዓ.ም.) ናቸው።
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">ምንኩስናና ገዳማት በኢትዮጵያ</h3>
                <p>
                  ክርስቲያናዊ የሆነ ገዳማዊ ኑሮ በኢትዮጵያ ማበብ የጀመረው የክርስትና ሃይማኖት የአገሪቱ ብሔራዊ እምነት ሆኖ በነገሥታቱ ተቀባይነት ካገኘ በኋላ ነው። የግብፃዊው የቅዱስ አንጦኒዮስን ገዳማዊ ሥርዓት የተከተለ በ 479 ዓ.ም. ወደ ሀገሪቱ የመጡት ዘጠኙ ቅዱሳን አስፋፍተውታል።
                </p>
                <p>
                  ስለዚህ ነው ከ4ኛው መቶ ክፍለ ዘመን እስከ 7ኛው ክፍለ ዘመን ያለው ጊዜ ወርቃማው ተብሎ የሚታወቀው። በነዚህ ዘመናት ውስጥ ብዙ የስብከት ወንጌል ሥራዎች ተስፋፍተዋል፣ ልዩ ልዩ መንፈሣዊ ሥራዎችና ጽሑፎች የተከናወኑበት ጊዜ ነው። በአውሮፓ ያሉ ገዳማት የምዕራባውያንን ባሕል በመካከላለኛው ክፍለ ዘመን እንዲስፋፋና እንዲጠበቅ እንዳደረጉት ሁሉ በኢትዮጵያም የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ገዳማትም የእውቀትና የሥልጣኔ ማዕከል በመሆን ሥነ ጽሑፎችን፣ ሥነ ሕንፃን፣ ቅኔዎችን፣ ዜማዎችን፣ ዝማሬዎችንና መንፈሣዊ ትምህርቶች እንዲዳብሩ አድርገዋል። በ5ኛው ክፍለ ዘመን የታወቀው የቤተ ክርስቲያን ሊቅ ቅዱስ ያሬድ በመጽሐፍ ቅዱስ ላይ የተመሠረተ የቅድሴ ዜማዎችን፣ ዝማሬዎችንና ውዝዋዜዎችን በመፍጠር ለቤተ ክርስቲያን ያበረከተ ሲሆን በአሁኑ ጊዜ ይህ ለጆሮ ክፍተኛ ጣዕም ያለውን የምስጋናና የጸሎት ሥርዓት ያላትና የምትጠቀም በዓለም ያለች ብቸኛ ቤተ ክርስቲያን አድርጓታል።
                  <br />ምንጭ:<a href="https://stmaryeotctoronto.com/am/our-history">https://stmaryeotctoronto.com/am/our-history</a>
                </p>
              </div>
            )}
          </TabsContent>

          {/* Core Beliefs Tab */}
          <TabsContent value="beliefs" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Cross className="mr-2 text-blue-600" />
              {language === "en" ? "Core Beliefs" : "የእምነታችን መሠረት"}
            </h2>

            {language === "en" ? (
              <div className="space-y-4">
                <p>
                  The Ethiopian Orthodox Tewahedo Church accepts only the three ecumenical councils: the Council of
                  Nicaea (325 AD), the Council of Ephesus (381 AD), and the Council of Constantinople (431 AD).
                  Therefore, the Church accepts the creeds issued by these two councils, which are as follows:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg my-4">
                  <p className="italic">
                    "We believe in one God, the Father Almighty, maker of heaven and earth, and of all things visible
                    and invisible.
                  </p>
                  <p className="italic">
                    And we believe in one Lord Jesus Christ, the only Son of God, who was with Him before the creation
                    of the world. Light from Light, true God from true God, begotten not made, being of one essence with
                    the Father, by whom all things were made; who for us men and for our salvation came down from
                    heaven, and was incarnate of the Holy Spirit and the Virgin Mary, and was made man.
                  </p>
                  <p className="italic">
                    And He was crucified for us under Pontius Pilate, suffered, died, and was buried, and on the third
                    day He rose from the dead according to the Scriptures.
                  </p>
                  <p className="italic">
                    He ascended into heaven and sits at the right hand of the Father. He will come again in glory to
                    judge the living and the dead, and His kingdom will have no end.
                  </p>
                  <p className="italic">
                    And we believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father, who
                    with the Father and the Son is worshipped and glorified, who spoke through the prophets.
                  </p>
                  <p className="italic">
                    And we believe in one holy, universal, and apostolic Church. We acknowledge one baptism for the
                    remission of sins. We look for the resurrection of the dead and the life of the world to come.
                    Amen."
                  </p>
                </div>
                <p>
                  The dogmatic teachings of the Ethiopian Orthodox Tewahedo Church are based on the dogmatic teachings
                  that emerged from the Holy Scriptures and were established by the three ecumenical councils. The main
                  ones are the five pillars of mystery.
                </p>
                <p>
                  These are: the Mystery of the Trinity, the Mystery of Incarnation, the Mystery of Baptism, the Mystery
                  of the Eucharist, and the Mystery of Resurrection.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">1. The Mystery of the Trinity</h3>
                <p>
                  The teaching of the Mystery of the Trinity explains the threeness and oneness of God, which is the
                  main foundation of Christian faith. This dogma is subtle and cannot be reached by research alone
                  unless revealed by God. "No one knows the Son except the Father, and no one knows the Father except
                  the Son and those to whom the Son chooses to reveal him." (Matt. 11:27) The God we worship is one in
                  nature but three persons in action. Our Orthodox Church accepts this teaching: "For there are three
                  that testify: the Spirit, the water and the blood; and the three are in agreement." (1 John 1:5-7)
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">2. The Mystery of Incarnation</h3>
                <p>
                  The Mystery of Incarnation reveals to us the manifestation of our God's work of salvation in human
                  history. This was necessary because our sickness/wound needed a healing physician (Luke 19:10), our
                  darkness needed light (Matt. 4:12-17, John 8:12), and we needed to be freed from the yoke of slavery
                  (Gal. 5:1). On this matter, the Creed also says, "For us men and for our salvation, He came down from
                  heaven, and was incarnate of the Holy Spirit and the Virgin Mary, and was made man."
                </p>
                <p>
                  The Ethiopian Orthodox Tewahedo Church accepts the dogmatic teaching of St. Cyril of Alexandria. "The
                  nature of the Son of God," in other words, when the two natures "divinity and humanity" unite, the
                  nature of Christ becomes only one. The unity of the Word and the flesh was united in the womb of the
                  Virgin Mary, so the human nature reveals to divinity and the divine nature to humanity. In this pure
                  union, "divinity and flesh have become one without mixing or confusion, and therefore our Lord Jesus
                  Christ is perfect man and perfect God." That is, the God who became man, our Savior Jesus Christ,
                  after the incarnation has one person, one nature, perfect man, perfect God." Therefore, it is not
                  possible to speak of two natures. Thus, it is written in the Gospel of John: "The Word became flesh
                  and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came
                  from the Father, full of grace and truth." (John 1:14)
                </p>
                <p>
                  St. Athanasius's expression is also "God became man, and this happened so that the son of man might be
                  changed to divinity and become partakers of the divine nature." (2 Pet. 1:4)
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mt-6 mb-2">ጸሎተ ሃይማኖት</h3>
                <p>
                  የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን የሃይማኖት መሠረት አድርጋ የምታስቀምጠው፥ በዘወትር ጸሎትም ኾነ በሥርዓተ ቅዳሴ፤ በግልም ኾነ በጋራ
                  ግዜ የምትጸልየው ጸሎት በጉባኤ ኒቅያ እና እና በጉባኤ ቁስጠንጥንያ (Niceno-Constantinopolitan Creed) በቅዱሳን አባቶቻችን የተደነገጉትን የሃይማኖት
                  መሠረቶች ነው። ይህን ጸሎት፥ አዲስ አማኞች (ንኡሰ ክርስቲያናት) ከመጠመቃቸው በፊት በቃል የሚያሰሙ ሲኾን፥ ሕፃናት ከኾኑ ደግሞ የክርስትና እናት ወይም
                  አባት ሕፃናቱን ወክለው ይሉላቸዋል። ጸሎቱ ከዚህ ቀጥሎ ያለው ነው።

                </p>
                <div className="bg-blue-50 p-4 rounded-lg my-4">
                  <p className="italic">
                    "ሁሉን በያዘ ሰማይንና ምድርን የሚታይና የማይታየውን በፈጠረ በአንድ አምላክ በእግዚአብሔር እናምናለን። ዓለም ሳይፈጠር ከርሱ ጋር በነበረ የአብ አንድ ልጁ
                    በሚሆን በአንድ ጌታ በኢየሱስ ክርስቶስም እናምናለን።
                  </p>
                  <p className="italic">
                    ከብርሃን የተገኘ ብርሃን፣ ከእውነተኛ አምላክ የተገኘ አምላክ፤ የተፈጠረ ያይደል የተወለደ፤ በመለኮቱ ከአብ ጋር የሚተካከል። ሁሉ በርሱ የሆነ ያለ እርሱ ግን
                    ምንም የሆነ የለም፥ በሰማይም ያለ በምድርም ያለ።
                  </p>
                  <p className="italic">
                    ስለእኛ ስለሰው ስለ መዳኛችን ከሰማይ ወረደ። ከመንፈስ ቅዱስ የተነሣ ከቅድስት ማርያም ፈጽሞ ሰው ሆነ። ሰው ሆኖ በጰንጤናዊ በጲላጦስ ዘመን ስለእኛ ተሰቀለ።
                    ታመመ፤ ሞተ፤ ተቀበረም፤ በሦስተኛውም ቀን ከሙታን ተለይቶ ተነሣ፤ በቅዱሳት መጽሐፍት እንደ ተጻፈ።
                  </p>
                  <p className="italic">
                    በክብር ወደ ሰማይ ዐረገ፤ በአባቱም ቀኝ ተቀመጠ። ዳግመኛ ሕያዋንን ሙታንንም ይገዛ ዘንድ በጌትነት ይመጣል። ለመንግሥስቱም ፍጻሜ የለውም።
                  </p>
                  <p className="italic">
                    ጌታ ማሕየዊ በሚሆን ከአብ በሠረፀ በመንፈስ ቅዱስም እናምናለን። እንሰግድለት እናመሰግነውም ዘንድ፤ ከአብና ከወልድ ጋር በነብያት የተነገረ።
                  </p>
                  <p className="italic">
                    ከሁሉ በላይ በምትሆን ሐዋርያት በሰበሰብዋት በአንዲት ቅድስት ቤተ ክርስቲያንም እናምናለን። ኃጢአትን ለማስተሥረይ በአንዲት ጥምቀት እናምናለን። የሙታንንም
                    መነሣት ተስፋ እናደርጋለን የሚመጣውንም ሕይወት ለዘላለሙ አሜን።"
                  </p>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Sacraments Tab */}
          <TabsContent value="sacraments" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Book className="mr-2 text-blue-600" />
              {language === "en" ? "Sacraments" : "አዕማደ ምሥጢራት - የእምነታችን ምሰሶ"}
            </h2>

            {language === "en" ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mt-6 mb-2">3. The Mystery of Baptism</h3>
                <p>
                  The Mystery of Baptism is the gateway to church membership and through which we partake of our God's
                  gift of grace. It is called a mystery because we receive the invisible grace through the visible act
                  of God. (Mark 16:16, John 19:34-35, Acts 2:38). Baptism is the door of faith that brings us into
                  Christian life, and baptism is performed only once and cannot be repeated in any way. (Eph. 4:4-7,
                  John 3:3-8)
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">4. The Mystery of the Eucharist</h3>
                <p>
                  Our Lord and Savior Jesus Christ established it at the Last Supper with His disciples on Holy
                  Thursday. And He said, "Do this in remembrance of my death and resurrection" (Matt. 26:26-30)
                </p>
                <p>
                  St. Paul also said, "This cup is the new covenant in my blood; do this, whenever you drink it, in
                  remembrance of me." Therefore, it was given not to God but for people, and through the Eucharist, it
                  frees us from the bondage of sin and brings us closer to God. (John 6:53-57) The Eucharist entered the
                  minds of the early Christians and connected divine grace with human life.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">5. The Mystery of Resurrection</h3>
                <p>
                  The Mystery of Resurrection is a mystery that reveals our separation from our worldly body, our
                  victory over death, and the eternal life we will receive afterward. This will happen when the coming
                  of our Lord and Savior Jesus Christ is revealed in glory. Just as any fruit first rots and then bears
                  fruit. (John 12:24, 1 Cor. 15:36) Therefore, we will all die and then rise again to become heirs of
                  His kingdom. And in the Creed it says, "We look for the resurrection of the dead and the life of the
                  world to come. Amen."
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን የዶግማ ትምህርት የተመሠረተው ከመጽሐፍ ቅዱስ ከወጡትና በሦስቱ ዓለም አቀፍ ጉባኤዎች የተደነገጉትን
                  የዶግማ ትምህርቶች ላይ ነው። ዋናዎቹ ነጥቦች በአምስት መጀረታዊ ነጥቦች የሚጠቀለሉ ሲኾን፥ አምስቱ አእማደ ምሥጢራት ይባላሉ።

                </p>
                <p>እነዚህም፤ ምሥጢረ ሥላሴ፣ ምሥጢረ ሥጋዊ፣ ምሥጢረ ጥምቀት፣ ምሥጢረ ቁርባንና ምሥጢረ ትንሣኤ ተብለው ይጠራሉ።</p>
                <h3 className="text-xl font-semibold mt-6 mb-2">1. ምስጢረ ሥላሴ</h3>
                <p>
                  የምሥጢረ ሥላሴ ትምህርት የአምላክን ሦስትነትና አንድነት የሚያስረዳ ዋና የክርስትና እምነት መሠረት ነው። ይህ ዶግማ ረቂቅ ነው ይህ ትምህርት በእግዚአብሔር
                  ካልተገለጸ በስተቀር በምርምር ብቻ የሚደረስበት አይደለም። "ከአብ በቀር ወልድን የሚያቅ የለም፣ ከወልድም በቀር ወልድም ሊገለጥለት ከሚፈቅድ በቀር አብን
                  የሚያውቅ የለም።" (ማቴ. 11፥27) የምናመልከው አንድ አምላክ በባሕሪይ አንድ አካል ሲሆን በግብር ሦስት አካላት ናቸው። ኦርቶዶክሳዊት ቤተ ክርስቲያናችን
                  የምትቀበለው ይህን ትምህርት ነው። "መንፈስም እውነት ነውና የሚመሰክረው መንፈስ ነው። የሚመሰክሩት መንፈሱና ውኃው ደሙም ሦስት ናቸውና ሦስቱም አንድ ናቸው።" (1ኛ ዮሐ. 1፥5-7)

                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">2. ምሥጢረ ሥጋዊ</h3>
                <p>
                  ምሥጢረ ሥጋዌ የሚገልጽልን የአምላካችንን የድኅነት ሥራ፥ ሰዎችን ለማዳን ሰው መኾኑን ነው። ይህም ያስፈለገበት ምክንያት ሕመማችን/ቁስላችን ኣዳኝ ሐኪም ስላስፈለገው ነው። (ሉቃ. 19፥10)
                  ጨለማችን ብርሃን ስላስፈለገው ነው። (ማቴ. 4፥12-17) ከባርነት ቀንበር ነጻ የሚያወጣ ስላስፈለገ ነው። (ገላ. 5፥1) በዚህ ጉዳይ ላይ ጸሎተ ሃይማኖትም አንዲህ ይላል፣ «ስለ እኛ ስለሰው
                  ስለመዳናችን ከሰማይ ወረደ። ከመንፈስ ቅዱስ የተነሣ ከቅድስት ማርያም ፈጽሞ ሰው ሆነ።»

                </p>
                <p>
                  በምሥጢረ ሥጋዌ ስር ምሥጢረ ተዋህዶ ያለ ሲሆን፥ ቤተ ክርስቲያናችን የምትቀበለው የእስክንድርያውን የቅዱስ ቄርሎስን የዶግማ ትምህርት ነው። "የወልድ አምላክነትን ባሕሪይ"
                  በሌላ አነጋገር ሁለቱ ባሕርያቶች "አምላክነትና ሰውነት" ሲዋሀዱ የክርስቶስ ባሕርይ አንድ ብቻ ነው የሆነው። የቃሉና የሥጋ አንድነት በቅድስት ድንግል ማርያም ማኅፀን ተዋሀደ ስለዚህ
                  የሰውነት ባሕርይም ለአምላክነት የአምላክነት ባሕሪይም ለሰውነት ይገልጻል። በዚህ ንጹህ በሆነ ተዋህዶ «መለኮትና ሥጋ ያለመቀላቀል ያለመጠፋፋት አንድ ሆነዋልና ጌታችን ኢየሱስ ክርስቶስ
                  ፍጹም ሰው ፍጹም አምላክ ነው» ይኸውም ሰው የኾነው አምላክ መድኃኒታችን ኢየሱስ ክርስቶስ ከተዋህዶ በኋላ አንድ አካል አንድ ባሕርይ ያለው ፍጹም ሰው ፍጹም አምላክ ነው»
                  ስለዚህ ስለ ሁለት ባሕሪያት መናገር አይቻልም። ስለዚህም በዮሐንስ ወንጌል እንዲህ ተጽፏል «ቃል ሥጋ ሆነ፣ ጸጋንና አውነትንም ተመልቶ በኛ አደረ፣ አንድ ልጅም ከአባቱ ዘንድ እንዳለው
                  ክብር የሆነው ክብሩን አየን።» (ዮሐ. 1፥14) የቅዱስ አትናቲዮስ አገላለጽም "አምላክ ሰው ሆነ ይህም የሆነው የሰው ልጅ የሆነውን ወደ አምላክነት እንድንለወጥና የመለኮትን ባሕሪይ ተካፋዮች
                  አንድንሆን ነው።" (2ኛ ጴጥ. 1፥4)
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">3. ምሥጢረ ጥምቀት</h3>


                <p>
                  ምሥጢረ ጥምቀት ወደ ቤተ ክርስቲያን አባልነት መግቢያ በርና ከአብራከ መንፈስ ቅዱስ ተወልደን የእግዚአብሔር ልጆች የምንኾንበት የአምላካችንን የፀጋ ስጦታ የምንካፈልበት ነው።
                  (ማር. 16፥16፣ ዮሐ. 19፥34-35፣ ሐዋ. 2፥38)። ጥምቀት ወደ ክርስቲያናዊ ሕይወት የሚያስገባን የዕምነት በር ሲሆን ጥምቀት አንድ ጊዜ ብቻ የሚፈጸም እንጂ በምንም ዓይነት
                  የሚደገም አይደለም። (ኤፌ. 4፥4-7፣ ዮሐ. 3፥3-8)
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">4. ምስጢረ ቁርባን</h3>
                <p>
                  ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ በጸሎተ ሐሙስ ዕለት ከደቀ መዛሙርቱ ጋር ባደረገው በመጨረሻው እራት ላይ መሥርቶታል። እንዲህም ብሏል "በዚህ መታሰቢያ ስለ
                  ሞቴና ስለ ትንሣኤዬ አስቡ" (ማቴ. 26፥26-30)
                </p>
                <p>
                  ቅዱስ ጳውሎስም እንዲህ ብሏል "ይህ ጽዋ በደሜ የሚሆን አዲስ ኪዳን ነው፣ በጠጣችሁት ጊዜ ሁሉ ይህን መታሰቢያዬን አድርጉት አለ።…" ስለዚህ ለእግዚአብሔር ሳይሰጥ
                  ነገር ግን ስለ ሰዎች ተሰጠ በቁርባኑም ከኃጢያት ተገዢነት የሚያወጣንና ወደ አምላክ የሚያቀርበን ነው። (ዮሐ. 6፥53-57) ቁርባን በመጀመሪያዎቹ ክርስቲያኖች
                  ልቦና ውስጥ የገባና የመለኮትን ፀጋ ከሰው ልጅ ሕይወት ጋር የሚያገናኝ ሆነ።
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">5. ምሥጢረ ትንሣኤ</h3>
                <p>
                  ምሥጢረ ትንሣኤ ዓለማዊ ከሆነው ሥጋችን ተለይተን ሞትን ድል አድርገን የምንነሣበትን በኋላም የምናገኘውን ዘለአለማዊ ሕይወት የሚገልጽ ምሥጢር ነው። ይኸውም
                  የሚሆነው የጌታችንና የመድኃኒታች የኢየሱስ ክርስቶስ በክብር መምጣት ሲገለጽ ነው። ልክ እንደማንኛውም ፍሬ መጀመሪያ በስብሶ በኋላ እንደሚያፈራ ሁሉ። (ዮሐ.
                  12፥24 ፣ 1ኛ ቆሮ. 15፥36) ስለዚህ ሁላችን እንሞታለን ከዛም እንደገና እንነሣለን የመንግሥቱም ወራሾች ለመሆን። በጸሎተ ሃይማኖትም እንዲህ ይላል
                  "የሙታንንም መነሣት ተስፋ እናደርጋለን፣ የሚመጣውንም ሕይወት ለዘላለሙ አሜን።"
                </p>
              </div>
            )}
          </TabsContent>

          {/* Liturgy Tab */}
          <TabsContent value="liturgy" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Church className="mr-2 text-blue-600" />
              {/* {language === "en" ? "Liturgy" : "ሥርዓተ ቅዳሴsss"} */}
            </h2>

            {language === "en" ? (
              <div className="space-y-4">
                <p>
                  The Divine Liturgy (Qidase) is the main form of worship in the Ethiopian Orthodox Tewahedo Church.
                  This is the main expression of the church's spiritual and religious nature, like a gold mine. This
                  divine service commemorates Jesus' death on the cross and His resurrection, and continuously shows the
                  fruit of life given to mankind. Therefore, the liturgy of our church includes two major elements:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>It is thanksgiving to the Most High God and honoring Him for His endless gift of grace.</li>
                  <li>
                    The liturgy is not a new sacrifice or a repetition of the sacrifice of Calvary. The true and pure
                    Lamb of God was sacrificed only once. The liturgy is a seal that confirms the work of salvation. In
                    this, the visible church is expressed by its believers (including priests and faithful). Most
                    importantly, the Ethiopian Orthodox Tewahedo liturgy reflects the work of the Holy Spirit. In all
                    types of liturgy, the full Christ is revealed, not just half of His body.
                  </li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg my-6">
                  <h3 className="font-bold text-xl mb-3">Our Faith</h3>
                  <p className="italic">
                    We believe in one God the Father Almighty, maker of heaven and earth, and all things visible and
                    invisible;
                  </p>
                  <p className="italic">
                    And in one Lord Jesus Christ, the only-begotten Son of the Father, Who was with Him before the
                    creation of the world, Light from Light, true God from true God, begotten not made, being of one
                    essence with the Father, by Whom all things were made, both in heaven and on earth; Who for us men
                    and for our salvation came down from heaven, and was incarnate of the Holy Spirit and the Virgin
                    Mary, and was made man; He was crucified for us under Pontius Pilate, He suffered, died, and was
                    buried; and on the third day He rose from the dead according to the Scriptures; He ascended in glory
                    into heaven, and sat at the right hand of His Father; He will come again in glory to judge the
                    living and the dead, and His kingdom shall have no end.
                  </p>
                  <p className="italic">
                    We believe in the Holy Spirit, the Lord, the Giver of Life, Who proceeds from the Father; we worship
                    and glorify Him with the Father and the Son; Who spoke by the prophets.
                  </p>
                  <p className="italic">
                    And we believe in one holy, universal, and apostolic Church. We acknowledge one baptism for the
                    remission of sins. We look for the resurrection of the dead, and the life of the world to come.
                    Amen.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  ምሥጢር ማለት የቃሉ መነሻ የግሪክ ቋንቋ ኾኖ ትርጉሙም ድብቅ፣ ስውር፣ ሸሸግ፣ ረቂቅ፣ ለቅርብ ዘመድ ካልሆነ በቀር የማይገለጥ ማለት ነው። ለሁለት የሚከፈል
                  ሲሆን ይኸውም የፍጡር ሚሥጢርና የፈጣሪ ሚስጥር በመባል ይታወቃል። የፍጡር ምስጢር ሁለት ይዘት አለው። የሰውና የመላዕክት ምስጢር ይባላል። በቤተክርስቲያን
                  ውስጥ የሚገኘው የፈጣሪ የእግዚአብሔር ሚስጥር ይህ የከበረ የተወደደ የሚናፈቅ የበረከት ስጦታ ነው። ብርሃነ አለም ሀዋርያው ቅዱስ ጴጥሮስ እንዲህ ሲል በከበረ ቃሉ
                  ገልፆታል። «እርሱንም ሳታዩት ትወዱታላችሁ አሁንም ምንም ባታዩት በእርሱ /በክርስቶስ/ አምናችሁ የእምነታችሁን ፍጻሜ እርሱን የነብሳችሁን መዳን እየተቀበላችሁ
                  በማይናገርና ክብር በሞላበት ሀሴት ደስ ይበላችሁ።» በማለት ስውር ረቂቅ ከሆነው ጸጋ እግዚአብሔር የምንሰጠው ሀብት መሆኑን በማብራራት ገልፆታል። በዚህ መሠረት
                  በቤተ ክርስቲያናችን ውስጥ ከሚፈጸሙት ምሥጥራት በቁጥር 7 ተወስነው ተቀምጠዋል። ምሳሌነታቸው ለሰባቱ ሰማያት ነው። እነዚህ ሰባት ሚስጥራት ቤተክርስቲያን
                  የምሥጢርነታቸው ምክንያት በዓይናችን ልናያቸው በእጃችን ልንዳስሳቸው የማንችል ልዩ ልዩ የመንፈስ ቅዱስ ስጦታዎች በእነዚህ ምሥጥራት አማካኝነት የሚሰጡን ስለሆነ ነው።
                  አበው ሲናገሩ በንባብ የተሰወረ ብሂል ምስጢር ይባላል ብለው ስውርነቱን ረቂቅነቱን ይናገራሉ። 7ቱን ምሥጢራተ ቤተክርስቲያንም 7 መሆቸው በመጽሐፈ ምሳሌ 9፡1
                  ላይ ‹‹ጥበብ ቤቷን ሠራች ሰባቱንም ምሰሶዎችዋን አቆመች›› ይላል። ጥበብ የተባለ ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ ሲሆን ሰባት ምሰሶዎች የተባሉት ደግሞ
                  የ7ቱ ምሥጢራተ ቤተ ክርስቲያን ምሳሌ ኾነው ነው። <br />
                  ዝርዝራቸውም፡-

                </p>
                <div className="bg-blue-50 p-4 rounded-lg my-6">
                  <ol className="list-decimal pl-6 space-y-2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <li>ምሥጢረ  ጥምቀት</li>
                    <li>ምሥጢረ ሜሮን</li>
                    <li>ምሥጢረ ቁርባን	</li>
                    <li> ምሥጢረ ንስሐ	</li>
                    <li>ምሥጢረ ክህነት	</li>
                    <li>ምሥጢረ  ተክሊል</li>
                    <li>ምሥጢረ  ቀንዲል</li>
                  </ol>
                </div>
                <h3 className="text-xl font-semibold mt-8 mb-2"> ምሥጢረ ጥምቀት</h3>
                <p>
                  ጌታችን አምላካችን መድኃኒታችን ኢየሱስ ክርስቶስ ለኒቆዲሞስን  “እውነት እውነት እልሃለሁ፤ ዳግመኛ ከውኃና ከመንፈስ ቅዱስ ያልተወለደ ሰው ወደ እግዚአብሔር
                  መንግሥት ሊገባ አይችልም” ብሎ እንደተናገረው ከውኃና ከመንፈስ ተወልደን የሥላሴን ልጅነት የምናገኝበት መንግሥተ ሰማያት የምንገባበት ኃጢአታችን የሚደመሰስበት
                  ድኅነትን የምናገኝበት ዐቢይ ምሥጢር ነው /ዮሐ. 3፥5/፡፡ ጥምቀት በምሥጢረ ሥላሴና በምሥጢረ ሥጋዌ አምኖ ለሚፈጽመው ሰው ሁሉ ለኃጢአት መደምሰሻ ከሥላሴ
                  የጸጋ ልጅነት ለመቀበልና የእግዚአብሔርን መንግሥት ለመውረስ የተሰጠ ልዩ የሕይወት መንገድ ነው፡፡ ጥምቀት በጽርዕ ቋንቋ ኤጲፋኒያ በግእዝ አስተርዮ በአማርኛ መገለጥ ይባላል፡፡
                  ቃሉ በቀጥታ ሲተረጎም በውኃ ውስጥ ገብቶ መውጣት፣ መነከር፣ መዘፈቅ፣ መጥለቅ ማለት ነው፡፡ ጥምቀት ከሰባቱ ምሥጢራተ ቤተክርስቲያን (ምሥጢረ ጥምቀት፣ ምሥጢረ
                  ሜሮን፣ ምሥጢረ ቁርባን፣ ምሥጢረ ንስሐ፣ ምሥጢረ ክህነት፣ ምሥጢረ ተክሊል፣ ምሥጢረ ቀንዲል) አንዱ ነው፡፡
                </p>

                <h4 className="text-xl mt-6 mb-2"> ምሥጢረ ጥምቀት</h4>
                <p>
                  የምሥጢረ ጥምቀት መሥራች ራሱ ጌታችንና መድኃኒታችን ኢየሱስ ክርስቶስ ነው፡፡ ነገር ግን ከጌታችን ጥምቀት በፊት አይሁድ ለመንጻትና ለኃጢአት ሥርየት (ይቅርታ)
                  የሚጠመቁት ጥምቀት ነበራቸው፡፡ ይኸውም እግዚአብሔር በረድኤት የሚገለጥባቸው የተቀደሱ ዕለታትና ቦታዎች ሁሉ ሰውነትንና ልብስን ማጠብ የእግዚአብሔር ቤት
                  ማገልገያ የሆኑ ዕቃዎችን ሁሉ ማጠብ ማንጻት ሥርዓትና ልማድ ነበር፡፡ የእግዚአብሔርም ፈቃድ ያለበት አሠራር ነበር፡፡ ወደ እግዚአብሔር ቤት ከመቅረባቸውና ለተቀደሰው
                  አገልግሎት ከመግባታቸው አስቀድመው እግሮቻቸውንና እጆቻቸውን የመታጠብ ግዴታም ነበራቸው፡፡ ሰውነታቸውን ከአፍአዊ (ከውጫዊ) እድፍ በማጠብና ንጹሕ በማድረግ
                  በባሕርይ ንጹሕና ቅዱስ በሆነው አምላክ ፊት ውስጣዊ ሕይወትን ንጹሕ አድርጎ የመቅረብን ሥርዓትና ምሥጢር የሚያመለክት ልማድ ነበር፡፡
                </p>


                {isExpanded && (
                  <>
                    <h4 className="text-xl mt-6 mb-2"> የጥምቀት ምሳሌዎች</h4>
                    <p>
                      አብርሃም ዮርዳኖስን ተሻግሮ ወደ መልከጼዴቅ መሔዱ የጥምቀት ምሳሌ ነው፡፡ አብርሃም የምእመናን መልከጼዴቅ የኢየሱስ ክርስቶስ ምሳሌ ናቸው፡፡ /ዘፍ. 14፥17/ <br />
                      ኢዮብ በዮርዳኖስ ተጠምቆ ከደዌው ተፈውሷል፡፡ ይህም ምእመናን ተጠምቀው ከደዌ ሥጋ ከደዌ ነፍስ የመፈወሳቸው ምሳሌ ነው፡፡ <br />
                      ንዕማን ሶርያዊ ተጠምቆ ከለምጽ ድኗል፡፡ /2ነገ. 5፥14/ ይኸውም ምእመናን ተጠምቀው ከመርገመ ሥጋ ከመርገመ ነፍስ የመዳናቸው ምሳሌ ነው፡፡ <br />
                      የኖኅ መርከብ የጥምቀት ምሳሌ ነው፡፡ ዘፍ. 6፥13 ይኽንንም ሐዋርያው ቅዱስ ጴጥሮስ “ጥቂቶች ማለት ስምንት ነፍሳት በውኃ የዳኑባትን መርከብ ሲሠራ በኖኅ ዘመን
                      የእግዚአብሔር ትዕግሥት በዘገየ ጊዜ ቀድሞ ክደውት ለነበሩት ሰበከላቸው፡፡ አሁንም እኛን በዚያው አምሳል በጥምቀት ያድነናል ሥጋን ከዕድፍ በመታጠብ አይደለም ጌታችን
                      ኢየሱስ ክርስቶስ በመነሣቱ በእግዚአብሔር እንድናምን መልካም ግብርን ያስተምረን ዘንድ ነው እንጂ” /1ጴጥ. 3፥20/ <br />
                      ለአብርሃም ሕግ ሆኖ የተሰጠው ግዝረት የጥምቀት ምሳሌ ነው፡፡ አብርሃም ከአረጀ በኋላ ቢገረዝም ልጆቹ ግን በተወለዱ በስምንተኛው ቀን እንዲገረዙ እግዚአብሔር አዞ ነበር
                      /ዘፍ. 17፥9/ “በሰው እጅ የአልተደረገ መገረዝን በእርሱ ሆናችሁ ተገረዛችሁ፡፡ በጥምቀትም ከእርሱ ጋር ተቀብራችኋል በእርስዋም ከሙታን ለይቶ ባስነሣው በእግዚአብሔር
                      ረዳትነትና በሃይማኖት ከእርሱ ጋር ተነሥታችኋል” /ቈላ. 2፥11/

                      <h4 className="text-xl mt-6 mb-2">ጌታችን ለምን ተጠመቀ?</h4>
                      የዕዳ ደብዳቤያችንን ለመደምሰስ <br />
                      አዳምና ሔዋን ፍዳው በፀናባቸው መከራው በበዛባቸው ጊዜ የሚያቃልልላቸው መስሏቸው ዲያብሎሰ ስመ ግብርናችሁን ጽፋችሁ ስጡኝ ባላቸው ጊዜ አዳም ገብሩ ለዲያቢሎስ
                      (አዳም የዲያብሎስ የወንድ አገልጋይ) ሔዋን ዓመቱ ለዲያብሎስ (ሔዋን የዲያብሎስ ሴት አገልጋይ) ብለው ጽፈው ሰጡት፡፡ ዲያብሎስም ይህንን ደብዳቤ አንዱን በሲኦል
                      አንዱን በዮርዳኖስ አስቀመጠው፡፡ በዮርዳኖስ ያስቀመጠውን ጌታችን ሲጠመቅ እንደሰውነቱ ረግጦ ደምስሶታል፡፡ ይህንን ጽሕፈት ለመደምሰስ ነው ጌታችን በዮርዳኖስ የተጠመቀው፡፡
                      ለዚህም ነው ሐዋርያው ቅዱስ ጳውሎስ “በእኛ ላይ የነበረውን የሚቃወመንንም በትእዛዛት የተጻፈውን የዕዳ ጽሕፈት ደመሰሰው” ያለው /ቆላ 2፥14/፡፡

                      <h4 className="text-xl mt-6 mb-2">ምስጢረ ሥላሴን ለመግለጥ</h4>
                      ጌታችን በፈለገ ዮርዳኖስ ሲጠመቅ ምስጢረ ሥላሴ ግልጽ ሆኗል፡፡ አብ በደመና “የምወደው የምወልደው ልጄ ይህ ነው” በማለቱ አብ የወልድ አባት መሆኑ ታወቀ፡፡ መንፈስ ቅዱስም
                      የባሕርይ ሕይወቱ መሆኑን ሲያስረዳ በአምሳለ ርግብ በራሱ ላይ ተቀመጠ ወልድም በተለየ አካሉ በዮርዳኖስ ሲጠመቅ ታየ፡፡ ስለዚህ ምሥጢርን ለመግለጥ ስንል የአንድነት የሦስትነት
                      ምስጢር በጐላ ሁኔታ እንዲታወቅ ተጠመቀ ማለት ነው፡፡ /ማቴ. 3፥16/<br />
                      <p>
                        ትንቢቱን ለመፈጸም“አቤቱ ውሆች አዩህ፣ ውሆችም አይተውህ ፈሩ ጥልቆች ተነዋወጡ ውሆችም ጮኹ፡፡” ተብሎ በቅዱስ ዳዊት የተነገረውን ትንቢት ለመፈጸም ተጠመቀ
                        /መዝ 77፥16/፡፡ጌታችን መቼ ተጠመቀ?ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ የተጠመቀው በ5531 ዓመተ ዓለም ዘመነ ሉቃስ ማክሰኞ ጥር 11 ቀን ከሌሊቱ በ10ኛው
                        ሰዓት ነበር፡፡ ፍትሐ ነገሥት አንቀጽ 19 በተጠመቀም ጊዜ ዕድሜው 30 ዓመት ከ13 ቀን ነበር፡፡ /ሉቃ. 3፥23/በብሉይ ኪዳን ሥርዓትና ልማድ ካህናት ለቤተ እግዚአብሔር
                        ተልእኮ እና መንፈሳውያን አገልግሎቶች ከ30 ዓመት ዕድሜ በፊት አደባባይ አይወጡም ነበር፡፡ እጅግ አስፈላጊ እንኳ ቢሆን ከ20 እና 25 ዓመት አስቀድሞ ለአገልግሎት
                        መሰየም ልማድ አልነበረም፡፡ የቤተ እግዚአብሔር አገልጋዮች በዕድሜና በዕውቀት የበሰሉ፣ በጠባይና በሥራ ልምድ የተፈተኑ ተልዕኳቸውን በብቃት ለመወጣት በተገልጋዩ ሕዝብ
                        ዘንድ የተመሰከረላቸው መሆን ነበረባቸው፡፡ /ዘጸ. 4፥3፤1ዜና መዋ. 23፥24፤ 1ጢሞ. 3፥6-10/ ያንን ሥርዓት ለመፈጸም ጌታችን የተጠመቀውና ለትምህርተ ወንጌል የተገለጠው
                        በ30 ዓመቱ ነበር፡፡ ዮሐንስ መጥምቅም የጌታን መምጣት ለማወጅ በዮርዳኖስ ይሁዳ ምድረ በዳዎች ወጥቶ የታየው ከ30 ዓመት ዕድሜው በኋላ ነው፡፡ ሌላው ዐቢይ
                        ምክንያት የሰው ሁሉ መጀመሪያ አዳም የ30 ዓመት ጎልማሳ ሆኖ ተፈጥሮ በ40ኛ ቀን ተሰጥቶት ኋላም በኃጢአት ምክንያት ያስወሰደውን ልጅነት ለማስመለስ ነው፡፡
                        ክርስቶስ የተጠመቀው ክብር ሽቶ ሳይሆን የአብ የባሕርይ ልጅነቱን (የባሕርይ አምላክነቱን) ከአብ ከመንፈስ ቅዱስ ለማስመስከር፣ ውኃውን ለመቀደስ፣ የአዳምን ልጆች
                        የእዳ ደብዳቤ ለመደምሰስና በስህተት የጠፋውን የልጅነት ክብር ለመመለስ ነው፡፡ ጌታ ተጠምቆ ከውኃው ከወጣ በኋላ መንፈስ ቅዱስ በርግብ አምሳል ወርዶ በራሱ ላይ
                        በማረፍ አብ በደመና “ይህ ልጄ ነው” ብሎ ሲመሰክርለት ምሥጢረ ሥላሴ አንድነትና ሦስትነት በጉልህ ተረጋግጧል፡፡ /ማቴ. 3፥16/
                      </p>

                      <h4 className="text-xl mt-6 mb-2">የጌታችን ጥምቀት በዮርዳኖስ</h4>
                      በኢየሩሳሌም አካባቢ ብዙ ወንዞች ኩሬዎችና ሐይቆች መኖራቸው የታወቀ ነው፡፡ ጌታ ጥምቀቱን በዮርዳኖስ ያደረገው ስለዚሁ አስቀድሞ የተነገረውን ትንቢት መፈጸሙን ለማረጋገጥ ነው፡፡
                      “ባሕር አይታ ሸሸች ዮርዳኖስም ወደ ኋላው ተመለሰ” /መዝ. 113፥3/ ከዚህም ጋር ከላይ ምንጩ አንድ የሆነው ዮርዳኖስ ዝቅ ብሎ በደሴት ተከፍሎ እንደገና እንደሚገናኝ በግዝረት
                      በቁልፈት (በመገዘርና ባለመገዘር) ተለያይተው የነበሩ ሕዝብና አሕዛብ መላው የአዳም ልጆች በጌታችን ጥምቀት አንድ መሆናቸውን የሚገልጽ ትርጉም አለው፡፡ እስራኤል ዮርዳኖስን
                      ተሻግረው ምደረ ርስት ገብተዋል፡፡ ያመኑ የተጠመቁ ምዕመናንም በጥምቀት ገነት መንግሥተ ሰማያትን ይወርሳሉ፡፡ ሌላው በዮርዳኖስ ተጥሎ የነበረውን የዕዳ ደብዳቤ ይደመስስልን ዘንድ /ቈላ. 2፥14/

                      <h3 className="text-xl font-semibold mt-6 mb-2">ምሥጢረ ሜሮን</h3>
                      ሜሮን ቅባት ማለት ሲሆን ለመንፈሳዊ አገልግሎት ብቻ የሚውል የተቀደሰ ቅባት ነው ። የተለያየ መዓዛ ከሚሰጡ ዕፀዋት ተቀምሞና ተነጥሮ ይዘጋጃል። <br />
                      በብሉይ ኪዳን ዘመን የነበሩ ካህናት የሚሾሙት ፤ ነገሥታት የሚግሡት ፤ የተቀደሰ ቅብዓ ክህነትናቅብዓ መንግሥት እየተቀቡ ነበር ። ዘፀ 28፥41 ። ዘፀ 29፥7 ፤ ዘሌ 4፥3 ። ዘሌ 6፥20 ።
                      ዘሌ 8፥2 ። 1ሳሙ 9፥16 ። 1ሳሙ 16፥1 ። 1ነገ 1፥34። በዚህ የብሉይ ኪዳን ዘመን ካህናቱም ሆኑ ነገሥታቱ የሚቀቡት ከእስራኤል ዘሥጋ መካከል ተመርጠው የእግዚአብሔርን ህዝብ
                      ለማገልገል ሲሆን ፤ ቅብዓ ክህነቱም ሆነ ቅብዓ መንግስቱ አገልግሎታቸውን በማስተዋልና በታማኝነት እንዲፈጽሙ የሚያተጋቸው የእግዚአብሔር ፀጋ የሚተላለፍበት መንገድ ነው ።
                      በዚህ ዓይነት የመሪነት ቦታ የያዙ ካህናትና ነገሥታት ከእግዚአብሔር የሚሰጣቸውን ትእዛዝ በመቀበል ለእግዚአብሔር እየታዘዙና ህዝባቸውን በቅንነት እያገለገሉ አልፈዋል ።

                      <h4 className="text-xl mt-6 mb-2">ቅብዓ ሜሮን በሐዲስ ኪዳን</h4>
                      በብሉይ ኪዳን ለታላቅ መንፈሳዊ አገልግሎት ይውል የነበረው የተቀደሰ ቅብዓት በሐዲስ ኪዳንም መንፈሳዊ ዓላማውን ሳይለቅ አገልግሎቱ ቀጥሏል ። 1 ዮሐ 2፥17። ቅብዓ ሜሮን
                      ከተለያዩ ዕፀዋት ከተቀመመ በኋላ በሊቀ ዻዻስና በዻዻሳት ጸሎትና ቡራኬ ይባረካል።

                      <h4 className="text-xl mt-6 mb-2">የቅብዓ ሜሮን አገልግሎት</h4>
                      <p>
                        ሐዋርያት በጸሎተ ሐሙስ ማታ በህጽበተ ዕግር አማካኝነት ተጠምቀዋል ። ዮሐ 13 ፥ 4 ። መንፈስ ቅዱስን የተቀበሉት ግን ጌታችን ባረገ በሀምሳኛው ቀን ነበር ። የሐ ሥ 2፥1 ።
                        በሐዋርያት ዘመን የነበሩ ምዕመናንም አምነው ከተጠመቁ በኋላ እጃቸውን ሲጭኑባቸው መንፈስ ቅዱስ ይወርድላቸው ነበር ። የሐ ሥ 8፥14 ። ጌታችን ሲጠመቅ መንፈስ ቅዱስ
                        በርግብ አምሳል በራሱ ማረፉ ከተጠመቅን በኋላ ሀብተ መንፈስ ቅዱስ እንደሚሰጠን ሲያስረዳን ነው ። ማቴ 3፥16 ። በጥምቀት የተቀበልነው መንፈስ ቅዱስም ካልካድነው በቀር
                        ምንም ኃጢአት ብንሠራ ንስሓ እስክንገባ ይጠብቀናል እንጅ አይለየንም ። ከሐዋርያት በኋላ የተነሱ ሐዋርያውያን አበው (ሊቃነ ዻዻሳት) ከተጠማቂው ህዝብ ብዛት አንጻር ለሁሉ
                        ለማዳረስ እንዲቻልና ለሚቀጥለው ትውልድም የቤተ ክርስቲያን መመሪያ ሆኖ እንዲያገለግል በአንብሮተ ዕድ (እጅ በመጫን) ፋንታ የሚጠመቀው ምዕመን በቅብዓ ሜሮን አማካኝነት
                        ሀብተ መንፈስ ቅዱስ እንዲሰጥ ስለወሰኑ ከዚያ ጊዜ ጀምሮ ቤተ ክርስቲያ ከጥምቀት በኋላ ለተጠማቂው ቅብዓተ ሜሮን በመቀባት መንፈስ ቅዱስን ታድላለች ።
                      </p>
                      <p>
                        የቃል ኪዳኑ ታቦት (ፅላት) ወደ ቤተ ክርስቲያን ገብቶ በመንበረ ክብሩ ላይ በመቀመጥ አገልግሎት እንዲሰጥ አስቀድሞ በዚህ በተቀደሰ ቅብዓ ሜሮን ተባርኮ መሰየም አለበት ።
                        ተሰርቆ ወይም በሌላ ፤ ክብሩ በማይጠበቅበትና ተገቢ ባልሆነ ቦታ ቢቆይም ከተመለሰ በኋላ እንደገና መባረክ አለበት ።
                      </p>
                      <p>
                        ቤተ ክርስቲያን ከታነጸ በኋላ ፤ በውስጡ ሙሉ የቤተ ክርስቲያን አገልግሎት ከመስጠቱ በፊት በቅብዓተ ሜሮን መባረክ አለበት ። በቅብዓተ ሜሮን ካልተባረከ ቤተ ክርስቲያን
                        ሊባል አይችልም ። ከተራ አዳራሽ የሚለየው በቅብዓተ ሜሮን ሲከብርና በውስጡም የቃል ኪዳኑ ታቦት ሲኖርበት ብቻ ነውና ።
                      </p>


                      <h3 className="text-xl font-semibold mt-6 mb-2">ምሥጢረ ቁርባን</h3>
                      ቁርባን ፤ ማለት ፣ ለእግዚአብሔር የሚቀርብ አምኃ ፣ መስዋዕት ፣ መንፈሳዊ ነገር ሁሉ ማለት ሲሆን ፤ በዚህ ትምሕርታችን ግን ፤ ስለ ሐዲስ ኪዳን መስዋዕት (የክርስቶስ ሥጋና ደም) እንማራለን ። <br />
                      በብሉይ ኪዳን ለሐዲስ ኪዳን ቁርባን (መስዋዕት) ምሳሌዎች <br />
                      የመልከ ጼዴቅ መስዋዕት ዘፍ 14 ፥ 18 ። ዕብ 5 ፥ 6 ። ዕብ 6 ፥ 1 ። ህብስቱ የሥጋው ፤ ወይኑ የደሙ ምሳሌ ፤ መልከ ጼዴቅ የክርስቶስ ፤ አብርሐም የምዕመናን ። <br />
                      የእስራኤል ፋሲካ ። ዘፀ 12 ፥ 1 ። ሞት የዲያብሎስ ፤ እስራኤል የምዕመናን ፤ በጉ የክርስቶስ ምሳሌ ።<br />
                      የእስራኤል መና ። ዘፀ 16 ፥ 13 ። መና የጌታችን ቅዱስ ሥጋና ክቡር ደም ፤ እስራኤል የምዕመናን ፤ ደመና የእመቤታችን <br />
                      በብሉይ ኪዳን መስዋዕት ቁርባን ያቀረቡና በረከት ያገኙ አባቶች <br />
                      አዳም አባታችን አዳም ባቀረበው መስዋዕት ከአምስት ሺህ አምስት መቶ ዘመን በኋላ ሰው ሆኖ እንደሚያድነው ቃል ገባለት ። ዘፍ 3 ፥ 22 ። ገላ 4 ፥ 4 ። <br />
                      ኖኅ ባቀረበው መስዋዕት ለኖኅና ለልጆቹ ምድርን ዳግም በመቅሰፍት እንደማያጠፋት በቀስተ ደመና ምልክት ቃል ገባላቸው ። ዘፍ 9 ፥ 1 ። ዘፍ 9 ፥ 8 ። <br />
                      አብርሐም ዘፍ 18 ፥ 3 ። አባታችን አብርሐም ባቀረበው መስዋዕት በዘርህ አሕዛብ ሁሉ ይባረካሉ የሚለውን የተስፋ ቃል ሰማ ፤ ያም ዘር የተባለው ለጊዜው ይስሐቅ ሲሆን፤ ፍጻሜው ግን ለጌታ ነበር ። <br />
                      መልከ ጼዴቅ ዘፍ 14 ፥ 17 ። መዝ 109 ፥ 4 ። ዕብ 5 ፥ 6 ። በእግዚአብሔር ፊት ባቀረበው መስዋዕት ክህነቱ ለዘለዓለም ተብሎለት የክርስቶስ ምሳሌ ሆነ ። ዕብ 7 ፥ 1 ። <br />
                      ዳዊት መዝ 131 ፥ 11 ። መስዋዕት ባቀረበበት ሠዓት ከአብራክህ የተገኘው ልጅህ በዙፋንህ ይነግሣል ተባለለት ፤ ይህም ለጊዜው የተነገረው ለሰሎሞን ሲሆን ፍጻሜው ለክርስቶስ ነበር ። መዝ 71 ፡1 ።
                      ሌሎችም በእግዚአብሔር ፊት ንጹህ መስዋዕታ ቸውን እያቀረቡ በረከት ተቀብለዋል። <br />

                      <h4 className="text-xl mt-6 mb-2">ምሥጢረ ቁርባን በሐዲስ ኪዳን</h4>
                      በብሉይ ኪዳን ዘመን ይቀርብ የነበረው የመስዋዕት ቁርባን ፤ ከበግ ፤ ከላምና ፤ ከተለያዩ እንስሳት ነበር ። በሐዲስ ኪዳን ግን እንስሳት በቤተ መቅደስ ውስጥ መስዋዕት (ቁርባን) ሆነው አይቀርቦም መስዋዕት ሁሉ በክስቶስ ሥጋና ደም ተጠቃሏል ። <br />
                      ይህንም የአዲስ ኪዳን መስዋዕት የመሠረተው ራሱ ጌታችን ሲሆን ፤ በጸሎተ ሐሙስ ማታ አስራ ሁለቱ ሐዋርያት እንዳሉ በመጀመሪያ መስዋዕተ ኦሪትን ሰርቶ ካሳለፈ በኋላ ኅብስቱና ወይኑን
                      ባርኮ “ነገ በመስቀል ላይ የሚቆረሰው ሥጋዬና የሚፈሰው ደሜ ይህ ነው ብሉ ጠጡ ብሎ ሰጣቸው” ። ማቴ 26 ፥ 26 ። <br />
                      ዛሬ ካህኑ ኅብስቱን በጻህል ወይኑን በጽዋ አድርጎ ጸሎተ ቅዳሴውን እየጸለየ.. ሲባርከው እንደዚያ ጊዜው ኅብስቱ ተለውጦ ሥጋ መለኮት ወይኑም ተለውጦ ደመ መለኮት ይሆናል ።
                      ይህንም ቅዱስ ሥጋና ክቡር ደም በምንቀበልበት ጊዜ ለእኛ ሲል የተቀበለውን መከራና ስቃይ እያሰብን ራሳችንን በንስሓ ከኃጢአት ንጹህ አድርገን ከንስሓ የቀረውን በደላችንን
                      እንደሚደመስ ስልን ፤ ከበደል እንደሚያነጻንና የዘለዓለም ሕይወት እንደሚሰጠን አምነን መሆን አለበት ።<br />
                      በ1ቆሮ 11 ፥ 23 “ይህንም ለመታሰቢያዬ አድርጉት ” የሚለው ቃል ሥጋውንና ደሙን በምንቀበልበት ጊዜ ስለሰው ልጆች ሲል በቀራንዮ አደባባይ የተበውን መከራና በልባችን ውስጥ
                      የተሳለውን አምላካዊ ፍቅሩን እያስታወስን እንድንኖር ነው መታሰቢያ የሚለው ቃል የሚያመለክተው የማይረሳ ነገርን ነውና ። ገላ 3፥1 <br />
                      ጌታችን ይህን ምሥጢር ከማሳየቱ (ከመመስረቱ) በፊት በዮሐ 6 ፥ 25-8 ። “ሥጋዬን ካልበላችሁ ደሜንም ካልጠጣችሁ በራሳችሁ ሕይወት የላችሁም ሥጋዬን የበላ ደሜንም የጠጣ
                      የዘለዓለም ሕይወት አለው ። ሥጋዬ እውነተኛ መብል ደሜም እውነተኛ መጠጥ (ሕይወትን የሚሰጥ) ነው ” በማለት ስለምሥጢረ ቁርባን በስፋት አስተምሯል ። <br />

                      <h4 className="text-xl mt-6 mb-2">የቅዱስ ቁርባን ጥቅም</h4>
                      ከዚህ ዓለም በሞት ብንለይም እንኳን በሰማያዊ መንግስት የማያልፈውን የዘለዓለም ሕይወት እናገኛለን ። ዮሐ 6 ፥ 54 ። <br />
                      ለኃጢአታችን ስርየት (ፍጹም ድኅነት) እናገኛለን ። ማቴ 26 ፥ 26 ። <br />
                      ከጌታችን ጋር ከቅዱሳንም ጋር ያለንን አንድነት እናረጋግጠጣለን ። 1 ቆሮ 10 ፥ 17 ። <br />
                      ሥጋውን በስንዴ ደሙን በወይን ያደረገበት ምክንያት ትንቢቱንና ምሳሌውን ለመፈጸም ነው <br />

                      <h4 className="text-xl mt-6 mb-2">ትንቢት</h4>
                      በልቤ ደስታ ጨመርሁ ከስንዴ ፍሬና ከወይን ፍሬ በዛ ። መዝ 4 ፥ 7 ። ይህም ቃል እውነተኛና ፍጹም የሆነው ዘለዓለማዊ መድኃኒት ቅዱስ ቁርባን በስንዴና በወይን እንደሚደረግ ያመለክታል ። <br />
                      <h4 className="text-xl mt-6 mb-2">ምሳሌ</h4>
                      የክርስቶስ ምሳሌ፤ መልከ ጼዴቅ መስዋዕት የሚያቀርበው በስንዴና በወይን ስለነበረ ምሳሌውን ለመፈጸም ። ዘፍ 14 ፥ 17 ። <br />
                      ሥጋውንና ደሙን በምግብ ያደረገበት ምክንያት <br />
                      ምግብ ከሰውነት ጋር እንደሚዋሃድ ሥጋውንና ደሙን ስንቀበል በእውነት እንደሚዋሃደን ለማስረዳት። <br />
                      ምግብ ለሥጋችን ኃይል እንደሚሆነን ሥጋውና ደሙም ለነፍሳችን መንፈሳዊ ኃይል ይሰጠናል። <br />
                      አዳምና ሄዋን በምግብ የእግዚአብሔር ልጅነታቸውን እንዳስወሰዱ ፤ በቅዱስ ሥጋውና በክቡር ደሙ ልጅነታችንን ሊመልስልን ። ዘፍ 3 ፥ 1 ። ዮሐ 6 ፥ 49። <br />
                      ቅዱስ ቁርባንን ፤ በበላችን ንስሓ ከገባን በኋላ ሁልጊዜ መቀበል ይገባናል ። የኃጢአታችን ስርየት የሚረጋገጠው በቅዱስ ቁርባን ነውና ። ማቴ 27 ፥ 27። <br />
                      ምዕመናን በሕይወት እስካሉ ደረስ ወንድም ይሁን ሴት ፣ ታናሽም ይሁን ታላቅ ከቅዱስ ቁርባን መለየት የለባቸውም ይህ ምሥጢር በፆታ በዕድሜ የማይገደብ ለሁሉ የተሰጠ ነውና ።
                      ዮሐ 6 ፥ 54 ። በሰራነው ስህተት ተጸጽተን ንስሓ ሳንገባ በድፍረት ሥጋውንና ደሙን መቀበል የለብንም ፤ ይህን የሚያደርጉ ሰዎች ዕዳ አለባቸው ። 1ቆሮ 11 ፥ 27 ። የምንቀበለው
                      ቅዱስ ቁርባን ጌታችን በቀራንዮ አደባባይ ተሰቅሎ ከዋለ በኋላ ፤ ዘጠኝ ሰዓት ሲሆን በራሱ ሥልጣን ቅድስት ነፍሱን ከቅዱስ ሥጋው ለይቷል ። ዮሐ 10 ፥ 18 ። ዮሐ 19 ፥ 30 ።
                      በአካለ ነፍስ ወደ ሲኦል ሄዶ በዚያ የነበሩ ነፍሳትን ወደ ገነት ከመለሰ በኋላ ሶስት መዓልትና ሶስት ሌሊት በከርሠ መቃብር ከነበረው ሥጋ ጋር በፈቃዱ አዋህዶ ተነሳ ፤ በዚህ ጊዜ
                      ውስጥ ግን(ሥጋውና ደሙ በተለያዩበት ወቅት) መለኮት ፣ ከነፍ ስም ከሥጋም ጋር አልተለየም ። 1ዼጥ ። ስለዚህ እኛ የምንቀበለው ሥጋና ደም ፤ ነፍስ የተለየችው መለኮት የተዋሃደው ነው ። 1ዼጥ 3 ፥ 18 ። <br />

                      <h3 className="text-xl font-semibold mt-6 mb-2">ምሥጢረ ንስሐ</h3>
                      ንስሐ ፦ ነስሐ ተፀፀተ ካለው የተገኘ ሲሆን ፤ ንስሐ ማለት በሠሩት ኃጢአት መፀፀት ፣ ማዘን ፣ ወደ እግዚአብሔር ለመመለስ መወሰን ማለት ነው። ንስሐ ከዘለዓለማዊ ፍርድ
                      የሚያድን ፤ ዘማዊውን እንደ ድንግል ፤ ሌባውን መጽዋች የሚያደርግ በፊት ከተሠራው ኃጢአት ንጹህ አድርጎ ፤ ከእግዚአብሔር ጋር አንድ የሚያደርግ ምሥጢር ነው ። <br />

                      <h4 className="text-xl mt-2 mb-0">ከንስሐ በፊት </h4>
                      መፀፀት <br />
                      አንድ ክርስቲያን በድፍረትም ይሁን በስህተት “የሠራው በደል” መጻሕፍት በማንበብ ፣ ከመምህራን ተምሮ ፣ የስብከት ካሴት አዳምጦ ፤ ህሊናው ወቅሶት ፣ ወይም በሌላ በአንድ
                      ምክንያት ስህተት መሆኑን ከተረዳ በኋላ ተፀፅቶ ከእግዚ አብሔር ለመታረቅ (በደሉን ለማስተስረይ) የሚያደርገው ጉዞ ንስሐ ይባላል ። በሠራው በደል ሳይፀፀት ፤ ለጊዜው ህሊናውን
                      ስለረበሸው ብቻ ንስሐ የሚገባ ሰው ፤ ከስሐውን በኋላ ወደ ቀደመ ሕይወቱ ሊመለስ ይችላል ። ምክንያቱም ፡ ንስሐ የገባው ፡ በሠራው በደል ከልቡ ተፀፅቶ ሳይሆን ፤ በስሜት ተነሳስቶ ነውና ፤ <br />

                      <h4 className="text-xl mt-2 mb-0">ኃጢአትን መጥላት </h4>
                      በበደላችን ከተፀፅትን በኋላ የሰራነውን በደል መጥላትና ወደፊትም መሥራት እንደሌለብን ራሳችንን ማሳመንና ከኃጢዓት መንገድ መራቅ ማለት ነው ። <br />
                      ከንስሐ በኋላ ስላለው ሕይወት መወሰን <br />
                      አንድ ምዕመን ንስሐ ከመግባቱ በፊት ለወደፊቱ የሚኖረውን ሕይወት አስቀ ድሞ መመርመርና መወሰን ይገባዋል የእግዚአብሔን ቃል ስንሰማ ለጊዜው ልባችን ሊነካ ፣
                      ምን እናድርግ ልንል እንችላለን ። የሐ ሥ 2 ፥ 37 ። ነገር ግን ከተወሰነ ጊዜ በኋላ ዓለሙን ወደመምሰል እንደማንመለስ አስቀድመን ራሳችንን መመርመር አለብን ።
                      ብዙዎቹ በስሜት ወደ ክርስትና ከገቡ በኋላ ፤ በጊዜያዊ ነገር ተታለው በድንገት ከሃይማኖት መንገድ ወጥተዋልና ። <br />
                      <h4 className="text-xl mt-2 mb-0">በንስሐ ጊዜ </h4>
                      አንድ ምዕመን ካለፈ በደሉ በንስሐ ታጥቦ በአዲስ ሕይወት ራሱን ለማስተካከልና ከእግዚአብሔር ጋር ለመኖር ከወሰነ በኋላ የንስሐ አባት ሊኖረው ይገባል ። ጌታችን “ካህናትን”
                      ራሱን ወክለው መንጋውን እንዲጠብቁ “በምድር ያሰራችሁት በሰማይ የታሰረ በምድር የፈታችሁት በሰማይ የተፈታ ይሁን” (ማቴ 8 ፥ ዮሐ 21 ፥ 15 ። ማቴ 16 ፥ 19)
                      በማለት መንጋውን እንዲጠብቁ ሾሟቸዋልና። አንድ ክርስቲያን በሕይወት ሲኖር ፤ የእግዚአብሔርን መንገድ የሚመራው ፤ ሲሳሳት ንስሐውን ተቀ ብሎ ቀኖና በመስጠት ከእግዚአብሔር
                      የሚያስታርቀው የንስሐ አባት የግድ ሊኖረው ይገባል። <br />
                      ንስሐ የሚገባው ምዕመን በካህኑ ፊት በሚቀርብበት ጊዜ የሚከተሉትን ማሟላት አለበት <br />
                      የሠራውን ስህተት በሙሉ ማስታወስ <br />
                      ቀኖናው የሚሰጠው እንደ በደሉ ዓይነት ስለሆነ የሠራውን ማስታወስ አለበት ፤ በቃሉ የሚረሳው ከሆነም በጽሁፍ መመዝገብ ያስልጋል ። <br />
                      ሳይቀንሱ (ሳይከፍሉ) በሙሉ መናገር <br />
                      “ይህን ብናገር ሰው ምን ይለኛል ?” ብሎ ከባዱን (የሚያሳፍረውን) ነገር መደበቅ የለበትም። ሲሰራው ያላሳፈረውን ሲናገረው ሊያፍርበት አይገባም። አንድ ጊዜ ተናግሮ ከህሊናው
                      ካላስወጣው ሁሌም ሲረብ ሸው ይኖራልና።“እናንተ ሸክማችሁ የከበደ ወደ እኔ ኑ ሸክማችሁን አራግፋለሁ” ማቴ 11 ፥ 28ተብሏልና በትክክል አስታውሶ መናዘዝና የኃጢአትን ሸክም
                      ማራገፍ ይገባል። ስለ በደላችን በምንናዘዝበት ጊዜ ግን ፤ ከዕገሌ ጋር ፤ በዚህ ጊዜ ፤ በዚህ ቦታ ፤ ይህን አድርጌያለሁ እያልን ፤ ቦታውን ፤ ጊዜውን የሌላ ሰው ስም በዝርዝር
                      እንድንናገር አንገደድም ፣ የሠራነውን በደል ብቻ “ጣዖት አምልኬያለሁ ፤ ሠርቄያለሁ ፤ አመንዝሬያለሁ” በማለት በጥቅሉ መናገር እንችላለን ። <br />
                      ኑዛዜ (ራስን መክሰስ) <br />
                      በራሳችን ድካም የሠራነውን በደል “ዕገሌ አሳስቶኝ” እያሉ ሌላውን ሰው ስለ እኛ ስህተት ተጠያቂ ማድረግ ሳይሆን ፣ አንደበታችንን ከሳሽ ህሊናችን ምስክር አድርገን በመጨከን
                      ራሳችንን በእግዚአብሔር ፊት መክሰስ ነው ። አምላካችን የልባችንን መመለስ ፣ አይቶ የሰራነውን በደል ሁሉ እንዳልተሠራ አድርጎ ያነጻናል ። በደልን በንስሐ ይቅር ማለት የእግዚአብሔር
                      የቸርነት ሥራ ነውና። <br />
                      አንድ ምዕመን ንስሐ ከገባ በኋላ የሚከተሉትን በቅደም ተከተል ማድረግ አለበት? <br />
                      የተቀበለውን ቀኖና በትክክል መፈጸም <br />
                      ቀኖና የግሪክ ቃል ሲሆን : መለኪያ ማለት ነው ። ካህኑ ለበደለው ምዕመን እንደ ሃይማኖቱ ጽናት ፣ እንደ አእምሮው ስፋት ፤ የሠራውን በደል መጥኖ ቀኖና ከሰጠው በኋላ
                      እንደታዘዘው መፈጸም አለበት ። የነነዌ ሰዎች ፣ ት. ዮና 3 ፥1 ። ንጉሡ ህዝቅያስ ፣ ኢሳ 38 ፥ 1 ። ቅዱስ ጴጥሮስ ሉቃ 22 ፥ 54 ። እና ሌሎችም ይቅርታን ያገኙት ፤
                      በበደላቸው ተጸጽተው በማልቀሳቸውና ንስሃ በመግባታቸው ነው ። በንስሐ ወቅት ፡መሬት ላይ መተኛት ምግብ መቀነስ ፣ ከዓለማዊ ነገሮችና ለመንፈሳዊ ሕይወት ከማይመቹ
                      ጓደኞች መራቅ ያስፈልጋል ። በንስሐ ጊዜ እንዳናደርግ ከታዘዝነው ነገር ራሳችንን በመግዛት መቆጠብ አለብን ፤ እግዚአብሔር በቸርነቱ ወደ ድኅነት ከጠራን በኋላ እንደገና ተመልሰን
                      ወደተውነው ድካማችን መመለስ የለብንም። የጊዜውን ሳይሆን የመጨረሻውን ማሰብ አለብን ። 2 ጢሞ 4 ፥10 ። መዝ 6 ፥6 ። <br />
                      በደላችን በንስሐ እንደሚሰረይልን ማመን <br />
                      ክርስቶስ ደሙን ያፈሰሰው በደላችንን ለመደምሰስ ስለሆነ ከበደላችን ሊያነጻን የታመነ አምላክ ነው ። ከሠራነው ብዙ ኃጢአት አንጻር የሚሰጠን ቀኖና ትንሽ መስሎ ቢታየንም ።
                      ማሰብ ያለብን የራሳችንን በደል ሳይሆን የእግዚአብሔርን ቸርነት ነው ። ከእኛ በደል የእግዚአብሔር የቸርነት ሥራው እጅግ ይበልጣልና የታዘዝነውን ፈጽመን የቀረውን እንደቸርነትህ
                      ማለት ይገባል ። “የታዘዛችሁትን ባደረጋችሁ ጊዜ የማንጠቅም ባሪያዎች ነን በሉ” ተብለናልና ። ሉቃ 17 ፥ 10 ። <br />
                      በሥጋውና በደሙ መታተም (መቁረብ) <br />
                      አንድ የተራበ ሰው እጁን ስለታጠበ ብቻ አይጠግብም ። የግድ ምግብ መብላት አለበት ። ንስሐ ማለት መታጠብ ፣ ከእድፍ (ከኃጢአት) መንጻት ማለት ሲሆን ፤ ድኅነት የሚገኘው የዘለዓለም ሕይወት የሚሰጠውን ቅዱስ ሥጋውንና ክቡር ደሙን በመቀበል ነው ። ዮሐ 6፥33 ። ብዙዎቹ መቁረብን እንደ ትርፍ ነገርና በዕድሜ የተገደበ (ለሽማግሌ ብቻ) አድርገው ስለሚቆጥሩት ለመቀበል ሲዘጋጁ አይታዩም ። ነገር ግን ክርስቲያን የሆነ ሁሉ ቅዱስ ቁርባን የግድ ያስፈልገዋል ። ቀኖና የተቀበልንበት በደላችን የሚሰረየው ሥጋውን ስንበላ ፣ ደሙንም ስንጠጣ ነውና ።
                      ሁሌም ለንስሐ መዘጋጀት
                      ንስሐ ከገባንና ከቆርብን በኋላ እንደገና በኃጢአት ልንወድቅ እንችላለን። አምለካችን “ለምን ንስሐ አልገባህም እንጅ ለምን ኃጢአት ሠራህ? አይልምና” ሁለተኛ ስንበድል ሀፍረት ሳይሰማንና
                      ከኃጢአት መላቀቅ ካልቻልሁ በየጊዜው የንስሐ አባቴን ከማስቸግር አርፌ ብቀመጥ ይሻለኛል በማለት ፡ ሁሉንም እርግፍ አድርገን እንድተወው ፡ ክፉ ሀሳብ በአምሯችን ሊፈታተነን ይችላል ። <br />
                      ነገር ግን ከንስሐ በኋላ እንደ መላእክት በቅድስና ብቻ እንኖራለን ማለት ሳይሆን “ጻድቅ ሰባት ጊዜ ይወድቃል ፤ ሰባት ጊዜ ይነሳል” ምሳ 24፥ 16 ። እንደተባለ ፡ አምላካችን ብንወድቅ
                      ሊያነሳን ፤ ብንጠፋ ሊፈልገን ፤ ብንርቅ ሊያቀርበን ፤ በኃጢአት ብንረክስ ሊቀድሰን (እንደ ባዘቶ ሊያጠራን) የታመነ አምላክ ስለሆነ ተስፋ ሳንቆርጥ ፤ በኃጢአታችን ሳንደበቅ ፤ ዘወትር
                      ለንስሓ መዘጋጀት አለብን። ኢሳ 1 ፥ 18 ። <br />
                      <h3 className="text-xl font-semibold mt-6 mb-2">ምሥጢረ ተክሊል</h3>
                      ተክሊል ከለለ ፤ ጋረደ ። ካለው የግዕዝ ግሥ የተገኘ ነው። ተክሊል ማለት ፤ መከለል ፣ መወሰን ፣ መጋረድ ፣ መለየት ፣ ማለት ሲሆን  በሥርዓተ ቤተ ክርስቲያን ለሚጋቡ ምዕማናን
                      የሚፈጸምላቸው ሥርዓት ነው። እግዚአብሔር ወንድና ሴት አድርጎ ከፈጠራቸው በኋላ ምድርን ሙሏት ብሎ አዘዛቸው።(ዘፍ 1 ፥ 27)  ከዚህ ጊዜ ጀምሮ ሴትና ወንድ በጋብቻ እየተሳሰሩ
                      ልጆችን በመውለድ መባዛት ጀመሩ ።
                      <h4 className="text-xl mt-6 mb--5">የጋብቻ ዓላማዎች</h4>
                      ለመረዳዳት ፤ “ሰው ብቻውን ይሆን ዘንድ አግባብ አይደለም የሚመቸውን ረዳት እንፍጠርለት ። ዘፍ 2 ፥18 ።” ብሎ እግዚአብሔር እንደተናገረ ፤ ሰው በኑሮው ሁሉ እንዳይቸገር
                      የውስጡን ሀሳብ የሚያካፍለው ፣ ችግሩን የሚጋራውና ራሱን የሚወክልለት የህይወት አጋሩን እየመረጠ ጋብቻ ይመሠርታል ። <br />
                      ለፈቃድ ፤ ሰው በባህርዩ ፍትወት (የተቃራኒ ጾታ ፍላጎት) አለበት ። ሰለሆነም በጋብቻ ተወስኖ እንዲኖርና ከፈተና እንዲጠበቅ ተፈቅዶለታል ። 1ቆሮ 7 ፥ 2-38 ። እንዲህ ዓይነቱ ጋብቻም
                      መኝታው ንጹህ ነው ተብሏል ። ዕብ 13 ፥ 4 ። <br />
                      ለመባዛት ፤ ዛሬ በዓለማችን የምናየው የሕዝብ ቁጥር የተጀመረው በአንድ አዳምና በአንዲት ሄዋን ከተመሠረተ ህጋዊ ጋብቻ ነው ። ብዙ ተባዙ ምድርንም ሙሏት ብሎ የተናገረውና
                      የፈቀደው እግዚአብሔር ስለሆነ እሰከ ዓለም ፍጻሜ ድረስ በዚሁ መንገድ ልጆች ይወለዳሉ ። ዘፍ 1 ፥ 27 ። <br />

                      <h4 className="text-xl mt-6 mb--5">ከጋብቻ በፊት</h4>
                      የተጋቢዎቹ ስምምነትአስቀድመው በጋብቻው ሁለቱም ተጋቢዎች መተወዋቅ መስማማትና መወሰን አለባ- ቸው ። ትዳርን ያህል ታላቅ ነገር በሌሎች ግፊትና ትእዛዝ መወሰን የለበትም ።
                      እጮኛሞች ሲተዋወቁም በስህተት ውስጥ ወድቀው ሃይማኖታቸውን እንዳያስነቅፉ ግንኙነታቸው ከዓለማውያን ሰዎች ልዩ መሆኑን መዘንጋት የለባቸውም ። በመጠናናትም ጊዜ ማለፍ የለበትም
                      ጊዜ በረዘመ ቁጥር ሃሳብ ይለዋወጣልና ። <br />
                      የሃይማኖት አንድነት ፤ለጊዜው ቀላል መስሎ የሚታየው የሃይማኖት ጉዳይ ፣ በኋላ ለመፍታት አስቸጋሪ ሊሆን ይችላል ። በአንድ ሃይማኖት የሚያምኑና ሥርዓቱን ጠብቀው የተጋቡ ከሆኑ
                      ግን እንደ አንድ ያስባሉ ሳይነጋገሩም በሀሳብ ይስማማሉ ፣ ይተሳሰባሉ….. ። በእርግጥ የሌላ እምነት ተከታይ የሆነውን አስተምሮ አሳምኖ ማግባት ይፈቀዳል ። ነገር ግን እሰብካለሁ ሲሉ
                      መሰበክ እንዳይመጣ ጥንቃቄ ያስፈልጋል ። <br />
                      የአእምሮና የአካል ብስለት ፤ እንደ ቤተ ክርስቲያ ትምሕርት የጋብቻ ዕድሜ ፣ ሴት ከአሥራ አምስት ፤ ወንድ ከሃያ ዓመት ጀምሮ ባለው የዕድሜ ክልል ውስጥ ሲሆን ፤ የአእምሮ ዝግጅት
                      ማለትም ፤ ከሃይማኖት አንጻር ፡ ስለ ትዳር መማርና መረዳት ፣ ከትዳር በኋላ ስለሚኖረው ህይወት ግንዛቤ ማግኘት ፣ ከጋብቻ በኋላ ከትዳር ጓደኛው የሚቀርበው ሰው እንደሌለ ማወቅ ፣
                      ራስን ለትዳር ጓደኛ አሳልፎ ለመስጠት መወሰንና ወደፊት ሊከሰቱ የሚችሉ ችግሮችን በትዕግሥት ለማሳለፍ መዘጋጀት ናቸው ። <br />

                      <h4 className="text-xl mt-6 mb--5">በጋብቻ ጊዜ</h4>
                      በውሳኔ መጽናት ፤ የሁለቱም ወገን ዘመዶችና ጓደኞች የራሳቸው ፍላጎት እንዲሆንላቸው በማሰብ ፤ ስለ ሠርጉ ፕሮግራም በማውጣት ከቤተ ክርስቲያን ውጭ እንዲደረግ ፣ ወይም ደግሞ
                      በሁለቱም በቤተ ክርስቲያንም (በሥርዓተ ተክሊል እንዲፈጸም በመዘምራን እንዲታጀቡ) እንደገናም ፤ በዓለማዊ ሠርግ (በቬሎ እንዲወጡ ፣ በባንድ እንዲታጀቡ) በማዋከብ ግራ ሊያጋቡ
                      ይችላሉ ። ነገር ግን የሚጋቡት አጃቢዎቹ ስላልሆኑ ፣ መወሰን ያለበት በሙሽሮቹ ነው ። ሙሽሮቹም በውሳኔያቸው መጽናት አለባቸው ። በውስጣቸው ያልተቆረጠ ዓለማዊ ፍላጎት
                      ስላላቸውና ከእግዚአብሔር ቃል ይልቅ ለቤተሰቦቻቸው ምክርና ትእዛዝ ክብር በመስጠት ሠርጉ የተደበላለቀና ቅጥ ያጣ ፤ ብዙ ሰዎችንም የሚያሰናክል ሊሆን አይገባም ። <br />
                      ጋብቻው በቅዱስ ቁርባን መሆን አለበት ፤ሥርዓተ ተክሊል የሚፈጸምላቸው የሥጋ ድንግልና ላላቸው ሲሆን ሌሎችም ክርስቲያኖች ጋብቻቸውን በቅዱስ ቁርባን ማድረግ ይችላሉ ።
                      ክርስቲያናዊ ጋብቻ ያለ ቅዱስ ቁርባን አይደረግም ። አንዳንድ ሰዎች ፤ ለፎቶ ግራፍና ለቪዲዮ ሲሉ ብቻ ፣ ጋብቻቸውን በሥርዓተ ተክሊል ለማድረግ ያስባሉ ፣ ይህ ተገቢ ስላልሆነ
                      አስቀድመው ስለ ጋብቻ ትምህርት በሚገባ መማርና ምርጫቸውን ከወዲሁ ማስተካከል ይገባቸዋል ። <br />

                      <h4 className="text-xl mt-6 mb--5">ከጋብቻ በኋላ</h4>
                      ስምምነቱ ተጠብቆለት ሳይሆን በተፈጥሮ ህግ ነው ። እናትና አባቱን ይቀበላል እንጅ ለመቀበል ድርድር ውስጥ አይገባም ። ከእኛ በፊት የተደረጉ ነገሮችን በሙሉ አምነን እንድንቀበል
                      ተፈጥሮ ያስገድደናል ። ትዳር ግን ተስማምቶ ወዶና ፈርሞ የሚገባበት ዘላቂ ሕይወት ስለሆነ ስምምነቱ እስከ ሕይወት ፍጻሜ የጸና ነው ። “ሰው እናትና አባቱን ይተዋል ወደ ሚስቱም
                      ይጣበቃል ሁለቱም አንድ ይሆናሉ” ። ዘፍ 2 ፥ 24 ። ማቴ 19፥4 ። ባለው አምላካዊ ቃል መሠረት በትዳራቸው ውስጥ ማንም ሊገባ አይፈቀድለትም ። <br />
                      ወላጆችም ቢሆኑ ልጆቻቸው ባይስማሙ ያስታርቃሉ ይመክራሉ እንጅ ለእነሱ ስላልተስማማቸውና ግላዊ ጥቅማቸው ስለቀረባቸው ብቻ ፍታት ፍቺው እያሉ የልጆቻቸውን ትዳር መበጥበጥ
                      የለባቸውም የብዙዎች ትዳር የሚበተነው በቤተሰብ ጣልቃ ገብነት በመሆኑ ባለትዳሮች ይህን ጉዳይ አስቀድመው ሊረዱት ይገባል:: ባልና ሚስት አንድ ስለሆኑ በመካከላቸው ሁለትነት መታየት
                      የለበትም ፤ ሰው ከቤተ ሰቡ ጋር የተዛመደው <br />

                      <h4 className="text-xl mt-6 mb--5">ፍቺ የሚፈቅድባቸው ምክንያቶች</h4>
                      <h4 className="text-xl mt-6 mb-0">ሞት</h4>

                      ከሁለቱ አንዳቸው በሞት ቢለዩ በሕይወት የቀረው ሌላ እንዲያገባ ተፈቅዶለታል ። ነገር ግን ጋብቻው በአንድ ሃይማኖት ከሚኖሩና በቅዱስ ቁርባን መሆን አለበት ። ሮሜ 7፥ 2 ። 1 ቆሮ 7 ፥ 39 ። <br />

                      <h4 className="text-xl mt-4 mb--5">ዝሙት</h4>
                      ከሁለቱ አንዳቸው በዝሙት ከወደቁ እና ከጥፋታቸውም መታረም ካልቻሉ ፤ ንጹሁ ሰው ትዳሩን መፍታት ይችላል ። ነገር ግን ወሬ በመስማትና በጥርጣሬ መሆን አለበት ። ማቴ 5 ፥ 32 ።
                      የቤትን ገመና ለውጭ ማውራት ነገረ ሰሪ የሆኑ ሰዎችን ሊያስገባ ይችላልና መጠንቀቅ ያስፈልጋል ። የትዳር መሠረቱ በእውነት መግባባትና መተማመን ስለሆነ በሁኔታዎች መጠራጠርና
                      መጨቃጨቅ አያስፈልግም ። <br />
                      በዝሙት ኃጢአት የወደቀ የትዳር ጓደኛውም ከስህተቱ ተመልሶ ንስሐ ከገባና ይቅርታ ከጠየቀ ፤ እንደ በፊቱ በትዳራቸው መቀጠል ይችላሉ ። ባልና ሚስት በትዳራቸው በሚኖረው ማንኛውም
                      ዓይነት ኑሮ በመመካከርና በመወያየት መወሰን አለባቸው ። ትዳር ፡ የሁለቱም የጋራ ሕይወት ስለሆነ ፤ መመሪያ አውጪና ተቀባይ መሆን የለባቸውም ። ገቢያቸውም ሆነ ወጪያቸው በጋራ
                      መወሰን አለበት ። ትዳሩ እውነት የሚሆነው እነዚህ ሲሟሉ ነውና ። <br />
                      የባለትዳሮችን አንድነት የበለጠ የሚያረጋግጡት የሚወልዷቸው ልጆች ናቸው ልጆች የሁለቱም እኩል ሀብቶች ስለሆኑ ያቀራርቧቸዋል ። ትዳራቸውንም ማክበር ያለባቸው የሚወዷቸው ልጆቻቸው
                      እንዳይበታተ-ኑባቸው በማሰብ ጭምር መሆን አለበት ። በመካንነት ምክንያት መውለድ ያልቻሉት ባለትዳሮችም እግዚአብሔር ለእነሱ የወሰነላቸው የተሻለ መሆ ኑን በማሰብ ማመስገን ይገባቸዋል
                      እንጅ በአምላክ ሥራ ገብተው ማማረር አይገባቸውም ። የተወለደውም ቢሆን ካልተባረከ ሊሞት ወይም መጥፎ ልጅ ሊሆን ይችላል ። እግዚአብሔር አውቆ ያደረገውን አምላካዊ ጥበብ ባለማወቅና
                      ያሰቡት ስላልተሳ ካላቸው ብቻ ራሳቸውን የተረገመ አድርገው መቁጠር የለባቸውም እግዚአብሔር ያደረገው ሁሉ ለበጎ ነው ብሎ መቀበል ይገ ባል ። ገና ከማያውቋቸውና ካልተወለዱ ልጆች ይልቅ
                      የሚወዱትና ከእግዚአብሔር አደራ የተቀበሉት የትዳር አጋራቸው እን ደሚበልጥባቸውም በማስተዋል ማሰብ ይገባቸዋል። (ዘፍ 30 ፥ 1) <br />


                      <h3 className="text-xl font-semibold mt-6 mb-2">ምሥጢረ ክህነት</h3>
                      ካህን ፦ ተክህነ አገለገለ ። ካለው የግዕዝ ቃል የተገኘ ሲሆን ፤ ካህን ማለት የእግዚአብሔር አገልጋይ ፤ የምዕመናን አባት ፤ ጠባቂ ፤ መጋቢ ማለት ነው ። <br />

                      <h4 className="text-xl mt-4 mb--5">ምሥጢረ ክህነት በብሉይ ኪዳን</h4>
                      የክህነት አንዱ መገለጫው መስዋዕት ማቅረብ ሲሆን ፤ ለመጀመሪያ ጊዜ ለዚህ አገልግሎት የተመረጠውና ካህን ተብሎ የተጠራው መልከ ጼዴቅ ነው ። ዘፍ 14፥18 ። በኋላም እግዚአብሔር በቃል
                      ኪዳኑ ታቦት ፊት በቤተ መቅደስ እግዚአብሔርን የሚያገለግል የሕዝቡን ኃጢአት እየተቀበለ ከእግዚአብሔር የሚያስታርቅ ካህን እንዲመርጥ ሙሴን ስላዘዘው ከመልከ ጼዴቅ በኋላ አሮን ተሾመ ። <br />
                      ከአሮን እስከ ዮሐንስ መጥምቅ ደረስ ረጅሙን የብሉይ ኪዳን ዘመን ከአሮን ዘር ብቻ የሚወለዱት ቅብዓ ክህነት እየተቀቡ በካህንነት እያገለገሉ አልፈዋል ። <br />
                      ነገር ግን በዘር ሐረግ ላይ የተመሠረተው ክህነት ለሐዲስ ኪዳኑ ክህነት ምሳሌ ስለነበረ ፍፁምና ዘላቂ አልነበረምና መስዋዕቱም ሆነ የአመራረጡ ሂደት በሌላ ተተካ ። <br />
                      ዘላቂ ያልሆነበትና በሌላ የተተካበት ምክንያት
                      ክህነቱ በዘር ብቻ የተገደበ ስለነበረ በሐዲስ ኪዳን ህጉንና ሥርዓቱን አሟልቶ ለተገኘ ለማንኛውም ሕዝብ የተፈቀደ ሆነ ። ክርስቶስ የመጣው ለዓለም ሁሉ ነውና ። <br />
                      መስዋዕታቸው ፍጹም ድኅነት የማያሰጥ በመሆኑ በክርስቶስ ሥጋና ደም ተተካ ። ዮሐ 6 ፥ 32 ። <br />
                      አገልግሎቱ ለጊዜው ከሥጋ መቅሰፍት ከማዳን ያላለፈ ነበረ ፤ በሐዲስ ኪዳን ግን በምድርም በሰማይም ማሰር በሚችሉ ፣ በነፍስም በስጋም ላይ ሥልጣን ባላቸው ካህናት ተተካ ። ማቴ 18 ፥ 18 ። <br />

                      <h4 className="text-xl mt-4 mb--5">ምሥጢረ ክህነት በሐዲስ ኪዳን</h4>
                      በብሉይ ኪዳን የመጨረሻው ካህን መጥምቀ መለኮት ቅዱስ ዮሐንስ ሲሆን ፤ ከእሱ በኋላ የብሉይ ኪዳን ክህነት አልፏል ። ጌታችን ወደ ዮርዳኖስ ሄዶ በዮሐንስ እጅ በመጠመቅ ፡ ካህኑ በሚገኝበት
                      ቦታ ቤተ ክርስቲያን ድረስ ሄደን በካህኑ እጅ መጠመቅ እንዳለብን አስተምሮናል ። ማቴ 3 ፥13 ። <br />
                      ጌታችን ሲያስተምር ስለ ካህናት በብዙ ቦታ ተናግሯል ። ሂድና ራስህን ለካህን አሳይ ። ማቴ 8 ፥ 4 ። አንተ ብፁዕ ነህ ፡ የመንግስተ ሰማያትንም መክፈቻ እሰጥሃለሁ… ። ማቴ 16 ፥ 17 ።
                      እውነት እላችኋለሁ በምድር ያሰራችሁት በሰማይ የታሰረ ፣ በምድር የፈታችሁት በሰማይ የተፈታ ይሆናል ። ማቴ 18 ፥ 18 ። ይህን የተናገረው በመዋዕለ ስብከቱ ሲሆን ከሙታን ከተነሳ በኋላም
                      ለሐዋርያት አረጋግጦላቸዋል ። ሂዱና በአብ በወልድና በመንፈስ ቅዱስ ስም አጥምቋቸው ። ማቴ 28 ፥ 19 ።..እፍ አለባቸውና መንፈስ ቅዱስን ተቀበሉ ። ዮሐ 20 ፥ 22 ። በመጨረሻም ቅዱስ
                      ዼጥሮስን “….ስምዖን ሆይ በጎቼን ጠብቅ ፤ (ለጊዜው አስራ ሁለቱን ሐዋርያት ፡ ለፍጻሜው ወላጆችን) ፣ ጠቦቶቼን ጠብቅ ፤ (ለጊዜው ሰብዓ አርድዕትን ፡ ለፍጻሜው ወጣቶችን) ፣ ግልገሎቼን
                      ጠብቅ (ለጊዜው ሰላሳ ስድስቱ ቅዱሳት አንስትን ፡ ለፍጻሜው ህጻናትን)” በማለት ሐዋርያትን ዸዸሳት ፣ ቅዱስ ዼጥሮስን የመጀመሪያ ሊቀ ዻዻሳት አድርጎ ሾመው ። ዮሐ 21 ፥ 15 ። ከዚህ ጊዜ
                      ጀምሮ ቤተ ክርስቲያን በሊቀ ዸዸስና በዸዸሳት በሚመራ መንፈሳዊ ጉባኤ (ቅዱስ ሲኖዶስ) አማካኝነት እየተመራች አገልግሎቷን ታካሂዳለች ። <br />

                      <h4 className="text-xl mt-4 mb--5">የክህነት ደረጃዎች</h4>
                      <h4 className="text-xl mt-4 mb--5">ሊቀ ዻሳሳት</h4>
                      ሊቃነ ዸሳሳት “ፓትርያርክ” እየተባለም ይጠራል ። በአንዲት ቤተ ክርስቲያን (በአንድ ሲኖዶስ) ላይ የበላይ ሆኖ የሚሾም የሁሉም አባት ነው ። የሐዋ ሥራ 20 ፥ 28 ። በሕዝብና በካህናት ከተመረጠ
                      በኋላ በዻሳሳት ይሾማል ። ፍት ነገ 5 ። ረስጣ 2 ። ፓትርያርክ ያወገዘውን ዻዻስ አይፈታውም ። መንፈሳዊ ሥልጣኑ ከሁሉም በላይ ነውና። (ሲኖ 51) ፓትርያርክ በመላዋ ቤተ ክርስቲያን በጸሎት
                      ጊዜ ስሙ ይጠራል ። <br />

                      <h4 className="text-xl mt-4 mb--5">ኤዺስ ቆዾስ</h4>
                      ዻዻስ በአንድ ሀገረ ስብከት አባት ሆኖ የሚሾም ነው ። ሲያገለግል በነበረበት አካባቢ ባሉ ምዕመናን ጥቆማና ድምጽ በርዕሰ ሊቃነ ዻሳሳቱና በሲኖዶስ ፈቃድ ይሾማል። (ፍት ነገ 5 : አብጥ 2) በአንድ ዻ
                      ዻስ ብቻ አይሾምም። (ፍት ነገ 5 : ረስ 58 : ዲድ 34) ዻዻስ በሀገረ ስብከቱ በጸሎት ጊዜ ስሙ ይጠራል። (ፍት 5 : ክፍ 4)  አዲስ ጽላት ፣ አዲስ ቤተ ክርስቲያን ፣ ይባርካል ። ለቄስ ለዲያቆን ሥልጣነ
                      ክህነት ይሰጣል ። (1 ጢሞ 5 ፥ 2 : ፍት ነገ አን 5 ክፍ 4 ) <br />

                      <h4 className="text-xl mt-4 mb--5">ቀሳውስት</h4>
                      ቅስና የሚቀበሉት በዲቁና ክህነት በማገልገል ላይ ያሉ ሲሆኑ ፤ በሁለት መንገድ ይሾማሉ ። <br />
                      በምንኩስና የተወሰነ ያላገባ ጌታን እንዴት እንደሚያገለግል የጌታን ነገር ያስባል ( 1 ቆሮ 7 ፥ 32 ) በማለት ቅዱስ ዻውሎስ እንደተናገረ ፤ በምንኩስና ለመኖር የፈለገ አስቀድሞ ወደ ገዳም ሄዶ የምንኩስናን
                      ሕይወት መማርና አባቶችን እያገለገለ በተግባር ማየት አለበት ። በገዳም የሚሰጠውን አገልግሎት ከፈጸመ በኋላ ፤ አበምኔቱ ሲፈቅድለት ሥርዓተ ገዳሙ በሚያዝዘው መሠረት መዓርገ ምንኩስና ይቀበላል ።
                      (ይመነኩሳል)ከምንከስና በኋላ ለክህነት የሚያበቃውን ትምህርት ተምሮ በየደረጃው ያሉትን የሥልጣነ መዓርጋት። በድንግልና ከመነኮሰና በትም ሕርቱም ሆነ በግብረ ገብነቱ በቂ ሆኖ ከተገኘ እስከ መጨረሻው
                      የቤተ ክርስቲያን መዓርግ “ጵጵስና” ሊደርስ ይችላል ። <br />
                      በህግ የተወሰኑ ዲያቆናት በአንድ ህግ ከተወሰኑ ፤ በኋላ ለቅስና የሚያበቃ ትምህርትና ሥነ ምግባር ካላቸውና በሚያገለግ ሉበት አጥቢያ ሕዝብ ድምጽ ከተደገፉ ፤ ሊቀ ዻዻሱ ብቃታቸውን መዝኖ የቅስና
                      መዓርግ ይሰጣቸዋል። (ፍገ ፡ 6) <br />
                      ሰላሳ ዓመት ያልሆነው ቅስና አይሾምም ። ፍት ነገ ፡ 6 ። የቀሳውስት የአገልግሎት ድርሻ አስተምሮ ማጥመቅ ፤ ንስሐ መቀበልና መናዘዝ ፣ (ማሰርና መፍታት) ፤ ቀድሶ ማቁረብ ፤ ማስተማር…. ናቸው ። <br />
                      ካህን የመጀመሪያ ሚስቱ ከሞተችበት ፤ መነኩሴም ምንኩስናውን ከተወው በኋላ የቅስና (የክህነት) ሥራ መሥራት አይፈ ቀድለትም ። ከማኅበረ ምዕመናን ግን አይለይም ። <br />

                      <h4 className="text-xl mt-4 mb--5">ዲያቆናት</h4>
                      ዲያቆናት ካህናትን የሚራዱና የሚላላኩ ሲሆኑ ፤ በአገልግሎታቸው መሠረት የሚከተሉት ደረጃዎች አሏቸው <br />

                      <h4 className="text-xl mt-4 mb--5">ዲያቆን</h4>
                      አስቀድሞ ሃይማኖቱን የተረዳ ፣ በምዕመናን ዘንድ በግብረ ገብነቱ የታወቀና የተመሰከረለት ፣ ለዲቁና አገልግሎት የሚያበቃውን ትምህርት ጠንቅቆ የተማረ ፤ ሆኖ ሲገኝ በአንብሮተ ዕድ (እጅ በመጫን) ይሾማል ።
                      የተለየ ብቃትና ችሎታ ከሌለው በቀር ዕድሜው ከሃያ አምስት ዓመት በታች የሆነ ዲቁና አይሾምም ። ዲያቆን ከመጀመሪያ (ከህግ) ሚስቱ ከተፋታና ሌላ ካገባ ፣ ሃይማኖቱን ለውጦ በመናፍቃን ከተጠመቀ ፣
                      ከክህነቱ ይሻራል ። ፍት ነገ ፡ 7 ። ክፍል ፡ 5 ። ዲያቆናት መቅደስ ይገባሉ ፤ ነገር ግን መንበርና ታቦት ፣ (ከተለወጠ በኋላ) ሥጋውንና ደሙን በእጃቸው አይነኩም ። ዲያቆናት ለተልእኮ የሚፋጠኑ ፣ በትህትና
                      የሚላላኩ ፣ በኑሯቸው ለሌላው አርአያ መሆን ይገባቸዋል ። <br />

                      <h4 className="text-xl mt-4 mb--5">ንፍቀ ዲያቆን</h4>
                      የዲያቆን ረዳት ሲሆን ፤ መንፈሳዊ ሕይወቱ ፣ ግብረ ገብነቱና የሃይማኖቱ ጽናት በሚያገለግልበት አጥቢያ ካህናትና ምዕመናን የተመሠከረለት ። ፍት ነገ 8 ። ንፍቀ ዲያቆን በቃል ብቻ ይሾማል ፤ አንብሮተ ዕድ
                      “እጅ በማጫን” አይደረግለትም ። ፍ ነ 8 ክፍ 2 ። የዲያቆን ረዳት እንደመሆኑ መጠን በሥራው ሁሉ ያግዘዋል እንጅ ንዋየ ቅድሳት አይነካም ። ፍት ነገ 8 ። ዶክ 45 ፣ 46 ። ጥፋት ሠርቶ ከተገኘ ከክህነቱ
                      ይሻራል ። ፍት ነገ ፡ 8 ፡ ክፍል ፡ 4 ። <br />

                      <h4 className="text-xl mt-4 mb--5">አናጉንስጢስ</h4>
                      አገልግሎቱ በቤተ ክርስቲያን ውስጥ መጻሕፍት ማንበብ ሲሆን ፤ ትምህርቱና በግብረ ገብነቱ ከታየ በኋላ ተመ ርጦ ይሾማል ። ፍት ነገ 8 ክፍል1 ። አናጉንስጢስ አንብሮተ ዕድ አይደረግለትም በቃል ብቻ ይሾማል ።
                      ፍት ነገ 8 ፡ ክፍ ፡ 2 ። በአገልግሎት ጊዜ ዲያቆናት በቅዳሴ ሠዓት የሚለብሱትን ልብሰ ተክህኖ አይለብስም ። ፍት ነገ 8 ፡ ክፍ 3 ። አናጉንስጢስ ጥፋት ከተገኘበት ከሥራ ታግዶ ከዓመት በኋላ ይመለሳል ።
                      ከጥፋቱ ካልታረመ ከአገልግሎቱ ይሻራል ። ፍት 8 ክፍል 4 ። ሚስቱ ከሞተችበት ሌላ አግብቶ ማገልገል ይችላል ። ፍት ፡ 4 ፡ ክ ፡ 5 ። <br />

                      <h4 className="text-xl mt-4 mb--5">መዘምራን</h4>
                      በቡራኬ ይሾማሉ ። ፍ ነገ ፡ 8 ክፍ ፡ 2 ። ከመዝሙረ ዳዊት ፣ በሀገራችን የቅዱስ ያሬድን ዝማሬም ይዘምራሉ ። በሚዘምሩበት ጊዜ ልብሰ ተክህኖ አይለብሱም ። ፍት ገነ ፡ 8 ክፍ ፡ 3 ። መዘምራን ሚስታቸው
                      ከሞተችባቸው ሌላ ማግባት ይችላሉ ። ፍት ነገ ፡ 8 ክ ፡ 5 ። በሀገራችን መዘምራን ማለት የማኅሌት ትምህርት የተማሩትን ሲሆን ፤ እነዚህም ሥልጣነ ክህነት (ዲቁና ቅስና ፣ ከዚያም በላይ) ካላቸው በሁለቱም
                      (በማኅሌትም በክህነታቸውም) ማገልገል ይችላሉ ። <br />

                      <h4 className="text-xl mt-4 mb--5">አጻዌ ኆኅት</h4>
                      በቃል ብቻ ይሾማል አገልግሎቱ በር መክፈትና መዝጋት ሲሆን ልብሰ ተክህኖ አይለብስም ። ፍት ነገ 8 ፡ ክፍ ፡ 3 ። ሚስቱ ከሞተችበት ሌላ አግብቶ ማገልገል ይችላል ። ፍት ነገ ፡ 8 ፡ ክፍ ፡ 3 ። <br />

                      <h4 className="text-xl mt-4 mb--5">ሴቶች ዲያቆናውያት</h4>
                      በትዳር ተወስነው የኖሩ ፣ ልጆቻቸውን በሥርዓት ያሳደጉ ፣ በቅዱስ ቁርባን የተወሰኑ ፣ ለአገልግሎት የ ሚፋጠኑ ፣ 8 ዓመት የሆናቸው ፤ ዲያቆዊት ሆነው በቃል ይሾማሉ ። 1 ጢሞ 5 ፥ 9 ። ፍት ፡ ነ 8 ፡1 ። ዲድ 17 ።አገልግሎታቸው <br />
                      ከካህናቱ ወደ ሴቶች ይላላካሉ ፤ ሴቶች ክርስትና ሲነሱ ፤ ካህኑ እጃቸውን ይዞ ከአንገተችው በታች ቅብዓ ሜሮን ይቀባሉ ። <br />
                      አይባርኩም ፤ ቄስና ዲያቆን የሚሠራውን የክህነት ሥራ አይሠሩም በሴቶች በር ቆመው ይቆጣጠራሉ ። <br />
                      እንደ ዲያቆኑ ተንሥኡ ጸልዩ አይሉም ቅስና አይሾሙም ጉባዔ በጸሎት አይከፍቱም ። (ፍነ 8 ክፍ 1) <br />
                      እነዚህም ፤ ፈቃደ እግዚአብሔር ሆኖ ከሌላው ምዕመን ተለይተው እነሱ ወደ ቤተክርስቲያን ስለቀረቡ ፤ ምዕመናን በሥጋ ድካም ቢሳሳቱ ፤ ከሚያገለግሉት ጓደኞቻቸው መካከልም የተሳሳተ ወንድማቸው ቢኖር
                      ሊመክሩት ፤ ሊያጽናኑት ይገባል እንጅ ፤ የራሳቸውን ጽድቅ የወንድማቸውን ስህተት እያወሩ ፤ ለሚድኑት መሰናክል መሆን የለባቸውም። (ሉቃ 18 ፥ 9) <br />

                      <h3 className="text-xl font-semibold mt-6 mb-2">ምሥጢረ ቀንዲል</h3>
                      ቀንዲል (ቅብዓ ቅዱስ) በመጽሐፍ ቅዱስ ዘይት እተተባለ ይጠራል። የሚጋጀውም ከንጹህ ወይራ ዘይት ሲሆን ፤ ህሙማነ ሥጋና ህሙማነ ነፍስ እየተቀቡ የሚፈወሱበት የተቀደሰ ቅባት ነው ። <br />
                      በዚህም የተቀደሰ ቅባት በብሉይ ኪዳን ዘመን የነበሩ ሰዎች በሚታመሙ ጊዜ ፡ እየተቀቡ ይፈወሱበት ነበር ። ኢሳ 1 ፥ 6 ። ሉቃ 10 ፥ 34 ። <br />
                      በሐዲስ ኪዳንም ሐዋርያት ህሙማነ ሥጋንና ህሙማነ ነፍስን ቅብዓ ቅዱስ እየቀቡ ከነበረባቸው ደዌ ፈውሰዋቸዋል ። ማር 6 ፥ 13 ። በቀጣይም ፡ ምዕመናን በሚታመሙበት ጊዜ ፤ ካህናት እንዲጸልዩላቸውና
                      ቅብዓ ቅዱስ ቀብተው እንዲፈውሷቸው ታዝዘዋል። (ያዕ 5 ፥ 14) <br />

                      <h4 className="text-xl mt-4 mb--5">የቅብዓ ቅዱስ ጥቅም</h4>
                      ቅብዓ ቅዱስ በማንኛውም ዓይነት በሽታ በተለይ በቁስል ለተመቱና ጆሯቸው ለታመመባቸው ሰዎች ፤ እንዲሁም ደዌ ነፍስ ላደረባቸውና ረድኤተ እግዚአብሔር አጋዥ እንዲሆናቸው ፣ ከኃጢአታቸውም እንዲነጹ
                      የፈለጉ ምዕመናን ፤ ካህኑ ጸሎተ ቀንዲል ጸልዮ በሚቀባቸው ጊዜ ከነበረባቸው የሥጋና በሽታና የነፍስ ደዌ (ኃጢአት) ይፈወሳሉ ። ነገር ግን በሚቀቡበት ጊዜ እግዚአብሔር በዚህ የተቀደሰ (ዘይት) ቅብዓ ቅዱስ
                      ላይ አድሮ ካደረባቸው ደዌ ፡እንደሚያድናቸው በፍጹም ልባቸው ማመን አለባቸው ። <br />
                      ቅብዓ ቅዱስ የሚቀቡ ፤ አምነው የተጠመቁ ክርስቲያኖች ሲሆኑ ፤ ከመቀበቀታቸው በፊት ንስሐ መግባትና ራሳቸውን መቀደስ አለባቸው ። ሥርዓቱ የሚፈጸመው በካህናት ሲሆን ፤ በመጀመሪያ ጸሎቱ ቤተ
                      ክርስቲያን ወይም ታማሚው በተኛበት ቦታ ዙሪያ ፡ ያም ባይሆን በካህኑ ጸሎት ቤት ከተጸለየበት በኋላ የታመመው (የቆሰለው) ቦታ ላይ ይቀባል ። <br /> <br />

                      <a href="ምንጭ፥ https://kidanemihiret.org/sermon-topic/%E1%88%B0%E1%89%A3%E1%89%B1-%E1%88%9D%E1%88%B5%E1%8C%A2%E1%88%AB%E1%89%B0-%E1%89%A4%E1%89%B0%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/">
                        ምንጭ፥ https://kidanemihiret.org/sermon-topic
                      </a>

                    </p>
                  </>

                )}

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>

              </div>
            )}
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Book className="mr-2 text-blue-600" />
              {language === "en" ? "Church Calendar" : "መጽሐፍ ቅዱስ በቤተ ክርስቲያን ዐይን"}
            </h2>

            {language === "en" ? (
              <div className="space-y-4">
                <p>
                  We follow the Ethiopian Orthodox calendar, which includes unique fasting periods and feast days that
                  are central to our spiritual life. The Ethiopian calendar is based on the ancient Coptic calendar and
                  is approximately seven to eight years behind the Gregorian calendar.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">Major Feasts</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Timket (Epiphany)</li>
                      <li>Fasika (Easter)</li>
                      <li>Meskel (Finding of the True Cross)</li>
                      <li>Genna (Christmas)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">Fasting Periods</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Great Lent (55 days)</li>
                      <li>Fast of the Apostles</li>
                      <li>Fast of the Assumption</li>
                      <li>Advent Fast</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">Weekly Observance</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Wednesday (Betrayal of Christ)</li>
                      <li>Friday (Crucifixion)</li>
                      <li>Sunday (Resurrection)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">Saints' Days</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>St. Mary (21st of each month)</li>
                      <li>St. Michael (12th of each month)</li>
                      <li>St. Gabriel (19th of each month)</li>
                      <li>St. George (23rd of each month)</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6">
                  Christian monastic life in Ethiopia began to flourish after Christianity became the national religion
                  and was accepted by the kings. The Nine Saints who came to the country in 479 AD spread the monastic
                  system of the Egyptian St. Anthony.
                </p>
                <p>
                  This is why the period from the 4th to the 7th century is known as the golden age. During these
                  periods, many evangelical preaching works were expanded, and various spiritual works and writings were
                  carried out. Just as monasteries in Europe helped spread and preserve Western culture in the Middle
                  Ages, monasteries of the Ethiopian Orthodox Tewahedo Church served as centers of knowledge and
                  civilization, developing literature, architecture, poetry, music, hymns, and spiritual teachings. In
                  the 5th century, the well-known church scholar St. Yared created liturgical music, hymns, and melodies
                  based on the Bible, contributing to the church, which now makes it the only church in the world that
                  uses this highly ear-pleasing system of praise and prayer.
                </p>
              </div>
            ) : (
              <div className="space-y-4">

                <div className="overflow-x-auto my-6 flex justify-center my-6">
                  <table className="min-w-[600px] border border-black text-center">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black px-4 py-2" rowSpan={2}>የመጻህፍቱ አይነት</td>
                        <td className="border border-black px-4 py-2" colSpan={4}>የመጻህፍቱ ይዘት</td>

                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">የህግ</td>
                        <td className="border border-black px-4 py-2">የታሪክ</td>
                        <td className="border border-black px-4 py-2">የጥበብ</td>
                        <td className="border border-black px-4 py-2">የትንቢት</td>
                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">አስራዉ</td>
                        <td className="border border-black px-4 py-2">ብሐሄረ ኦሪት</td>
                        <td className="border border-black px-4 py-2">መጽሃፈ ሳሙኤል</td>
                        <td className="border border-black px-4 py-2">መዝሙረ ዳዊት</td>
                        <td className="border border-black px-4 py-2">ትንቢተ ኢሳያስ</td>
                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">አዋልድ</td>
                        <td className="border border-black px-4 py-2">ፍትሃ ነገስት</td>
                        <td className="border border-black px-4 py-2">ተአምረ ማርያም</td>
                        <td className="border border-black px-4 py-2">ዉዳሴ ማርያም</td>
                        <td className="border border-black px-4 py-2">ፍካሬ ኢየሱስ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  ቅድስት ቤተ ክርስቲያን በሐዋርያትና በነቢያት መሠረት ላይ የታነፀች፣ ከሁሉ በላይ የሆነች አንዲትና ቅድስት አካለ ክርስቶስ ናት (ኤፌ. ፩፥፳፪፤ ኤፌ. ፪፥፳)፡፡ ‹‹ከሁሉ በላይ የሆነች››
                  የሚለው ሐረግ ሰማያዊ ሥልጣኗን እና ልዕልናዋን የሚገልጽ ነው፡፡ ይህም ማለት የትኛውም ቅዱስ መጽሐፍ ወይም ንዋይ በእርሷ ውስጥ ይሆናል እንጂ ከበላይዋ ሊሆን አይችልም ማለት ነው፡፡
                  መጽሐፍ ቅዱስም እግዚአብሔር ለቤተ ክርስቲያን የገለጸውን እውነት የያዘ እንጂ ከቤተ ክርስቲያን በላይ አይደለም፡፡ ምክንያቱም ቤተ ክርስቲያን የክርስቶስ አካል ስለሆነች ከክርስቶስ አካልነት
                  በላይ የሆነ ስለሌለ ነው፡፡ ከቤተ ክርስቲያን በላይ ያለ የቤተ ክርስቲያን ራስ ክርስቶስ ብቻ ነው (ቆላ. ፩፥፲፰)፡፡ መጽሐፍ ቅዱስ የመጻሕፍት ሁሉ ራስ ሲሆን ቤተ ክርስቲያን
                  ደግሞ የመጽሐፍ ባለቤት ናት፡፡
                </p>
                <p>
                  መጽሐፍ ቅዱስ በሰዎች ቋንቋ የተጻፈ የእግዚአብሔር ቃል ነው፡፡ የተጻፈውም በመንፈስ ቅዱስ ምሪት ነው፡፡ ጸሓፊዎቹ ደግሞ የቤተ ክርስቲያን አባቶች ናቸው፡፡ በቅድስናቸው ለእግዚአብሔር
                  ቅሩባን ስለሆኑ የእግዚአብሔር ቃል ለሚላክላቸው አብያተ ክርስቲያናት በሚገባቸው ቋንቋ ጽፈዋል፡፡ መጻፋቸውም የእነርሱን ክብር ለመግለጽና ቤተ ክርስቲያን የምትመራበትን ሕግ ለመደንገግ
                  ሳይሆን ቤተ ክረስቲያን የምታምነውን እምነት ለመመስከርና በመንፈሳዊ ሕይወት ውጣ ውረድ ውስጥ ያሉ ምእመናን እንዲመከሩበት፣ እንዲገሠጹበት፣ ልባቸውን እንዲያቀኑበት ነው፡፡ ስለዚህ
                  መጽሐፍ ቅዱስ እግዚአብሔር ለቤተ ክርስቲያን የገለጠውን እውነትና ቤተ ክርስቲያን ስለ እግዚአብሔር የምታምነውን እምነት የያዘ እንጂ የቤተ ክርስቲያን ሥርዓት ተሰፍሮና ተቈጠይሮ ሁሉ
                  ነገር የተካተተበት ማለት አለመሆኑን መረዳት ይገባል፡፡
                </p>
                <p>
                  ቤተ ክርስቲያን በማየት፣ በማድረግ፣ በቃል የሚተላለፍ ብዙ ሀብት አላት፡፡ እንዲያውም የተጻፈው በጣም ጥቂቱ ነው፡፡ ሆኖም በአንዳንድ የእምነት ድርጅቶች ዘንድ ነገረ ቤተ ክርስቲያንን
                  በሙሉ ጠቅልሎ በመጽሐፍ ሥር የማድረግ የተሳሳተ አካሔድ አለ፡፡ ይህም በሉተራውያን ዘንድ “Sola Scriptura” ወይም “Only Bible” (መጽሐፍ ቅዱስ ብቻ) ተብሎ የሚታወቀው
                  ሲሆን ያልተጻፈው ቅዱስ ትውፊትም ሆነ መጽሐፍ ቅዱስ የማይደግፈው ግለሰባዊ አሳብ እንጂ የቤተ ክርስቲያን ትምህርት አይደለም፡፡ የዚህ ጽሑፍ ዓላማ ቤተ ክርስቲያን ቅዱሳት መጻሕፍትን
                  የምትቀበልበትን ሃይማኖታዊ እይታ በግልጽ ማሳየት ነው፡፡
                </p>

                የቅዱሳት መጻሕፍት ጥንተ ታሪክ
                <p>
                  ፈጣሬ ኵሉ ዓለም እግዚአብሔር ከፈጠራቸው ፍጥረታት ሁሉ እጅግ አክብሮ የፈጠረው የሰው ልጅን ነው፡፡ ሊቃውንተ ቤተ ክርስቲያን ይህን ክብሩን ሲገልጹ ሰውን “የፍጥረታት አክሊል –
                  The Crown of Creation” ብለው ይጠሩታል፡፡ የፍጥረታት አክሊልነቱም በእግዚአብሔር አርአያና ምሳሌ መፈጠሩ፣ ፍጥረታትን ሁሉ ከእግዚአብሔር በታች እንዲገዛ በፍጥረታት ላይ
                  መሠልጠኑ ነው፡፡ እግዚአብሔር “ሥሉጥ በላዕለ ኵሉ ፍጥረት፤ በፍጥረት ሁሉ ላይ የሠለጠነ (ሥልጣን ያለው)” እንደሆነ ሁሉ ሰውንም በጸጋ “ሥሉጥ በላዕለ ኵሉ ምድር፤ በምድር ሁሉ
                  ላይ የሠለጠነ (ሥልጣን ያለው)” አድርጎታል፡፡ በጥንተ ተፈጥሮው የሰው ልጅ መጻሕፍትም ሆኑ መምህራን የማያስፈልጉት ዐዋቂ ፍጥረት ነበር፡፡ እንደ አባ ማቴዎስ በአእምሮ ጠባይዕ፣ እንደ
                  አብርሃምና እንደ ሙሴ ጸሊም በሥነ ፍጥረት ተመራምሮ የሚያውቅ ማለት ነው (ትርጓሜ ወንጌለ ዮሐንስ)፡፡ በለባዊ አእምሮው ሥነ ፍጥረትን አንብቦና መርምሮ ረቂቁን እውነት የሚረዳ
                  ከሃሊ ዘበጸጋ ነበር፡፡ የሰው የመጀመሪያ መጽሐፍም ሥነ ፍጥረት ነው፡፡ ለሰው የመጀመሪያ እውነተኛ መምህሩ መምህረ ኵሉ ዓለም እግዚአብሔር ነው፡፡
                </p>
                <p>
                  እግዚአብሔር ለአዳም ትእዛዛቱን አስተማረው፡፡ ከመጀመሪያ ትምህርቶቹም ዋናው “ከገነት ዛፍ ሁሉ ትበላለህ፤ ነገር ግን መልካምንና ክፉን ከሚያስታውቀው ዛፍ አትብላ ከእርሱ በበላህ ቀን
                  ሞትን ትሞታለህና” (ዘፍ. ፪፥፲፮-፲፯) የሚለው ነበር፡፡ አዳም ግን እውነተኛ መምህሩን ትቶ የክፉ ፍጡር ትምህርትን ተማረ፤ “ሞትን አትሞቱም፤ ከእርስዋ በበላችሁ ቀን ዓይኖቻችሁ እንዲከፈቱ
                  እንደ እግዚአብሔርም መልካምንና ክፉን የምታውቁ እንድትሆኑ እግዚአብሔር ስለሚያውቅ ነው እንጂ” (ዘፍ. ፫፥፬-፭) ብሎ ሰይጣን የነገረውን ሰማ፡፡ ተማሪው ከሁለቱ ትምህርቶች ሁለተኛውን
                  መረጠና በፈተና ወደቀ፡፡ የመጀመሪያ መምህሩን ትምህርት ይረዳም ዘንድ ከዚያ በኋላ ብቁ ልቡና አልነበረውም፡፡ ወደ ታላቁ መምህር ለመመለስ ሌሎች መምህራን እንዲደግፉት ግድ ሆነ፡፡
                </p>
                {isExpanded2 && (
                  <>
                    <p>
                      ክፉው መምህር ካሳታቸው በኋላ አዳምና ሔዋን ያልተጻፈውን ፊደል አዩ፣ ያልተከተበውን አነበቡ፡፡ “ሴቲቱም ዛፉ ለመብላት ያማረ እንደ ሆነ፥ ለዓይንም እንደሚያስጎመጅ፥ ለጥበብም መልካም
                      እንደ ሆነ አየች” (ዘፍ. ፫፥፮) እንዲል፡፡ ከዚህም በኋላ ፍጥረታትን የሚያነቡ ሳይሆኑ ፍጥረታት የሚያስደነግጡአቸው ድንጉጦች ሆኑ፡፡ እግዚአብሔር ካደላቸው ከንጽሐ ጠባይ ደረጃ ስለወደቁና
                      ወደ ቀደመ ክሂሎታቸው መመለስ ስላልቻሉ በሰውኛ ፊደል የተጻፉ መጻሕፍትን በማንበብ መመርኮዝ ግድ ሆነባቸው፡፡ የሰው ልጅ ፍጡር ባልሆነ ብርሃን ረቂቁንና የማይታየውን ዓለም ከማየት
                      እና በማየት ከሚገኘው ዕውቀት ከመስማት ወደሚገኘውና ውስን ወደሆነው ዕውቀት በመውረዱ ምክንያት መጽሐፍ አስፈለገው፡፡ ስለዚህ መጻሕፍት የሰው የባሕርዩ መምህራን አይደሉም፡፡
                      ከውድቀቱ በኋላ የተሰጡት ደጋፊዎች እንጂ፡፡ ይህንም የቤተ ክርስቲያን መምህራን በሚከተለው ምሳሌ ይገልጹታል፤
                    </p>
                    <p>
                      ሰው የሚራመደው በሁለት እግሩ ነው፡፡ እግሩን ሲታመም ወይም ሲያረጅ በሁለት እግሩ መራመድ ስለሚያቅተው ምርኩዝ ይይዛል፡፡ ልክ እንደዚሁ ሰው በቅድመ ተፈጥሮው በራሱ መቆምና
                      መራመድ የሚችል ነበር፡፡ ነገር ግን በኃጢአት ካረጀና ከታመመ በኋላ መቆምም መራመድም ይችል ዘንድ መጻሕፍትና መምህራን ምርኩዝ እንዲሆኑት ተሰጡት፡፡ ቅዱስ ዮሐንስ አፈወርቅ በማቴዎስ
                      ወንጌል ትርጓሜው ይህን ይበልጥ ሲያብራራልን “በቀለም ከተቀረፁ የመጻሕፍት ቃላት ይልቅ በልቡናችን ያደረ የመንፈስ ቅዱስ ጸጋ ይመራን ዘንድ እጅግ ንጹሕ ሕይወት ሊኖረን እንጂ የተጻፈ ነገር
                      ሊያስፈልገን አይገባም ነበር” ብሏል፡፡ ይህን ካለ በኋላ ግን መጻሕፍትን በጥንቃቄ መያዝ እንደሚገባን ሲያስተምረን “ይህን ጸጋ ከእኛ እንዲርቅ አድርገናል፡፡ እንግዲህ ሁለተኛውን ታላቅ ስጦታ
                      (መጻሕፍትን) አጥብቀን እንያዝ” ብሏል፡፡ ይህ ሁሉ ቅዱሳት መጻሕፍት ከጊዜ በኋላ አስፈላጊ በመሆናቸው የተሰጡ እንጂ ሁሉ ነገር ከእነርሱ የጀመረ አለመሆኑን የሚያስረዳ  ነው፡፡
                    </p>

                    ወንጌል ከተጻፈውም በላይና የቀደመች እንደሆነች
                    <p>
                      ብዙ ጊዜ ወንጌል ስንል አራቱ የወንጌላውያን መጻሕፍት ብቻ ቀድመው ይታሰቡን ይሆናል፡፡ አንዳንድ “መጽሐፍ ቅዱስ ብቻ” የሚሉ የእምነት ድርጅቶች እንደሚሉትም የተጻፈው ብቻ ወንጌል
                      የሚመስለንም እንኖር ይሆናል፡፡ የተጻፈውም ሆነ ያልተጻፈው ቅዱስ ትውፊት ግን ወንጌል በጽሑፍ ብቻ የተገደበ እንዳልሆነ ያስተምረናል፡፡ ቅዱስ ጳውሎስ “ወንድሞች ሆይ፥ የሰበክሁላችሁን ደግሞም
                      የተቀበላችሁትን በእርሱም ደግሞ የቆማችሁበትን በእርሱም ደግሞ የምትድኑበትን ወንጌል አሳስባችኋለሁ፤” ሲል አራቱ ወንጌላት ተጠቃለው አልተጻፉም ነበር (፩ኛ ቆሮ. ፲፭፥፩)፡፡ ጌታችንና
                      መድኃኒታችን ኢየሱስ ክርስቶስ “እውነት እላችኋለሁ፥ ይህ ወንጌል በዓለም ሁሉ በማናቸውም ስፍራ በሚሰበክበት እርስዋ ያደረገችው ደግሞ ለእርስዋ መታሰቢያ እንዲሆን ይነገራል” ብሎ ስለ
                      ማርያም እንተ ዕፍረት በመሰከረ ጊዜ ማቴዎስም፣ ማርቆስም፣ ሉቃስም፣ ዮሐንስም ገና ወንጌልን አልጻፉም ነበር (ማቴ. ፳፮፥፲፫)፡፡ ይህ ቃል በተነገረ ጊዜ እንኳን ወንጌልን ሊጽፉ እምነታቸውም
                      የተሟላ አልነበረም፡፡ ይህም በመከራው ጊዜ ከዮሐንስ በስተቀር ሁሉም በመሸሻቸው ተገልጧል፡፡ ስለዚህ ጌታ “ይህ ወንጌል” ሲል የተጻፈውን ብቻ የምናስብ ከሆነ ስሕተት መሆኑን ልብ ይሏል።
                    </p>
                    <p>
                      ወንጌል በቃልም፣ በመጽሐፍም፣ በሕይወትም የምትሰበክና የተሰበከች እንጂ በመጻሕፍት ተጠቃላና ተካትታ የተቀመጠች ብቻ አድርጎ ማሰብ ስሕተት ነው፡፡ ሐዋርያት በቃልም በመጽሐፍም ሰብከዋል፡፡
                      ቅዱስ ጳውሎስ ደግሞ በሕይወቱ ባገኘው መገለጥ ተሰብኳል (ሐዋ. ፱)፡፡ እንዲያውም የቅዱሳት መጻሕፍት ጸሐፍያን በጽሑፍ የተሰበከው ጥቂት መሆኑንና በቃል ብዙዎች እንደተሰበኩ ገልጸዋል፡፡
                      ቅዱስ ዮሐንስ ወንጌሉን ጽፎ ሲያጠቃልል “ኢየሱስም ያደረገው ብዙ ሌላ ነገር ደግሞ አለ፤ ሁሉ በእያንዳንዱ ቢጻፍ ለተጻፉት መጻሕፍት ዓለም ራሱ ባልበቃቸውም ይመስለኛል” (ዮሐ. ፳፩፥፳፭)
                      የሚለው ሁሉ ነገር አለመጻፉን ያስረዳል፡፡ ስለዚህ ከተጻፉት በላይ ቤተ ክርስቲያን በትውፊት ያቆየችልን ብዙ ነገር መኖሩን መረዳት ተገቢ ነው።
                    </p>
                    <p>
                      ቅዱስ ሉቃስም ገና ወንጌሉን መጻፍ ሲጀምር ለሚጽፍለት ቴዎፍሎስ ለተባለው ሰው “የከበርህ ቴዎፍሎስ ሆይ፥ ከመጀመሪያው በዓይን ያዩትና የቃሉ አገልጋዮች የሆኑት እንዳስተላለፉልን፥ በኛ ዘንድ
                      ስለ ተፈጸመው ነገር ብዙዎች ታሪክን በየተራው ለማዘጋጀት ስለ ሞከሩ፥ እኔ ደግሞ ስለ ተማርከው ቃል እርግጡን እንድታውቅ በጥንቃቄ ሁሉን ከመጀመሪያው ተከትዬ በየተራው ልጽፍልህ መልካም
                      ሆኖ ታየኝ” (ሉቃ. ፩፥፩-፬) ብሏል፡፡ ይህ በዓይን ያዩ፣ ወንጌልን ሳይጽፉ በቃል ወይም በሌሎች መጻሕፍት ያስተማሩና ለነቅዱስ ሉቃስም ያስተላለፉ መኖራቸውን በቅድሚያ ሲያስረዳ ወንጌሉ የተጻፈለት
                      ቴዎፍሎስ እንኳን አስቀድሞ በቃል መማሩንም የሚያሳይ ነው፡፡ ቅዱስ ሉቃስም እርግጡን ያውቅ ዘንድ ወይም ያረጋግጥ ዘንድ ጻፈለት እንጂ ከዚያ በፊት ያልተማረ ስላልነበር ለማስተማርና ለማሳወቅ
                      የጻፈለት አይደለም፡፡
                    </p>

                    ከመጽሐፍ ቅዱስና ከቅድስት ቤተ ክርስቲያን የቱ ይቀድማል?
                    <p>
                      ቤተ ክርስቲያን ከመጽሐፍ ቅዱስ በፊት የነበረችና መጽሐፍ ቅዱስን የጻፈች፣ ከእግዚአብሔር የተቀበለችውን በመጽሐፍ የተቀመጠውን እውነት ጠብቃ ያስተላለፈች የእግዚአብሔር መንግሥት ናት፡፡
                      መጽሐፍ ቅዱስ የተጻፈው በቤተ ክርስቲያን ለቤተ ክርስቲያን ነው፡፡ ከተጻፉት መጻሕፍትም ውስጥ አምላካውያት የሆኑትን በቀኖና ለይታና ቀድሳ ለምእመናን የሕይወት ምግብነት የሰጠች መሆኗን
                      መገንዘብ ተገቢ ነው፡፡ ስለዚህ ቤተ ክርስቲያን ከመጽሐፍ ቅዱስ ትቀድማለች፤ መጽሐፍ ቅዱስ የእግዚአብሔር ቃል ለመሆኑም ምስክሯ ቤተ ክርስቲያን ናት፡፡ መጽሐፍ ቅዱስ ቤተ ክርስቲያን በመንፈስ
                      ቅዱስ ምሪት የጻፈችውና የምትተረጉመው እንጂ ቤተ ክርስቲያንን ያስገኘ አይደለም፡፡ መጽሐፍ ቅዱስ ለአዋልድ መጻሕፍት ወላጃቸው ነው፡፡ ይህንም በብዙ ማስረጃና አመክንዮ እንደሚከተለው እናያለን፤
                    </p>

                    ፩. መጽሐፍ ቅዱስ ራሱ የቤተ ክርስቲያንን ቀዳሚነት ይመሰክራል <br />
                    <p>የሚከተሉት ጥቅሶች ቅዱሳት መጻሕፍቱ ከመጻፋቸው በፊት ቤተ ክርስቲያን እንደነበረች በደንብ ያስረዳሉ፤</p>
                    <p>“በቆሮንቶስ ላለች ለእግዚአብሔር ቤተ ክርስቲያን፥ በክርስቶስ ኢየሱስ ለተቀደሱት፥ የእነርሱና የእኛ ጌታ የሆነውን የጌታችንን የኢየሱስ ክርስቶስን ስም በየስፍራው ከሚጠሩት ሁሉ ጋር ቅዱሳን
                      ለመሆን ለተጠሩት” (፩ኛ ቆሮ. ፩፥፪)፡፡</p>
                    <p>
                      አንድ መልእክት (ደብዳቤ) ሲጻፍ ሦስት አካላት መኖራቸውን መረዳት ተገቢ ነው – ላኪው፣ መልእክቱና ተቀባዩ፡፡ ላኪውና ተቀባዩ በሌሉበት መልእክቱ ሊጻፍ አይችልም፡፡ የመልእክቱ ላኪ ቅዱስ
                      ጳውሎስ ነው፡፡ ተቀባይዋ ደግሞ በቆሮንቶስ አገር ያለች የእግዚአብሔር ቤተ ክርስቲያን ናት፡፡ ከመልእክቱ ላኪውና ተቀባዩ የሚቀድሙ ከሆነ መልእክቱን ለመቀበል ቅዱስ ጳውሎስንና ቤተ ክርስቲያንን
                      በቅድምና መቀበል ያስፈልጋል ማለት ነው፡፡ ይህን ሲያስረዳ ቅዱስ ጳውሎስ ገና መልእክቱን ለመጻፍ ሲጀምርና ለማን እንደሚጽፍ ሲገልጽ “በቆሮንቶስ ላለች ለእግዚአብሔር ቤተ ክርስቲያን” ማለቱ
                      እርሱ መልእክቱን ከመጻፉ በፊት የቆሮንቶስ ቤተ ክርስቲያን እንደነበረች የሚያሳይ ነው፡፡ ቤተ ክርስቲያኗ ቀድማ መኖሯ ብቻ ሳይሆን ሰዎችን ስትቀድስም ነበር፡፡ በሌላ አገላለጽ ሰዎችን ለመቀደስ
                      የግድ መጽሐፍ ቅዱስ ወይም ቅዱስ ጳውሎስ ለቆሮንቶስ ሰዎች የጻፈው መልእክት አላስፈለጋትም ነበር፡፡ ይህም ይታወቅ ዘንድ የመልእክቱ ባለቤት “በክርስቶስ ኢየሱስ ለተቀደሱት” በማለት ገለጸ፡፡
                      ይህን የመሰሉና ተመሳሳይ እውነትን የሚመሰክሩ ብዙ ጥቅሶችን ማንሣት ይቻላል።
                    </p>
                    <p>“በእግዚአብሔር ፈቃድ የኢየሱስ ክርስቶስ ሐዋርያ የሆነ ጳውሎስ ወንድሙም ጢሞቴዎስ፥ በአካይያ አገር ሁሉ ከሚኖሩ ቅዱሳን ሁሉ ጋር በቆሮንቶስ ላለች ለእግዚአብሔር ቤተ ክርስቲያን፤” (፪ኛ ቆሮ. ፩፥፩)፡፡</p>
                    <p>“በኢየሱስ ክርስቶስ ከሙታንም ባነሣው በእግዚአብሔር አብ ሐዋርያ የሆነ እንጂ ከሰዎች ወይም በሰው ያልሆነ ጳውሎስ ከእኔም ጋር ያሉት ወንድሞች ሁሉ፥ ወደ ገላትያ አብያተ ክርስቲያናት፤” (ገላ. ፩፥፩)፡፡</p>
                    <p>“ጳውሎስና ስልዋኖስ ጢሞቴዎስም፥ በእግዚአብሔር አብ በጌታ በኢየሱስ ክርስቶስም ወደምትሆን ወደ ተሰሎንቄ ሰዎች ቤተ ክርስቲያን፤” (፩ኛ ተሰ. ፩፥፩)፡፡</p>
                    <p>
                      “እንዲሁም የምታየውን በመጽሐፍ ጽፈሕ ወደ ኤፌሶንና ወደ ሰምርኔስ ወደ ጴርጋሞንም ወደ ትያጥሮንም ወደ ሰርዴስም ወደ ፊልድልፍያም ወደ ሎዶቅያም በእስያ ወዳሉት ወደ ሰባቱ አብያተ
                      ክርስቲያናት ላክ አለኝ” (ራእ. ፩፥፲፩)፡፡ ባለራእዩ ቅዱስ ዮሐንስም በተመሳሳይ ራእዩን ካየ በኋላ ለሰባቱ አብያተ ክርስቲያናት እንዲጽፍ ተገለጸለት፡፡ ይህም ከመጽሐፉ በፊት አብያተ ክርስቲያናቱ
                      እንደነበሩ የሚያስረዳ ነው፡፡ ዮሐንስም ራእዩን በማየት ይከብር ዘንድ መጽሐፍ አላስፈለገውም ነበር፡፡
                    </p>

                    ፪. አመክንዮአዊ ማረጋገጫ
                    <p>
                      ከመጻሕፍት ሁሉ ቀድሞ የተጻፈው መጽሐፈ ሄኖክ ነው፡፡ መጽሐፈ ሄኖክ ከመጻፉ በፊት ሰው ከአንድ ሺሕ ዓመት በላይ ያለ መጽሐፍ ኖሯል፡፡ መጽሐፈ ኢዮብና አምስቱ የኦሪት መጻሕፍት ከዚያ
                      በመቀጠል ተጻፉ፡፡ የነቢያት መጻሕፍት ሺሕ ዓመታት ዘግይተው ክርስቶስ ሊወለድ በመቶዎች የሚቈጠሩ ዓመታት ሲቀሩት ተጻፉ፡፡ በሐዲስ ኪዳንም ለመጀመሪያዎቹ ዐርባ ዓመታት መጻሕፍት
                      አልተጻፉም፡፡ ከዚያ በኋላም የማቴዎስ ወንጌልንና የያዕቆብ መልእክትን የመሰሉት ቀድመው ተጻፉ እንጂ አብዛኞቹ የተጻፉት እስከ ፸ ዓ.ም. ድረስ ቆይተው ነው፡፡ የሐዲሳት መጻሕፍት የተጻፉት
                      ደግሞ በመጀመሪያው ምዕተ ዓመት መገባደጃ ነበር፡፡ ይህም የሚያስገነዝበው፡-
                    </p>
                    <p>
                      ሀ. ለጽድቅና ለድኅነት የሚያስፈልገው መጽሐፍ ቅዱስ ብቻ ቢሆን ኖሮ መጽሐፉ በአንዴ አልቆና ተጠቃሎ ከአዳም ጀምሮ ላሉት ሁሉ ካለመድሎ መሰጠት አልነበረበትምን? መጽሐፍ ያልተሰጣቸውስ
                      “እኛ በኃጢአት የወደቅነው መጽሐፍ ቅዱስ ስላልነበረን ነው” ብለው ምክንያት እንዲያቀርቡ ዕድል አይፈጥርላቸውም ነበርን? አምልኮን በመጽሐፍ ቅዱስ ብቻ የምንገድበው ከሆነ ለሁሉም ሁሉንም
                      መጻሕፍትን ባለ መስጠቱ የእግዚአብሔር ፈታሒነት ላይ ጥያቄ አያስነሣም ነበርን?
                    </p>
                    <p>
                      ለ. በጥንቱ ዘመን መጻሕፍት ለየተጻፉላቸው ሰዎች በጥቅል (Scroll) መልክ ይገኙ ነበር እንጂ አሁን እንዳለው ሁሉም በአንድነት ተጠርዘው በአንድ ሰው እጅ ማግኘት አይቻልም ነበር፡፡ መጽሐፍ
                      ቅዱስ አሁን ባለው መልኩ ተሰብስቦ በአንድነት መገኘት የቻለው የማተሚያ ማሽን ከተሠራና በወረቀት ማተም ከተጀመረ በኋላ ነው፡፡ ምዕራፍና ቊጥር ወጥቶለት ለንባብ አመቺ የሆነው ደግሞ
                      ከዐሥራ ስድስተኛው ክፍለ ዘመን በኋላ ነው፡፡ በጥንቱ ዘመን እያንዳንዱ መጽሐፍ በየቦታው በጥቂት መጠን ብቻ ይገኝ ነበር፡፡ የሮሜ መልእክት የሚገኘው ሮማውያን ዘንድ፣ የቆሮንቶስ መልእክት
                      ከቆሮንቶስ ሰዎች ዘንድ … ወዘተ እንጂ እንደዚህኛው ዘመን በአንድ ጊዜ ተባዝተው ሁሉም ዘንድ የሚገኙ አልነበረም፡፡ ለዐራት ሺሕ ዓመታት ያክል የተጻፉትን እነዚህን ቅዱሳት መጻሕፍት ከሐሰተኞቹ
                      ለይታና በቀኖና ወስና “እነዚህን ተጠቀሙ” ያለችው ቤተ ክርስቲያን አይደለችምን?
                    </p>
                    <p>
                      ቤተ ክርስቲያን ይህን ባታደርግ እኛም ከመጽሐፍ ቅዱስ ፈጽሞ የማንገናኝ በሆንን ነበር፡፡ ወንጌላትን በጊዜው ብዙዎችን ያስቱ ከነበሩት “የይሁዳ ወንጌል”፣ “የበርናባስ ወንጌል” ከተባሉትና እነዚህን
                      ከመሰሉት እንዲሁም “የማቴዎስ፣ የማርቆስ ወንጌል” ተብለው ብዙ ሐሰት ከተጨመሩባቸው ለይታ “መጻሕፍተ ወንጌላት ዐራቱ ብቻ ናቸው” ባትለን ኖሮ በብዙ ጥፋት ውስጥ የምንሆን አልነበርንምን?
                      እርሷ በቀኖና ሰፍራ ቈጥራ የሰጠችውን መጽሐፍ ተቀብሎ ሰጪዋን ቤተ ክርስቲያንን አልቀበልም ማለትስ ስሕተት አይደለምን? በተመሳሳይ መልኩ ቀኖናን ሠርታ አዋልድ መጻሕፍትን ስትሰጥ አለመቀበልስ
                      አለማወቅ አይደለምን?
                    </p>
                    <p>
                      ሐ. የቤተ ክርስቲያንን ከሁሉ በላይ መሆንና ፍጹም የሆነ ሥልጣኗን የምናውቅ አሥራው መጻፍት ተብለው የሚታወቁት መጻሕፍትን ሰብስቦ ሰማንያ አንድ ብቻ ናቸው ብሎ ማን ነገራችሁ? ብንባል
                      “ቤተ ክርስቲያን” እንላለን፡፡ “መጽሐፍ ቅዱስ ብቻ” የሚሉት ወገኖች ግን “መጽሐፍ ቅዱስን ‘ስልሳ ስድስት’ ያላችሁ ማነው” ቢባሉ ማን ይሉ ይሆን? እንቀበላቸዋለን የሚሏቸው “ስልሳ ስድስትቱ
                      መጻሕፍት” ራሳቸው “ስልሳ ስድስት ብቻ” ወይም “መጽሐፍ ቅዱስ ብቻ” አይሉምና።
                    </p>

                    ፫. መጽሐፍ ቅዱስ ሁሉንም ነገር ጠቅልሎ አለመያዙን ያስረዳል
                    <p>
                      ወንጌላዊው ቅዱስ ዮሐንስ “ኢየሱስም በዚህ መጽሐፍ ያልተጻፈ ሌላ ብዙ ምልክት በደቀ መዛሙርቱ ፊት አደረገ፤” (ዮሐ. ፳፥፴) በማለት ክርስቶስ ያደረጋቸው ሁሉ የተጻፉ እንዳልሆነ አስረድቷል፡፡
                      እንዲያውም እርሱ ያደረገውን ሁሉንም እንጻፍ ማለት እንደማይቻል ሲገልጽ “ኢየሱስም ያደረገው ብዙ ሌላ ነገር ደግሞ አለ፤ ሁሉ በእያንዳንዱ ቢጻፍ ለተጻፉት መጻሕፍት ዓለም ራሱ ባልበቃቸውም
                      ይመስለኛል” ብሏል፡፡ ይህ መጽሐፍ ቅዱስ ሁሉንም ታሪክ፣ ሁሉንም ሥርዐት … ወዘተ ጠቅልሎ እንዳላካተተ የሚያሳይ ነው፡፡ ይህን ስንል ግን በጽሑፍ ደረጃ አልዘረዘረም ማለታችን እንጂ ከምሥጢር
                      ምልዐት አንጻር የጎደለው ነገር አለው ማታችን አይደለም፡፡ የእግዚአብሔር ቃል ሁሌም ምሉዕ ነውና የእግዚአብሔር ቃል የሚገኝበት መጽሐፍም ሕፀፅና ጉድለት የማይገኝበት ምሉዕ ነው፡፡ ይህ ብቻ
                      ሳይሆን መጽሐፍ ቅዱስ ባነሣው ጉዳይ ላይ ተጨማሪ መንፈሳዊ ዕውቀት የምንፈልግ ከሆነ የቀረው ነገር የት እንደሚገኝ አዋልድ መጻሕፍትን ጠቁሞናል እንጂ “ሁሉንም ጠቅልዬ ይዣለሁና እኔን ብቻ
                      አንብቡ” አላለም፡፡ የሚከተሉት አሳቦችም ይህንኑ የሚያስረዱ ናቸው።
                    </p>
                    <p>“የቀረውም ፊተኛውና ኋለኛው የሰሎሞን ነገር በነቢዩ በናታን ታሪክ፥ በሴሎናዊውም በአሒያ ትንቢት፥ ስለ ናባጥም ልጅ ስለ ኢዮርብዓም ባየው በባለ ራእዩ በአዶ ራእይ የተጻፈ አይደለምን?” (፪ኛ ዜና. ፱፥፳፱)፡፡</p>
                    <p>“የቀረውም የሮብዓም ነገር፥ ያደረገውም ሁሉ፥ በይሁዳ ነገሥታት ታሪክ መጽሐፍ የተጻፈ አይደለምን?” (፩ኛ ነገ. ፲፬፥፳፱)፡፡</p>
                    <p>“የቀረውም የሰሎሞን ነገር፥ ያደረገውም ሁሉ፥ ጥበቡም፥ እነሆ፥ በሰሎሞን ታሪክ መጽሐፍ ተጽፎአል” (፩ኛ ነገ. ፲፩፥፵፩)፡፡</p>

                    ማጠቃለያ
                    <p>
                      መጽሐፍ ቅዱስ የቅዱሳት መጻሕፍት ሁሉ ምንጭና ራስ ነው፡፡ ማንኛውም ትምህርት፣ የቤተ ክርስቲያን ታሪክ ወይም ሥርዐት በመጽሐፍ ቅዱስ ከተጠቀሰው ጋር የሚጋጭ ከሆነ በቤተ የቤተ ክርስቲያናችን
                      ተቀባይነት የለውም፡፡ የቤተ ክርስቲያናችን የትምህርተ ሃይማኖት ዋና ምንጭ መጽሐፍ ቅዱስ ነው፡፡ የሥርዐትና የታሪክ ዋና ምንጭም መጽሐፍ ቅዱስ ነው፡፡ ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያናችን መጽሐፍ
                      ቅዱስ የሚያዘውን የምትፈጽም፣ የምታስተምርና የምትኖር መጽሐፍ ቅዱሳዊት ቤተ ክርስቲያን ናት፡፡ መጽሐፍ ቅዱስንም እንድናነበውና እንድንማርበት አዘጋጅታ የሰጠችን እርሷው ናት፡፡ ይሁንና አንዳንድ መናፍቃን
                      መጽሐፍ ቅዱስን የሚከተሉ መስለው ቤተ ክርስቲያን መጽሐፍ ቅዱስን ያልሰበከች አስመስለው ስለሚያቀርቡ ተንኮላቸውን ተረድተን ልንጠነቀቅ ይገባል፡፡ መጽሐፍ ቅዱስ የማይለውን እንደሚል አድርገው በማቅረብና
                      አጣመው በመተርጎም የሚስቱ ብዙዎች ናቸው፡፡ ለዚህም ነው ከሁሉ የምትቀድመውን ቤተ ክርስቲያን እየተቃወሙ እርሷ ለዓለም ሁሉ የሰጠችውን ቅዱስ መጽሐፍ የተቀበሉ የሚያስመስሉት፡፡
                    </p>
                    <a href="https://eotcmk.org/a/17157-2/">ምንጭ፥ https://eotcmk.org/a/17157-2/</a>
                    <p>አዋልድ መጻሕፍት ከመጽሐፍ ቅዱስ ጋር ያላቸው ተዛምዶ፡–</p>
                    <p>
                      ቀደም ተብሎ እንደተለጠው አዋልድ መጻሕፍት ልጅነታቸው ለአሥራው መጻሕፍት (ለመጻሕፍት አምላካውያት) ነው፡፡ ልጅ ከአባቱ አብራክ፣ ከእናቱ ማኅጸን ተከፍሎ ወላጆቹንመስሎ እንዲወጣ እነዚህም በምሥጢርም
                      በእምነትም በሥርአትም የአሥራውን መጻሕፍት ሥርና መሠረት ይዘው ተገኝተዋል፡፡ በምሥጢርም ኾነ በሥርዓት ከአሥራው መጻሕፍት ጋር የሚቃረኑት መጻሕፍት ከአዋልድ አይቆጠሩም፡፡ ምክንያቱም በሐዋርያው ቃል
                      “ነገር ግን እኛ ብንሆን ወይም ከሰማይ መልአክ፥ ከሰበክንላችሁ ወንጌል የሚለይ ወንጌልን ቢሰብክላችሁ፥ የተረገመ ይሁን” ተብሏልና (ገላ.፩፥፰)፡፡
                    </p>
                    <p>አዋልድ መጻሕፍት ከአሥራው መጻሕፍት ጋር ያላቸውን ተዛምዶ በሚከተሉት ነጥቦች መረዳት ይቻላል፡፡</p>
                    <p>ሀ. በዓይነታቸው፡- አሥራው መጻሕፍት ተብለው የሚታወቁት ሰማንያ አንዱ መጻሕፍት የሕግ፣ የታሪክ፣ የጥበብ፣ የትንቢት ተብለው ይመደባሉ፡፡</p>
                    <p>እንደዚሁም ሁሉ አዋልድ መጻሕፍት በዚሁ አንጻር የተዘጋጁ ናቸው፡፡ ለምሳሌ ያህል ይህንን የማሳያ ሰንጠረዥ እንመልከት፡-</p>
                    <p>
                      ለ. በባለቤታቸው፡-የቅዱሳት መጻሕፍት ባለቤታቸው ቅድስት ቤተ ክርስቲያን ናት፡፡ ምክንያቱም ቅዱሳት መጻሕፍት የእግዚአብሔር ገንዘቦች፣ በእርሱም ፈቃድና ምሪት የተፃፉ ሲሆኑ ቤተ ክርስቲያን ደግሞ
                      እግዚአብሔር በደሙ የዋጃት በምድር የእግዚአብሔር እንደራሴ የሆነች፣ የጸጋው ግምጅ ቤት ናት (የሐዋ.፳፥፳፰)፡፡ ስለሆነም ከእግዚአብሔር የተላኩ ሐዋርያት መንፈስ ቅዱስ ገልጦላቸው ወንጌልንና መልእክታትን
                      የጻፉት ለቤተ ክርስቲያን ነው።
                    </p>
                    <p>
                      የአዋልድ መጻሕፍት ጸሐፊዎች የቤተ ክርስቲያን ልጆች ሲሆኑ እነርሱም መንፈሰ እግዚአብሔር እንደገለጠላቸው መጠን መጻፍቱን የጻፉት ለቤተክርስቲያን ልጆች ለምእመናን ነው፡፡ በመሆኑም ባለቤታቸው ቤተ
                      ክርስቲያን በመሆኗ ለትርጉማቸው፣ ለታሪካቸውና ለምሥጢራቸው መጠየቅ ያለባት ቤተ ክርስቲያን ናት።
                    </p>
                    <p>
                      ሐ. በቅድስናቸው፡- አሥራው መጻሕፍትንም ሆነ አዋልድ መጻሕፍትን ያጻፈው መንፈስ ቅዱስ ነው፡፡ የአሥራው መጻሕፍትን ጸሐፍት እንደመረጠ እንዳተጋ ምሥጢር እንደገለጠላቸው፣ የአዋልድ መጻሕፍትን
                      ጸሐፍት የመረጠ፣ ያተጋ፤ ምሥጢር የገለጠላቸው መንፈስ ቅዱስ ነው፡፡ ከአንዱ ምንጭ ከመንፈስ ቅዱስ በመገኘታቸውም የአሥራውም ሆኑ የአዋልድ መጻሕፍት ዓላማቸው ነገረ ሃይማኖትን ማስረዳት ደግሞም
                      ለትምህርትና ለተግሣጽ ልብንም ለማቅናት በጽድቅም ላለው ምክር መጥቀም ነው፡፡(፪ኛ.ጢሞ.፫፥፲፮)
                    </p>
                    <p>
                      በልዩ ልዩ ዘመናትና ሰዎች በተራራቀ ሀገር ተጽፈው ለየብቻቸው የነበሩትን አሥራው መጻሕፍት ከመሠረተ ሃይማኖት አንጻር መርምራ አረጋግጣ በአሥራው መጻሕፍትነት የተቀበለችው ቤተ ክርስቲያን ናት።
                      አዋልድ መጻሕፍትንም የምትቀበለው በተመሳሳይ መልኩ ከትምህርቷ አንፃር መርምራ አረጋግጣ ነው።
                    </p>
                    <p>
                      መ. የእግዚአብሔርን ሥራ በመግለጥ፡- የቅዱሳት መጻሕፍት ተቀዳሚ ዓላማ የእግዚአብሔርን ሥራ መግለጥ ነው፡፡ ቅዱሳት መጻሕፍት እግዚአብሔር በቀጥታ ራሱ ወይም በወዳጆቹ አድሮ ለሕዝቡ ያደረገውን
                      ተአምር፣ መግቦት፣ ቸርነት ያብራራሉ፡፡ይህ እውነታ በአሥራው መጻሕፍት በስፋትና በይፋ የተገለጠ ሆኖ እናገኘዋለን፡፡ ዓላማቸው የእግዚአብሔርን ሥራ መግለጥ ከመሆኑ የተነሣ የእግዚአብሔር ሥራ ተአምር
                      የተፈጸመላቸውንና የተፈጸመባቸውን ሰዎች፣ ቦታዎች እምብዛም ትኩረት አይሰጧቸውም፡፡ ተአምሩን ብቻ ገልጠው የሰዎችንና የቦታዎችንስምእገሌ፣አንድሰው ብለው ያልፋሉ፡፡ (ማቴ.፳፮፥፲፰፣፩ኛ. ነገ፲፫፥፩፣
                      ማቴ.፰፥፪፣ ሉቃ.፲፩፥፲፭) ይህ በአሥራው መጻሕፍት ብቻ የሚንጸባረቅ ሳይሆን የአዋልድ መጻሕፍትም ዓላማ ነው፡፡ በገድለ ተክለሃይማኖት፣ በገድለ ጊዮርጊስ፣ በተአምረ ማርያም ውስጥ በቅዱሳን አማላጅነት
                      የእግዚአብሔር ሥራ (ተአምር) የተፈጸመላቸው ወይም የተፈጸመባቸው ሰዎችን ስም፣ ቦታ ሳያነሡ እገሌ፤ እገሊት አንድ ሰው ብለው የሚጠሩት ሰዎቹና ቦታዎቹ መጠሪያ ስለሌላቸው ሳይሆን ዓላማቸው
                      የእግዚአብሔርን ሥራ መግለጥ ስለሆነ ነው።
                    </p>
                    <p>
                      ሠ. የሃይማኖትን ታላቅነት በመግለጥ፡- ቅዱሳት መጻሕፍት በሃይማኖት፣ ለሃይማኖት፣ ስለሃይማኖት የተጻፉ ናቸው፡፡ ከጥርጥር፣ ከአጉል አሳብ ተጠብቆ በመጻሕፍቱ የተገለጠውን፣ የታዘዘውን ለጠበቀ የተባለው
                      ይፈጸምለታል፡፡ ሠለስቱ ደቂቅ ሃይማኖትን ገንዘብ አደረጉ፡፡ በሃይማኖትም ሕግ ታዝዘው ለጣዖት መስገድን እምቢ አሉ፡፡ በዚህ የተነሣ ከእሳት ቢጣሉ በሃይማኖት የእሳትን ኃይል አጠፉ፡፡ ነቢዩ ዳንኤል በሃይማኖት
                      የአናብስትን አፍ ዘጋ፡፡ ጌዴዎን ያለ ጦር መሣሪያ አእላፍ የአሕዛብን ሠራዊት ድል አደረገ፡፡ ይህ የሃይማኖትን ታላቅነት ያስረዳል (ዕብ.፲፩፥፴፫-፴፬)፡፡ በአዋልድ መጻሕፍትም አቡነ ኤውስጣቴዎስ በአጽፋቸው
                      (በመጎናጸፊያቸው) ባሕር ሲከፍሉ፣ ፃድቁ አቡነ ተክለሃይማኖት ከንብ ቀፎ ተከተው በቆዳ ተጠቅልለው ከተወረወሩበት ገደል ሲወጡ፣ ከእሳት መካከል ቆመው እግዚአብሔርን ሲያመሰግኑ፤ቅዱስ ጊዮርጊስ የሚቆራርጥ
                      መርዝ ሲያጠጡት ሕያው ሆኖ የሚያሳየን የሃይማኖትን ታላቅነት ነው።
                    </p>
                    <p>
                      በአሥራውም ሆነ በአዋልድ መጻሕፍት የተጠቀሱት ሰዎች ታላላቅ ተአምራት ሲፈጽሙ የምንመለከተው መድኃኒታችን ኢየሱስ ክርስቶስ በቅዱስ ወንጌሉ “አማን አማን እብለክሙ ዘየአምን ብየ ዘአነ እገብር ውእቱሂ
                      ይገብር ወዘየዐቢ ይገብር፤ እውነት እውነት እላችኋለሁ፥ በእኔ የሚያምን እኔ የማደርገውን ሥራ እርሱ ደግሞ ያደርጋል፤ ከዚህም የሚበልጥ ያደርጋል፤” ያለው ቃል ተፈጽሞላቸው ነው፡፡(ዮሐ.፲፬፥፲፪)።
                    </p>
                    <p>
                      ረ. የሃይማኖትሰዎች ያደረጓቸውን ልዩ ልዩ ተጋድሎዎችን መግለጥ፡- እግዚአብሔር ድንቅ የሆነ ሥራውን ለፍጥረቱ የሚሠራው በፍጥረቱ አማካኝነት ነው፡፡ ይህም በልዩ ልዩ መንገድ ይፈጸማል፡፡ የእግዚአብሔር ሥራ
                      በስፋትና በግልጥ ከሚሠራባቸው ፍጡራን መካከል ደግሞ ቅዱሳን ዋንኞቹ ናቸው፡፡ ቅዱሳን ለሕገ እግዚአብሔር ተገዝተው ፈቃዱን በመፈጸማቸው ንጽሐ ልቡናን ገንዘብ አደረጉ፡፡ በዚህ ሰውነታቸውም ከእግዚአብሔር
                      በተቀበሉት ኃይል ብዙ ተጋድሎ ፈጽመዋል፡፡ የአሥራውም ሆኑ አዋልድ መጻሕፍት ይህን የቅዱሳንን የተጋድሎ ሕይወት ይገልጣሉ፡፡ ነሕምያ የኢየሩሳሌምን ቅጥር መሥራቱ፣ አስቴር በጾም በጸሎት ሕዝበ እሥራኤልን
                      ስለመታደጓ፣ ዮዲት በጥበብ ሆሊፎርንስን መግደሏ፣ ቅዱስ ጴጥሮስ በጥላው ሕሙማንን መፈወሱ፣ እመቤታችን፣ጻድቃን ሰማእታት ልዩ ልዩ ገቢረ ተአምራት መፈጸማቸው በየቅዱሳት መጻሕፍቱ ተገልጦ እናገኛለን፡፡
                    </p>
                    <p>አዋልድ መጻሕፍትን ቤተ ክርስቲያን የምትቀበለው እንዴት ነው?</p>
                    <p>
                      ቅድስት ቤተ ክርስቲያን አዋልድ መጻሕፍትን የምትቀበልበት ሥርዓት አላት፡፡ ቀደም ተብሎ በተደጋጋሚ እንደተገለጠው የአዋልድ መጻሕፍት ልጅነታቸው በይዘት፣በመንፈስ፣ በምሥጢርና በመሠረተ ሐሳብ ነው፡፡
                      የመጽሐፍ ቅዱስ መጻሕፍት “አሥራው መጻሕፍት” ይባላሉ፡፡ አሥራው ማለት ሥሮች ማለት ሲሆን፣ አሥራው መጻሕፍት ሲላቸው ደግሞ የሌሎች መጻሕፍት መገኛዎች፣ ሥሮች ማለት መሆኑን ልብ ይሏል፡፡
                      ይህም ማለት ለአዋልድ መጻሕፍት በይዘትና በመንፈስ፣ በምሥጢርና በመሠረተ ሐሳብ አስገኚ ሥራቸውና ወላጃቸው መጽሐፍ ቅዱስ ኾኖ በእርሱ ሥርነት የሚበቅሉና የሚያድጉ ማለት ነው፡፡
                    </p>
                    <p>
                      ይህ ኾኖ ሳለ በአንዳንድ ይዘታቸው፣ መጽሐፍ ቅዱስን ቢመስሉም ከመጽሐፍ ቅዱስ አስተምህሮ፣በጌታችን ከተገለጠውና ከሐዋርያት ጀምሮ ሲያያዝ ከመጣው የቤተክርስቲያንእምነትና ትምህርት ጋር
                      ተቃርኖ ያላቸውን መጻሕፍት ቤተ ክርስቲያን ታወግዛለች እንጂ አትቀበልም፡፡ መጻሕፍቱም “ዲቃሎች” እንጂ “አዋልድ” አይባሉም፡፡
                    </p>
                    <p>አዋልድ መጻሕፍትን በተመለከተ በሚከተሉት ነጥቦች መለየት እንደሚቻል ሕንዳዊው የነገረ መለኮት ሊቅ ጢሞቴዎስ አለን ይገልጡታል፡-</p>
                    <p>ዓላማቸው መንግሥተ እግዚአብሔር የሆነ፣</p>
                    <p>በሃሳብ፣ በመንፈስ፣ በምሥጢር፣ በነገረ መለኮት ከአሥራው መጻሕፍትና ከቅዱሳት የቤተ ክርስቲያን ትውፊት ጋር የማይጋጩ፣</p>
                    <p>ለክርስቲያናዊ ሥነ ምግባር፣ ሕይወትና አኗኗር ተስማሚ የሆኑ፣</p>
                    <p>የቤተ ክርስቲያን አበው፣ትውፊት ወይም ጉዞ ምስክር ያላቸው፣</p>
                    <p>ውስጣዊ ተቃርኖ የሌለባቸው፡፡</p>
                    <p>
                      እንግዲህ በጎ ትምህርት የሚያስተምሩንን፣ ስለ ቅዱሳን አበውና እመው ሃይማኖታዊ ተጋድሎ የምንረዳባቸውን፣ አሥራው መጻሕፍትንም የሚያብራሩልንና የሚተረጉሙልንን አዋልድ መጻሕፍትን በመጠቀም
                      በሃይማኖት ለመጽናት፣ በጎ ሥራ ለመሥራት ፈጣሪያችን ልዑል እግዚአብሔር ይርዳን!
                    </p> <br />
                    ምንጭ፥<a href="https://eotcmk.org/a/%E1%8B%A8%E1%8A%A5%E1%8C%8D%E1%8B%9A%E1%8A%A0%E1%89%A5%E1%88%94%E1%88%AD-%E1%88%98%E1%8A%95%E1%8D%88%E1%88%B5-%E1%8B%AB%E1%88%88%E1%89%A0%E1%89%B5-%E1%88%98%E1%8C%BD%E1%88%90%E1%8D%8D/">
                      https://eotcmk.org/a/
                    </a>

                  </>

                )}
                <br />

                <button
                  onClick={() => setIsExpanded2(!isExpanded2)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {isExpanded2 ? 'Show Less' : 'Read More'}
                </button>












                {/* 
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">ዋና በዓላት</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>ጥምቀት</li>
                      <li>ፋሲካ</li>
                      <li>መስቀል</li>
                      <li>ገና</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">የጾም ወቅቶች</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>ዐቢይ ጾም (55 ቀናት)</li>
                      <li>የሐዋርያት ጾም</li>
                      <li>የድንግል ማርያም ጾም</li>
                      <li>የገና ጾም</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">የሳምንት ቀናት</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>ረቡዕ (ክርስቶስ የተከዳበት)</li>
                      <li>አርብ (ክርስቶስ የተሰቀለበት)</li>
                      <li>እሁድ (ትንሣኤ)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-blue-600 mb-2">የቅዱሳን ቀናት</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>ቅድስት ማርያም (በየወሩ 21ኛው ቀን)</li>
                      <li>ቅዱስ ሚካኤል (በየወሩ 12ኛው ቀን)</li>
                      <li>ቅዱስ ገብርኤል (በየወሩ 19ኛው ቀን)</li>
                      <li>ቅዱስ ጊዮርጊስ (በየወሩ 23ኛው ቀን)</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6">
                  ክርስቲያናዊ የሆነ ገዳማዊ ኑሮ በኢትዮጵያ ማበብ የጀመረው የክርስትና ሃይማኖት የአገሪቱ ብሔራዊ እምነት ሆኖ በነገሥታቱ ተቀባይነት ካገኘ በኋላ ነው። የግብፃዊው
                  የቅዱስ አንጦኒዮስን ገዳማዊ ሥርዓት የተከተለ በ 479 ዓ.ም. ወደ ሀገሪቱ የመጡት ዘጠኙ ቅዱሳን አስፋፍተውታል።
                </p>
                <p>
                  ስለዚህ ነው ከ4ኛው መቶ ክፍለ ዘመን እስከ 7ኛው ክፍለ ዘመን ያለው ጊዜ ወርቃማው ተብሎ የሚታወቀው። በነዚህ ዘመናት ውስጥ ብዙ የስብከት ወንጌል ሥራዎች
                  ተስፋፍተዋል፣ ልዩ ልዩ መንፈሣዊ ሥራዎችና ጽሑፎች የተከናወኑበት ጊዜ ነው። በአውሮፓ ያሉ ገዳማት የምዕራባውያንን ባሕል በመካከላለኛው ክፍለ ዘመን እንዲስፋፋና
                  እንዲጠበቅ እንዳደረጉት ሁሉ በኢትዮጵያም የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ገዳማትም የእውቀትና የሥልጣኔ ማዕከል በመሆን ሥነ ጽሑፎችን፣ ሥነ ሕንፃን፣
                  ቅኔዎችን፣ ዜማዎችን፣ ዝማሬዎችንና መንፈሣዊ ትምህር��ች እንዲዳብሩ አድርገዋል። በ5ኛው ክፍለ ዘመን የታወቀው የቤተ ክርስቲያን ሊቅ ቅዱስ ያሬድ በመጽሐፍ ቅዱስ
                  ላይ የተመሠረተ የቅድሴ ዜማዎችን፣ ዝማሬዎችንና ውዝዋዜዎችን በመፍጠር ለቤተ ክርስቲያን ያበረከተ ሲሆን በአሁኑ ጊዜ ይህ ለጆሮ ክፍተኛ ጣዕም ያለውን የምስጋናና
                  የጸሎት ሥርዓት ያላትና የምትጠቀም በዓለም ያለች ብቸኛ ቤተ ክርስቲያን አድርጓታል።
                </p> */}
              </div>
            )}
          </TabsContent>
        </Tabs>
        <div className="mb-16">
          {/* <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Book className="mr-2 text-blue-600" />
            {language === "en" ? "Holy Scripture" : "መጽሐፍ ቅዱስ"}
          </h2> */}

          {/* {language === "en" ? (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="mb-4">
                As the Ethiopian Orthodox Tewahedo Church believes, "From ancient times, according to the conditions of
                the time and the way of life of the people, the Holy Spirit has been teaching the Holy Scriptures so
                that everyone may grow in spiritual and physical education and knowledge."
              </p>
              <p>
                The Church accepts 81 canonical holy books. These include 54 books of the Old Testament translated from
                Hebrew to Greek by the 70 scholars, including Enoch, 2 Ezra and Ezra Sutuel, and the three Books of
                Maccabees, as well as 27 books of the New Testament.
              </p>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="mb-4">
                የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን እንደምታምነው "ከጥንት ጀምራ እንደጊዜው ሁኔታና ሕዝብ አኗኗር ሁሉም በመንፈሳዊውም በሥጋዊውም ትምህርትና ዕውቀት
                እንዲያድግ የመንፈስ ቅዱስ ፍሬ የሆኑትን መጽሐፍ ቅዱስን በማስተማር ነው።"
              </p>
              <p>
                ቤተ ክርስቲያኗ የምትቀበላቸው የቀኖና ቅዱስ መጽሐፍት 81 ናቸው። እነዚህም 70ዎቹ ሊቃውንቶች ከዕብራይስጥ ቋንቋ ወደ ግሪክ የተረጎሟቸውን የብሉይ ኪዳን 54
                መጻሕፍትን እነዚህም የሚያካትቱት ሄኖክ፣መጽሐፈ ዕዝራ ካልዕና ዕዝራ ሱቱኤል፣ ሦስቱ መጽሐፈ መቃቢያን የሆኑትን ሲሆን ከሐዲስ ኪዳን ደግሞ 27 መጻሕፍትን ነው።
              </p>
            </div>
          )} */}
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="mr-2 text-blue-600" />
            {language === "en" ? "Spiritual Life" : "መንፈሳዊ ሕይወት"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="font-bold text-lg mb-3">{language === "en" ? "Prayer" : "ጸሎት"}</h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Regular prayer is essential to Ethiopian Orthodox spiritual life, with prescribed prayers for different times of day."
                  : "መደበኛ ጸሎት ለኢትዮጵያ ኦርቶዶክስ መንፈሳዊ ሕይወት አስፈላጊ ሲሆን፣ ለተለያዩ የቀን ሰዓታት የተወሰኑ ጸሎቶች አሉ።"}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="font-bold text-lg mb-3">{language === "en" ? "Fasting" : "ጾም"}</h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Fasting is practiced extensively, with over 250 days of fasting throughout the year as a spiritual discipline."
                  : "ጾም በስፋት ይከናወናል፣ በዓመት ውስጥ ከ250 ቀናት በላይ የጾም ቀናት እንደ መንፈሳዊ ሥርዓት ይከናወናሉ።"}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="font-bold text-lg mb-3">{language === "en" ? "Almsgiving" : "ምጽዋት"}</h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Charity and care for those in need is considered an essential expression of Christian faith and love."
                  : "ምጽዋትና ለችግረኞች መንከባከብ የክርስትና እምነትና ፍቅር አስፈላጊ መግለጫ ተደርጎ ይወሰዳል።"}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">{language === "en" ? "Learn More" : "አሥራት በኩራት"}</h2>
          <p className="text-gray-700">
            <p className="font-bold">በኩራት </p>
            <p>-  በኩር (የመጀመሪያ) ከሚለው ቃል ነው። በኩራት የእግዚአብሔር ነው - ዘፀ 23፡19፣ ዘሌ 23፡10-11</p>
            <p>-  በኩራት መስጠት ማለት እግዚአብሔርን በነገሮቻችን ሁሉ ማስቀደም ማለት ነው - ዘኁ 3፡13፣ ዘዳ 15፡19</p>
            <p>-  የበኩራት ስጦታ ትዕዛዝ ነው - ዘፀ 13፡2፣ ዘዳ 26፡2</p>
            <p>-  የመጀመሪያውን ስንሰጥ ያለን ነገር ይባረክልናል - 1ሳሙ 2፡20-21</p>

            <p className="font-bold">አሥራት - ዘፍ 14፡20፣ ዕብ 7፡4-5</p>
            <p>-  አሥራት በብሉይ ኪዳን ከአስር አንድ እጅ ማለት ነው - ዘፍ 28፡22። አሥራት በአዲስ ኪዳን ግን ከአሥር አንድ እጅ ባለፈ በዘራኸው ልክ ነው - 2ቆሮ 9፡6-7</p>
            <p>-  አሥራት የእግዚአብሔር ንብረት ነው - ሚል 3፡8-10</p>
            <p>-  አሥራት የሚሰጡ (የሚያስገቡ) ሰዎች በታማኝነት የእግዚአብሔርን ንብረት መልሰው ለእርሱ የሚሰጡ ናቸው - ዘዳ 14፡22-23</p>
            <p>-  አሥራትን በማስገባት (በመስጠት) ውሰጥ በረከት አለ - ሚል 3፡8-10</p>

            <p className="font-bold">የምንሰጥበት ምክንያት እና አላማ </p>
            <p>  ሀ. እግዚአብሔር እንድንሰጥ አዟል - ዘፀ 25፡1-5፣ ዘሌ 25፡31፣ ዘኁ 18፡21</p>
            <p> ለ. ስጦታችን የእግዚአብሔርን መንግስት የማስፋፋት ስራና የእግዚአብሔር ቤት አገልግሎት ላይ የሚውል ነው - 1ቆሮ 9፡4-14፣ 2ቆሮ 8፡4፣ ፊሊ 4፡15-18</p>
            <p> ሐ. በመስጠት እግዚአብሔርን እናከብራለን፣ እናመልካለን - ምሳ 3፡9-10</p>
            <p> መ. በመስጠት የእግዚአብሔርን በረከት እንለማመዳለን - ሚል 3፡10-12፣ ሉቃ 6፡10</p>
            <p> ሠ. በመስጠት ለእግዚአብሔር ታማኝ እንሆናል (አንሰርቀውም) - ሚል 3፡8-10</p>

            <p className="font-bold">እንዴት መስጠት እንዳለብን? </p>
            <p> ሀ. የምንሰጠው አስቀድመን ራሳችንን ለእግዚአብሔር በመስጠት ነው - ሮሜ 12፡1፣ 2ቆሮ 8፡1-5 </p>
            <p> ለ. የምንሰጠው በሃዘን (በግድ) ሳይሆን በደስታ ነው - 2ቆሮ 9፡7 </p>
            <p> ሐ. የምንሰጠው እንደገቢያችን ብቻ ሳይሆን ከጉድለታችንም ጭምር መሆን አለበት - 2ቆሮ 8፡1-5 </p>
            <p> መ. የምንሰጠው ለሰዎች ለመታየት መሆን የለበትም - ማቴ 6፡1 </p>
            <p> የምንሰጠው በስጦታችን ለመመካት መሆን የለበትም - ሉቃ 18፡9-14 </p>

          </p>
        </div>
      </div>
    </div>
  )
}
