"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./section-title"
import BeforeAfterSlider from "./before-after-slider"

// Sample before/after comparison data
const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "/b1.jpg",
    afterImage: "/a1.jpg",
  },
  {
    id: 2,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
  {
    id: 3,
    beforeImage: "/1.jpg",
    afterImage: "/1.jpg",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Avant / Après"
          subtitle="Découvrez les transformations spectaculaires que nous avons réalisées pour nos clients."
        />

        <div className="mt-12 mb-16">
          <BeforeAfterSlider items={beforeAfterItems} />
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border border-primary text-sm sm:text-base font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white transition-colors duration-200 corner-fill-hover"
          >
            Voir Plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
