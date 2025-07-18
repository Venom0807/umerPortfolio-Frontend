import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Make sure this is your updated logo image
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  return (
    <motion.section
      className="bg-black min-h-screen text-cyan-400 font-sans relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Top Section: Logo, Name, and Slogan */}
      <motion.div
        className="absolute top-6 inset-x-4 sm:inset-x-8 md:inset-x-12 lg:inset-x-16 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex items-center space-x-3 sm:space-x-6">
          <img src={logo} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Umer Usman</h1>
        </div>
        <div className="mt-2 sm:mt-0 w-full sm:w-auto text-center sm:text-right">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-normal tracking-wide">
            DESIGN<br />THE FUTURE
          </p>
        </div>
      </motion.div>

      {/* Center Tagline */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
<TypeAnimation
  sequence={[
    'Turning Ideas into Intuitive Designs.', 
    3000,                                   
    '',                                     
    1000                                    
  ]}
  wrapper="span"
  speed={40}
  style={{ fontSize: '1.5rem', textAlign: 'center' }}
  className="text-cyan-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
  repeat={Infinity}
/>
      </motion.div>

      {/* Main Title */}
      <motion.div
        className="absolute bottom-24 left-4 sm:bottom-32 sm:left-8 md:left-12 lg:left-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1]">
          CREATIVE<br />PORTFOLIO
        </h2>
      </motion.div>

      {/* Arrow Button */}
      <motion.div
        className="absolute bottom-20 right-4 sm:bottom-32 sm:right-8 md:right-12 lg:right-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <button
  onClick={() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="border-4 border-cyan-400 rounded-full px-6 py-3 sm:px-10 sm:py-5 flex items-center hover:bg-cyan-400 hover:text-black transition"
>
  <ArrowRight size={32} />
</button>
      </motion.div>

      {/* Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[6px] sm:h-[10px] md:h-[12px] bg-cyan-400 "
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.section>
  );
};

export default LandingPage;
