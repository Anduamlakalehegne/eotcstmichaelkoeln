"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cross, Church, Calendar, Heart, Book, History } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/contexts/locale-context"

export default function FaithPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
    const { translations } = useLocale()

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 text-justify">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    {translations.faith.title}
        </h1>
                <p className="text-2xl md:text-2xl mb-6 text-center">{translations.faith.subtitle}</p>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/photo_2025-06-05_22-08-11.jpg"
            alt="Ethiopian Orthodox Faith"
            fill
            // className="object-cover"
            className="object-contain md:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-lg md:text-xl font-light">
                            {translations.faith.heroDescription}
            </p>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="history" className="w-full mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                        <TabsTrigger value="history">{translations.faith.tabs.history}</TabsTrigger>
                        <TabsTrigger value="beliefs">{translations.faith.tabs.beliefs}</TabsTrigger>
                        <TabsTrigger value="sacraments">{translations.faith.tabs.sacraments}</TabsTrigger>
                        <TabsTrigger value="liturgy">{translations.faith.tabs.liturgy}</TabsTrigger>
                        {/* <TabsTrigger value="calendar">{translations.faith.tabs.calendar}</TabsTrigger> */}
                        <TabsTrigger value="holyBible">{translations.faith.tabs.holyBible}</TabsTrigger>
          </TabsList>

          {/* History Tab */}
          <TabsContent value="history" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <History className="mr-2 text-blue-600" />
                            {translations.faith.history.title}
            </h2>

                        <div className="mb-6">
                            <a
                                href="https://stmaryeotctoronto.com/am/our-history"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline text-sm"
                            >
                                {translations.faith.history.source}
                            </a>
              </div>

                        <div className="space-y-4">
                            {translations.faith.history.content.paragraph1 && (
                                <p>{translations.faith.history.content.paragraph1}</p>
                            )}
                            {translations.faith.history.content.paragraph2 && (
                                <p>{translations.faith.history.content.paragraph2}</p>
                            )}
                            {translations.faith.history.content.paragraph3 && (
                                <p>{translations.faith.history.content.paragraph3}</p>
                            )}
                            {translations.faith.history.content.paragraph4 && (
                                <p>{translations.faith.history.content.paragraph4}</p>
                            )}
                            {translations.faith.history.content.paragraph5 && (
                                <p>{translations.faith.history.content.paragraph5}</p>
                            )}
                            {translations.faith.history.content.paragraph6 && (
                                <p>{translations.faith.history.content.paragraph6}</p>
                            )}
                            {translations.faith.history.content.paragraph7 && (
                                <h3 className="text-xl font-bold mb-4 text-blue-800">{translations.faith.history.content.paragraph7}</h3>
                            )}
                            {translations.faith.history.content.paragraph8 && (
                                <p>{translations.faith.history.content.paragraph8}</p>
                            )}
                            {translations.faith.history.content.paragraph9 && (
                                <p>{translations.faith.history.content.paragraph9}</p>
                            )}
                            {translations.faith.history.content.paragraph10 && (
                                <h3 className="text-xl font-bold mb-4 text-blue-800">{translations.faith.history.content.paragraph10}</h3>
                            )}
                            {translations.faith.history.content.paragraph11 && (
                                <p>{translations.faith.history.content.paragraph11}</p>
                            )}
                            {translations.faith.history.content.paragraph12 && (
                                <p>{translations.faith.history.content.paragraph12}</p>
                            )}
                        </div>
          </TabsContent>

          {/* Core Beliefs Tab */}
          <TabsContent value="beliefs" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Cross className="mr-2 text-blue-600" />
                            {translations.faith.beliefs.title}
            </h2>

              <div className="space-y-4">
                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.beliefs.subtitle}
                            </h3>

                            <p>
                                {translations.faith.beliefs.introduction}
                            </p>

                <div className="bg-blue-50 p-4 rounded-lg my-4">
                  <p className="italic">
                                    {translations.faith.beliefs.creed}
                  </p>
                </div>
              </div>
          </TabsContent>

          {/* Sacraments Tab */}
          <TabsContent value="sacraments" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Church className="mr-2 text-blue-600" />
                            {translations.faith.tabs.sacraments}
            </h2>

              <div className="space-y-4">
                            <p>
                                {translations.faith.sacraments.introduction}
                            </p>
                            <p>{translations.faith.sacraments.list}</p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.sacraments.trinity.title}
                            </h3>
                            <p>
                                {translations.faith.sacraments.trinity.content}
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.sacraments.incarnation.title}
                            </h3>
                            <p>
                                {translations.faith.sacraments.incarnation.content1}
                            </p>
                            <p>
                                {translations.faith.sacraments.incarnation.content2}
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.sacraments.baptism.title}
                            </h3>
                            <p>
                                {translations.faith.sacraments.baptism.content}
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.sacraments.eucharist.title}
                            </h3>
                            <p>
                                {translations.faith.sacraments.eucharist.content1}
                </p>
                <p>
                                {translations.faith.sacraments.eucharist.content2}
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.sacraments.resurrection.title}
                            </h3>
                            <p>
                                {translations.faith.sacraments.resurrection.content}
                </p>
              </div>
          </TabsContent>

          {/* Liturgy Tab */}
          <TabsContent value="liturgy" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Book className="mr-2 text-blue-600" />
                            {translations.faith.tabs.liturgy}
            </h2>

              <div className="space-y-4">
                <p>
                                {translations.faith.liturgy.introduction}
                            </p>

                <div className="bg-blue-50 p-4 rounded-lg my-6">
                  <ol className="list-decimal pl-6 space-y-2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                    <li>{translations.faith.liturgy.list.baptism}</li>
                                    <li>{translations.faith.liturgy.list.myron}</li>
                                    <li>{translations.faith.liturgy.list.eucharist}</li>
                                    <li>{translations.faith.liturgy.list.repentance}</li>
                                    <li>{translations.faith.liturgy.list.priesthood}</li>
                                    <li>{translations.faith.liturgy.list.marriage}</li>
                                    <li>{translations.faith.liturgy.list.unction}</li>
                  </ol>
                </div>

                            <h3 className="text-xl font-semibold mt-8 mb-2">
                                {translations.faith.liturgy.baptism.title}
                            </h3>
                            <p>
                                {translations.faith.liturgy.baptism.content1}
                            </p>
                            <h4 className="text-xl mt-6 mb-2">
                                {translations.faith.liturgy.baptism.title}
                            </h4>

                            <p>
                                {translations.faith.liturgy.baptism.content2}
                            </p>

                {isExpanded && (
                  <>

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.baptism.examples.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.baptism.examples.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.baptism.whyBaptized.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.baptism.whyBaptized.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.baptism.trinityRevelation.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.baptism.trinityRevelation.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.baptism.jordanBaptism.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.baptism.jordanBaptism.content }} />

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.myron.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.myron.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.myron.newTestament.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.myron.newTestament.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.myron.service.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.myron.service.content }} />
                                    <p>
                                        {translations.faith.liturgy.myron.service.paragraph2}
                      </p>
                      <p>
                                        {translations.faith.liturgy.myron.service.paragraph3}
                                    </p>

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.newTestament.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.newTestament.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.benefits.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.benefits.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.prophecy.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.prophecy.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.example.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.example.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.reason.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.reason.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.eucharist.practice.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.eucharist.practice.content }} />

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.beforeRepentance.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.beforeRepentance.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.hatingSin.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.hatingSin.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.lifeDecision.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.lifeDecision.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.duringRepentance.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.duringRepentance.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.confessionProcess.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.confessionProcess.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.rememberingSins.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.rememberingSins.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.fullConfession.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.fullConfession.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.selfAccusation.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.selfAccusation.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.afterRepentance.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.afterRepentance.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.fulfillingCanon.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.fulfillingCanon.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.believingForgiveness.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.believingForgiveness.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.receivingCommunion.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.receivingCommunion.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.repentance.alwaysPreparing.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.repentance.alwaysPreparing.content }} />

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.marriage.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.marriage.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.marriage.purposes.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.marriage.purposes.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.marriage.beforeMarriage.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.marriage.beforeMarriage.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.marriage.duringMarriage.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.marriage.duringMarriage.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.marriage.afterMarriage.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.marriage.afterMarriage.content }} />

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.divorce.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.divorce.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.divorce.death.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.divorce.death.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.divorce.adultery.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.divorce.adultery.content }} />

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.oldTestament.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.oldTestament.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.newTestament.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.newTestament.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.patriarch.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.patriarch.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.bishop.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.bishop.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.deacons.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.deacons.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.deacon.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.deacon.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.subDeacon.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.subDeacon.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.anagnostis.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.anagnostis.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.singers.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.singers.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.doorKeeper.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.doorKeeper.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.priesthood.womenDeacons.title}
                                    </h4>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.priesthood.womenDeacons.content }} />

                                    <h3 className="text-xl font-semibold mt-6 mb-2">
                                        {translations.faith.liturgy.holyOil.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.holyOil.content }} />

                                    <h4 className="text-xl mt-6 mb-2">
                                        {translations.faith.liturgy.holyOil.benefits.title}
                                    </h4>

                                    <div dangerouslySetInnerHTML={{ __html: translations.faith.liturgy.holyOil.benefits.content }} />
                                </>
                            )}
                        </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                            {isExpanded ? translations.faith.showLess : translations.faith.readMore}
                </button>

          </TabsContent>



          {/* Calendar Tab */}
          <TabsContent value="calendar" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Calendar className="mr-2 text-blue-600" />
                            {translations.faith.tabs.calendar}
            </h2>

              <div className="space-y-4">
                            <p>This section will be implemented in the next phase.</p>
                  </div>
                    </TabsContent>

                    {/* Holy Bible Tab */}
                    <TabsContent value="holyBible" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Book className="mr-2 text-blue-600" />
                            {translations.faith.holyBible.title}
                        </h2>

              <div className="space-y-4">
                <div className="overflow-x-auto my-6 flex justify-center my-6">
                  <table className="min-w-[600px] border border-black text-center">
                    <thead>
                    </thead>
                    <tbody>
                      <tr>
                                            <td className="border border-black px-4 py-2" rowSpan={2}>{translations.faith.holyBible.table.bookType}</td>
                                            <td className="border border-black px-4 py-2" colSpan={4}>{translations.faith.holyBible.table.content}</td>
                      </tr>
                      <tr>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.law}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.history}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.wisdom}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.prophecy}</td>
                      </tr>
                      <tr>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.asra}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.lawBooks.pentateuch}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.lawBooks.samuel}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.lawBooks.psalms}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.lawBooks.isaiah}</td>
                      </tr>
                      <tr>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.awalde}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.historyBooks.kings}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.historyBooks.mary}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.historyBooks.maryPraise}</td>
                                            <td className="border border-black px-4 py-2">{translations.faith.holyBible.table.historyBooks.jesus}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                                {translations.faith.holyBible.content.paragraph1}
                </p>
                <p>
                                {translations.faith.holyBible.content.paragraph2}
                </p>
                <p>
                                {translations.faith.holyBible.content.paragraph3}
                            </p>
                            {/* <p>
                       {translations.faith.holyBible.content.paragraph4}
                   </p> */}
                            <h3 className="text-xl font-semibold mt-6 mb-2">
                                {translations.faith.holyBible.content.ancientHistory}
                            </h3>
                            <p>
                                {translations.faith.holyBible.content.paragraph5}
                </p>
                <p>
                                {translations.faith.holyBible.content.paragraph6}
                </p>

                            {isExpanded2 && translations.faith.holyBible.content.extendedContent && (
                  <>
                    <p>
                                        {translations.faith.holyBible.content.extendedContent.paragraph7}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.extendedContent.paragraph8}
                                    </p>

                                    <h4 className="text-lg font-semibold mt-6 mb-2">
                                        {translations.faith.holyBible.content.extendedContent.sectionTitle1}
                                    </h4>
                                    <p>
                                        {translations.faith.holyBible.content.extendedContent.paragraph9}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.extendedContent.paragraph10}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.extendedContent.paragraph11}
                                    </p>
                                </>
                            )}



                            {isExpanded2 && translations.faith.holyBible.content.churchBibleRelationship && (
                                <>
                                    <h3 className="text-xl font-semibold mt-8 mb-4">
                                        {translations.faith.holyBible.content.churchBibleRelationship.title}
                                    </h3>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph1}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph2}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph3}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph4}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph5}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph6}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph7}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph8}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph9}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph10}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph11}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph12}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph13}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph14}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph15}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph16}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph17}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph18}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph19}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph20}
                    </p>
                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph21}
                                    </p>
                                    <h4 className="text-lg font-semibold mt-6 mb-2">
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph22}
                                    </h4>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph23}
                                    </p>
                                    <p>
                                        <a href="https://eotcmk.org/a/17157-2/" className="text-blue-600 hover:text-blue-800 underline">
                                            {translations.faith.holyBible.content.churchBibleRelationship.paragraph24}
                                        </a>
                                    </p>
                                    <h4 className="text-lg font-semibold mt-6 mb-2">
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph25}
                                    </h4>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph26}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph27}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph28}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph29}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph30}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph31}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph32}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph33}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph34}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph35}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph36}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph37}
                                    </p>
                                    <h4 className="text-lg font-semibold mt-6 mb-2">
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph38}
                                    </h4>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph39}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph40}
                                    </p>
                                    <p>
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph41}
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>{translations.faith.holyBible.content.churchBibleRelationship.paragraph42}</li>
                                        <li>{translations.faith.holyBible.content.churchBibleRelationship.paragraph43}</li>
                                        <li>{translations.faith.holyBible.content.churchBibleRelationship.paragraph44}</li>
                                        <li>{translations.faith.holyBible.content.churchBibleRelationship.paragraph45}</li>
                                        <li>{translations.faith.holyBible.content.churchBibleRelationship.paragraph46}</li>
                                    </ul>
                                    <p className="mt-4">
                                        {translations.faith.holyBible.content.churchBibleRelationship.paragraph47}
                                    </p>
                                    <p className="mt-4">
                                        <a href="https://eotcmk.org/a/" className="text-blue-600 hover:text-blue-800 underline">
                                            {translations.faith.holyBible.content.churchBibleRelationship.paragraph48}
                                        </a>
                                    </p>
                                </>
                            )}

                <button
                  onClick={() => setIsExpanded2(!isExpanded2)}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                                {isExpanded2 ? translations.faith.showLess : translations.faith.readMore}
                </button>
                  </div>
          </TabsContent>
        </Tabs>

                {/* Spiritual Life Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="mr-2 text-blue-600" />
                        {translations.faith.spiritualLife.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-600">
                            <h3 className="font-bold text-lg mb-3">{translations.faith.spiritualLife.prayer.title}</h3>
              <p className="text-gray-600">
                                {translations.faith.spiritualLife.prayer.description}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-600">
                            <h3 className="font-bold text-lg mb-3">{translations.faith.spiritualLife.fasting.title}</h3>
              <p className="text-gray-600">
                                {translations.faith.spiritualLife.fasting.description}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-600">
                            <h3 className="font-bold text-lg mb-3">{translations.faith.spiritualLife.charity.title}</h3>
              <p className="text-gray-600">
                                {translations.faith.spiritualLife.charity.description}
              </p>
            </motion.div>
          </div>
        </div>

                {/* Offering and Tithe Section */}
        <div className="bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">{translations.faith.spiritualLife.offering.title}</h2>
                    <div className="text-gray-700 space-y-4">
                        <div>
                            <p className="font-bold">{translations.faith.spiritualLife.offering.firstFruits.title}</p>
                            <p>- {translations.faith.spiritualLife.offering.firstFruits.definition}</p>
                            <p>- {translations.faith.spiritualLife.offering.firstFruits.purpose}</p>
                            <p>- {translations.faith.spiritualLife.offering.firstFruits.commandment}</p>
                            <p>- {translations.faith.spiritualLife.offering.firstFruits.blessing}</p>
                        </div>

                        <div>
                            <p className="font-bold">{translations.faith.spiritualLife.offering.tithe.title}</p>
                            <p>- {translations.faith.spiritualLife.offering.tithe.oldTestament}</p>
                            <p>- {translations.faith.spiritualLife.offering.tithe.newTestament}</p>
                            <p>- {translations.faith.spiritualLife.offering.tithe.ownership}</p>
                            <p>- {translations.faith.spiritualLife.offering.tithe.faithfulness}</p>
                            <p>- {translations.faith.spiritualLife.offering.tithe.blessing}</p>
                        </div>

                        <div>
                            <p className="font-bold">{translations.faith.spiritualLife.offering.reasons.title}</p>
                            <p>{translations.faith.spiritualLife.offering.reasons.reason1}</p>
                            <p>{translations.faith.spiritualLife.offering.reasons.reason2}</p>
                            <p>{translations.faith.spiritualLife.offering.reasons.reason3}</p>
                            <p>{translations.faith.spiritualLife.offering.reasons.reason4}</p>
                            <p>{translations.faith.spiritualLife.offering.reasons.reason5}</p>
                        </div>

                        <div>
                            <p className="font-bold">{translations.faith.spiritualLife.offering.howToGive.title}</p>
                            <p>{translations.faith.spiritualLife.offering.howToGive.way1}</p>
                            <p>{translations.faith.spiritualLife.offering.howToGive.way2}</p>
                            <p>{translations.faith.spiritualLife.offering.howToGive.way3}</p>
                            <p>{translations.faith.spiritualLife.offering.howToGive.way4}</p>
                            <p>{translations.faith.spiritualLife.offering.howToGive.way5}</p>
        </div>
                    </div>
                </div>
                
      </div>
    </div>
  )
}