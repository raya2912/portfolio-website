import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '4+' },
  { label: 'Conference Presentations', value: '1' },
  { label: 'Highest Model Accuracy', value: '85%' },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 text-center hover:-translate-y-2"
            >
              <h4 className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</h4>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
