import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"


// We are not using this fotter anymore we are using 
// We are using  <FooterTapedDesign />
// You can see it in Layout.tsx 

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white shadow-sm z-20">
      <p className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ImpactFlow Marketing. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
          Terms of Service
        </Link>
        <Link href="/contact" className="text-xs text-gray-600 hover:underline underline-offset-4">
          <Mail className="h-4 w-4 inline-block mr-1" /> Email
        </Link>
        <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
          <Twitter className="h-4 w-4 inline-block mr-1" /> Twitter
        </Link>
        <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
          <Linkedin className="h-4 w-4 inline-block mr-1" /> LinkedIn
        </Link>
        <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
          <Instagram className="h-4 w-4 inline-block mr-1" /> Instagram
        </Link>
      </nav>
    </footer>
  )
}
