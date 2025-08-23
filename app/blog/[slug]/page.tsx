import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react"
import { FooterTapedDesign } from "@/components/ui/footer-taped-design"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you'd fetch the post data based on the slug
  const post = {
    title: "The Complete Guide to SEO for Small Businesses in 2024",
    excerpt:
      "Learn the essential SEO strategies that will help your small business rank higher in search results and attract more qualified leads.",
    content: `
      <p>Search Engine Optimization (SEO) remains one of the most effective ways for small businesses to attract new customers online. In 2024, the landscape has evolved significantly, with new algorithms, user behaviors, and technologies shaping how we approach SEO.</p>
      
      <h2>Why SEO Matters More Than Ever for Small Businesses</h2>
      <p>With over 8.5 billion searches happening on Google every day, your potential customers are actively looking for businesses like yours. The question is: will they find you?</p>
      
      <p>Small businesses that invest in SEO see an average increase of 14.6% in conversion rates compared to traditional outbound marketing methods. This makes SEO not just a nice-to-have, but a critical component of your marketing strategy.</p>
      
      <h2>The Foundation: Technical SEO</h2>
      <p>Before diving into content and keywords, ensure your website's technical foundation is solid:</p>
      
      <ul>
        <li><strong>Page Speed:</strong> Your site should load in under 3 seconds. Use tools like Google PageSpeed Insights to identify and fix speed issues.</li>
        <li><strong>Mobile Optimization:</strong> With mobile-first indexing, your site must perform flawlessly on mobile devices.</li>
        <li><strong>SSL Certificate:</strong> Secure sites (HTTPS) are favored by search engines and trusted by users.</li>
        <li><strong>XML Sitemap:</strong> Help search engines understand your site structure with a comprehensive sitemap.</li>
      </ul>
      
      <h2>Keyword Research: The Heart of SEO</h2>
      <p>Effective keyword research goes beyond finding high-volume terms. Focus on:</p>
      
      <ul>
        <li><strong>Long-tail keywords:</strong> These 3-4 word phrases often have less competition and higher conversion rates.</li>
        <li><strong>Local keywords:</strong> Include location-based terms if you serve local customers.</li>
        <li><strong>Intent-based keywords:</strong> Target keywords that match your customers' search intent (informational, navigational, or transactional).</li>
      </ul>
      
      <h2>Content That Ranks and Converts</h2>
      <p>Creating content that both search engines and users love requires balancing optimization with value:</p>
      
      <ul>
        <li>Answer your customers' most common questions</li>
        <li>Create comprehensive, in-depth content that covers topics thoroughly</li>
        <li>Use your target keywords naturally throughout the content</li>
        <li>Include relevant images, videos, and other media to enhance user experience</li>
      </ul>
      
      <h2>Local SEO: Dominating Your Geographic Market</h2>
      <p>For businesses serving local customers, local SEO is crucial:</p>
      
      <ul>
        <li>Claim and optimize your Google My Business listing</li>
        <li>Encourage and respond to customer reviews</li>
        <li>Build local citations (mentions of your business name, address, and phone number)</li>
        <li>Create location-specific content and landing pages</li>
      </ul>
      
      <h2>Measuring Success: Key SEO Metrics</h2>
      <p>Track these essential metrics to measure your SEO success:</p>
      
      <ul>
        <li><strong>Organic Traffic:</strong> The number of visitors coming from search engines</li>
        <li><strong>Keyword Rankings:</strong> Your position in search results for target keywords</li>
        <li><strong>Click-Through Rate (CTR):</strong> The percentage of people who click on your listing</li>
        <li><strong>Conversion Rate:</strong> The percentage of organic visitors who take desired actions</li>
      </ul>
      
      <h2>Common SEO Mistakes to Avoid</h2>
      <p>Avoid these pitfalls that can hurt your SEO efforts:</p>
      
      <ul>
        <li>Keyword stuffing (overusing keywords unnaturally)</li>
        <li>Neglecting mobile optimization</li>
        <li>Ignoring page load speed</li>
        <li>Creating thin, low-quality content</li>
        <li>Buying low-quality backlinks</li>
      </ul>
      
      <h2>The Future of SEO</h2>
      <p>As we move through 2024, keep an eye on these emerging trends:</p>
      
      <ul>
        <li><strong>AI and Machine Learning:</strong> Search engines are getting better at understanding user intent</li>
        <li><strong>Voice Search:</strong> Optimize for conversational, question-based queries</li>
        <li><strong>Core Web Vitals:</strong> User experience metrics are becoming increasingly important</li>
        <li><strong>E-A-T (Expertise, Authoritativeness, Trustworthiness):</strong> Demonstrate your credibility in your field</li>
      </ul>
      
      <h2>Getting Started: Your SEO Action Plan</h2>
      <p>Ready to improve your SEO? Start with these steps:</p>
      
      <ol>
        <li>Conduct a technical SEO audit of your website</li>
        <li>Research and identify your target keywords</li>
        <li>Optimize your existing content for those keywords</li>
        <li>Create a content calendar for regular publishing</li>
        <li>Set up tracking and monitoring tools</li>
        <li>Be patient – SEO results take time, typically 3-6 months</li>
      </ol>
      
      <p>Remember, SEO is a marathon, not a sprint. Consistent effort and patience will yield the best results for your small business.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "SEO",
    date: "March 15, 2024",
    readTime: "12 min read",
    author: {
      name: "Sarah Johnson",
      bio: "Digital Marketing Strategist with 8+ years of experience helping small businesses grow online.",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  }

  const relatedPosts = [
    {
      title: "Local SEO: How to Dominate Your Local Market",
      slug: "local-seo-dominate-market",
      image: "/placeholder.svg?height=200&width=300",
      category: "Local SEO",
    },
    {
      title: "Content Marketing Strategy: From Planning to Execution",
      slug: "content-marketing-strategy-guide",
      image: "/placeholder.svg?height=200&width=300",
      category: "Content Marketing",
    },
    {
      title: "How to Create High-Converting Landing Pages",
      slug: "high-converting-landing-pages",
      image: "/placeholder.svg?height=200&width=300",
      category: "Conversion",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      {/* Back Navigation */}
      <section className="w-full py-6 bg-white border-b">
        <div className="container px-4 md:px-6">
          <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-blue-600 text-white">{post.category}</Badge>
              <div className="flex items-center text-gray-500 text-sm gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-gray-600 text-sm">{post.author.bio}</p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg mb-12">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author.name}</h3>
                    <p className="text-gray-600 mb-4">{post.author.bio}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Link href="/about">Learn More About Sarah</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{relatedPost.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Implement These Strategies?
            </h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
              Let's discuss how I can help you implement these SEO strategies for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                Get Your Free SEO Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}
