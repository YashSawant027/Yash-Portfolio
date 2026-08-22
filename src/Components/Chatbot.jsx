import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [input, setInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'SYSTEM INITIALIZED. How can I help you learn more about Yash Sawant?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const [bubbleText, setBubbleText] = useState('');
  const isInitialLoad = useRef(true);
  
  const targetText = isHovered ? "Click me!" : "Hey there!";

  useEffect(() => {
    if (!hasOpened && !isOpen) {
      let timeout;
      let interval;
      
      const typeText = () => {
        setBubbleText('');
        let i = 0;
        interval = setInterval(() => {
          setBubbleText(targetText.slice(0, i + 1));
          i++;
          if (i === targetText.length) {
            clearInterval(interval);
          }
        }, 50); 
      };

      if (isInitialLoad.current) {
        timeout = setTimeout(() => {
          typeText();
          isInitialLoad.current = false;
        }, 1400); // Waits for bubble to finish springing in
      } else {
        typeText();
      }

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [targetText, isOpen, hasOpened]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Mock API response delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "I am a mock response. Connect me to your FastAPI backend!" 
        }
      ]);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasOpened(true);
  };

  const WavingRobot = () => (
    <motion.svg 
      width="72" height="72" viewBox="0 0 60 60" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      style={{ overflow: 'visible', display: 'block' }}
      animate={{ y: [0, -3, 0] }} // Natural idle breathing
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      
      {/* Head (Static) */}
      <g>
        {/* Antenna */}
        <line x1="30" y1="14" x2="30" y2="6" strokeWidth="2" />
        <circle cx="30" cy="6" r="2.5" fill="var(--copper)" stroke="none" />
        
        {/* Ears */}
        <rect x="14" y="20" width="4" height="8" rx="1" fill="var(--paper)" strokeWidth="2" />
        <rect x="42" y="20" width="4" height="8" rx="1" fill="var(--paper)" strokeWidth="2" />

        {/* Head Base */}
        <rect x="18" y="14" width="24" height="20" rx="4" fill="var(--paper)" strokeWidth="2" />
        
        {/* Face Screen Inner */}
        <rect x="22" y="18" width="16" height="12" rx="2" fill="var(--ink)" stroke="none" opacity="0.05" />
        
        {/* Eyes (Static) */}
        <circle cx="26" cy="23" r="2" fill="var(--copper)" stroke="none" />
        <circle cx="34" cy="23" r="2" fill="var(--copper)" stroke="none" />
        
        {/* Speaker Mouth */}
        <line x1="28" y1="28" x2="32" y2="28" strokeWidth="1.5" />
      </g>

      {/* Neck */}
      <line x1="27" y1="34" x2="27" y2="38" strokeWidth="2" />
      <line x1="33" y1="34" x2="33" y2="38" strokeWidth="2" />

      {/* Body / Chest Plate */}
      <path d="M 18 38 L 42 38 L 38 52 L 22 52 Z" fill="var(--paper)" strokeWidth="2" />

      {/* Left Arm (Static) */}
      <path d="M 18 42 Q 10 46 12 54" strokeWidth="2" fill="none" />
      <circle cx="12" cy="54" r="2.5" fill="currentColor" stroke="none" />
      
      {/* Right Arm (Static) */}
      <path d="M 42 42 Q 52 38 52 28" strokeWidth="2" fill="none" />
      
      {/* Right Hand (Waving from the wrist) */}
      <motion.g 
        style={{ transformOrigin: '52px 28px' }}
        animate={{ rotate: [-20, 40, -20, 40, -20] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        {/* Wrist joint */}
        <circle cx="52" cy="28" r="1.5" fill="currentColor" stroke="none" />
        {/* Claw/Fingers */}
        <path d="M 49 27 Q 52 22 55 27" strokeWidth="2" fill="none" />
      </motion.g>
    </motion.svg>
  );

  return (
    <div className="chatbot-wrapper">
      {/* Speech Bubble */}
      {!isOpen && (
        <motion.div 
          className="robot-speech-bubble"
          onClick={toggleChat}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.4, type: 'spring' }}
        >
          {bubbleText}
        </motion.div>
      )}

      {/* Floating Animated Robot */}
      <motion.button
        className="chatbot-fab"
        onClick={toggleChat}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        title="Query Agent"
      >
        {isOpen ? (
          <div className="fab-close">
            <span style={{ fontSize: '24px', fontWeight: 300, lineHeight: 1 }}>×</span>
          </div>
        ) : (
          <WavingRobot />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chatbot-header">
              <div className="cb-logo">
                <span className="cb-dot"></span>
                <span>Yash_AI_Agent</span>
              </div>
              <div className="cb-status">STATUS: ONLINE</div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                  <div className="chat-bubble">
                    {msg.text}
                  </div>
                  <div className="chat-meta">
                    {msg.sender === 'bot' ? 'SYS' : 'USR'} — {new Date(msg.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="chat-message bot">
                  <div className="chat-bubble typing">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input-area" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Query system..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" disabled={!input.trim()}>
                SEND
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Chatbot;
