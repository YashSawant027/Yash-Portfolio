import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import yash from './New folder/yash2.png';

function Nav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
      {/* --- Main Floating Pill Container --- */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-4xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] rounded-full px-5 py-3 flex items-center justify-between pointer-events-auto"
      >
        {/* Logo Section */}
        <Link to="home" smooth={true} className="flex items-center gap-3 cursor-pointer group">
          <img 
            src={yash} 
            alt="Yash" 
            className="w-9 h-9 rounded-full border border-yellow-400 object-cover" 
          />
          <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            YS<span className="text-yellow-500">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                smooth={true}
                spy={true}
                offset={-150}
                activeClass="bg-yellow-400 !text-white shadow-md shadow-yellow-100"
                className="px-5 py-2 rounded-full text-[14px] font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
           <Link to="contact" smooth={true} className="px-6 py-2.5 bg-slate-900 text-white text-[12px] font-bold uppercase tracking-wider rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 cursor-pointer">
              Let's Talk
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-black transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="absolute top-[80px] left-6 right-6 bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl md:hidden pointer-events-auto"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    /* FIXED MOBILE STYLING: font-bold instead of font-black */
                    className="text-2xl font-bold text-slate-900 tracking-tight block py-2 hover:text-yellow-500 transition-colors active:scale-95 duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;