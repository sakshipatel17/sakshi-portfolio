import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    x.set(clientX - left - width / 2)
    y.set(clientY - top - height / 2)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10])
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10])

  const tagline = project.tagline || (project.description ? project.description.split('. ')[0] : '')
  const techList = (project.stack || project.tech || []).map((t) => t.toString())
  const frontendTech = techList.find((t) => /react|next|typescript|tailwind/i.test(t))

  return (
    <motion.div
      layout
      style={{
        rotateX: window.innerWidth >= 768 ? rotateX : 0,
        rotateY: window.innerWidth >= 768 ? rotateY : 0,
        transformStyle: window.innerWidth >= 768 ? 'preserve-3d' : 'flat'
      }}
      onMouseMove={window.innerWidth >= 768 ? onMouseMove : undefined}
      onMouseLeave={window.innerWidth >= 768 ? onMouseLeave : undefined}
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
      className="group glass-card overflow-hidden p-0 flex flex-col h-full border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
    >
      {project.image && (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Featured
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-primary to-secondary mb-2">
              {project.featured ? 'Featured Project' : project.category || 'Project'}
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {frontendTech && (
              <div className="text-xs text-gray-300 mt-1">
                Frontend: <span className="text-white font-medium">{frontendTech}</span>
              </div>
            )}
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

        <div className="flex flex-wrap items-center gap-3 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 text-gray-100 transition-colors hover:bg-white/15">
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]">
              <FaExternalLinkAlt />
              View Live
            </a>
          )}

          <button onClick={() => setOpen((v) => !v)} className="ml-auto text-sm text-accent underline">
            {open ? 'Hide' : 'Details'}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-4 text-sm text-gray-300 border-t border-white/10 pt-4 space-y-3">
              {project.problem && (
                <div>
                  <strong className="text-primary">Problem:</strong>
                  <p className="mt-1 text-gray-400">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <strong className="text-secondary">Approach:</strong>
                  <p className="mt-1 text-gray-400">{project.solution}</p>
                </div>
              )}
              {project.architecture && (
                <div>
                  <strong className="text-accent">Architecture:</strong>
                  <p className="mt-1 text-gray-400">{project.architecture}</p>
                </div>
              )}
              {project.impact && (
                <div>
                  <strong className="text-green-400">Result/Impact:</strong>
                  <p className="mt-1 text-gray-400">{project.impact}</p>
                </div>
              )}
              {project.features && (
                <div>
                  <strong className="text-white">Key Features:</strong>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-gray-400">{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
