import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EventSlider from "@/components/event-slider"
import NewsSlider from "@/components/news-slider"
import ConstructionSection from "@/components/construction-section"
import WeeklyServicesSection from "@/components/weekly-services-section"
import HeroSlider from "@/components/hero-slider"
import SupabaseTest from "@/components/supabase-test"

export default function Home() {
  return (
    <div>
      <main className="min-h-screen gap-16">
        <Header />

        {/* Hero Section with Auto-playing Slider */}
        <HeroSlider />

        {/* Official Website Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image Section */}
              <div className="md:sticky md:top-24">
                <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/photo_2024-04-28_18-45-26.jpg"
                    alt="Church Building"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="space-y-8">
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-blue-600 leading-tight">
                  ይህ በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን በጀርመንና አካባቢው ሀገረ ስብከት የኮሎኝ ርእሰ
                  <br className="hidden md:block" /> አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ይፋዊ ድረ ገጽ ነው።
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    አሁን በመላው አውሮፓ፥ በአፍሪካ፥ በአሜሪካ፥ በካናዳና በአውስትራልያ ከተቋቋሙት ቀደምት አብያተ ክርስቲያናት መካከል የመጀመሪያው ቀዳማዊና ፋና ወጊው ቤተ ክርስቲያን የኮሎኝ ርእሰ አድባራት ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ነው።  ቤተክርስቲያናችን ወንጌልን በመላው ዓለም ማዳረስን ተልእኮ በማድረግ ለትምህርት ወደ አውሮፓ በመጡ አገልጋዮች ብርቱ ጥረት፣ በሊቀ ካህናት ዶክተር መርዓዊ ተበጀ እና በዲያቆን በዕደ ማርያም መርሻ ፊት አውራሪነት፥ በወቅቱ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ፓትርያርክ በነበሩት በአቡነ ተክለ ሃይማኖት መልካም ፈቃድ እና በቅዱስ ሲኖዶስ ውሳኔ በ 1975 ዓ.ም በዚያን ጊዜ በጅቡቲና በምሥራቅ አፍሪካ ሊቀ ጳጳስ በነበሩት፥ በአሁኑ ጊዜ ደግሞ የኖርዲክ እና ግሪክ ሀገረ ስብከት ሊቀ ጳጳስ በኾኑተ በብፁዕ አቡነ ኤልያስ ተባርኮ ተከፈተ።
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    አመሠራረቱም እንደሚከተለው ነው።
                    በ 1971 ዓም ለሊቀ ካህናት ዶክተር መርዓዊ ተበጀ እና ዲያቆን በዕደ ማርያም መርሻ በብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት ፈቃድ ወደ ጀርመን ለከፍተኛ ትምህርት ተላኩ። ወደ ጀርመን ሀገር በገቡ በሁለት ዓመት ውስጥ ቤተ ክርስቲያን ለማቋቋም ጽንሰ ሀሳቡ በመርህ ደረጃ ለውይይት ቀረበ። በሃይደልበርግ ኗሪ ከሆኑ ወንድሞች ጋር በእመቤታችን ቅድስት ማርያም የጽዋ ማኅበር ስም መሰባሰብ ጀመሩ። ማኅበሩ የመገናኛ ድልድይ ሆኖ ሊያገለግላቸው ችሏል። በተለይም በ 1973 ዓ.ም. በምድረ ጀርመን በሃይደልበርግ ከተማ የመጀመሪያው ቅዳሴ ተቀደሰ። ለምእመናንም ቡራኬ ተሰጠ። በዚህም መንፈሳዊ አገልግሎት በለንደን ለጃማይካውያን መንፈሳዊ አገልግሎት ለመስጠት ተመድበው የነበሩት አባ አረጋዊ ወልደ ገብርኤል በኋላ የመላው አውሮፓ ሊቀ ጳጳስ የነበሩት ብፁዕ አቡነ ዮሐንስ ተገኝተዋል። ሥርዓተ ቅዳሴውንም መርተዋል። ብፁዕ አቡነ ዮሐንስ ካላቸው ፍቅርን ከተላበሰ ሰብእነታቸው የተነሣ መልካም ግንኙነት ነበራቸው። ቤተ ክርስቲያኑ ሲቋቋምም በበዓሉ ላይ ቤተ ክርስቲያናቸውን ወክለው ተገኝተዋል። የመጀመሪያው ቅዳሴ ከተካሄደ በኋላ ቤተ ክርስቲያን የማቋቋሙ ፍላጎት እየተጠናከረ መጣ። በሃይደልበርግና በሌሎች ከተማዎች የሚገኙ ኢትዮጵያውያን ተካፋዮች የሆኑባቸው የዘመን መለወጫ፥ የልደትና የትንሣኤ በዓላት ይከበሩ ጀመር።
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    ከዚህ በኋላ ሁኔታዎች ሁሉ መልክ መልክ መያዝ ጀመሩ። የምእመናኑም ቁጥር እየጨመረ ሄደ። በአውሮፓውያኑ የሰማኒያዎቹ ዓመታት ላይ አያሌ ኢትዮጵያውያንና ኤርትራውያን ወደ ጀርመን በብዛት የገቡበት ጊዜ ነበር። በተለይም " Landesarbeitsgemeinschaft Ausländische Flüchtlinge Nordrhein-Westfalen in Düsseldorf e.V." የሚባል በመንግሥት በጀት የሚደጎም ማኅበር ተቋቁሞ የስደተኞችን ጉዳይ ይከታተል ስለነበር የኢትዮጵያን ስደተኞች የሚመለከት ዐውደ ጥናት ከመሰረም 8-11፥1973 በዱስልዶርፍ ከተማ ተካሄደ። የቤተ ክርስቲያናችን መሥራቾችም ከፕሮፌሰራቸው ከዶ/ር ሃየር ጋር ጸሎት እንዲያደርጉና ትምህርት እንዲሰጡ ተጋበዙ። የእሁዱ መርሃ ግብር የእኛ ብቻ ነበር፧ በጀርመንኛ ለሚቀርበው ጥያቄ በመምህራቸው እየታገዙ፧ ስለ ቤተ ክርስቲያናችን በቂ ግንዛቤ ለማስጨበጥ ችለዋል። ከሀገሩ ከወጣ በኋላ እንድ ቀን እንኳ ቃለ እግዚአብሔር ሰምቶ ያማያውቀው ሁሉ ያነባ ነበር። በተለይ ፕሮፌሰር ሃየር እኛን ለመርዳት ቆርጠው የተነሡት የዚያን ሕዝብ ስሜት ከተመለከቱ በኋላ ነበር ማለት ይቻላል።
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    ቤተ ክርስቲያን ለምን አናቋቁምም የሚለው ጥያቄ የዕለት ከዕለት ጥያቄ ሆኖ መቅረብ ጀመረ። ለዚህም አንድ አመች ዕድል ተፈጠረ። ከላይ በተጠቀሰው በ 1973 ዓ.ም. የኢትዮጵያ ፓትርያርክ ብፁዕ ወቅዱስ አቡነ ተክለሃይማኖት የጀርመን ወንጌላዊት ቤተ ክርስቲያን ባደረገችላቸው ጥሪ መሠረት ጀርመንን ሲጎበኙ፥ ቤተ ክርስቲያን እድናቋቁም ፈቃዳቸው ይሆን ዘንድ ፍራንክፈርት ላይ ጥያቄ ቀረበ። ቅዱስነታቸውም ጥቂት ካሰቡ በኋላ ተማሪዎቹን ካህናት «ትምህርታችሁን ጨርሳችሁ ለምን ወደ ሀገራችሁ አትመለሱም» አሉዋቸው። እነርሱም «ቅዱስ አባታችን ከሀገሩ የወጣው ሕዝብ ብዙ ስለሆነ፧ እንደሌሎቹ ኦርቶዶክሳውያን የእኛም አማንያን ቤተ ክርስቲያን ያስፈልጋቸዋል» የሚል መልስ ሰጡ። አስከትለዋቸው የመጡት ብፁዓን ሊቃነ ጳጳሳት አቡነ ዜና ማርቆስ፣ አቡነ ጎርጎርዮስ፣ አቡነ ኤልያስ እና የጠቅላይ ቤተ ክህነት ዋና ሥራ አስኪያጅ ሊቀ ማእምራን አበባው ይግዛው በውጭ ሀገር ትምህርታቸውን ተከታትለው የጨረሱ፧ በዝርዎት ያሉትን የግሪካውያንንና የሌሎቹንም ኦርቶዶክሳውያን አብያተ ክርስቲያናት ሁኔታ ስለሚያውቁ ለሀሳቡ ላይ ድጋፍ ሰጥተዋል። በመጨረሻም «ለማናቸውም ደብዳቤ ጻፉ» ብለው ካረፉበት ክፍል ቡራኬ ተቀብለው ወጡ።
                  </p>
                  {/* <p className="text-gray-600 leading-relaxed">
                    ይቀጥላል
                  </p> */}
                </div>
                <div className="flex justify-start pt-4">
                  <Link
                    href="/about/history"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    ተጨማሪ ያንብቡ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Section */}
        <ConstructionSection />

        {/* Weekly Services Section */}
        <WeeklyServicesSection />

        {/* Upcoming Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">UPCOMING EVENTS</h2>
            <EventSlider />
          </div>
        </section>

        {/* Community Quote Section */}
        <section className="relative h-[400px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-xHU3IROC6ReraBjI9GUVpUK7rqtMoW.jpeg"
              alt="Church Community"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Quote Content */}
          <div className="relative h-[300px] flex items-center justify-center mb-5">
            <div className="container mx-auto px-2">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-4xl md:text-8xl text-white/20 font-serif mb-3">"</div>
                <p className="text-sm md:text-lg text-white font-light leading-relaxed mb-6 md:mb-8">
                  "የዚህ አጥቢያ መመሥረት ቤተ ክርስቲያን በሀገረ ጀርመንም ይሁን በመላው አውሮፓ ለደረሰችበት ደረጃ መሠረት የጣለ ነበር። ሊቀ ካህናት ዶ/ር መርዓዊ ተበጀ ከጀርመን አልፎ እንደ ጣልያን፣ ስዊድንና ፈረንሳይ የመሳሰሉት ሀገራት ቤተ ክርስቲያን ትመሠረት ዘንድ የተሳካ ሐዋርያዊ ጉዞ ያደረጉት ከዚህ አጥቢያ ቤተ ክርስቲያን በመነሣት ነበር። በመኾኑም ዛሬ የአንጋፋውን የርእሰ አድባራት ኮለኝ ደብረ ሰላም ቅዱስ ሚካኤል ቤተ ክርስቲያን ክብረ በዓል ስናከብር የምናዘክረው በጀርመንና በተለያዩ የአውሮፓ ሀገራት የተስፋፋችው የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በሀገረ ጀርመን ኹነኛ መዋቅሯን ዘርግታ መንቀሳቀስ የጀመረችበትን መኾኑን መገንዘብ ያስፈልጋል።"
                </p>
                <p className="text-xs md:text-base text-white font-medium">- ብፁእ አቡነ ዲዮናስዮስ፥ በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን የጀርመንና አካባቢው እና የምሥራቅ ጎጃም አህጉረ ስብከት ሊቀ ጳጳስ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">ዜናዎች</h2>

                <Link
                  href="/news/church-news"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  ሙሉ ዜናዎች ያንብቡ
                </Link>
              </div>
              <div className="md:col-span-2">
                <NewsSlider />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-[400px]">
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.237020795784!2d6.9000118760123295!3d50.99329207170089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf301e45ab489d%3A0x7a8cddf4bfecdac9!2zTGluZHdlaWxlcndlZyA5NCwgNTA3MzkgS8O2bG4sIOGMgOGIreGImOGKlQ!5e0!3m2!1sam!2set!4v1749852864486!5m2!1sam!2set"
            width="100%"
            
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Church Location"
          ></iframe>
        </div>

        <Footer />
      </main>
    </div>
  )
}
