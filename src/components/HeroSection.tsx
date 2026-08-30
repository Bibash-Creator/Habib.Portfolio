import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import heroCutout from '../assets/images/jenny_cutout_transparent.png';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreClick, 
  onContactClick 
}) => {
  const handlePortfolioClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const portfolioEl = document.getElementById('portfolio');
      if (portfolioEl) {
        portfolioEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHireMeClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full bg-white text-neutral-950 pt-28 sm:pt-34 lg:pt-36 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* 1. Top Speech Bubble "Hello!" with Spark */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-3 sm:mb-4 z-0"
        >
          {/* Hand-drawn 3-line orange spark above speech bubble */}
          <div className="absolute -top-3.5 -right-3 text-[#ff4500]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 3v4" />
              <path d="M18.5 5.5l-2.8 2.8" />
              <path d="M21 12h-4" />
            </svg>
          </div>

          <div className="px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-neutral-800 bg-white text-neutral-900 font-medium text-xs sm:text-sm tracking-wide shadow-xs">
            Hello!
          </div>
        </motion.div>

        {/* 2. Main Large Headline (Lowered & positioned behind the person) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-0 space-y-1 sm:space-y-2 -mb-20 sm:-mb-28 md:-mb-36 lg:-mb-44 max-w-5xl"
        >
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-neutral-950 tracking-tight leading-[1.05]">
            I’m <span className="text-[#ff4500]">Jenny,</span>
          </h1>
          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-neutral-950 tracking-tight leading-[1.05]">
            Product Designer
          </h2>
        </motion.div>

        {/* 3. Hero Visual Arena: Left Testimonial (Pushed Upward) + Center Person & Arch + Right Metrics (Pushed Upward) */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-4 z-10">
          
          {/* Left Flank: Testimonial & Client Served (Elevated upward to align with face/chest level) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1 relative z-20 pb-6 lg:pb-36 xl:pb-40"
          >
            {/* Quote block */}
            <div className="space-y-1.5 max-w-xs">
              <span className="font-serif font-bold text-4xl sm:text-5xl text-neutral-900 leading-none block select-none">
                “
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Jenny’s exceptional product design ensured our website’s success. Highly recommended!
              </p>
            </div>

            {/* 450+ Client Served */}
            <div className="space-y-0.5 pt-1">
              <div className="font-display font-bold text-3xl sm:text-4xl text-neutral-950 tracking-tight">
                450+
              </div>
              <div className="text-xs sm:text-sm text-neutral-500 font-medium">
                Client Served
              </div>
            </div>
          </motion.div>

          {/* Center Graphic: Attached directly to bottom beneath section, with person's head covering heading */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] flex flex-col items-center justify-end order-1 lg:order-2 self-end z-10">
            
            {/* Staging Frame */}
            <div className="relative w-[300px] sm:w-[400px] md:w-[460px] h-[340px] sm:h-[420px] md:h-[480px] flex items-end justify-center overflow-visible">
              
              {/* 1. Half Orange Circle / Arch directly attached with the beneath section */}
              <div className="absolute bottom-0 w-[300px] sm:w-[390px] md:w-[450px] h-[170px] sm:h-[220px] md:h-[250px] rounded-t-full bg-[#ff4500] shadow-xl z-0" />

              {/* 2. Cutout Person placed ON TOP of orange circle and IN FRONT OF the heading, with head overflowing out above */}
              <img 
                src={heroCutout} 
                alt="Jenny - Senior Product Designer"
                className="relative z-10 w-[290px] sm:w-[370px] md:w-[420px] max-h-[380px] sm:max-h-[460px] md:max-h-[520px] object-contain object-bottom select-none pointer-events-none filter contrast-[1.02] drop-shadow-sm"
                referrerPolicy="no-referrer"
              />

              {/* 3. Playful Hand-Drawn Star Doodle near right shoulder */}
              <div className="absolute top-[34%] right-2 sm:right-4 z-20 text-neutral-900 pointer-events-none">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* 4. Hand-drawn Curved Arrow pointing to the Portfolio button */}
              <div className="absolute bottom-12 -left-6 sm:-left-10 z-20 hidden sm:block text-neutral-900 pointer-events-none">
                <svg width="68" height="52" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 48 C 15 18, 38 22, 66 36" />
                  <path d="M55 30 L 68 37 L 59 46" />
                </svg>
              </div>

              {/* 5. Floating Action Pill Bar: Portfolio ↗ | Hire Me (centered across lower chest) */}
              <div className="absolute bottom-5 sm:bottom-8 z-30 flex items-center justify-center p-1 sm:p-1.5 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] border border-neutral-200/90 whitespace-nowrap">
                <button
                  id="hero-portfolio-btn"
                  onClick={handlePortfolioClick}
                  type="button"
                  className="group px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-orange-500/30 transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  id="hero-hireme-btn"
                  onClick={handleHireMeClick}
                  type="button"
                  className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-neutral-950 text-neutral-950 hover:text-white font-bold text-xs sm:text-sm tracking-wide border border-transparent transition-all duration-200 cursor-pointer active:scale-95 ml-1"
                >
                  <span>Hire Me</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Flank: 5 Stars + 10 Years Experts + Underline (Elevated upward to align with forehead/eyes/mouth level) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/4 flex flex-col items-center lg:items-end text-center lg:text-right space-y-3 sm:space-y-4 order-3 relative z-20 pb-6 lg:pb-36 xl:pb-40"
          >
            {/* 5 Solid Orange Stars */}
            <div className="flex items-center gap-1 text-[#ff4500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#ff4500] stroke-none" />
              ))}
            </div>

            {/* 10 Years Experts */}
            <div className="space-y-0.5">
              <div className="font-display font-bold text-3xl sm:text-4xl text-neutral-950 tracking-tight">
                10 Years
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-neutral-800 tracking-tight">
                Experts
              </div>
            </div>

            {/* Dark Underline Bar */}
            <div className="w-28 sm:w-36 h-1 bg-neutral-900 rounded-full" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
