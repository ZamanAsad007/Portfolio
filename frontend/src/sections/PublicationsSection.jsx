import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const PUBLICATIONS = [
  {
    title: 'Blockchain-Based Hajj Pilgrim Registration System: Enhancing Transparency and Security, PID: 273',
    description: 'Blockchain-Based Hajj Pilgrim Registration System: Enhancing Transparency and Security, Accepted at IEEE SPICSCON 2025 (To be published in IEEE Xplore).',
    
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
