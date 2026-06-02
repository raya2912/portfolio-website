import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 rounded-3xl border border-white/10 bg-slate-900/50"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm actively looking for Software Engineering, Backend Development, Full Stack Development, and AI/ML opportunities. My inbox is always open.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:rayads2013@gmail.com" className="btn-primary flex items-center gap-3 text-lg px-8 py-4">
              <FaEnvelope /> rayads2013@gmail.com
            </a>
            
            <div className="flex items-center gap-4 ml-0 md:ml-4">
              <SocialLink href="https://www.linkedin.com/in/raya-das-software-developer/" icon={<FaLinkedin size={24} />} />
              <SocialLink href="https://github.com/raya2912" icon={<FaGithub size={24} />} />
              <SocialLink href="https://leetcode.com/u/rayads2013/" icon={<SiLeetcode size={24} />} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Contact;
