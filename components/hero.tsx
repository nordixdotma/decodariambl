"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    image: "/1.jpg",
    title: "Transformer les Espaces",
    description: "Création d'intérieurs magnifiques qui inspirent et ravissent",
  },
  {
    image: "/8.jpg",
    title: "Solutions Élégantes",
    description: "Designs fonctionnels qui correspondent à votre style de vie",
  },
  {
    image: "/7.jpg",
    title: "Vie Luxueuse",
    description: "Expérimentez le confort et le style dans chaque pièce",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title || "Design d'intérieur luxueux par Deco Dari Ameublement à Marrakech"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].description}</p>

            {/* Restyled Button with slower hover effect */}
            <Link href="/contact">
              <Button className="group relative overflow-hidden rounded-md bg-white text-primary hover:bg-primary hover:text-white transition-all duration-700 px-8 py-6 text-lg font-medium shadow-lg">
                <span className="relative z-10">Contactez-Nous</span>
                <span className="absolute bottom-0 left-0 h-full w-0 bg-primary transition-all duration-700 group-hover:w-full"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
