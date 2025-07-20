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
    <section
      className={
        isMobile
          ? "relative h-[40vh] min-h-[250px] w-full"
          : "relative h-screen min-h-[400px] w-full"
      }
    >
      {/* Slide Background with Transition */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out">
        <Image
          src={slides[currentIndex].url || "/placeholder.svg"}
          alt={slides[currentIndex].alt[locale] || slides[currentIndex].alt.en}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        <div className="absolute z-0"></div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="bg-white/20 p-1 sm:p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={isMobile ? 18 : 24} />
        </button>
      </div>
      <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="bg-white/20 p-1 sm:p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={isMobile ? 18 : 24} />
        </button>
      </div>

      {/* Slider Pagination */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              currentIndex === slideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}
