import React, { useEffect } from 'react';
import { X, Award, ExternalLink, ArrowRight, ArrowLeft, CheckCircle2, Layers, Palette, Type } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="project-modal-content"
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800/90 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col"
      >
        {/* Sticky Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md z-30 sticky top-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-500 bg-orange-950/40 border border-orange-800/50 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-500">{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* Main Hero Image in Modal */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
            
            {project.award && (
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{project.award}</span>
              </div>
            )}
          </div>

          {/* Title & Metadata Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b border-neutral-800/80">
            <div className="lg:col-span-2 space-y-3">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 font-light">
                {project.subtitle}
              </p>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* Quick Spec Box */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 space-y-4 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block uppercase tracking-wider mb-1">Client</span>
                <span className="text-neutral-200 font-semibold">{project.client}</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase tracking-wider mb-1">Discipline</span>
                <span className="text-orange-400 font-semibold">{project.category}</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase tracking-wider mb-1">Year of Execution</span>
                <span className="text-neutral-200">{project.year}</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase tracking-wider mb-1">Deliverables</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.deliverables.map((item, idx) => (
                    <span key={idx} className="bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded text-[11px]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Narrative: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Challenge
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                The Design Solution
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Design System Spec: Palette & Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Color Palette */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <Palette className="w-4 h-4 text-orange-500" />
                <span>Chromatic Harmony</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {project.colorPalette.map((color, idx) => (
                  <div key={idx} className="group relative">
                    <div
                      className="w-full aspect-square rounded-xl border border-neutral-800 transition-transform duration-300 group-hover:scale-105 shadow-md"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="mt-1.5 text-center">
                      <span className="block text-[10px] font-mono text-neutral-400 uppercase truncate">
                        {color.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <Type className="w-4 h-4 text-orange-500" />
                <span>Typographic Specimen</span>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 space-y-2">
                {project.typography.map((font, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-neutral-800/50 last:border-0">
                    <span className="text-white font-medium">{font}</span>
                    <span className="text-neutral-500 font-mono text-[10px]">Primary Scale</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Gallery Spreads */}
          {project.gallery.length > 1 && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <Layers className="w-4 h-4 text-orange-500" />
                <span>Extended Visual Artifacts</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgSrc, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-video">
                    <img
                      src={imgSrc}
                      alt={`${project.title} asset ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation to Next / Previous Project */}
          <div className="pt-8 border-t border-neutral-800/80 flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-orange-500" />
              <span>Prev: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
