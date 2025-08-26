"use client";

import { motion, AnimatePresence, useCycle, useInView } from "framer-motion"; // ✅ 1. Import useInView
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Sparkles, CheckCircle, Users, Search, FileText, Megaphone, ArrowRight, ChevronDown } from "lucide-react";
import { MarketingServicesBento } from "@/components/marketing-services-bento";
import { TestimonialsGridMotion } from "@/components/testimonials-grid-motion";
import { useEffect, useRef } from "react"; // ✅ 2. Import useRef

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const desktopFloatingCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
    },
  }),
};

const statusTexts = ["SEO Audit in Progress...", "New Campaign Ideas!", "Client Results: +25% ROI"];

const statusTextVariants = {
  enter: { opacity: 0, y: -10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const mobileServicesNew = [
  { name: "SEO & Content", icon: <Search className="h-6 w-6 text-blue-600" /> },
  { name: "Social Media", icon: <Users className="h-6 w-6 text-green-600" /> },
  { name: "Paid Advertising", icon: <Megaphone className="h-6 w-6 text-red-600" /> },
];

function MobileStatusBar() {
  const [index, cycleIndex] = useCycle(0, 1, 2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleIndex();
    }, 2500);
    return () => clearInterval(intervalId);
  }, [cycleIndex]);

  return (
    <motion.div
      className="w-full max-w-xs mx-auto p-3 bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-xl shadow-lg flex items-center justify-between gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0" />
      <div className="relative w-full h-5 text-center overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.p
            key={index}
            className="absolute w-full text-sm font-semibold text-gray-700"
            variants={statusTextVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {statusTexts[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
    </motion.div>
  );
}

export default function MarketingLandingPage() {

  // ✅ 3. Set up the ref and hook to watch the pricing section
  const pricingSectionRef = useRef(null);
  const isPricingSectionInView = useInView(pricingSectionRef, { once: true, amount: 0.2 });

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50">
      <main className="flex-1 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle, #e0e0e0 1px, transparent 1px)`,
            backgroundSize: `20px 20px`,
            opacity: 0.5,
          }}
        />

        {/* --- HERO SECTION (Desktop) --- */}
        <section className="hidden md:block relative w-full py-20 md:py-32 lg:py-40 xl:py-28 z-10 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex items-start justify-center text-center">
              <motion.div
                className="flex flex-col items-center justify-center space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                <motion.div variants={contentVariants} className="hidden md:block">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center gap-1 p-2 bg-white rounded-xl shadow-md">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sparkles className="h-6 w-6 text-blue-500" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                <motion.h1 variants={contentVariants} className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl/none text-gray-900 max-w-5xl leading-tight">
                  Amplify Your Brand. <br className="hidden sm:block" />
                  <span className="text-gray-500">Drive Real Results.</span>
                </motion.h1>
                <motion.p variants={contentVariants} className="max-w-[700px] text-gray-600 md:text-xl lg:text-lg xl:text-xl hidden md:block">
                  Your dedicated marketing partner for impactful strategies and measurable growth. I help solo entrepreneurs and small businesses craft compelling digital marketing strategies, from SEO and content to social media and paid ads, ensuring your message reaches the right audience.
                </motion.p>
                <motion.div variants={contentVariants} className="pt-2">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300 transform-gpu">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">Book a Free Consultation</Link>
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute top-[5%] left-[5%] md:left-[10%] lg:left-[15%] bg-yellow-200 p-4 rounded-md shadow-lg rotate-3 hidden md:block max-w-[200px] text-left text-sm text-gray-800"
            custom={{ delay: 0.5 }} variants={desktopFloatingCardVariants} initial="hidden" animate="visible"
            whileHover={{ y: -10, scale: 1.05, rotate: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }} >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
              <p>Brainstorming new campaign ideas for Q3 launch.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute top-[15%] left-[13%] md:left-[18%] lg:left-[23%] bg-white p-3 rounded-xl shadow-md -rotate-6 hidden md:flex items-center justify-center"
            custom={{ delay: 0.9 }} variants={desktopFloatingCardVariants} initial="hidden" animate="visible"
            whileHover={{ y: -10, scale: 1.1, rotate: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }} >
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute top-[5%] right-[5%] md:right-[10%] lg:right-[12%] bg-white p-4 rounded-xl shadow-lg rotate-6 hidden md:block max-w-[250px] text-left"
            custom={{ delay: 0.6 }} variants={desktopFloatingCardVariants} initial="hidden" animate="visible"
            whileHover={{ y: -10, scale: 1.05, rotate: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }} >
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="font-semibold text-gray-800 mb-2">Upcoming</div>
              <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-gray-600" />
                <div><p className="font-medium text-gray-800">Client Strategy Call</p><p className="text-sm text-gray-500">Discuss Q2 performance</p></div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                <Mail className="h-6 w-6 text-gray-600" />
                <div><p className="font-medium text-gray-800">Content Review</p><p className="text-sm text-blue-500">Blog post draft for approval</p></div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-[2%] left-[5%] md:left-[10%] lg:left-[8%] bg-white p-4 rounded-xl shadow-lg -rotate-3 hidden md:block max-w-[300px] text-left"
            custom={{ delay: 0.8 }} variants={desktopFloatingCardVariants} initial="hidden" animate="visible"
            whileHover={{ y: -10, scale: 1.05, rotate: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }} >
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
              <div className="font-semibold text-gray-800 mb-3">Today&apos;s Marketing Tasks</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div className="flex-1"><p className="text-gray-800">SEO Audit for Client X</p><div className="h-1.5 bg-gray-200 rounded-full mt-1"><div className="h-full bg-blue-500 rounded-full w-[75%]" /></div><p className="text-xs text-gray-500 mt-1">Due: Today</p></div>
                  <div className="flex -space-x-2 overflow-hidden"><Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Avatar" className="inline-block h-6 w-6 rounded-full ring-2 ring-white" /></div>
                  <span className="text-xs text-gray-500">75%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div className="flex-1"><p className="text-gray-800">Schedule Social Media Posts</p><div className="h-1.5 bg-gray-200 rounded-full mt-1"><div className="h-full bg-blue-500 rounded-full w-[90%]" /></div><p className="text-xs text-gray-500 mt-1">Due: Tomorrow</p></div>
                  <div className="flex -space-x-2 overflow-hidden"><Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Avatar" className="inline-block h-6 w-6 rounded-full ring-2 ring-white" /></div>
                  <span className="text-xs text-gray-500">90%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-[5%] right-[5%] md:right-[10%] lg:right-[15%] bg-white p-4 rounded-xl shadow-lg rotate-3 hidden md:block max-w-[250px] text-left"
            custom={{ delay: 0.7 }} variants={desktopFloatingCardVariants} initial="hidden" animate="visible"
            whileHover={{ y: -10, scale: 1.05, rotate: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }} >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <div className="font-semibold text-gray-800 mb-3">Key Integrations</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center"><Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Google Analytics" className="w-12 h-12 object-contain" /></div>
                <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center"><Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Mailchimp" className="w-12 h-12 object-contain" /></div>
                <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center"><Image src="/placeholder.svg?height=48&width=48" width={48} height={48} alt="Facebook Ads" className="w-12 h-12 object-contain" /></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- HERO SECTION (Mobile) --- */}
        <section className="md:hidden relative w-full py-16 z-10 overflow-hidden">
          {/* Background decorative elements - Square shapes with animations, themed and positioned for mobile */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-[10%] left-[60%] w-24 h-24 bg-blue-200 rounded-lg opacity-30 rotate-12 animate-pulse [animation-delay:0s]"></div>
            <div className="absolute top-[20%] left-[80%] w-16 h-16 bg-blue-300 rounded-lg opacity-40 rotate-45 animate-bounce [animation-delay:1s]"></div>
            <div className="absolute top-[30%] left-[50%] w-28 h-28 bg-blue-100 rounded-lg opacity-20 -rotate-12 animate-pulse [animation-delay:2s]"></div>
            <div className="absolute top-[50%] left-[70%] w-20 h-20 bg-blue-200 rounded-lg opacity-30 rotate-30 animate-bounce [animation-delay:0.5s]"></div>
            {/* <div className="absolute top-[65%] left-[40%] w-12 h-12 bg-blue-300 rounded-lg opacity-30 -rotate-45 animate-pulse [animation-delay:2.5s]"></div> */}
          </div>

          <div className="container px-4">
            <div className="grid grid-cols-1 gap-12 items-center">
              <motion.div
                className="flex flex-col items-start text-left space-y-8"
                initial="hidden" animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }} >
                <div className="w-full">
                  <MobileStatusBar />
                </div>
                <motion.h1 variants={contentVariants} className="text-5xl font-bold text-gray-900 leading-tight">
                  I help brands <span className="italic font-light text-blue-600">grow</span>
                  <br />
                  through strategic
                  <br />
                  marketing.
                </motion.h1>
                <motion.p variants={contentVariants} className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  I craft data-driven strategies that generate leads, increase conversions, and build lasting customer relationships.
                </motion.p>
                <motion.div variants={contentVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base transition-transform hover:scale-105">
                    <Link href="/contact">
                      Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-100 bg-transparent px-8 py-3 rounded-lg text-base transition-transform hover:scale-105">
                    <Link href="/portfolio">
                      See My Work <ChevronDown className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              {/* <motion.div
                className="relative h-80 w-full max-w-sm mx-auto"
                initial="hidden" animate="visible" variants={contentVariants} >
                <Card className="absolute top-0 left-0 w-64 shadow-lg transform -rotate-6 transition-all duration-300 hover:rotate-0 hover:scale-105">
                  <div className="p-4 flex items-center gap-3">
                    {mobileServicesNew[0].icon}
                    <span className="font-semibold text-gray-800">{mobileServicesNew[0].name}</span>
                  </div>
                </Card>
                <Card className="absolute top-24 right-0 w-64 shadow-lg transform rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105">
                  <div className="p-4 flex items-center gap-3">
                    {mobileServicesNew[1].icon}
                    <span className="font-semibold text-gray-800">{mobileServicesNew[1].name}</span>
                  </div>
                </Card>
                <Card className="absolute bottom-0 left-4 w-72 shadow-lg transform -rotate-2 transition-all duration-300 hover:rotate-0 hover:scale-105">
                  <div className="p-4 flex items-center gap-3">
                    {mobileServicesNew[2].icon}
                    <span className="font-semibold text-gray-800">{mobileServicesNew[2].name}</span>
                  </div>
                </Card>
              </motion.div> */}
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  A Bespoke Suite of Services for Visionary Leaders
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our methodology is built on a single belief: your influence is your most valuable asset. We offer a holistic suite of services designed to amplify it with precision and purpose.
                </p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <MarketingServicesBento />
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section id="testimonials" className="w-full">
          <TestimonialsGridMotion />
        </section>

        {/* --- PRICING SECTION (ANIMATION FIXED) --- */}
        {/* --- PRICING SECTION (FIXED) --- */}
        <section
          id="pricing"
          ref={pricingSectionRef} // ✅ Add the ref here
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPricingSectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  How We Partner With You
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isPricingSectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Tailored engagements designed to build, amplify, and solidify your legacy.
                </motion.p>
              </div>
            </div>

            <motion.div
              className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={isPricingSectionInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {[
                {
                  title: "The Foundation",
                  description: "For the emerging leader ready to establish a powerful and authentic digital presence.",
                  features: ["Basic SEO Audit", "Social Media Profile Setup", "1-Hour Strategy Call", "Monthly Performance Report"],
                  buttonVariant: "outline",
                  isFeatured: false,
                  price: "$999/mo",
                },
                {
                  title: "The Amplifier",
                  description: "For the established executive aiming to scale their influence and dominate their niche.",
                  features: ["Comprehensive SEO Strategy", "Content Calendar & Creation", "Active Social Media Management", "PPC Campaign Setup & Optimization", "Bi-Weekly Performance Calls"],
                  buttonVariant: "default",
                  isFeatured: true,
                  price: "$2,499/mo",
                },
                {
                  title: "The Legacy Partnership",
                  description: "A bespoke, all-inclusive engagement for leaders requiring a comprehensive and deeply integrated branding strategy.",
                  features: ["Full-Service Marketing", "Dedicated Strategy & Execution", "Advanced Analytics & Reporting", "Ongoing Support & Optimization", "Priority Access & Consultations"],
                  buttonVariant: "outline",
                  price: "Custom Built",
                  isFeatured: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPricingSectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <Card className={`flex flex-col h-full w-full transition-all duration-300 ease-in-out ${plan.isFeatured ? 'border-2 border-blue-600 shadow-lg' : 'shadow-md'} hover:shadow-xl hover:-translate-y-2`}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-gray-800">{plan.title}</CardTitle>
                      <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col items-center justify-center">
                      {plan.price && (
                        <div className="text-4xl font-bold mb-4 text-gray-900">
                          {plan.price}
                          {!plan.price.includes("Custom") && <span className="text-lg text-gray-500">/mo</span>}
                        </div>
                      )}
                      <ul className="space-y-2 text-left text-gray-700 mt-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-center p-6">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild
                          className={`${plan.buttonVariant === 'outline' ? 'border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        >
                          <Link href="/contact" className="flex items-center justify-center">
                            Book a Discovery Call
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CONTACT CTA SECTION --- */}
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
    </div>
  );
}