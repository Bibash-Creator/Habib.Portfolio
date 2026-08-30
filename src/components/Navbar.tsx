import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const leftLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'why-hire-me' },
    { label: 'Service', href: 'services' },
  ];

  const rightLinks = [
    { label: 'Resume', href: 'experience' },
    { label: 'Project', href: 'portfolio' },
    { label: 'Contact Us', href: 'contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (href === 'hero' && (activeSection === 'hero' || !activeSection)) return true;
    if (href === 'services' && activeSection === 'services') return true;
    if (href === 'experience' && activeSection === 'experience') return true;
    if (href === 'why-hire-me' && activeSection === 'why-hire-me') return true;
    if (href === 'portfolio' && activeSection === 'portfolio') return true;
    if (href === 'contact' && (activeSection === 'contact' || activeSection === 'testimonials')) return true;
    return false;
  };

  return (
    <header
      id="main-navigation"
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="relative pointer-events-auto w-full max-w-[920px]">
        {/* Floating Solid Dark Pill Bar */}
        <div 
          className={`relative w-full rounded-full bg-[#111215] border border-neutral-800/80 px-6 sm:px-10 py-3 sm:py-3.5 flex items-center justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 ${
            scrolled ? 'shadow-2xl bg-[#0d0e11]/95 backdrop-blur-md border-neutral-700/80' : ''
          }`}
        >
          {/* Desktop Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 flex-1 justify-start">
            {leftLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <button
                  key={link.href}
                  id={`nav-link-${link.href}`}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-xs sm:text-sm font-medium tracking-normal transition-all duration-200 cursor-pointer focus:outline-none relative py-1 ${
                    active
                      ? 'text-[#ff4500] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Center Brand Logo with Circular Icon Badge */}
          <button
            id="nav-brand-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 mx-auto md:mx-4 group cursor-pointer focus:outline-none select-none py-1"
          >
            <div className="w-7 h-7 rounded-full bg-[#ff4500] flex items-center justify-center text-white font-serif font-bold text-sm shadow-xs transition-transform group-hover:scale-105">
              j
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-orange-400 transition-colors">
              Jenny
            </span>
          </button>

          {/* Desktop Right Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 flex-1 justify-end">
            {rightLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <button
                  key={link.href}
                  id={`nav-link-${link.href}`}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-xs sm:text-sm font-medium tracking-normal transition-all duration-200 cursor-pointer focus:outline-none relative py-1 ${
                    active
                      ? 'text-[#ff4500] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div 
            id="mobile-drawer" 
            className="md:hidden mt-2 bg-[#111215] border border-neutral-800 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="grid grid-cols-2 gap-2.5">
              {allLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      active
                        ? 'bg-[#ff4500] text-white font-semibold shadow-sm'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
