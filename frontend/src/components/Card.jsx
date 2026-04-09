import { FaExternalLinkAlt } from 'react-icons/fa'
import { RiGithubFill } from 'react-icons/ri'

export default function Card({
  title,
  description,
  href,
  imageSrc,
  imageAlt = '',
  githubHref,
  externalHref,
}) {
  const TitleWrapper = href ? 'a' : 'div'
  const titleWrapperProps = href ? { href } : {}

  return (
    <div className="group block h-full rounded-2xl bg-[rgb(48,50,64)] p-6 text-left shadow-md ring-1 ring-slate-800 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(100,90,200,0.2)]">
      <div className="relative">
        {imageSrc ? (
          <img
            className="aspect-[16/10] w-full rounded-2xl object-cover"
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center rounded-2xl bg-slate-900/40 text-sm text-slate-400 ring-1 ring-slate-800">
            Image
          </div>
        )}

        {href ? (
          <a
            href={href}
            className="absolute inset-0 z-10 rounded-2xl"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/40 text-slate-200 ring-1 ring-slate-700 backdrop-blur-sm transition-[transform,background-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-950/60 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/40"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/40 text-slate-200 ring-1 ring-slate-700 backdrop-blur-sm transition-[transform,background-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-slate-950/60 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      <TitleWrapper
        {...titleWrapperProps}
        className={
          href
            ? 'mt-6 block text-xl font-semibold tracking-tight text-slate-200 transition-colors group-hover:text-slate-100'
            : 'mt-6 block text-xl font-semibold tracking-tight text-slate-200'
        }
      >
        {title}
      </TitleWrapper>

      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  )
}
