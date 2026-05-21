import React, { useState } from 'react'
import RevealOnScroll from './ui/RevealOnScroll'
import { FaFileAlt, FaFlask } from 'react-icons/fa'

const entries = [
  {
    id: 1,
    title: 'Data Science: The Impact of Machine Learning in Industries',
    type: 'Conference Poster Presentation',
    venue: 'ICRAECA International Conference',
    description: 'Explored how machine learning algorithms are transforming industry-level decision-making, automation, and predictive analytics. Presented findings as a research poster at an international academic conference.',
    tags: ['Machine Learning', 'Data Science', 'Industry AI', 'Research'],
    icon: 'paper'
  },
  {
    id: 2,
    title: 'Blockchain in Healthcare',
    type: 'Research Exploration',
    description: "Investigated blockchain's potential in securing healthcare data, patient record management, and decentralized health systems. Focused on practical applications and privacy-preserving architectures.",
    tags: ['Blockchain', 'Healthcare Tech', 'Decentralized Systems', 'Privacy'],
    icon: 'science'
  }
]

export default function Research() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="research" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h3 className="text-2xl font-semibold mb-6">Research & Publications</h3>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {entries.map((e) => (
            <RevealOnScroll key={e.id} className="p-6 bg-white/3 rounded-lg border border-dashed border-white/6">
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">{e.icon === 'paper' ? <FaFileAlt /> : <FaFlask />}</div>
                <div>
                  <div className="text-sm text-gray-400 mb-1 monospace">{e.type}{e.venue ? ` • ${e.venue}` : ''}</div>
                  <h4 className="font-semibold text-white">{e.title}</h4>
                  <p className="text-gray-300 mt-2">{e.description.split('. ').slice(0,2).join('. ')}.</p>

                  <div className="flex gap-2 mt-3 flex-wrap">
                    {e.tags.map((t) => <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded-md">{t}</span>)}
                  </div>

                  <div className="mt-4">
                    <button onClick={() => setOpenId(openId === e.id ? null : e.id)} className="text-accent underline text-sm">{openId === e.id ? 'Hide' : 'Read More'}</button>
                    {openId === e.id && (
                      <div className="mt-3 text-sm text-gray-300 border-t border-white/6 pt-3">
                        <p>{e.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
