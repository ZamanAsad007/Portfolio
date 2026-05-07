import { useEffect, useRef, useState } from 'react'
import { SiRender } from 'react-icons/si'
import { TbApiOff } from 'react-icons/tb'

import SectionTitle from '../components/SectionTitle.jsx'
import useRevealOnScroll from '../hooks/useRevealOnScroll.js'

const SKILL_SECTIONS = [
  {
    title: 'Languages',
    stacks: [
      { label: 'JavaScript', icons: [{ iconClass: 'devicon-javascript-plain', colored: true }] },
      { label: 'TypeScript', icons: [{ iconClass: 'devicon-typescript-plain', colored: true }] },
      { label: 'C', icons: [{ iconClass: 'devicon-c-plain', colored: true }] },
      { label: 'C++', icons: [{ iconClass: 'devicon-cplusplus-plain', colored: true }] },
      { label: 'Java', icons: [{ iconClass: 'devicon-java-plain', colored: true }] },
      {
        label: 'Python',
        icons: [
          {
            kind: 'img',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          },
        ],
      },
    ],
  },
  {
    title: 'Frameworks',
    stacks: [
      { label: 'React', icons: [{ iconClass: 'devicon-react-original', colored: true }] },
      {
        label: 'Next.js',
        icons: [
          {
            kind: 'img',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
            className: 'invert',
          },
        ],
      },
      { label: 'NestJS', icons: [{ iconClass: 'devicon-nestjs-plain', colored: true }] },
      { label: 'Express.js', icons: [{ iconClass: 'devicon-express-original', colored: false }] },
      {
        label: 'Vite',
        icons: [
          {
            kind: 'img',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
          },
        ],
      },
    ],
  },
  {
    title: 'Cloud',
    stacks: [
      { label: 'Vercel', icons: [{ iconClass: 'devicon-vercel-original', colored: false }] },
      { label: 'Render', icons: [{ kind: 'react', Component: SiRender }] },
    ],
  },
  {
    title: 'Databases',
    stacks: [
      { label: 'MongoDB', icons: [{ iconClass: 'devicon-mongodb-plain', colored: true }] },
      { label: 'MySQL', icons: [{ iconClass: 'devicon-mysql-plain', colored: true }] },
      { label: 'PostgreSQL', icons: [{ iconClass: 'devicon-postgresql-plain', colored: true }] },
      { label: 'Redis', icons: [{ iconClass: 'devicon-redis-plain', colored: true }] },
    ],
  },
  {
    title: 'Architecture',
    stacks: [{ label: 'REST API', icons: [{ kind: 'react', Component: TbApiOff }] }],
  },
  {
    title: 'Tools',
    stacks: [
      {
        label: 'Windows',
        icons: [
          {
            kind: 'img',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',
          },
        ],
      },
      { label: 'Git', icons: [{ iconClass: 'devicon-git-plain', colored: true }] },
      {
        label: 'Linux',
        icons: [
          {
            kind: 'img',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
          },
        ],
      },
    ],
  },
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
  const { ref: sectionRef, revealed } = useRevealOnScroll()
  const [aboutTab, setAboutTab] = useState('skills')
  const [eduRevealed, setEduRevealed] = useState(false)
  const [hoverHintHidden, setHoverHintHidden] = useState(false)
  const hoverHintTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (hoverHintTimerRef.current) {
        window.clearTimeout(hoverHintTimerRef.current)
      }
    }
  }, [])

  const handleHoverHintTap = () => {
    if (typeof window === 'undefined') return

    const noHover = window.matchMedia?.('(hover: none)').matches
    if (!noHover) return

    setHoverHintHidden(true)
    if (hoverHintTimerRef.current) {
      window.clearTimeout(hoverHintTimerRef.current)
    }
    hoverHintTimerRef.current = window.setTimeout(() => {
      setHoverHintHidden(false)
      hoverHintTimerRef.current = null
    }, 1200)
  }

  const aboutTabs = [
    { key: 'skills', label: 'Skills' },
    { key: 'education', label: 'Education' },
    { key: 'work', label: 'Work' },
  ]

  useEffect(() => {
    if (aboutTab === 'education') {
      // small timeout to ensure state change happens after tab click
      const t = window.setTimeout(() => setEduRevealed(true), 20)
      return () => window.clearTimeout(t)
    }

    // reset so re-clicking the tab will re-trigger the animation
    setEduRevealed(false)
  }, [aboutTab])

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
        My name is Md Asaduzzaman Asif. I am a fourth-year student at{' '}
        <a
          href="https://www.uiu.ac.bd/about-uiu/"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[rgb(45,196,181)] no-underline border-b border-[rgba(45,196,181,0.4)] transition-colors hover:text-[#a89cf7] hover:border-[#a89cf7]"
        >
          United International University 
        </a>
        <span> </span> and currently in my final year before graduation.
        <span className="mt-2 block">
          I am interested in web development and like learning new technologies.
          I also enjoy solving practical problems using code. I have basic
          knowledge of modern web development and I am focused on improving my
          skills and gaining experience through real work.
        </span>
      </p>

      <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start">
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div
            className="group flex flex-col items-center"
            onClick={handleHoverHintTap}
          >
            <img
              className="h-64 w-64 cursor-pointer rounded-3xl object-cover filter grayscale transition-all duration-300 hover:grayscale-0 ring-1 ring-slate-800 md:h-80 md:w-80"
              src="/Portfolio.jpg"
              alt="image description"
              loading="lazy"
              decoding="async"
            />
            <p
              className={
                'mt-2 text-xs font-medium text-slate-400 opacity-100 transition-opacity duration-200 group-hover:opacity-0 hover:opacity-0 sm:text-sm' +
                (hoverHintHidden ? ' opacity-0' : '')
              }
            >
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
                <div className="mt-1 space-y-6">
                  {SKILL_SECTIONS.map((section) => (
                    <div
                      key={section.title}
                      className="flex flex-col gap-2 sm:flex-row sm:items-start"
                    >
                      <div className="text-sm font-semibold text-slate-200 sm:w-28 sm:shrink-0">
                        {section.title}:
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {section.stacks.map((stack) => (
                          <li key={stack.label}>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/60 px-3 py-1 text-sm text-slate-200 ring-1 ring-slate-800 transition-transform duration-200 ease-out hover:scale-[1.08] motion-reduce:transition-none motion-reduce:hover:transform-none">
                              {stack.icons.length > 0 && (
                                <span className="inline-flex items-center gap-2">
                                  {stack.icons.map((icon) => (
                                    <span
                                      key={icon.iconClass ?? icon.src ?? icon.kind}
                                      className="inline-flex"
                                    >
                                      {icon.kind === 'react' ? (
                                        <icon.Component
                                          aria-hidden="true"
                                          className={
                                            'h-5 w-5 text-slate-200 ' +
                                            (icon.className ?? '')
                                          }
                                        />
                                      ) : icon.kind === 'img' ? (
                                        <img
                                          aria-hidden="true"
                                          alt=""
                                          src={icon.src}
                                          className={
                                            'h-5 w-5 ' +
                                            (icon.className ?? '')
                                          }
                                          loading="lazy"
                                          decoding="async"
                                        />
                                      ) : (
                                        <i
                                          aria-hidden="true"
                                          className={
                                            'text-[20px] leading-none ' +
                                            (icon.colored
                                              ? icon.iconClass + ' colored'
                                              : icon.iconClass + ' text-slate-200')
                                          }
                                        />
                                      )}
                                    </span>
                                  ))}
                                </span>
                              )}
                              <span>{stack.label}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {aboutTab === 'education' && (
              <div className="text-left">
                <div className="mt-4 grid gap-3">
                  {EDUCATION_HISTORY.map((row, idx) => {
                    const delay = idx * 150
                    return (
                      <div
                        key={row.title}
                        style={{ transitionDelay: `${delay}ms` }}
                        className={
                          (eduRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') +
                          ' rounded-xl bg-slate-900/40 p-4 ring-1 ring-slate-800 transition-all duration-1000 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:transform-none'
                        }
                      >
                        <div className="text-sm font-semibold text-slate-200">
                          {row.title}
                        </div>
                        <div className="mt-1 text-sm text-slate-300">{row.meta}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
