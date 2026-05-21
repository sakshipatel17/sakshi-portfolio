import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImage from '/sakshi-profile.jpg';
import RoleAnimator from './ui/RoleAnimator';

const Hero = () => {
  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '15+', label: 'Skills' },
    { number: '100%', label: 'Passion' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 10% 10%, rgba(139,92,246,0.06), transparent 10%), radial-gradient(ellipse at 90% 90%, rgba(59,130,246,0.04), transparent 15%)'
        }}
        animate={{ opacity: [0, 0.9, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div className="inline-block mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="bg-white/3 text-accent px-4 py-2 rounded-full text-sm font-medium border border-white/6">
                AVAILABLE FOR ROLES & COLLABORATIONS
              </span>
            </motion.div>

            {/* Static greeting, name, and animated role */}
            <div>
              <motion.p className="text-zinc-500 text-sm uppercase tracking-widest font-mono mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                Hello, I'm
              </motion.p>

              <motion.h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} viewport={{ once: true }}>
                Sakshi Patel
              </motion.h1>

              <RoleAnimator />

              <motion.p className="text-lg text-gray-400 mb-8 max-w-lg mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                Building AI-powered, scalable full-stack digital experiences with production-grade execution.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a href="#projects" className="bg-accent text-dark px-6 py-3 rounded-full font-semibold flex items-center gap-3 shadow-sm" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View Projects
                <FaArrowRight />
              </motion.a>

              <motion.button
                type="button"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                aria-label="Scroll to contact section"
                className="border border-white/10 text-gray-200 px-6 py-3 rounded-full flex items-center gap-3"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
              </motion.button>
            </motion.div>

            {/* Tech badge pills */}
            <motion.div className="flex flex-wrap gap-3 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              {['Next.js', 'AI Engineering', 'Full Stack', 'Django', 'PostgreSQL'].map((t) => (
                <span key={t} className="px-3 py-1 text-sm rounded-full bg-white/3 border border-white/6 text-gray-200">{t}</span>
              ))}
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
