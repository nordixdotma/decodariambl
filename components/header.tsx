"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "header-solid" : "header-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 ${isScrolled ? "py-3" : "py-4"} transition-padding duration-300`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="z-10">
            {/* Conditional rendering of logos based on scroll position */}
            {isScrolled ? (
              <Image
                src="/logoblack.png"
                alt="DARI Logo"
                width={120}
                height={60}
                className={`${isScrolled ? "h-10" : "h-12"} w-auto transition-all duration-300`}
              />
            ) : (
              <Image
                src="/logowhite.png"
                alt="DARI Logo"
                width={120}
                height={60}
                className="h-12 w-auto transition-opacity duration-300"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <NavLinks textColor={isScrolled ? "text-black" : "text-white"} />
          </nav>

          {/* Restyled Contact Button */}
          <Link href="/contact">
            <Button
              className={`hidden md:inline-flex transition-all duration-300 wobble-on-hover ${
                isScrolled ? "bg-primary text-white hover:bg-primary" : "bg-white text-primary hover:bg-white"
              }`}
            >
              Obtenir un Devis
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="text-black" size={24} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide from right */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top Header with Logo and Close Button */}
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <Image
              src="/logoblack.png"
              alt="DARI Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Header */}
          <div className="p-4 border-b-2 border-primary">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
              À Propos
            </MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>
              Galerie
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Contact Button */}
          <div className="p-4 border-t border-gray-100">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary text-white w-full py-5 wobble-on-hover">
                Obtenir un Devis
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

function NavLinks({ textColor, onClick }: { textColor: string; onClick?: () => void }) {
  return (
    <>
      <Link href="/" className={`${textColor} hover:text-primary font-medium nav-link-underline`} onClick={onClick}>
        Accueil
      </Link>
      <Link
        href="/about"
        className={`${textColor} hover:text-primary font-medium nav-link-underline`}
        onClick={onClick}
      >
        À Propos
      </Link>
      <Link
        href="/gallery"
        className={`${textColor} hover:text-primary font-medium nav-link-underline`}
        onClick={onClick}
      >
        Galerie
      </Link>
      <Link
        href="/contact"
        className={`${textColor} hover:text-primary font-medium nav-link-underline`}
        onClick={onClick}
      >
        Contact
      </Link>
    </>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-lg py-3 border-b border-gray-100 text-gray-800 hover:text-primary flex items-center transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
