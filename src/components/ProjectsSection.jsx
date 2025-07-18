import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectImages = [
  'project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg',
  'project5.jpg', 'project6.jpg', 'project7.jpg', 'project8.jpg',
  'project9.jpg', 'project10.jpg', 'project11.jpg', 'project12.jpg',
  'project13.jpg',
];

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <motion.section
      id="projects"
      className="bg-cyan-400 py-10 sm:py-16 md:py-20 px-2 sm:px-6 md:px-8 relative z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-6 sm:mb-10 md:mb-12 px-2">
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-black">Projects</h2>
        <div className="h-[2px] w-1/2 sm:w-2/3 bg-black mt-2" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {projectImages.map((image, index) => (
          <motion.img
            key={index}
            src={`/projects/${image}`}
            alt={`Project ${index + 1}`}
            className="object-cover w-full aspect-[3/4] rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(`/projects/${image}`)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Fullscreen Project"
              className="max-w-[95vw] max-h-[80vh] sm:max-w-[90vw] sm:max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;
