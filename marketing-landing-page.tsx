import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Sparkles, CheckCircle, Users } from "lucide-react"
import { MarketingServicesBento } from "@/components/marketing-services-bento"
import { TestimonialsGridMotion } from "@/components/testimonials-grid-motion"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

export default function MarketingLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
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
                  <Sparkles className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-gray-900 max-w-4xl leading-tight">
                Amplify Your Brand. <br />
                <span className="text-gray-500">Drive Real Results.</span>
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl lg:text-lg xl:text-xl">
                Your dedicated marketing partner for impactful strategies and measurable growth. I help solo
                entrepreneurs and small businesses craft compelling digital marketing strategies, from SEO and content
                to social media and paid ads, ensuring your message reaches the right audience.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Floating UI Elements (Adapted for Marketing) */}
          {/* Sticky Note: Campaign Ideas */}
          <div className="absolute top-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-yellow-200 p-4 rounded-md shadow-lg rotate-3 hidden md:block max-w-[200px] text-left text-sm text-gray-800">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
            <p>Brainstorming new campaign ideas for Q3 launch.</p>
          </div>

          {/* Checkmark Icon: Campaign Launched */}
          <div className="absolute top-[15%] left-[13%] md:left-[18%] lg:left-[23%] bg-white p-3 rounded-xl shadow-md -rotate-6 hidden md:flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>

          {/* Reminders Folder: Client Meeting */}
          <div className="absolute top-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-6 hidden md:block max-w-[250px] text-left">
            <div className="font-semibold text-gray-800 mb-2">Upcoming</div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Client Strategy Call</p>
                <p className="text-sm text-gray-500">Discuss Q2 performance</p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
              <Mail className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-800">Content Review</p>
                <p className="text-sm text-blue-500">Blog post draft for approval</p>
              </div>
            </div>
          </div>

          {/* Today's Tasks Folder: Marketing Tasks */}
          <div className="absolute bottom-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-white p-4 rounded-xl shadow-lg -rotate-3 hidden md:block max-w-[300px] text-left">
            <div className="font-semibold text-gray-800 mb-3">Today&apos;s Marketing Tasks</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">SEO Audit for Client X</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-blue-500 rounded-full w-[75%]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Due: Today</p>
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
                <span className="text-xs text-gray-500">75%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">Schedule Social Media Posts</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-blue-500 rounded-full w-[90%]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Due: Tomorrow</p>
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
                <span className="text-xs text-gray-500">90%</span>
              </div>
            </div>
          </div>

          {/* Integrations Folder: Marketing Tools */}
          <div className="absolute bottom-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-3 hidden md:block max-w-[250px] text-left">
            <div className="font-semibold text-gray-800 mb-3">Key Integrations</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Google Analytics"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Mailchimp"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Facebook Ads"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Bento Grid */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  My Expertise & Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tailored marketing solutions designed to elevate your brand and achieve your business goals.
                </p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <MarketingServicesBento />
            </div>
          </div>
        </section>

        {/* Testimonials Section with Animated Grid */}
        <section id="testimonials" className="w-full">
          <TestimonialsGridMotion />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Flexible Marketing Packages
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your marketing goals and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Starter Boost</CardTitle>
                  <CardDescription className="text-gray-600">
                    Ideal for new businesses establishing their online presence.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4 text-gray-900">
                    $499<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Basic SEO Audit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Social Media Profile Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>1-Hour Strategy Call</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Monthly Performance Report</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full border-2 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Growth Accelerator</CardTitle>
                  <CardDescription className="text-gray-600">
                    For growing brands ready to scale their marketing efforts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4">
                    $1299<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Comprehensive SEO Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Content Calendar & Creation (2 articles/month)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Active Social Media Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>PPC Campaign Setup & Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Bi-Weekly Performance Calls</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Custom Strategy</CardTitle>
                  <CardDescription className="text-gray-600">
                    Tailored, full-service solutions for unique and complex marketing needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4 text-gray-900">
                    Custom<span className="text-lg text-gray-500"> Quote</span>
                  </div>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Full-Service Marketing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Dedicated Strategy & Execution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Advanced Analytics & Reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Ongoing Support & Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Priority Access & Consultations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section id="contact-cta" className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                Ready to make an impact?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let&apos;s create a marketing strategy that gets you noticed and drives real business growth.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="max-w-lg flex-1 border-gray-300 focus:border-blue-600"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                </Button>
              </form>
              <p className="text-xs text-gray-500">I respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterTapedDesign />
    </div>
  )
}
