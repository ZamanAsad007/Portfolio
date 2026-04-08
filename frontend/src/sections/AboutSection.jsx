import { useEffect, useRef, useState } from 'react'

import SectionTitle from '../components/SectionTitle.jsx'

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
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const [aboutTab, setAboutTab] = useState('education')
  const [eduTab, setEduTab] = useState('skills')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) {
      setRevealed(true)
      return
    }

    const target = sectionRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const techColumns = TECH_STACKS.reduce((columns, item, index) => {
    const columnIndex = Math.floor(index / 3)
    columns[columnIndex] ??= []
    columns[columnIndex].push(item)
    return columns
  }, [])

  const aboutTabs = [
    { key: 'education', label: 'Education' },
    { key: 'work', label: 'Work' },
  ]

  const educationTabs = [
    { key: 'skills', label: 'Skills' },
    { key: 'academic', label: 'Academic' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className={
        revealed
          ? 'py-16 opacity-100 translate-y-0 transition-all duration-700 ease-out'
          : 'py-16 opacity-0 translate-y-6 transition-all duration-700 ease-out'
      }
    >
      <SectionTitle>About</SectionTitle>
      <p className="mt-3 text-left text-sm leading-6 text-slate-300">
        A quick snapshot of my education, skills, and current work status.
      </p>

      <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start">
        <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
          <div className="h-64 w-64 rounded-3xl bg-slate-900/40 ring-1 ring-slate-800 md:h-80 md:w-80">
            <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
              Image
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1 md:flex-1">
          <div className="text-center text-sm font-medium text-slate-300">
            <div className="border-b border-slate-800">
              <ul className="-mb-px flex flex-wrap">
                {aboutTabs.map((tab) => {
                  const active = aboutTab === tab.key

                  return (
                    <li key={tab.key} className="mr-2">
                      <button
                        type="button"
                        onClick={() => setAboutTab(tab.key)}
                        className={
                          active
                            ? 'inline-block rounded-t-xl border-b border-indigo-200 p-4 text-indigo-200'
                            : 'inline-block rounded-t-xl border-b border-transparent p-4 hover:border-indigo-200 hover:text-indigo-200'
                        }
                        aria-current={active ? 'page' : undefined}
                      >
                        {tab.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="mt-3 p-6">
            {aboutTab === 'work' ? (
              <div className="text-left">
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Still unemployed.
                </p>
              </div>
            ) : (
              <div className="text-left">
                <div className="text-sm font-medium text-slate-300">
                  <div className="border-b border-slate-800">
                    <ul className="-mb-px flex flex-wrap">
                      {educationTabs.map((tab) => {
                        const active = eduTab === tab.key

                        return (
                          <li key={tab.key} className="mr-2">
                            <button
                              type="button"
                              onClick={() => setEduTab(tab.key)}
                              className={
                                active
                                  ? 'inline-block rounded-t-xl border-b border-indigo-200 p-3 text-indigo-200'
                                  : 'inline-block rounded-t-xl border-b border-transparent p-3 hover:border-indigo-200 hover:text-indigo-200'
                              }
                              aria-current={active ? 'page' : undefined}
                            >
                              {tab.label}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>

                {eduTab === 'skills' ? (
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-slate-200">
                      Tech Stacks
                    </div>
                    <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
                      {techColumns.map((column, columnIndex) => (
                        <ul key={columnIndex} className="grid gap-2">
                          {column.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm">
                              <span className="font-mono text-slate-200">&gt;</span>
                              <span className="text-slate-200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-slate-200">
                      Education History
                    </div>
                    <div className="mt-4 grid gap-3">
                      {EDUCATION_HISTORY.map((row) => (
                        <div
                          key={row.title}
                          className="rounded-xl bg-slate-900/40 p-4 ring-1 ring-slate-800"
                        >
                          <div className="text-sm font-semibold text-slate-200">
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
        </div>
      </div>
    </section>
  )
}
