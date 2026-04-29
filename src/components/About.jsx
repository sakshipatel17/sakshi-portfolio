import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const infoCards = [
    {
      icon: <FaMapMarkerAlt className="text-primary" />,
      title: "Location",
      content: "Ahmedabad, Gujarat, India"
    },
    {
      icon: <FaBriefcase className="text-secondary" />,
      title: "Availability",
      content: "Open to Internships / Full Time / Freelance"
    },
    {
      icon: <FaEnvelope className="text-accent" />,
      title: "Email",
      content: "sakshipatel07173@gmail.com"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              A builder obsessed with <span className="gradient-text">AI</span>, <span className="gradient-text">automation</span>, <span className="gradient-text">testing</span>, and scalable systems.
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              A highly motivated and technically driven individual seeking an AI Engineer, where I can apply my skills in machine learning, data analysis, and full-stack development to build intelligent solutions. Passionate about leveraging AI/ML frameworks and modern web technologies to solve real-world problems and contribute to impactful AI-driven products.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, combined with expertise in AI/ML, I bring a unique perspective to software development. My experience in testing and quality assurance ensures that the products I build are not only intelligent but also robust and reliable.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm passionate about creating solutions that bridge the gap between cutting-edge AI technology and practical business needs, always focusing on scalability, performance, and user experience.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h4 className="font-semibold text-primary mb-2">Career Focus</h4>
                <p className="text-sm text-gray-400">AI Engineering & Full-Stack Development</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-secondary mb-2">Education</h4>
                <p className="text-sm text-gray-400">MSc IT & BSc IT from LJ University</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-accent mb-2">Experience</h4>
                <p className="text-sm text-gray-400">Testing & Python Development</p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-primary mb-2">Skills</h4>
                <p className="text-sm text-gray-400">15+ Technologies across AI, Web & Testing</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="glass-card p-6 flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mt-1">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{card.title}</h4>
                  <p className="text-gray-400">{card.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Contact Info Card */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaPhone className="text-primary" />
                Get in Touch
              </h4>
              <p className="text-gray-400 mb-2">Phone: +91 9998285294</p>
              <p className="text-gray-400">Email: sakshipatel07173@gmail.com</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
