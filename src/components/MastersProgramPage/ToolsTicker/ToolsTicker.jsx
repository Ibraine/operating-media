import React from 'react';
import { motion } from 'framer-motion';

// ── AI TOOLS ──
const aiTools = [
  { name: "AiSensy", src: "/images/Group-111.webp" },
  { name: "Predis.ai", src: "/images/Group-419.webp" },
  { name: "Hootsuite", src: "/images/Group-215.webp" },
  { name: "Copy.ai", src: "/images/Group-217.webp" },
  { name: "Gemini", src: "/images/Group-213.webp" },
  { name: "Presentations.ai", src: "/images/Group-216.webp" },
  { name: "PlayHT", src: "/images/Group-414.webp" },
  { name: "Bing", src: "/images/Group-415.webp" },
  { name: "Bard", src: "/images/Group-418.webp" },
  { name: "Lumen5", src: "/images/Group-417.webp" },
  { name: "ChatGPT", src: "/images/Group-153.webp" },
  { name: "HeyGen", src: "images/Group-416.webp" },
];

// ── MARKETING TOOLS ──
const dmTools = [
  { name: "SimilarWeb", src: "/images/Group-89-6.webp" },
  { name: "AliExpress", src: "/images/Group-134.webp" },
  { name: "Leadpages", src: "/images/Group-99.webp" },
  { name: "Amazon", src: "/images/Group-142.webp" },
  { name: "Wistia", src: "/images/Group-140.webp" },
  { name: "Google Console", src: "/images/Group-94-1.webp" },
  { name: "CJ Dropship", src: "/images/Group-132.webp" },
  { name: "Canva", src: "/images/Group-114.webp" },
  { name: "Vimeo", src: "/images/Group-135.webp" },
  { name: "Kapwing", src: "/images/Group-136.webp" },
  { name: "Zapier", src: "/images/Group-139.webp" },
  { name: "Audacity", src: "/images/Group-138.webp" },
  { name: "Zoho", src: "/images/Group-148.webp" },
  { name: "Flipkart", src: "/images/Group-155.webp" },
  { name: "Upwork", src: "/images/Group-128.webp" },
  { name: "Freelancer", src: "/images/Group-127.webp" },
  { name: "Fiverr", src: "/images/Group-126.webp" },
  { name: "WebEngage", src: "/images/Group-124-1.webp" },
  { name: "Oberlo", src: "/images/Group-133.webp" },
  { name: "Elementor", src: "/images/Group-85-1.webp" },
  { name: "Photopea", src: "/images/Group-116.webp" },
  { name: "Adobe Express", src: "/images/Group-115.webp" },
  { name: "Clan Connect", src: "/images/Group-120.webp" },
  { name: "Outreach", src: "/images/Group-118.webp" },
  { name: "Razorpay", src: "/images/Group-143.webp" },
  { name: "Prezi", src: "/images/Group-151.webp" },
  { name: "Instapage", src: "/images/Group-108.webp" },
  { name: "OptimizePress", src: "/images/Group-98.webp" },
  { name: "Jasper", src: "/images/Group-97.webp" },
  { name: "H2C Ad Network", src: "/images/Group-154.webp" },
  { name: "YouTube", src: "/images/Group-100.webp" },
  { name: "Jotform", src: "/images/Group-121.webp" },
  { name: "ClickFunnels", src: "/images/Group-129.webp" },
  { name: "Mixpanel", src: "/images/Group-117.webp" },
  { name: "Zoom", src: "/images/Group-92.webp" },
  { name: "Google Analytics", src: "/images/Group-145.webp" },
];

// Balance tools into two rows for sliders
const row1Tools = [...aiTools, ...dmTools.slice(0, 12)];
const row2Tools = [...dmTools.slice(12)];

// ── Single Logo Card Component ──
const LogoCard = ({ tool }) => (
  <div className="w-[140px] md:w-[180px] h-[70px] md:h-[85px] shrink-0 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.2)] hover:border-[#2563eb]/40 transition-all duration-300 group">
    <img
      src={tool.src}
      alt={tool.name}
      // Removed grayscale filter, logo is full color normally. Kept hover scale for effect.
      className="max-w-full max-h-[30px] md:max-h-[40px] object-contain transition-all duration-300 group-hover:scale-110"
      loading="lazy"
    />
  </div>
);

// ── MAIN EXPORT COMPONENT ──
const ToolsTicker = () => {
  return (
    <section className="relative w-full py-10 md:py-[40px] lg:py-[50px] bg-[#fcfaf2] font-['Satoshi',sans-serif] overflow-hidden">
      
      {/* Subtle Glow behind the slider (Background Lines removed as requested) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-0">

        {/* ── HEADER ── */}
        <div className="text-center mb-8 md:mb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
              <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                Premium Access
              </span>
            </div>

            <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
              Master <span className="relative inline-block text-[#ECAB00]">
                120+ Industry
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span> Leading Tools
            </h2>

            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Get hands-on experience with the exact software stack used by top global agencies and AI-driven companies.
            </p>
          </motion.div>
        </div>

        {/* ── INFINITE SLIDERS ── */}
        <div className="flex flex-col gap-4 md:gap-5 mask-edges">
          
          {/* Slider 1: Moves Left */}
          <div className="flex overflow-hidden relative">
            <div className="flex gap-4 md:gap-5 animate-marquee-left w-max">
              {[...row1Tools, ...row1Tools].map((tool, idx) => (
                <LogoCard key={`row1-${idx}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Slider 2: Moves Right */}
          <div className="flex overflow-hidden relative">
            <div className="flex gap-4 md:gap-5 animate-marquee-right w-max">
              {[...row2Tools, ...row2Tools].map((tool, idx) => (
                <LogoCard key={`row2-${idx}`} tool={tool} />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ── CUSTOM ANIMATIONS ── */}
      <style>{`
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-marquee-right {
          animation: scrollRight 45s linear infinite; /* Slightly different speed */
        }

        /* Pause on Hover */
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ToolsTicker;