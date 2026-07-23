import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const SocialProof = () => {
  return (
    <section className="py-20 bg-[#0A0A0F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Social Proof</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Testimonials, client feedback, and recognition from the community
          </p>
        </motion.div>

        {/* Placeholder for testimonials */}
        <motion.div
          className="glass-card p-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <FaQuoteLeft className="text-4xl text-primary/30" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Testimonials Coming Soon
          </h3>
          <p className="text-gray-400 mb-8">
            This section will feature client testimonials, project feedback, and professional recommendations.
          </p>

          {/* Placeholder stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </motion.div>
          </div>
        </motion.div>

        {/* GitHub Stats Placeholder */}
        <motion.div
          className="mt-12 glass-card p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            GitHub Statistics
          </h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold gradient-text">500+</div>
              <div className="text-sm text-gray-400">Commits</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">15+</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-sm text-gray-400">Contributions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
