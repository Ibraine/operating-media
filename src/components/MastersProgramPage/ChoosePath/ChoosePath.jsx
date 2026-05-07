import React from 'react';
import DownloadBrochure from "../../Navbar/DownloadBrochure";

export default function CourseSelection() {
  return (
    <section className="relative w-full bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white">
      
      {/* ── MAIN CONTAINER (Responsive Spacing: 40px, 50px, 60px) ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-10 md:py-[50px] lg:py-[60px]">
        
        {/* ── FULL WIDTH HEADER ── */}
        <div className="w-full mb-10 lg:mb-12">
          <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.2] tracking-tight mb-4">
            Choose your path. <span className="text-[#ECAB00]">Digital Marketing</span> in both. Business Strategy in one.
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium">
           Choose the program that matches your career goals — become a skilled digital marketer or step into leadership with advanced business strategy and AI-driven marketing expertise.
          </p>
        </div>

        {/* ── CARDS GRID (Reduced Height/Padding) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: PGDBS (Dark Navy Background #0f172a) */}
          <div className="relative bg-[#0f172a] text-white rounded-[1.5rem] p-6 lg:p-8 border border-[#0f172a] shadow-[0_15px_40px_-10px_rgba(15,23,42,0.25)] hover:shadow-[0_20px_50px_-10px_rgba(15,23,42,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block bg-[#ECAB00] text-[#0f172a] font-bold text-[13px] uppercase tracking-wide px-4 py-1.5 rounded-full">
                Digital Marketing
              </span>
            </div>

            {/* Title & Duration */}
            <h3 className="font-black text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] mb-2">
             Lead the Future of Digital Business
            </h3>
            <p className="text-gray-300 font-medium text-[15px] mb-5 pb-5 border-b border-white/10">
              Learning Duration: 8 Months
            </p>

            {/* List */}
            <ul className="space-y-3.5 flex-1">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2 shrink-0" />
                <p className="text-[15px] leading-relaxed text-gray-300">
                  <span className="font-bold text-white">Live Ad Campaign Execution: </span> Run real Google & Meta ad campaigns with practical budget handling experience.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2 shrink-0" />
                <p className="text-[15px] leading-relaxed text-gray-300">
                  <span className="font-bold text-white">AI-Driven Marketing Strategy:</span> Learn how modern brands use AI tools for automation, targeting, and growth.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2 shrink-0" />
                <p className="text-[15px] leading-relaxed text-gray-300">
                  <span className="font-bold text-white">Ecommerce & Marketplace Training:</span> Build online stores and learn product listing on platforms like Amazon & Flipkart.
                </p>
              </li>
            </ul>
          </div>

          {/* CARD 2: PGDM (White Background) */}
          <div className="relative bg-white text-[#0f172a] rounded-[1.5rem] p-6 lg:p-8 border border-gray-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#0f172a]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col">
            
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block border border-[#0f172a] text-[#0f172a] bg-gray-50 font-bold text-[13px] uppercase tracking-wide px-4 py-1.5 rounded-full">
               Digital Marketing
              </span>
            </div>

            {/* Title & Duration */}
            <h3 className="font-black text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] mb-2">
              Why Students Choose Operating Media
            </h3>
            <p className="text-gray-600 font-medium text-[15px] mb-5 pb-5 border-b border-gray-100">
              Gain practical skills, certifications, live project experience, and career-focused mentorship with Operating Media.
            </p>

            {/* List */}
            <ul className="space-y-3.5 flex-1">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 shrink-0" />
                <p className="text-[15px] leading-relaxed text-gray-600">
                  <span className="font-bold text-[#0f172a]">120+ Marketing & AI Tools:</span> Work with industry tools used for automation, analytics, design, and performance marketing.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 shrink-0" />
                <p className="text-[15px] leading-relaxed text-gray-600">
                  <span className="font-bold text-[#0f172a]">100% Placement Assistance:</span> Receive interview preparation, portfolio guidance, and career support.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 shrink-0" />
                <p className="text-[15px] leading-relaxed text-gray-600">
                  <span className="font-bold text-[#0f172a]">0% EMI Available:</span> Affordable payment options designed for students and working professionals.
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM CTA BANNER (Dark Navy Background #0f172a) ── */}
        <div className="mt-8 lg:mt-10 w-full bg-[#0f172a] rounded-[1.25rem] p-6 md:p-8 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.25)] border border-white/5">
          <div className="max-w-2xl">
            <h4 className="font-black text-[20px] md:text-[24px] text-white leading-[1.2] mb-2">
              Your career in digital marketing and business starts here.
            </h4>
            <p className="text-gray-400 text-[15px] md:text-[16px] font-medium">
              Everything you need to make your decision in one brochure.
            </p>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
             {/* Styling wrapper for DownloadBrochure to fit the dark banner */}
             <div className="bg-white text-[#0f172a] hover:bg-[#ECAB00] transition-colors duration-300 rounded-xl px-8 py-3.5 font-bold text-[15px] flex items-center justify-center cursor-pointer shadow-md active:scale-95">
                <DownloadBrochure />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}