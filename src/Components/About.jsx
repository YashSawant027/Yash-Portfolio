import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, Heart } from 'lucide-react';

// Keep your imports as they are
import javaScript from './AboutAssets/js-official-svgrepo-com.svg';
import html from './AboutAssets/html-5-svgrepo-com.svg';
import cssimg from './AboutAssets/css-svgrepo-com.svg';
import reactimg from './AboutAssets/react-svgrepo-com.svg';
import pythonimg from './AboutAssets/python-svgrepo-com.svg';
import gitimg from './AboutAssets/git-branch-svgrepo-com.svg';
import mongoimg from './AboutAssets/mongo-svgrepo-com.svg';
import django from './AboutAssets/django.svg';
import mysql from './AboutAssets/mysql.svg';
import postgresql from './AboutAssets/postgresql.svg';
import Tailwindcss from './AboutAssets/Tailwindcss.svg';
import Fastapi from './AboutAssets/Fastapi.svg';

function About() {
  const skills = [
    { img: reactimg, label: "React", color: "text-cyan-500" },
    { img: pythonimg, label: "Python", color: "text-blue-500" },
    { img: django, label: "Django", color: "text-emerald-700" },
    { img: Fastapi, label: "FastAPI", color: "text-teal-500" },
    { img: Tailwindcss, label: "Tailwind", color: "text-sky-400" },
    { img: postgresql, label: "PostgreSQL", color: "text-indigo-500" },
    { img: mysql, label: "MySQL", color: "text-blue-600" },
    { img: mongoimg, label: "MongoDB", color: "text-green-500" },
    { img: gitimg, label: "Git", color: "text-orange-600" },
    { img: javaScript, label: "JS", color: "text-yellow-500" },
  ];

  return (
    <section className='bg-[#FDFDFD] w-full py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mb-20'
        >
          <div className='flex items-center gap-2 mb-4'>
            <span className='w-8 h-[2px] bg-yellow-400'></span>
            <span className='text-xs font-black uppercase tracking-[0.3em] text-slate-400'>Portfolio v2.0</span>
          </div>
          <h1 className='text-6xl md:text-8xl font-[900] text-slate-900 tracking-tighter leading-none mb-8'>
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 italic font-serif font-light'>Me</span>
          </h1>
          <p className='text-xl md:text-2xl text-slate-500 font-medium leading-relaxed'>
            Building scalable digital products with a focus on clean architecture and seamless user experiences.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
          
          {/* Left Side: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-7 space-y-8'
          >
            <h2 className='text-3xl font-black text-slate-900 flex items-center gap-3'>
              <Code2 className='text-yellow-500' /> Get to know me!
            </h2>
            
            <div className='space-y-6 text-lg text-slate-600 leading-relaxed font-medium'>
              <p>
                I’m Yash, a <span className='text-slate-900 font-bold underline decoration-yellow-400 decoration-4 underline-offset-4'>Full-Stack Web Developer</span> based in Mumbai. I specialize in building high-performance backend systems and responsive frontend applications.
              </p>
              <p>
                Whether it's designing efficient APIs with <span className='text-slate-900 font-semibold'>FastAPI/Django</span> or crafting fluid interfaces with <span className='text-slate-900 font-semibold'>React</span>, I thrive on solving complex technical challenges.
              </p>
              <p>
                I’m actively seeking opportunities to contribute to innovative teams. If you're looking for a developer who values <span className='italic font-serif'>scalability</span> and <span className='italic font-serif'>usability</span>, let's connect.
              </p>
            </div>

            
          </motion.div>

          {/* Right Side: Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-5'
          >
            <h2 className='text-3xl font-black text-slate-900 mb-8 flex items-center gap-3'>
              <Rocket className='text-yellow-500' /> Technical Arsenal
            </h2>
            
            <div className='flex flex-wrap gap-3'>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className='flex items-center gap-3 bg-white border border-slate-100 px-5 py-4 rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all cursor-default group hover:border-yellow-200'
                >
                  <img src={skill.img} alt={skill.label} className='w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all' />
                  <span className={`font-bold text-sm tracking-tight ${skill.color}`}>{skill.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Interest Bento Card */}
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;