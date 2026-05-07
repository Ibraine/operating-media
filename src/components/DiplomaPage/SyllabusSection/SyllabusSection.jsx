import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

// ── DATA — Diploma curriculum in 7 modules, every module has 2-3 subtopics ──
const modulesData = [
    {
        id: "01",
        title: "Digital Marketing Foundations",
        desc: "Core concepts and fundamentals every digital marketer must know.",
        subtopics: [
            {
                title: "Digital Marketing Basics",
                desc: "Scope of digital marketing, assessing various digital channels, fundamentals of marketing, paid media portals and networks, social media platforms, importance of SEO rankings, marketing strategies, and web analytics basics.",
            },
            {
                title: "Marketing Strategies & Channels",
                desc: "How paid, owned, and earned media channels work together. Aligning digital marketing efforts with business goals, assessing channel performance, and building integrated marketing strategies across platforms.",
            },
        ],
    },
    {
        id: "02",
        title: "Website Creation & Landing Pages",
        desc: "Build professional websites and high-converting landing pages.",
        subtopics: [
            {
                title: "Website Creation on WordPress",
                desc: "Introduction to WordPress, installation and settings, dashboard and user management, links structure, contact form and themes, plugins management, slider customization, and import and export of website.",
            },
            {
                title: "Landing Page Design using Elementor",
                desc: "Introduction to landing pages and their importance in marketing, designing high-converting pages, Elementor basics, designing layouts, widgets customization, conversion optimization, email integrations, analytics and tracking, social proof, publishing, and analysis.",
            },
        ],
    },
    {
        id: "03",
        title: "Analytics & Tag Management",
        desc: "Measure performance, track conversions, and manage tags with precision.",
        subtopics: [
            {
                title: "Google Analytics 4",
                desc: "Introduction and installing analytics code, account administration and campaign tracking, goals, cookies and filters in Google Analytics, advanced segmentation and internal site search, event tracking and virtual pageviews, e-commerce and revenue tracking, page-views, traffic source and visitors, and content, conversion and e-commerce reports.",
            },
            {
                title: "Webmaster Tools (Google Search Console)",
                desc: "Introduction to webmaster tools, setting up Search Console, verifying website ownership, basic dashboard navigation, performance reports — clicks, impressions, CTR and position, URL inspection tool, index coverage report, sitemaps and robots.txt, mobile usability, structured data and enhancements, security and manual actions, and link reports and backlinks.",
            },
            {
                title: "Google Tag Manager",
                desc: "Overview of GTM, tags, triggers and variables, GTM setup, installing GTM, tag implementation, custom HTML and JS tags, e-commerce tracking, third-party integrations, and GDPR compliance.",
            },
        ],
    },
    {
        id: "04",
        title: "Search Engine Marketing (SEM)",
        desc: "Drive targeted traffic and leads through Google paid search campaigns.",
        subtopics: [
            {
                title: "Search Engine Marketing (SEM)",
                desc: "Google Ads basics, campaign structure, keyword research, ad copywriting, bidding strategies, quality score, campaign optimization, remarketing, budget management, and advanced SEM techniques.",
            },
            {
                title: "Google Ads Campaign Optimisation",
                desc: "Optimising live Google Ads campaigns — improving quality scores, refining keyword match types, setting up remarketing lists, using bid adjustments, and applying advanced techniques to lower cost-per-click and increase conversions.",
            },
        ],
    },
    {
        id: "05",
        title: "Social Media Marketing",
        desc: "Grow your brand organically and through paid campaigns across all major platforms.",
        subtopics: [
            {
                title: "Social Media Marketing (Organic)",
                desc: "Understanding platforms, creating business pages, posting strategies, growing followers, best practices, audience insights, viral marketing, hashtags, content strategy, and case studies.",
            },
            {
                title: "Social Media Advertising",
                desc: "Ads on Meta, Instagram, Twitter, LinkedIn and YouTube — ads account setup, pixel setup, campaign types, targeting strategies, ad formats and video ads, bidding and budget, campaign optimization, and reporting.",
            },
        ],
    },
    {
        id: "06",
        title: "YouTube Advertising",
        desc: "Leverage YouTube's ad platform to reach and convert your ideal audience.",
        subtopics: [
            {
                title: "YouTube Advertising",
                desc: "Channel creation and setup, analytics setup, conversion tracking, video optimization, audience targeting, keyword research, retargeting ads, scaling campaigns, and competitor analysis.",
            },
            {
                title: "Video Campaign Strategy & Formats",
                desc: "Plan and structure YouTube ad campaigns — choose between skippable, non-skippable, bumper and discovery ad formats. Learn audience targeting, video bidding strategies, brand awareness vs. conversion objectives, and how to analyse video performance metrics.",
            },
        ],
    },
    {
        id: "07",
        title: "Performance & Reporting",
        desc: "Tie all channels together with data-driven reporting and performance analysis.",
        subtopics: [
            {
                title: "Cross-Channel Performance Reporting",
                desc: "Combine data from Google Analytics 4, Search Console, Google Ads, and social platforms to build unified performance reports. Understand attribution models, interpret traffic sources, measure ROI across channels, and present insights to stakeholders.",
            },
            {
                title: "Conversion Tracking & Optimisation",
                desc: "Set up conversion tracking across Google Ads, Meta Ads, and GTM. Track leads, purchases, and micro-conversions. Use data to identify drop-off points, run A/B tests on landing pages, and continuously improve campaign performance.",
            },
        ],
    },
];

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function SyllabusSection() {
    const [activeModule, setActiveModule] = useState(0);
    const [activeSubtopic, setActiveSubtopic] = useState(0);
    const [mobileStep, setMobileStep] = useState(0);

    const mod = modulesData[activeModule];
    const sub = mod.subtopics[activeSubtopic];

    return (
        <section
            className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-14 bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden"
            aria-label="Diploma Syllabus"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0 animate-pulse-slow" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">

                {/* ── HEADER ── */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Diploma Curriculum</span>
                        </div>
                        <h2 className="font-black text-[30px] sm:text-[36px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-5">
                            Industry-Approved{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Syllabus & 7 Modules
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-[15px] md:text-[17px] font-medium text-gray-600 leading-relaxed">
                            From SEO fundamentals to paid social advertising — 7 modules covering every aspect of modern digital marketing.
                        </p>
                    </motion.div>
                </div>

                {/* ── DESKTOP: 3-panel ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                    className="hidden md:grid md:grid-cols-[220px_1fr_1.6fr] lg:grid-cols-[248px_1fr_1.6fr] rounded-[1.75rem] overflow-hidden border border-gray-200 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.12)] bg-white"
                >
                    {/* LEFT — dark sidebar */}
                    <div className="border-r border-white/10 overflow-y-auto max-h-[560px] custom-scroll bg-[#0f172a]">
                        <div className="px-4 pt-5 pb-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25 mb-4 px-2">7 Modules</p>
                        </div>
                        <div className="px-3 pb-5 flex flex-col gap-0.5">
                            {modulesData.map((m, i) => {
                                const isActive = activeModule === i;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => { setActiveModule(i); setActiveSubtopic(0); }}
                                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group relative"
                                        style={{ background: isActive ? 'rgba(236,171,0,0.12)' : 'transparent' }}
                                    >
                                        {isActive && (
                                            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(236,171,0,0.3)' }} />
                                        )}
                                        <span
                                            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-[11px] transition-all duration-200"
                                            style={{
                                                background: isActive ? '#ECAB00' : 'rgba(255,255,255,0.07)',
                                                color: isActive ? '#0f172a' : 'rgba(255,255,255,0.3)',
                                            }}
                                        >
                                            {m.id}
                                        </span>
                                        <span
                                            className="font-bold text-[12.5px] leading-snug flex-1 transition-colors duration-200"
                                            style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.4)' }}
                                        >
                                            {m.title}
                                        </span>
                                        {isActive && <ChevronRight size={12} className="text-[#ECAB00] shrink-0" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* MIDDLE — subtopics */}
                    <div className="border-r border-gray-100 overflow-y-auto max-h-[560px] custom-scroll bg-white">
                        <div className="sticky top-0 z-10 px-5 py-4 border-b border-gray-100 bg-[#FAFCFF]">
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#ECAB00] bg-[#ECAB00]/10 border border-[#ECAB00]/20 px-2.5 py-1 rounded-full mb-2">
                                {mod.id} · {mod.subtopics.length} Topics
                            </span>
                            <p className="font-black text-[14.5px] text-[#0f172a] leading-snug">{mod.title}</p>
                        </div>
                        <div className="p-3 flex flex-col gap-0.5">
                            {mod.subtopics.map((s, i) => {
                                const isActive = activeSubtopic === i;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setActiveSubtopic(i)}
                                        className="w-full flex items-start gap-3 px-3.5 py-3 rounded-xl text-left transition-all duration-200"
                                        style={{
                                            backgroundColor: isActive ? 'rgba(236,171,0,0.08)' : 'transparent',
                                            border: isActive ? '1px solid rgba(236,171,0,0.2)' : '1px solid transparent',
                                        }}
                                    >
                                        <span
                                            className="shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-200"
                                            style={{
                                                borderColor: isActive ? '#ECAB00' : '#e5e7eb',
                                                background: isActive ? '#ECAB00' : 'transparent',
                                            }}
                                        >
                                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                        </span>
                                        <span
                                            className="font-semibold text-[14.5px] leading-snug transition-colors duration-200"
                                            style={{ color: isActive ? '#0f172a' : '#6b7280' }}
                                        >
                                            {s.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT — content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeModule}-${activeSubtopic}`}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="overflow-y-auto max-h-[560px] custom-scroll flex flex-col bg-white"
                        >
                            <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-[#ECAB00] to-[#ECAB00]/20" />

                            <div className="p-6 lg:p-8 flex-1">
                                {/* Breadcrumb */}
                                <div className="flex items-center gap-1.5 mb-5">
                                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">{mod.id}</span>
                                    <ChevronRight size={10} className="text-gray-200" />
                                    <span className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-widest">
                                        Topic {activeSubtopic + 1} of {mod.subtopics.length}
                                    </span>
                                </div>

                                {/* Heading */}
                                <h3 className="font-black text-[22px] lg:text-[24px] text-[#0f172a] leading-[1.2] tracking-tight mb-1">
                                    {sub.title}
                                </h3>
                                <div className="h-[3px] w-10 rounded-full bg-[#ECAB00] mb-4" />

                                {/* Description */}
                                <p className="text-[15.5px] lg:text-[16.5px] font-medium text-gray-500 leading-relaxed mb-6 pb-6 border-b border-gray-100">
                                    {sub.desc}
                                </p>

                                {/* Also in this module */}
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 mb-3">
                                    Also in this Module
                                </p>
                                <div className="flex flex-col gap-2">
                                    {mod.subtopics
                                        .filter((_, idx) => idx !== activeSubtopic)
                                        .slice(0, 4)
                                        .map((related, ri) => (
                                            <div key={ri} className="flex items-start gap-3 px-3.5 py-2.5 rounded-xl bg-[#ECAB00]/6 border border-[#ECAB00]/12">
                                                <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#ECAB00]" />
                                                <span className="text-[13.5px] font-medium text-gray-600 leading-snug">{related.title}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* ── MOBILE: 3-step ── */}
                <div className="md:hidden">

                    {/* Step 0 — Module list */}
                    {mobileStep === 0 && (
                        <div className="flex flex-col gap-2.5">
                            {modulesData.map((m, i) => (
                                <motion.button
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.04 }}
                                    onClick={() => { setActiveModule(i); setActiveSubtopic(0); setMobileStep(1); }}
                                    className="w-full flex items-center gap-3.5 px-4 py-4 rounded-2xl bg-white border border-gray-200 text-left shadow-sm active:scale-[0.98] transition-all duration-200"
                                >
                                    <span className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-[13px] bg-[#0f172a] text-[#ECAB00]">
                                        {m.id}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-black text-[14px] text-[#0f172a] leading-tight">{m.title}</p>
                                        <p className="text-[11px] font-medium text-[#ECAB00] mt-0.5">{m.subtopics.length} topics</p>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300 shrink-0" />
                                </motion.button>
                            ))}
                        </div>
                    )}

                    {/* Step 1 — Subtopics */}
                    {mobileStep === 1 && (
                        <AnimatePresence mode="wait">
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                                <button onClick={() => setMobileStep(0)} className="flex items-center gap-2 text-[13px] font-bold text-gray-400 mb-5 hover:text-gray-600 transition-colors">
                                    <ArrowLeft size={15} /> Back to Modules
                                </button>

                                <div className="rounded-2xl overflow-hidden mb-4 border border-[#ECAB00]/25 shadow-sm">
                                    <div className="h-1 bg-gradient-to-r from-[#ECAB00] to-[#ECAB00]/30" />
                                    <div className="px-5 py-4 bg-[#ECAB00]/6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#ECAB00] block mb-1">{mod.id} — {mod.subtopics.length} topics</span>
                                        <p className="font-black text-[16px] text-[#0f172a] leading-tight">{mod.title}</p>
                                        <p className="text-[13px] font-medium text-gray-500 mt-1">{mod.desc}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {mod.subtopics.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => { setActiveSubtopic(i); setMobileStep(2); }}
                                            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-left shadow-sm active:scale-[0.98] transition-all"
                                        >
                                            <span className="shrink-0 w-2 h-2 rounded-full bg-[#ECAB00]" />
                                            <p className="flex-1 font-semibold text-[13px] text-gray-700 leading-snug">{s.title}</p>
                                            <ChevronRight size={14} className="text-gray-300 shrink-0" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {/* Step 2 — Content */}
                    {mobileStep === 2 && (
                        <AnimatePresence mode="wait">
                            <motion.div key={`m${activeModule}s${activeSubtopic}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                                <button onClick={() => setMobileStep(1)} className="flex items-center gap-2 text-[13px] font-bold text-gray-400 mb-5 hover:text-gray-600 transition-colors">
                                    <ArrowLeft size={15} /> Back to {mod.title}
                                </button>

                                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                                    <div className="h-[3px] bg-gradient-to-r from-[#ECAB00] to-[#ECAB00]/20" />
                                    <div className="p-5">
                                        <div className="flex items-center gap-1.5 mb-3">
                                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{mod.id}</span>
                                            <ChevronRight size={10} className="text-gray-200" />
                                            <span className="text-[10px] font-bold text-[#ECAB00] uppercase tracking-widest">Topic {activeSubtopic + 1}</span>
                                        </div>
                                        <h3 className="font-black text-[17px] text-[#0f172a] leading-snug mb-1">{sub.title}</h3>
                                        <div className="h-[3px] w-8 rounded-full bg-[#ECAB00] mb-4" />
                                        <p className="text-[14px] font-medium text-gray-500 leading-relaxed mb-5 pb-5 border-b border-gray-100">{sub.desc}</p>

                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-3">Also in this Module</p>
                                        <div className="flex flex-col gap-2 mb-1">
                                            {mod.subtopics.filter((_, idx) => idx !== activeSubtopic).slice(0, 4).map((related, ri) => (
                                                <div key={ri} className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#ECAB00]/6 border border-[#ECAB00]/12">
                                                    <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-[#ECAB00]" />
                                                    <span className="text-[12px] font-medium text-gray-600 leading-snug">{related.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>

                {/* ── BOTTOM CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 flex flex-col items-center text-center"
                >
                    <p className="font-medium text-[15px] text-gray-500 mb-5">
                        Want the complete curriculum with all topics?
                    </p>
                </motion.div>
            </div>

            <style>{`
        .animate-pulse-slow {
          animation: pulseGlow 8s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.1); }
        }
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 99px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #ECAB00; }
      `}</style>
        </section>
    );
}