import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Send, 
  Check, 
  Youtube, 
  Instagram, 
  Twitter, 
  Facebook,
  Linkedin,
  Globe,
  Mail,
  Phone
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop?: () => void;
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSent(false);
    }, 4000);
  };

  const handleHireMe = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About Us', target: 'why-hire-me' },
    { label: 'Service', target: 'services' },
    { label: 'Resume', target: 'experience' },
    { label: 'Project', target: 'portfolio' },
  ];

  return (
    <footer id="main-footer" className="w-full bg-white">
      <div 
        className="w-full bg-[#18191d] text-neutral-300 rounded-t-[36px] sm:rounded-t-[50px] lg:rounded-t-[60px] pt-14 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-16 border-t border-neutral-800 shadow-[0_-20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden"
      >
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-64 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#ff4500]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 relative z-10">
          
          {/* Top Hero Row: "Let's Connect there" & "Hire me ↗" */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 sm:pb-12 border-b border-neutral-800/90">
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Let’s Connect there
            </h2>

            <button
              id="footer-hire-me-btn"
              onClick={handleHireMe}
              type="button"
              className="group px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white font-bold text-base sm:text-lg tracking-wide shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 shrink-0"
            >
              <span>Hire me</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* 4-Column Structured Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-2">
            
            {/* Column 1: Brand Logo, Bio & Social Badges (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff4500] flex items-center justify-center text-white font-serif font-black text-xl shadow-md">
                  b
                </div>
                <span className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Bibash
                </span>
              </div>

              {/* Bio Description */}
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
                Specialized in crafting modern web applications, high-converting design systems, and thoughtful UI/UX experiences for forward-thinking teams.
              </p>

              {/* Circular Social Buttons Row */}
              <div className="flex items-center gap-2.5 pt-2">
                {[
                  { icon: Facebook, label: 'Facebook', href: '#' },
                  { 
                    icon: () => (
                      <span className="font-bold text-xs tracking-tighter">Bē</span>
                    ), 
                    label: 'Behance', 
                    href: '#' 
                  },
                  { icon: Youtube, label: 'YouTube', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.label}
                    className="w-10 h-10 rounded-full bg-[#24252a] hover:bg-[#ff4500] border border-neutral-700/60 hover:border-[#ff4500] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-bold text-[#ff4500] tracking-wide">
                Navigation
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 font-normal">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate && onNavigate(link.target)}
                      className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-[#ff4500] tracking-wide">
                Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-400 font-normal">
                <li className="flex items-center gap-2.5 text-neutral-300">
                  <span>+0123-456-789</span>
                </li>
                <li>
                  <a 
                    href="https://bibash.design" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-200 inline-block text-neutral-300"
                  >
                    www.bibash.design
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${HERO_DATA.email || 'bibash.design@gmail.com'}`}
                    className="hover:text-white transition-colors duration-200 inline-block text-neutral-300"
                  >
                    {HERO_DATA.email || 'bibash.design@gmail.com'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter / Information (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-[#ff4500] tracking-wide">
                Get the latest information
              </h4>
              
              {/* Newsletter Input Box as in Reference */}
              <form onSubmit={handleNewsletterSubmit} className="relative pt-1">
                <div className="relative flex items-center w-full bg-white rounded-full p-1 pl-4 shadow-md transition-all focus-within:ring-2 focus-within:ring-orange-500">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent text-neutral-900 placeholder-neutral-400 text-xs sm:text-sm font-normal focus:outline-none pr-2"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    aria-label="Subscribe"
                    className="w-10 h-10 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer active:scale-95 shadow-sm"
                  >
                    {newsletterSent ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Send className="w-4 h-4 -rotate-12 translate-x-[-1px] translate-y-[1px]" />
                    )}
                  </button>
                </div>

                {newsletterSent && (
                  <p className="text-xs text-emerald-400 font-medium mt-2 animate-in fade-in">
                    ✓ Thank you! You’re on the list.
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* Bottom Sub-Footer Bar */}
          <div className="pt-8 sm:pt-10 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-neutral-400">
            <p>
              Copyright © {new Date().getFullYear()} <span className="text-[#ff4500] font-semibold">Bibash</span>. All Rights Reserved.
            </p>

            <div className="flex items-center gap-2 sm:gap-3 text-neutral-400">
              <span className="hover:text-white transition-colors cursor-pointer">
                User Terms & Conditions
              </span>
              <span className="text-neutral-600">|</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
