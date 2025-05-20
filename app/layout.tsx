import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Loader from "@/components/loader"
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/json-ld"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Deco Dari Ameublement | Design d'Intérieur à Marrakech",
    template: "%s | Deco Dari Ameublement",
  },
  description:
    "Experts en design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech. Transformez votre espace avec notre expertise en décoration intérieure.",
  keywords: [
    "design d'intérieur",
    "décoration",
    "ameublement",
    "Marrakech",
    "Deco Dari",
    "intérieur de luxe",
    "rénovation",
    "modélisation 3D",
  ],
  authors: [{ name: "Deco Dari Ameublement" }],
  creator: "Deco Dari Ameublement",
  publisher: "Deco Dari Ameublement",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://decodariambl.ma"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
    },
  },
  openGraph: {
    title: "Deco Dari Ameublement | Design d'Intérieur à Marrakech",
    description:
      "Experts en design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech. Transformez votre espace avec notre expertise.",
    url: "https://decodariambl.ma",
    siteName: "Deco Dari Ameublement",
    images: [
      {
        url: "/aboutimage.png",
        width: 1200,
        height: 630,
        alt: "Deco Dari Ameublement - Design d'Intérieur",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deco Dari Ameublement | Design d'Intérieur à Marrakech",
    description: "Experts en design d'intérieur pour résidences, hôtels et établissements médicaux à Marrakech.",
    images: ["/aboutimage.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification=your_verification_code", // Replace with actual verification code when available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <LocalBusinessJsonLd />
            <WebsiteJsonLd />
            <Loader />
            <Header />
            {children}
            <Footer />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
