import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Python Developer',
      issuer: 'TOPS Technologies',
      year: '2023',
      category: 'development',
      credential: 'Professional certification in Python programming and web development',
      skills: ['Python', 'Web Development', 'Backend']
    },
    {
      title: 'Certified C++ for C Programmers',
      issuer: 'Coursera',
      year: '2023',
      category: 'programming',
      credential: 'Advanced C++ programming concepts and object-oriented programming',
      skills: ['C++', 'OOP', 'Algorithms']
    },
    {
      title: 'Manual Testing Certification',
      issuer: 'Unicode Technologies Pvt. Ltd.',
      year: '2024',
      category: 'testing',
      credential: 'Comprehensive manual testing methodologies and best practices',
      skills: ['Manual Testing', 'Test Cases', 'Quality Assurance']
    },
    {
      title: 'Automation Testing Certification',
      issuer: 'Unicode Technologies Pvt. Ltd.',
      year: '2024',
      category: 'testing',
      credential: 'Automation testing using Selenium and modern testing frameworks',
      skills: ['Selenium', 'Automation', 'Test Frameworks']
    },
    {
      title: 'Introduction to Model Context Protocol (MCP)',
      issuer: 'Anthropic',
      year: '2024',
      category: 'ai',
      credential: 'Model Context Protocol fundamentals and implementation',
      skills: ['MCP', 'AI Integration', 'Anthropic']
    },
    {
      title: 'Claude with the Anthropic API',
      issuer: 'Anthropic',
      year: '2024',
      category: 'ai',
      credential: 'Advanced API integration with Claude AI models',
      skills: ['Claude API', 'AI Development', 'API Integration']
    },
    {
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic',
      year: '2024',
      category: 'ai',
      credential: 'Comprehensive AI fluency covering modern AI technologies and applications',
      skills: ['AI Fundamentals', 'Machine Learning', 'AI Strategy']
    },
    {
      title: 'Generative AI for Software Developers',
      issuer: 'IBM',
      year: '2024',
      category: 'ai',
      credential: 'Generative AI applications in software development and coding',
      skills: ['Generative AI', 'Software Development', 'IBM Watson']
    },
    {
      title: 'Generative AI: Prompt Engineering Basics',
      issuer: 'Coursera',
      year: '2024',
      category: 'ai',
      credential: 'Advanced prompt engineering techniques for AI models',
      skills: ['Prompt Engineering', 'AI Models', 'Natural Language']
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      development: 'from-blue-500 to-cyan-500',
      programming: 'from-green-500 to-teal-500',
      testing: 'from-orange-500 to-red-500',
      ai: 'from-purple-500 to-pink-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      development: '💻',
      programming: '⚙️',
      testing: '🧪',
      ai: '🤖'
    };
    return icons[category] || '📜';
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and continuous learning in AI, development, and testing technologies"
        />

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-lg flex items-center justify-center text-lg`}>
                  {getCategoryIcon(cert.category)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-xs text-gray-400">
                  {cert.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {cert.credential}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Summary */}
        <motion.div
          className="glass-card p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Continuous Learning & Development
            </h3>
            <p className="text-gray-400">
              Committed to staying current with emerging technologies and industry best practices through continuous professional development
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">9+</div>
              <div className="text-sm text-gray-400">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-sm text-gray-400">AI/ML Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-sm text-gray-400">Development Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <div className="text-sm text-gray-400">Testing Certifications</div>
            </div>
          </div>

          <motion.div
            className="mt-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-sm text-gray-400">
              <FaCertificate className="inline-block mr-2 text-primary" />
              All certifications verifiable through respective platforms
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
