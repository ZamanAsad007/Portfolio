import SectionTitle from '../components/SectionTitle.jsx'

export default function ContactSection({ gmailComposeUrl }) {
  return (
    <section id="contact" className="py-16">
      <SectionTitle>Contact</SectionTitle>
      <div className="mt-8 rounded-2xl bg-slate-900/30 p-6 text-left ring-1 ring-slate-800">
        <div className="text-lg font-semibold text-slate-200">Get In Touch</div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
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
      </div>
    </section>
  )
}
