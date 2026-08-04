import React, { useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { STATS_CONTENT, WORLD_CARDS } from '../data/content'
import { WorldCard } from '../types'

interface ExploreWorldSectionProps {
  onSelectCard: (card: WorldCard) => void;
}

export const ExploreWorldSection: React.FC<ExploreWorldSectionProps> = ({ onSelectCard }) => {
  const [activeHover, setActiveHover] = useState<string | null>(null)

  return (
    <section id="explore" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0b0a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Large Rounded Dark Container */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 bg-[#141211] border border-white/10 shadow-2xl">
          
          {/* Cosmic Glow & Light Streaks Background */}
          <div className="absolute inset-0 cosmic-glow-bg pointer-events-none opacity-90" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-600/20 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/20 via-cyan-500/15 to-transparent rotate-12 blur-[90px] pointer-events-none" />

          <div className="relative z-10 space-y-12">
            
            {/* Top Row: Heading on Left & 2x2 Stats Grid on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Title */}
              <div className="lg:col-span-6 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight font-serif-heading">
                  Explore <br />
                  <span className="text-white font-normal">Herschel Lazaroff</span> <br />
                  <span className="text-stone-300">World</span>
                </h2>
                <p className="text-stone-400 text-sm max-w-md pt-2 font-light leading-relaxed">
                  Discover thirty years of holistic energy healing, transformative wisdom, and clinical case studies.
                </p>
              </div>

              {/* Right 2x2 Stats Grid */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                  {STATS_CONTENT.map((stat) => (
                    <div
                      key={stat.id}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-300 backdrop-blur-md"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-stone-200 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-stone-400 font-light mt-0.5">
                        {stat.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom 4 Feature Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-4">
              {WORLD_CARDS.map((card) => {
                const isHovered = activeHover === card.id
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setActiveHover(card.id)}
                    onMouseLeave={() => setActiveHover(null)}
                    onClick={() => onSelectCard(card)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 sm:h-72 border border-white/15 hover:border-amber-400/60 shadow-lg hover:shadow-[0_12px_30px_rgba(201,120,62,0.3)] transition-all duration-500 transform hover:-translate-y-1.5"
                  >
                    {/* Background Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/40 transition-colors" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between items-center z-10 text-center">
                      
                      {/* Top Action Icon / Tag */}
                      <div className="w-full flex items-center justify-end">
                        <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Center Title */}
                      <div className="my-auto px-2">
                        <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                          {card.title}
                        </h3>
                      </div>

                      {/* Bottom Tag */}
                      <div className="w-full">
                        <span className="text-[10px] tracking-wider uppercase font-medium text-stone-300/80 group-hover:text-stone-200">
                          {card.tag}
                        </span>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
