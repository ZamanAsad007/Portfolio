import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const PUBLICATIONS = [
  {
    title: 'Paper Title',
    description: 'Short description of the paper/publication.',
    href: '#',
  },
  {
    title: 'Paper Title',
    description: 'Short description of the paper/publication.',
    href: '#',
  },
  {
    title: 'Paper Title',
    description: 'Short description of the paper/publication.',
    href: '#',
  },
]

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-16">
      <SectionTitle>Publications</SectionTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PUBLICATIONS.map((p, idx) => (
          <Card
            key={`${p.title}-${idx}`}
            title={p.title}
            description={p.description}
            href={p.href}
          />
        ))}
      </div>
    </section>
  )
}
