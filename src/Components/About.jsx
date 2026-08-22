import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

function About() {
  return (
    <>
      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <motion.div 
            className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <div>
              <div className="sec-num">01 — Profile</div>
              <h2 className="sec-title">About</h2>
            </div>
            <p className="sec-desc">Building scalable digital products with a focus on clean architecture and seamless user experiences.</p>
          </motion.div>

          <div className="about-layout">
            <motion.div 
              className="about-copy"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            >
              <p>I'm Yash, a <span className="u">BSc IT graduate</span> based in Mumbai, specialising in responsive interfaces and AI-powered web applications.</p>
              <p>I'm experienced in integrating <strong>Large Language Models</strong> with modern frameworks like <strong>FastAPI</strong> and <strong>React</strong> — passionate about production-ready solutions built on RAG architectures, SQL/NoSQL databases, and clean, testable code.</p>
              <p>An experienced full-stack developer with hands-on industry experience, always open to conversations about interesting problems and ambitious teams.</p>

              <div className="metrics">
                <div className="metric"><div className="n">10+</div><div className="l">Projects Shipped</div></div>
                <div className="metric"><div className="n">A</div><div className="l">Performance Grade</div></div>
                <div className="metric"><div className="n">1+</div><div className="l">Years Experience</div></div>
              </div>
            </motion.div>

            <motion.div 
              className="stack-list"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="stack-group">
                <div className="stack-group-head"><h4>Frontend</h4><span>04</span></div>
                <div className="stack-items">
                  <div className="stack-item">React.js</div><div className="stack-item">Tailwind CSS</div><div className="stack-item">Framer Motion</div><div className="stack-item">HTML5 &amp; CSS3</div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="stack-group">
                <div className="stack-group-head"><h4>Backend &amp; AI</h4><span>05</span></div>
                <div className="stack-items">
                  <div className="stack-item">Python</div><div className="stack-item">Django</div><div className="stack-item">FastAPI</div><div className="stack-item">LangChain</div><div className="stack-item">Groq / Llama 3</div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="stack-group">
                <div className="stack-group-head"><h4>Data, Tools &amp; DevOps</h4><span>05</span></div>
                <div className="stack-items">
                  <div className="stack-item">SQL</div><div className="stack-item">PostgreSQL</div><div className="stack-item">.NET</div><div className="stack-item">CI/CD</div><div className="stack-item">Git</div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="stack-group" style={{borderBottom: 'none'}}>
                <div className="stack-group-head"><h4>Education</h4><span>—</span></div>
                <div className="ledger-row" style={{padding: '0 0 12px'}}><span className="ledger-label">BSc IT</span><span className="ledger-value" style={{fontSize: '14px'}}>Bhavan's College · 2023–2026 · CGPA 7.5</span></div>
                <div className="ledger-row" style={{padding: '0 0 12px', borderBottom: 'none'}}><span className="ledger-label">HSC — Commerce</span><span className="ledger-value" style={{fontSize: '14px'}}>Valia College · 2023 · 87%</span></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section tight" id="experience" style={{background: 'var(--paper-2)', paddingTop: '0'}}>
        <div className="wrap">
          <motion.div 
            className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <div>
              <div className="sec-num">02 — Experience</div>
              <h2 className="sec-title">Where I've worked</h2>
            </div>
            <p className="sec-desc">From internship to current role — hands-on across the stack.</p>
          </motion.div>

          <motion.div 
            className="exp-list"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="exp-row is-current">
              <span className="exp-dot"></span>
              <div>
                <span className="exp-period">2025 — Present</span>
                <div className="exp-role">AI &amp; Full-Stack Developer</div>
                <div className="exp-org">BDO — one of the Big 5 professional services firms</div>
                <p className="exp-desc">Building and maintaining AI-integrated full-stack applications, working across React frontends and Python/FastAPI backends within a professional services environment.</p>
              </div>
              <div className="exp-tag live">Current role</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="exp-row">
              <span className="exp-dot"></span>
              <div>
                <span className="exp-period">2024 — 2025 · 6 months</span>
                <div className="exp-role">Full-Stack Developer — Intern</div>
                <div className="exp-org">Pestact Services</div>
                <p className="exp-desc">Contributed across the stack on production features, gaining hands-on experience with real-world development workflows, code reviews, and shipping to users.</p>
              </div>
              <div className="exp-tag">Internship</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;