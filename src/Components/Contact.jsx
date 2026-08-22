import React from 'react';
import { motion } from 'framer-motion';

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

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="cross bl"></div><div className="cross br"></div>
      <div className="wrap">
        <motion.div 
          className="sec-head"
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}
        >
          <div>
            <div className="sec-num">04 — Contact</div>
            <h2 className="sec-title">Get in touch</h2>
          </div>
          <p className="sec-desc">Open to full-stack roles and freelance collaborations, starting immediately.</p>
        </motion.div>

        <motion.div 
          className="contact-layout"
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="contact-statement">Have a project<br />worth <span className="accent">building?</span></div>
            <div className="contact-cta">
              <a href="mailto:yashsawan70@gmail.com" className="btn-block solid">Email me directly</a>
            </div>
          </motion.div>

          <motion.div className="ledger" variants={fadeInUp}>
            <div className="ledger-row"><span className="ledger-label">Email</span><span className="ledger-value"><a href="mailto:yashsawan70@gmail.com">yashsawan70@gmail.com</a></span></div>
            <div className="ledger-row"><span className="ledger-label">Phone</span><span className="ledger-value"><a href="tel:+919082258820">+91 90822 58820</a></span></div>
            <div className="ledger-row"><span className="ledger-label">Location</span><span className="ledger-value">Mumbai, IN</span></div>
            <div className="ledger-row"><span className="ledger-label">Availability</span><span className="ledger-value" style={{color: 'var(--copper)'}}>Open to conversations</span></div>
            <div className="ledger-row"><span className="ledger-label">Elsewhere</span>
              <span className="ledger-value social">
                <a href="https://linkedin.com/in/YashSawant027" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/YashSawant027" target="_blank" rel="noopener noreferrer">GitHub</a>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
