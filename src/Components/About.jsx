import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faHtml5, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { Database, Wind, Zap, Code, Brain, Server, Terminal, Settings, Network } from 'lucide-react';

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

function About() {
  return (
    <>
      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <motion.div
            className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
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
              initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
            >
              <p>I'm Yash, a <span className="u">BSc IT graduate</span> based in Mumbai, specialising in responsive interfaces and AI-powered web applications.</p>
              <p>I'm experienced in integrating <strong>Large Language Models</strong> using <strong>Python</strong> and modern frameworks like <strong>LangChain</strong> and <strong>.NET</strong> — passionate about production-ready solutions built on RAG architectures, SQL/NoSQL databases, and clean, testable code.</p>
              <p>An experienced full-stack developer with hands-on industry experience, always open to conversations about interesting problems and ambitious teams.</p>

              <div className="metrics">
                <div className="metric"><div className="n">10+</div><div className="l">Projects Shipped</div></div>
                <div className="metric"><div className="n">A</div><div className="l">Performance Grade</div></div>
                <div className="metric"><div className="n">1+</div><div className="l">Years Experience</div></div>
              </div>
            </motion.div>

            <motion.div
              className="stack-list"
              initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer}
            >
              <div className="stack-group">
                <motion.div variants={fadeInUp} className="stack-group-head"><h4>Frontend</h4><span>04</span></motion.div>
                <div className="stack-items">
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faReact} /> React.js</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Wind size={15} /> Tailwind CSS</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Zap size={15} /> Framer Motion</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faHtml5} /> HTML5 &amp; CSS3</motion.div>
                </div>
              </div>
              <div className="stack-group">
                <motion.div variants={fadeInUp} className="stack-group-head"><h4>Backend &amp; AI</h4><span>05</span></motion.div>
                <div className="stack-items">
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faPython} /> Python</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Zap size={15} /> FastAPI</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Code size={15} /> LangChain</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Network size={15} /> LangGraph</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Brain size={15} /> Groq / Llama 3</motion.div>
                </div>
              </div>
              <div className="stack-group">
                <motion.div variants={fadeInUp} className="stack-group-head"><h4>Data, Tools &amp; DevOps</h4><span>05</span></motion.div>
                <div className="stack-items">
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Database size={15} /> SQL</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Database size={15} /> PostgreSQL</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Terminal size={15} /> .NET</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Settings size={15} /> CI/CD</motion.div>
                  <motion.div variants={fadeInUp} className="stack-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faGitAlt} /> Git</motion.div>
                </div>
              </div>
              <div className="stack-group" style={{ borderBottom: 'none' }}>
                <motion.div variants={fadeInUp} className="stack-group-head"><h4>Education</h4><span>—</span></motion.div>
                <motion.div variants={fadeInUp} className="ledger-row" style={{ padding: '0 0 12px' }}><span className="ledger-label">BSc IT</span><span className="ledger-value" style={{ fontSize: '14px' }}>Bhavan's College · 2023–2026 · Grade A</span></motion.div>
                <motion.div variants={fadeInUp} className="ledger-row" style={{ padding: '0 0 12px', borderBottom: 'none' }}><span className="ledger-label">HSC — Commerce</span><span className="ledger-value" style={{ fontSize: '14px' }}>Valia College · 2023 · 87%</span></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section tight" id="experience" style={{ background: 'var(--paper-2)', paddingTop: '0' }}>
        <div className="wrap">
          <motion.div
            className="sec-head"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
          >
            <div>
              <div className="sec-num">02 — Experience</div>
              <h2 className="sec-title">Where I've worked</h2>
            </div>
            <p className="sec-desc">From internship to current role — hands-on across the stack.</p>
          </motion.div>

          <motion.div
            className="exp-list"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="exp-row is-current">
              <span className="exp-dot"></span>
              <div>
                <span className="exp-period">2026 — Present</span>
                <div className="exp-role">AI &amp; Full-Stack Developer</div>
                <div className="exp-org">BDO — one of the Big 5 professional services firms</div>
                <p className="exp-desc">Building and maintaining AI-integrated full-stack applications and automations, working across .NET and Python/FastAPI backends within a professional services environment.</p>
              </div>
              <div className="exp-tag live">Current role</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="exp-row">
              <span className="exp-dot"></span>
              <div>
                <span className="exp-period">2025 — 2026 · 6 months</span>
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