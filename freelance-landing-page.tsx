import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layout, TrendingUp, LifeBuoy, Star, Mail, Linkedin, Twitter } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Code className="h-6 w-6 text-purple-600" />
          <span className="text-lg font-bold text-gray-800">InnovateFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#services"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 hover:underline underline-offset-4"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-600 hover:text-purple-600 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <Button asChild className="ml-4 bg-purple-600 hover:bg-purple-700 text-white">
          <Link href="#contact">Get a Quote</Link>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Transforming Ideas into Digital Success.
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    InnovateFlow is a freelance agency specializing in bespoke web development, design, and digital
                    strategy solutions for businesses seeking a powerful online presence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="#contact">Start Your Project</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Link href="#services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=650"
                width="650"
                height="550"
                alt="Digital Solutions"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services/Features Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Core Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of services to bring your digital vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Code className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-800">Custom Web Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Building high-performance, scalable, and secure websites tailored to your unique business needs.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Layout className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-800">UI/UX Design</CardTitle>
                <CardDescription className="text-gray-600">
                  Crafting intuitive and engaging user experiences that captivate your audience and drive conversions.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-800">Digital Strategy & Consulting</CardTitle>
                <CardDescription className="text-gray-600">
                  Guiding your digital journey with expert insights, market analysis, and actionable growth strategies.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <LifeBuoy className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-800">Ongoing Support & Maintenance</CardTitle>
                <CardDescription className="text-gray-600">
                  Ensuring your digital assets remain optimized, secure, and up-to-date with reliable post-launch
                  support.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Client Success Stories
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what our satisfied clients have to say about working with InnovateFlow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 flex flex-col h-full shadow-md">
                <CardContent className="flex-1 text-lg italic text-gray-700">
                  &quot;InnovateFlow delivered an outstanding website that perfectly captures our brand. Their attention
                  to detail and communication were exceptional!&quot;
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    width="48"
                    height="48"
                    alt="Client Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Founder, Bloom & Grow</p>
                  </div>
                </CardFooter>
              </Card>
              <Card className="p-6 flex flex-col h-full shadow-md">
                <CardContent className="flex-1 text-lg italic text-gray-700">
                  &quot;The UI/UX design work by InnovateFlow transformed our app's usability. Our users love the new
                  interface!&quot;
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    width="48"
                    height="48"
                    alt="Client Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Michael Lee</p>
                    <p className="text-sm text-gray-500">Product Lead, Nexus Tech</p>
                  </div>
                </CardFooter>
              </Card>
              <Card className="p-6 flex flex-col h-full shadow-md">
                <CardContent className="flex-1 text-lg italic text-gray-700">
                  &quot;InnovateFlow's strategic guidance was invaluable. They helped us define our digital roadmap and
                  achieve significant growth.&quot;
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    width="48"
                    height="48"
                    alt="Client Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">David Kim</p>
                    <p className="text-sm text-gray-500">CEO, Ascent Ventures</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Flexible packages designed to fit your project needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full shadow-md">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Starter Website</CardTitle>
                  <CardDescription className="text-gray-600">
                    Ideal for personal brands or small businesses.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4 text-gray-900">
                    $999<span className="text-lg text-gray-500"> (one-time)</span>
                  </div>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Up to 5 Pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Basic SEO Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>1 Month Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full border-2 border-purple-600 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Pro Package</CardTitle>
                  <CardDescription className="text-gray-600">
                    For growing businesses needing more functionality.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4 text-gray-900">
                    $2499<span className="text-lg text-gray-500"> (one-time)</span>
                  </div>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Up to 15 Pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Custom UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Advanced SEO & Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>3 Months Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>CMS Integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="#contact">Choose Pro</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full shadow-md">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">Custom Project</CardTitle>
                  <CardDescription className="text-gray-600">
                    Tailored solutions for unique and complex needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4 text-gray-900">
                    Custom<span className="text-lg text-gray-500"> Quote</span>
                  </div>
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Unlimited Pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Full-Stack Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Advanced Integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Ongoing Maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-600" />
                      <span>Dedicated Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Link href="#contact">Request a Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t bg-gray-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
                Ready to elevate your online presence?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let&apos;s discuss your project and bring your vision to life.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="max-w-lg flex-1 border-gray-300 focus:border-purple-600"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Get in Touch
                </Button>
              </form>
              <p className="text-xs text-gray-500">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white shadow-sm">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} InnovateFlow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
            <Mail className="h-4 w-4 inline-block mr-1" /> Email
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
            <Twitter className="h-4 w-4 inline-block mr-1" /> Twitter
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:underline underline-offset-4">
            <Linkedin className="h-4 w-4 inline-block mr-1" /> LinkedIn
          </Link>
        </nav>
      </footer>
    </div>
  )
}
