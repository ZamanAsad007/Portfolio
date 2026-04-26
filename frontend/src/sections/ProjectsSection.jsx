import Card from '../components/Card.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import useRevealOnScroll from '../hooks/useRevealOnScroll.js'

const PROJECTS = [
  {
    title: 'Movie Engine',
    description: 'A full-stack movie browsing app built with the TMDB API. Users can browse popular movies, search by title, and manage their favourites and watched list through an authenticated account.',
    href: 'https://movie-engine-five.vercel.app/',
    githubHref:'https://github.com/ZamanAsad007/MovieEngine',
    externalHref: 'https://movie-engine-five.vercel.app/',
    imageSrc: '/movieengine.png',
    imageAlt: 'Movie Engine project screenshot',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google OAuth', 'TMDB API', 'Vite', 'Vercel', 'Render'],
  },
  {
    title: 'The Thought Ledger',
    description: 'A full-stack blog platform where authors can write rich-text posts with inline images, manage their blogs, and track post analytics. Features author discovery, location tagging, and a public blog feed.',
    href: 'https://github.com/ZamanAsad007/The-Thought-Ledger',
    githubHref:'https://github.com/ZamanAsad007/The-Thought-Ledger',
    imageSrc: '/thoughtledger.png',
    imageAlt: 'The Thought Ledger project screenshot',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tiptap', 'Multer', 'Recharts', 'Axios', 'Vite'],
  },
  {
    title: 'UrbanEase',
    description: 'A community-based local issue reporting platform where residents can report area problems like broken streetlights or garbage, and moderators can track and resolve them. Features role-based access for admins, moderators, and users.',
    href: 'https://github.com/ZamanAsad007/UrbanEase',
    githubHref:'https://github.com/ZamanAsad007/UrbanEase',
    imageSrc: '/urbanease.png',
    imageAlt: 'UrbanEase project screenshot',
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Multer', 'Axios', 'Bootstrap 5', 'bcrypt', 'Nodemailer'],
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
          ? 'py-16 opacity-100 translate-y-0 transition-all duration-700 ease-out'
          : 'py-16 opacity-0 translate-y-6 transition-all duration-700 ease-out'
      }
    >
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, idx) => (
          <Card
            key={`${p.title}-${idx}`}
            title={p.title}
            description={p.description}
            href={p.href}
            githubHref={p.githubHref}
            externalHref={p.externalHref}
            imageSrc={p.imageSrc}
            imageAlt={p.imageAlt}
            techStack={p.techStack}
          />
        ))}
      </div>
    </section>
  )
}
