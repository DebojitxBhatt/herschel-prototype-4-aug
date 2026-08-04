import React, { useState } from 'react'
import { X, User, Mail, Phone, Sparkles, CheckCircle2, Video, MapPin, PhoneCall } from 'lucide-react'
import confetti from 'canvas-confetti'

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1)
  const [sessionType, setSessionType] = useState<'in-person' | 'zoom' | 'phone'>('in-person')
  const [selectedDate, setSelectedDate] = useState<string>('2024-09-15')
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c9783e', '#e2a35d', '#5a121d', '#ffffff']
      })
    }, 600)
  }

  const resetAndClose = () => {
    setStep(1)
    onClose()
  }

  const times = ['09:30 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM']

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={resetAndClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#141211] border border-white/15 text-stone-100 p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Step 1: Choose Modality & Time */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-medium text-amber-300 mb-2">
                <Sparkles className="w-3 h-3" />
                <span>STEP 1 OF 2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-medium text-white">
                Schedule Your Healing Session
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-light">
                Sessions with Herschel Lazaroff are customized to unlock your energy centers.
              </p>
            </div>

            {/* Session Type Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                Select Modality
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                
                <button
                  type="button"
                  onClick={() => setSessionType('in-person')}
                  className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                    sessionType === 'in-person'
                      ? 'bg-[#5a121d] border-[#8b2332] text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10'
                  }`}
                >
                  <MapPin className="w-4 h-4 mb-1.5" />
                  <span className="text-xs font-medium">In-Person</span>
                  <span className="text-[10px] opacity-70">Monsey, NY</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSessionType('zoom')}
                  className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                    sessionType === 'zoom'
                      ? 'bg-[#5a121d] border-[#8b2332] text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10'
                  }`}
                >
                  <Video className="w-4 h-4 mb-1.5" />
                  <span className="text-xs font-medium">Zoom Video</span>
                  <span className="text-[10px] opacity-70">Worldwide</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSessionType('phone')}
                  className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                    sessionType === 'phone'
                      ? 'bg-[#5a121d] border-[#8b2332] text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10'
                  }`}
                >
                  <PhoneCall className="w-4 h-4 mb-1.5" />
                  <span className="text-xs font-medium">Phone Call</span>
                  <span className="text-[10px] opacity-70">Direct line</span>
                </button>

              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                Available Times (EST)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      selectedTime === t
                        ? 'bg-amber-600/30 border-amber-500 text-amber-200'
                        : 'bg-white/5 border-white/10 text-stone-300 hover:bg-white/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-full bg-[#f9f6f0] hover:bg-white text-stone-900 text-sm font-semibold tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200 cursor-pointer"
            >
              Continue to Details →
            </button>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <form onSubmit={handleCompleteBooking} className="space-y-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-medium text-amber-300 mb-2">
                <Sparkles className="w-3 h-3" />
                <span>STEP 2 OF 2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-medium text-white">
                Your Details
              </h3>
              <p className="text-xs text-stone-400 mt-0.5 font-light">
                {sessionType.toUpperCase()} Session • {selectedTime}
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Area of Focus / Intention (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Physical healing, emotional clearing, career blockage..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-medium transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-2.5 rounded-full bg-[#5a121d] hover:bg-[#781c29] text-white text-xs font-semibold tracking-wide border border-[#8b2332] shadow-lg transition-all"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif-heading font-medium text-white">
                Session Requested!
              </h3>
              <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name || 'Friend'}</span>. Herschel's office will send confirmation and preparation guidance to <span className="text-amber-300">{formData.email || 'your email'}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs text-stone-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-stone-400">Modality:</span>
                <span className="font-medium text-white capitalize">{sessionType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Time:</span>
                <span className="font-medium text-white">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Location:</span>
                <span className="font-medium text-white">{sessionType === 'in-person' ? 'Monsey, NY' : 'Secure Remote Link'}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-2.5 rounded-full bg-[#f9f6f0] hover:bg-white text-stone-900 text-xs font-semibold transition-all"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
