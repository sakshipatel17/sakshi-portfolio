import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
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
