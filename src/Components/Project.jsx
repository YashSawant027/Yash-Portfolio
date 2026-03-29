import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Sparkles, Activity, Play } from 'lucide-react';

// Assets
import energy from './ProjectAssets/EnergyTracker.png';
import ttt from './ProjectAssets/ttt.png';
import Queryla from './ProjectAssets/Queryla.png';
import medibot from './ProjectAssets/medibot.png';

const PROJECT_DATA = [
  {
    title: "Queryla",
    desc: "A full-stack NLP-to-SQL engine that translates natural language into optimized queries across MySQL, MongoDB, and PostgreSQL with dynamic data visualizations.",
    img: Queryla,
    live: "https://yashsawant027.github.io/Queryla2.0/",
    github: "https://github.com/YashSawant027/Queryla2.0",
    tags: ["React", "FastAPI", "LLM", "SQL/NoSQL"],
    icon: <Sparkles className="text-yellow-500" />
  },
  {
    title: "Doctor Bot",
    desc: "Multi-language AI medical assistant using Llama models. Supports transliterated text and provides safe medical precautions and professional health advice.",
    img: medibot,
    live: "https://medi-bot-7pwo.vercel.app/",
    github: "https://github.com/YashSawant027/MediBot",
    tags: ["LangChain", "Groq", "Python", "NLP"],
    icon: <Activity className="text-red-500" />
  },
  {
    title: "Energy Tracker",
    desc: "Household electricity estimator that analyzes consumption habits and provides AI-driven suggestions for energy efficiency and cost reduction.",
    img: energy,
    live: "https://yashsawant027.github.io/Energy-Tracker/",
    github: "https://github.com/YashSawant027/Energy-Tracker",
    tags: ["JavaScript", "CSS3", "Analysis"],
    icon: <Code2 className="text-blue-500" />
  },
  {
    title: "Tic Tac Toe",
    desc: "A refined take on the classic two-player game. Focuses on clean UI state management and responsive design principles.",
    img: ttt,
    live: "#",
    github: "https://github.com/YashSawant027/tic-tac-toe",
    tags: ["React", "State Logic"],
    icon: <Play className="text-emerald-500" />
  }
];

function Project() {
  return (
    <section className='bg-[#FDFDFD] py-24 w-full overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-6'>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h1 className='text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter mb-4'>
            Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 italic font-serif'>Works</span>
          </h1>
          <p className='text-slate-500 font-medium text-lg max-w-xl mx-auto'>
            A collection of full-stack applications and AI experiments focused on solving real-world data challenges.
          </p>
        </motion.div>

        {/* Project List: Staggered Layout */}
        <div className='space-y-32'>
          {PROJECT_DATA.map((proj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side with Decorative Background */}
              <div className='flex-1 relative group w-full'>
                <div className='absolute -inset-4 bg-slate-100 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-700 opacity-50' />
                <motion.div 
                  whileHover={{ y: -10 }}
                  className='relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100'
                >
                  <img src={proj.img} alt={proj.title} className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105' />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className='flex-1 space-y-6 text-left'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-slate-50 rounded-lg shadow-sm'>
                    {proj.icon}
                  </div>
                  <h2 className='text-3xl md:text-4xl font-black text-slate-900 tracking-tight'>
                    {proj.title}
                  </h2>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {proj.tags.map(tag => (
                    <span key={tag} className='text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className='text-lg md:text-xl text-slate-600 font-medium leading-relaxed'>
                  {proj.desc}
                </p>

                <div className='flex items-center gap-6 pt-4'>
                  <motion.a 
                    href={proj.live} 
                    target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-8 py-4 bg-yellow-400 text-slate-900 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-yellow-200 transition-all'
                  >
                    Live App <ExternalLink size={18} />
                  </motion.a>
                  
                  <motion.a 
                    href={proj.github} 
                    target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.1, color: "#000" }}
                    className='text-slate-400 transition-colors'
                  >
                    <Github size={30} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;