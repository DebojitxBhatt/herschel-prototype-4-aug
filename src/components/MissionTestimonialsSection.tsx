import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DOCTOR_TESTIMONIALS } from '../data/content'

export const MissionTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + DOCTOR_TESTIMONIALS.length) % DOCTOR_TESTIMONIALS.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % DOCTOR_TESTIMONIALS.length)
  }

  // Active pair of testimonials
  const firstReview = DOCTOR_TESTIMONIALS[currentIndex]
  const secondReview = DOCTOR_TESTIMONIALS[(currentIndex + 1) % DOCTOR_TESTIMONIALS.length]

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Banner Card */}
        <div className="relative isolate rounded-3xl overflow-hidden p-6 sm:p-10 md:p-12 shadow-2xl min-h-[520px] md:min-h-[560px] flex flex-col justify-between border border-stone-200/80 bg-stone-900">
          
          {/* Photorealistic Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/images/star-of-david.png"
              alt="Natural outdoor background"
              className="w-full h-full object-cover object-[70%_25%] md:object-[75%_25%]"
            />
            {/* Subtle atmospheric tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b63]/75 via-[#0d3b63]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>

          {/* Top Section: TESTIMONIAL Pill & Mission Text */}
          <div className="relative z-10 space-y-4 max-w-[540px] text-left pt-2">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-[11px] font-semibold tracking-wider text-white uppercase shadow-sm">
              TESTIMONIAL
            </div>

            {/* Mission Statement Heading */}
            <h2 className="text-white text-xl sm:text-2xl md:text-[25px] lg:text-[27px] font-light leading-[1.38] tracking-tight drop-shadow-md">
              By removing the blockages that rob people of the happiness they deserve, Herschel makes sad people happy, happy people happier, and awesome people – phenomenal!
            </h2>

          </div>

          {/* Bottom Section: Single Unified White Card with 2 Testimonials & Navigation Chevrons */}
          <div className="relative z-10 mt-8 sm:mt-12 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-9 border border-stone-100">
            
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              
              {/* Left Arrow Button */}
              <button
                onClick={prevSlide}
                className="text-stone-400 hover:text-stone-900 transition-colors p-1.5 cursor-pointer active:scale-90 flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Two-Column Testimonials Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 flex-1 px-2 sm:px-4">
                
                {/* Testimonial 1 */}
                <div 
                  key={`doc-${firstReview.id}-${currentIndex}`}
                  className="flex flex-col justify-between space-y-5 text-left animate-in fade-in duration-300"
                >
                  <p className="text-stone-800 text-sm sm:text-[15px] font-normal leading-relaxed min-h-[50px]">
                    {firstReview.quote}
                  </p>

                  <div className="flex items-center space-x-3 pt-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-stone-100 border border-stone-200 flex-shrink-0">
                      <img
                        src={firstReview.avatar}
                        alt={firstReview.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug">
                        {firstReview.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 font-light">
                        {firstReview.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div 
                  key={`doc-${secondReview.id}-${(currentIndex + 1) % DOCTOR_TESTIMONIALS.length}`}
                  className="hidden md:flex flex-col justify-between space-y-5 text-left animate-in fade-in duration-300 border-l border-stone-100 pl-8 md:pl-10"
                >
                  <p className="text-stone-800 text-sm sm:text-[15px] font-normal leading-relaxed min-h-[50px]">
                    {secondReview.quote}
                  </p>

                  <div className="flex items-center space-x-3 pt-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-stone-100 border border-stone-200 flex-shrink-0">
                      <img
                        src={secondReview.avatar}
                        alt={secondReview.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug">
                        {secondReview.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 font-light">
                        {secondReview.title}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Arrow Button */}
              <button
                onClick={nextSlide}
                className="text-stone-400 hover:text-stone-900 transition-colors p-1.5 cursor-pointer active:scale-90 flex-shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
