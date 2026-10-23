import { useCallback, useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { RiGithubFill } from 'react-icons/ri'

export default function Card({
  title,
  description,
  href,
  imageSrc,
  imageAlt = '',
  imageClassName = 'aspect-[16/9] w-full object-cover',
  githubHref,
  externalHref,
  techStack,
}) {
  const cardRef = useRef(null)
  const primaryHref = externalHref || href
  const TitleWrapper = primaryHref ? 'a' : 'div'
  const titleWrapperProps = primaryHref
    ? { href: primaryHref, target: '_blank', rel: 'noopener noreferrer' }
    : {}

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
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative block h-full overflow-hidden rounded-2xl bg-[rgb(48,50,64)] text-left shadow-lg ring-1 ring-slate-800 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,196,181,0.15)]"
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

      <div className="relative overflow-hidden rounded-t-2xl">
        {imageSrc ? (
          <img
            className={`${imageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-slate-900/40 text-sm text-slate-400">
            Image
          </div>
        )}

        {/* Cyber Holographic Scanline Sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
        />

        {/* Subtle Vignette Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(48,50,64)]/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
        />

        {primaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={typeof title === 'string' ? title : 'Open link'}
          />
        ) : null}

        {githubHref || externalHref ? (
          <div className="absolute right-3 top-3 z-20 flex gap-2 opacity-0 pointer-events-none translate-y-1 scale-95 transition-[opacity,transform] duration-200 ease-out group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:scale-100">
            {githubHref ? (
              <a
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/60 text-slate-200 ring-1 ring-slate-700/80 backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-950/80 hover:text-brand hover:ring-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <RiGithubFill className="h-5 w-5" />
              </a>
            ) : null}

            {externalHref ? (
              <a
                href={externalHref}
                target="_blank"
                rel="noreferrer"
                aria-label="External link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/60 text-slate-200 ring-1 ring-slate-700/80 backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-950/80 hover:text-brand hover:ring-brand/60 focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="relative z-10 p-6">
        <TitleWrapper
          {...titleWrapperProps}
          className={
            href
              ? 'block text-xl font-semibold tracking-tight text-slate-200 transition-colors group-hover:text-slate-100'
              : 'block text-xl font-semibold tracking-tight text-slate-200'
          }
        >
          {title}
        </TitleWrapper>

        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>

        {Array.isArray(techStack) && techStack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <li
                key={`${tech}-${index}`}
                className="rounded-lg bg-slate-900/50 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-800 transition-all duration-200 group-hover:ring-slate-700/80 hover:!scale-105 hover:!bg-slate-900 hover:!text-slate-100 hover:!ring-brand/50"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
