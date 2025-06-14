import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, BookOpen, Church, Landmark, Home, Globe, Building } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">የኮሎኝ ቅዱስ ሚካኤል ቤተ ክርስቲያን ታሪክ</h1>

        {/* Introduction Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          {/* Image Container */}
          <div className="w-full ">
            <div className="relative h-[400px] w-[75%] m-auto mb-12 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/20201213_130221 (2).jpg"
                alt="Church History"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg mb-4 text-gray-700 leading-relaxed px-20 py-2">
              ቀዳሚ ገጽአሁን በመላው አውሮፓ፥ በአፍሪካ፥ በአሜሪካ፥ በካናዳና በአውስትራልያ ከተቋቋሙት ቀደምት አብያተ ክርስቲያናት መካከል የመጀመሪያው ቀዳማዊና ፋና ወጊው ቤተ ክርስቲያን የኮሎኝ ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ነው። ቤተ ክርስቲያናችን በሊቀ ካህናት ዶክተር መርዓዊ ተበጀ ፊት አውራሪነት፥ በብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት አባታዊ ፈቃድ በዚያን ጊዜ በጅቡቲና በምሥራቅ አፍሪካ ሊቀ ጳጳስ በነበሩት፥ በአሁኑ ጊዜ ደግሞ የኖርዲክ እና ግሪክ ሀገረ ስብከት ሊቀ ጳጳስ በኾኑተ በብፁዕ አቡነ ኤልያስ ተባርኮ ተከፈተ።

              <p className="py-2">አመሠራረቱም እንደሚከተለው ነው።</p>
              በ 1971 ዓም ለሊቀ ካህናት ዶክተር መርዓዊ ተበጀ እና ዲያቆን በዕደ ማርያም መርሻ በብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት ፈቃድ ወደ ጀርመን ለከፍተኛ ትምህርት ተላኩ። ወደ ጀርመን ሀገር በገቡ በሁለት ዓመት ውስጥ ቤተ ክርስቲያን ለማቋቋም ጽንሰ ሀሳቡ በመርህ ደረጃ ለውይይት ቀረበ። በሃይደልበርግ ኗሪ ከሆኑ ወንድሞች ጋር በእመቤታችን ቅድስት ማርያም የጽዋ ማኅበር ስም መሰባሰብ ጀመሩ። ማኅበሩ የመገናኛ ድልድይ ሆኖ ሊያገለግላቸው ችሏል። በተለይም በ 1973 ዓ.ም. በምድረ ጀርመን በሃይደልበርግ ከተማ የመጀመሪያው ቅዳሴ ተቀደሰ። ለምእመናንም ቡራኬ ተሰጠ። በዚህም መንፈሳዊ አገልግሎት በለንደን ለጃማይካውያን መንፈሳዊ አገልግሎት ለመስጠት ተመድበው የነበሩት አባ አረጋዊ ወልደ ገብርኤል በኋላ የመላው አውሮፓ ሊቀ ጳጳስ የነበሩት ብፁዕ አቡነ ዮሐንስ ተገኝተዋል። ሥርዓተ ቅዳሴውንም መርተዋል። ብፁዕ አቡነ ዮሐንስ ካላቸው ፍቅርን ከተላበሰ ሰብእነታቸው የተነሣ መልካም ግንኙነት ነበራቸው። ቤተ ክርስቲያኑ ሲቋቋምም በበዓሉ ላይ ቤተ ክርስቲያናቸውን ወክለው ተገኝተዋል። የመጀመሪያው ቅዳሴ ከተካሄደ በኋላ ቤተ ክርስቲያን የማቋቋሙ ፍላጎት እየተጠናከረ መጣ። በሃይደልበርግና በሌሎች ከተማዎች የሚገኙ ኢትዮጵያውያን ተካፋዮች የሆኑባቸው የዘመን መለወጫ፥ የልደትና የትንሣኤ በዓላት ይከበሩ ጀመር።

              <p className="py-2">
                ከዚህ በኋላ ሁኔታዎች ሁሉ መልክ መልክ መያዝ ጀመሩ። የምእመናኑም ቁጥር እየጨመረ ሄደ። በአውሮፓውያኑ የሰማኒያዎቹ ዓመታት ላይ አያሌ ኢትዮጵያውያንና ኤርትራውያን ወደ ጀርመን በብዛት የገቡበት ጊዜ ነበር። በተለይም " Landesarbeitsgemeinschaft Ausländische Flüchtlinge Nordrhein-Westfalen in Düsseldorf e.V." የሚባል በመንግሥት በጀት የሚደጎም ማኅበር ተቋቁሞ የስደተኞችን ጉዳይ ይከታተል ስለነበር የኢትዮጵያን ስደተኞች የሚመለከት ዐውደ ጥናት ከመሰረም 8-11፥1973 በዱስልዶርፍ ከተማ ተካሄደ። የቤተ ክርስቲያናችን መሥራቾችም ከፕሮፌሰራቸው ከዶ/ር ሃየር ጋር ጸሎት እንዲያደርጉና ትምህርት እንዲሰጡ ተጋበዙ። የእሁዱ መርሃ ግብር የእኛ ብቻ ነበር፧ በጀርመንኛ ለሚቀርበው ጥያቄ በመምህራቸው እየታገዙ፧ ስለ ቤተ ክርስቲያናችን በቂ ግንዛቤ ለማስጨበጥ ችለዋል። ከሀገሩ ከወጣ በኋላ እንድ ቀን እንኳ ቃለ እግዚአብሔር ሰምቶ ያማያውቀው ሁሉ ያነባ ነበር። በተለይ ፕሮፌሰር ሃየር እኛን ለመርዳት ቆርጠው የተነሡት የዚያን ሕዝብ ስሜት ከተመለከቱ በኋላ ነበር ማለት ይቻላል።
              </p>
              <p className="py-2">
              ቤተ ክርስቲያን ለምን አናቋቁምም የሚለው ጥያቄ የዕለት ከዕለት ጥያቄ ሆኖ መቅረብ ጀመረ። ለዚህም አንድ አመች ዕድል ተፈጠረ። ከላይ በተጠቀሰው በ 1973 ዓ.ም. የኢትዮጵያ ፓትርያርክ ብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት የጀርመን ወንጌላዊት ቤተ ክርስቲያን ባደረገችላቸው ጥሪ መሠረት ጀርመንን ሲጎበኙ፥ ቤተ ክርስቲያን እድናቋቁም ፈቃዳቸው ይሆን ዘንድ ፍራንክፈርት ላይ ጥያቄ ቀረበ። ቅዱስነታቸውም ጥቂት ካሰቡ በኋላ ተማሪዎቹን ካህናት «ትምህርታችሁን ጨርሳችሁ ለምን ወደ ሀገራችሁ አትመለሱም» አሉዋቸው። እነርሱም «ቅዱስ አባታችን ከሀገሩ የወጣው ሕዝብ ብዙ ስለሆነ፧ እንደሌሎቹ ኦርቶዶክሳውያን የእኛም አማንያን ቤተ ክርስቲያን ያስፈልጋቸዋል» የሚል መልስ ሰጡ። አስከትለዋቸው የመጡት ብፁዓን ሊቃነ ጳጳሳት አቡነ ዜና ማርቆስ፣ አቡነ ጎርጎርዮስ፣ አቡነ ኤልያስ እና የጠቅላይ ቤተ ክህነት ዋና ሥራ አስኪያጅ ሊቀ ማእምራን አበባው ይግዛው በውጭ ሀገር ትምህርታቸውን ተከታትለው የጨረሱ፧ በዝርዎት ያሉትን የግሪካውያንንና የሌሎቹንም ኦርቶዶክሳውያን አብያተ ክርስቲያናት ሁኔታ ስለሚያውቁ ለሀሳቡ ላይ ድጋፍ ሰጥተዋል። በመጨረሻም «ለማናቸውም ደብዳቤ ጻፉ» ብለው ካረፉበት ክፍል ቡራኬ ተቀብለው ወጡ።
              </p>
            </p>
          </div>

        </div>

        {/* Timeline Section - Enhanced */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">ቤተ ክርስቲያናችን በታሪክ ውስጥ</h2>

          <div className="space-y-12">
            {[
              {
                year: "1971 – 1973",
                title: "የጽዋ ማኅበር መቋቋም",
                description: "በሃይደልበርግ ለከፍተኛ ትምህርት ከኢትዮጵያ በመጡት ካህናት አስተባባሪነት የመጀመሪያው የጽዋ መርሃ ግብር ተጀመረ።",
                icon: "Home",
                color: "bg-blue-100 text-blue-700",
                image: "",
              },
              {
                year: "1973 – 1975",
                title: "",
                description:
                  "",
                icon: "Users",
                color: "bg-indigo-100 text-indigo-700",
                image: "",
              },
              {
                year: "1971 – 1973",
                title: "",
                description:"",
                icon: "BookOpen",
                color: "bg-purple-100 text-purple-700",
                image: "",
              },
              {
                year: "1973 – 1975",
                title: "",
                description:"",
                icon: "Globe",
                color: "bg-teal-100 text-teal-700",
                image: "",
              },
              {
                year: "1975 – 1980",
                title: "",
                description:"",
                icon: "Building",
                color: "bg-amber-100 text-amber-700",
                image: "",
              },
              {
                year: "1980 – 1985",
                title: "",
                description:"",
                icon: "Building",
                color: "bg-amber-100 text-amber-700",
                image: "",
              },
              {
                year: "1985 – 1995",
                title: "",
                description:"",
                icon: "Building",
                color: "",
                image: "",
              },
              {
                year: "1995 – 2005",
                title: "",
                description:"",
                icon: "Building",
                color: "bg-amber-100 text-amber-700",
                image: "",
              },
              {
                year: "2005 – 2015",
                title: "",
                description:"",
                icon: "Building",
                color: "bg-amber-100 text-amber-700",
                image: "",
              },
              {
                year: "2015 – 2025",
                title: "",
                description:"",
                icon: "Building",
                color: "bg-amber-100 text-amber-700",
                image: "",
              }
            ].map((period, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < 4 && (
                  <div className="absolute left-[39px] top-[80px] h-[calc(100%+40px)] w-1 bg-gray-200 z-0 md:left-1/2 md:-ml-0.5"></div>
                )}

                <div className="relative z-10 md:grid md:grid-cols-2 md:gap-8 items-center">
                  {/* Timeline node */}
                  <div className="flex items-center absolute left-0 md:left-1/2 md:-ml-5 mt-6">
                    <div
                      className={`h-10 w-10 rounded-full ${period.color} flex items-center justify-center shadow-md`}
                    >
                      {period.icon === "Home" && <Home className="h-5 w-5" />}
                      {period.icon === "Users" && <Users className="h-5 w-5" />}
                      {period.icon === "BookOpen" && <BookOpen className="h-5 w-5" />}
                      {period.icon === "Globe" && <Globe className="h-5 w-5" />}
                      {period.icon === "Building" && <Building className="h-5 w-5" />}
                    </div>
                  </div>

                  {/* Left side (even indexes on mobile, odd on desktop) */}
                  <div
                    className={`ml-16 md:ml-0 ${index % 2 === 1 ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
                  >
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${period.color.split(" ")[0].replace("bg-", "border-")} hover:shadow-lg transition-shadow`}
                    >
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${period.color}`}>
                        {period.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{period.title}</h3>
                      <p className="text-gray-600">{period.description}</p>

                      {/* <div className="mt-4 relative h-40 rounded-md overflow-hidden">
                        <Image
                          src={period.image || "/placeholder.svg"}
                          alt={period.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div> */}
                    </div>
                  </div>

                  {/* Right side (empty for layout purposes) */}
                  <div className={`hidden md:block ${index % 2 === 1 ? "md:col-start-2" : "md:col-start-1"}`}></div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Church Administration Section - New Design */}
        <div className="mb-16">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-600"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-blue-600"></div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-xl">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">የቤተ ክርስቲያን አስተዳደር</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>

              {/* Administrator */}
              <div className="max-w-md mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">አስተዳዳሪ</h3>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xl text-blue-700 font-medium">ሊቀ ካህናት ዶክተር መርዓዊ ተበጀ</p>
                  </div>
                </div>
              </div>

              {/* Current Council */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  አሁን ያሉ የሰበካ ጉባኤ አስተዳደር (2016-2019 ዓ.ም.)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="space-y-4">
                    {[
                      "ወይዘሪት ሒሩት መለሰ",
                      "አቶ ታመነ መልአኩ",
                      "አቶ ቴዎድሮስ ሣህሉ",
                      "አቶ በላይ ሶሎሞን"
                    ].map((name, index) => (
                      <div 
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-3 group"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 font-medium">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{name}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      "አቶ ይበልጣል",
                      "አቶ ወንድም",
                      "ወይዘሮ መሠረት",
                      "ወይዘሮ ዮርዳኖስ"
                    ].map((name, index) => (
                      <div 
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-3 group"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 font-medium">{index + 5}</span>
                        </div>
                        <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
