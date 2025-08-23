"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

interface TestimonialsGridMotionProps {
  className?: string
}

// Updated dynamic taglines with the new copy
const dynamicTaglines = [
  "Our results are measured by the success of our clients.",
  "Hear from founders and executives who have transformed their influence.",
  "Discover the real-world impact of a powerful personal brand.",
];

const textVariants = {
  enter: { y: 20, opacity: 0 },
  center: { zIndex: 1, y: 0, opacity: 1 },
  exit: { zIndex: 0, y: -20, opacity: 0 },
};

export function TestimonialsGridMotion({ className }: TestimonialsGridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % dynamicTaglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // --- Updated Testimonial Data ---
  const testimonialItems = [
    // ROW 1
    // Testimonial from Hemal Dua (Metrics-focused)
    <div key="testimonial-hemal" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"In just 3 months I hit <strong>64,000+ impressions</strong> and began getting <strong>inbound leads</strong> directly on LinkedIn. Nidhi is strategic and execution-focused."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Hemal Dua" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Hemal Dua</p><p className="text-xs text-gray-500">Fractional COO</p></div>
      </div>
    </div>,
    <div key="stat-1" className="bg-blue-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">64k+</div><div className="text-xs text-center">Impressions in 3 Months</div></div>,
    <div key="quote-1" className="bg-blue-50 p-4 rounded-lg h-full flex items-center justify-center"><Quote className="h-8 w-8 text-blue-600" /></div>,
    // Testimonial from Deepak Kr. Kaushik (Transformation-focused)
    <div key="testimonial-deepak" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"Within weeks, I started connecting with <strong>decision-makers</strong>, gaining credibility, and opening doors for new opportunities."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Deepak Kr. Kaushik" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Deepak Kr. Kaushik</p><p className="text-xs text-gray-500">Founder & CEO, Nyka International</p></div>
      </div>
    </div>,
    <div key="stat-2" className="bg-green-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">50+</div><div className="text-xs text-center">Happy Clients</div></div>,
    <div key="brand-1" className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center"><div className="text-lg font-bold text-gray-600">Growpido</div></div>,
    // Testimonial from Haripriya Tunga (Expertise-focused)
    <div key="testimonial-haripriya" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"She's knowledgeable, incredibly supportive and always willing to go the extra mile. I highly recommend working with Nidhi who can truly <strong>deliver results</strong>."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Haripriya Tunga" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Haripriya Tunga</p><p className="text-xs text-gray-500">Founder, Elixir Posture</p></div>
      </div>
    </div>,

    // ROW 2
    <div key="stat-3" className="bg-purple-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">Top Voice</div><div className="text-xs text-center">LinkedIn Certified</div></div>,
    // Testimonial from Ananya Sinha
    <div key="testimonial-ananya" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"When it comes to building an amazing profile over Linkedin, Nidhi is the one for sure. She is full of positive energy and gives it all when it comes to work."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Ananya Sinha" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Ananya Sinha</p><p className="text-xs text-gray-500">Marketing Strategist</p></div>
      </div>
    </div>,
    <div key="quote-2" className="bg-green-50 p-4 rounded-lg h-full flex items-center justify-center"><Quote className="h-8 w-8 text-green-600" /></div>,
    <div key="brand-2" className="bg-blue-100 p-4 rounded-lg h-full flex items-center justify-center"><div className="text-xs font-bold text-blue-600">Legacy</div></div>,
    // Testimonial from Kunal Patel
    <div key="testimonial-kunal" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"She took all necessary information from me and within few days she impressed me with her work. Now my profile is way better than what I have previously."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Kunal Patel" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Kunal Patel</p><p className="text-xs text-gray-500">CEO & CTO</p></div>
      </div>
    </div>,
    <div key="stat-4" className="bg-orange-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">8+</div><div className="text-xs text-center">Years Experience</div></div>,
    <div key="quote-3" className="bg-purple-50 p-4 rounded-lg h-full flex items-center justify-center"><Quote className="h-8 w-8 text-purple-600" /></div>,

    // ... The rest of the rows can contain the other testimonials or be filled with the same ones to ensure the loop is seamless.
    // For brevity, I'll repeat the first row's content here.
    <div key="testimonial-hemal-copy" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"In just 3 months I hit <strong>64,000+ impressions</strong> and began getting <strong>inbound leads</strong> directly on LinkedIn. Nidhi is strategic and execution-focused."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Hemal Dua" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Hemal Dua</p><p className="text-xs text-gray-500">Fractional COO</p></div>
      </div>
    </div>,
    <div key="brand-3" className="bg-gray-200 p-4 rounded-lg h-full flex items-center justify-center"><div className="text-xs font-bold text-gray-700">Success</div></div>,
    <div key="stat-5" className="bg-indigo-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">24/7</div><div className="text-xs text-center">Support</div></div>,
    <div key="testimonial-deepak-copy" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"Within weeks, I started connecting with <strong>decision-makers</strong>, gaining credibility, and opening doors for new opportunities."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Deepak Kr. Kaushik" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Deepak Kr. Kaushik</p><p className="text-xs text-gray-500">Founder & CEO, Nyka International</p></div>
      </div>
    </div>,
    <div key="quote-4" className="bg-orange-50 p-4 rounded-lg h-full flex items-center justify-center"><Quote className="h-8 w-8 text-orange-600" /></div>,
    <div key="brand-4" className="bg-green-100 p-4 rounded-lg h-full flex items-center justify-center"><div className="text-xs font-bold text-green-600">Growth</div></div>,
    <div key="stat-6" className="bg-red-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">100%</div><div className="text-xs text-center">Satisfaction</div></div>,
    <div key="brand-5" className="bg-blue-200 p-4 rounded-lg h-full flex items-center justify-center"><div className="text-xs font-bold text-blue-700">Results</div></div>,
    <div key="testimonial-haripriya-copy" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"She's knowledgeable, incredibly supportive and always willing to go the extra mile. I highly recommend working with Nidhi who can truly <strong>deliver results</strong>."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Haripriya Tunga" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Haripriya Tunga</p><p className="text-xs text-gray-500">Founder, Elixir Posture</p></div>
      </div>
    </div>,
    <div key="quote-5" className="bg-indigo-50 p-4 rounded-lg h-full flex items-center justify-center"><Quote className="h-8 w-8 text-indigo-600" /></div>,
    <div key="stat-7" className="bg-teal-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"><div className="text-2xl font-bold">$2M+</div><div className="text-xs text-center">Client Revenue</div></div>,
    <div key="brand-6" className="bg-purple-100 p-4 rounded-lg h-full flex items-center justify-center"><div className="text-xs font-bold text-purple-700">Impact</div></div>,
    <div key="testimonial-ananya-copy" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />))}</div>
      <p className="text-xs text-gray-700 italic mb-2">"When it comes to building an amazing profile over Linkedin, Nidhi is the one for sure. She is full of positive energy and gives it all when it comes to work."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Ananya Sinha" className="rounded-full" />
        <div><p className="text-xs font-semibold text-gray-800">Ananya Sinha</p><p className="text-xs text-gray-500">Marketing Strategist</p></div>
      </div>
    </div>,
    <div key="quote-6" className="bg-red-50 p-4 rounded-lg h-full flex items-center justify-center"><Quote className="h-8 w-8 text-red-600" /></div>,
  ]

  useEffect(() => {
    rowRefs.current.forEach((row, index) => {
      if (row) {
        const direction = index % 2 === 0 ? -1 : 1;
        const duration = 40 + Math.random() * 20;
        gsap.fromTo(row, { xPercent: 10 * direction }, { xPercent: -10 * direction, duration: duration, ease: "none", repeat: -1 });
      }
    });
    return () => {
      gsap.killTweensOf(rowRefs.current);
    };
  }, []);

  return (
    <div className={cn("h-full w-full overflow-hidden relative", className)} ref={gridRef}>
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl mx-4">
            {/* Updated Headline */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by the Leaders Who Define Industries</h2>

            <div className="relative h-16 mb-6 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  className="text-lg text-gray-600 absolute"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {dynamicTaglines[taglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">5.0 Average Rating</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-none grid h-[150vh] w-[200vw] gap-3 grid-rows-[repeat(4,1fr)] grid-cols-[100%] -rotate-15 origin-center opacity-60">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-3 grid-cols-[repeat(14,1fr)] will-change-transform"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(14)].map((_, itemIndex) => {
                const content = testimonialItems[rowIndex * 7 + (itemIndex % 7)];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative h-full w-full overflow-hidden rounded-lg min-h-[120px]">{content}</div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}