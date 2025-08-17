import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Clock, CalendarDays } from "lucide-react"

export default function ChronoTaskLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm z-10">
        <Link href="#" className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>
            <span className="text-lg font-bold text-gray-800">ChronoTask</span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4"
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline underline-offset-4"
          >
            Pricing
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex items-center gap-2">
          <Button asChild variant="ghost" className="text-gray-600 hover:bg-gray-100">
            <Link href="#">Sign in</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="#">Get demo</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        {/* Dotted Background Pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle, #e0e0e0 1px, transparent 1px)`,
            backgroundSize: `20px 20px`,
            opacity: 0.5,
          }}
        />

        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-56 flex items-start justify-center text-center z-10">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-1 p-2 bg-white rounded-xl shadow-md">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-gray-800 rounded-full" />
                    <div className="w-3 h-3 bg-gray-800 rounded-full" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-gray-900 max-w-4xl leading-tight">
                Think, plan, and track <br />
                <span className="text-gray-500">all in one place</span>
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl lg:text-lg xl:text-xl">
                Efficiently manage your tasks and boost productivity.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
              >
                <Link href="#">Get free demo</Link>
              </Button>
            </div>
          </div>

          {/* Floating UI Elements */}
          {/* Sticky Note */}
          <div className="absolute top-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-yellow-200 p-4 rounded-md shadow-lg rotate-3 hidden md:block max-w-[200px] text-left text-sm text-gray-800">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
            <p>Take notes to keep track of crucial details, and accomplish more tasks with ease.</p>
          </div>

          {/* Checkmark Icon */}
          <div className="absolute top-[15%] left-[13%] md:left-[18%] lg:left-[23%] bg-white p-3 rounded-xl shadow-md -rotate-6 hidden md:flex items-center justify-center">
            <Check className="h-8 w-8 text-blue-500" />
          </div>

          {/* Reminders Folder */}
          <div className="absolute top-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-6 hidden md:block max-w-[250px] text-left">
            <div className="font-semibold text-gray-800 mb-2">Reminders</div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Today&apos;s Meeting</p>
                <p className="text-sm text-gray-500">Call with marketing team</p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Time</p>
                <p className="text-sm text-blue-500">13:00 - 13:45</p>
              </div>
            </div>
          </div>

          {/* Today's Tasks Folder */}
          <div className="absolute bottom-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-white p-4 rounded-xl shadow-lg -rotate-3 hidden md:block max-w-[300px] text-left">
            <div className="font-semibold text-gray-800 mb-3">Today&apos;s tasks</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                  8
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">New ideas for campaign</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-blue-500 rounded-full w-[60%]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Sep 10</p>
                </div>
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Avatar"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Avatar"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                </div>
                <span className="text-xs text-gray-500">60%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">Design PPT #4</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-blue-500 rounded-full w-[112%]" /> {/* Simulating 112% */}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Sep 18</p>
                </div>
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt="Avatar"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                </div>
                <span className="text-xs text-gray-500">112%</span>
              </div>
            </div>
          </div>

          {/* Integrations Folder */}
          <div className="absolute bottom-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-3 hidden md:block max-w-[250px] text-left">
            <div className="font-semibold text-gray-800 mb-3">100+ Integrations</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Gmail"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Slack"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Calendar"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
