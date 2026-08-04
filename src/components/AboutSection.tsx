import React, { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ABOUT_CONTENT } from '../data/content'

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [showFullBio, setShowFullBio] = useState(false)

  return (
    <section id="about" className="relative bg-[#ffffff] text-[#1c1917] py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Decorative ambient subtle background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="absolute -left-20 top-1/2 w-72 h-72 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 w-80 h-80 rounded-full bg-rose-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          
          {/* Top Left Floating Photo: Herschel in Crowd */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start lg:-mt-12 order-2 lg:order-1">
            <div className="group relative">
              <div className="w-[190px] sm:w-[220px] rounded-xl overflow-hidden shadow-xl border border-stone-200/80 transform -rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 bg-stone-100">
                <img
                  src={ABOUT_CONTENT.leftPhoto}
                  alt={ABOUT_CONTENT.leftPhotoCaption}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center Main Headline & CTA */}
          <div className="lg:col-span-6 text-center space-y-6 px-2 sm:px-6 order-1 lg:order-2">
            <div className="inline-block">
              <span className="text-[11px] font-bold tracking-[0.25em] text-stone-400 uppercase">
                {ABOUT_CONTENT.tag}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-normal leading-[1.35] tracking-tight text-stone-900 max-w-xl mx-auto font-sans">
              {ABOUT_CONTENT.headline}
            </h2>

            <div>
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-950 transition-colors group cursor-pointer"
              >
                <span>{showFullBio ? 'Read Less' : ABOUT_CONTENT.ctaText}</span>
                <ArrowRight className={`w-3.5 h-3.5 transform transition-transform duration-200 ${showFullBio ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </div>

            {/* Expandable Bio Drawer */}
            {showFullBio && (
              <div className="mt-6 text-left p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 text-sm leading-relaxed space-y-4 shadow-sm animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center space-x-2 text-amber-700 font-semibold text-xs tracking-wider uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>The Legacy & Methodology</span>
                </div>
                <div className="whitespace-pre-line font-light text-stone-600">
                  {ABOUT_CONTENT.fullBio}
                </div>
                <div className="pt-3 flex justify-end">
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2 rounded-full bg-[#5a121d] text-white text-xs font-semibold hover:bg-[#781c29] transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Right Floating Photo: Herschel on Street */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end lg:mt-16 order-3">
            <div className="group relative">
              <div className="w-[190px] sm:w-[220px] rounded-xl overflow-hidden shadow-xl border border-stone-200/80 transform rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 bg-stone-100">
                <img
                  src={ABOUT_CONTENT.rightPhoto}
                  alt={ABOUT_CONTENT.rightPhotoCaption}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
