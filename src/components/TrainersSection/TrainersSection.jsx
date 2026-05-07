import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Linkedin, Award } from "lucide-react";

const MENTORS = [
  { name: "Harsh Pareek", role: "SEO & Growth Strategist", img: "/images/Harsh-Ibraine.webp", initials: "HP" },
  { name: "Shraddha Rane", role: "Digital Marketing Expert", img: "/images/shraddha.png", initials: "SR" },
  { name: "Nilkamal Mukharjee", role: "E-Commerce Expert", img: "/images/neel.png", initials: "NM" },
  { name: "Rahul Shinde", role: "Analytics Lead", img: "/images/rahul.png", initials: "RS" },
  { name: "Hemant Mane", role: "Performance Marketing Lead", img: "/images/hemant.png", initials: "HM" },
  { name: "Zahid Shaikh", role: "Social Media Specialist", img: "/images/zahid.png", initials: "ZS" },
  { name: "Rahul Singh", role: "Content Strategy Head", img: "/images/rahuls.png", initials: "RS" },
  { name: "Vikram Kamble", role: "Brand Manager", img: "/images/vikram.png", initials: "VK" },
];

const LOOPED = [...MENTORS, ...MENTORS, ...MENTORS];

const AVATAR_COLORS = [
  { bg: "#E6F1FB", text: "#185FA5" },
  { bg: "#E1F5EE", text: "#0F6E56" },
  { bg: "#FAEEDA", text: "#854F0B" },
  { bg: "#EEEDFE", text: "#534AB7" },
  { bg: "#FAECE7", text: "#993C1D" },
  { bg: "#EAF3DE", text: "#3B6D11" },
  { bg: "#FCEBEB", text: "#A32D2D" },
  { bg: "#FBEAF0", text: "#993556" },
];

