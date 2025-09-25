"use client"

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
import { useLocale } from "@/contexts/locale-context"

export default function Home() {
  const { translations } = useLocale()
  
  return (
    <div>
      <main className="min-h-screen gap-16">
        <Header />

        {/* Hero Section with Auto-playing Slider */}
        <HeroSlider />

        {/* Official Website Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Welcome Text Header - Not full width */}
            <div className="mb-12 flex justify-center">
              <div className="max-w-4xl mx-auto text-center">
                <div className="">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-700 leading-tight">
                    {translations.home.welcome.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              {/* Image Section */}
              <div className="flex flex-col h-full">
                <div className="relative flex-1 min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/photo_2024-04-28_18-45-26.jpg"
                    alt="Church Building"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                {/* Caption Section */}
                <div className="py-3 flex flex-col items-center">
                  <span className="block text-center text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 bg-white/80 rounded-lg px-2 xs:px-4 sm:px-6 py-2 sm:py-3 shadow-md border border-blue-100 tracking-wide mb-2">
                    {translations.home.welcome.caption}
                  </span>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col justify-start space-y-8 text-justify h-full">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {translations.home.welcome.paragraph1}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {translations.home.welcome.paragraph2}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {translations.home.welcome.paragraph3}
                  </p>
                </div>
                <div className="flex justify-start pt-4">
                  <Link
                    href="/about/history"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {translations.home.welcome.readMore}
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
            <h2 className="text-3xl font-bold text-center mb-12">{translations.home.events.title}</h2>
            <EventSlider />
          </div>
        </section>

        {/* Community Quote Section */}
        <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-xHU3IROC6ReraBjI9GUVpUK7rqtMoW.jpeg"
              alt="Church Community"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Quote Content */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center mb-5">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-4xl md:text-8xl text-white/20 font-serif mb-3">"</div>
                <p className="text-sm sm:text-base md:text-lg text-white font-light leading-relaxed mb-6 md:mb-8 text-justify">
                  "{translations.home.community.quote}"
                </p>
                <p className="text-xs md:text-base text-white font-medium">{translations.home.community.author}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">{translations.home.news.title}</h2>

                <Link
                  href="/news/church-news"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {translations.home.news.readAllNews}
                </Link>
              </div>
              <div className="md:col-span-2">
                <NewsSlider />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-[400px]">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.237020795784!2d6.9000118760123295!3d50.99329207170089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf301e45ab489d%3A0x7a8cddf4bfecdac9!2zTGluZHdlaWxlcndlZyA5NCwgNTA3MzkgS8O2bG4sIOGMgOGIreGImOGKlQ!5e0!3m2!1sde!2sde&hl=de"
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
