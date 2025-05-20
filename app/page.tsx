import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Process from "@/components/process"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import FloatingContact from "@/components/floating-contact"

export const metadata: Metadata = {
  title: "Deco Dari Ameublement | Design d'Intérieur à Marrakech",
  description:
    "Transformez votre espace avec Deco Dari, experts en design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <FloatingContact />
    </main>
  )
}
