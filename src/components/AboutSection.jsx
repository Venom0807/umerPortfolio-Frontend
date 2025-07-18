import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Replace with your image

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#f1f4f6] text-black px-4 sm:px-8 md:px-16 py-12 sm:py-20 font-sans"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal mb-8 sm:mb-12 leading-tight">
            About<br />Umer Usman
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl text-gray-800 leading-relaxed mb-4 sm:mb-6">
            Aside from designing, Umer also finds time to enjoy nature where he gets
            fresh inspiration for future projects.
          </p>

          <div className="w-20 sm:w-32 h-[3px] bg-cyan-400 mb-4 sm:mb-6" />

          {/* Download CV Button */}
          <a
            href="/Umer-Usman-CV.pdf"
            download
            className="inline-flex items-center bg-cyan-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-black hover:text-white transition w-fit"
          >
            Download CV
          </a>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex flex-col gap-6 sm:gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-800 leading-relaxed">
            Umer Usman is a multidisciplinary designer with a passion for brand
            storytelling. He creates compelling visual experiences through graphic
            design, brand strategy, website development, and video production.
          </p>

          <img
            src={profileImage}
            alt="Umer Usman"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg object-cover grayscale rounded-xl mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
