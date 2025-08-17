import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Award, Users, Target, TrendingUp } from "lucide-react"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

export default function AboutPage() {
  const skills = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click Advertising (PPC)",
    "Social Media Marketing",
    "Content Strategy & Creation",
    "Email Marketing Automation",
    "Marketing Analytics & Reporting",
    "Conversion Rate Optimization",
    "Brand Strategy & Positioning",
  ]

  const certifications = [
    { name: "Google Ads Certified", issuer: "Google", year: "2024" },
    { name: "Google Analytics Certified", issuer: "Google", year: "2024" },
    { name: "Facebook Blueprint Certified", issuer: "Meta", year: "2023" },
    { name: "HubSpot Content Marketing", issuer: "HubSpot", year: "2023" },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every strategy is built around measurable outcomes and ROI. I focus on what moves the needle for your business.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is my success. I work as an extension of your team, understanding your unique challenges and goals.",
    },
    {
      icon: TrendingUp,
      title: "Data-Informed",
      description:
        "Decisions backed by analytics and insights. I let the data guide strategy while maintaining creative excellence.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description:
        "The digital landscape evolves rapidly. I stay ahead of trends and platform changes to keep your marketing effective.",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Hi, I'm Sarah Johnson</h1>
                <p className="text-xl text-blue-600 font-semibold">Digital Marketing Strategist & Growth Specialist</p>
              </div>
              <p className="text-gray-600 md:text-lg leading-relaxed">
                With over 8 years of experience in digital marketing, I help solo entrepreneurs and small businesses
                amplify their brand presence and drive measurable growth. My passion lies in creating data-driven
                strategies that not only increase visibility but also convert prospects into loyal customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">Work With Me</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Sarah Johnson - Marketing Strategist"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Core Expertise</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Specialized skills that drive results across all digital marketing channels.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-0">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-medium text-gray-800">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">My Approach</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              The principles that guide every client relationship and marketing strategy.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-gray-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              Certifications & Credentials
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Staying current with the latest platform updates and best practices.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader className="pb-2">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-gray-800">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 font-medium">{cert.issuer}</p>
                  <Badge variant="outline" className="mt-2 text-blue-600 border-blue-200">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">My Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                My journey into digital marketing began during my college years when I helped a local coffee shop
                increase their social media following from 200 to 10,000 in just six months. Seeing the direct impact of
                strategic marketing on a small business ignited my passion for this field.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                After working with several marketing agencies and gaining experience across various industries, I
                realized that small businesses and solo entrepreneurs often get overlooked by larger agencies. They
                deserve the same level of strategic thinking and personalized attention as enterprise clients.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                That's why I founded ImpactFlow Marketing – to bridge that gap and provide boutique-level marketing
                services to businesses that are ready to grow but need a trusted partner to guide them through the
                complex digital landscape.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not crafting marketing strategies, you'll find me hiking local trails, experimenting with new
                coffee brewing methods, or volunteering with local small business development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Ready to Work Together?</h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
              Let's have a conversation about your marketing goals and how I can help you achieve them.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterTapedDesign />
    </div>
  )
}
