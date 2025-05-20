"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./section-title"
import BeforeAfterSlider from "./before-after-slider"

// Sample before/after comparison data
const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "https://i.ibb.co/V0b2Sn7q/Whats-App-Image-2025-05-17-at-20-21-01-3b180bc3.jpg",
    afterImage: "https://i.ibb.co/1J9bXYHY/Whats-App-Image-2025-05-17-at-20-20-28-8962c466.jpg",
  },
  {
    id: 2,
    beforeImage: "https://i.ibb.co/rGsvQKtX/Whats-App-Image-2025-05-17-at-20-09-17-330111d9.jpg",
    afterImage: "https://i.ibb.co/WpVMF90J/Whats-App-Image-2025-05-17-at-20-09-17-e781eaef.jpg",
  },
  {
    id: 3,
    beforeImage: "https://i.ibb.co/spP7MpMP/Whats-App-Image-2025-05-17-at-20-14-10-547a17ba.jpg",
    afterImage: "https://i.ibb.co/YSKk1Xr/Whats-App-Image-2025-05-17-at-20-06-58-a872d084.jpg",
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
