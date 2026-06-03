import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

const Research = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Research</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-1 md:p-1 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30"
        >
          <div className="bg-slate-950/90 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-12 h-full flex flex-col md:flex-row gap-8 items-center border border-white/5">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <FaBookOpen size={48} />
              </div>
            </div>
            <div className="w-full md:w-3/4 space-y-4">
              <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30 mb-2">
                Presented Paper
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Emotify: Design of Multimodal Emotion Detection System
              </h3>
              <p className="text-primary font-medium">
                3rd International Conference on Computational Applied Sciences and its Applications (ICCASA 2025)
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Co-authored and presented a research paper proposing a multimodal deep learning architecture combining CNN and BiLSTM networks for emotion recognition. (Currently undergoing publication process)
              </p>
              <div className="pt-4">
                <button disabled className="btn-primary inline-block opacity-75 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
