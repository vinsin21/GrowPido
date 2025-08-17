import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Share2, Mail, Target, CheckCircle, ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Content Strategy",
      description: "Boost your organic visibility and engage your audience with high-quality, keyword-rich content.",
      features: [
        "Comprehensive SEO audits",
        "Keyword research and strategy",
        "Content creation and optimization",
        "Technical SEO improvements",
        "Local SEO optimization",
        "Monthly performance reports",
      ],
      price: "Starting at $799/month",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Build a strong online presence and connect with your customers on all relevant platforms.",
      features: [
        "Social media strategy development",
        "Content creation and scheduling",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Analytics and reporting",
      ],
      price: "Starting at $599/month",
    },
    {
      icon: Target,
      title: "Paid Advertising (PPC)",
      description: "Maximize your ROI with targeted ad campaigns on Google, Meta, and other key platforms.",
      features: [
        "Campaign strategy and setup",
        "Keyword research and bidding",
        "Ad copy creation and testing",
        "Landing page optimization",
        "Conversion tracking setup",
        "Performance optimization",
      ],
      price: "Starting at $899/month",
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description: "Nurture leads and drive conversions with personalized and automated email campaigns.",
      features: [
        "Email automation setup",
        "List segmentation and targeting",
        "Template design and copywriting",
        "A/B testing and optimization",
        "Performance tracking",
        "Integration with CRM systems",
      ],
      price: "Starting at $499/month",
    },
  ]

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
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-gray-900 max-w-4xl leading-tight">
                Marketing Services That <br />
                <span className="text-gray-500">Drive Real Results.</span>
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl lg:text-lg xl:text-xl">
                Comprehensive digital marketing solutions tailored to your business goals. From SEO and content strategy
                to paid advertising and social media management, I help you reach your target audience and accelerate
                growth.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href="/contact">Get a Free Strategy Session</Link>
              </Button>
            </div>
          </div>

          {/* Floating UI Elements (Services-themed) */}
          {/* SEO Performance Chart */}
          <div className="absolute top-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-white p-4 rounded-xl shadow-lg rotate-3 hidden md:block max-w-[220px] text-left">
            <div className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-green-500" />
              SEO Performance
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Organic Traffic</span>
                <span className="text-sm font-semibold text-green-600">+127%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-green-500 rounded-full w-[85%]" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Keyword Rankings</span>
                <span className="text-sm font-semibold text-blue-600">+89%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-500 rounded-full w-[70%]" />
              </div>
            </div>
          </div>

          {/* Success Checkmark */}
          <div className="absolute top-[15%] left-[13%] md:left-[18%] lg:left-[23%] bg-white p-3 rounded-xl shadow-md -rotate-6 hidden md:flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>

          {/* Campaign Results Dashboard */}
          <div className="absolute top-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-6 hidden md:block max-w-[250px] text-left">
            <div className="font-semibold text-gray-800 mb-3">Campaign Results</div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 mb-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">PPC Campaign</p>
                <p className="text-sm text-green-500">ROI: 340%</p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Social Media</p>
                <p className="text-sm text-blue-500">Engagement +156%</p>
              </div>
            </div>
          </div>

          {/* Service Checklist */}
          <div className="absolute bottom-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-white p-4 rounded-xl shadow-lg -rotate-3 hidden md:block max-w-[300px] text-left">
            <div className="font-semibold text-gray-800 mb-3">Service Delivery</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">SEO Audit Completed</p>
                  <p className="text-xs text-gray-500 mt-1">Client: TechStart Inc.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">Social Media Strategy</p>
                  <div className="h-1.5 bg-gray-200 rounded-full mt-1">
                    <div className="h-full bg-blue-500 rounded-full w-[60%]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Due: Tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Tools Integration */}
          <div className="absolute bottom-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-3 hidden md:block max-w-[250px] text-left">
            <div className="font-semibold text-gray-800 mb-3">Marketing Stack</div>
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
                  alt="HubSpot"
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

        {/* Services Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-800">{service.title}</CardTitle>
                          <p className="text-blue-600 font-semibold">{service.price}</p>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">My Process</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                A proven methodology that delivers consistent results for my clients.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Discovery & Strategy</h3>
                <p className="text-gray-600">
                  We start with a deep dive into your business, goals, and target audience to create a customized
                  strategy.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation & Launch</h3>
                <p className="text-gray-600">
                  I execute the strategy with precision, setting up campaigns, creating content, and launching
                  initiatives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Optimize & Scale</h3>
                <p className="text-gray-600">
                  Continuous monitoring, testing, and optimization to improve performance and scale successful
                  campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Grow Your Business?
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
                Let's discuss your marketing goals and create a strategy that delivers real results.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">
                  Start Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterTapedDesign />
    </div>
  )
}
