import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ExploreWorldSection } from './components/ExploreWorldSection'
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection'
import { MissionTestimonialsSection } from './components/MissionTestimonialsSection'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'
import { VideoModal } from './components/VideoModal'
import { WorldDetailModal } from './components/WorldDetailModal'
import { TestimonialVideo, WorldCard } from './types'

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [videoModalData, setVideoModalData] = useState<{
    title: string;
    subtitle?: string;
    duration?: string;
    image?: string;
    category?: string;
  } | null>(null)
  const [selectedWorldCard, setSelectedWorldCard] = useState<WorldCard | null>(null)

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleOpenVideo = (video: TestimonialVideo | { title: string; subtitle?: string; duration?: string; image?: string; category?: string }) => {
    setVideoModalData(video)
  }

  return (
    <div className="min-h-screen bg-[#0e0b0a] text-[#f9f6f0] selection:bg-amber-500/30 selection:text-white flex flex-col font-sans">
      
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenBooking={() => setBookingOpen(true)}
        onOpenVideoModal={handleOpenVideo}
        onScrollToVideos={() => handleNavigateSection('videos')}
      />

      {/* About Section (Light background with floating photos) */}
      <AboutSection
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Explore Herschel Lazaroff World (Dark cosmic container with stats & cards) */}
      <ExploreWorldSection
        onSelectCard={(card) => setSelectedWorldCard(card)}
      />

      {/* Video Testimonials & Instruction (Horizontal Carousel) */}
      <VideoTestimonialsSection
        onSelectVideo={handleOpenVideo}
      />

      {/* Our Mission / Doctor Testimonials (Star of David Backdrop) */}
      <MissionTestimonialsSection />

      {/* Footer */}
      <Footer
        onOpenBooking={() => setBookingOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <VideoModal
        isOpen={videoModalData !== null}
        onClose={() => setVideoModalData(null)}
        videoData={videoModalData}
      />

      <WorldDetailModal
        card={selectedWorldCard}
        onClose={() => setSelectedWorldCard(null)}
        onOpenBooking={() => setBookingOpen(true)}
      />

    </div>
  )
}

export default App
