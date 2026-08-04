import React from 'react'
import { Play, Volume2 } from 'lucide-react'
import { HERO_CONTENT } from '../data/content'

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenVideoModal: (video: { title: string; subtitle?: string; duration?: string; image?: string; category?: string }) => void;
  onScrollToVideos: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenVideoModal,
  onScrollToVideos
}) => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden hero-glow">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ba6026]/40 via-[#8b2332]/25 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-amber-600/20 via-rose-950/25 to-transparent blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, CTAs */}
          <div className="lg:col-span-5 space-y-7 text-left z-10">
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight font-medium text-white">
              {HERO_CONTENT.heading}
            </h1>
            
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light max-w-lg">
              {HERO_CONTENT.subheading}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Book A Session Button */}
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-[#0e0b0a] bg-[#f9f6f0] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg"
              >
                {HERO_CONTENT.ctaPrimary}
              </button>

              {/* Watch Videos Button */}
              <button
                onClick={onScrollToVideos}
                className="px-6 py-3 rounded-full text-sm font-medium tracking-wide text-stone-200 hover:text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-all duration-200 cursor-pointer flex items-center space-x-2"
              >
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </button>
            </div>
          </div>

          {/* Center Column: Enlarged Portrait Photo of Herschel */}
          <div className="lg:col-span-4 flex justify-center lg:justify-center relative">
            <div className="relative group">
              {/* Warm Golden Glow backdrop */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-t from-amber-600/35 via-[#ba6026]/20 to-transparent opacity-80 blur-2xl group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Frame / Enlarged Photo container */}
              <div className="relative w-[300px] sm:w-[360px] md:w-[400px] lg:w-[380px] xl:w-[420px] h-[400px] sm:h-[460px] md:h-[500px] lg:h-[490px] xl:h-[530px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#1a1512]">
                <img
                  src={HERO_CONTENT.portraitImage}
                  alt="Herschel Lazaroff - Renowned Healer"
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column / Floating Video Preview Card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div
              onClick={() => onOpenVideoModal({
                title: "Healing Demonstration",
                subtitle: "Full energy transmission & live alignment recording with Herschel Lazaroff.",
                duration: "Watch 5 Mins",
                image: HERO_CONTENT.portraitImage,
                category: "Healing Demonstration"
              })}
              className="group cursor-pointer w-full max-w-[270px] rounded-2xl p-3.5 bg-black/65 backdrop-blur-xl border border-white/15 hover:border-amber-500/50 shadow-2xl hover:shadow-[0_10px_30px_rgba(201,120,62,0.25)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3.5">
                {/* Thumbnail with Play Icon */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-stone-900 border border-white/10">
                  <img
                    src={HERO_CONTENT.portraitImage}
                    alt="Demonstration thumbnail"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="flex-1 min-w-0 pr-1">
                  <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                    Healing Demonstration
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 flex items-center space-x-1.5">
                    <span>Watch 5 Mins</span>
                  </p>
                  <div className="mt-2 flex items-center space-x-1 text-[10px] text-amber-400/90 font-medium">
                    <Volume2 className="w-3 h-3" />
                    <span>Audio & Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
