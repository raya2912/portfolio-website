import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Multimodal Emotion Detection System",
    description: "Built an end-to-end multimodal AI application integrating facial emotion recognition and speech emotion recognition.",
    tech: ["Python", "PyTorch", "ResNet-50", "BiLSTM", "Streamlit"],
    achievements: [
      "Achieved 85% classification accuracy",
      "Improved performance by 25% over unimodal baselines",
      "Developed a real-time prediction interface using Streamlit"
    ],
    github: "https://github.com/raya2912/multimodal-emotion-recognition",
    // demo: "#"
  },
  {
    title: "Ad Campaign Analytics Dashboard",
    description: "Developed a full-stack analytics platform for tracking CTR, ROAS, ad spend, and campaign performance metrics.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    achievements: [
      "Built scalable backend APIs",
      "Optimized PostgreSQL queries",
      "Implemented testing workflows using Postman and STLC principles"
    ],
    github: "https://github.com/raya2912/Ad-Campaign-Dashboard",
    // demo: "#"
  },
  {
    title: "AI-Powered Newsletter Generator",
    description: "Built an automated newsletter generation platform using third-party API integrations.",
    tech: ["Node.js", "Express.js", "REST APIs"],
    achievements: [
      "Automated newsletter workflows",
      "Implemented asynchronous API processing",
      "Improved reliability with structured error handling"
    ],
    github: "https://github.com/raya2912/MCP-server",
    // demo: "#"
  },
  {
    title: "Bank Loan Prediction System",
    description: "Built a machine learning application for loan approval prediction.",
    tech: ["Python", "Scikit-Learn", "Random Forest", "Logistic Regression", "Streamlit"],
    achievements: [
      "Achieved 83% validation accuracy",
      "Performed model tuning and evaluation",
      "Deployed using Streamlit"
    ],
    github: "https://github.com/raya2912/Bank_loan_Prediction_System",
    // demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col h-full group"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6">{project.description}</p>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  <FaGithub className="mr-2" size={18} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
