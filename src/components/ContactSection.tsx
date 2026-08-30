import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Sparkles, 
  Layout, 
  Smartphone, 
  Palette, 
  Layers, 
  Zap, 
} from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [quickEmail, setQuickEmail] = useState('');
  const [quickSuccess, setQuickSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'UI/UX & Web Design',
    message: '',
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickEmail.includes('@')) return;
    setFormData((prev) => ({ ...prev, email: quickEmail }));
    setQuickSuccess(true);
    
    // Smooth scroll to inquiry form
    const formElement = document.getElementById('project-inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const serviceOptions = [
    { label: 'UI/UX & Web Design', icon: Layout },
    { label: 'Mobile App Design', icon: Smartphone },
    { label: 'Brand & Visual Identity', icon: Palette },
    { label: 'Design System & Tokens', icon: Layers },
    { label: '3D & Interactive Motion', icon: Zap },
  ];

  return (
    <section 
      id="contact" 
      className="relative w-full bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-neutral-200"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-orange-500/5 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[#ff4500] text-xs font-medium tracking-wide uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff4500]" />
            <span>Start a Project</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight leading-[1.12]">
            Have an Awesome Project Idea? <br className="hidden sm:block" />
            <span className="text-[#ff4500]">Let’s Discuss</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base font-normal max-w-lg mx-auto leading-relaxed pt-1">
            Ready to bring your product vision to life with precision craft, conversion-focused UX architecture, and memorable visual systems.
          </p>

          {/* Quick Email Pill Input Bar */}
          <div className="pt-3 max-w-lg mx-auto">
            <form 
              onSubmit={handleQuickSubmit}
              className="relative flex items-center w-full p-1.5 sm:p-2 rounded-full bg-neutral-50 border border-neutral-300 shadow-lg transition-all duration-300 focus-within:border-[#ff4500] focus-within:ring-2 focus-within:ring-[#ff4500]/20 focus-within:bg-white"
            >
              <div className="pl-3.5 sm:pl-4 text-neutral-500">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
              </div>
              
              <input
                id="quick-email-input"
                type="email"
                required
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 sm:py-2.5 bg-transparent text-neutral-900 placeholder-neutral-400 text-xs sm:text-sm font-normal focus:outline-none"
              />

              <button
                id="quick-email-submit-btn"
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#ff4500] hover:bg-[#ff5722] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-orange-500/30 whitespace-nowrap cursor-pointer active:scale-95"
              >
                <span>{quickSuccess ? 'Ready Below!' : "Let's Talk"}</span>
                {quickSuccess ? (
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Project Inquiry Form Container */}
        <div id="project-inquiry-form" className="max-w-3xl mx-auto w-full">
          <div className="p-7 sm:p-9 md:p-11 rounded-[28px] bg-white border border-neutral-200/90 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Form Header */}
              <div className="mb-8 pb-5 border-b border-neutral-200">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight">
                  Project Inquiry Brief
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-900 tracking-tight">
                    Project Brief Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you for getting in touch, <span className="text-neutral-900 font-semibold">{formData.name || 'there'}</span>. We will review your project requirements and reach out via <span className="text-orange-600 font-medium">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        serviceType: 'UI/UX & Web Design',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-xs font-medium text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-neutral-700 block">
                        Your Name <span className="text-[#ff4500]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm font-normal focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-neutral-700 block">
                        Email Address <span className="text-[#ff4500]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm font-normal focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-medium text-neutral-700 block">
                      Select Required Services
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {serviceOptions.map(({ label, icon: IconComponent }) => (
                        <button
                          type="button"
                          key={label}
                          onClick={() => setFormData({ ...formData, serviceType: label })}
                          className={`flex items-center gap-2.5 text-left px-3.5 py-3 rounded-2xl text-xs font-medium border transition-all cursor-pointer ${
                            formData.serviceType === label
                              ? 'bg-orange-50/80 border-[#ff4500] text-neutral-900 font-semibold shadow-xs'
                              : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80'
                          }`}
                        >
                          <IconComponent className={`w-4 h-4 shrink-0 ${formData.serviceType === label ? 'text-[#ff4500]' : 'text-neutral-500'}`} />
                          <span className="truncate">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-neutral-700 block">
                      Project Vision & Deliverables <span className="text-[#ff4500]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project vision, target audience, core deliverables, and key milestones..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm font-normal focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] focus:bg-white transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* High-Impact Submit Button */}
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full py-4 rounded-2xl bg-[#ff4500] hover:bg-[#ff5722] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



