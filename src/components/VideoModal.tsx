import React, { useState, useEffect } from 'react'
import { X, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoData: {
    title: string;
    subtitle?: string;
    duration?: string;
    image?: string;
    category?: string;
  } | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoData }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(25)

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true)
      setProgress(15)
    }
  }, [isOpen])

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
      }, 400)
    }
    return () => clearInterval(interval)
  }, [isPlaying, isOpen])

  if (!isOpen || !videoData) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Video Modal Container */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#12100f] border border-white/20 text-white overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          
          <img
            src={videoData.image || '/images/hero.png'}
            alt={videoData.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-90' : 'filter brightness-75'}`}
          />

          {/* Glowing Aura Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Playing Animation / Simulation Banner */}
          {isPlaying && (
            <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/80 backdrop-blur-md text-[10px] font-semibold tracking-wider text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>PLAYING DEMONSTRATION</span>
            </div>
          )}

          {/* Center Play/Pause Indicator Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-2xl">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
            </div>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Video Control Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent space-y-2">
            {/* Progress Bar */}
            <div 
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const clickX = e.clientX - rect.left
                setProgress(Math.round((clickX / rect.width) * 100))
              }}
              className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer group/bar"
            >
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full relative"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between text-xs text-stone-300">
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white transition-colors">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white transition-colors">
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] font-mono text-stone-400">
                  {Math.floor((progress * 300) / 6000)}:{(Math.floor((progress * 300) / 100) % 60).toString().padStart(2, '0')} / {videoData.duration || '5:00'}
                </span>
              </div>

              <div className="text-[11px] text-amber-400 font-medium flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Herschel Lazaroff Energy Archive</span>
              </div>
            </div>
          </div>

        </div>

        {/* Video Info Details */}
        <div className="p-6 space-y-3 bg-[#151312]">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {videoData.category || 'Healing Demonstration'}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-serif-heading font-medium text-white">
            {videoData.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            {videoData.subtitle || "A recorded transmission showcasing Herschel's unique energy-based approach to releasing somatic tension, emotional trauma, and physical blockages."}
          </p>
        </div>

      </div>
    </div>
  )
}
