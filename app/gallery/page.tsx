import type { Metadata } from "next"
import GalleryHero from "@/components/gallery-hero"
import BeforeAfterSlider from "@/components/before-after-slider"
import SectionTitle from "@/components/section-title"
import FloatingContact from "@/components/floating-contact"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Galerie | Deco Dari Ameublement",
  description:
    "Découvrez nos transformations spectaculaires d'intérieurs résidentiels, hôteliers et médicaux à Marrakech. Avant/Après de nos projets de design.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Galerie | Deco Dari Ameublement",
    description:
      "Découvrez nos transformations spectaculaires d'intérieurs résidentiels, hôteliers et médicaux à Marrakech.",
    url: "https://decodariambl.ma/gallery",
    images: [
      {
        url: "/aboutimage.png",
        width: 1200,
        height: 630,
        alt: "Galerie Deco Dari - Avant/Après",
      },
    ],
  },
}

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
  {
    id: 4,
    beforeImage: "https://i.ibb.co/V0b2Sn7q/Whats-App-Image-2025-05-17-at-20-21-01-3b180bc3.jpg",
    afterImage: "https://i.ibb.co/1J9bXYHY/Whats-App-Image-2025-05-17-at-20-20-28-8962c466.jpg",
  },
  {
    id: 5,
    beforeImage: "https://i.ibb.co/rGsvQKtX/Whats-App-Image-2025-05-17-at-20-09-17-330111d9.jpg",
    afterImage: "https://i.ibb.co/WpVMF90J/Whats-App-Image-2025-05-17-at-20-09-17-e781eaef.jpg",
  },
  {
    id: 6,
    beforeImage: "https://i.ibb.co/spP7MpMP/Whats-App-Image-2025-05-17-at-20-14-10-547a17ba.jpg",
    afterImage: "https://i.ibb.co/YSKk1Xr/Whats-App-Image-2025-05-17-at-20-06-58-a872d084.jpg",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHero />

      {/* Add Breadcrumb - only visible on mobile */}
      <div className="bg-gray-50 md:hidden">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ name: "Galerie", path: "/gallery" }]} />
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Nos Transformations"
            subtitle="Découvrez comment nous transformons les espaces ordinaires en environnements extraordinaires."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {beforeAfterItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <BeforeAfterSlider items={[item]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}
