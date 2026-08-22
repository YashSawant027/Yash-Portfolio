import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

function Project() {
  return (
    <section className="section roomy" id="work" style={{background: 'var(--paper-2)'}}>
      <div className="wrap">
        <motion.div 
          className="sec-head"
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
        >
          <div>
            <div className="sec-num">03 — Archive</div>
            <h2 className="sec-title">Selected work</h2>
          </div>
          <p className="sec-desc">Four projects where I owned the architecture end to end, from schema to screen.</p>
        </motion.div>

        <div className="work-list">
          <motion.div 
            className="work-row"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
          >
            <div className="work-num">01</div>
            <div className="work-content">
              <div className="work-meta-top"><span className="work-year">2025</span><span className="work-status">LLM · RAG</span></div>
              <h3 className="work-title">LLM-Powered Database Query App</h3>
              <p className="work-desc">Architected a microservices backend using Django for secure authentication and FastAPI for high-performance, asynchronous AI processing. Integrated LangChain NLP so non-technical users can query databases in plain English instead of SQL, with a responsive React frontend delivering instant query rendering across all devices.</p>
              <div className="work-tags"><span>React</span><span>Django</span><span>FastAPI</span><span>Groq</span><span>Llama 3</span></div>
            </div>
            <div className="work-links">
              <a href="https://yashsawant027.github.io/Queryla2.0/" target="_blank" rel="noopener noreferrer">Live demo <i>↗</i></a>
              <a href="https://github.com/YashSawant027/Queryla2.0" target="_blank" rel="noopener noreferrer">GitHub <i>↗</i></a>
            </div>
          </motion.div>

          <motion.div 
            className="work-row"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
          >
            <div className="work-num">02</div>
            <div className="work-content">
              <div className="work-meta-top"><span className="work-year">2025</span><span className="work-status">Computer Vision</span></div>
              <h3 className="work-title">NutriScan — AI Nutritional Analysis System</h3>
              <p className="work-desc">Engineered a real-time barcode scanning platform with a React frontend and FastAPI microservice for instant nutritional insights. Integrated Llama 3 via the Groq API for ultra-fast ingredient analysis, flagging additives and suggesting healthier alternatives, backed by a PostgreSQL schema for auth and persistent scan history.</p>
              <div className="work-tags"><span>React</span><span>FastAPI</span><span>Groq</span><span>Llama 3</span><span>PostgreSQL</span></div>
            </div>
            <div className="work-links">
              <a href="https://nutriscan-one-027.vercel.app" target="_blank" rel="noopener noreferrer">Live demo <i>↗</i></a>
              <a href="https://github.com/YashSawant027/NutriScan" target="_blank" rel="noopener noreferrer">GitHub <i>↗</i></a>
            </div>
          </motion.div>

          <motion.div 
            className="work-row"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
          >
            <div className="work-num">03</div>
            <div className="work-content">
              <div className="work-meta-top"><span className="work-year">2024</span><span className="work-status">Conversational AI</span></div>
              <h3 className="work-title">Doctor Bot — Health &amp; Fitness Chatbot</h3>
              <p className="work-desc">Developed a health chatbot delivering accurate fitness and medical suggestions from user queries. Leveraged LangChain RAG to keep responses contextually relevant and grounded, with strict safety guardrails ensuring only safe, evidence-based advice is ever provided.</p>
              <div className="work-tags"><span>React</span><span>FastAPI</span><span>LangChain</span><span>Groq</span></div>
            </div>
            <div className="work-links">
              <a href="https://github.com/YashSawant027/MediBot" target="_blank" rel="noopener noreferrer">Live demo <i>↗</i></a>
              <a href="https://github.com/YashSawant027/MediBot" target="_blank" rel="noopener noreferrer">GitHub <i>↗</i></a>
            </div>
          </motion.div>

          <motion.div 
            className="work-row"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
          >
            <div className="work-num">04</div>
            <div className="work-content">
              <div className="work-meta-top"><span className="work-year">2023</span><span className="work-status">Data Visualisation</span></div>
              <h3 className="work-title">Energy Tracker Application</h3>
              <p className="work-desc">Built a web app for tracking daily electricity usage and identifying consumption patterns. Wrote comprehensive unit tests to guarantee the accuracy of usage calculations and reports, with a clean dashboard and data-visualisation graphs for intuitive energy monitoring.</p>
              <div className="work-tags"><span>React</span><span>Tailwind CSS</span></div>
            </div>
            <div className="work-links">
              <a href="https://yashsawant027.github.io/Energy-Tracker/" target="_blank" rel="noopener noreferrer">Live demo <i>↗</i></a>
              <a href="https://github.com/YashSawant027/Energy-Tracker" target="_blank" rel="noopener noreferrer">GitHub <i>↗</i></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Project;