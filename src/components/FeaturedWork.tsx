import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'UI/UX Design',
  'Landing Page',
  'Wireframe',
  'Brand Identity',
  'Editorial & Print',
];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('UI/UX Design');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter projects by category or fallback to all
  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory || p.category === 'UI/UX Design' || p.category === 'Landing Page' || p.category === 'Wireframe' || p.featured
  );

  const displayProjects = filteredProjects.length >= 2 ? filteredProjects : PROJECTS;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayProjects.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= displayProjects.length - 2 ? 0 : prev + 1));
  };

  // Get current 2 visible items
  const visibleProjects = [
    displayProjects[currentIndex % displayProjects.length],
    displayProjects[(currentIndex + 1) % displayProjects.length],
  ];

  return (
    <section 
      id="portfolio" 
      className="relative w-full bg-[#050505] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Light Ashy / Studio Wrapper Canvas */}
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Top Header: Title on Left, See More Button on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.2]">
              Let’s Have a Look at <br className="hidden sm:block" />
              my <span className="text-[#ff4500]">Portfolio</span>
            </h2>
          </div>

          <div>
            <button
              id="portfolio-see-more-btn"
              onClick={() => {
                const first = visibleProjects[0] || PROJECTS[0];
                if (first) onSelectProject(first);
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>See More</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Stage with Overlapping Left/Right Circular Arrows */}
        <div className="relative px-2 sm:px-4">
          
          {/* Left Dark Floating Arrow Button - Pushed inward, subtle white stroke ring */}
          <button
            id="portfolio-prev-btn"
            onClick={handlePrev}
            aria-label="Previous portfolio projects"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-white border-2 border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Orange Floating Arrow Button - Pushed inward, subtle white stroke ring */}
          <button
            id="portfolio-next-btn"
            onClick={handleNext}
            aria-label="Next portfolio projects"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white border-2 border-white/90 shadow-[0_8px_30px_rgba(255,69,0,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Two Clean White Portfolio Cards Side by Side - Ultra-thin subtle border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, idx) => (
                <motion.div
                  key={`${project.id}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  onClick={() => onSelectProject(project)}
                  className="group relative cursor-pointer bg-white rounded-[28px] sm:rounded-[36px] overflow-hidden p-3 sm:p-4 shadow-[0_15px_45px_rgba(0,0,0,0.4)] border border-neutral-100/60 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(255,69,0,0.2)] hover:-translate-y-1.5"
                >
                  {/* Card Screen Showcase Frame */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[14/10] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#f4f5f8] flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    />
                    
                    {/* Hover Card Subtle Glass Details */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-950 font-semibold text-xs shadow-lg">
                          <span>View Full Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4500]" />
                        </span>
                        <h4 className="text-white font-bold text-lg drop-shadow-md">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Pill Filter Categories as shown in reference */}
        <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#e4e5eb] text-neutral-950 font-semibold shadow-xs'
                    : 'bg-[#18181b]/80 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

