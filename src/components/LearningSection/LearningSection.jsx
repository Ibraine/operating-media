import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// ── Priority students come first, rest follow ──
const BASE_VIDEOS = [
  { id: "I2xj4eIsVP8", name: "Dhanshree" },
  { id: "ltYRY5hYgoM", name: "Bhavini" },
  { id: "ootRcNXIW9g", name: "Himanshi" },
  { id: "z5PQNWYtgs8", name: "Pranav" },
  { id: "MFGeJ-_aYoQ", name: "Aryan Jain" },
  { id: "7jMBE5Yrqgk", name: "Gauri" },
  { id: "e86nFlOC7f8", name: "Javal Desai" },
  { id: "Vy1Ei-US_r8", name: "Shantanu" },
  { id: "GlvxX861O8Y", name: "Pooja Verma" },
  { id: "LtZpNs7XiCc", name: "Haldi Padiyar" },
  { id: "hAjwmJ-t82U", name: "Monali" },
  { id: "kl8XbbODq8M", name: "Haransh" },
  { id: "oBM0j4dRM8E", name: "Sharanya" },
  { id: "k6xWMghXaAA", name: "Aman" },
  { id: "npF34n65GV8", name: "Prachi" },
  { id: "eRqK9oHb7IQ", name: "Dakshna" },
].map(v => ({
  ...v,
  thumb: `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
  thumbFallback: `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`,
  url: `https://www.youtube.com/shorts/${v.id}`,
}));

// Triple for seamless infinite loop
const LOOPED = [...BASE_VIDEOS, ...BASE_VIDEOS, ...BASE_VIDEOS];

const CARD_W = 220;
const GAP    = 20;
const SPEED  = 0.6; // px per frame
const ONE_SET = BASE_VIDEOS.length * (CARD_W + GAP);

// ── Video Modal ──
function VideoModal({ video, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(20px)",
        padding: "32px 16px",
      }}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          height: "100%",
          aspectRatio: "9/16",
          maxHeight: "88vh",
          borderRadius: 28,
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 0 80px rgba(236,171,0,0.18), 0 0 0 1px rgba(236,171,0,0.2)",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0&playsinline=1`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: "none" }}
        />
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 12, right: 12, zIndex: 50,
            width: 38, height: 38, borderRadius: "50%",
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#ecab00"; e.currentTarget.style.color = "#0A0F1C"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.6)"; e.currentTarget.style.color = "#fff"; }}
        >
          <X size={18} strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Single Card ──
