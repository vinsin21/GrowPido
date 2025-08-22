"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

interface TestimonialsGridMotionProps {
  className?: string
}

export function TestimonialsGridMotion({ className }: TestimonialsGridMotionProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  // Testimonial data remains the same
  const testimonialItems = [
    // ... (Your testimonialItems array remains unchanged)
    // Row 1
    <div key="testimonial-1" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"ImpactFlow transformed our online presence completely!"</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Alex" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Alex Johnson</p>
          <p className="text-xs text-gray-500">GreenTech Solutions</p>
        </div>
      </div>
    </div>,
    <div
      key="stat-1"
      className="bg-blue-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"
    >
      <div className="text-2xl font-bold">250%</div>
      <div className="text-xs text-center">Average Traffic Increase</div>
    </div>,
    <div key="quote-1" className="bg-blue-50 p-4 rounded-lg h-full flex items-center justify-center">
      <Quote className="h-8 w-8 text-blue-600" />
    </div>,
    <div key="testimonial-2" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Our engagement rates skyrocketed!"</p>
      <div className="flex items-center gap-2">
        <Image src="https://media.licdn.com/dms/image/v2/D5603AQGrHG7vFEkIWQ/profile-displayphoto-scale_100_100/B56ZikwqY8HcAc-/0/1755110877806?e=1758153600&v=beta&t=ojyDRgir9x4pmRW75chtZSAlXNyt3-7p23mqTcM5tbg" width={24} height={24} alt="Ananya Sinha " className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Ananya Sinha </p>
          <p className="text-xs text-gray-500">Artisan Bakehouse</p>
        </div>
      </div>
    </div>,
    <div
      key="stat-2"
      className="bg-green-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"
    >
      <div className="text-2xl font-bold">50+</div>
      <div className="text-xs text-center">Happy Clients</div>
    </div>,
    <div key="brand-1" className="bg-gray-100 p-4 rounded-lg h-full flex items-center justify-center">
      <div className="text-xs font-bold text-gray-600">ImpactFlow</div>
    </div>,
    <div key="testimonial-3" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Incredible ROI from targeted campaigns!"</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Chris" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Chris Lee</p>
          <p className="text-xs text-gray-500">Urban Fitness</p>
        </div>
      </div>
    </div>,

    // Row 2
    <div
      key="stat-3"
      className="bg-purple-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"
    >
      <div className="text-2xl font-bold">300%</div>
      <div className="text-xs text-center">ROI Improvement</div>
    </div>,
    <div key="testimonial-4" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Professional and results-driven approach."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Sarah" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Sarah Chen</p>
          <p className="text-xs text-gray-500">Bloom & Grow</p>
        </div>
      </div>
    </div>,
    <div key="quote-2" className="bg-green-50 p-4 rounded-lg h-full flex items-center justify-center">
      <Quote className="h-8 w-8 text-green-600" />
    </div>,
    <div key="brand-2" className="bg-blue-100 p-4 rounded-lg h-full flex items-center justify-center">
      <div className="text-xs font-bold text-blue-600">Marketing</div>
    </div>,
    <div key="testimonial-5" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Exceeded all our expectations!"</p>
      <div className="flex items-center gap-2">
        <Image
          src="/placeholder.svg?height=24&width=24"
          width={24}
          height={24}
          alt="Michael"
          className="rounded-full"
        />
        <div>
          <p className="text-xs font-semibold text-gray-800">Michael Lee</p>
          <p className="text-xs text-gray-500">Nexus Tech</p>
        </div>
      </div>
    </div>,
    <div
      key="stat-4"
      className="bg-orange-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"
    >
      <div className="text-2xl font-bold">8+</div>
      <div className="text-xs text-center">Years Experience</div>
    </div>,
    <div key="quote-3" className="bg-purple-50 p-4 rounded-lg h-full flex items-center justify-center">
      <Quote className="h-8 w-8 text-purple-600" />
    </div>,

    // Row 3
    <div key="testimonial-6" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Strategic guidance was invaluable."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="David" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">David Kim</p>
          <p className="text-xs text-gray-500">Ascent Ventures</p>
        </div>
      </div>
    </div>,
    <div key="brand-3" className="bg-gray-200 p-4 rounded-lg h-full flex items-center justify-center">
      <div className="text-xs font-bold text-gray-700">Success</div>
    </div>,
    <div
      key="stat-5"
      className="bg-indigo-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"
    >
      <div className="text-2xl font-bold">24/7</div>
      <div className="text-xs text-center">Support</div>
    </div>,
    <div key="testimonial-7" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Transformed our digital strategy completely."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Lisa" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Lisa Wang</p>
          <p className="text-xs text-gray-500">TechStart Inc</p>
        </div>
      </div>
    </div>,
    <div key="quote-4" className="bg-orange-50 p-4 rounded-lg h-full flex items-center justify-center">
      <Quote className="h-8 w-8 text-orange-600" />
    </div>,
    <div key="brand-4" className="bg-green-100 p-4 rounded-lg h-full flex items-center justify-center">
      <div className="text-xs font-bold text-green-600">Growth</div>
    </div>,
    <div key="stat-6" className="bg-red-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center">
      <div className="text-2xl font-bold">100%</div>
      <div className="text-xs text-center">Satisfaction</div>
    </div>,

    // Row 4
    <div key="brand-5" className="bg-blue-200 p-4 rounded-lg h-full flex items-center justify-center">
      <div className="text-xs font-bold text-blue-700">Results</div>
    </div>,
    <div key="testimonial-8" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Outstanding results and communication."</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Tom" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Tom Wilson</p>
          <p className="text-xs text-gray-500">Coastal Realty</p>
        </div>
      </div>
    </div>,
    <div key="quote-5" className="bg-indigo-50 p-4 rounded-lg h-full flex items-center justify-center">
      <Quote className="h-8 w-8 text-indigo-600" />
    </div>,
    <div
      key="stat-7"
      className="bg-teal-600 text-white p-4 rounded-lg h-full flex flex-col justify-center items-center"
    >
      <div className="text-2xl font-bold">$2M+</div>
      <div className="text-xs text-center">Revenue Generated</div>
    </div>,
    <div key="brand-6" className="bg-purple-100 p-4 rounded-lg h-full flex items-center justify-center">
      <div className="text-xs font-bold text-purple-700">Impact</div>
    </div>,
    <div key="testimonial-9" className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs text-gray-700 italic mb-2">"Highly recommend their expertise!"</p>
      <div className="flex items-center gap-2">
        <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Emma" className="rounded-full" />
        <div>
          <p className="text-xs font-semibold text-gray-800">Emma Davis</p>
          <p className="text-xs text-gray-500">Digital Dynamics</p>
        </div>
      </div>
    </div>,
    <div key="quote-6" className="bg-red-50 p-4 rounded-lg h-full flex items-center justify-center">
      <Quote className="h-8 w-8 text-red-600" />
    </div>,
  ]

  // MODIFICATION: Replaced the entire mouse-based animation with a continuous loop
  useEffect(() => {
    // NEW ANIMATION LOGIC
    rowRefs.current.forEach((row, index) => {
      if (row) {
        // Determine direction and set a random-ish duration for variety
        const direction = index % 2 === 0 ? -1 : 1;
        const duration = 40 + Math.random() * 20; // e.g., scroll between 40s and 60s

        // Set the initial position based on direction
        // Animate to the opposite end, creating a seamless loop
        gsap.fromTo(
          row,
          { xPercent: 10 * direction },
          {
            xPercent: -10 * direction,
            duration: duration,
            ease: "none", // Linear ease for constant speed
            repeat: -1, // Repeat indefinitely
          }
        );
      }
    });

    // Cleanup function to kill tweens when the component unmounts
    return () => {
      gsap.killTweensOf(rowRefs.current);
    };
  }, []);

  return (
    <div className={cn("h-full w-full overflow-hidden relative", className)} ref={gridRef}>
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Centered content overlay remains the same */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl mx-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say About My Work</h2>
            <p className="text-lg text-gray-600 mb-6">
              Hear from businesses that have achieved significant growth with ImpactFlow Marketing.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">5.0 Average Rating</span>
            </div>
          </div>
        </div>

        {/* Animated grid background */}
        {/* MODIFICATION: Increased width to w-[200vw] to have space for scrolling */}
        <div className="relative z-10 flex-none grid h-[150vh] w-[200vw] gap-3 grid-rows-[repeat(4,1fr)] grid-cols-[100%] -rotate-15 origin-center opacity-60">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              // MODIFICATION: Double the number of columns to hold duplicated content
              className="grid gap-3 grid-cols-[repeat(14,1fr)] will-change-transform"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {/* MODIFICATION: Map over 14 items instead of 7 to duplicate the content */}
              {[...Array(14)].map((_, itemIndex) => {
                // MODIFICATION: Use modulo to loop through the original 7 items
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