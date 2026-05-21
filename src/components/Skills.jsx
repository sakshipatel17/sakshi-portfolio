import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/skills';

const Skills = () => {
  const categories = [
    {
      name: 'Languages',
      icon: '💻',
      items: skills.languages,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Frontend',
      icon: '🎨',
      items: skills.frontend,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Backend',
      icon: '⚙️',
      items: skills.backend,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'AI / ML',
      icon: '🤖',
      items: skills.ai_ml,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Testing',
      icon: '🧪',
      items: skills.testing,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Tools',
      icon: '🛠️',
      items: skills.tools,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Comprehensive expertise across AI, full-stack development, and quality assurance"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Skill Distribution
            </h3>
            <p className="text-gray-400 mb-6">
              With expertise spanning across multiple domains, I bring a holistic approach to software development.
              My skills in AI/ML combined with full-stack development and testing ensure robust, intelligent solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-gray-400">Frontend Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">7+</div>
                <div className="text-sm text-gray-400">AI/ML Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-gray-400">Testing Tools</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
