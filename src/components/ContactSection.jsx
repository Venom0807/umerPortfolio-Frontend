import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'umerPortfolio',         // ✅ Your actual Service ID
        'template_wbmofju',      // ✅ Your actual Template ID
        formRef.current,
        'P7hnPysi8M7p2_qUM'      // ✅ Your actual Public Key
      )
      .then(
        () => {
          setStatus('Message sent ✅');
          formRef.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('Failed to send ❌ - Please try again');
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="bg-cyan-300 text-black px-4 sm:px-8 md:px-16 py-12 sm:py-20 font-sans min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-2xl sm:max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal mb-6 sm:mb-10">Contact</h2>
        <p className="text-base sm:text-xl text-black mb-6 sm:mb-10">
          Interested in working together? Fill out the form below and I’ll get back to you!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-black text-black rounded-md outline-none text-base sm:text-lg"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-black text-black rounded-md outline-none text-base sm:text-lg"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-black text-black rounded-md outline-none text-base sm:text-lg"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-black text-black rounded-md outline-none text-base sm:text-lg"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:text-cyan-300 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <motion.p
            className="mt-4 text-xs sm:text-sm text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
