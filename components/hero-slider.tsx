"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale } from "@/contexts/locale-context"
import { useIsMobile } from "@/hooks/use-mobile"

interface SlideImage {
  url: string
  alt: {
    en: string
    am: string
    de: string
  }
}

export default function HeroSlider() {
  const { locale, translations } = useLocale()
  const isMobile = useIsMobile()
  
  const slides: SlideImage[] = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-image-pH6gyjjaoMSinH0w1vWR8987GZ7G5R.jpeg",
      alt: {
        en: "Church Ceremony",
        am: "የቤተክርስቲያን ሥነ ሥርዓት",
        de: "Kirchliche Zeremonie"
      },
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-xHU3IROC6ReraBjI9GUVpUK7rqtMoW.jpeg",
      alt: {
        en: "Church Background",
        am: "የቤተክርስቲያን ዳራ",
        de: "Kirchenhintergrund"
      },
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides.length])

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides.length])

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [nextSlide])

  // Get welcome text based on locale
  const getWelcomeText = () => {
    switch (locale) {
      case "am":
        return {
          title: "እንኳን ወደ ኮሎኝ ቅዱስ ሚካኤል የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በሰላም መጡ!!"
        }
      case "de":
        return {
          title: "WILLKOMMEN IN DER ST. MICHAEL ÄTHIOPISCH-ORTHODOXEN KIRCHE IN KÖLN"
        }
      default:
        return {
          title: "WELCOME TO ST. MICHAEL ETHIOPIAN ORTHODOX CHURCH IN COLOGNE"
        }
    }
  }

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] md:h-screen md:min-h-[500px] overflow-hidden">
      {/* Slide Background with Transition */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out overflow-hidden">
        <Image
          src={slides[currentIndex].url || "/placeholder.svg"}
          alt={slides[currentIndex].alt[locale] || slides[currentIndex].alt.en}
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute z-0"></div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white hover:bg-white/40 transition-all duration-200 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
      <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="bg-white/30 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white hover:bg-white/40 transition-all duration-200 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slider Pagination */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 sm:gap-4">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 shadow-lg ${
              currentIndex === slideIndex 
                ? "bg-white scale-110" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}
