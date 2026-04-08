export default function SocialOverlay({ gmailComposeUrl }) {
  return (
    <div className="fixed bottom-8 right-10 z-50 hidden md:block">
      <div className="rounded-2xl bg-slate-900/60 p-3 ring-1 ring-slate-800 backdrop-blur">
        <div className="flex items-center gap-2">
          <a
            className="rounded-xl bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-slate-800 hover:bg-slate-900"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-xl bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-slate-800 hover:bg-slate-900"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-xl bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-slate-800 hover:bg-slate-900"
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
