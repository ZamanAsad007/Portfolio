export default function Card({
  title,
  description,
  href,
  imageSrc,
  imageAlt = '',
  ctaLabel = 'Read more',
}) {
  const TitleWrapper = href ? 'a' : 'div'
  const titleWrapperProps = href ? { href } : {}

  return (
    <div className="group block h-full rounded-2xl bg-[rgb(48,50,64)] p-6 text-left shadow-md ring-1 ring-slate-800 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(100,90,200,0.2)]">
      {href ? (
        <a href={href} className="block">
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
        </a>
      ) : imageSrc ? (
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

      {href ? (
        <a
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-2.5 text-sm font-medium leading-5 text-slate-200 shadow-sm hover:bg-slate-900/60 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand/40"
        >
          {ctaLabel}
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      ) : null}
    </div>
  )
}
