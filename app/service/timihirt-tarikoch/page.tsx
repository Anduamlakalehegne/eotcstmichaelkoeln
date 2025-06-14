"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, History, GraduationCap } from "lucide-react"
import Link from "next/link"

// Biblical figures data
const biblicalFigures = [
  {
    name: "ነቢዩ ሙሴ",
    title: "ታማኝ አገልጋይ ነቢዩ ሙሴ",
    description:
      "ሙሴ ታማኝ አገልጋይ እንደነበር ቅዱሳት መጻሕፍት ይመሠክራሉ፡፡ ‹‹በመካከላችሁ ነቢይ ቢኖር እኔ እግዚአብሔር በራእይ እገለጥለታለሁ ወይም በህልም አናግረዋለሁ፤ ባሪያዬ ሙሴ ግን እንዲህ አይደለም፤ እርሱ በቤቴ ሁሉ የታመነ ነው››፡፡ (ዘኁ.፲፪፥፮)",
    icon: BookOpen,
    image: "/placeholder.svg?height=300&width=400",
    content:
      "ሙሴ ታማኝ አገልጋይ እንደነበር ቅዱሳት መጻሕፍት ይመሠክራሉ፡፡ ‹‹በመካከላችሁ ነቢይ ቢኖር እኔ እግዚአብሔር በራእይ እገለጥለታለሁ ወይም በህልም አናግረዋለሁ፤ ባሪያዬ ሙሴ ግን እንዲህ አይደለም፤ እርሱ በቤቴ ሁሉ የታመነ ነው››፡፡ (ዘኁ.፲፪፥፮) ይህ የፍጡር ምስክርነት ሳይሆን በፈጣሪው የተሰጠ ምስክርነት ነው፡፡ በእውኑ በዘመናችን እንኳን ፈጣሪ ፍጡራን ታማኝነቱን የሚመሰክሩለት አጋልጋይ ይኖር ���ሆን? የሙሴን ታማኝ አገልጋይነት በረሃ፣ ስደት፣ መከራ እና ቁጣ ያልበገረው አርባ ዓመት ስለ ወንድሞቹ በመሰደድ፣ አርባ ዓመት ደግሞ የተሰደደላቸው ወንድሞቹን በመምራት ባሕር በመክፈል፣ ጠላት በመግደል፣ መና በማውረድ፣ ደመና በመጋረድ ውኃ ከዓለት አፍልቆ በማጠጣት፣ መከራውን ከወገኖቹ ጋር በመቀበል፣ የቀኑ ሀሩር የሌሊቱን ቁር /ብርድ/ ታግሶ በታማኝነት አገልግሏል፤ ታማኝነቱ እስከሞት ነበር፡፡ ‹‹ሙሴም ወደ እግዚብሔር ተመልሶ ወዮ እኒህ ሕዝብ ታላቅ ኀጢአት ሠርተዋል፡፡ ለራሳቸውም የወርቅ አማልክት አድርገዋል፡፡ አሁን ይህን ኀጢአታቸውን ይቅር በላቸው፤ ያለዚያ ግን ከጻፍከው መጽሐፍ እባክህ ደምስሰኝ፤ ከባለሟልነትህ አውጣኝ››፡፡ (ዘጸ.፴፪፥፴፩) ታማኝ አገልጋይ ‹‹እኔ ልሙት፤ ሌሎች ይዳኑ የሚል ነው፤ አሁን የምናየው ግን ፈጽሞ ከዚህ የተለየ ነው፡፡ ሰዎች ይሙቱ፤ እኔ ልኑር፤ ሰዎች ጾም ይደሩ፤ እኔ ልብላ፤ ሰዎች ይራቆቱ እኔ ልልበስ፤ ሰዎች ይዘኑ፤ እኔ ልደሰት›› ነው፡፡ ታማኝ አገልጋይ ለሚያገለግላቸው ሰዎች ጥቅም ቅድሚያ የሚሰጥ እንጂ የራሱን ጥቅም የሚያስቀድም አይደለም፡፡",
  },
  {
    name: "ነቢዩ ዳዊት",
    title: "ታማኝ አገልጋይ ነቢዩ ዳዊት",
    description:
      "ዳዊት ዘመነ መሳፍንት አልፎ ዘመነ ነገሥት ሲተካ እስራኤልን በንጉሥነት እንዲያገለግል እግዚአብሔር ከበግ ጥበቃው ወስዶ ሥልጣን ሰጠው፤ ያልተመነ የሳዖልን በትረ መንግሥት በሳሙኤል እጅ ተቀብቶ ተቀብሏል፡፡",
    icon: GraduationCap,
    image: "/placeholder.svg?height=300&width=400",
    content:
      "ዳዊት ዘመነ መሳፍንት አልፎ ዘመነ ነገሥት ሲተካ እስራኤልን በንጉሥነት እንዲያገለግል እግዚአብሔር ከበግ ጥበቃው ወስዶ ሥልጣን ሰጠው፤ ያልተመነ የሳዖልን በትረ መንግሥት በሳሙኤል እጅ ተቀብቶ ተቀብሏል፡፡ በተሰጠው ሥልጣን በታማኝነት ሕዝበ እስራኤልን መርቷል፡፡ ታማኝነቱንም እግዚአብሔር ለሙሴ እንደ መሰከረለት ለእርሱም መስክሮለታል፡፡ ‹‹እግዚአብሔር እንደልቡ የሆነ ሰው መርጧልና››፤ ‹‹የዘይቱን ቀንድ ሞ���ተህ በልጆቹ መካከል ለእኔ ንጉሥ አዘጋጅቻለሁና ወደ እሴይ ወደ ቤተልሔም እልክሃለሁ›› እንደተባለው፡፡ (፩ ሳሙ.፲፫፥፲፫፣ ፲፮፥፪) ‹‹ወረከብክዎ ለዳዊት ገብርየ ወቀባዕክዎ ቅብዐ ቅዱስ›› እንዲል፡፡(መዝ.፹፰፥፳) ‹‹ባሪያዬ ዳዊትን አገኘሁት፤ የተቀደሰ ዘይትንም ቀባሁት›› ይህን አባ ጊዮርጊስ ዘጋስጫ ሰዓታት በተባለው ድርሰቱ፡- ‹‹ረከብክዎ ለዳዊት ገብርየ ብዕሴ ምእመነ ዘከመልብየ›› አገልጋዬ ዳዊትን እንደ ልቤ የታመነ ሰውን ሆኖ አገኘሁት›› ሲል ተርጉሞታል፡፡ የተገኘው በታማኝነት ነበር፤ ከነገሠ በኋላም ታማኝ ነበር፤ አሁን በዚህ ዓለም የምንኖር እኛ ግን በድኅነት ታማኝ እንሆንና ሀብት ሹመት ሥልጣን ሲመጣ ታማኝነትን እናጣለን፤ እንዲያውም ታማኝነትን እንንቀዋለን፡፡ መስረቅ ጀግንነት፣ መዋሸት ሥልጣኔ ይመስለናል፡፡ ዳዊት ሳይሾም በጎቹን በመጠበቅ ታማኝ ነበር፡፡ በጎቹን የሚነጥቅ ተኩላ አንበሳ ቢመጣ በኋላው ተከትሎ ነብሩን በጡጫ አንበሳውን በእርግጫ ብሎ በጎቹን ያስጥለው ነበር፡፡",
  },
  {
    name: "ቅዱስ ዮሴፍ",
    title: "ታማኝ አገልጋይ ቅዱስ ዮሴፍ",
    description:
      "ዮሴፍ ለወንድሞቹ ምግባቸውን ተሸክሞ፣ የእርሱ ስንቅ ቢያልቅ የወንድሞቹን ስንቅ ሳይበላ በትንሽ የታመነ ሰው ነበር፤ ወንድሞቹ ሸጠውት በቤተ ጴጥፋራ በሚያገለግልበት ጊዜም ታማኝ ነበር፤ ታማኝነቱ በጲጥፋራ ቤት ጌታ አድርጎታል፡፡",
    icon: History,
    image: "/placeholder.svg?height=300&width=400",
    content:
      "ዮሴፍ ለወንድሞቹ ምግባቸውን ተሸክሞ፣ የእርሱ ስንቅ ቢያልቅ የወንድሞቹን ስንቅ ሳይበላ በትንሽ የታመነ ሰው ነበር፤ ወንድሞቹ ሸጠውት በቤተ ጴጥፋራ በሚያገለግልበት ጊዜም ታማኝ ነበር፤ ታማኝነቱ በጲጥፋራ ቤት ጌታ አድርጎታል፡፡ ‹‹ዮሴፍ ተሸጠ፤ አገልጋይም ሆነ፤ እግሮቹ በእግር ብረት ስለሰሉ ሰውነቱም ከብረት አመለጠች፤ ቃሉ ሳይደርስ የእግዚአብሔር ቃል ፈተነው፤ ንጉሥ ላከ፤ ፈታውም፤ የሕዝብ አለቃ አድርጎ ሾመው፤ የቤቱም ጌታ አደረገው፤ በገንዘቡ ሁሉ ላይ ገዢ አደረገው፡፡ አለቆቹን እንደ እርሱ ይገስጽ ዘንድ፣ ሽማግሌዎችን እንደ እርሱ ጥበበኞች ያደርጋቸው ዘንድ››፡፡ (መዝ.፻፬፥፲፯) በዚህ ሁኔታ የነበረው ዮሴፍ የጌታው ሚስት ሲወጣና ሲገባ ዐይኗን ጣለችበት በዝሙት አዐይን ተመለከተችው፡፡ ‹‹የጌታውም ሚስት በዮሴፍ ላይ ዐይኗን ጣለችበት፤ ከእኔም ጋር ተኛ አለችው፤ እርሱም እምቢ አለ፡፡ ለጌታው ሚስቱ እንዲህ አላት፤ እነሆ ጌታዬ በቤቱ ያለውን ሁሉ ለእኔ በእጄ አስረክቦኛል፡፡ በቤቱ ያለውን ምንም የሚያውቀው የለም፤ በዚህ ቤት ከአኔ የሚበልጥ ሰው የለም፡፡ ሚስት ስለሆንሽ ከአንቺ በቀር ያልሰጠኝ ነገር የለም፤ እንዴት ይህን ትልቅ ክፉ ነገር አደርጋለሁ? እንዴትስ በእግዚአብሔር ፊት ኀጢአትን እሠራለሁ?››፡፡ (ዘፍ.፴፱፥፯)",
  },
]

