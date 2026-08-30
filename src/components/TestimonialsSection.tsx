import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Get 3 consecutive items for the multi-card carousel look
  const total = TESTIMONIALS.length;
  const prevIdx = (currentIndex - 1 + total) % total;
  const activeIdx = currentIndex % total;
  const nextIdx = (currentIndex + 1) % total;

  return (
    <section 
      id="testimonials" 
      className="relative w-full bg-[#050505] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Outer Charcoal Rounded Stage Container */}
      <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] bg-[#232428] text-white py-16 sm:py-20 px-6 sm:px-12 relative overflow-hidden border border-neutral-800 shadow-2xl">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 relative z-10 text-center">
          
          {/* Centered Header with Creative Burst and Sparkle Accents */}
          <div className="relative inline-block mx-auto space-y-4">
            
            {/* Left 4-Point Sparkle Icon */}
            <div className="absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-90 drop-shadow-sm">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
              </svg>
            </div>

            {/* Heading with Top-Right Radiating Burst Marks */}
            <div className="relative inline-block">
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.2]">
                Testimonials that <br />
                Speak to <span className="text-[#ff4500]">My Results</span>
              </h2>

              {/* Top-Right White Radiating Burst Lines */}
              <div className="absolute -top-4 -right-8 sm:-right-10 pointer-events-none">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L2 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M16 14L10 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M26 12L34 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-neutral-400 text-xs sm:text-sm font-normal max-w-lg mx-auto leading-relaxed pt-1">
              Real experiences and client feedback from visionary founders, design directors, and product leaders who scaled their products with our bespoke designs.
            </p>
          </div>

          {/* Testimonial Cards Carousel Stage */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center">
              
              {/* Left Secondary Card (Visible on larger screens) */}
              <div 
                onClick={handlePrev}
                className="hidden md:flex flex-col justify-between p-6 sm:p-7 rounded-[24px] bg-[#2d2e34]/70 border border-neutral-700/40 text-left opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer h-full backdrop-blur-xs select-none scale-95"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#ff4500]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#ff4500]" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1.5">5.0</span>
                  </div>
                  <p className="text-xs text-neutral-300 line-clamp-4 leading-relaxed">
                    {TESTIMONIALS[prevIdx].quote}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between mt-4 border-t border-neutral-700/40">
                  <div className="flex items-center gap-3">
                    <img 
                      src={TESTIMONIALS[prevIdx].avatar} 
                      alt={TESTIMONIALS[prevIdx].author}
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-full object-cover border border-neutral-600"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{TESTIMONIALS[prevIdx].author}</h4>
                      <p className="text-[10px] text-neutral-400">{TESTIMONIALS[prevIdx].role}, {TESTIMONIALS[prevIdx].company}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-serif text-neutral-600/40 leading-none">““</span>
                </div>
              </div>

              {/* Center Active Featured Card (Full Focus) */}
              <div className="md:col-span-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 15, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-[#2d2e34] border border-neutral-700/60 text-left shadow-[0_20px_50px_rgba(0,0,0,0.4)] h-full group"
                  >
                    {/* Stars and Rating */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-1.5 text-[#ff4500]">
                        {[...Array(TESTIMONIALS[activeIdx].rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-[#ff4500]" />
                        ))}
                        <span className="text-sm font-bold text-white ml-2">5.0</span>
                      </div>

                      {/* Quote Content */}
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                        {TESTIMONIALS[activeIdx].quote}
                      </p>
                    </div>

                    {/* Author Bottom Details & Watermark Quote */}
                    <div className="pt-6 flex items-center justify-between mt-6 border-t border-neutral-700/50">
                      <div className="flex items-center gap-3.5">
                        <img 
                          src={TESTIMONIALS[activeIdx].avatar} 
                          alt={TESTIMONIALS[activeIdx].author}
                          referrerPolicy="no-referrer"
                          className="w-11 h-11 rounded-full object-cover border-2 border-neutral-600 shadow-sm"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-white tracking-tight">
                            {TESTIMONIALS[activeIdx].author}
                          </h4>
                          <p className="text-xs text-neutral-400">
                            {TESTIMONIALS[activeIdx].role}, {TESTIMONIALS[activeIdx].company}
                          </p>
                        </div>
                      </div>

                      {/* Stylized Double Quote Watermark */}
                      <span className="text-4xl font-serif text-neutral-600/40 select-none pointer-events-none leading-none">
                        ““
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Secondary Card (Visible on larger screens) */}
              <div 
                onClick={handleNext}
                className="hidden md:flex flex-col justify-between p-6 sm:p-7 rounded-[24px] bg-[#2d2e34]/70 border border-neutral-700/40 text-left opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer h-full backdrop-blur-xs select-none scale-95"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#ff4500]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#ff4500]" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1.5">5.0</span>
                  </div>
                  <p className="text-xs text-neutral-300 line-clamp-4 leading-relaxed">
                    {TESTIMONIALS[nextIdx].quote}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between mt-4 border-t border-neutral-700/40">
                  <div className="flex items-center gap-3">
                    <img 
                      src={TESTIMONIALS[nextIdx].avatar} 
                      alt={TESTIMONIALS[nextIdx].author}
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-full object-cover border border-neutral-600"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{TESTIMONIALS[nextIdx].author}</h4>
                      <p className="text-[10px] text-neutral-400">{TESTIMONIALS[nextIdx].role}, {TESTIMONIALS[nextIdx].company}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-serif text-neutral-600/40 leading-none">““</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Centered Navigation Controls */}
          <div className="flex items-center justify-center gap-3.5 pt-2">
            
            {/* Left Dark Arrow Button */}
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-[#3d3e44] hover:bg-[#4d4e56] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer border border-white/10 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Orange Arrow Button */}
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30 cursor-pointer group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

