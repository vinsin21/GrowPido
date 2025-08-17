import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

export default function PortfolioPage() {
  const projects = [
    {
      title: "TechStart SaaS Growth",
      description:
        "Complete digital marketing transformation for a B2B SaaS startup, resulting in 300% increase in qualified leads.",
      image: "/placeholder.svg?height=400&width=600",
      category: "SaaS",
      services: ["SEO", "PPC", "Content Marketing"],
      results: [
        { metric: "Lead Generation", value: "+300%" },
        { metric: "Organic Traffic", value: "+250%" },
        { metric: "Conversion Rate", value: "+85%" },
      ],
      link: "#",
    },
    {
      title: "E-commerce Revenue Boost",
      description:
        "Multi-channel marketing strategy for an online retailer, driving significant revenue growth and customer acquisition.",
      image: "/placeholder.svg?height=400&width=600",
      category: "E-commerce",
      services: ["Social Media", "Email Marketing", "PPC"],
      results: [
        { metric: "Revenue Growth", value: "+180%" },
        { metric: "ROAS", value: "4.2x" },
        { metric: "Customer Acquisition", value: "+220%" },
      ],
      link: "#",
    },
    {
      title: "Local Service Business",
      description:
        "Local SEO and digital presence optimization for a professional services firm, dominating local search results.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Local Business",
      services: ["Local SEO", "Google Ads", "Social Media"],
      results: [
        { metric: "Local Rankings", value: "#1 Position" },
        { metric: "Phone Calls", value: "+400%" },
        { metric: "New Clients", value: "+150%" },
      ],
      link: "#",
    },
    {
      title: "Healthcare Practice Growth",
      description:
        "Comprehensive digital marketing for a medical practice, focusing on patient acquisition and online reputation.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Healthcare",
      services: ["SEO", "Content Marketing", "Reputation Management"],
      results: [
        { metric: "New Patients", value: "+275%" },
        { metric: "Online Reviews", value: "4.9★ Rating" },
        { metric: "Website Traffic", value: "+320%" },
      ],
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Success Stories & Results
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real businesses, real growth. See how I've helped companies across different industries achieve their
                marketing goals and drive measurable results.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">Start Your Success Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-blue-600 border-blue-200">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 font-medium">{result.metric}</span>
                        <span className="text-blue-600 font-bold text-lg">{result.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Link href={project.link}>
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Proven Track Record</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Numbers that speak for themselves. Here's what I've achieved for my clients.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">250%</h3>
              <p className="text-gray-600">Average Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">4.2x</h3>
              <p className="text-gray-600">Average ROAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Join These Success Stories?
            </h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
              Let's discuss how I can help you achieve similar results for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                Get Your Free Strategy Session
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
