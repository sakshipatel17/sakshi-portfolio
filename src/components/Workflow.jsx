import React from 'react'
import RevealOnScroll from './ui/RevealOnScroll'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Problem Discovery', text: 'Understanding the core user problem and business goal before writing a line of code.' },
  { title: 'Architecture Planning', text: 'Designing scalable system architecture — database schema, API structure, auth flow.' },
  { title: 'Full Stack Development', text: 'Building frontend + backend in parallel with production-grade code quality.' },
  { title: 'AI Integration', text: 'Integrating AI/LLM capabilities into the product where it adds real user value.' },
  { title: 'Deploy & Iterate', text: 'Deploying to Vercel/Render, monitoring, and iterating based on feedback.' },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h3 className="text-2xl font-semibold mb-6">Development Workflow</h3>
        </RevealOnScroll>

        <div className="hidden md:flex items-center gap-6">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title} className="flex-1 p-6 bg-white/4 rounded-lg border border-white/6">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}>
                <div className="text-3xl font-bold text-accent mb-2">{i + 1}</div>
                <h4 className="font-semibold text-white mb-2">{s.title}</h4>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.title} className="p-4 bg-white/4 rounded-lg border border-white/6">
              <div className="flex items-start gap-3">
                <div className="text-xl font-bold text-accent">{i + 1}</div>
                <div>
                  <h5 className="font-medium text-white">{s.title}</h5>
                  <p className="text-gray-300 text-sm">{s.text}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
