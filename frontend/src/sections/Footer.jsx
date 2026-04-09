import { SOCIAL_LINKS } from '../components/SocialOverlay.jsx'
import { FaGitAlt, FaRegCopyright } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 text-left text-sm text-slate-400">
      <div className="mb-6 flex items-center gap-6 md:hidden">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.label}
            className="group inline-flex items-center justify-center text-slate-300 transition-transform duration-200 ease-out hover:scale-125 hover:text-slate-100"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
          >
            <item.Icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="space-y-2">
        <p className="flex items-center gap-2">
          <FaGitAlt className="h-4 w-4 text-slate-300" aria-hidden="true" />
          Built and designed by ZamanAsad
        </p>
        <p className="flex items-center gap-2">
          <FaRegCopyright className="h-4 w-4 text-slate-300" aria-hidden="true" />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
