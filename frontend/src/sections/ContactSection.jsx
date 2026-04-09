import SectionTitle from '../components/SectionTitle.jsx'

export default function ContactSection({ gmailComposeUrl }) {
  return (
    <section id="contact" className="py-16">
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
