import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Award, Target, Rocket } from 'lucide-react';

export default function NewCareerAdvantage() {
  const careerPaths = [
    { title: "Entry to Mid-Level", roles: ["Digital Marketing Executive", "SEO Specialist", "Social Media Executive", "Email Marketing Specialist", "Content Marketing Specialist"] },
    { title: "Specialist & Management", roles: ["Head of Digital Marketing", "VP of Marketing", "Chief Marketing Officer (CMO)", "Growth Marketing Manager", "Web Analytics Specialist"] },
    { title: "Leadership & Strategic", roles: ["Digital Marketing Strategist", "Product Marketing Manager", "Affiliate Marketing Manager", "Head of E-commerce", "PPC / Performance Specialist"] }
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#FCFAF2] font-['Satoshi',sans-serif]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-[32px] md:text-[50px] font-black text-[#0A0F1C] leading-[1.1] mb-6">
                The Operating Media <br />
                <span className="text-[#ECAB00]">Career Advantage</span>
              </h2>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                We don’t just teach; we prepare you for the real world. With over 15 years of expertise and 16,000+ professionals trained, our programs are designed to bridge the gap between classroom learning and agency-level execution.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-[#0A0F1C] text-white rounded-2xl">
                <Rocket size={24} className="text-[#ECAB00] mb-2" />
                <span className="text-[12px] font-bold uppercase tracking-widest">15+ Years</span>
              </div>
              <div className="p-4 bg-[#0A0F1C] text-white rounded-2xl">
                <Award size={24} className="text-[#ECAB00] mb-2" />
                <span className="text-[12px] font-bold uppercase tracking-widest">16k+ Alumni</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Paths Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {careerPaths.map((path, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:border-[#ECAB00]/50 transition-colors shadow-sm group"
            >
              <h3 className="text-[18px] font-black text-[#0A0F1C] mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
                <Target size={20} className="text-[#ECAB00]" />
                {path.title}
              </h3>
              <ul className="space-y-4">
                {path.roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00]" />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center p-8 bg-[#0A0F1C] rounded-[2rem] text-white">
          <TrendingUp className="mx-auto mb-4 text-[#ECAB00]" size={32} />
          <p className="text-[18px] font-bold">
            Digital marketing is a vast field with diverse opportunities. Depending on your program, you can aim for these high-growth roles.
          </p>
        </div>

      </div>
    </section>
  );
}