// Lessons data
const lessons = [
  {
    title: "መኑ ውእቱ ገብር ኄር፤ ታማኝ አገልጋይ ማነው?",
    source: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
    link: "https://eotcmk.org/a/መኑ-ውእቱ-ገብር-ኄር፤-ታማኝ-አገልጋይ-2/",
    content:
      "በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ስያሜ የዐቢይ ጾም ስድስተኛው እሑድ ወይም ሳምንት ገብር ኄር ይባላል፤ ስያሜውን የሰጠውም ኢትዮጵያዊ ሊቅ ቅዱስ ያሬድ ነው፡፡ ከአምስቱ መጻሕፍቶቹ አንዱ በሆነው ጾመ ድጓ የዐቢይ ጾም ሳምንታት ስያሜዎች ከነሥርዓተ ማኅሌቱ አዘጋጅቷል፡፡ ስለዚህ በስድስተኛው የዐቢይ ጾም ሳምንት ከዋዜማው ቅዳሜ ጀምሮ በቤተ ክርስቲያን የሚዘመረው ዝማሬ፣ የሚሰበከው ስብከት፣ የሚሰጠው ትምህርት ገብር ኄርን ወይም ታማኝ አገልጋይን የሚያወሳ ነው፡፡",
  },
  {
    title: "የታማኝ አገልጋይ ምሳሌ",
    source: "ማቴዎስ ወንጌል",
    link: "#",
    content:
      "ለዚህም ምሳሌ እንዲሆነን በማቴዎስ ወንጌል ላይ የተጻፈው ታሪክ እናነሳለን፤ አንድ ባለ ጸጋ ሰው ባሪያዎችን ጠርቶ ለአንዱ አምስት መክሊት ሰጠው፣ ሁለት መክሊት የሰጠውም አለ፣ አንድ መክሊትም የሰጠውም አለ፡፡ ከዚህ በኋላ ወደሩቅ አገር ሄደ፡፡ አምስት መክሊት የተቀበለውም ወጥቶ ወርዶ ሌላ አምስት አትርፎ ዐስር አደረገ፡፡ ሁለት የተቀበለውም አትርፎ አራት አደረገ፡፡ አንድ የተቀበለው ግን ሄዶ መሬቱን ቆፍሮ በሻሽ ጠቅልሎ የጌታውን መክሊት ቀበራት፡፡ ከብዙ ጊዜ በኋላ ጌታቸው መጥቶ ተቆጣጠራቸው፡፡ አምስት መክሊት የተቀበለው ቀርቦ ‹‹ጌታዬ አምስት መክሊት ሰጥተኸኝ ነበር፤ እነሆ አምስት አተረፍኩ አለው፡፡ ‹‹ገብር ኄር ወምእመን ዘበሁድ ምእምነ ኮንከ ዲበ ብዙህ እሰይመከ ባዕ ውስተ ፍስሐሁ ለእግዚእከ፤ አንተ ታማኝ ባሪያ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ፤ ወደ ጌታህ ደስታ ግባ›› አለው፡፡ ሁለት የተቀበለውም ቀርቦ ‹‹ጌታዬ ሁለት መክሊት ሰጥተኸኝ ነበር፤ እነሆ ወጥቼ ወርጄ ሌላ ሁለት አትርፌ አራት አድርጌአለሁ፡፡ አንተ ታማኝ በጎ አገልጋይ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ ወደ ጌታህ ደስታ ግባ›› አለው፡፡ አንድ መክሊት የተቀበለው ግን ቀርቦ ‹‹ጌታዬ አንተ ክፉና ጨካኝ ካልዘራህበት የምታጭድ ካልበተንህበት የምትሰበስብ እንደሆንክ ስለአወቅሁ መሬቱን ቆፍሬ ቀበርኋት እነኋት መክሊትህ አለው፡፡ አንተ ሰነፍ ባሪያ መክሊቴን በጊዜ ልትሰጠኝ በተገባህ ነበር፤ እኔም ወጥቶ ወርዶ ለሚያተርፍ በሰጠሁት ነበር፡፡ የዚህን መክሊት ውሰዱና አስር መክሊት ላለው ስጡት፡፡ላለው ይሰጡታል ይጨመርለታል፤ለሌለው ግን ያለውን ይቀሙታል፡፡ይህን ሰነፍ ባሪያ እጅ እግሩን አሥራችሁ ጽኑዕ ጨለማ ወደአለበት ውሰዱት፤ጩኸትና ጥርስ ማፋጨት ወዳለበትም ጨምሩት››አለ፡፡(ማቴ.፳፭፥፲፬-፳፭)",
  },
  {
    title: "ታማኝ አገልጋይ ማነው?",
    source: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
    link: "#",
    content:
      "ባለ ጸጋ የተባለው ጌታ ነው፤ መክሊት የተባለው ልዩ ልዩ የአገልግሎት ጸጋ ነው፡፡ ያተረፉት በሚገባ በታማኝነት ያገለገሉ ቅዱሳን ሰዎች ናቸው፤ መክሊቱን የቀበረው ደግሞ በታማኝነት በተሰጠው ጸጋ ማገልገል ሲገባው ያላገለገለ ነው፡፡ ጌታቸው ሊቆጣጠራቸው መጣ ማለት በዕለተ ምጽአት ለሁሉም በአገለገለው አገልግሎት ዋጋ ለመስጠት እንደሚመጣ ያሳየናል፡፡ ያገለገሉትን ወደ ጌታህ ደስታ ግባ አላቸው ማለት ታማኝ አገልጋዮች መንግሥተ ሰማያትን ይወርሳሉና፡፡ ሰነፎች ደግሞ ጥርስ ማፋጨት ስቃይ ጽኑዕ ጨለማ ባለበት ሲዖል መግባታቸውን የሚያሳይ ነው፡፡ ከላይ ያነሳነው የቅዱስ ወንጌል ቃል ‹‹ታማኝ አገልጋይ ማነው?›› ይህ እያንዳንዱ በአርዓያ እግዚአብሔር የተፈጠረ የሰው ልጅ ጥያቄ ነው፤ የዚህን አምላካዊ ጥያቄ መልስ መስጠት ከሰው ልጆች ይጠበቃል፡፡",
  },
]

