import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="gradient-text">Education</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="bg-primary/20 p-4 rounded-full text-primary">
              <FaGraduationCap size={40} />
            </div>
            
            <div className="text-center md:text-left space-y-3 flex-grow">
              <h3 className="text-2xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
              <p className="text-xl text-primary font-medium">Computer Science and Engineering</p>
              <p className="text-slate-300 text-lg">University of Engineering and Management, Jaipur</p>
            </div>
            
            <div className="bg-white/10 px-6 py-2 rounded-full text-white font-bold tracking-wider self-center md:self-start border border-white/20">
              Class of 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
