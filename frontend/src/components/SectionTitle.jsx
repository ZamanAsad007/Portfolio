export default function SectionTitle({ children }) {
  return (
    <h2 className="font-heading flex w-full items-center gap-4 text-left text-3xl font-semibold tracking-tight text-slate-300 md:text-4xl">
      <span
        aria-hidden="true"
        className="text-4xl font-black leading-none text-brand md:text-5xl"
      >
        |
      </span>
      <span className="shrink-0">{children}</span>
      <span className="h-px min-w-0 flex-1 bg-slate-500/50" />
    </h2>
  )
}
