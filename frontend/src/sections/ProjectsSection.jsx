import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import useRevealOnScroll from '../hooks/useRevealOnScroll.js'

const PROJECTS = [
  {
    title: 'Mission Control',
    description: 'A distributed NASA space and Earth events telemetry dashboard featuring interactive Three.js 3D asteroid tracking, PostGIS geospatial hazard mapping, BullMQ background ingestion, and automated multi-channel emergency alerts.',
    href: 'https://github.com/ZamanAsad007/Mission-Control',
    githubHref: 'https://github.com/ZamanAsad007/Mission-Control',
    imageSrc: '/Mission-control.png',
    imageAlt: 'Mission Control project screenshot',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'PostGIS', 'Redis', 'BullMQ', 'Three.js', 'Leaflet', 'Docker', 'Vite'],
  },
  {
    title: 'TravelGo',
    description: 'An event-driven microservices travel booking platform for flights, hotels, and vacation packages, featuring distributed Saga choreography, transactional outbox messaging via RabbitMQ, Redis inventory holds, and real-time SSE status streaming.',
    href: 'https://github.com/ZamanAsad007/Travel-Booking-System',
    githubHref: 'https://github.com/ZamanAsad007/Travel-Booking-System',
    imageSrc: '/TravelGo.png',
    imageAlt: 'TravelGo project screenshot',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker', 'Vite', 'SSE', 'JWT', 'Nginx'],
  },
  {
    title: 'Movie Engine',
    description: 'A full-stack TMDB-based movie browsing app with AI recommendations,  authentication (Google OAuth/email verification), bookmarks and watched lists, public profiles, infinite scrolling, and MongoDB-backed dashboards.',
    href: 'https://movie-engine-five.vercel.app/',
    githubHref: 'https://github.com/ZamanAsad007/MovieEngine',
    externalHref: 'https://movie-engine-five.vercel.app/',
    imageSrc: '/movieengine.png',
    imageAlt: 'Movie Engine project screenshot',
    techStack: ['React', 'Node.js', 'Express', 'Mongoose', 'MongoDB', 'JWT', 'Google OAuth', 'Passport.js', 'TMDB API', 'Vite', 'Vercel', 'Render'],
  },
  {
    title: 'Epocha',
    description: 'An interactive historical map web app where users explore world events through time-filtered markers, Wikipedia-powered place details, and an AI story mode, built with React, Leaflet.js, and a PostgreSQL/Express backend.',
    href: 'https://github.com/ZamanAsad007/Epocha',
    githubHref: 'https://github.com/ZamanAsad007/Epocha',
    imageSrc: '/epocha.png',
    imageAlt: 'Epocha project screenshot',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Multer', 'Axios', 'Bootstrap 5', 'bcrypt', 'Nodemailer'],
  },
]

export default function ProjectsSection() {
  const { ref: sectionRef, revealed } = useRevealOnScroll()

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={
        revealed
          ? 'py-16 opacity-100 translate-y-0 transition-all duration-1000 ease-out'
          : 'py-16 opacity-0 translate-y-6 transition-all duration-1000 ease-out'
      }
    >
      <SectionTitle revealed={revealed}>Projects</SectionTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, idx) => {
          const delay = idx * 150
          return (
            <div
              key={`${p.title}-${idx}`}
              style={{ transitionDelay: `${delay}ms` }}
              className={
                (revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') +
                ' transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:transform-none'
              }
            >
              <Card
                title={p.title}
                description={p.description}
                href={p.href}
                githubHref={p.githubHref}
                externalHref={p.externalHref}
                imageSrc={p.imageSrc}
                imageAlt={p.imageAlt}
                techStack={p.techStack}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
