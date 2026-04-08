export default function IntroSection() {
  return (
    <section className="grid gap-10 py-16 md:grid-cols-2 md:items-center">
      <div className="text-left">
        <div className="text-sm font-medium text-slate-300">Hi, I’m</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Asif
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          23 year old JavaScript developer from Dhaka, Bangladesh.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-64 w-64 rounded-3xl bg-slate-900/40 ring-1 ring-slate-800 md:h-80 md:w-80">
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
            Image
          </div>
        </div>
      </div>
    </section>
  )
}
