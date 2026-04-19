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
    title: 'BSc — Computer Science & Engineering',
    meta: 'United International University —> Oct 22 - Ongoing',
  },
  {
    title: 'HSC — Cambrian College, Dhaka',
    meta: '2021',
  },
  {
    title: 'SSC — Chatkhil P.G. Government High School, Noakhali',
    meta: '2019',
  },
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const [aboutTab, setAboutTab] = useState('skills')

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
    { key: 'skills', label: 'Skills' },
    { key: 'education', label: 'Education' },
    { key: 'work', label: 'Work' },
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
      <p className="mt-3 text-sm leading-6 text-slate-300">
        My name is Md Asaduzzaman Asif, a fourth-year student at <span> </span>  
        <a
          href="https://www.uiu.ac.bd/about-uiu/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[rgb(45,196,181)] no-underline border-b border-[rgba(45,196,181,0.4)] transition-colors hover:text-[#a89cf7] hover:border-[#a89cf7]"
        >
          United International University
        </a>
        , currently in my final stretch before graduation. I am passionate
        about web development and enjoy learning new technologies and solving
        real-world problems through code. While I am still early in my career,
        I bring a strong foundation in modern web technologies and a genuine
        drive to grow and contribute.
      </p>

      <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start">
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="flex flex-col items-center">
            <img
              className="h-64 w-64 cursor-pointer rounded-3xl object-cover filter grayscale transition-all duration-300 hover:grayscale-0 ring-1 ring-slate-800 md:h-80 md:w-80"
              src="/Portfolio.jpg"
              alt="image description"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
              *hover over
            </p>
          </div>
        </div>

        <div className="order-2 md:order-1 md:flex-1">
          <div className="text-center text-sm font-medium text-slate-300">
            <div>
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
                            ? 'inline-block rounded-t-xl border-b-2 border-[#a89cf7] p-4 text-[#a89cf7]'
                            : 'inline-block rounded-t-xl border-b-2 border-transparent p-4 text-slate-300 transition-colors hover:border-[#a89cf7] hover:text-[#a89cf7]'
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
            {aboutTab === 'work' && (
              <div className="text-left">
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Open to opportunities.
                </p>
              </div>
            )}

            {aboutTab === 'skills' && (
              <div className="text-left">
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
            )}

            {aboutTab === 'education' && (
              <div className="text-left">
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
        </div>
      </div>
    </section>
  )
}