const GAP = 20;
const AUTO_SPEED = 0.6;   // px per frame for auto-scroll
const EASE_DURATION = 420; // ms for manual step easing

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function MentorCard({ mentor, cardWidth }) {
  const [imgError, setImgError] = useState(false);
  const globalIndex = MENTORS.findIndex(m => m.name === mentor.name);
  const avatarColor = AVATAR_COLORS[globalIndex % AVATAR_COLORS.length];

  return (
    <div
      className="group flex-shrink-0 flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden"
      style={{
        width: cardWidth,
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(236,171,0,0.15)";
        e.currentTarget.style.borderColor = "rgba(236,171,0,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
        e.currentTarget.style.borderColor = "#f3f4f6";
      }}
    >
      {/* Photo */}
      <div className="relative w-full overflow-hidden bg-gray-50" style={{ aspectRatio: "4/5" }}>
        {!imgError ? (
          <img
            src={mentor.img}
            alt={mentor.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
            style={{ display: "block", transition: "transform 0.4s ease" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-black text-5xl"
            style={{ background: avatarColor.bg, color: avatarColor.text, fontFamily: "'Satoshi', sans-serif" }}
          >
            {mentor.initials}
          </div>
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(15,23,42,0.55), transparent)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          ref={el => {
            if (!el) return;
            const card = el.closest(".group");
            card.addEventListener("mouseenter", () => el.style.opacity = "1");
            card.addEventListener("mouseleave", () => el.style.opacity = "0");
          }}
        />

        {/* Expert badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1"
          style={{
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.3)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          ref={el => {
            if (!el) return;
            const card = el.closest(".group");
            card.addEventListener("mouseenter", () => el.style.opacity = "1");
            card.addEventListener("mouseleave", () => el.style.opacity = "0");
          }}
        >
          <Award size={11} className="text-white" strokeWidth={2.5} />
          <span className="text-white font-bold uppercase tracking-widest" style={{ fontSize: "9px" }}>Expert</span>
        </div>

        {/* LinkedIn */}
        <div
          className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-xl cursor-pointer"
          style={{
            background: "#ecab00",
            color: "#0f172a",
            boxShadow: "0 4px 12px rgba(236,171,0,0.4)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          ref={el => {
            if (!el) return;
            const card = el.closest(".group");
            card.addEventListener("mouseenter", () => el.style.opacity = "1");
            card.addEventListener("mouseleave", () => el.style.opacity = "0");
          }}
        >
          <Linkedin size={17} fill="currentColor" strokeWidth={0} />
        </div>
      </div>

      {/* Info */}
      <div className="px-5 py-5 text-center bg-white flex flex-col gap-1.5">
        <h3
          className="font-black text-[#0f172a] tracking-tight leading-snug"
          style={{ fontSize: "clamp(15px, 1.3vw, 18px)", fontFamily: "'Satoshi', sans-serif" }}
        >
          {mentor.name}
        </h3>
      </div>
    </div>
  );
}

export default function TrainersSection() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);        // current translateX in px (always negative or 0)
  const rafRef = useRef(null);
  const pausedRef = useRef(false);    // true when hovered
  const easingRef = useRef(null);     // active easing job { startOffset, delta, startTime }
  const [cardWidth, setCardWidth] = useState(280);
  const containerRef = useRef(null);

  // Responsive card width
  const recalc = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    let ipv = 4;
    if (w < 500) ipv = 1;
    else if (w < 780) ipv = 2;
    else if (w < 1060) ipv = 3;
    const cw = (w - GAP * (ipv - 1)) / ipv;
    setCardWidth(cw);
  }, []);

  useEffect(() => {
    recalc();
    const ro = new ResizeObserver(recalc);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [recalc]);

  // Wrap offset to stay within [-setWidth, 0)
  const wrapOffset = useCallback((val) => {
    const setW = MENTORS.length * (cardWidth + GAP);
    let v = val;
    while (v <= -setW) v += setW;
    while (v > 0) v -= setW;
    return v;
  }, [cardWidth]);

  // Main RAF loop — handles both auto-scroll and easing
  useEffect(() => {
    if (!trackRef.current || cardWidth === 0) return;

    const loop = (timestamp) => {
      if (easingRef.current) {
        // --- Manual easing in progress ---
        const { startOffset, delta, startTime } = easingRef.current;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / EASE_DURATION, 1);
        const eased = easeInOutCubic(progress);
        offsetRef.current = wrapOffset(startOffset + delta * eased);

        if (progress >= 1) {
          easingRef.current = null; // done
        }
      } else if (!pausedRef.current) {
        // --- Auto-scroll ---
        offsetRef.current = wrapOffset(offsetRef.current - AUTO_SPEED);
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [cardWidth, wrapOffset]);

  // Manual step — kicks off an easing job (no CSS transition needed)
  const manualStep = useCallback((dir) => {
    const step = cardWidth + GAP;
    const startOffset = offsetRef.current;
    const delta = -dir * step;
    easingRef.current = { startOffset, delta, startTime: performance.now() };
  }, [cardWidth]);

  const NavBtn = ({ onClick, label, children }) => (
    <button
      onClick={onClick}
      aria-label={label}
      className="hidden lg:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-white border border-gray-200 text-[#0f172a]"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "background 0.2s, border-color 0.2s, color 0.2s" }}
      onMouseEnter={e => { e.currentTarget.style.background = "#ecab00"; e.currentTarget.style.borderColor = "#ecab00"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#0f172a"; }}
    >
      {children}
    </button>
  );

  return (
    <section
      className="relative w-full py-20 lg:py-28 overflow-hidden"
      style={{ background: "#FAFBFF", fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.025,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-20">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-100 mb-6"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#ecab00" }} />
            <GraduationCap size={14} strokeWidth={2.5} style={{ color: "#ecab00" }} />
            <span className="font-bold text-[#0f172a] uppercase tracking-widest" style={{ fontSize: "11px" }}>
              Expert Mentors
            </span>
          </div>

          <h2
            className="font-black text-[#0f172a] tracking-tighter leading-[1.1]"
            style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
          >
            Learn From Real{" "}
            <span className="relative inline-block" style={{ color: "#ecab00" }}>
              Industry Professionals.
              <span
                className="absolute -bottom-1.5 left-0 w-full rounded-full"
                style={{ height: "3px", background: "rgba(236,171,0,0.2)" }}
              />
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-4 lg:gap-6">
          <NavBtn onClick={() => manualStep(-1)} label="Previous">
            <ChevronLeft size={22} strokeWidth={1.8} />
          </NavBtn>

          <div
            ref={containerRef}
            className="flex-1 overflow-hidden"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            <div
              ref={trackRef}
              className="flex"
              style={{ gap: GAP, willChange: "transform" }}
            >
              {LOOPED.map((mentor, i) => (
                <MentorCard
                  key={`${mentor.name}-${i}`}
                  mentor={mentor}
                  cardWidth={cardWidth}
                />
              ))}
            </div>
          </div>

          <NavBtn onClick={() => manualStep(1)} label="Next">
            <ChevronRight size={22} strokeWidth={1.8} />
          </NavBtn>
        </div>

        {/* Mobile nav */}
        <div className="mt-8 flex lg:hidden items-center justify-center gap-4">
          <button
            onClick={() => manualStep(-1)}
            aria-label="Previous"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-200"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <ChevronLeft size={20} strokeWidth={1.8} />
          </button>
          <button
            onClick={() => manualStep(1)}
            aria-label="Next"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-200"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <ChevronRight size={20} strokeWidth={1.8} />
          </button>
        </div>

      </div>

      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap');
        * { box-sizing: border-box; }
      `}</style>
    </section>
  );
}