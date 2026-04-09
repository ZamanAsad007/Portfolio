export default function IntroSection() {
  return (
    <section className="flex min-h-[calc(100svh-6rem)] items-center py-16">
      <div className="w-full text-left">
        <h1 className="font-heading mt-3 flex flex-wrap items-center gap-3 text-5xl font-semibold tracking-tight text-slate-200 sm:text-6xl lg:text-7xl">
          <span>Hi, I’m ASIF.</span>
          <img
            src="/wave.gif"
            alt="Waving hand"
            className="h-11 w-11 select-none sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            loading="lazy"
            decoding="async"
          />
        </h1>
        <p className="font-body mt-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
          23 year old MERN developer from Dhaka, Bangladesh.
          <img
            src="/bd-flag.svg"
            alt="Bangladesh"
            className="ml-2 inline-block h-5 w-5 align-text-bottom sm:h-6 sm:w-6"
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
