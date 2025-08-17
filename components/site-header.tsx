"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Megaphone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  // Ensure component is mounted before showing interactive elements
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const toggleMenu = () => {
    console.log("Menu toggle clicked") // Debug log
    setIsMenuOpen(!isMenuOpen)
  }

  if (!isMounted) {
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm z-50 relative">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Megaphone className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-800">ImpactFlow Marketing</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex">Free Consultation</Button>
        </div>
      </header>
    )
  }

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm z-50 relative">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Megaphone className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-800">ImpactFlow Marketing</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gray-900 hover:underline underline-offset-4 ${
                isActive(item.href) ? "text-blue-600 underline" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto md:ml-4 flex items-center gap-2">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex">
            <Link href="/contact">Free Consultation</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-gray-600" /> : <Menu className="h-5 w-5 text-gray-600" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: "56px" }} // Account for header height
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-14 left-0 right-0 bg-white border-b shadow-lg z-40 md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-50 border-l-4 ${
                isActive(item.href)
                  ? "text-blue-600 border-blue-600 bg-blue-50"
                  : "text-gray-600 border-transparent hover:border-gray-200"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen ? "slideInFromLeft 0.3s ease-out forwards" : "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-3">
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
