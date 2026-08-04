import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { VIDEO_TESTIMONIALS } from '../data/content'
import { TestimonialVideo } from '../types'

interface VideoTestimonialsSectionProps {
  onSelectVideo: (video: TestimonialVideo) => void;
}

export const VideoTestimonialsSection: React.FC<VideoTestimonialsSectionProps> = ({ onSelectVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  const categories = ['All', 'Spiritual Healing', 'Family & Peace', 'Night Routine', 'Client Review', 'Daily Practice']

  const filteredVideos = selectedCategory === 'All'
    ? VIDEO_TESTIMONIALS
    : VIDEO_TESTIMONIALS.filter(v => v.category === selectedCategory)

  // Update scroll progress bar
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const maxScroll = scrollWidth - clientWidth
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100)
      } else {
        setScrollProgress(0)
      }
    }
  }, [])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
      return () => el.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, filteredVideos])

  // Smooth scroll button
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Mouse Drag to Scroll interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setHasMoved(false)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeftState(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Scroll-multiplier
    if (Math.abs(walk) > 5) {
      setHasMoved(true)
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  const handleCardClick = (video: TestimonialVideo) => {
    if (!hasMoved) {
      onSelectVideo(video)
    }
  }

  return (
    <section id="videos" className="relative bg-[#ffffff] text-[#1c1917] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-semibold tracking-wider text-amber-900 uppercase">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>HEAR THE STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-medium tracking-tight text-stone-900">
            Video Testimonials & Instruction
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            Watch real client transformations, energetic demonstrations, and daily alignment practices with Herschel Lazaroff.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95 ${
                selectedCategory === category
                  ? 'bg-stone-900 text-white shadow-lg shadow-stone-900/20 ring-2 ring-stone-900/10'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Container with Interactive Controls */}
        <div className="relative group/carousel">
          
          {/* Scroll Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-6 top-[40%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-stone-800 flex items-center justify-center shadow-xl hover:bg-white hover:text-black hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Flex Container (Drag-to-scroll enabled) */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex items-stretch gap-6 overflow-x-auto pb-8 pt-3 px-1 scroll-smooth scrollbar-none snap-x snap-mandatory ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleCardClick(video)}
                className="flex-none w-[270px] sm:w-[300px] snap-start group/card cursor-pointer flex flex-col space-y-3.5 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md group-hover/card:shadow-2xl group-hover/card:border-amber-500/50 transition-all duration-500 transform group-hover/card:-translate-y-1.5">
                  
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    draggable={false}
                  />

                  {/* Gradient Overlay for high readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 opacity-70 group-hover/card:opacity-50 transition-opacity" />

                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/90 group-hover/card:bg-white text-stone-900 flex items-center justify-center shadow-2xl group-hover/card:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 fill-stone-900 ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10 shadow-sm">
                    {video.duration}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/95 border border-white/20 shadow-sm">
                    {video.category}
                  </div>

                </div>

                {/* Caption beneath photo */}
                <div className="px-1 space-y-1 text-left">
                  <h4 className="text-sm sm:text-base font-semibold text-stone-900 leading-snug group-hover/card:text-amber-700 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">
                    {video.subtitle}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Scroll Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-6 top-[40%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-stone-200 text-stone-800 flex items-center justify-center shadow-xl hover:bg-white hover:text-black hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Scroll Progress Bar Track */}
        <div className="max-w-xs mx-auto pt-2">
          <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden border border-stone-200/60">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-700 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
          <p className="text-[11px] text-stone-400 text-center mt-2 font-medium tracking-wide">
            Drag or scroll horizontally to explore more teachings
          </p>
        </div>

      </div>
    </section>
  )
}
