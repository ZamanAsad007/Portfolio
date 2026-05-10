import { MdEmail } from 'react-icons/md'

export default function EmailOverlay() {
  const email = 'asadasif1704@gmail.com'

  return (
    <div className="fixed bottom-8 left-10 z-50 hidden md:block">
      <div className="flex flex-col items-center gap-2 group">
        <div className="h-12 w-0.5 bg-gradient-to-b from-slate-400 to-transparent transition-all duration-200 ease-out group-hover:h-20" />
        <a
          className="group inline-flex flex-col items-center justify-center text-slate-300 transform-gpu transition duration-200 ease-out hover:scale-125 hover:text-[#a89cf7] motion-reduce:transition-none"
          href={`mailto:${email}`}
          aria-label="Email"
          title={email}
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          <span className="text-xs font-semibold tracking-widest">{email}</span>
        </a>
        <div className="h-12 w-0.5 bg-gradient-to-t from-slate-400 to-transparent transition-all duration-200 ease-out group-hover:h-20" />
      </div>
    </div>
  )
}
