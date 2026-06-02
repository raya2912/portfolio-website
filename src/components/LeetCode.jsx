import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

const LeetCode = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-1 rounded-3xl bg-gradient-to-br from-[#FFA116]/20 to-[#FFA116]/5"
        >
          <div className="bg-slate-900 rounded-[1.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFA116] blur-[50px] opacity-20 rounded-full"></div>
                <div className="w-40 h-40 rounded-full border-4 border-[#FFA116]/30 flex items-center justify-center relative z-10 bg-slate-800 shadow-2xl">
                  <SiLeetcode size={80} color="#FFA116" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Algorithms & Data Structures
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Consistent problem-solving with a focus on writing optimized, scalable code. 
                Actively preparing for technical interviews and expanding algorithmic knowledge.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="text-[#FFA116] font-bold text-2xl">Consistent</span>
                  <span className="text-slate-400 text-sm">Problem Solver</span>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="text-white font-bold text-2xl">Daily</span>
                  <span className="text-slate-400 text-sm">Active Learner</span>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://leetcode.com/u/rayads2013/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFA116] text-black font-bold hover:bg-[#ffb03a] transition-colors"
                >
                  <SiLeetcode /> View LeetCode Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCode;
