"use client"

import Image from "next/image"
import { useState } from "react"
import { Clock, BookOpen, Heart, Calendar, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TseloteFithatPage() {
  const [language, setLanguage] = useState<"amharic" | "english">("amharic")

  const content = {
    amharic: {
      title: "ጸሎተ ፍትሐት",
      subtitle: "ጸሎተ ፍትሐት ምንድ ነው? ለምንስ ይጠቅማል?",
      source: "ምንጭ https://eotcmk.org/a/23-2007/ ሰኔ 23 ቀን 2007 ዓ.ም.",
      definition:
        "ፍትሐት ማለት ከዚህ ዓለም በሞት ለሚለዩ ሰዎች በሕይወተ ሥጋ ሳሉ ከሠሩትና ከፈጸሙት በደል እንዲነጹ ከማእሠረ ኃጢአት እንዲፈቱ ወደ እግዚአብሔር የሚቀብ ጸሎት ነው፡፡ ቤተ ክርስቲያን ለሙታን ጸሎተ ፍትሐት እንዲደረግ ታዝዛለች፡፡",
      purpose: "ጸሎተ ፍትሐት ለበደሉት ሥርየት ኃጢአትን፣ ይቅርታን ዕረፍተ ነፍስን ያሰጣል፡፡ ለደጋጎች ደግሞ ክብርን፣ ተድላን፣ ዕረፍትን ያስገኛል፡፡",
      connection:
        "ሙታንና ሕያዋን የሚገናኙት በጸሎት አማካኝነት ነው፡፡ ሕያዋን ለሙታን ይጸልያሉ፤ ሙታንም ለሕያዋን ይለምናሉ፡፡ /ሄኖ. 12፤34/ ሕያዋን ለሙታን የሚጸልዩት ጸሎትና የሚያቀርቡት መሥዋዕት በግልጽ እንደሚታይ ሁሉ ሙታንም በአጸደ ነፍስ ሆነው በዚህ ዓለም ለሚቆዩ ወገኖቻቸው ሕይወትና ድኅነትን፣ ስርየተ ኃጢአትንና ተስፋ መንግሥተ ሰማያትን፣ ጽንዓ ሃይማኖትን እንዲሰጣቸው፣ በንስሐ ሳይመለሱ፣ ከብልየተ ኃጢአት ሳይታደሱ እንዳይሞቱ ፈጣሪያቸውን ይለምናሉ፡፡ ይህም ሥርዓት እስከ ዕለተ ምጽአት ሲፈጸም የሚኖር ነው፡፡",
      biblical: [
        "ለሙታን ጸሎተ ፍትሐት እንዲደረግ፣ መሥዋዕት እንዲቀርብላቸው በቤተ ክርስቲያንና በመካነ መቃብራቸው እንዲጸለይላቸው ቅዱሳን ሐዋርያት በቀኖና ሐዋርያት አዝዘዋል፡፡ በክርስቶስ አምነው ስለሞቱ ወንድሞቻችሁ ክርስቲያኖችና ሰማዕታት በቤተ ክርስቲያን ያለሐኬት ተሰብሰቡ፡፡ በቤተ ክርስቲያን መሥዋዕት ሠውላቸው፤ ወደ ቤተ ክርስቲያን ወደ መቃብር ስትወስዱአቸውም መዝሙረ ዳዊት ድገሙላቸው፡፡ ዲድስቅልያ አንቀጽ 33 ገጽ 481",
        "ነቢዩ ዳዊትም የጻድቅ ሞቱ በእግዚአብሔር ዘንድ ክቡር ነው፡፡ ነፍሴ ሆይ ወደ ዕረፍትሽ ተመለሽ፣ እግዚአብሔር ረድቶሻልና፣ ነፍሴን ከሞት አድኖአታልና፡፡ በማለት ሙታን በጸሎት፣ በምስጋና፣ በመሥዋዕት ወደ እግዚአብሔር እንዲሸኙ በመዝሙሩ ተናግሯል፡፡ /መዝ. 115፤114-7/",
        "የቤተ ክርስቲያን የሕግና የሥርዓት መጽሐፍ ፍትሐ ነገሥትም በፍትሕ መንፈሳዊ በዲድስቅልያ የተጠቀሰውን ያጸናል፡፡ /አንቀጽ 22/ ስለ ሙታን የሚጸለየው መጽሐፈ ግንዘትም ካህናት ለሞቱ ሰዎች ሊጸልዩላቸው፣ በመሥዋዕትና በቁርባን ሊያስቧቸው ይገባል ይላል፡፡ ካህናት ጸሎተ ፍትሐት በሚያደርጉላቸው መሥዋዕት እና ቁርባን ስለ እነርሱ በሚያቀርቡላቸው ጊዜ መላእክት ነፍሳቸውን ለመቀበል ይወርዳሉ፡፡ ኃጢአተኞች ከሆኑ ስለ ሥርየተ ኃጢአት ይለምኑላቸዋል፤ ይማልዱላቸዋል፡፡ ንጹሐንም ከሆኑ ደስ ይላቸዋል፡፡ ሰውን ለወደደው ለእግዚአብሔር በሰማያት ክብር ምስጋና ይገባል፣ በምድርም ሰላም፡፡ እያሉ እግዚአብሔርን ያመሰግኑታል፡፡ ይህም የመላእክት ምስጋናና ደስታ ስለ ሰው ልጅ ድኅነት ነው ተብሎ ተጽፎአል፡፡",
      ],
      angels: "የደጋግ ሰዎችን ነፍሳት ቅዱሳን መላእክት እንደሚቀበሏቸው በቅዱስ ወንጌል ተጽፎአል፡፡ አልዓዛርም ሞተ፤ መላእክትም ወደ አብርሃም ዕቅፍ ወሰዱት፡፡ /ሉቃ. 16፤22/",
      time: "ጸሎተ ፍትሐት የዘሐን ጊዜ ጸሎት ነው፡፡ ቅዱስ ያዕቆብ በእናንተ ባለው መሠረት ከመንጋው መካከል በሞተ ሥጋ የተለዩትን ምእመናን በጸሎትና በዝማሬ እንሸኛቸዋለን፡፡ /ያዕ. 5፤13/ ጸሎተ ፍትሐት የሚደረገው ለከሀድያንና ለመናፍቃን ሳይሆን ለሃይማኖት ሰዎች ነው፡፡",
      exceptions: [
        "«ማንም ወንድሙን ሞት የማይገባውን ኃጢአት ሲያደርግ ቢያየው ይለምን፣ ሞትም የማይገባውን ኃጢአት ላደረጉት ሕይወት ይሰጥለታል፡፡ ሞት የሚገባው ኃጢአት አለ፡፡ ስለዚህ እንዲጠይቅ አልልም፡፡ ዓመፃ ሁሉ ኃጢአት ነው፡፡ ሞትም የማይገባው ኃጢአት አለ፡፡» /ዮሐ. 5፤16/ ለምሳሌ በተለያየ መንገድ ራሱን ለገደለ ሰው ጸሎተ ፍትሐት አይደረግም፡፡ ምክንያቱም ቤተ መቅደስ ሰውነቱን በገዛ እጁ አፍርሷልና፡፡ የእግዚአብሔርም መንፈስ እንዲኖራችሁ አታውቁምን? ማንም የእግዚአብሔርን ቤተ መቅደስ ቢያፈርስ እግዚአብሔር እርሱን ያፈርሰዋል፡፡ የእግዚአብሔር ቤተ መቅደስ ነውና ያውም እናንተ ናችሁ፡፡ ይላልና፡፡",
        "/1ቆሮ. 3፤16/ እንዲሁም ለመናፍቃን፣ ለአረማውያንም ጸሎተ ፍትሐት አይደረግም፡፡ ምክንያቱም ብርሃን ከጨለማ ጋር አንድነት የለውምና፡፡ /2ቆሮ. 6፤14/",
      ],
      church:
        "ቤተ ክርስቲያን ለሰው ልጅ የማትጸልይበት ጊዜ የለም፡፡ ሰውን ያህል ክቡር ፍጥረት ከመጸነሱ በፊት የተባረከ ጽንስ እንዲሆን እንደ ኤርምያስ በማኅፀን ቀድሰው /ኤር. 1፤5/ እንደ መጥምቀ መለኮት ዮሐንስ በማኅፀን መንፈስ ቅዱስን የተመላ አድርገው እያለች ትጸልያለች፡፡ በወሊድ ጊዜም ችግር እንደያጋጥመው ትጸልያለች፣ በጥምቀትም የእግዚአብሔር ልጅ እንዲሆን ትጸልያለች፣ ታጠምቃለች፡፡ በትምህርት እየተንከባከበች ጸጋ እግዚአብሔርን እየመገበች ታሳድጋለች፡፡ እርሷ የጸጋው ግምጃ ቤት ናትና፡፡ በኃጢአት ሲወድቅም ኃጢአቱ እንዲሠረይለት ንስሐ ግባ ትለዋች፡፡ እንዲሠረይለትም ትጸልያለች፡፡ በሞቱም ጊዜ እግዚአብሔር ኃጢአቱን እንዳይዝበት በደሉን እንዳይቆጥርበት ትጸልይለታለች፡፡ እንዲህ እያደረገች የእናትነት ድርሻዋን ትወጣለች፡፡ አንድ ሰው ሲሞት ዘመድ አዝማድ በዕንባ ይሸኘዋል፡፡ ቤተ ክርስቲያን ግን ዕንባዋ ጸሎት ነውና በጸሎቷ የዚያን ሰው ነፍስ ለታመነ ፈጣሪ አደራ ትሰጣለች፣ ነፍሳቸውን ተቀበል ብላ ትጸልያለች፡፡",
      faith:
        "ቤተ ክርስቲያን ጸሎተ ፍትሐትን የምታደርገው ይሆናል ይደረጋል ብላ በፍጹም እምነት ነው፡፡ ምክንያቱም ክርስቲያን እስከ መጨረሻ ተስፋ አይቆርጥምና፡፡ ወኵሎ ዘሰአልክሙ በጸሎት እንዘትትአመኑ ትነሥኡ፡፡ በሃይማኖት ጸንታችሁ የለመናችሁትን ሁሉ ታገኛላችሁ፡፡ /ማቴ.21፤22/ ስለዚህ እላችኋለሁ፤ የጸለያችሁትን ሁሉ እንዳገኛችሁ እመኑ ይሁንላችሁማል፡፡ /ማር.11፤24/ ለምኑ ይሰጣችሁማል፤ ፈልጉ ታገኛላችሁ፤ መዝጊያ አንኳኩ ይከፈትላችሁማል፤ የሚለምነው ሁሉ ይቀበላልና የሚፈልገውም ያገኛል፡፡ መዝጊያውንም ለሚያንኳኳ ይከፈትለታል፡፡ /ማቴ. 7፤7/ በስሜ የምትለምኑትን ሁሉ አደርገዋለሁ፤ ማናቸውንም ነገር በስሜ ብትለምኑ እኔ አደርገዋለሁ፡፡ /ዮሐ. 14፤13/ ይላልና፡፡ ወንጌላዊው ዮሐንስም በመልእክቱ የዘላለም ሕይወት እንዳላችሁ ታወቁ ዘንድ በእግዚአብሔር ልጅ ስም ለምታምኑ ይህን ጽፌላችኋለሁ፡፡ በእርሱ ዘንድ ያለን ድፍረት ይህ ነው፡፡ እንደ ፈቃዱ አንዳች ብንለምን ይሰማናል፡፡ የምንለምነውንም እንዲሰማልን ብናውቅ ከእርሱ የለመነውን ልመና እንደተቀበልን እናውቃለን፡፡",
      conclusion: [
        "/ዮሐ. 5፤3/ ብሏል፡፡ እንግዲህ የቤተ ክርስቲያን ትምህርቷ ሙሴን ከመቃብር አስነሥቶ ፊቱን ያሳየ አምላክ /ማቴ 17፤3/ ለእነዚህም ሳይንቃቸው የምሕረት ፊቱን ያሳያቸዋል የሚል ነው፡፡ መሐሪ ይቅር ባይ ለሆነው አምላክ የሚሳነው ነገር የለምና፡፡",
        "/ዘፍ. 18፤13፣ ሉቃ. 1፤37/",
        "ሐዋርያው ቅዱስ ዮሐንስ «ሞት የሚገባው ኃጢአት አለ፤ ስለዚህ እንዲጠይቅ አልልም፤ እንዳለ ቤተ ክርስቲያንም የምትከተለው ይህንኑ ነው፡፡ ምክንያቱም እግዚአብሔር ዕድሜ ለንስሐ ሰጥቷቸው ከኃጢአት መመለስ ከበደል መራቅ፣ ንስሐ መግባት፣ ሥጋወደሙን መቀበል ሲችሉ በሕይወታቸውና በእግዚአብሔር ቸርነት እየቀለዱ መላ ዘመናቸውን የሚያሳልፉ ሰዎች አሉ፡፡ እነዚህም በራሳቸው ላይ የፈረዱ ናቸው፡፡ ደግሞም ስሞት በጸሎተ ፍትሐት ኃጢአቴ ይሰረይልኛል ኃጢአትንም አልተውም ማለት በእግዚአብሔር መሐሪነት መቀለድና እርሱንም መድፈር ስለሆነ ይህም ሞት ከሚገባው ኃጢአት የሚቆጠር ነው፡፡",
        "እንግዲህ ለበጎ የተሠራልንን ጸሎተ ፍትሐት ክብር የምናገኝበት ያደርግልን ዘንድ የእግዚአበሔር ቸርነት የድንግል ማርያም አማላጅነት አይለየን፡፡ አሜን፡፡",
        "ምንጭ፡-ሃይማኖት የለየንን መቃብር አንድ አያደርገንም፤ ገጽ 20",
      ],
      prayerTypes: [
        {
          name: "ጸሎተ ፍትሐት ለሙታን",
          time: "በቀብር ሥነ ሥርዓት ጊዜ",
          description: "ከዚህ ዓለም በሞት ለሚለዩ ሰዎች የሚደረግ ጸሎት",
        },
        {
          name: "ዘሐን ጸሎት",
          time: "በሙት ቀን",
          description: "በሙት ቀን የሚደረግ ልዩ ጸሎት",
        },
        {
          name: "ዝክር",
          time: "በተለያዩ ጊዜያት",
          description: "ለሙታን በተለያዩ ጊዜያት የሚደረግ የመታሰቢያ ጸሎት",
        },
      ],
    },
    english: {
      title: "Tselote Fithat (Prayer of Absolution)",
      subtitle: "What is Tselote Fithat? What is its purpose?",
      source: "Source: https://eotcmk.org/a/23-2007/ June 23, 2007 E.C.",
      definition:
        "Fithat means a prayer offered to God for those who depart from this world through death, so that they may be cleansed from the transgressions they committed while in the flesh and be released from the bondage of sin. The Church commands that prayers of absolution be performed for the dead.",
      purpose:
        "Tselote Fithat provides forgiveness of sins, pardon, and rest for the souls of those who have sinned. For the righteous, it brings honor, blessing, and rest.",
      connection:
        "The living and the dead are connected through prayer. The living pray for the dead, and the dead intercede for the living (Henok 12:34). Just as the prayers and sacrifices offered by the living for the dead are clearly seen, so too the dead, being in the realm of souls, pray to their Creator for those who remain in this world, asking for life and salvation, forgiveness of sins, hope of the kingdom of heaven, and steadfastness in faith, so that they may not die without repentance or renewal from the decay of sin. This practice will continue until the day of the Second Coming.",
      biblical: [
        "The holy apostles have commanded in the Apostolic Canons that prayers of absolution be performed for the dead, that sacrifices be offered for them, and that prayers be said in the church and at their burial places. 'Gather without hesitation in the church for your Christian brothers and martyrs who have died in Christ. Offer sacrifices for them in the church, and when you take them to the church and to the grave, recite the Psalms of David.' (Didascalia, Chapter 33, page 481)",
        "The prophet David also said, 'Precious in the sight of the Lord is the death of his saints. Return to your rest, O my soul, for the Lord has dealt bountifully with you. For you have delivered my soul from death.' Thus, he spoke in his psalm that the dead should be sent to God with prayer, thanksgiving, and sacrifice. (Psalm 115:114-7)",
        "The Church's law and order book, Fetha Negest, confirms what is mentioned in the spiritual justice of the Didascalia (Chapter 22). The Book of Funeral Rites also says that priests should pray for the dead and remember them in sacrifice and communion. When priests perform prayers of absolution and offer sacrifice and communion for them, angels descend to receive their souls. If they are sinners, they intercede for the forgiveness of their sins. If they are pure, they rejoice. 'Glory to God in the highest, who loves mankind, and peace on earth.' Thus they praise God. It is written that this praise and joy of the angels is for the salvation of mankind.",
      ],
      angels:
        "It is written in the Holy Gospel that the souls of righteous people are received by holy angels. 'The beggar died, and was carried by the angels to Abraham's bosom.' (Luke 16:22)",
      time: "Tselote Fithat is a prayer of mourning. Saint James says, 'According to what is in you, we send off believers who have been separated from the flock in bodily death with prayer and song.' (James 5:13) Tselote Fithat is performed not for apostates and heretics, but for people of faith.",
      exceptions: [
        "'If anyone sees his brother committing a sin not leading to death, he shall ask, and God will give him life—to those who commit sins that do not lead to death. There is sin that leads to death; I do not say that one should pray for that. All wrongdoing is sin, but there is sin that does not lead to death.' (1 John 5:16) For example, Tselote Fithat is not performed for someone who has committed suicide in various ways. This is because they have destroyed the temple of their body with their own hands. 'Do you not know that you are God's temple and that God's Spirit dwells in you? If anyone destroys God's temple, God will destroy him. For God's temple is holy, and you are that temple.' (1 Corinthians 3:16)",
        "Likewise, Tselote Fithat is not performed for heretics and pagans. For 'what fellowship has light with darkness?' (2 Corinthians 6:14)",
      ],
      church:
        "There is no time when the Church does not pray for mankind. She prays that a person, the most precious creation, may be a blessed embryo before conception, sanctified in the womb like Jeremiah (Jeremiah 1:5), and filled with the Holy Spirit in the womb like John the Baptist. She prays that no difficulties may occur during birth, and she prays that the person may become a child of God through baptism, and she baptizes them. She nurtures them through education, feeding them with the grace of God, for she is the treasury of grace. When they fall into sin, she tells them to repent so that their sin may be forgiven. She prays for their forgiveness. And at the time of their death, she prays that God may not hold their sin against them or count their transgressions. In doing so, she fulfills her role as a mother. When a person dies, relatives bid farewell with tears. But the Church's tears are prayers, and with her prayers, she entrusts that person's soul to the faithful Creator, praying, 'Receive their soul.'",
      faith:
        "The Church performs Tselote Fithat with complete faith that it will be effective. This is because a Christian never loses hope until the end. 'And whatever you ask in prayer, you will receive, if you have faith.' (Matthew 21:22) 'Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.' (Mark 11:24) 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.' (Matthew 7:7) 'Whatever you ask in my name, this I will do. If you ask me anything in my name, I will do it.' (John 14:13)",
      conclusion: [
        "The evangelist John also said in his epistle, 'I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life. And this is the confidence that we have toward him, that if we ask anything according to his will he hears us. And if we know that he hears us in whatever we ask, we know that we have the requests that we have asked of him.' (1 John 5:3)",
        "Therefore, the teaching of the Church is that the God who raised Moses from the grave and showed him His face (Matthew 17:3) will show His merciful face to these also without despising them. For nothing is impossible for the merciful and forgiving God. (Genesis 18:13, Luke 1:37)",
        "As the apostle Saint John said, 'There is sin that leads to death; I do not say that one should pray for that,' the Church also follows this. This is because there are people who, though God has given them time for repentance, to turn away from sin, to repent, to receive the body and blood of Christ, spend their entire lives mocking the life and mercy of God. These have judged themselves. Moreover, to say 'When I die, my sin will be forgiven through Tselote Fithat' without abandoning sin is to mock God's mercy and to insult Him, and this is counted among the sins that lead to death.",
        "May the mercy of God and the intercession of the Virgin Mary not depart from us, that we may find honor in the Tselote Fithat that has been prepared for our good. Amen.",
        "Source: Faith that separates us will not make our graves one; page 20",
      ],
      prayerTypes: [
        {
          name: "Tselote Fithat for the Dead",
          time: "During funeral ceremonies",
          description: "Prayer performed for those who depart from this world through death",
        },
        {
          name: "Prayer of Mourning",
          time: "On the day of death",
          description: "Special prayer performed on the day of death",
        },
        {
          name: "Commemoration",
          time: "At various times",
          description: "Memorial prayer performed for the dead at various times",
        },
      ],
    },
  }

  const activeContent = content[language]

  return (
    <div className="container mx-auto px-4">
      <div className="mb-6 flex justify-end">
        <div className="inline-flex items-center rounded-md border border-input bg-background p-1 text-sm shadow-sm">
          {/* <button
            onClick={() => setLanguage("amharic")}
            className={`px-3 py-1.5 rounded-sm ${
              language === "amharic" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            አማርኛ
          </button> */}
          {/* <button
            onClick={() => setLanguage("english")}
            className={`px-3 py-1.5 rounded-sm ${
              language === "english" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            English
          </button> */}
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl font-bold mb-2">{activeContent.title}</h1>
        <h2 className="text-xl text-gray-600 mb-8">{activeContent.subtitle}</h2>
        <p className="text-sm text-gray-500 mb-8">{activeContent.source}</p>

        {/* Hero Section */}
        {/* <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <Image src="/placeholder.svg?height=400&width=800" alt="Prayer Service" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-lg md:text-xl font-light">{activeContent.definition}</p>
          </div>
        </div> */}

        {/* Main Content */}
        <Tabs defaultValue="overview" className="mb-12">
          {/* <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">{language === "amharic" ? "መግቢያ" : "Overview"}</TabsTrigger>
            <TabsTrigger value="biblical">
              {language === "amharic" ? "መጽሐፍ ቅዱሳዊ መሠረት" : "Biblical Foundation"}
            </TabsTrigger>
            <TabsTrigger value="practice">{language === "amharic" ? "አፈጻጸም" : "Practice"}</TabsTrigger>
          </TabsList> */}

          {/* <TabsContent value="overview" className="space-y-6"> */}
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-4">{activeContent.purpose}</p>
              <p className="text-lg leading-relaxed mb-4">{activeContent.connection}</p>
              <p className="text-lg leading-relaxed">{activeContent.angels}</p>
            </div>
          {/* </TabsContent> */}

          {/* <TabsContent value="biblical" className="space-y-6"> */}
            <div className="prose max-w-none">
              {activeContent.biblical.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          {/* </TabsContent> */}

          {/* <TabsContent value="practice" className="space-y-6"> */}
            <div className="prose max-w-none mb-8">
              <p className="text-lg leading-relaxed mb-4">{activeContent.time}</p>
              {activeContent.exceptions.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg leading-relaxed mb-4">{activeContent.church}</p>
              <p className="text-lg leading-relaxed">{activeContent.faith}</p>
            </div>
          {/* </TabsContent> */}
        </Tabs>

        {/* Prayer Types */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {language === "amharic" ? "የጸሎተ ፍትሐት ዓይነቶች" : "Types of Tselote Fithat"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {activeContent.prayerTypes.map((prayer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{prayer.name}</h3>
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <Clock size={16} />
                  <span>{prayer.time}</span>
                </div>
                <p className="text-gray-600">{prayer.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Conclusion */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">{language === "amharic" ? "ማጠቃለያ" : "Conclusion"}</h2>
          <div className="prose max-w-none">
            {activeContent.conclusion.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        {/* <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">{language === "amharic" ? "ተጨማሪ ንባቦች" : "Additional Resources"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {language === "amharic" ? "መጽሐፈ ግንዘት" : "Book of Funeral Rites"}
                </h3>
                <p className="text-gray-600">
                  {language === "amharic" ? "ስለ ጸሎተ ፍትሐት ዝርዝር መረጃ" : "Detailed information about Tselote Fithat"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{language === "amharic" ? "ፍትሐ ነገሥት" : "Fetha Negest"}</h3>
                <p className="text-gray-600">
                  {language === "amharic" ? "የቤተ ክርስቲያን የሕግና የሥርዓት መጽሐፍ" : "The Church's law and order book"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{language === "amharic" ? "ዲድስቅልያ" : "Didascalia"}</h3>
                <p className="text-gray-600">{language === "amharic" ? "የሐዋርያት ትምህርት" : "Teaching of the Apostles"}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{language === "amharic" ? "ቀኖና ሐዋርያት" : "Apostolic Canons"}</h3>
                <p className="text-gray-600">{language === "amharic" ? "የሐዋርያት ሕግጋት" : "Rules of the Apostles"}</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
