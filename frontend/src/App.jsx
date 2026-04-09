import { useCallback, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import LoadingOverlay from './components/LoadingOverlay.jsx'
import SocialOverlay from './components/SocialOverlay.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import Footer from './sections/Footer.jsx'
import IntroSection from './sections/IntroSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import PublicationsSection from './sections/PublicationsSection.jsx'

function App() {
  const [isAppReady, setIsAppReady] = useState(false)

  const initMainAnimations = useCallback(() => {
    // Keep as a dedicated hook point for future animations.
  }, [])

  const gmailTo = 'asadasif1704@gmail.com'
  const gmailSubject = 'Hello Asif'
  const gmailBody =
    "Hi Asif,\n\nI hope you're doing well.\n\nI found your portfolio and wanted to reach out.\n\nBest regards,\n[Your Name]\n"

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    gmailTo
  )}&su=${encodeURIComponent(gmailSubject)}&body=${encodeURIComponent(gmailBody)}`

  const cvHref = '/cv.pdf'

  return (
    <div
      id="top"
      className="font-body min-h-svh bg-[rgb(35,37,48)] text-slate-200"
    >
      {!isAppReady && (
        <LoadingOverlay
          onDone={() => {
            initMainAnimations()
            setIsAppReady(true)
          }}
        />
      )}

      {isAppReady && (
        <>
          <SocialOverlay />
          <Navbar cvHref={cvHref} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,56rem)_1fr]">
            <div className="hidden lg:block" />

            <main className="px-5 sm:px-6 [&_p]:text-justify [&_li]:text-justify">
              <IntroSection />
              <AboutSection />
              <ProjectsSection />
              <PublicationsSection />
              <ContactSection gmailComposeUrl={gmailComposeUrl} />
              <Footer />
            </main>

            <div className="hidden lg:block" />
          </div>
        </>
      )}
    </div>
  )
}

export default App
