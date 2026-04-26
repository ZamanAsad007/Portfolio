import SectionTitle from '../components/SectionTitle.jsx'
import useRevealOnScroll from '../hooks/useRevealOnScroll.js'

export default function ContactSection({ gmailComposeUrl }) {
  const { ref: sectionRef, revealed } = useRevealOnScroll()

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={
        revealed
          ? 'py-16 opacity-100 translate-y-0 transition-all duration-700 ease-out'
          : 'py-16 opacity-0 translate-y-6 transition-all duration-700 ease-out'
      }
    >
      <SectionTitle>Contact</SectionTitle>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Got something in mind? I'm actively looking for new opportunities and always excited to connect with like-minded people. Drop me a message — whether it's work related or just a casual chat, I'd love to hear from you!
        </p>
        <div className="mt-6">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white"
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Say Hello
          </a>
        </div>
      
    </section>
  )
}