function ShortsCard({ video, onPlay }) {
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc]   = useState(video.thumb);
  const timerRef = useRef(null);

  const enter = () => { timerRef.current = setTimeout(() => setHovered(true), 300); };
  const leave = () => { clearTimeout(timerRef.current); setHovered(false); };

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => onPlay(video)}
      style={{ flexShrink: 0, width: CARD_W, cursor: "pointer" }}
    >
      <div
        style={{
          width: CARD_W,
          aspectRatio: "9/16",
          borderRadius: 22,
          overflow: "hidden",
          position: "relative",
          background: "#0d1220",
          border: hovered ? "1.5px solid rgba(236,171,0,0.5)" : "1.5px solid rgba(255,255,255,0.07)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: hovered
            ? "0 24px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(236,171,0,0.12)"
            : "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Thumbnail */}
        <img
          src={imgSrc}
          alt={video.name}
          onError={() => setImgSrc(video.thumbFallback)}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}
        />

        {/* Hover preview iframe */}
        {hovered && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&playsinline=1`}
            title="preview"
            allow="autoplay; encrypted-media"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              border: "none", pointerEvents: "none",
              transform: "scale(1.02)",
            }}
          />
        )}

        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10,
          background: "linear-gradient(to bottom, transparent 38%, rgba(8,12,24,0.97) 100%)",
        }} />

        {/* Shorts badge */}
        <div style={{
          position: "absolute", top: 12, left: 12, zIndex: 20,
          display: "flex", alignItems: "center", gap: 5,
          background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
          padding: "4px 10px", borderRadius: 99,
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: "#ecab00", flexShrink: 0 }}>
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.27l-1.2-.5 1.05-.93c1.3-1.17 1.72-2.96 1.12-4.53-.6-1.56-2.1-2.58-3.8-2.58H13.8c-1.5 0-2.9.8-3.5 2.15L8.03 8.7l1.2.5-1.05.93c-1.3 1.17-1.72 2.96-1.12 4.53.6 1.56 2.1 2.58 3.8 2.58h1.16c1.5 0 2.9-.8 3.5-2.15l2.26-4.7z"/>
          </svg>
          <span style={{ color: "#fff", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Shorts
          </span>
        </div>

        {/* Play button */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 20,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.25s ease",
          pointerEvents: "none",
        }}>
          <div style={{
            width: 50, height: 50, borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Play size={20} style={{ color: "#fff", fill: "#fff", marginLeft: 3 }} />
          </div>
        </div>

        {/* Name + label */}
        <div style={{ position: "absolute", bottom: 16, left: 14, right: 14, zIndex: 20 }}>
          <p style={{
            color: "#fff", fontWeight: 800, fontSize: 16,
            fontFamily: "'Satoshi', sans-serif",
            letterSpacing: "-0.01em", margin: 0, lineHeight: 1.2,
            textShadow: "0 1px 8px rgba(0,0,0,0.7)",
          }}>
            {video.name}
          </p>
          <div style={{ width: 26, height: 3, background: "#ecab00", borderRadius: 99, margin: "7px 0 5px" }} />
          <p style={{
            color: "rgba(255,255,255,0.45)", fontSize: 9, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            fontFamily: "'Satoshi', sans-serif", margin: 0,
          }}>
            Success Story
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──
export default function StudentShorts() {
  const trackRef  = useRef(null);
  const offsetRef = useRef(0);
  const rafRef    = useRef(null);
  const pausedRef = useRef(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Inject Satoshi font
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // RAF infinite scroll loop
  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        offsetRef.current -= SPEED;
        // When one full set has scrolled, silently reset
        if (Math.abs(offsetRef.current) >= ONE_SET) {
          offsetRef.current += ONE_SET;
        }
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Manual step — one card width with smooth transition then back to RAF
  const manualStep = (dir) => {
    if (!trackRef.current) return;
    offsetRef.current -= dir * (CARD_W + GAP);
    if (Math.abs(offsetRef.current) >= ONE_SET) offsetRef.current += ONE_SET;
    if (offsetRef.current > 0) offsetRef.current -= ONE_SET;
    trackRef.current.style.transition = "transform 0.35s ease";
    trackRef.current.style.transform  = `translateX(${offsetRef.current}px)`;
    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = "none";
    }, 360);
  };

  const NavBtn = ({ dir, label, children }) => (
    <button
      onClick={() => manualStep(dir)}
      aria-label={label}
      style={{
        position: "absolute",
        [dir === -1 ? "left" : "right"]: 8,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 30,
        width: 48, height: 48, borderRadius: "50%",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background   = "#ecab00";
        e.currentTarget.style.borderColor  = "#ecab00";
        e.currentTarget.style.color        = "#0A0F1C";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background   = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor  = "rgba(255,255,255,0.12)";
        e.currentTarget.style.color        = "#fff";
      }}
    >
      {children}
    </button>
  );

  return (
    <>
      <section style={{
        position: "relative", width: "100%",
        padding: "80px 0 100px",
        background: "#0A0F1C",
        overflow: "hidden",
        fontFamily: "'Satoshi', sans-serif",
      }}>
        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        {/* Glows */}
        <div style={{ position: "absolute", top: "-5%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,171,0,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,171,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 10 }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56, padding: "0 24px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 18px", borderRadius: 99,
              border: "1px solid rgba(236,171,0,0.3)",
              background: "rgba(236,171,0,0.08)", marginBottom: 20,
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecab00" }}>
                Hear From Achievers
              </span>
            </div>
            <h2 style={{
              fontWeight: 900, color: "#fff",
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px",
            }}>
              Student <span style={{ color: "#ecab00" }}>Success Stories</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.5)", fontSize: 15, fontWeight: 500,
              maxWidth: 480, margin: "0 auto", lineHeight: 1.6,
            }}>
              Hover for a quick preview, or click to watch the full journey.
            </p>
          </div>

          {/* Carousel */}
          <div style={{ position: "relative", padding: "0 72px" }}>
            <NavBtn dir={-1} label="Previous"><ChevronLeft size={22} strokeWidth={2} /></NavBtn>

            {/* Overflow hidden wrapper — gives 16px vertical room for shadows */}
            <div style={{ overflow: "hidden", padding: "16px 0 24px" }}>
              <div
                ref={trackRef}
                onMouseEnter={() => { pausedRef.current = true; }}
                onMouseLeave={() => { pausedRef.current = false; }}
                style={{
                  display: "flex",
                  gap: GAP,
                  willChange: "transform",
                  // No transition here — RAF drives it; manualStep sets it temporarily
                }}
              >
                {LOOPED.map((video, i) => (
                  <ShortsCard key={`${video.id}-${i}`} video={video} onPlay={setActiveVideo} />
                ))}
              </div>
            </div>

            <NavBtn dir={1} label="Next"><ChevronRight size={22} strokeWidth={2} /></NavBtn>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}