// Testimonials data
const testimonials = [
  {
    quote: "ታማኝ አገልጋይ ለሚያገለግላቸው ሰዎች ጥቅም ቅድሚያ የሚሰጥ እንጂ የራሱን ጥቅም የሚያስቀድም አይደለም፡፡",
    author: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
    role: "ከመኑ ውእቱ ገብር ኄር፤ ታማኝ አገልጋይ ማነው? ጽሑፍ",
  },
  {
    quote:
      "ዛሬ በዓለማችን የምንመለከተው ግን ‹‹ጩኸት ለአሞራ መብል ለጅግራ›› የሚባለውን መሰል ነው፡፡ በታማኝ አገልጋዮች ድካም የሚሸለሙ ታማኝ አገልጋዮች በሠሩት ሥራ የሚያቀርቡ፣ የሚወደሱ፣ ከጥቅሙ እንጂ ከድካሙ መክፈል የማይሹ እንቅፋት የሚመታው እግርን ነው፡፡",
    author: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
    role: "ከመኑ ውእቱ ገብር ኄር፤ ታማኝ አገልጋይ ማነው? ጽሑፍ",
  },
  {
    quote:
      "ታማኝ መሆን መጀመሪያ የሚጠቅመው ለራስ ነው፤ ከዚያም ለሀገር፣ ለወገን፣ ለቤተ ክርስቲያን፣ ላመኑት፣ ላላመኑት ሁሉ ይጠቅማል፡፡ በመጨረሻም የጽድቅ አክሊልን ያቀዳጃል፤ መንግሥተ ሰማያትን ያወርሳል፤ በሰውም በእግዚአብሔርም ፊት ያስከብራል፡፡",
    author: "መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ",
    role: "ከመኑ ውእቱ ገብር ኄር፤ ታማኝ አገልጋይ ማነው? ጽሑፍ",
  },
]

