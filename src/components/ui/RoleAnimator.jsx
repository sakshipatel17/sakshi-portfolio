import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  'AI Engineer',
  'Full Stack Developer',
  'React.js Developer',
  'Modern Web Architect',
  'LLM Integration Engineer',
  'Freelance Product Builder',
]

export default function RoleAnimator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-3 text-2xl md:text-4xl font-semibold mt-2">
      <span className="text-zinc-400">I'm a</span>

      <span className="relative inline-flex overflow-hidden border border-zinc-700 rounded-md px-4 py-1 bg-zinc-900/60 backdrop-blur-sm min-w-[220px] md:min-w-[320px] justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-bold tracking-tight whitespace-nowrap"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>

        <span className="animate-pulse text-zinc-500 ml-2">|</span>
      </span>
    </div>
  )
}
