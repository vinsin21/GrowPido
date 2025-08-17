import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Lightbulb, Users, BarChart, Rocket } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">StreamLine</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Button asChild className="ml-4">
          <Link href="#signup">Sign Up</Link>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow, Amplify Your Success.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    StreamLine helps teams of all sizes optimize their processes, enhance collaboration, and achieve
                    their goals faster with intuitive tools and powerful automation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=650"
                width="650"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Every Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how StreamLine can revolutionize your team's productivity and collaboration.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center text-center p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Automated Task Management</CardTitle>
                <CardDescription>
                  Effortlessly manage tasks, set deadlines, and automate repetitive actions to boost productivity.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Seamless Collaboration</CardTitle>
                <CardDescription>
                  Work together in real-time, share files, and communicate effectively with integrated team tools.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <BarChart className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Insightful Analytics</CardTitle>
                <CardDescription>
                  Gain deep insights into your performance, track progress, and make data-driven decisions with
                  comprehensive reports.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Customizable Workflows</CardTitle>
                <CardDescription>
                  Adapt StreamLine to fit your unique business needs with flexible and customizable workflow templates.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from satisfied customers who have transformed their operations with StreamLine.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 flex flex-col h-full">
                <CardContent className="flex-1 text-lg italic text-gray-700">
                  &quot;StreamLine transformed our team&apos;s productivity. The intuitive interface and powerful
                  features made a huge difference!&quot;
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">CEO, Innovate Corp</p>
                  </div>
                </CardFooter>
              </Card>
              <Card className="p-6 flex flex-col h-full">
                <CardContent className="flex-1 text-lg italic text-gray-700">
                  &quot;We&apos;ve seen a significant improvement in project delivery times since implementing
                  StreamLine. Highly recommended!&quot;
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-muted-foreground">Project Manager, Global Solutions</p>
                  </div>
                </CardFooter>
              </Card>
              <Card className="p-6 flex flex-col h-full">
                <CardContent className="flex-1 text-lg italic text-gray-700">
                  &quot;The analytics dashboard is a game-changer. We can now identify bottlenecks and optimize our
                  processes like never before.&quot;
                </CardContent>
                <CardFooter className="pt-4 flex items-center gap-3">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Emily White</p>
                    <p className="text-sm text-muted-foreground">Operations Lead, Tech Innovations</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible Pricing Plans</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan that fits your team&apos;s needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                  <CardDescription>Perfect for individuals and small teams.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4">$0</div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>1 User</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Basic Features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Community Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button asChild variant="outline">
                    <Link href="#signup">Get Started Free</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full border-2 border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                  <CardDescription>Ideal for growing teams and businesses.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4">
                    $19<span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Up to 5 Users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>All Basic Features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Advanced Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Priority Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button asChild>
                    <Link href="#signup">Choose Pro</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                  <CardDescription>Custom solutions for large organizations.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold mb-4">Custom</div>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Unlimited Users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>All Pro Features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>24/7 Premium Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center p-6">
                  <Button asChild variant="outline">
                    <Link href="#contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform your workflow?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of successful teams who are already streamlining their operations with StreamLine.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} StreamLine. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Support
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Twitter
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            LinkedIn
          </Link>
        </nav>
      </footer>
    </div>
  )
}
