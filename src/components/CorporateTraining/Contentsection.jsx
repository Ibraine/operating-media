import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, TrendingUp } from 'lucide-react';

export default function CorporateTrainingNew() {
  const features = [
    { icon: <Briefcase />, title: "Customized Modules", desc: "Tailored to suit your specific business needs." },
    { icon: <Clock />, title: "Flexible Timing", desc: "Weekdays and weekends availability." },
    { icon: <MapPin />, title: "Convenient Location", desc: "At your office or preferred location." },
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#fdfaf5] font-['Satoshi',sans-serif]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Header & Body */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-[#ECAB00]/10 text-[#ECAB00] font-bold text-sm uppercase tracking-widest rounded-full">
              Corporate Solutions
            </div>
            <h2 className="text-[40px] md:text-[52px] font-black text-[#0A0F1C] leading-[1.1]">
              Sharpen Your Team's <span className="text-[#ECAB00]">Digital Edge</span>
            </h2>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              If you are a corporate company and need to sharpen up the digital skills of your marketing or business team, we might be the perfect ones to partner with. Our Corporate Training Courses will help your employees expand their skill set regarding digital marketing and thus help you increase your business ROI while keeping a control on the training costs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#0A0F1C] p-8 md:p-10 rounded-[2rem] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ECAB00] rounded-full blur-[100px] -mr-16 -mt-16" />
            <TrendingUp className="text-[#ECAB00] mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Methodology</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Every corporate company needs an in-house team to manage their online marketing. We specialize in training your staff to effectively manage Digital Marketing Campaigns, focusing on practical experience and real-world optimization processes.
            </p>
          </motion.div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="w-14 h-14 bg-[#fdfaf5] text-[#ECAB00] flex items-center justify-center rounded-2xl mb-6 border border-[#ECAB00]/20">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-[#0A0F1C] mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-8 border-t border-gray-200"
        >
          <p className="text-gray-500 italic max-w-2xl mx-auto">
            "These programs are custom designed and focus mainly on practical experience, making your team understand the optimization process and speed up in various internet marketing fields."
          </p>
        </motion.div>

      </div>
    </section>
  );
}