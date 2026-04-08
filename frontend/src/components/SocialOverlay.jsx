import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ZamanAsad007',
    Icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-asaduzzaman-asif-519154338',
    Icon: FaLinkedinIn,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/zaman.asad.69',
    Icon: FaFacebookF,
  },
]

export default function SocialOverlay() {
  return (
    <div className="fixed bottom-8 right-10 z-50 hidden md:block">
      <div className="flex flex-col items-center gap-8">
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
            <item.Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}
