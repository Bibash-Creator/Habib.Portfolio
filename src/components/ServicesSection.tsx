import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  // State to cycle projects inside each service category
  const [activeUiuxIndex, setActiveUiuxIndex] = useState(0);
  const [activeWebIndex, setActiveWebIndex] = useState(0);
  const [activeLandingIndex, setActiveLandingIndex] = useState(0);

  const uiuxProjects = [
    {
      title: "Fast Delivery App",
      time: "9:41 AM",
      icon1: "🍔",
      price1: "$12.50",
      icon2: "🍕",
      price2: "$18.00",
      status: "Order Confirmed",
      price: "$24.00",
    },
    {
      title: "Fintech Vault App",
      time: "10:15 AM",
      icon1: "💳",
      price1: "Mastercard",
      icon2: "📈",
      price2: "+24.8%",
      status: "Instant Transfer",
      price: "$1,450.00",
    },
    {
      title: "Fitness & Habit OS",
      time: "07:30 AM",
      icon1: "🏃‍♂️",
      price1: "5.2 km",
      icon2: "💧",
      price2: "2.4 L",
      status: "Daily Goal Met",
      price: "2,400 kcal",
    }
  ];

  const webProjects = [
    {
      domain: "foodfusion.design",
      promo: "Get 20% Off Weekend Deals",
      cta: "CLAIM",
      badge1: "🍜",
      badge2: "🍣",
      badge3: "🥑",
    },
    {
      domain: "luxuryhorology.co",
      promo: "Autumn Chrono Drop #04",
      cta: "PREORDER",
      badge1: "⌚",
      badge2: "✨",
      badge3: "💎",
    },
    {
      domain: "apexstudio.arch",
      promo: "2026 Spatial Monograph",
      cta: "VIEW",
      badge1: "🏛️",
      badge2: "📐",
      badge3: "🧱",
    }
  ];

  const landingProjects = [
    {
      brand: "EduLearn",
      tagline: "Start Now",
      avatar: "👩‍💻",
      feat1Icon: "⚡",
      feat2Icon: "🏆",
      nav: ["Courses", "Pricing"],
    },
    {
      brand: "CloudVibe",
      tagline: "Deploy Free",
      avatar: "🚀",
      feat1Icon: "☁️",
      feat2Icon: "🔒",
      nav: ["Features", "Pricing"],
    },
    {
      brand: "ZenFlow AI",
      tagline: "Automate",
      avatar: "🤖",
      feat1Icon: "✨",
      feat2Icon: "📊",
      nav: ["Models", "Docs"],
    }
  ];

  const currentUiux = uiuxProjects[activeUiuxIndex];
  const currentWeb = webProjects[activeWebIndex];
  const currentLanding = landingProjects[activeLandingIndex];

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#18191d] text-white py-16 sm:py-24 rounded-t-[36px] sm:rounded-t-[50px] lg:rounded-t-[60px] -mt-6 sm:-mt-8 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header matching reference */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                My <span className="text-[#ff4500]">Services</span>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              Crafting tailored digital experiences from intuitive mobile interfaces to high-converting web applications.
            </p>
          </div>

          {/* Professional Horizontal Divider Line */}
          <div className="relative w-full pt-2">
            <div className="w-full h-px bg-neutral-800" />
            <div className="absolute left-0 top-2 w-16 h-0.5 bg-[#ff4500] rounded-full" />
          </div>
        </div>

        {/* 3 Cards Row - Refined compact width */}
        <div className="max-w-5xl xl:max-w-[1060px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          
          {/* Card 1: UI/UX Design (Dark Card) */}
          <div 
            id="service-card-uiux"
            className="group relative min-h-[470px] sm:min-h-[490px] rounded-[28px] bg-[#1a1a1e] text-white flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-white/[0.08]"
          >
            {/* Showcase Header: Title + Action Button + Project Counter */}
            <div className="relative z-20 p-6 sm:p-7 pb-3 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                  UI/UX Design
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-orange-500 inline-block animate-pulse" />
                  <span>Project {activeUiuxIndex + 1} of {uiuxProjects.length}</span>
                </div>
              </div>

              <button
                id="btn-service-uiux"
                onClick={() => setActiveUiuxIndex((prev) => (prev + 1) % uiuxProjects.length)}
                aria-label="Next UI/UX Project"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white/90 hover:text-neutral-950 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 cursor-pointer shrink-0"
                title="Click to view next project"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Visual Mockup Stage with Peeking Layered Cards Behind */}
            <div className="px-5 sm:px-6 pb-6 pt-1 flex-1 flex flex-col justify-end">
              <div 
                onClick={() => setActiveUiuxIndex((prev) => (prev + 1) % uiuxProjects.length)}
                className="relative w-full h-[300px] sm:h-[320px] flex items-end justify-center cursor-pointer group/stage"
                title="Click to flip through projects"
              >
                {/* Layer 3: Backmost Project Card Edge (Peeking on top-right) */}
                <div className="absolute top-0 right-2 w-[93%] h-[92%] bg-[#363640] rounded-2xl border border-white/10 shadow-md transition-transform duration-300 group-hover/stage:translate-y-[-2px] group-hover/stage:translate-x-[2px] opacity-60" />

                {/* Layer 2: Middle Project Card Edge (Peeking behind) */}
                <div className="absolute top-2.5 right-1 w-[96%] h-[93%] bg-[#525260] rounded-2xl border border-white/15 shadow-md transition-transform duration-300 group-hover/stage:translate-y-[-1px] group-hover/stage:translate-x-[1px] opacity-85" />

                {/* Main Front Mockup Card (Mobile App Screen) */}
                <div className="relative w-full h-[90%] bg-[#f7f8fa] rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between text-neutral-800 border border-neutral-200/90 z-10 transition-all duration-300 group-hover/stage:shadow-2xl">
                  
                  {/* Phone Top Bar: Dynamic Island + Header */}
                  <div>
                    <div className="w-16 h-3 bg-neutral-900 rounded-full mx-auto mb-2" />
                    <div className="flex items-center justify-between pb-2.5 border-b border-neutral-200/80">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                        <span className="text-xs font-bold text-neutral-900">{currentUiux.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 font-semibold">{currentUiux.time}</span>
                    </div>
                  </div>

                  {/* Phone Screen UI Grid Cards */}
                  <div className="grid grid-cols-2 gap-2.5 my-auto py-2">
                    <div className="bg-white p-3 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-2">
                      <div className="w-full h-11 rounded-lg bg-orange-50 flex items-center justify-center">
                        <span className="text-xl">{currentUiux.icon1}</span>
                      </div>
                      <div>
                        <div className="w-12 h-1.5 rounded bg-neutral-200 mb-1" />
                        <div className="text-xs font-bold text-orange-600">{currentUiux.price1}</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-xl border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-2">
                      <div className="w-full h-11 rounded-lg bg-rose-50 flex items-center justify-center">
                        <span className="text-xl">{currentUiux.icon2}</span>
                      </div>
                      <div>
                        <div className="w-12 h-1.5 rounded bg-neutral-200 mb-1" />
                        <div className="text-xs font-bold text-neutral-900">{currentUiux.price2}</div>
                      </div>
                    </div>
                  </div>

                  {/* Mockup Bottom Order Status Bar */}
                  <div className="bg-neutral-900 text-white p-2.5 sm:p-3 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-medium text-neutral-200">{currentUiux.status}</span>
                    </div>
                    <span className="text-xs font-bold text-orange-400 font-mono">{currentUiux.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Web Design (Vibrant Orange Highlighted Card) */}
          <div 
            id="service-card-web"
            className="group relative min-h-[470px] sm:min-h-[490px] rounded-[28px] bg-[#ff4500] text-white flex flex-col justify-between overflow-hidden shadow-[0_20px_40px_rgba(255,69,0,0.35)] hover:shadow-[0_24px_50px_rgba(255,69,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 border border-white/20"
          >
            {/* Showcase Header: Title + Action Button + Project Counter */}
            <div className="relative z-20 p-6 sm:p-7 pb-3 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Web Design
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/85 font-medium">
                  <span className="w-2 h-2 rounded-full bg-white inline-block animate-pulse" />
                  <span>Project {activeWebIndex + 1} of {webProjects.length}</span>
                </div>
              </div>

              <button
                id="btn-service-web"
                onClick={() => setActiveWebIndex((prev) => (prev + 1) % webProjects.length)}
                aria-label="Next Web Design Project"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#ff4500] border border-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 cursor-pointer shrink-0"
                title="Click to view next project"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Visual Mockup Stage with Peeking Layered Cards Behind */}
            <div className="px-5 sm:px-6 pb-6 pt-1 flex-1 flex flex-col justify-end">
              <div 
                onClick={() => setActiveWebIndex((prev) => (prev + 1) % webProjects.length)}
                className="relative w-full h-[300px] sm:h-[320px] flex items-end justify-center cursor-pointer group/stage"
                title="Click to flip through projects"
              >
                {/* Layer 3: Backmost Project Card Edge */}
                <div className="absolute top-0 right-2 w-[93%] h-[92%] bg-[#cc3700] rounded-2xl border border-white/20 shadow-md transition-transform duration-300 group-hover/stage:translate-y-[-2px] group-hover/stage:translate-x-[2px] opacity-70" />

                {/* Layer 2: Middle Project Card Edge */}
                <div className="absolute top-2.5 right-1 w-[96%] h-[93%] bg-[#ff7a4d] rounded-2xl border border-white/30 shadow-md transition-transform duration-300 group-hover/stage:translate-y-[-1px] group-hover/stage:translate-x-[1px] opacity-90" />

                {/* Main Front Mockup Card (Desktop Website) */}
                <div className="relative w-full h-[90%] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between text-neutral-800 border border-white/70 z-10 transition-all duration-300 group-hover/stage:shadow-2xl">
                  
                  {/* Browser Window Navigation Bar */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-neutral-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="bg-neutral-100 px-3 py-0.5 rounded-full text-[10px] font-mono text-neutral-600 font-medium">
                      {currentWeb.domain}
                    </div>
                    <div className="w-4" />
                  </div>

                  {/* Hero Layout of Mockup */}
                  <div className="space-y-3 my-auto py-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="w-24 h-2.5 rounded bg-neutral-900" />
                        <div className="w-32 h-1.5 rounded bg-neutral-300" />
                      </div>
                      <div className="w-16 h-6 rounded-full bg-[#ff4500] flex items-center justify-center text-[10px] text-white font-bold shadow-xs">
                        {currentWeb.cta}
                      </div>
                    </div>

                    {/* 3 Mini Product Showcase Cards */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-100 text-center space-y-1">
                        <div className="w-full h-8 rounded-lg bg-orange-100 flex items-center justify-center text-base">{currentWeb.badge1}</div>
                        <div className="w-10 mx-auto h-1.5 rounded bg-neutral-300" />
                      </div>
                      <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-100 text-center space-y-1">
                        <div className="w-full h-8 rounded-lg bg-amber-100 flex items-center justify-center text-base">{currentWeb.badge2}</div>
                        <div className="w-10 mx-auto h-1.5 rounded bg-neutral-300" />
                      </div>
                      <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-100 text-center space-y-1">
                        <div className="w-full h-8 rounded-lg bg-rose-100 flex items-center justify-center text-base">{currentWeb.badge3}</div>
                        <div className="w-10 mx-auto h-1.5 rounded bg-neutral-300" />
                      </div>
                    </div>
                  </div>

                  {/* Banner Promo Bar */}
                  <div className="bg-neutral-900 text-white p-2.5 sm:p-3 rounded-xl flex items-center justify-between shadow-sm">
                    <span className="text-[11px] font-medium text-neutral-200">{currentWeb.promo}</span>
                    <span className="text-[10px] bg-[#ff4500] px-2.5 py-0.5 rounded-full font-bold text-white uppercase">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Landing Page (Dark Card) */}
          <div 
            id="service-card-landing"
            className="group relative min-h-[470px] sm:min-h-[490px] rounded-[28px] bg-[#1a1a1e] text-white flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-white/[0.08]"
          >
            {/* Showcase Header: Title + Action Button + Project Counter */}
            <div className="relative z-20 p-6 sm:p-7 pb-3 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Landing Page
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-orange-500 inline-block animate-pulse" />
                  <span>Project {activeLandingIndex + 1} of {landingProjects.length}</span>
                </div>
              </div>

              <button
                id="btn-service-landing"
                onClick={() => setActiveLandingIndex((prev) => (prev + 1) % landingProjects.length)}
                aria-label="Next Landing Page Project"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white/90 hover:text-neutral-950 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 cursor-pointer shrink-0"
                title="Click to view next project"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Visual Mockup Stage with Peeking Layered Cards Behind */}
            <div className="px-5 sm:px-6 pb-6 pt-1 flex-1 flex flex-col justify-end">
              <div 
                onClick={() => setActiveLandingIndex((prev) => (prev + 1) % landingProjects.length)}
                className="relative w-full h-[300px] sm:h-[320px] flex items-end justify-center cursor-pointer group/stage"
                title="Click to flip through projects"
              >
                {/* Layer 3: Backmost Project Card Edge */}
                <div className="absolute top-0 right-2 w-[93%] h-[92%] bg-[#363640] rounded-2xl border border-white/10 shadow-md transition-transform duration-300 group-hover/stage:translate-y-[-2px] group-hover/stage:translate-x-[2px] opacity-60" />

                {/* Layer 2: Middle Project Card Edge */}
                <div className="absolute top-2.5 right-1 w-[96%] h-[93%] bg-[#525260] rounded-2xl border border-white/15 shadow-md transition-transform duration-300 group-hover/stage:translate-y-[-1px] group-hover/stage:translate-x-[1px] opacity-85" />

                {/* Main Front Mockup Card (SaaS/Course Landing Page) */}
                <div className="relative w-full h-[90%] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between text-neutral-800 border border-neutral-200/90 z-10 transition-all duration-300 group-hover/stage:shadow-2xl">
                  
                  {/* Top Bar with Brand + Nav Items */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-neutral-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-blue-600 shadow-xs" />
                      <span className="text-xs font-bold text-neutral-900">{currentLanding.brand}</span>
                    </div>
                    <div className="flex gap-2 text-[10px] text-neutral-500 font-medium">
                      {currentLanding.nav.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  </div>

                  {/* Hero Section of Landing page */}
                  <div className="space-y-3 my-auto py-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="w-28 h-2.5 rounded bg-neutral-900" />
                        <div className="w-36 h-1.5 rounded bg-neutral-400" />
                        <div className="w-20 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-semibold mt-1 shadow-xs">
                          {currentLanding.tagline}
                        </div>
                      </div>
                      {/* Avatar badge */}
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl shrink-0 shadow-inner">
                        {currentLanding.avatar}
                      </div>
                    </div>

                    {/* Features list row */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-100 flex items-center gap-2">
                        <span className="text-base">{currentLanding.feat1Icon}</span>
                        <div className="space-y-1">
                          <div className="w-12 h-1.5 rounded bg-neutral-800" />
                          <div className="w-8 h-1 rounded bg-neutral-400" />
                        </div>
                      </div>
                      <div className="bg-purple-50/70 p-2.5 rounded-xl border border-purple-100 flex items-center gap-2">
                        <span className="text-base">{currentLanding.feat2Icon}</span>
                        <div className="space-y-1">
                          <div className="w-12 h-1.5 rounded bg-neutral-800" />
                          <div className="w-8 h-1 rounded bg-neutral-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats & Trust Strip */}
                  <div className="bg-neutral-900 text-white p-2.5 sm:p-3 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-400 text-xs">★★★★★</span>
                      <span className="text-[10px] font-medium text-neutral-300">4.9/5</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 font-mono">12k+ Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

