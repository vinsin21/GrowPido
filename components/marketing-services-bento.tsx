import { Search, Share2, Mail, Target, TrendingUp } from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const services = [
  {
    Icon: Search,
    name: "SEO & Content Strategy",
    description:
      "Boost your organic visibility and engage your audience with high-quality, keyword-rich content that ranks and converts.",
    href: "/services",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-60">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200 opacity-30" />
        <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-blue-300 opacity-40" />
        <div className="absolute right-10 top-20 h-16 w-16 rounded-full bg-blue-400 opacity-20" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Share2,
    name: "Social Media Management",
    description: "Build a strong online presence and connect with your customers on all relevant platforms.",
    href: "/services",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-60">
        <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-green-200 opacity-30" />
        <div className="absolute -left-5 -bottom-5 h-16 w-16 rounded-full bg-green-300 opacity-40" />
        <div className="absolute left-10 bottom-20 h-12 w-12 rounded-full bg-green-400 opacity-20" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Target,
    name: "Paid Advertising (PPC)",
    description: "Maximize your ROI with targeted ad campaigns on Google, Meta, and other key platforms.",
    href: "/services",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-60">
        <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-purple-200 opacity-30" />
        <div className="absolute -right-3 -bottom-3 h-14 w-14 rounded-full bg-purple-300 opacity-40" />
        <div className="absolute right-8 bottom-16 h-10 w-10 rounded-full bg-purple-400 opacity-20" />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Mail,
    name: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized and automated email campaigns.",
    href: "/services",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-60">
        <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-orange-200 opacity-30" />
        <div className="absolute -left-2 -top-2 h-12 w-12 rounded-full bg-orange-300 opacity-40" />
        <div className="absolute left-8 top-12 h-8 w-8 rounded-full bg-orange-400 opacity-20" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: TrendingUp,
    name: "Marketing Analytics",
    description:
      "Get deep insights into your performance, track progress, and make data-driven decisions with comprehensive reports.",
    href: "/services",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-60">
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-200 opacity-30" />
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-300 opacity-40" />
        <div className="absolute right-12 top-24 h-18 w-18 rounded-full bg-indigo-400 opacity-20" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

function MarketingServicesBento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {services.map((service) => (
        <BentoCard key={service.name} {...service} />
      ))}
    </BentoGrid>
  )
}

export { MarketingServicesBento }
