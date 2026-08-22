import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from './Components/NavBar/Nav';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project';
import Chatbot from './Components/Chatbot';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

function GridBackground() {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });

  React.useEffect(() => {
    const updateGrid = () => {
      // Add a few extra rows/cols to ensure it covers the screen fully
      const cols = Math.ceil(window.innerWidth / 64) + 1;
      const rows = Math.ceil(window.innerHeight / 64) + 1;
      setGridSize({ rows, cols });
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  // Initial random sparkle animation on load
  React.useEffect(() => {
    if (gridSize.rows === 0) return;
    
    const totalCells = gridSize.rows * gridSize.cols;
    
    // Run the sparkle effect for the first 2 seconds
    const interval = setInterval(() => {
      const cells = document.querySelectorAll('.grid-cell');
      const numCells = Math.floor(Math.random() * 5) + 2; // Pick 2 to 6 random cells
      
      for (let i = 0; i < numCells; i++) {
        const randomIdx = Math.floor(Math.random() * totalCells);
        const cell = cells[randomIdx];
        
        if (cell) {
          cell.classList.add('active');
          // Remove the active class after a random short duration (simulating quick hovers)
          setTimeout(() => {
            if (cell) cell.classList.remove('active');
          }, Math.random() * 400 + 200);
        }
      }
    }, 100); 

    // Stop after 2 seconds
    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, [gridSize]);

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden flex flex-wrap"
      style={{
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 90%)'
      }}
    >
      {Array.from({ length: gridSize.rows * gridSize.cols }).map((_, i) => (
        <div key={i} className="grid-cell" />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <div className="grain"></div>
      <Nav />
      
      {/* HERO */}
      <section className="hero">
        <GridBackground />
        <div className="cross tl"></div><div className="cross tr"></div>
        <motion.div 
          className="wrap hero-body"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="coord">AI &amp; Full-Stack Developer — Mumbai, India</motion.div>
          <motion.h1 variants={fadeInUp} className="hero-head one-line">YASH <span className="line2">SAWANT</span></motion.h1>
          <motion.div variants={fadeInUp} className="hero-annotate">
            <div className="leader"></div>
            <p><strong>AI &amp; Full-Stack Developer</strong> engineering intelligent systems. I specialize in integrating advanced <strong>LLMs</strong> and custom <strong>RAG pipelines</strong> into fast, highly scalable web applications.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="hero-actions">
            <a href="#work" className="btn-block solid">View selected work</a>
            <a href="https://drive.google.com/file/d/1QJs2MciWbyQfTh97YI5di4xhSggDHFD9/view?usp=drive_link" className="btn-block outline" target="_blank" rel="noreferrer">Download résumé</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="title-block wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="tb-row">
            <div className="tb-cell"><div className="tb-label">Subject</div><div className="tb-value">Yash Sawant</div></div>
            <div className="tb-cell"><div className="tb-label">Discipline</div><div className="tb-value">AI &amp; Full-Stack Dev</div></div>
            <div className="tb-cell"><div className="tb-label">Primary stack</div><div className="tb-value">React / FastAPI</div></div>
            <div className="tb-cell"><div className="tb-label">Status</div><div className="tb-value" style={{color: 'var(--copper)'}}>● Experienced</div></div>
            <div className="tb-cell"><div className="tb-label">Revision</div><div className="tb-value">v2.0 — 2026</div></div>
          </div>
        </motion.div>
      </section>

      <About />
      <Project />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
