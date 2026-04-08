export default function Navbar({ cvHref }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-left text-base font-semibold tracking-tight">
          Asif
          <span className="text-slate-400">.</span>
          <span className="text-slate-300">dev</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-slate-200 hover:text-white" href="#about">
            About
          </a>
          <a className="text-sm text-slate-200 hover:text-white" href="#projects">
            Projects
          </a>
          <a
            className="text-sm text-slate-200 hover:text-white"
            href="#publications"
          >
            Publications
          </a>
          <a className="text-sm text-slate-200 hover:text-white" href="#contact">
            Contact
          </a>

          <a
            className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white"
            href={cvHref}
            download
          >
            Download CV
          </a>
        </nav>

        <a
          className="md:hidden rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-950"
          href={cvHref}
          download
        >
          CV
        </a>
      </div>
    </header>
  )
}
