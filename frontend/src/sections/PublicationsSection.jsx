import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import useRevealOnScroll from '../hooks/useRevealOnScroll.js'

const PUBLICATIONS = [
  {
    title: 'Blockchain-Based Hajj Pilgrim Registration System: Enhancing Transparency and Security, PID: 273',
    description: 'Blockchain-Based Hajj Pilgrim Registration System: Enhancing Transparency and Security, Accepted at IEEE SPICSCON 2025 (To be published in IEEE Xplore).',
    
  },
]

export default function PublicationsSection() {
  const { ref: sectionRef, revealed } = useRevealOnScroll()

  return (
    <section
      ref={sectionRef}
      id="publications"
      className={
        revealed
          ? 'py-16 opacity-100 translate-y-0 transition-all duration-700 ease-out'
          : 'py-16 opacity-0 translate-y-6 transition-all duration-700 ease-out'
      }
    >
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
