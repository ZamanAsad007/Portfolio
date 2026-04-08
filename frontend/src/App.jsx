import Navbar from './components/Navbar.jsx'
import SocialOverlay from './components/SocialOverlay.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import Footer from './sections/Footer.jsx'
import IntroSection from './sections/IntroSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import PublicationsSection from './sections/PublicationsSection.jsx'

function App() {
  const gmailComposeUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com&su=Hello%20Asif&body=Hi%20Asif%2C%0A%0A'

  const cvHref = '/cv.pdf'

  return (
    <div
      id="top"
      className="font-body min-h-svh bg-[rgb(35,37,48)] text-slate-200"
    >
      <SocialOverlay />
      <Navbar cvHref={cvHref} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,56rem)_1fr]">
        <div className="hidden lg:block" />

        <main className="px-4">
          <IntroSection />
          <AboutSection />
          <ProjectsSection />
          <PublicationsSection />
          <ContactSection gmailComposeUrl={gmailComposeUrl} />
          <Footer />
        </main>

        <div className="hidden lg:block" />
      </div>
    </div>
  )
}

export default App
