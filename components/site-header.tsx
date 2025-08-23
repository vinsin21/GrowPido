"use client"

import Link from "next/link"
import Magnet from '@/components/ui/Magnet'
import { Button } from "@/components/ui/button"
import { Megaphone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

// --- Helper Hook ---
// You can move this to a separate file like /hooks/use-media-query.ts
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}


export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // ✅ Step 1: Check for desktop screen size. 'md' breakpoint in Tailwind is 768px.
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Ensure component is mounted before showing interactive elements
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // ✅ Step 2: Modify scroll handler to respect screen size
  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on desktop
      if (isDesktop) {
        const scrollPosition = window.scrollY
        setIsScrolled(scrollPosition > 100)
      } else {
        // On mobile, ensure the animation state is always reset
        setIsScrolled(false)
      }
    }

    // Trigger handleScroll once on mount/resize to set the correct initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll)
    // ✅ Step 3: Add isDesktop to dependency array
    // This ensures the effect re-runs if the user resizes their window across the breakpoint
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDesktop])

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
    setIsMenuOpen(!isMenuOpen)
  }

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Megaphone className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold text-gray-800">Geow Pido</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex">Free Consultation</Button>
        </div>
      </header>
    )
  }

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-12 " />

      {/* Animated Header Container */}
      <div className="fixed top-0 left-0  right-0 z-50 transition-all duration-500 ease-in-out">
        <div
          className={`transition-all duration-500 ease-in-out ${
            // The isScrolled variable now correctly reflects both scroll and screen size
            isScrolled ? "mx-auto mt-4 w-[60%] rounded-2xl shadow-2xl shadow-black/10" : "w-full"
            }`}
        >
          <header
            className={`px-4 lg:px-6 h-14 flex items-center bg-white transition-all duration-500 ease-in-out ${isScrolled ? "border border-gray-200/50 rounded-lg backdrop-blur-md bg-white/95" : "border-b shadow-sm"
              }`}
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <Megaphone className="h-6 w-6 text-blue-600" />
              <span
                className={`font-bold text-gray-800 transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"
                  }`}
              >
                {isScrolled ? "GrowPido" : "GrowPido"}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="ml-auto hidden  md:flex gap-4 sm:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 hover:underline underline-offset-4 ${isActive(item.href) ? "text-blue-600 underline" : "text-gray-600"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto md:ml-4 flex items-center gap-2">
              <Button
                asChild
                className={`bg-blue-600 hover:bg-blue-700 text-white hidden md:flex transition-all duration-300 ${isScrolled ? "text-xs px-3 py-1 h-8" : "text-sm"
                  }`}
              >
                <Link href="/contact">{isScrolled ? "Contact" : "Free Consultation"}</Link>
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          // Since isScrolled is always false on mobile, this simplifies to top: "56px"
          style={{ top: isScrolled ? "88px" : "56px" }}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 bg-white border-b shadow-lg z-40 md:hidden transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        // This also simplifies to top: "56px"
        style={{ top: isScrolled ? "88px" : "56px" }}
      >
        <nav className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-50 border-l-4 ${isActive(item.href)
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