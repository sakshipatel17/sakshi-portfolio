import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  const getCategoryColor = (category) => {
    const colors = {
      fullstack: 'from-blue-500 to-cyan-500',
      ai: 'from-purple-500 to-pink-500',
      frontend: 'from-green-500 to-teal-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Innovative solutions showcasing AI integration, full-stack development, and modern web technologies"
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <p className="text-sm text-gray-400 max-w-2xl">
            These projects reflect the current portfolio work and the new premium design direction.
          </p>
          <motion.a
            href="https://www.figma.com/design/diDXgnqZSYk9cV9qmTst0w/Untitled?node-id=9-7&t=UlOztN6uvpPsjMe2-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:border-primary hover:bg-white/10 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SiFigma className="text-pink-400" />
            View Figma Design
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/sakshipatel17"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
