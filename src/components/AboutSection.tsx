import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Eye, Sparkles, Terminal, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { STATS, AWARDS } from '../data/portfolioData';
import shabibPortrait from '../assets/images/shabib_portrait_1787952434381.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full">
      {/* 1. The Practice Studio Section (Full Dark Theme) */}
      <div className="relative w-full bg-[#050505] py-20 sm:py-28 border-t border-neutral-900 overflow-hidden">
        {/* Sun gradient background blur */}
        <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial-sun opacity-15 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-14 sm:space-y-18">
          {/* Section Header */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                  The <span className="text-gradient-warm">Practice</span>
                </h2>
              </div>
              <p className="max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Rooted in rigorous Swiss typography, brutalist structural geometry, and sensory tactile materiality.
              </p>
            </div>

            {/* Professional Horizontal Divider Line */}
            <div className="relative w-full pt-2">
              <div className="w-full h-px bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800" />
              <div className="absolute left-0 top-2 w-16 h-0.5 bg-[#ff4500] rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Bold Portrait / Silhouette Graphic & Philosophy */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Visual Portrait Card */}
              <div className="relative aspect-square w-full rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl group">
                {/* Portrait Photo */}
                <img
                  src={shabibPortrait}
                  alt="Bibash Shabib — Design Director"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay at the bottom for typography contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Floating Studio Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/75 backdrop-blur-md border border-neutral-800/90 px-4 py-3 rounded-2xl flex items-center justify-between shadow-xl">
                  <div>
                    <span className="font-display font-bold text-white text-sm block">Bibash Shabib</span>
                    <span className="text-[11px] font-mono text-orange-400">Senior Art Director</span>
                  </div>
                  <span className="font-signature text-2xl text-white">Shabib.</span>
                </div>
              </div>

              {/* Core Philosophy Quote */}
              <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-850 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-orange-500 font-semibold">Design Axiom</span>
                <p className="text-base sm:text-lg text-neutral-200 font-light italic leading-relaxed">
                  "True graphic power comes from the tension between restraint and audacity. Remove everything unnecessary until the remaining elements vibrate with kinetic energy."
                </p>
              </div>
            </div>

            {/* Right Column: Bio, Methodology & Stats */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="space-y-6">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  With over a decade of dedicated studio practice across Europe and North America, I help cultural institutions, luxury houses, and innovative technology ventures establish unmistakable brand presence.
                </p>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                  My approach is rooted in rigorous Swiss typography, brutalist structural geometry, and sensory tactile materiality. Every system is built to transcend fleeting trends and command lasting attention across digital platforms and physical spaces.
                </p>
              </div>

              {/* 4 Key Pillars of Practice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-850 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-orange-950/60 border border-orange-800/60 flex items-center justify-center text-orange-400 text-xs font-mono font-bold">
                    01
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">Typographic Gravitas</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Bespoke letterforms, mathematical grid architecture, and high-tension hierarchy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-850 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-950/60 border border-rose-800/60 flex items-center justify-center text-rose-400 text-xs font-mono font-bold">
                    02
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">Chromatic Contrast</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Warm amber-gold and deep ruby pigments set against deep pitch blacks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-850 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400 text-xs font-mono font-bold">
                    03
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">Tactile Materiality</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Foil stamping, micro-embossing, textured stocks, and structural unboxing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-850 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 text-xs font-mono font-bold">
                    04
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">Spatial Motion</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    Dynamic 3D expansions, responsive kinetic typography, and exhibition reels.
                  </p>
                </div>
              </div>

              {/* Metrics Counter Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-900">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="space-y-1 text-center sm:text-left">
                    <span className="font-display font-semibold text-3xl sm:text-4xl text-white">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Honors & Awards (Full Dark Theme) */}
      <div id="recognition" className="relative w-full bg-[#050505] py-20 sm:py-28 border-t border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                Honors & <span className="text-gradient-warm">Awards</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light">
              Judged and celebrated by international design councils for typographic excellence and packaging innovation.
            </p>
          </div>

          {/* Awards List Table */}
          <div className="divide-y divide-neutral-900 border-y border-neutral-900">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-neutral-900/40 px-4 -mx-4 rounded-xl transition-colors duration-300"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-orange-500 font-bold w-12">
                    {award.year}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors">
                      {award.title}
                    </h4>
                    <span className="text-xs text-neutral-400 block font-light">
                      {award.organization}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:text-right pl-16 sm:pl-0">
                  <span className="text-xs font-mono text-neutral-300 bg-neutral-900/80 px-3 py-1 rounded-full border border-neutral-800">
                    {award.project}
                  </span>
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
