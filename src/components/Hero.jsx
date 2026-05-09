import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImage from '/sakshi-profile.jpg';

const Hero = () => {
  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '15+', label: 'Skills' },
    { number: '100%', label: 'Passion' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                AVAILABLE FOR NEW CHALLENGES
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="gradient-text">Sakshi</span>
              <br />
              <span className="text-4xl md:text-6xl">AI-Augmented</span>
              <br />
              <span className="text-4xl md:text-6xl">Software Engineer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build intelligent products, scalable full-stack systems, and modern user experiences powered by AI.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="premium-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <FaArrowRight />
              </motion.a>
              <motion.a
                href="/Sakshi_Patel_CV.docx"
                download="Sakshi_Patel_CV.docx"
                className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full text-gray-300 hover:border-primary hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src="/profile.jpg"
                  alt="Sakshi Patel"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/sakshi/400/400.jpg`;
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                AI Engineer
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                Full Stack
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
