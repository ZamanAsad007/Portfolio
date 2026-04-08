import { useState } from 'react'
import { LiaDownloadSolid } from 'react-icons/lia'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ cvHref }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[rgba(35,37,48,0.7)] backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="text-left text-2xl font-semibold tracking-tight text-slate-200 transition-colors hover:text-indigo-200"
          >
            asif.
          </a>

          <div className="ml-auto flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/40 text-slate-200 ring-1 ring-slate-800 hover:bg-slate-900/60"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded bg-slate-200" />
                <span className="h-0.5 w-5 rounded bg-slate-200" />
                <span className="h-0.5 w-5 rounded bg-slate-200" />
              </div>
            </button>
          </div>

          <nav className="ml-auto hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                className="text-sm text-slate-200 hover:text-slate-100"
                href={item.href}
              >
                {item.label}
              </a>
            ))}

            <a
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-slate-950 hover:brightness-110"
              href={cvHref}
              download
            >
              CV <LiaDownloadSolid className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div id="mobile-nav" className={mobileOpen ? 'mt-3 md:hidden' : 'hidden'}>
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                className="rounded-xl bg-slate-900/40 px-3 py-2 text-center text-sm font-medium text-slate-200 ring-1 ring-slate-800 hover:bg-slate-900/60"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-3 py-2 text-sm font-semibold text-slate-950 hover:brightness-110"
              href={cvHref}
              download
              onClick={() => setMobileOpen(false)}
            >
              CV <LiaDownloadSolid className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
