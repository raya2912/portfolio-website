import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-wider uppercase text-sm">Computer Science Engineer</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building <span className="gradient-text">AI-Powered</span><br/> Applications & Systems
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Computer Science Engineering student focused on building intelligent systems using Machine Learning, Deep Learning, Backend Development, and Modern Web Technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth={true} duration={500} className="btn-primary cursor-pointer">
              View Projects
            </Link>
            <a href="#" className="btn-outline">
              Download Resume
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <SocialIcon href="https://github.com/raya2912" icon={<FaGithub size={22} />} />
            <SocialIcon href="https://www.linkedin.com/in/raya-das-software-developer/" icon={<FaLinkedin size={22} />} />
            <SocialIcon href="https://leetcode.com/u/rayads2013/" icon={<SiLeetcode size={22} />} />
            <SocialIcon href="mailto:rayads2013@gmail.com" icon={<FaEnvelope size={22} />} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="w-80 h-80 rounded-full glass-card border-white/10 flex items-center justify-center relative overflow-hidden p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
            
            <div className="w-full h-full rounded-full overflow-hidden relative z-20 border-2 border-white/10 bg-slate-800 flex items-center justify-center">
               <img src="/profile.png" alt="Raya Das" className="w-full h-full object-cover" />
               <span className="text-slate-500 absolute text-sm text-center px-4 -z-10">Save your photo as 'profile.png' in the public folder</span>
            </div>
            
            <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_10s_linear_infinite] z-10 pointer-events-none"></div>
            <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] z-10 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform duration-300"
  >
    {icon}
  </a>
);

export default Hero;
