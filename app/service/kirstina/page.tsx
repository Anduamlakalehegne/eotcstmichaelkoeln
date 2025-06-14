"use client"

import Image from "next/image"
import { Calendar, Clock, Users } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function KirstinaPage() {
  const [language, setLanguage] = useState<"en" | "am">("am")

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="mb-6 flex justify-end">
        <div className="flex items-center gap-2 rounded-lg border p-1">
          {/* <Button
            variant={language === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage("en")}
            className="text-sm"
          >
            English
          </Button> */}
          {/* <Button
            variant={language === "am" ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage("am")}
            className="text-sm"
          >
            አማርኛ
          </Button> */}
        </div>
      </div>

      <div className="">
        <h1 className="mb-8 text-3xl font-bold">{language === "en" ? "Kirstina (Baptism)" : "ክርስትና (የልጅነት ጥምቀት)"}</h1>

        {/* Hero Section */}
        <div className="relative mb-12 h-[500px] overflow-hidden rounded-xl">
          <Image src="/photo_2025-06-05_21-57-13.jpg" alt="Baptism Ceremony" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-lg font-light md:text-xl">
              {language === "en"
                ? "The sacred sacrament of initiation into the Christian faith"
                : "ወደ ክርስትና እምነት የሚያስገባ ቅዱስ ምሥጢር"}
            </p>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Calendar className="text-blue-600" />
              <h3 className="font-semibold">{language === "en" ? "When" : "መቼ"}</h3>
            </div>
            <p className="text-gray-600">
              {language === "en" ? "Every Sunday after Divine Liturgy" : "በየሰንበት ከቅዳሴ በፊት"}
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Clock className="text-blue-600" />
              <h3 className="font-semibold">{language === "en" ? "Duration" : "የሚወስደው ጊዜ"}</h3>
            </div>
            <p className="text-gray-600">{language === "en" ? "Approximately 1 hour" : "በግምት አንድ ሰዓት"}</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Users className="text-blue-600" />
              <h3 className="font-semibold">{language === "en" ? "Participants" : "ተሳታፊዎች"}</h3>
            </div>
            <p className="text-gray-600">
              {language === "en" ? "Parents, Godparents, and the Child" : "ወላጆች፣ የክርስትና አባት/እናት እና ልጁ"}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          {language === "en" ? (
            <>
              <h2 className="mb-4 text-2xl font-bold">About Kirstina</h2>
              <p className="mb-6">
                Kirstina (Baptism) is one of the seven sacraments of the Ethiopian Orthodox Tewahedo Church. It is the
                door through which one enters into the Christian faith and becomes a member of the body of Christ.
              </p>

              <div className="mb-8 rounded-lg bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-bold">Requirements</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Birth certificate of the child</li>
                  <li>Orthodox Christian godparents</li>
                  <li>Baptismal garments (white clothing)</li>
                  <li>Cross for the child</li>
                  <li>Prior arrangement with the church office</li>
                </ul>
              </div>

              <h3 className="mb-4 text-xl font-bold">The Ceremony</h3>
              <p className="mb-6">
                The baptismal service includes prayers, anointings, and the threefold immersion in blessed water,
                symbolizing death and resurrection with Christ. The ceremony concludes with the child receiving Holy
                Communion.
              </p>

              <div className="my-8 grid gap-8 md:grid-cols-2">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Baptism Preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Baptism Ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="mb-4 text-xl font-bold">Spiritual Significance</h3>
              <p>
                Through baptism, we are born again of water and the Spirit, cleansed from original sin, and become
                children of God and members of the Church. It is a necessary sacrament for salvation, as Christ himself
                declared.
              </p>
            </>
          ) : (
            <>
              <h2 className="mb-4 text-2xl font-bold">ስለ ክርስትና</h2>
              <p className="mb-6">
                አስቀድመን በሥጋ ከእናትና ከአባታችን በዘር በሩካቤ እንደተወለድንና የሥጋ ልጅነትን እንዳገኘን ሁሉ በማየ ገቦ ስንጠመቅ ከአብራከ መንፈስ ቅዱስ እንወለዳለን፡፡
                ይህንን አስመልክቶ ጌታችን "ከሥጋ የሚወለድ ሥጋ ነው፥ ከመንፈስ የሚወለድ መንፈስ ነው" ብሎ ከማስተማሩ በፊት "ሰው ዳግመኛ ካልተወለደ በቀር የእግዚአብሔርን
                መንግሥት ሊያይ አይችልም" በማለት (ዮሐ.3፥3 እና 6) በምሥጢረ ጥምቀት ሀብተ ወልድና ስመ ክርስትና ስለመገኘቱ አስተምሯል፡፡ ሐዋርያውም በጥምቀት ስላገኘነው
                የልጅነት ጸጋ አስመልክቶ ሲናገር "አባ አባት ብለን የምንጮኸበትን (የምንጣራበትን) የልጅነትን መንፈስ ተቀበላችሁ እንጂ እንደገና ለፍርሃት የባርነትን መንፈስ
                አልተቀበላችሁምና፡፡ የእግዚአብሔር ልጆች መሆናችንን ያ መንፈስ ራሱ ከመንፈስ ጋር ይመሰክራል" ብሏል (ሮሜ.8፥15-16)፡፡ ጌታችንም ለተቀበሉት ሁሉ በስሙም
                ላመኑበት በጠቅላላው የእግዚአብሔር ልጆች ይሆኑ ዘንድ ሥልጣንን ሰጥቷቸዋል፡፡ እነርሱም ከእግዚአብሔር ተወለዱ እንጂ ከደም ወይም ከሥጋ ፈቃድ ወይም ከወንድ ፈቃድ
                አለመወለዳቸው ተገልጿል (ዮሐ.1፥11-13)፡፡ እንግዲህ እኛ ክርስቲያኖች ሁለት ልደታት እንዳሉን እናስብ፡፡ ይኸውም መጀመሪያው ከሥጋ እናትና አባታችን የተወለድነው
                ሲሆን፤ ሁለተኛው ደግሞ ከእግዚአብሔር የምንወለደው ነው፡፡ ከተወለድን በኋላ እድገታችን በሁለቱም ወገን መሆን ያስፈልጋዋል፡፡ ሰው ሥጋዊም መንፈሳዊም ነውና፡፡ ገላ
                3፡26 ፡ ቲቶ 3፡ 5 ፡ 1ኛጴጥ 1፡23
              </p>

              <div className="mb-8 rounded-lg bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-bold">የልጅነት ጥምቀት በምን ይፈጸማል?</h3>
                <p className="mb-4">
                  ልጅነት የምታሰጠዋ ጥምቀት አንዲት ናት (ኤፌ 4፡4-5)፡፡ ነገር ግን በሦስት ዋና ዋና መንገዶች ልትፈጸም ትችላለች። የውሃ ጥምቀት በካህናት አማካኝነት
                  በተጸለየበት ውሃ ውስጥ በሥላሴ ስም ተጠምቀን በመንፈስ ቅዱስ ግብር ከእግዚአብሔር የምንወለድበት ነው (ዮሐ 3፡3-6)፡፡ ጥምቀት በመርህ ደረጃ በውኃ የሚፈጸም
                  ነው፡፡ ውኃው በጸሎት በተባረከ ጊዜ ልጅነትን የሚሰጥ የእግዚአብሔር መንፈስ ስለሚያድርበት በእምነት ሆኖ በውኃ የሚጠመቅ ከውኃና ከመንፈስ ቅዱስ ይወለዳል፡፡
                  ጥምቀት የእግዚአብሔር ቸርነት መገለጫ ነው፡፡ ማንም ሰው ደሃ እንኳ ቢሆን ቢያንስ ውኃ ይኖረዋልና በጸጋ ከእግዚአብሔር እንወለድ ዘንድ በውኃ መጠመቅ ይገባል፡፡
                  በውኃ መጠመቅ እየቻሉ መጠመቅን እንደተራ ነገር አድርገው የሚያቃልሉ ሰዎች ኤሳው እንዳቃለላት ብኩርና ባለማወቅ የእግዚአብሔርን ጸጋ ያቃልላሉ፡ በአንጻሩ ደግሞ
                  በፍጹም ልብ የክርስትናን ትምህርት አምነው ከመጠመቃቸው በፊት በሰማዕትነት የሚያርፉ ሰማዕታት እግዚአብሔር ባወቀ የልጅነትን ጥምቀት ከመንፈስ ቅዱስ ወይም ከእሳት
                  ይቀበላሉ፡፡ የመንፈስ ቅዱስ ጥምቀት ማለት ደግሞ በውሃ ሳንጠመቅ እግዚአብሔር በፍቃዱ ጸጋውን በመላክ የሚሰጠን ልደት ነው። ለዚህም ምሳሌ የሚሆነን ቅዱሳን
                  ሐዋርያት የተጠመቁት ጥምቀት ነው (ሉቃ 3፡16 ፡ ሐዋ 1፡5 ፡ ሐዋ 2፡1-4 ፡ 1ኛ ቆሮ 12፡13)፡፡ ሦስተኛው የደም ጥምቀት ሲሆን ይህ የሰማዕታት የጥምቀት
                  ዓይነት ነው። የክርስትናን እምነት በመማር ላይ ሳሉ ወይም ተምረው ሳይጠመቁ ወይም ሁለቱንም ሳያውቁ ክርስቲያኖች ስለ ክርስቶስ ብለው መሥዋዕት መሆናቸውን
                  ተመልክተው "ኢየሱስ ክርስቶስ እውነተኛ አምላክ ነው፤ የክርስቲያኖች እምነት እውነተኛ ነው" በማለት መስክረው በሰማዕትነት የሚሞቱ ሰዎች ደማቸው /ስቃያቸው/
                  በእግዚአብሔር ቸርነት እንደ ጥምቀት ይቆጠርላቸዋል። ልጅነትን ያገኙበታል፤ ኃጢአታቸውም ይሰረይላቸዋል።
                </p>
              </div>

              <h3 className="mb-4 text-xl font-bold">ጥምቀት እንዴት ይፈጸማል?</h3>
              <p className="mb-6">
                ተጠማቂው ንዑሰ ክርስቲያን ከሆነ መሠረታዊ የሃይማኖት ትምህርቶችን ተምሮ እምነቱ የተመሰከረለት መሆን አለበት። ሕጻናት የሆኑ እንደሆኑ ግን ለሕጻናቱ የክርስትና
                እናትና አባት ሊሆኑ የመጡት ሰዎች ስለሕጻናቱ እምነት መስክረውላቸው እንዲጠመቁ ይደረጋል። በሚጠመቅበት ጊዜ በውሃ ውስጥ ሶስት ጊዜ ብቅ ጥልቅ ማለት አለበት ፤
                የክርስቶስ ሞትና ትንሳኤ ምሳሌ ነውና። ተጠማቂው የሚጠመቀው በአብ በወልድና በመንፈስ ቅዱስ ስም ነው (ማቴ 28 ፥ 19)። ተጠማቂዎች ባለትዳሮች ከሆኑና ቤተሰብም
                ካላቸው ሁሉም ተምረው አምነው በአንድነት መጠመቅ አለባቸው። ከተጠመቀ በኋላ መቁረብ (ቅዱስ ሥጋውንና ክቡር ደሙን መቀበል) ይገባል። ይህ ካልሆነ ጥምቀቱ ህያው
                አይሆንም።
              </p>

              <p className="mb-6">
                እንዲያጠምቁ ስልጣን ያላቸው ከክህነት ደረጃዎች ውስጥ ኢጲስቆጶስና ቀሳውስት ብቻ ናቸው፡፡ ይህም ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ የማጥመቅ ስልጣንን የሰጠው
                ለአስራ አንዱ ሐዋርያት ብቻ ስለሆነ ነው (ማቴ 28፡19)፡፡ ዲያቆናት እንዲያጠምቁ አልተፈቀደላቸውም (ማቴ 28፡19 እና ፍት ነገ አንቀጽ 3)። ክህነት በሌለው ሰው
                የተከናወነ ጥምቀት እንደ እጥበት እንጂ እንደ ጥምቀት አይቆጠርም፡፡ በዚህ መንገድ "የተጠመቀ" ሰው ልጅነት የምታስገኘዋን እውነተኛዋን ጥምቀት መጠመቅ አለበት፡፡
                ጥምቀት በመድፈቅ ወይም በመንከር ነው እንጂ በመርጨት (በንዝሐት) አይፈጸምም፡፡ ምሳሌውን፣ ምስጢሩንና ሥርዓቱን ያፋልሳልና፡፡ ጥምቀት ማለት መነከር ማለት ስለሆነ
                ውኃ ውስጥ ገብቶ መውጣትን ያመለክታል፡፡ ስለዚህም በአብ በወልድ በመንፈስ ቅዱስ ስም ሦስት ጊዜ ውኃ ውስት ገብቶ በመውጣት ይከናወናል (ማቴ 28፡19)፡፡ በመጽሐፍ
                ቅዱስም የተገለጠው በመንከር የተከናወነው ጥምቀት ነው፡፡
              </p>

              <p className="mb-6">
                በሐዋርያት ሥራ ላይ "ሰረገላውም ይቆም ዘንድ አዘዘ፥ ፊልጶስና ጃንደረባው ሁለቱም ወደ ውኃ ወረዱ፥ አጠመቀውም። ከውኃውም ከወጡ በኋላ የጌታ መንፈስ ፊልጶስን
                ነጠቀው፤ ጃንደረባውም ሁለተኛ አላየውም፥ ደስ ብሎት መንገዱን ይሄድ ነበርና (ሐዋ 8፡38-39)" በሚለው ቃል ውስጥ "ከውኃ ከወጡ በኋላ" የሚለው የሚያመለክተው
                ጃንደረባው የተጠመቀው ውኃ ውስጥ ገብቶ እንደነበር ነው፡፡ "እንግዲህ ክርስቶስ በአብ ክብር ከሙታን እንደ ተነሣ እንዲሁ እኛም በአዲስ ሕይወት እንድንመላለስ፥ ከሞቱ
                ጋር አንድ እንሆን ዘንድ በጥምቀት ከእርሱ ጋር ተቀበርን። ሞቱንም በሚመስል ሞት ከእርሱ ጋር ከተባበርን ትንሣኤውን በሚመስል ትንሣኤ ደግሞ ከእርሱ ጋር እንተባበራለን
                (ሮሜ 6፡4-5 ቆላ 2፡12)" በሚለው ቃል ውስጥ መቀበር መቃብር ውስጥ መግባትን፣ ትንሣኤ ደግሞ ከመቃብር መውጣትን እንደሚያመለክት ጥምቀትም በውኃ ውስጥ ገብቶ
                (በመነከር) መውጣትን ይጠይቃል፡፡
              </p>

              <p className="mb-6">
                ሐዋርያው ቅዱስ ጳውሎስ "እንደ ምሕረቱ መጠን ለአዲስ ልደት በሚሆነው መታጠብና በመንፈስ ቅዱስ በመታደስ አዳነን እንጂ፥ እኛ ስላደረግነው በጽድቅ ስለ ነበረው ሥራ
                አይደለለም (ቲቶ 3፡5)" እንዲሁም "አሁንስ ለምን ትዘገያለህ? ተነሣና ስሙን እየጠራህ ተጠመቅ ከኃጢአትህም ታጠብ (ሐዋ 22፡16)" ተብሎ ለሳውል በተነገረው ቃል
                ውስጥ "መታጠብ" ሰውነትን በሙሉ ነውና ጥምቀትም በመነከር ይከናወናል፡፡ በአራቱም ወንጌላት የጌታችን ጥምቀትም በውኃ ውስጥ ገብቶ በመውጣት መሆኑ ተጽፏል፡፡
                "ኢየሱስም ከተጠመቀ በኋላ ወዲያው ከውኃ ወጣ፤ እነሆም፥ ሰማያት ተከፈቱ የእግዚአብሔርም መንፈስ እንደ ርግብ ሲወርድ በእርሱ ላይም ሲመጣ አየ (ማቴ 3፡16)"
                በሚለው ቃል ውስጥ "ከውኃ ወጣ" የሚለው የጌታችን ጥምቀት የተከናወነው በመነከር እንደነበር ያሳያል፡፡ መረጨት ወይም ማፍስስ ውኃ ውስጥ ገብቶ መውጣትን
                አይጠይቅምና፡፡ በተጨማሪም በሥጋ መወለድ በእናት ማኅፀን ውስጥ ቆይቶ መውጣትን የሚያመለክት እንደሆነ ሁሉ "ከውኃና ከመንፈፈስ ቅዱስ መወለድም" እንዲሁ ውኃ ውስጥ
                ገብቶ መውጣትን (መነከርን) ይጠይቃል፡፡ ስለዚህም ነው ጥምቀት "ዳግመኛ መወለድ" የተባለው (ዮሐ 3፡3)፡፡
              </p>

              <div className="my-8 grid gap-8 md:grid-cols-2">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image src="/photo_2025-06-05_21-57-14.jpg?height=300&width=400" alt="የጥምቀት ዝግጅት" fill className="object-cover" />
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/photo_2023-01-22_21-43-32.jpg?height=300&width=400"
                    alt="የጥምቀት ሥነ-ሥርዓት"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="mb-4 text-xl font-bold">ስመ ክርስትና (የክርስትና ስም)</h3>
              <p className="mb-6">
                ስም አንድ ሰው ከሌላው ተለይቶ የሚታወቅበት ነው። ሰው ከእናትና ከአባቱ ሲወለድ ስም እንደሚወጣለት ሁሉ በጥምቀት ከውኃና ከመንፈስ ቅዱስ ሲወለድም ስም ይወጣለታል፡፡
                ስለዚህ አንድ ክርስቲያን ሁለት ዓይነት ስሞች ሊኖሩት ይችላል። አባትና እናት የሚያወጡለት ስም የተጸውኦ ስም ይባላል፡፡ በጥምቀት ጊዜ የሚወጣለት ስም ደግሞ
                የክርስትና ስም ይባላል፡፡ በጥምቀት ሀብተ ወልድና ስመ ክርስትና ይገኝበታል፡፡ በክርስቶስ የሚያምን ሰው ክርስቲያን ሲባል እምነቱ ደግሞ ክርስትና ይባላል። ክርስቲያን
                ማለት የክርስቶስ ወገን የሆነ ማለት ነው። በመሆኑም በክርስቶስ አምነን በሥላሴ ስም መጠመቃችንን የሚገልጸው ስም ስመ ክርስትና ይባላል። ስያሜውም ተጠማቂው
                ከተጠመቀበት ዕለት ጋር ተያይዞ ሊሰየም ይችላል። በመንፈሳዊ አገልግሎት ስንሳተፍ ስመ ክርስትናችንን እንጠቀማለን፡፡ የክርስትና ስም መጽሐፍ ቅዱሳዊ ትውፊት ያለው
                ነው፡፡ ይህም እግዚአብሔር አብራምን አብርሃም፣ ያዕቆብን እስራኤል፣ ሰምዖንን ጴጥሮስ፣ ሳውልን ጳውሎስ እንዲባል እንዳደረገው ያለ ነው፡፡
              </p>

              <h3 className="mb-4 text-xl font-bold">ለጥምቀት የተወሰነ ዕድሜ</h3>
              <p className="mb-6">
                በሐዋርያት ስብከት ያመኑና በማንኛውም የዕድሜ ክልል የሚገኙ ሁሉ ይጠመቁ ነበር (የሐ ሥራ 16፡ 15 1ቆሮ 1፡15) ። በኋላ ግን ወላጆቻቸው ሊያስተምሯቸው ቃል
                እየገቡ ልጆቻቸውን ወንዶችን በአርባ ሴቶችን በሰማንያ ቀናቸው ማጥመቅ ተጀመረ። ለዚህም መሠረቱ የእስራኤል ልጆች በተወለዱ ወንድ በአርባ ሴት በሰማንያ ቀናቸው
                ወላጆቻቸው መባዕ (ስጦታ) ይዘውላቸው ወደ ቤተ መቅደስ እየሄዱ በእስራኤልነት (የዜግነት) መዝገብ እያስመዘገቡ የተስፋዋ ምድር ከነዓን ባለመብቶች (ወራሾች)
                ያደርጓቸው እንደነበረ ነው (ዘሌ 12፡1-10)፡፡ አዳም በተፈጠረ በ40 ቀኑ፣ ሔዋንም በተፈጠረች በ80 ቀኗ ወደ ርስታቸው ገነት እንደገቡ ሕጻናትም በ40 እና በ80
                ቀናቸው ተጠምቀው የሰማያዊት ኢየሩሳሌም አምሳል ወደሆነችው ወደ ቤተክርስቲያን ይገባሉ፡፡
              </p>

              <p className="mb-6">
                በኦርቶዶክሳዊት ቤተክርስቲያን ህጻናት ወላጆቻቸው እንዲሁም ክርስትና እናት ወይም አባት ሃይማኖታቸውን ሊያስተምሯቸው ሃላፊነት ወስደው የክርስትና አባት ወይም እናት
                በተጨማሪ ቃል ገብተው ክርስትና በመነሳት (በመጠመቅ) የወላጆቻቸውን ርስት መንግስተ ሰማያትን ይወርሳሉ።ከአርባ እና ከሰማንያ ቀን በኋላ የሚመጡ ተጠማቂዎች ግን
                ሃይማኖታቸውን ተምረው ካመኑ በኋላ በማንኛውም የዕድሜ ክልል መጠመቅ ይችላሉ ። በሕይወት እስካሉ ድረስ መቸም ቢሆን ከመጠመቅ የሚያግዳችው ነገር የለም ።
              </p>

              <h3 className="mb-4 text-xl font-bold">የክርስትና አባትና እናት</h3>
              <p className="mb-6">
                በ40 እና በ80 ቀናቸው ለሚጠመቁ ሕጻናት ስለ እምነታቸው ባለው ነገር ሁሉ ኃላፊነት የሚወስዱ የክርስትና አባትና እናት እንዲኖራቸው ያደረጉት በ4ኛው መ/ክ/ዘ
                የነበረው የቤተ ክርስቲያናችን የመጀመሪያው ኢጲስ ቆጶስ አባ ሰላማ ከሳቴ ብርሃን ናቸው። ዓላማውም መንፈሳዊ ዝምድናን (አበ ልጅነትን) ማጠናከሪያ መንገድ ነው። በአበ
                ልጅነት የተዛመዱ ሰዎች በጋብቻ መዛመድ አይችሉም። በሥጋ የተዛመዱ ከ7ተኛ የዝምድና ሐረግ በኋላ መጋባት የሚፈቀድ ሲሆን በአበ ልጅ ግን የተዛመደ ግን የቁጥር ገደብ
                የለውም (ፈጽሞ መጋባት አልተፈቀደለትም)፡፡ ይህም የሚያሳየው ከሥጋ ዝምድና ይልቅ ክብር የሚሰጠው ለመንፈሳዊ ዝምድና መሆኑን ነው።
              </p>

              <p className="mb-6">
                ከክርስትና አባትነትና እናትነትን የሚከለክሉ ነገሮች አሉ፡፡ እነዚህም የሥጋ ዝምድና ያላቸው፣ የጋብቻ ዝምድና ያላቸው፣ ዕድሜያቸው ለማስተማር ለማሳመን ያልደረሰ፣
                እምነት ትምህርት ችሎታ የሌላቸው፣ እምነታቸው ከተጠማቂው ጋር ተመሳሳይ ያልሆነ ናቸው፡፡ የጾታ ሁኔታ በተመለከተ ወንድ ወንድን ሴት ሴትን ያነሣል እንጂ ወንድ ሴትን፡
                ሴት ወንድን ክርስትና ማንሣት አይፈቀድላቸውም፡፡ የክርስትና አባትና እናት ክርስትና ያነስዋቸው ልጆች በሥጋ ከወለድዋቸው ልጆች ሳይለዩ ሕጻናቱ ዕድሜያቸውም ለትምህርት
                ሲደርስ መሠረታዊ የሃይማኖት ትምህርት የማስተማር ግዴታ እንዳለባቸው ቃል ይገባሉ። በገቡት ቃል መሠረት በተግባር የመተርጎም ኃላፊነት አለባቸው።
              </p>

              <h3 className="mb-4 text-xl font-bold">ማዕተብ (ክር) ማሰር</h3>
              <p className="mb-6">
                ማዕተብ የሚለው ቃል ዐተበ ካለው የግእዝ ግሥ የተገኘ ሲሆን ትርጉሙም አመለከተ ማለት ነው። ስለዚህ ማዕተብ ማለት ምልክት ማለት ነው። በሃይማኖት አምነው ለተጠመቁ
                ክርስቲያኖች የሚሰጥ ምልክት (መታወቂያ) ወይም ማኅተም ነው። ስለ ማዕተብ በመጽሐፍ ቅዱስ የተለያየ ምሳሌዎች ተጠቅሰዋል። በብሉይ ኪዳን የነበሩ አባቶች ለእምነታቸው
                መገለጫ ምልክት ነበራቸው። ለምሳሌ ለአበ ብዙኃን አብርሃም ግዝረት ተሰጥቶት ነበር (ሮሜ 4፡13 ፡ ዘፍ 17፡9-14)። ማዕተብ ክርስቶስ በገመድ መታሰሩንና መጎተቱን
                የሚያስታውስ ምልክትም ነው፡፡ "ክርስቶስ ደግሞ ፍለጋውን እንድትከተሉ ምሳሌ ትቶላችሁ ስለ እናንተ መከራን ተቀብሎአልና (1ኛ ጴጥ 2:21)።" እንተባለ የክርስቶስን
                መከራ እናስብበታለን (ዮሐ 18፡12-24)
              </p>

              <p className="mb-6">
                ማዕተብ በሦስት ዓይነት ቀለም መሆኑ የሦስትነት (የሥላሴ) ምሳሌ ነው። ሦስቱ ክሮች ደግሞ በአንድ ተገምደው መሠራታቸው የአንድነቱ ምሳሌ ነው። ክርስቲያን ማዕተብ
                በማሰሩ ስለ ክርስቲያንነቱ ሳያፍር ይመሰክርበታል፤ አጋንንትን ድል ይነሣበታል፡፡ ተጸልዮበት ተባርኮ የሚታሠር ነውና ከቤተክርስቲያን በረከት ያገኝበታል፡፡ ማዕተብ
                ማሰርን ያስጀመረው ቅዱስ ያዕቆብ ዘእልበረዳኢ ክርስቲያኖችን ከመናፍቃን ለመለየት ማዕተብ ያስርላቸው እንነበር በመጻሕፍት ተጽፏል፡፡
              </p>

              <h3 className="mb-4 text-xl font-bold">የሚታይ አገልግሎት፤ የማይታይ ጸጋ</h3>
              <p className="mb-6">
                በምስጢረ ጥምቀት የሚታይ አገልግሎት ተጠማቂው ውሃ ውስጥ ብቅ ጥልቅ ሲል፤ ሥርዓተ ጸሎቱ ሲከናወን፤ ተጠማቂው ነጭ ልብስ ሲጎናጸፍ፣ ማዕተብ ሲያስር ወይም ሲታሰርለት
                ወዘተ...ነው፡፡ ይህም በዓይናችን ልናየው የምንችለው ነው፡፡ በምስጢረ ጥምቀት የሚገኝ የማይታይ ጸጋ ደግሞ ውኃው ወደ ማየ ገቦነት ሲለወጥ፤ ተጠማቂው
                የእግዚአብሔር ልጅነትን ሲያገኝ፤ የመንፈስ ቅዱስ ጸጋን ፡ ንጸሕናን ቅድስናን ገንዘብ ሲያደርግ ወዘተ. . . ናቸው፡፡ ምስጢረ ጥምቀትም በሚታይ አገልግሎት የማይታይ
                ጸጋ የሚገኝበት ልዩ ምስጢር ነው፡፡
              </p>

              <div className="p-4 border rounded-md shadow-sm max-w-md">
                <label htmlFor="christianFormLink" className="block mb-2 text-gray-700">
                  የክርስትና ቅጽ መግቢያ:
                </label>

                {/* Or use a Link if you're using React Router */}
                <a href="/forms-links/forms/kirstina" className="text-blue-600 hover:underline mt-2 block">
                  ወደ የክርስትና ቅጽ ይሂዱ
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
