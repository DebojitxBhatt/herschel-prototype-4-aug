import React from 'react'
import { FOOTER_CONTENT } from '../data/content'

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigateSection }) => {
  return (
    <footer id="contact" className="bg-[#ffffff] text-[#1c1917] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Contact & Location Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-base sm:text-lg font-medium text-stone-900 leading-snug">
              {FOOTER_CONTENT.address}
            </h3>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-1 text-sm font-semibold text-stone-800 hover:text-amber-800 transition-colors group cursor-pointer"
              >
                <span>{FOOTER_CONTENT.scheduleLinkText}</span>
              </button>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${FOOTER_CONTENT.email}`}
                className="text-xs sm:text-sm text-stone-500 hover:text-stone-900 transition-colors font-light"
              >
                {FOOTER_CONTENT.email}
              </a>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
            
            {/* Column 1: Navigation */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold tracking-wider uppercase text-stone-400">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
                {FOOTER_CONTENT.navigation.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => onNavigateSection(item.href.replace('#', ''))}
                      className="hover:text-stone-950 transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Shop */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold tracking-wider uppercase text-stone-400">
                Shop
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
                {FOOTER_CONTENT.shop.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={onOpenBooking}
                      className="hover:text-stone-950 transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold tracking-wider uppercase text-stone-400">
                Social
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
                {FOOTER_CONTENT.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-stone-950 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-light space-y-4 sm:space-y-0">
          <div>
            {FOOTER_CONTENT.copyright}
          </div>
          <div className="flex items-center space-x-6">
            <a href="#terms" className="hover:text-stone-600 transition-colors">
              {FOOTER_CONTENT.termsLink}
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
