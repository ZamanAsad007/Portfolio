import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const PROJECTS = [
  {
    title: 'Project Title',
    description: 'Short description of what the project does.',
    href: '#',
  },
  {
    title: 'Project Title',
    description: 'Short description of what the project does.',
    href: '#',
  },
  {
    title: 'Project Title',
    description: 'Short description of what the project does.',
    href: '#',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, idx) => (
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
