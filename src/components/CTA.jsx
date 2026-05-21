import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h3 className="text-3xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Let's build modern products together.
        </motion.h3>
        <motion.p className="text-gray-300 mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          Helping startups and businesses build modern React + AI products. Available for senior roles, freelance engagements, and product collaborations.
        </motion.p>

        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="bg-accent text-dark px-6 py-3 rounded-full font-semibold">View My Work</a>
          <a href="mailto:sakshipatel07173@gmail.com" className="border border-white/10 px-6 py-3 rounded-full">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}
