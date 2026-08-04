import React from 'react'
import { X, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import { WorldCard } from '../types'

interface WorldDetailModalProps {
  card: WorldCard | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const WorldDetailModal: React.FC<WorldDetailModalProps> = ({ card, onClose, onOpenBooking }) => {
  if (!card) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Container */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#141211] border border-white/20 text-white overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-black/40 to-black/20" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6">
            <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {card.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-medium text-white mt-1">
              {card.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed">
            {card.detailedText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Pillar</span>
              </div>
              <p className="text-xs text-stone-400 font-light">
                Direct energetic realignments targeting the root source of tension.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-300">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Results</span>
              </div>
              <p className="text-xs text-stone-400 font-light">
                Trusted by thousands of clients, doctors, and spiritual seekers.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-medium text-stone-400 hover:text-white transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose()
                onOpenBooking()
              }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#5a121d] hover:bg-[#781c29] text-white text-xs font-semibold tracking-wide border border-[#8b2332] shadow-lg transition-all"
            >
              <span>Experience A Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
