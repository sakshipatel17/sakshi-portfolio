import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  if (typeof window === 'undefined') return null

  const isCoarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches
  const [enabled] = useState(!isCoarse)

  useEffect(() => {
    if (!enabled) return
    const prev = document.body.style.cursor
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = prev }
  }, [enabled])

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springConfig = { stiffness: 150, damping: 20 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const handleOver = (e) => {
      const t = e.target
      try {
        if (t && t.closest && t.closest('a,button,[data-cursor-interactive]')) setHover(true)
      } catch (err) {}
    }

    const handleOut = (e) => {
      const t = e.target
      try {
        if (t && t.closest && t.closest('a,button,[data-cursor-interactive]')) setHover(false)
      } catch (err) {}
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('pointerover', handleOver)
    document.addEventListener('pointerout', handleOut)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerout', handleOut)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: sx,
          translateY: sy,
          width: hover ? 64 : 28,
          height: hover ? 64 : 28,
          marginLeft: hover ? -32 : -14,
          marginTop: hover ? -32 : -14,
          borderRadius: 9999,
          border: `2px solid rgba(6,182,212,${hover ? 0.98 : 0.6})`,
          boxShadow: hover ? '0 8px 30px rgba(6,182,212,0.18)' : 'none',
          backgroundColor: hover ? 'rgba(6,182,212,0.04)' : 'transparent',
          transition: 'width 150ms ease, height 150ms ease, margin 150ms ease',
        }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          translateX: sx,
          translateY: sy,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: 9999,
          backgroundColor: 'rgb(6 182 212)',
        }}
      />
    </>
  )
}
