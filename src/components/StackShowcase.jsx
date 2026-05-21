import React from 'react'
import RevealOnScroll from './ui/RevealOnScroll'

const groups = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive UI Engineering', 'Modern UI/UX Systems'],
  },
  {
    title: 'Backend',
    items: ['Django', 'Node.js', 'Express.js', 'REST APIs', 'Authentication Systems', 'Database Architecture'],
  },
  {
    title: 'AI / ML',
    items: ['AI Integrations', 'LLM Workflows', 'MCP', 'Claude API', 'OpenAI API', 'Agentic AI systems'],
  },
  {
    title: 'Database & Infra',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Vercel', 'Render', 'GitHub', 'Docker'],
  },
]

export default function StackShowcase() {
  return (
    <section id="stack" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h3 className="text-2xl font-semibold mb-6">Trusted Technologies</h3>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <RevealOnScroll key={g.title} className="p-6 bg-white/3 rounded-lg border border-white/6">
              <h4 className="font-medium mb-4">{g.title}</h4>
              <div className="flex flex-wrap gap-3">
                {g.items.map((it) => (
                  <div key={it} className="flex items-center gap-3 bg-transparent border border-white/6 px-3 py-2 rounded-full hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center text-sm">{it.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>
                    <div className="text-sm">{it}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
