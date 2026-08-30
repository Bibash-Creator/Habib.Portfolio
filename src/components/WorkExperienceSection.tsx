import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const WorkExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative w-full bg-white py-24 sm:py-32 border-t border-neutral-100 overflow-hidden text-neutral-900">
      {/* Subtle ambient lighting */}
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-orange-500/5 via-orange-500/2 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#ff4500] text-xs font-mono tracking-widest uppercase font-semibold mb-1 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff4500]" />
            <span>Career Milestones</span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-neutral-950 tracking-tight leading-tight">
            My Work <span className="text-[#ff4500]">Experience</span>
          </h2>
          
          <p className="text-neutral-500 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            A decade of leading creative design systems, crafting high-impact brand identities, and shipping digital products for world-class companies.
          </p>
        </div>

        {/* Creative Timeline Layout */}
        <div className="relative">
          
          {/* Vertical dashed timeline connector line for Desktop (center-aligned) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0 border-r-2 border-dashed border-neutral-300 z-0 pointer-events-none" />
          
          {/* Vertical dashed timeline connector line for Mobile (left-aligned) */}
          <div className="md:hidden absolute left-6 top-8 bottom-8 w-0 border-r-2 border-dashed border-neutral-300 z-0 pointer-events-none" />

          {/* Timeline Experience Items */}
          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isHovered = hoveredId === exp.id;
              const isPrimary = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  id={`experience-node-${exp.id}`}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative group transition-all duration-300"
                >
                  {/* Desktop 3-Column Timeline Layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] items-start gap-8">
                    
                    {/* Left Column: Company, Location & Period */}
                    <div className={`text-right space-y-2 pt-1 transition-transform duration-300 ${isHovered ? '-translate-x-1' : ''}`}>
                      <div className="inline-flex items-center gap-2 justify-end">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-neutral-950 tracking-tight group-hover:text-[#ff4500] transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center justify-end gap-1.5 text-xs text-neutral-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#ff4500]" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                        {exp.type}
                      </div>
                    </div>

                    {/* Center Column: Creative Timeline Node with Concentric Rings */}
                    <div className="flex flex-col items-center justify-center relative z-10 pt-1">
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        aria-label={`Toggle details for ${exp.company}`}
                        className={`relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                          isPrimary || isHovered || isExpanded
                            ? 'scale-110'
                            : 'scale-100 opacity-90 hover:opacity-100'
                        }`}
                      >
                        {/* Outer Dotted / Dashed Orbit Ring */}
                        <div 
                          className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-500 ${
                            isPrimary || isHovered || isExpanded
                              ? 'border-[#ff4500] animate-[spin_12s_linear_infinite]'
                              : 'border-neutral-300'
                          }`} 
                        />

                        {/* Middle ambient glow aura */}
                        <div 
                          className={`absolute inset-1.5 rounded-full transition-opacity duration-300 ${
                            isPrimary || isHovered || isExpanded
                              ? 'bg-orange-500/15 blur-xs'
                              : 'bg-neutral-100'
                          }`} 
                        />

                        {/* Inner Core Solid Node (Orange or Dark) */}
                        <div 
                          className={`relative w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                            isPrimary || isHovered || isExpanded
                              ? 'bg-[#ff4500] text-white shadow-[0_0_14px_rgba(255,69,0,0.4)]'
                              : 'bg-neutral-200 text-neutral-600 border border-neutral-300'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isPrimary || isHovered || isExpanded ? 'bg-white' : 'bg-neutral-400'}`} />
                        </div>
                      </button>

                      {/* Micro index badge */}
                      <span className="text-[10px] font-mono text-neutral-400 mt-1 font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Right Column: Role Title, Description & Expandable Achievements */}
                    <div className={`space-y-4 pt-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="font-display font-bold text-2xl text-neutral-950 tracking-tight">
                            {exp.role}
                          </h4>
                          <button
                            onClick={() => toggleExpand(exp.id)}
                            className="inline-flex items-center gap-1.5 text-xs text-[#ff4500] hover:text-orange-600 font-medium cursor-pointer transition-colors px-2.5 py-1 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-200"
                          >
                            <span>{isExpanded ? 'Less' : 'Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                          {exp.description}
                        </p>
                      </div>

                      {/* Competencies chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-700 group-hover:border-neutral-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Expandable High-Impact Achievements Panel */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2.5 shadow-sm mt-2">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4500] font-semibold block">
                                Key Contributions & Outcomes
                              </span>
                              <div className="space-y-2">
                                {exp.achievements.map((ach, achIdx) => (
                                  <div key={achIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-normal leading-relaxed">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4500] shrink-0 mt-0.5" />
                                    <span>{ach}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Mobile Timeline Layout (Left-Track Style) */}
                  <div className="md:hidden flex gap-5 items-start pl-1">
                    
                    {/* Left Node & Connector */}
                    <div className="flex flex-col items-center shrink-0 relative z-10 pt-1">
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="relative w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
                      >
                        {/* Dashed outer ring */}
                        <div 
                          className={`absolute inset-0 rounded-full border-2 border-dashed ${
                            isPrimary || isExpanded
                              ? 'border-[#ff4500]'
                              : 'border-neutral-300'
                          }`}
                        />
                        {/* Core solid center */}
                        <div 
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            isPrimary || isExpanded
                              ? 'bg-[#ff4500] shadow-[0_0_12px_rgba(255,69,0,0.4)]'
                              : 'bg-neutral-200 border border-neutral-300'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${isPrimary || isExpanded ? 'bg-white' : 'bg-neutral-500'}`} />
                        </div>
                      </button>
                    </div>

                    {/* Right Content Block for Mobile */}
                    <div className="flex-1 space-y-3 pb-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[#ff4500] font-medium">
                            {exp.period}
                          </span>
                          <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#ff4500]" />
                            {exp.location}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-neutral-950">
                          {exp.company}
                        </h3>
                        <h4 className="text-[#ff4500] font-medium text-sm">
                          {exp.role}
                        </h4>
                      </div>

                      <p className="text-neutral-600 text-xs leading-relaxed font-normal">
                        {exp.description}
                      </p>

                      {/* Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1 text-xs text-[#ff4500] font-medium pt-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Highlights' : 'View Highlights'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {/* Mobile Accordion */}
                      {isExpanded && (
                        <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 mt-2">
                          {exp.achievements.map((ach, achIdx) => (
                            <div key={achIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4500] shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

