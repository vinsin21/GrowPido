import { Search, Share2, Mail, Target, TrendingUp } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

const services = [
  {
    Icon: Search,
    name: "SEO & Content Strategy",
    description: "Boost your organic visibility and engage your audience.",
    href: "/services",
    cta: "Learn more",
    imgSrc: "https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Share2,
    name: "Social Media Management",
    description: "Build a strong online presence and connect with your customers.",
    href: "/services",
    cta: "Learn more",
    imgSrc: "https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Target,
    name: "Paid Advertising (PPC)",
    description: "Maximize your ROI with targeted ad campaigns.",
    href: "/services",
    cta: "Learn more",
    imgSrc: "https://plus.unsplash.com/premium_photo-1669323926640-680d85157a55?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Mail,
    name: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized campaigns.",
    href: "/services",
    cta: "Learn more",
    imgSrc: "https://plus.unsplash.com/premium_photo-1677093905909-eed68bbe2779?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: TrendingUp,
    name: "Marketing Analytics",
    description: "Make data-driven decisions with comprehensive reports.",
    href: "/services",
    cta: "Learn more",
    imgSrc: "https://plus.unsplash.com/premium_photo-1719839720591-d43eb07de1da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function MarketingServicesBento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {services.map((service) => (
        <BentoCard
          key={service.name}
          {...service}
          background={
            <>
              <Image
                src={service.imgSrc}
                alt={service.name}
                fill
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* THE UPGRADE: A gradient overlay for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </>
          }
        />
      ))}
    </BentoGrid>
  );
}

export { MarketingServicesBento };