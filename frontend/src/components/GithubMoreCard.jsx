import { useCallback, useRef } from 'react'
import { RiGithubFill } from 'react-icons/ri'

export default function GithubMoreCard() {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  return (
    <a
      ref={cardRef}
      onMouseMove={handleMouseMove}
      href="https://github.com/ZamanAsad007?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View more projects on GitHub"
      className="group relative flex h-full min-h-[280px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[rgb(48,50,64)] p-8 text-center shadow-lg ring-1 ring-slate-800 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,196,181,0.15)] focus:outline-none focus:ring-2 focus:ring-brand/50"
    >
      {/* Dynamic Cursor Spotlight Radial Fill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 196, 181, 0.12), transparent 70%)',
        }}
      />

      {/* Dynamic Cursor Spotlight Border Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 196, 181, 0.45), transparent 60%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Cyber Holographic Scanline Sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/60 text-slate-200 ring-1 ring-slate-700/80 backdrop-blur-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-slate-900/80 group-hover:text-brand group-hover:ring-brand/60">
          <RiGithubFill className="h-9 w-9" aria-hidden="true" />
        </div>

        <div className="max-w-md space-y-1.5">
          <h3 className="text-xl font-semibold tracking-tight text-slate-200 transition-colors group-hover:text-slate-100">
            More Projects on GitHub
          </h3>
          <p className="text-sm leading-6 text-slate-300">
            Explore more repositories, open-source work, and ongoing experiments.
          </p>
        </div>

        <div className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out group-hover:scale-105 group-hover:brightness-110">
          <span>View more on GitHub</span>
          <span
            aria-hidden="true"
            className="text-base font-bold transition-transform duration-200 ease-out group-hover:translate-x-1"
          >
            &gt;
          </span>
        </div>
      </div>
    </a>
  )
}
