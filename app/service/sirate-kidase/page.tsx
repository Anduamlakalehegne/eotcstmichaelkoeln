import Image from "next/image"
import { Clock, Book, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SirateKidasePage() {
  const serviceSchedule = [
    { day: "Sunday", time: "7:00 AM - 12:00 AM" },
    // { day: "Wednesday", time: "6:00 AM - 8:00 AM" },
    // { day: "Saturday", time: "6:00 AM - 8:00 AM" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="amharic" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList>
            {/* <TabsTrigger value="english">English</TabsTrigger> */}
            {/* <TabsTrigger value="amharic">አማርኛ</TabsTrigger> */}
          </TabsList>
        </div>

        {/* English Content */}
        {/* <TabsContent value="englishh">
          <div>
            <h1 className="text-3xl font-bold mb-8">Sirate Kidase (Divine Liturgy)</h1>

           
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
              <Image src="/placeholder.svg?height=400&width=800" alt="Divine Liturgy" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg md:text-xl font-light">
                  The central worship service of the Ethiopian Orthodox Tewahedo Church
                </p>
              </div>
            </div>

          
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">What is Sirate Kidase?</h2>
              <p className="mb-6">
                "Kidase" means "to sanctify, bless, praise, honor." The term "Sirate Kidase" can be translated as "Order
                of Thanksgiving" or "Thanksgiving Ceremony." It is also called the Order of the Holy Eucharist.
              </p>
            </div>

           
            <h2 className="text-2xl font-bold mb-4">Service Schedule</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {serviceSchedule.map((schedule, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{schedule.day}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span>{schedule.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">The Three Parts of the Divine Liturgy</h2>
              <p className="mb-4">The Divine Liturgy (Sirate Kidase) is divided into three main parts:</p>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">Preparation Service</h4>
                      <p className="text-gray-600">
                        Also called "Gibate Mentoleat" or "Sirate Gibts." This begins with "O my brother, be of
                        collected mind" and continues until "How fearful is this day." This part involves the
                        preparation of the sacred vessels and elements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">Liturgy of the Word</h4>
                      <p className="text-gray-600">
                        This part includes readings from the Holy Gospel, prophecies of the saints, epistles of the
                        apostles, and the Holy Gospel of the Lord. It is a time of teaching, counsel, and thanksgiving.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">Liturgy of the Faithful</h4>
                      <p className="text-gray-600">
                        This is when the bread is transformed into the Body of God and the wine into the Blood of
                        Divinity. It is a time of prayer and special thanksgiving. During this time, the priest gives
                        thanks saying, "Send Your Holy Spirit so that this bread and wine may be transformed into the
                        fresh Body and Blood of Christ, so that we may be one with You." This part is known as "Fre
                        Kidase" (the fruit of the liturgy).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-4">According to the tradition of our Church, we have fourteen different liturgies:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-1">
                <li>Liturgy of the Apostles</li>
                <li>Liturgy of the Lord</li>
                <li>Liturgy of Mary</li>
                <li>Liturgy of John the Son of Thunder</li>
                <li>Liturgy of the 318 Orthodox Fathers</li>
                <li>Liturgy of Athanasius</li>
                <li>Liturgy of Basil</li>
                <li>Liturgy of Gregory</li>
                <li>Liturgy of Epiphanius</li>
                <li>Liturgy of John Chrysostom</li>
                <li>Liturgy of Cyril</li>
                <li>Liturgy of Jacob of Serug</li>
                <li>Liturgy of Dioscorus</li>
                <li>Liturgy of Gregory II</li>
              </ol>
            </div>

          
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">Who Established the Divine Liturgy?</h2>
              <p className="mb-6">
                The Divine Liturgy (Sirate Kidase) was established by our High Priest, Jesus Christ. On Thursday
                evening, after eating the Passover meal with His disciples according to the Old Testament tradition, He
                took bread, blessed it, and said, "This is My Body which is broken and given for you and for many."
                Similarly, He took the cup, gave thanks, and said, "This is My Blood of the new covenant which is shed
                for you and for the whole world." He gave His Holy Body and Precious Blood generously, saying, "Do
                this," thus establishing the Divine Liturgy. He taught the ritual both in practice and in teaching.
              </p>
              <p className="mb-6">
                The first Divine Liturgy was celebrated in the house of a generous man named Lazarus, which was the
                first sanctuary of the Gospel era.
              </p>
              <p className="mb-6">
                St. Basil of Caesarea compiled the order of the Divine Liturgy that we celebrate today.
              </p>
            </div>

            
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">The First Celebrants and Participants</h2>
              <p className="mb-6">
                The first celebrants and participants of the Divine Liturgy were the holy apostles. When the time for
                the Eucharistic prayer came, the Lord sat at the table with the twelve apostles to celebrate the Divine
                Liturgy (Luke 22:14).
              </p>
              <p className="mb-6">
                After the disciples received the Holy Eucharist, they gave thanks saying, "Glory and thanksgiving to You
                for making us worthy of Your Holy Body and Precious Blood." After giving thanks and singing hymns, they
                went to the Mount of Olives (Matthew 26:30).
              </p>
              <p className="mb-6">
                In today's Holy Church, we also gather for the Divine Liturgy, and we give thanks saying, "We thank You
                for making us worthy by Your grace to eat Your Holy Body and drink Your Precious Blood."
              </p>
            </div>

            
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">The Main Purpose of the Divine Liturgy</h2>
              <p className="mb-6">
                The main purpose of the Divine Liturgy is to fulfill and complete the sacrifices of the Old Testament
                and to establish the eternal New Testament sacrifice of the Gospel. Christ took His Holy Body and
                Precious Blood from our Lady and generously gave it to those who believe in Him and those who seek
                eternal life, saying, "Take, eat and drink." He taught this ritual to the apostolic fathers and their
                followers to practice and fulfill (1 Corinthians 11:25-26).
              </p>
              <p className="mb-6">
                He said, "Whoever eats of this bread will live forever. Whoever eats My flesh and drinks My blood has
                eternal life" (John 6:51-59).
              </p>
              <p className="mb-6">
                Glory and thanksgiving to Him! When we go to church to participate in the Divine Liturgy, we should
                remember that Christ has chosen and called us like one of His disciples, like one of the apostles. As
                the apostle advised his son Timothy, "I write to you so that you may know how you ought to conduct
                yourself in the house of God" (1 Timothy 3:15), we also learn how we should conduct ourselves in the
                house of God according to the order of the Divine Liturgy. For He has told us, "Admonish those who are
                unruly" (2 Thessalonians 5:14).
              </p>
            </div>

           
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">Preparation for the Divine Liturgy</h2>
              <p className="mb-4">
                As the apostle Paul advised, "Let all things be done decently and in order" (1 Corinthians 14:40), it is
                appropriate to learn and follow the order. Therefore, when we come to the Holy Church, especially on the
                Sabbath, on major feasts, and on saints' days, to celebrate the Divine Liturgy, to receive the
                Eucharist, and to receive blessings from the Divine Liturgy, we are expected to do the following:
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">A. Mental Preparation</h3>
              <p className="mb-4">
                When we approach God, we need to have a good conscience (Acts 23:1, Romans 13:5). Our God says, "My son,
                give me your heart" (Proverbs 23:26).
              </p>
              <p className="mb-4">
                Therefore, it helps to make a (mental) preparation on the eve of the Sabbath to follow the Divine
                Liturgy. This means gathering our mind that has been scattered in work during the six days, resting it,
                and thinking about how to enter the sanctuary. We must enter the sanctuary carefully.
              </p>
              <p className="mb-4">
                Solomon, the man of wisdom, has told us, "Walk prudently when you go to the house of God" (Ecclesiastes
                5:1).
              </p>
              <p className="mb-4">
                To gather our thoughts and prepare for good works, we can mention a few helpful practices. As the
                apostle advised, "All Scripture is given by inspiration of God, and is profitable for doctrine, for
                reproof, for correction, for instruction in righteousness, that the man of God may be complete,
                thoroughly equipped for every good work" (2 Timothy 3:12-16):
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Reading the Holy Scriptures (Romans 15:4-5)</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">B. Physical Cleanliness</h3>
              <p className="mb-4">
                It is good to prepare by bathing on the eve of the Sabbath so that our natural body has a good scent.
                Beyond maintaining our own cleanliness, since God is pure in nature, we will be rewarded for the
                preparation we make to approach Him with respect. Moses commanded the Israelites who wanted to meet
                their Creator, "Sanctify yourselves, and let the people wash their clothes" (Exodus 19:15).
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">C. Spiritual Dress Code</h3>
              <p className="mb-4">
                Along with maintaining our physical cleanliness, we should observe the dress code. When Jacob received a
                command to offer a sacrifice at Bethel, which is a type of the Holy Church, he told his family, "Be
                clean, and change your garments" (Genesis 35:2). Therefore, as Moses said, "Ask your father, and he will
                show you" (Deuteronomy 32:7), it is best to ask and know the dress code of the fathers and to use them
                as examples. If we have special church clothes, it is preferable; if not, it is good to wash and clean
                what we have and wear it.
              </p>
              <p className="mb-4">
                Additionally, especially on the Sabbath, unless there is a special reason, it is not commendable to go
                to church wearing only a jacket or only a shirt. This is because even when we are invited to an earthly
                wedding, we do not wear ordinary clothes to imitate the bride and the groomsmen. Even if we go wearing
                ordinary clothes, we will not be honored because we have not respected the family that invited us with
                honor (Matthew 22:12).
              </p>
              <p className="mb-4">
                Similarly, since the Holy Church is a place of spiritual joy and happiness, a pure wedding place of
                Christ the King where there is no shame or blame, it is honorable to God and graceful to the celebrants
                if fathers and brothers wear their traditional clothes, and mothers and sisters likewise wear their
                traditional clothes, standing for thanksgiving before their Creator in the likeness of the heavenly
                angels.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">D. Abstaining During Menstruation</h3>
              <p className="mb-4">
                It is not appropriate for mothers and sisters to enter the Holy Church, prepare themselves for the
                Eucharist, and perform the ritual of worship during their monthly menstruation. This is to maintain the
                purity of the church.
              </p>
              <p className="mb-4">
                As we know, since the church is a pure place of worship, we believe that we receive complete blessing by
                kissing the ground from the standing place, expressing our love for our Creator. Therefore, sometimes
                when this monthly occurrence happens to some mothers and sisters beyond what is expected and they find
                it difficult to control, in order to respect the religious feelings of other Christians and not to cause
                psychological damage, they should abstain. This is not because menstruation is considered a curse as in
                the Old Testament tradition.
              </p>
              <p className="mb-4">
                Thinking like this is itself a sin and a denial. Even if someone thinks like this, St. Ephrem said, "The
                devil freed Eve from the curse of the flesh, the curse of the soul." If he had freed Eve from the curse,
                he would not have praised our Lady, who is steadfast in virginity and adorned in holiness, saying, "Let
                Your grace and honor not be taken from us; give us Your mind and wisdom; dwell in us."
              </p>
            </div>

            
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">Rules and Etiquette During the Divine Liturgy</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">A. Regarding Entering and Exiting</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>
                  It is not allowed to enter the church or leave the church after the Divine Liturgy has begun. However,
                  if one cannot stay until the Eucharistic prayer is completed, one should separate oneself in advance.
                </li>
                <li>
                  After the Divine Liturgy has begun, one should not leave until the deacon dismisses saying, "Depart in
                  peace, without being pricked by thorns or struck by stumbling blocks, go to your homes in peace."
                </li>
              </ol>

              <h3 className="text-xl font-bold mt-6 mb-3">B. Spitting is Not Appropriate</h3>
              <p className="mb-4">It is forbidden to spit during the Divine Liturgy.</p>

              <h3 className="text-xl font-bold mt-6 mb-3">C. About Private Prayer</h3>
              <p className="mb-4">
                It is forbidden to perform private prayer, either by spreading a book or by reciting verbally, after the
                Eucharistic prayer has begun in the church. This is because it is thinking that one's prayer is better
                than the prayer being prayed and the sacrifice being offered. If there is such a person, he is like a
                person who has lit a candle in the bright sunlight. However, according to the prayer tradition inherited
                from the fathers, if there is a prayer that was started earlier and not completed, one can pray quietly
                without making a sound while the participants are participating after the descent. This is called
                "Sirwats," which means a corrective measure, a filler for what is missing, the opinion of teachers.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">D. Jokes and Laughter are Not Allowed</h3>
              <p className="mb-4">
                Bad talk is the characteristic of bad people. The Lord has said, "A bad person brings out bad things
                from his bad mind" (Matthew 12:35). To correct this bad habit, it is appropriate to pray like the
                honorable David, "O Lord, set a guard over my mouth" (Psalm 140:3).
              </p>
              <p className="mb-4">
                Especially during the Divine Liturgy, it is forbidden to joke, laugh, or talk frivolously. If someone
                laughs, if he is a priest, he will be punished for one week (seven days) with canon, fasting, prayer,
                and prostration. If he is a layperson, he should immediately separate himself from the Divine Liturgy
                and leave; he should not receive the Body and Blood on that day.
              </p>
              <p className="mb-4">
                If we forget that we are standing at the foot of the cross during the Divine Liturgy and speak nonsense,
                we should be careful not to resemble the thief who was crucified on the left side, who had the
                opportunity to stand by the Lord's cross on Friday but, instead of remembering his sin and guilt and
                asking for mercy, was joking, and the Jews who were shaking their heads and insulting.
              </p>
              <p className="mb-4">
                As the fathers say, "One is judged by his speech, one is torn by his handling," everyone is honored
                because of his speech, and everyone is judged because of his speech (Matthew 12:37).
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">E. It is Not Appropriate to Celebrate with Grudges</h3>
              <p className="mb-4">
                As the fathers say in their proverbial speech, "There is no cough with theft, no prayer with grudge," it
                is laziness to think of asking for mercy and forgiveness without making mercy and forgiveness one's
                possession. The Lord, glory and thanksgiving to Him, has advised us thus: "Therefore if you bring your
                gift to the altar, and there remember that your brother has something against you, leave your gift there
                before the altar, and go your way. First be reconciled to your brother, and then come and offer your
                gift" (Matthew 5:24).
              </p>
              <p className="mb-4">
                The prayer of a vengeful person is like a crop that has fallen among thorns. A crop that has fallen
                among thorns neither grows from below nor bears fruit from above. Even if it bears fruit without growing
                from below, birds will come close to the thorns and pick the fruit. Similarly, if a vengeful person
                prays without letting go of his vengeance, the devil will come close to his vengeance and pick the fruit
                of his thanksgiving.
              </p>
            </div>

            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">How to Participate</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>Arrive before the service begins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>Dress modestly and appropriately</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>Follow the service in prayer and reverence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>Maintain proper fasting if receiving communion</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Divine Liturgy Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

        
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-bold">Important Notes</h3>
              </div>
              <ul className="space-y-3 text-gray-600 pl-9">
                <li>• The church opens 30 minutes before each service</li>
                <li>• Please maintain silence during the service</li>
                <li>• Children are welcome but should be supervised</li>
                <li>• Photography is not permitted during the service</li>
              </ul>
            </div>
          </div>
        </TabsContent> */}

        {/* Amharic Content */}
        <TabsContent value="amharic">
          <div>
            <h1 className="text-3xl font-bold mb-8">ሥርዓተ ቅዳሴ</h1>

            {/* Hero Section */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
              <Image src="/kidase.jpg" alt="Divine Liturgy" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg md:text-xl font-light">የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዋና የአምልኮ አገልግሎት</p>
              </div>
            </div>

            {/* Definition */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">ሥርዓተ ቅዳሴ ምንድን ነው?</h2>
              <p className="mb-6">
                ቅዳሴ ማለት "ቀደሰ፣ ባረከ፣ አመሰገነ፣ አከበረ፣ ማለት ሲሆን የቃሉም ትርጉም መቀደስ- መመባረክ ማመስገን ማለት ነው _ ሥርዓተ ቅዳሴ የሚለውን በአንድ ትንፋሽ
                አንብበን _ ስንተረጉመው የምስጋና _ መርሐ _ ግብር (የምስጋና ሥርዓት) ማለት ይሆናል። ሥርዓተ ቅዳሴ ሥርዓተ ጸሎተ ቍርባን ይባላል፡፡
              </p>
            </div>

            {/* Schedule Cards */}
            <h2 className="text-2xl font-bold mb-4">የአገልግሎት መርሃ ግብር</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {serviceSchedule.map((schedule, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{index === 0 ? "እሁድ" : index === 1 ? "ረቡዕ" : "ቅዳሜ"}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span>{schedule.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Division of Divine Liturgy */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">የሥርዓተ ቅዳሴ አከፋፈል</h2>
              <p className="mb-4">በአጠቃላይ ሥርዓተ ቅዳሴ (የጸሎተ ቍርባን ሥርዓት) በሦስት ይከፈላል-</p>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      ፩
                    </div>
                    <div>
                      <h4 className="font-bold">የቅዳሴ ዝግጅት ክፍል</h4>
                      <p className="text-gray-600">
                        የመጀመሪያው ክፍል የቅዳሴ ዝግጅት ክፍል ወይም ግብዓተ መንጦላእት፣ ወይም ሥርዓተ ግብጽ ይባላል፡፡ ይህም "ኦ እንየ በዝንቱ ልቡና" ወንድሜ ሆይ
                        በተሰበሰበ ልቡና ጽና(ሁን) ካለው ጀምሮ "ሚ መጠን ዛቲ _ዕለት ግርምት" ይህች ዕለት ምን የምታስፈራ ናት እስከሚለው ያለው ነው፡፡
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      ፪
                    </div>
                    <div>
                      <h4 className="font-bold">የትምህርተ ወንጌል ክፍል</h4>
                      <p className="text-gray-600">
                        ሁለተኛ ክፍል የትምህርተ ወንጌል የምክርና የምስጋና ክፍል ሲሆን በተለምዶ ሥርዓተ ቅዳሴ ይባላል። በዚህ የሥርዓተ ቅዳሴ ክፍለ ጊዜ ውስጥ ከቅዱስ
                        ወንጌል÷ የቅዱሳን የነቢያት ትንቢትና የሐዋርያት _ መልእክታት እንዲሁም የከበረ የጌታ ቅዱስ ወንጌል ይነበባል የተረጎማል፡፡
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      ፫
                    </div>
                    <div>
                      <h4 className="font-bold">ፍሬ ቅዳሴ</h4>
                      <p className="text-gray-600">
                        ሦስተኛ ክፍል ኅብስቱ ወደ ሥጋ አምላክ ወይኑ ወደ ደመ መለኮት የሚለወጥበት፤ የጸሎትና የምስጋና ክፍለጊዜ ነው፡፡ በተለይም በዚህ የጸሎት ክፍለ ጊዜ
                        ከምስጋና ሁሉ የተመረጠ ልዩ ምስጋና "ኀበነ ንህበር በዘዚአከ መንፈስ ቅዱስ" የባህርይ ሕይወትህ መንፈስ ቅዱስን ሰደህ፤ ይህን ሕብስት ይህን ወይን
                        ለውጠህ፤ ነፍስ የተለየው መለኮት የተዋሐደው ትኩስ ሥጋህን ትኩስ ደምህን አድርገህ፤ ከአንተ ጋር አንድ እንሆን ዘንድ አንድ መሆንን ስጠን፤ ብሎ ከህኑ
                        ሲያመሰግን ርዕደተ መንፈስ ቅዱስ (የመንፈስ ቅዱስ መውረድ) ይሆናል፡፡ ሕብስቱ ተለውጦ ሥጋ አምላክ ወይኑ ተለውጦ ደመ መለኮት ይሆናል፡፡ በጥቅሉ ይኸው
                        የጸሎተ ቅዳሴ ክፍለ ጊዜ ፍሬ ቅዳሴ በመባል ይታወቃል፡፡
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-4">የጸሎት ክፍል የሚተገበርበት እንደ ቤተ ክርስቲያናችን ሥርዓት አሥራ አራት ቅዳሴያ አሉን እነርሱም:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-1">
                <li>ቅዳሴ ዘሐዋርያት</li>
                <li>ቅዳሴ እግዚእ</li>
                <li>ቅዳሴ ማርያም</li>
                <li>ቅዳሴ ዘዮሐንስ ወልደ ነጓድጓድ</li>
                <li>ቅዳሴ ዘሠለስቱ ምዕት</li>
                <li>ቅዳሴ ዘአትናቴዎስ</li>
                <li>ቅዳሴ ባስልዮስ</li>
                <li>ቅዳሴ ጎርጎርዮስ</li>
                <li>ቅዳሴ ዘኤጲፋንዮስ</li>
                <li>ቅዳሴ ዘዮሐንስ አፈወርቅ</li>
                <li>ቅዳሴ ዘቄርሎስ</li>
                <li>ቅዳሴ ዘያዕቆብ ዘሥሩግ</li>
                <li>ቅዳሴ ዘዲዮስቆሮስ</li>
                <li>ቅዳሴ ጎርጎርዮስ ካልዕ</li>
              </ol>
            </div>

            {/* History */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">ሥርዓተ ቅዳሴን ማን ጀመረው?</h2>
              <p className="mb-6">
                ሥርዓተ ቅዳሴን (ሥርዓተ ጸሎተ ቁርባንን) የመሠረተው (የጀመረው) ሊቀካህናት ኢየሱስ ክርስቶስ ነው፡፡ መድኃኒታችን ኢየሱስ ክርስቶስ ሐሙስ ማታ በብሉይ ኪዳኑ ሥርዓት
                ከደቀ መዛሙርቱ ጋር በበዓለ ፋሲካው ማዕድ ተቀምጦ÷ በግዐ ፋሲካውን · ከተመገቡ በኋላ÷ ለደቀ መዛሙርቱ ስለእናንተና ስለብዙዎች ቤዛ የሚፈተትና የሚሰጥ ሥጋዬ ይህ
                ነው እንኩ ብሎ ቅዱስ ሥጋውን፧ እንዲሁም ጽዋውን አንስቶ አመስግኖ አክብሮ "ስለእናንተ ስለዓለሙ ሁሉ የሚፈሰው አዲስ ሥርዓት ሆኖ የሚሰጠው ደሜ ይህ ነው፤ ብሎ ክቡር
                ደሙን በለጋስነቱ – ሰጥቷቸው፤ እንዲህም _ አድርጉ ብሎ _ ሥርዓተ _ ቅዳሴውን መሠረተ፡፡ ሥርዓቱንም በተግባርና በትምህርት አስተማራቸው፡፡ ጸሎተ ቍርባንን አከናወነ
                (ማI:.26 ቁ26-28፣ ማር.14 ቁ 17- 25፣ Λ.Φ.22 14-38: Ph.6 56-59 1.11 23-26)
              </p>
              <p className="mb-6">
                ይህም የቅዳሴውም ሥርዓት ለመጀመሪያ ጊዜ የተከናወነው የመጀመሪያው የዘመነ ወንጌል ቤተ መቅደስ በነበረው ዓልአዛር በተባለው ደገኛ ሰው ቤት ነበር።
              </p>
              <p className="mb-6">ዛሬ የምንቀድሰውን የሥርዓተ ቅዳሴ ቅደም ተከተሉን ያሰባሰበው ቅዱስ ባስልዮስ ዘቂሳርያ ነው::</p>
            </div>

            {/* First Celebrants */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">የመጀመሪያዎቹ አስቀዳሾች እና ቆራቢዎች</h2>
              <p className="mb-6">
                የዚህ ጸሎተ ቅዳሴ (ሥርዓተ ጸሎተ ቁርባን) የመጀመሪያ ዎቹ አስቀዳሾችና ቆራቢዎች የነበሩት ቅዱሳን ሐዋርያት ነበሩ፡፡ ጌታ የጸሎተ ቍርባኑ ሰዓት ባደረሰ ጊዜ ጸሎተ
                ቅዳሴውን ለማ ከናወን ከዐሥራ ሁለቱ ሐዋርያት ጋር በማዕድ ተቀመጠ፡፡ (ሉቃ.22 ቁ14)
              </p>
              <p className="mb-6">
                ደቀመዛሙርቱ ሥርዓተ ቅዳሴውን አስቀድሰው ቅዳስ ቁርባንን ከተቀበሉ በኋላ ለቅዱስ ሥጋህናግ ለክቡር ደምህ ስላበቃኸን ክብር ምስጋና ይግባህ ብለው አመሰገኑ፤ ካመሰገኑ
                ከዘመሩ በኋላ ወደ ደብረ ዘይት ወጡ፡፡ (ማቴ26 ቁ30)
              </p>
              <p className="mb-6">
                በዛሬዋም ቅድስት ቤተክርስቲያን ለጸሎተ ቅዳሴ የእምንሰበሰበው ከዚሁ ተነሥተን ስለሆነ በጸሎተ ቁርባኑ እናመሰግነዋለን ቅዱስ ሥጋህንና ክቡር ደምህን ለመብላትና
                ለመጠጣት በቸርነትህ ስላበቃኸን ብለንም እናከብረዋለን፤ እናገነዋለን፡፡
              </p>
              <p className="mb-6">
                ስለዚህም ነው ለሥጋወደሙ የበቁና የተዘጋጁ ቅዱስ ቁርባኑን በሚቀ በሎት ሰዓት "እስመ ኃያል ኣንተ እኩት ወስቡህ ወለከ ስብሐት ለዓለመ ዓለም" ቅዱስ ሥጋህንና ክቡር
                ደምህን ቆርሰህ ገምሰህ የዘለዓለም ሕይወትን እናገኝ ዘንድ እንኩ ብሉ ጠጡ ብለህ በለጋስነት የሰጠኸን አንተ ኃያል ነህና ገናና ነህና ክቡር መባል ምስጉን መባል
                ይገባሃል እያልን የምንዘምረው፡፡ ይህም ዝማሬ ያንጊዜ ሐዋርያት ቅዱስ ቁርባኑን ከተቀበሉ በኋላ እንደ ዘመሩት ያለ ዝማሬ ነው፡፡
              </p>
            </div>

            {/* Main Purpose */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">የሥርዓቱ ዋና ዓላማ</h2>
              <p className="mb-6">
                የመሥዋዕተ ኦሪት ምግብና መፈጸሙን መጠናቀቁን በምትኩ የሐዲስ ኪዳን የዘለዓለም ሥርዓት የወንጌል መሥዋዕት የሆነውን ከእመቤታችን የነሣውን ቅዱስ ሥጋውንና ክቡር ደሙን
                ቆርሶና ገምሶ በቸርነቱና በለጋስነቱ ለሚያምኑበት እና እንዲሁም የዘለዓለምን ሕይወትን ለሚናፍቁ ሁሉ እንካችሁ ብሉ ጠጡ ብሎ ከመ ስጠት ጋር ለአበው ሐዋርያት _
                ለተከታዮቻቸው ሥርዓቱን ለማስ ተማርና ለመፈጸም ነው፡፡ (1ቆሮ.1 ቁ25-26)
              </p>
              <p className="mb-6">
                እንዲህ ብሎ "ሰው ከዚህ እንጀራ ቢበላ ለዘለዓለም ይኖራል፡፡ ሥጋዬንም የሚበላ ደሜንም የሚጠጣ የዘለዓለም ሕይወት አለው" (h.6 51-59)::
              </p>
              <p className="mb-6">
                ክብር ምስጋና ይግባውና የዘለዓለም ሕይ ወት የሚገኝበትን የጸሎተ ቍርባን ሥርዓት ለመሳተፍ (ቅዳሴ ለማስቀደስ) ወደ ቤተክርስቲያን በሄድን ጊዜ ከደቀመዛሙርቱ እንደ
                አንዱ ደቀ መዝሙር (እንደ አንዱ ሐዋርያ) ሊቀ ካህናት ኢየሱስ ክርስቶስ እንደመረጠንና እንደጠራን ሳንዘነጋ "በእግዚአብሔር ማደሪያ ቤት መኖር እንዴት እንደሚገባህ
                ታውቅ ዘንድ እጽፍልሃለሁ" (1ኛ ጢሞ.3 ቁ.15) ብሎ ሐዋርያው ለልጁ ጢሞቶዎስ እንደመከረው እኛ ም እንደሚከተለው የሥርዓተ ቅዳሴውን ሥርዓት አውቀን፤ በቤተ
                እግዚአብሔር እንዴት መኖር እንዳለብን እንማማራለን፡፡ ያለ ሥር ዓት የሚሄዱትን ገሰጿቸው ብሎናልና (2ኛ ተሰሎ.5 ቁ 14)፡፡
              </p>
            </div>

            {/* Preparation */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">የሚደረግ ዝግጅት</h2>
              <p className="mb-4">
                ብርሃነ ዓለም ሐዋርያው ቅዱስ ጳውሎስ "ሁሉም ነገር በአ ግባቡና በሥርዓቱ ይሁን" 1ኛ ቆሮ.14:40 ብሎ እንደመከረን÷ ሥርዓ ትን መማ ርና በሥርዓት መመራት ተገቢ
                ነው፡፡ ስለሆነም ወደ ቅድስት ቤተክርስቲያን በተለይ በዕለተ ሰንበት÷ በዓበይት በዓላት÷ በቅዱሳን ክብረ በዓላት ቅዳሴ ለማስቀደስ፣ ቁርባን ለመቁረብ፣ ከጸሎተ ቅዳሴው
                በረከትን ለማግኘት ወደ ቅድስት ቤተክርስቲያን ስንመጣ፦ የሚከተለውን ማድረግ ይጠበቅብናል::
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">ሀ. የሕሊና ዝግጅት ማድረግ</h3>
              <p className="mb-4">
                ወደ እግዚአብሔር ፊት ስንቀርብ በጎ ሕሊና እንዲኖረን ያስፈልጋል፡፡ (የሐ.ሥ.23 ቁ1) (ሮሜ13 ቁ5) አምላካችን እግዚአ ብሔር ልጄ ሆይ ልብህን ስጠኝ ይለናልና
                (ምሳሌ. 23 ቁ 26)
              </p>
              <p className="mb-4">
                ስለዚህም ወደ ቤተክርስቲያን ከመምጣ ታችን አስቀድሞ በሰንበት ዋዜማ (የልቡና) ዝግጅትን ማድረግ ጸሎተ ቅዳሴውን ለመከታተል ይረዳል፡፡ ይህንን ስንል ስድስቱን ዕለታት
                በሥራ የባከነውን ልቡናችንን ሰብሰብ አድርጎ ማሳረፍና ወደ ቤተመቅደስ እንዴት መግባት አለብኝ ብሎ ማሰብ ነው፡፡ ወደ ቤተ መቅደሱ በጥንቃቄ ሆነን መግባት አለብን፡፡
                በጥንቃቄ መግባት እንዳለብን "ወደ ቤተ እግዚአብሔር በገባህ ጊዜ እግርህን ጠብቅ» ብሎ የጥበብ ሰው ሰሎሞን ነግሮናልና። (መክ.5 ቁ1)
              </p>
              <p className="mb-4">
                አሳባችንን ለመሰብሰብ እና ለበጎ ሥራ እንድንዘጋጅ ከሚረዱን ጥቂቶቹን ብንጠቅስ፦ ሐዋርያው "የእግዚአብሔር ሰው ፍጹምና ለበጎ ሥራ ሁሉ የተዘጋጀ ይሆን ዘንድ
                የእግዚአብሔር መንፈስ ያለበት መጽሐፍ ሁሉ ለትምህርትና ለተግሳጽ ልብን ለማቅናት በጽድቅም ላለው ምክር ደግሞ ይጠቅማል" (2ኛጢሞ.3 ቁ.12-16)፡ ብሎ
                እንደመከረን፡
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>ቅዱሳት መጻሕፍትን ማንበብ፡፡ (ሮሜ.15 ቁ4-5)</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">ለ. የሰውነታችንን ንጽሕና መጠበቅ</h3>
              <p className="mb-4">
                ተፈጥሮአዊ አካላችን ጥሩ ጠረን እንዲኖረው ሰውነታችን በሰንበት ዋዜማ በመታጠብ መዘጋጀት የራሳችንን ንጽሕና ከመጠ በቅ አልፎ እግዚአብሔር ንጹሐ ባህርይ ስለሆነ ወደሱ
                በአክብሮት በመቅረብ ባደረግነው ዝግጅት ዋጋ እናገኝበታለን፡፡ ከፈጣሪያቸው ጋር ለመገናኘት የሹትን ቤተ እሥራኤልን ሙሴም እንዲህ ብሎ እንዲዘጋጁ
                አዘዛቸው፡"ሰውነታቸውን አነጹ ሕዝቡም ልብሳቸውን አጠቡ˚ (ዘጸአት 19፡15)
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">ሐ. መንፈሳዊ አለባበስ ሥርዓትን መጠበቅ</h3>
              <p className="mb-4">
                የሰውነታችንን ንጽሕና ከመጠበቅ ጋር የአለባበስ ሥርዓትን መጠበቅ ይገባል፡ቅዳስ ያዕቆብ የቅድስት ቤተክርስቲያን አምሳል ወደ ምትሆን ወደ ቤቴል መሥዋዕት ይሠዋ ዘንድ
                ትዕዛዝ በደረሰው ጊዜ ቤተሰቡን "ንጹሕ ሁኑ ልብሳችሁንም ለውጡ" ብሎ አዟቸ ዋልና፡፡ (ዘፍ.35 ቁ2) ስለዚህ "ተሰአሎ ለአቡከ ወይነግረከ* አባትህን ጠይቀው እርሱ
                ይነግርሃል፤ (ዘዳ.32 ቁ.7) እንዳለው ሊቀነቢያት ሙሴ ለመንፈሳዊ ስልጣኔ መሰረቶች የሆኑትን የአበውን የአለባበስ ሥርዓት ጠይቆ አውቆ _ እነርሱን ምሳሌ በማድረግ
                ለቤተ እግዚአብሔር የሚለበስ የተለየ የቤተክርስቲያን ልብስ ቢኖረን ይመረጣል፤ የተለየ የሰንበት ልብስ ባይኖረን ያን ያለንን አጥበን አጽድተን ለብሰን ብንሄድ መልካም
                ነው፡፡
              </p>
              <p className="mb-4">
                በተጨማሪ በተለይ በዕለተ ሰንበት በአጋጣሚ ምክንያት ካልሆነ በቀር ጃኬት ብቻ÷ ሸሚዝ ብቻ ለብሶ ወደ ቤተ ክርስቲያን መሄድ እጅግም አያስመሰግን፡፡ ምክን ያቱም ወደ
                ምድራዊ ሠርግ ቤት ተጠርተን ስንሄድ እንኳ ሙሽራ ውንና ሚዜዎቹን ለመምሰል ተራ ልብስ ለብሰን እንደማንሄድ የታወቀ ነው፡፡ ተራ ልብስ ለብሰን ብንሄድ እንኳ ከበሬታ
                አናገ ኝም ምክንያቱም አክብሮ የጠራንን ቤተሰቡን አልመበልንምና። (ማቴ.22 ቁ12)
              </p>
              <p className="mb-4">
                እንደዚሁም ሁሉ ቅድስት ቤተክርስቲያን ደግሞ መንፈሳዊ ተድላ ደስታ የምንቋደስበት፣ ነውርና ነቀፋ የሌለበት የመርዓዊ ንጉሥ ክርስቶስ ንጽሕት የሠርግ ቤት ስለሆነች
                አባቶችና ወንድ ሞች ኩታቸውን፣ ጋቢያቸውን ደረብ አድርገው፣ መስቀለኛ አጣፍ ተው አደግድገው እናቶችና እኅቶችም እንደዚሁ ባህላዊ ልብሳቸውን ለብሰው፣ ከፈጣሪያቸው ፊት
                በሰማያውያን መላእክት አምሳል ለምስጋና ቢቆሙ፣ ለእግዚአብሔርም ክብር ነው፡፡ ለአስቀዳሾችም ሞገስ ነው፡፡
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">መ. ወርኀዊ ልማደ አንስት በተከሠተ ጊዜ መታቀብ</h3>
              <p className="mb-4">
                እናቶችና እኅቶች ወርኃዊ ልማደ አንስት በተከሠተ ጊዜ ወደ ቅድስት ቤተክርስቲያን ውስጥ በመግባት ራስን ለቁርባን መብቃትና ለቅዳሴ እንዲሁም ሥርዓተ አምልኮ ለመፈጸም
                እራስን ማዘጋጀት አግባብ አይደለም፡፡ ፍትሐ ነገ አን. 14፡5631፡ ምክንያቱም የቤተክርስቲያንን ንጽሕና ለመጠበቅ ሲባል ነው፡፡
              </p>
              <p className="mb-4">
                እንደሚታወቀው ቤተክርስቲያን ንጹሕ የአምልኮ ሥፈራ ስለሆነች ከቆ ምንበት ስፍራ ጀምሮ መሬቱን ስመን ተሳልመን ለፈጣሪያችን ያለንን ፍቅር ከመግለጽ ጋር ፍጹም በረከትን
                እናገኛ ለን ብለን እናምንበታለን፡ስለሆነም አንድ አንድ ጊዜ ይህ ወርሃዊ ክስተት አንድ አንድ እናቶች እህቶች ላይ ከሚጠበቀው በላይ እየሆነ ለመቆጣጠር ስለሚቸገሩ
                ከዚህ የተነሳ የሌላውን ክርስቲያን ሃይማኖታዊ ስሜቱን ለማክበር አና በስነ ልቦናው ጉዳት እንዳ ይደርስበት ሲባል ነው እንጂ እንደ ብሉይ ኪዳኑ ሥርዓት ወርኀዊ ልማድ
                እንደ መርገም ተቆጥሮ አይደለም፡፡
              </p>
              <p className="mb-4">
                እንዲህ ብሎ ማሰብ በራሱ ኃጢአትም ነው፤ ክህደትም ነው፡፡ እንዲህ ብሎ የሚያስብ ቢኖር እንኳ ቅዱስ ኤፍሬም "ዲያብሎስ ያሳታት ሔዋንን ነጻ አደረጋት" _ ሔዋንን
                ከመርገመ ሥጋ ከመርገመ ነፍስ ነጻ ካደረጋት ልጅሽ ጽንዕት በድንግልና ሥርጉት በቅድስና እመቤታችን ጸጋውን ክብሩን እንዳይነሳን፤ ለምኝልን አእምሮውን ጥበቡን ሳይብን፤
                አሳድሪብን፤ ብሎ እመቤታችንንም ባላመሰገናት ነበር፡፡ በዚህም ምስጋናው ሔዋን የስሕተት ምክንያት ስለሆነች ፈጽሞ አላዳናትም የሚሉ የመናፍቃንን በር ዘግቶባቸዋል።
              </p>
            </div>

            {/* Rules and Etiquette */}
            <div className="prose max-w-none mb-10">
              <h2 className="text-2xl font-bold mb-4">ሥርዓተ ቅዳሴ ላይ ልንጠነቀቅባቸው ከሚያስፈልጉን ነገሮች</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">ሀ. መውጣትና መግባትን በተመለከተ</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>
                  ሥርዓተ ቅዳሴው ከተጀመረ በኋላ ቤተክርስቲያን ውስጥ መግባት ወይም ከቤተክርስቲያን ውስጥ ወጥቶ መሄድ አይፈቀድም፡፡ ነገር ግን ጸሎተ ቍርባኑ¸ እስኪፈጸም ድረስ
                  የማይቆይ ከሆነ አስቀድሞ ራስን መለየት ይገባል። (ፍት. መን.አን 12፡478) እንዲህም ሲባል ግን በከባድ ችግር እና ትዕግስት በሚያሳጣ ድንገተኛ ሕመም ምክንያት
                  ከሆነ እንደችግሩ በቀስታ ሆኖ ሌላውን አስቀዳሽ በማይረብሽ ሁኔታ ራስን ማግለል ይቻላል፡፡
                </li>
                <li>
                  ጸሎተ ቅዳሴው ከተጀመረ በኋላ ዲያቆኑ እትዉ በሰላም እሾህ ሳይወጋችሁ እንቅፋት ሳይመታችሁ በሰላም ወደቤታችሁ ሂዱ ብሎ ሳያሰናብት ወጥቶ መሄድ አይገባም፡፡ (ፍት.
                  መን.አን. 12: N. 92)
                </li>
              </ol>

              <h3 className="text-xl font-bold mt-6 mb-3">ለ. ምራቅን ጺቅ ማለት አግባብ አለመሆኑ</h3>
              <p className="mb-4">በሥርዓተ ቅዳሴው ውስጥ ሳለን ምራቅን ጺቅ ማለት ክልክል ነው፡፡ (ፍት.መን.አን. 12፡. 476)</p>

              <h3 className="text-xl font-bold mt-6 mb-3">ሐ. ስለ ግል ጸሎት</h3>
              <p className="mb-4">
                በቤተክርስቲያን ውስጥ ጸሎተ ቍርባኑ ከተጀመረ በኋላ መጽሐፍ ዘርግቶም ሆነ በቃል በንባብ የግል ጸሎትን ማድረስ ክልክል ነው፡፡ ይኸውም ከሚጸለየው ጸሎት ከሚሠዋው
                መሥዋዕት ይልቅ የኔ ጸሎት ይሻላለ ብሎ ማስብ ነው፡ እንዲህ ዓይነቱ ሰው ካለ በጠራራ የፀሐይ ብርሃን ሻማ አብርቶ የወጣ ሰውን ይመስላል። ነገር ግን ከአበው
                በተወረሰው የጸሎት ልምድ አንጻር ቀደም ብሎ ተጀምሮ ያልተፈጸመ ጸሎት ካለ ድርገት ከወረደ በኋላ ቆራቢ ዎች እየቆረቡ ሳለ በጸጥታ ድምፅ ሳያሰሙ መጸለይ ይቻላል። ይህ
                ሥርዋጽ ነው ሥርዋጽ ማለት የጠመመ ማቅኛ የጎደለ መሙያ የመምህራን አስተያየት ማለት ነው፡፡
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">መ. ዋዛ ፈዛዛ አይገባም</h3>
              <p className="mb-4">
                ክፉ ንግግር የክፉ ሰዎች መለያቸው ነው፡፡ ክፉ ሰው ክፉ ነገርን ከሚያስብበት ልቡናው ክፉ ነገርን አውጥቶ ይናገራል ብሏልና ጌታ (ማቲ.12 ቁ.35) ይህን ክፉ ጠባይ
                ለማረም እንደ ክቡር ዳዊት ወማዕጾ ዘዐቅም ለከናፍርየ "አቤቱ ለአፌ ጠባቂ አነ-ር" (አርምሞን) (መዝ.140 ቁ.3) እያሉ መለመን ተገቢ ነው::
              </p>
              <p className="mb-4">
                በተለይ በጸሎተ ቅዳሴው ሥርዓት ላይ ሳሉ ዋዛ ፈዛዘ መናገር፣ መሳቅ ክልክል ነው፡፡ የሳቀ ቢኖር ካህን ከሆነ አንድ ሱባዔ (ሰባት ቀን) በቀኖና በጾም በጸሎት በሰጊድ
                ይቀጣል፡፡ ምዕመን ከሆነ ግን ወዲያው ከሥርዓተ ቅዳሴው ተለይቶ ይውጣ፤ በዕለቱ ሥጋ ወደሙን አይቀበል። (ፍት. መን.አን.12፡ድስቅ.12፣ ኒቅያ 61፣ በስ.72)
              </p>
              <p className="mb-4">
                በሥርዓተ ቅዳሴው ሳለን ከእግረ መስቀሉ መቆማችንን ዘንግ ተን አልባሌ ነገር ብንናገር በዕለተ ዓርብ ከጌታ መስቀል አጠገብ ለመቆም እድሉ ገጥሞት ነገር ግን ኃጢአቱና
                በደሉ እየታወሰው ምሕረትን በመለመን ፈንታ ያፌዝ የነበረውን በግራ በኩል የተሰቀ ለውን ወንበዴውን እና ራሳቸውን እየነቀነቁ ይሳደቡ የነበሩትን ቤተ አይሁድን
                እንዳያስመስለን ጥንቃቄ ማድረግ ይገባናል፡፡ (ማቴ.26 *.39-49)
              </p>
              <p className="mb-4">
                "ከአነጋገር ይፈረዳል ከአያያዝ ይቀደዳል" እንዲሉ አበው ሰው ሁሉ ከአነጋገሩ የተነሣ ይከብራል፤ » ከአነጋገሩም የተነሣ ይፈረድበታ ልና፡፡ (ማቴ. 12 ቁ.37)
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">ሠ. ቂም በቀልን ይዞ ማስቀደስ አይገባም</h3>
              <p className="mb-4">
                ሳል ይዞ ስርቆት ቂም ይዞ ጸሎት የለም እንዲሉ አበው በምሳሌያዊ _ አነጋገራቸው መሃሪና ይቅር ባይነትን ገንዘብ ሳያደርጉ ምሕረትንና ይቅርታን ለመጠየቅ ማሰብ ስንፍና
                ነው፡ ጌታም ክብር ምስጋና ይግባውና እንዲህ ብሎ መክሮናል፡፡ "እንግዲህ መባህን በመሠዊያው ላይ ብታቀርብ በዚያም ወንድምህ አንዳች በአንተ ላይ እንዳለው ብታስብ
                በዚያ በመሰዊያው ፊት መባህን ትተህ ሂድ አስቀድመህ ከወንድምህ ታረቅ በኋላም መጥ ተህ መባህን አቅርብ˚ (ማቴ.5 ቁ24)
              </p>
              <p className="mb-4">
                የቂመኛ ሰው ጸሎት ከእሾህ መካከል እንደወደቀ አዝመራ ነው፡፡ ከእሾህ መካከል የወደቀ አዝመራ ከታችም አይዳብር ከላይም አያፈራ:: ከታችም ሳይዳብር ከላይ ቢያፈራ
                እሾሁን ተጠግተው ፍሬውን አእዋፍ እንዲለቅሙ ቂመኛም ቂሙን ሳይተው ቢጸልይ ቂሙን ተጠግቶ ዲያብሎስ የምስጋውን ፍሬ ለቅሞ ያስቀርበታልና፡፡ /ሕንፃ መነሶሳት/
              </p>
            </div>

            {/* Participation Guidelines */}
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">እንዴት መሳተፍ እንዳለብን</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>አገልግሎቱ ከመጀመሩ በፊት መድረስ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>በአግባቡና በተገቢው ሁኔታ መልበስ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>አገልግሎቱን በጸሎትና በአክብሮት መከታተል</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Book size={16} className="text-blue-600" />
                    <span>ቁርባን ለመቀበል ከሆነ ተገቢውን ጾም መጠበቅ</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/kidase2.jpg"
                  alt="Divine Liturgy Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-bold">ጠቃሚ ማሳሰቢያዎች</h3>
              </div>
              <ul className="space-y-3 text-gray-600 pl-9">
                <li>• ቤተክርስቲያኑ ከአገልግሎቱ 30 ደቂቃ በፊት ይከፈታል</li>
                <li>• እባክዎ በአገልግሎቱ ጊዜ ጸጥታን ይጠብቁ</li>
                <li>• ልጆች ተቀባይነት አላቸው ነገር ግን መቆጣጠር ያስፈልጋል</li>
                <li>• በአገልግሎቱ ጊዜ ፎቶ ማንሳት አይፈቀድም</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
