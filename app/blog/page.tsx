import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to SEO for Small Businesses in 2024",
    excerpt:
      "Learn the essential SEO strategies that will help your small business rank higher in search results and attract more qualified leads.",
    image: "/placeholder.svg?height=400&width=800",
    category: "SEO",
    date: "March 15, 2024",
    readTime: "12 min read",
    slug: "complete-guide-seo-small-businesses-2024",
  }

  const blogPosts = [
    {
      title: "5 Social Media Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the curve with these emerging social media trends that smart marketers are already implementing.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Social Media",
      date: "March 12, 2024",
      readTime: "8 min read",
      slug: "social-media-trends-2024",
    },
    {
      title: "How to Create High-Converting Landing Pages",
      excerpt: "The essential elements and psychology behind landing pages that convert visitors into customers.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Conversion",
      date: "March 8, 2024",
      readTime: "10 min read",
      slug: "high-converting-landing-pages",
    },
    {
      title: "Email Marketing Automation: A Beginner's Guide",
      excerpt: "Set up automated email sequences that nurture leads and drive sales while you sleep.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Email Marketing",
      date: "March 5, 2024",
      readTime: "15 min read",
      slug: "email-marketing-automation-guide",
    },
    {
      title: "Google Ads vs. Facebook Ads: Which is Right for Your Business?",
      excerpt: "Compare the two biggest advertising platforms and learn which one will give you the best ROI.",
      image: "/placeholder.svg?height=300&width=400",
      category: "PPC",
      date: "March 1, 2024",
      readTime: "12 min read",
      slug: "google-ads-vs-facebook-ads",
    },
    {
      title: "Content Marketing Strategy: From Planning to Execution",
      excerpt: "Build a content marketing strategy that attracts, engages, and converts your ideal customers.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Content Marketing",
      date: "February 28, 2024",
      readTime: "18 min read",
      slug: "content-marketing-strategy-guide",
    },
    {
      title: "Local SEO: How to Dominate Your Local Market",
      excerpt: "Master local SEO tactics to ensure your business shows up when customers search in your area.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Local SEO",
      date: "February 25, 2024",
      readTime: "14 min read",
      slug: "local-seo-dominate-market",
    },
  ]

  const categories = [
    "All",
    "SEO",
    "Social Media",
    "PPC",
    "Email Marketing",
    "Content Marketing",
    "Local SEO",
    "Conversion",
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Marketing Insights & Strategies
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Actionable marketing tips, industry insights, and proven strategies to help you grow your business and
                stay ahead of the competition.
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 border-gray-300 focus:border-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${category === "All"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                  }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-blue-600 text-white">{featuredPost.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Stay Updated</h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
              Get the latest marketing insights and strategies delivered to your inbox every week.
            </p>
            <div className="w-full max-w-md">
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email address" className="flex-1 bg-white border-white" />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-2">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
