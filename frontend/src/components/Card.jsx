export default function Card({ title, description, href }) {
  return (
    <a
      href={href}
      className="block rounded-2xl bg-slate-900/40 p-5 text-left ring-1 ring-slate-800 hover:bg-slate-900/60"
    >
      <div className="text-base font-semibold text-slate-100">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{description}</div>
      <div className="mt-4 text-sm font-medium text-slate-200">View →</div>
    </a>
  )
}
