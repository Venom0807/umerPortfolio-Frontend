import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  'User Interface Design',
  'User Experience Research',
  'Wireframing & Prototyping',
  'Mobile App Design',
  'Website UI Design',
  'Design Systems & Style Guides',
];

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="bg-[#f1f4f6] text-black px-4 sm:px-8 md:px-16 font-sans min-h-screen flex flex-col justify-between py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col w-full h-full">
        {/* Top Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start flex-wrap mb-8 sm:mb-12 gap-4 sm:gap-0"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal mb-2 sm:mb-0">Services</h1>
          <p className="text-lg sm:text-2xl font-medium max-w-xs sm:max-w-sm mt-2 text-center sm:text-left">
            LET YOUR BRAND’S VISION<br />
            BECOME A REALITY.
          </p>
        </motion.div>

        {/* Services Buttons */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-24 md:mt-32 lg:mt-40"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.button
              key={index}
              className="bg-cyan-400 text-black font-medium text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-8 rounded-full flex justify-between items-center hover:bg-cyan-300 transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {service}
              <ArrowRight size={20} className="ml-3" />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
