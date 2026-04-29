import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Education = () => {
  const education = [
    {
      degree: 'MSc IT Integrated Professional Course',
      institution: 'L J University',
      location: 'Ahmedabad, Gujarat',
      period: 'Jul 2024 - Apr 2026',
      type: 'masters',
      description: 'Currently pursuing Master of Science in Information Technology with focus on advanced software development, AI/ML integration, and enterprise systems.',
      achievements: ['Advanced Algorithms', 'Machine Learning', 'Cloud Computing', 'Software Architecture']
    },
    {
      degree: 'BSc IT Integrated Professional Course',
      institution: 'L J University',
      location: 'Ahmedabad, Gujarat',
      period: 'Sep 2021 - Apr 2024',
      type: 'bachelors',
      description: 'Completed Bachelor of Science in Information Technology with comprehensive knowledge of programming, databases, web development, and software engineering principles.',
      achievements: ['Data Structures', 'Web Development', 'Database Management', 'Software Engineering']
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      masters: 'from-purple-500 to-pink-500',
      bachelors: 'from-blue-500 to-cyan-500'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  const getTypeIcon = (type) => {
    const icons = {
      masters: '🎓',
      bachelors: '📚'
    };
    return icons[type] || '📖';
  };

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="Academic foundation in Information Technology with specialization in AI and modern software development"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-dark"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass-card p-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(edu.type)} rounded-xl flex items-center justify-center text-2xl`}>
                        {getTypeIcon(edu.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg text-primary font-medium">
                          {edu.institution}
                        </h4>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-secondary" />
                        {edu.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                        <FaAward className="text-accent" />
                        Key Focus Areas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-md"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Summary */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Academic Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5 Years</div>
                <div className="text-sm text-gray-400">of Integrated IT Education</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">LJ University</div>
                <div className="text-sm text-gray-400">Premier Institution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">AI Focus</div>
                <div className="text-sm text-gray-400">Modern Technology Stack</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
