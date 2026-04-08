import { useState } from 'react'

import SectionTitle from '../components/SectionTitle.jsx'
import TabButton from '../components/TabButton.jsx'

const TECH_STACKS = [
  'JavaScript',
  'React',
  'Vite',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Git & GitHub',
]

const EDUCATION_HISTORY = [
  {
    title: 'BSc (or current) — Your Subject',
    meta: 'Your University — Year–Year',
  },
  {
    title: 'HSC — Your College',
    meta: 'Year',
  },
  {
    title: 'SSC — Your School',
    meta: 'Year',
  },
]

export default function AboutSection() {
  const [aboutTab, setAboutTab] = useState('education')
  const [eduTab, setEduTab] = useState('skills')

  return (
    <section id="about" className="py-16">
      <SectionTitle>About</SectionTitle>
      <p className="mt-3 text-left text-sm leading-6 text-slate-300">
        A quick snapshot of my education, skills, and current work status.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <TabButton
          active={aboutTab === 'education'}
          onClick={() => setAboutTab('education')}
        >
          Education
        </TabButton>
        <TabButton active={aboutTab === 'work'} onClick={() => setAboutTab('work')}>
          Work
        </TabButton>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-900/30 p-6 ring-1 ring-slate-800">
        {aboutTab === 'work' ? (
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-100">Work</div>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Still unemployed.
            </p>
          </div>
        ) : (
          <div className="text-left">
            <div className="flex flex-wrap items-center gap-2">
              <TabButton
                active={eduTab === 'skills'}
                onClick={() => setEduTab('skills')}
              >
                Skills
              </TabButton>
              <TabButton
                active={eduTab === 'academic'}
                onClick={() => setEduTab('academic')}
              >
                Academic
              </TabButton>
            </div>

            {eduTab === 'skills' ? (
              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-100">
                  Tech Stacks
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TECH_STACKS.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-100">
                  Education History
                </div>
                <div className="mt-4 grid gap-3">
                  {EDUCATION_HISTORY.map((row) => (
                    <div
                      key={row.title}
                      className="rounded-xl bg-slate-900/40 p-4 ring-1 ring-slate-800"
                    >
                      <div className="text-sm font-semibold text-slate-100">
                        {row.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-300">{row.meta}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
