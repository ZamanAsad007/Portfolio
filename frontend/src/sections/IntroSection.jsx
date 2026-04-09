export default function IntroSection() {
  return (
    <section className="flex min-h-[calc(100svh-6rem)] items-center py-16">
      <div className="w-full text-left">
        <h1 className="font-heading mt-3 flex flex-wrap items-center gap-3 text-4xl font-semibold tracking-tight text-slate-200 md:text-5xl">
          <span>Hi, I’m ASIF.</span>
          <img
            src="/wave.gif"
            alt="Waving hand"
            className="h-10 w-10 select-none md:h-12 md:w-12"
            loading="lazy"
            decoding="async"
          />
        </h1>
        <p className="font-body mt-4 text-base leading-7 text-slate-300">
          23 year old MERN developer from Dhaka, Bangladesh.
          <img
            src="/bd-flag.svg"
            alt="Bangladesh"
            className="ml-2 inline-block h-5 w-5 align-text-bottom"
            loading="lazy"
            decoding="async"
          />
          <br />
          <br />
          Still Learning, Still Growing.
          
        </p>
      </div>
    </section>
  )
}
