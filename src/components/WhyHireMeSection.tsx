import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import designerCutout from '../assets/images/designer_isolated_pose_1788008094252.jpg';

export const WhyHireMeSection: React.FC = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-hire-me" className="relative w-full bg-[#040404] py-8 sm:py-14 px-0">
      {/* Light Ashy Full-Width Card Container */}
      <div className="w-full rounded-[32px] sm:rounded-[44px] bg-[#f0f1f5] text-neutral-900 overflow-hidden shadow-2xl relative border-y sm:border border-neutral-200/80 p-8 sm:p-14 lg:p-20">
        
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d5d7e0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Big Orange Circle with Cutout Photo & Hand-drawn Dash Marks */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Playful Black Dash / Confetti Accents (as in reference) */}
            <div className="absolute top-2 right-4 sm:right-8 z-20 pointer-events-none opacity-85">
              <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L20 2" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M26 14L34 8" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M40 20L48 14" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 24L26 18" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M32 30L40 24" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M46 36L54 30" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M24 40L32 34" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M38 46L46 40" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M52 52L60 46" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Circular Frame Stage with Signature Warm Gradient */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-full bg-gradient-to-tr from-[#e63900] via-[#ff4500] to-[#ff6a00] flex items-end justify-center shadow-[0_20px_50px_rgba(255,69,0,0.3)] overflow-hidden group border-4 border-white/80">
              
              {/* Inner ambient glow layer */}
              <div className="absolute inset-0 bg-radial-warm opacity-80 pointer-events-none" />

              {/* Cutout Portrait Image */}
              <img
                src={designerCutout}
                alt="Bibash Shabib — Creative Director"
                referrerPolicy="no-referrer"
                className="w-[100%] h-[100%] object-cover object-center filter contrast-[1.05] brightness-100 select-none transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Clean, uncluttered typography, 2 stats, and Hire Me pill button */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Title */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-[1.15]">
              Why You <span className="text-[#ff4500]">Hire Me</span> for <br className="hidden sm:block" />
              Your Next Projects?
            </h2>

            {/* Concise, clean copy */}
            <p className="text-neutral-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
              Specialized in turning complex design challenges into market-defining digital experiences, high-converting interfaces, and memorable brand identities built to scale.
            </p>

            {/* 2 Clean Stats */}
            <div className="flex items-center gap-12 sm:gap-16 pt-2">
              <div className="space-y-1">
                <span className="font-display font-bold text-3xl sm:text-4xl text-neutral-950 block tracking-tight">
                  600+
                </span>
                <span className="text-xs sm:text-sm text-neutral-600 font-medium block">
                  Project Completed
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-3xl sm:text-4xl text-neutral-950 block tracking-tight">
                  50+
                </span>
                <span className="text-xs sm:text-sm text-neutral-600 font-medium block">
                  Industry Covered
                </span>
              </div>
            </div>

            {/* Clean Rounded Pill "Hire Me" Button */}
            <div className="pt-2">
              <button
                id="why-hire-me-btn"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[#ff4500] text-[#ff4500] font-semibold text-sm sm:text-base hover:bg-[#ff4500] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer active:scale-95"
              >
                Hire Me
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


