import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern – Manual & Automation Testing',
      company: 'Unicode Technologies Pvt. Ltd.',
      location: 'Ahmedabad',
      period: 'May 2024 – Feb 2025',
      type: 'fulltime',
      description: 'Gained hands-on experience in manual and automation testing across web and mobile platforms. Created test cases, bug reports, and executed API testing using Postman.',
      skills: ['Manual Testing', 'Automation Testing', 'Test Cases', 'Bug Reports', 'API Testing', 'Postman', 'JIRA', 'Selenium', 'AI/ML Testing']
    },
    {
      title: 'Python Developer Trainee',
      company: 'TOPS Technologies',
      location: 'Ahmedabad',
      period: 'May 2023 – June 2023',
      type: 'internship',
      description: 'Developed web-based applications using Python, learned data management with MySQL, and worked on data analysis workflows and basic AI model implementation.',
      skills: ['Python', 'Web Applications', 'MySQL', 'Backend Integration', 'Data Analysis', 'AI Models']
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      fulltime: 'from-blue-500 to-cyan-500',
      internship: 'from-green-500 to-teal-500',
      freelance: 'from-purple-500 to-pink-500'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  const getTypeLabel = (type) => {
    const labels = {
      fulltime: 'Full Time',
      internship: 'Internship',
      freelance: 'Freelance'
    };
    return labels[type] || 'Other';
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Experience" 
          subtitle="Professional journey through testing, development, and AI innovation"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-primary font-medium">
                          {exp.company}
                        </h4>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(exp.type)}`}>
                        {getTypeLabel(exp.type)}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-secondary" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="skill-badge text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
