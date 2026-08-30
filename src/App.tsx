/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkExperienceSection } from './components/WorkExperienceSection';
import { WhyHireMeSection } from './components/WhyHireMeSection';
import { FeaturedWork } from './components/FeaturedWork';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'services', 'experience', 'why-hire-me', 'portfolio', 'testimonials', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topVisible = visibleEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ? prev : current;
          });
          if (topVisible?.target?.id) {
            setActiveSection(topVisible.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#040404] text-neutral-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white">
      {/* Top Floating Glass Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Sequential Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero section */}
        <HeroSection
          onExploreClick={() => scrollToSection('portfolio')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. My Services */}
        <ServicesSection />

        {/* 3. My Work Experience */}
        <WorkExperienceSection />

        {/* 4. Why You Hire Me */}
        <WhyHireMeSection />

        {/* 5. Have a Look at My Portfolio */}
        <FeaturedWork
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Testimonials That Speaks to My Results */}
        <TestimonialsSection />

        {/* 7. Have an Awesome Project Idea, Let's Discuss */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer 
        onScrollToTop={handleScrollToTop} 
        onNavigate={scrollToSection}
      />

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
          allProjects={PROJECTS}
        />
      )}
    </div>
  );
}


