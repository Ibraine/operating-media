import React, { useEffect, useState, useRef } from "react";

export default function CompactInstituteStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Inject Font
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }

    // Scroll Animation Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featuresData = [
    { icon: "🎯", title: "Micro Batches", desc: "10-12 Students for personal attention" },
    { icon: "🧠", title: "Expert Trainers", desc: "12+ Yrs Exp. Learn real job skills" },
    { icon: "🛠", title: "100% Practical", desc: "No theory overload, only execution" },
    { icon: "📈", title: "Placement Help", desc: "Resume & mock interviews included" },
    { icon: "🔁", title: "LMS & Backups", desc: "Never miss out with lifetime access" }
  ];

  return (
    <section 
      ref={sectionRef}
      // Height kam karne ke liye padding py-10 to py-14 rakhi hai
      className="relative w-full bg-[#080d1a] overflow-hidden py-10 md:py-14 selection:bg-[#ECAB00] selection:text-black"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* --- BACKGROUND SUBTLE GRID --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Center Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[200px] bg-[#ECAB00] opacity-[0.07] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6">
        
        {/* --- COMPACT HEADING --- */}
        <div className={`text-center max-w-2xl mx-auto mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-black text-white leading-tight mb-2 tracking-tight">
            Why 16,000+ Students <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ECAB00] to-[#FFE270]">Trust Operating Media</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-white/60 font-medium">
            AI-powered courses, expert training & guaranteed placement support.
          </p>
        </div>

        {/* --- COMPACT FEATURE CARDS (FLEX WRAP FOR PERFECT ALIGNMENT) --- */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden flex items-center gap-4 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] max-w-[400px] bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-[#ECAB00]/40 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.2)] cursor-default"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms` 
              }}
            >
              {/* Shimmer Light Effect (Eye-Catchy Animation) */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent group-hover:animate-shimmer pointer-events-none" />

              {/* Glowing Icon Box */}
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-2xl group-hover:bg-[#ECAB00]/10 group-hover:border-[#ECAB00]/50 group-hover:scale-110 transition-all duration-300 shadow-inner relative">
                {/* Small glow behind icon on hover */}
                <div className="absolute inset-0 bg-[#ECAB00] opacity-0 group-hover:opacity-20 blur-md rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10">{feature.icon}</span>
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col text-left">
                <h4 className="text-white font-bold text-[15px] md:text-[16px] leading-tight mb-0.5 group-hover:text-[#ECAB00] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-white/50 text-[12px] md:text-[13px] leading-snug font-medium line-clamp-2">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- CUSTOM CSS FOR SHIMMER EFFECT --- */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}