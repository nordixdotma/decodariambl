import Image from "next/image"

export default function GalleryHero() {
  return (
    <section className="relative h-[50dvh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co/spP7MpMP/Whats-App-Image-2025-05-17-at-20-14-10-547a17ba.jpg"
          alt="Notre Galerie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content - Aligned to the left and positioned lower */}
      <div className="relative h-full flex items-end justify-start">
        <div className="text-left text-white p-4 md:p-12 pb-16 md:pb-24 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Notre Galerie</h1>
          <p className="text-base md:text-xl">Des transformations qui parlent d'elles-mêmes.</p>
        </div>
      </div>
    </section>
  )
}
