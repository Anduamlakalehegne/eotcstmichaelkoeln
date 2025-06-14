"use client"

import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[50vh]">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-image-pH6gyjjaoMSinH0w1vWR8987GZ7G5R.jpeg"
          alt="Church Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-1 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
