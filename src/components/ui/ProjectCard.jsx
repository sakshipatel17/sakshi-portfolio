import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  const tagline = project.tagline || (project.description ? project.description.split('. ')[0] : '')
  const techList = (project.stack || project.tech || []).map(t => t.toString())
  const frontendTech = techList.find(t => /react|next|typescript|tailwind/i.test(t))

  return (
    <motion.div layout className="glass-card p-6 flex flex-col h-full border border-white/6 hover:border-accent transition-colors">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-primary to-secondary mb-2`}>{project.category || 'Project'}</div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {frontendTech && <div className="text-xs text-gray-300 mt-1">Frontend: <span className="text-white font-medium">{frontendTech}</span></div>}
          {tagline && <div className="text-sm text-gray-300 mt-2">{tagline}</div>}
        </div>
        <div className="flex flex-col items-end gap-2">
          {project.deploymentStatus && (
            <span className={`text-xs px-2 py-1 rounded-full ${project.deploymentStatus === 'Live' ? 'bg-green-600 text-white' : project.deploymentStatus === 'In Development' ? 'bg-amber-600 text-black' : 'bg-gray-600 text-white'}`}>
              {project.deploymentStatus}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-400 mb-4 flex-grow">{project.solution || project.description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {(project.stack || project.tech || []).map((s, i) => (
            <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-md">{s}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-auto">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-gray-300">
            <FaGithub />
            Code
          </a>
        )}

        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}

        <button onClick={() => setOpen((v) => !v)} className="ml-auto text-sm text-accent underline">{open ? 'Hide' : 'Details'}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-4 text-sm text-gray-300 border-t border-white/6 pt-4">
            {project.problem && <div className="mb-2"><strong>Problem:</strong> {project.problem}</div>}
            {project.architecture && <div className="mb-2"><strong>Architecture:</strong> {project.architecture}</div>}
            {project.impact && <div className="mb-2"><strong>Impact:</strong> {project.impact}</div>}
            {project.features && (
              <div className="mb-2"><strong>Features:</strong> <ul className="list-disc ml-5">{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul></div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
