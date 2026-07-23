import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import RoleAnimator from './ui/RoleAnimator';

const Hero = () => {
  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '15+', label: 'Skills' },
    { number: '100%', label: 'Passion' }
  ];

  const badges = ['Next.js', 'AI Engineering', 'Full Stack', 'Django', 'PostgreSQL'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated gradient blobs - disabled on mobile for performance */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 10%, rgba(139,92,246,0.16), transparent 15%), radial-gradient(circle at 90% 90%, rgba(34,211,238,0.1), transparent 20%)'
        }}
        animate={{ opacity: [0.6, 0.9, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div className="space-y-8" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <motion.div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/80 w-fit" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Available for senior roles & collaborations
            </motion.div>

            <div className="space-y-6">
              <motion.h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-3xl font-heading leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                I Build AI-Powered Digital Products
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                Full-stack engineer specializing in React, Next.js, and AI integration. I help startups and businesses build scalable, intelligent web applications.
              </motion.p>
            </div>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
              <a href="#projects" className="premium-button inline-flex items-center gap-2 px-8 py-4 shadow-lg shadow-primary/20 text-lg" aria-label="View my work">
                View My Work
                <FaArrowRight />
              </a>
              <a href="#contact" className="border border-white/10 text-white/90 px-8 py-4 rounded-full inline-flex items-center gap-2 transition hover:border-primary hover:text-white hover:bg-white/5 text-lg" aria-label="Let's talk">
                Let's Talk
              </a>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
              {badges.map((badge) => (
                <span key={badge} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-primary hover:text-white">{badge}</span>
              ))}
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-4 max-w-lg" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} viewport={{ once: true }}>
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative flex justify-center" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full overflow-hidden border border-white/10 shadow-[0_45px_90px_rgba(0,0,0,0.35)] bg-[#0A0A0F]/80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_35%)]" />
              <img src="/sakshi.jpeg" alt="Sakshi Patel" loading="lazy" decoding="async" className="relative w-full h-full object-cover" />
            </div>

            <motion.div className="absolute -top-4 right-0 rounded-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm font-semibold shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
              AI Engineer
            </motion.div>

            <motion.div className="absolute -bottom-4 left-0 rounded-full bg-white/10 border border-white/10 text-sm text-white px-4 py-2 shadow-2xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
              Full Stack
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
