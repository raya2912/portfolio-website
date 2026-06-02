import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-slate-950/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Raya Das. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
