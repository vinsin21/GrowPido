import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils" // Import your utility function for classnames
import "./globals.css"
import SiteHeader from "@/components/site-header"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ImpactFlow Marketing - Amplify Your Brand",
  description: "Your dedicated marketing partner for impactful strategies and measurable growth.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Added suppressHydrationWarning to handle browser extension errors
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "overflow-x-hidden" // ✅ THE FIX: This class prevents horizontal scrolling
        )}
      >
        <SiteHeader />
        {children}
        <FooterTapedDesign />
      </body>
    </html>
  )
}