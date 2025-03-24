'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Home() {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("V1TTX1gsWhW4b2fWZQ0DN");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Amruta',
    };

    try {
      console.log('Sending email with params:', templateParams);
      const result = await emailjs.send(
        'service_02g9amm',
        'template_trc6fgc',
        templateParams,
        '_DRUOn_9kJl1FJBu3'
      );

      console.log('Email sent successfully:', result);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again or email directly to cyberclub1815@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden py-12"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-gray-900"></div>
        <div className="text-center z-10 flex flex-col items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 relative w-40 h-40 md:w-48 md:h-48"
          >
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
              <Image
                src="public/logo.png"
                alt="Amruta Logo"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400"
          >
            AMRUTA ARUN PATIL
          </motion.h1>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-purple-200 mb-6 font-light"
          >
            Executive Assistant
          </motion.h2>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <a 
              href="tel:9019830514" 
              className="flex items-center gap-2 px-6 py-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-200 hover:bg-purple-500/20 transition-all duration-300"
            >
              <FaPhone className="text-purple-400" /> 
              <span>9019830514</span>
            </a>
            <a 
              href="mailto:pamruta981@gmail.com" 
              className="flex items-center gap-2 px-6 py-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-200 hover:bg-purple-500/20 transition-all duration-300"
            >
              <FaEnvelope className="text-purple-400" /> 
              <span>Email Me</span>
            </a>
            <span 
              className="flex items-center gap-2 px-6 py-3 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-200"
            >
              <FaMapMarkerAlt className="text-purple-400" /> 
              <span>Garvebhavipalya</span>
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Summary Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800/50 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">ABOUT ME</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            A motivated young professional from a small town, driven by a passion to learn and grow. 
            Currently thriving in customer care, with strong communication and technical skills, and 
            aiming to advance her career in HR. Known for her dedication, adaptability, and eagerness 
            to continuously expand her skill set, she is committed to making a meaningful impact in 
            her professional journey.
          </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-900/50 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">EDUCATION</h2>
          <div className="space-y-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white">Government Polytechnic College Joida</h3>
              <p className="text-gray-300">Diploma in Computer science and engineering</p>
              <p className="text-purple-400">2021 - 2024</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white">Government High School, Belgaum</h3>
              <p className="text-gray-300">Karnataka Secondary Education Examination Board (SSLC)</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Experience Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800/50 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">PROFESSIONAL EXPERIENCE</h2>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 p-6 rounded-lg mb-8 backdrop-blur-lg border border-purple-500/20"
          >
            <h3 className="text-xl font-bold text-white">Customer Care Executive</h3>
            <p className="text-purple-400">ICICI Prudential Life Insurance | 2024 - Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Consistently achieves a 90+ quality score for exceptional service</li>
              <li>Handles customer calls with confidence and professionalism</li>
              <li>Resolves inquiries quickly and effectively, ensuring customer satisfaction</li>
              <li>Maintains accurate records of interactions to support service quality</li>
              <li>Proficient in CRM tools and customer service best practices</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
          >
            <h3 className="text-xl font-bold text-white">Internship Experience</h3>
            <p className="text-purple-400">Spark Minda Pvt Ltd Mysore | 2024</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Successfully completed training in Cloud Computing Technology</li>
              <li>Demonstrated high standard of performance and commitment</li>
              <li>Known for positive attitude and sincerity towards tasks</li>
              <li>Recognized for dedication and proactive approach</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-900/50 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <p className="text-gray-300">Hindi, English, Kannada, and Marathi</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
              <p className="text-gray-300">Excel, HTML, CSS</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Communication</h3>
              <p className="text-gray-300">Clear and confident in handling customer interactions</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Organizational</h3>
              <p className="text-gray-300">Skilled in managing tasks efficiently with attention to detail</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800/50 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">CONTACT ME</h2>
          {success && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 h-32"
                required
                disabled={loading}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900/80 text-gray-300 py-8 px-4 text-center backdrop-blur-lg">
        <p>© 2024 Amruta Arun Patil. All rights reserved.</p>
      </footer>
    </main>
  );
} 