export default function TimihirtTarikochPage() {
  const [activeSection, setActiveSection] = useState("introduction")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">ትምህርቶችና ታሪኮች</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        ‹‹መኑ ውእቱ ገብር ኄር፤ ታማኝ አገልጋይ ማነው?›› (ማቴ.፳፬፥፵፭)
      </p>

      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <Image src="/photo_2025-04-04_01-33-42.jpg?height=800&width=1600" alt="ትምህርቶችና ታሪኮች" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="text-xl md:text-2xl font-light max-w-2xl">መጋቤ ሐዲስ ምሥጢረ ሥላሴ ማናየ</p>
          <p className="text-sm mt-2">
            ምንጭ:{" "}
            <Link href="https://eotcmk.org/a/መኑ-ውእቱ-ገብር-ኄር፤-ታማኝ-አገልጋይ-2/" className="underline">
              eotcmk.org
            </Link>
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="introduction" className="w-full">
          {/* <TabsList className="grid grid-cols-3 mb-8 w-full max-w-2xl mx-auto">
            <TabsTrigger value="introduction" onClick={() => setActiveSection("introduction")}>
              መግቢያ
            </TabsTrigger>
            <TabsTrigger value="examples" onClick={() => setActiveSection("examples")}>
              ታማኝ አገልጋዮች
            </TabsTrigger>
            <TabsTrigger value="lessons" onClick={() => setActiveSection("lessons")}>
              ትምህርቶች
            </TabsTrigger>
          </TabsList> */}

          {/* Introduction */}
          {/* <TabsContent value="introduction" className="space-y-12"> */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ስያሜ የዐቢይ ጾም ስድስተኛው እሑድ ወይም ሳምንት ገብር ኄር ይባላል፤ ስያሜውን የሰጠውም ኢትዮጵያዊ ሊቅ ቅዱስ ያሬድ
                ነው፡፡ ከአምስቱ መጻሕፍቶቹ አንዱ በሆነው ጾመ ድጓ የዐቢይ ጾም ሳምንታት ስያሜዎች ከነሥርዓተ ማኅሌቱ አዘጋጅቷል፡፡ ስለዚህ በስድስተኛው የዐቢይ ጾም ሳምንት
                ከዋዜማው ቅዳሜ ጀምሮ በቤተ ክርስቲያን የሚዘመረው ዝማሬ፣ የሚሰበከው ስብከት፣ የሚሰጠው ትምህርት ገብር ኄርን ወይም ታማኝ አገልጋይን የሚያወሳ ነው፡፡
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                ለዚህም ምሳሌ እንዲሆነን በማቴዎስ ወንጌል ላይ የተጻፈው ታሪክ እናነሳለን፤ አንድ ባለ ጸጋ ሰው ባሪያዎችን ጠርቶ ለአንዱ አምስት መክሊት ሰጠው፣ ሁለት መክሊት
                የሰጠውም አለ፣ አንድ መክሊትም የሰጠውም አለ፡፡ ከዚህ በኋላ ወደሩቅ አገር ሄደ፡፡ አምስት መክሊት የተቀበለውም ወጥቶ ወርዶ ሌላ አምስት አትርፎ ዐስር አደረገ፡፡
                ሁለት የተቀበለውም አትርፎ አራት አደረገ፡፡ አንድ የተቀበለው ግን ሄዶ መሬቱን ቆፍሮ በሻሽ ጠቅልሎ የጌታውን መክሊት ቀበራት፡፡
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                ከብዙ ጊዜ በኋላ ጌታቸው መጥቶ ተቆጣጠራቸው፡፡ አምስት መክሊት የተቀበለው ቀርቦ ‹‹ጌታዬ አምስት መክሊት ሰጥተኸኝ ነበር፤ እነሆ አምስት አተረፍኩ አለው፡፡ ‹‹ገብር
                ኄር ወምእመን ዘበሁድ ምእምነ ኮንከ ዲበ ብዙህ እሰይመከ ባዕ ውስተ ፍስሐሁ ለእግዚእከ፤ አንተ ታማኝ ባሪያ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ፤ ወደ ጌታህ ደስታ
                ግባ›› አለው፡፡ ሁለት የተቀበለውም ቀርቦ ‹‹ጌታዬ ሁለት መክሊት ሰጥተኸኝ ነበር፤ እነሆ ወጥቼ ወርጄ ሌላ ሁለት አትርፌ አራት አድርጌአለሁ፡፡ አንተ ታማኝ በጎ
                አገልጋይ በጥቂቱ ታምነሃል፤ በብዙ እሾምሃለሁ ወደ ጌታህ ደስታ ግባ›› አለው፡፡
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                አንድ መክሊት የተቀበለው ግን ቀርቦ ‹‹ጌታዬ አንተ ክፉና ጨካኝ ካልዘራህበት የምታጭድ ካልበተንህበት የምትሰበስብ እንደሆንክ ስለአወቅሁ መሬቱን ቆፍሬ ቀበርኋት
                እነኋት መክሊትህ አለው፡፡ አንተ ሰነፍ ባሪያ መክሊቴን በጊዜ ልትሰጠኝ በተገባህ ነበር፤ እኔም ወጥቶ ወርዶ ለሚያተርፍ በሰጠሁት ነበር፡፡ የዚህን መክሊት ውሰዱና
                አስር መክሊት ላለው ስጡት፡፡ላለው ይሰጡታል ይጨመርለታል፤ለሌለው ግን ያለውን ይቀሙታል፡፡ይህን ሰነፍ ባሪያ እጅ እግሩን አሥራችሁ ጽኑዕ ጨለማ ወደአለበት
                ውሰዱት፤ጩኸትና ጥርስ ማፋጨት ወዳለበትም ጨምሩት››አለ፡፡(ማቴ.፳፭፥፲፬-፳፭)
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                ባለ ጸጋ የተባለው ጌታ ነው፤ መክሊት የተባለው ልዩ ልዩ የአገልግሎት ጸጋ ነው፡፡ ያተረፉት በሚገባ በታማኝነት ያገለገሉ ቅዱሳን ሰዎች ናቸው፤ መክሊቱን የቀበረው
                ደግሞ በታማኝነት በተሰጠው ጸጋ ማገልገል ሲገባው ያላገለገለ ነው፡፡ ጌታቸው ሊቆጣጠራቸው መጣ ማለት በዕለተ ምጽአት ለሁሉም በአገለገለው አገልግሎት ዋጋ ለመስጠት
                እንደሚመጣ ያሳየናል፡፡
              </p>
            </div>
          {/* </TabsContent> */}

          {/* Examples of Faithful Servants */}
          {/* <TabsContent value="examples" className="space-y-12"> */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                ከላይ ያነሳነው የቅዱስ ወንጌል ቃል ‹‹ታማኝ አገልጋይ ማነው?›› ይህ እያንዳንዱ በአርዓያ እግዚአብሔር የተፈጠረ የሰው ልጅ ጥያቄ ነው፤ የዚህን አምላካዊ ጥያቄ
                መልስ መስጠት ከሰው ልጆች ይጠበቃል፡፡
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {biblicalFigures.map((figure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4">{figure.title}</h3>
                    <p className="text-gray-600 mb-4">{figure.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          {/* </TabsContent> */}

          {/* Lessons */}
          {/* <TabsContent value="lessons" className="space-y-12"> */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                ያገለገሉትን ወደ ጌታህ ደስታ ግባ አላቸው ማለት ታማኝ አገልጋዮች መንግሥተ ሰማያትን ይወርሳሉና፡፡ ሰነፎች ደግሞ ጥርስ ማፋጨት ስቃይ ጽኑዕ ጨለማ ባለበት ሲዖል
                መግባታቸውን የሚያሳይ ነው፡፡
              </p>
            </div>

            <div className="space-y-8">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-xl mb-2">{lesson.title}</h3>
                  {lesson.source && (
                    <div className="text-blue-600 font-medium mb-4">
                      ምንጭ: {lesson.source}
                      {lesson.link && lesson.link !== "#" && (
                        <Link href={lesson.link} className="ml-2 text-sm underline">
                          ሙሉውን ለማንበብ
                        </Link>
                      )}
                    </div>
                  )}
                  <p className="text-gray-700">{lesson.content}</p>
                </motion.div>
              ))}
            </div>
          {/* </TabsContent> */}
        </Tabs>
      </div>

      {/* Testimonials */}
      {/* <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">ከጽሑፉ የተወሰዱ ጥቅሶች</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{testimonial.author.substring(0, 2)}</span>
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Conclusion */}
      {/* <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
          ጻድቃን፣ ሰማዕታትና ቅዱሳን በታማኝ አገልግሎታቸው ፈጣሪያቸውን ደስ አሰኝተው ከብረዋል፡፡ በሓላፊው ገንዘብ ያልታመኑት ይሁዳ፣ ሐናንያ፣ ሰጲራ፣ የደረሰባቸውን ጉዳት አይተናል፤
          በአካን ወልደ ከርሚንም ተመሳሳይ ቅጣት ደርሶበታል፡፡ (ሐዋ.፭፥፩፣ ፩፥፳፭)
        </p>
        <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
          ለዚህ ነበር ቅዱስ ዳዊት ‹‹አቤቱ፥ አድነኝ፥ ደግ ሰው አልቆአልና፥ ከሰው ልጆችም መተማመን ጎድሎአልና››ያለው፡፡ (መዝ.፲፩፥፩) ስለዚህ ሁሉም በአለበት የአገልግሎት መስክ
          ታማኝ አገልጋይ ሆኖ ‹‹አንተ በጎ ታማኝ አገልጋይ በጥቂቱ ታምነሃል፤ በብዙ እሾምሀለሁ›› የሚለውን የጌታውን የምስጋና ቃል መስማት ይገባዋል፡፡ መልካም አገልግሎት አገልግለን
          መንግሥቱን እንድንወርስና ‹‹ገብር ኄር›› እንድንባል አምላካችን ይርዳን፤ አሜን፡፡
        </p>
      </div> */}
    </div>
  )
}
