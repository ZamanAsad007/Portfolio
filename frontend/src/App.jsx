import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import LoadingOverlay from './components/LoadingOverlay.jsx'
import SocialOverlay from './components/SocialOverlay.jsx'
import EmailOverlay from './components/EmailOverlay.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import Footer from './sections/Footer.jsx'
import IntroSection from './sections/IntroSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import PublicationsSection from './sections/PublicationsSection.jsx'

function App() {
  const [isAppReady, setIsAppReady] = useState(false)
  const hasRestoredScrollRef = useRef(false)

  const scrollPositionKey = 'portfolio-scroll-position'

  const initMainAnimations = useCallback(() => {
    // Keep as a dedicated hook point for future animations.
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const saveScrollPosition = () => {
      window.sessionStorage.setItem(
        scrollPositionKey,
        String(window.scrollY || window.pageYOffset || 0)
      )
    }

    window.addEventListener('scroll', saveScrollPosition, { passive: true })
    window.addEventListener('pagehide', saveScrollPosition)
    window.addEventListener('beforeunload', saveScrollPosition)

    return () => {
      window.removeEventListener('scroll', saveScrollPosition)
      window.removeEventListener('pagehide', saveScrollPosition)
      window.removeEventListener('beforeunload', saveScrollPosition)
    }
  }, [])

  useEffect(() => {
    if (!isAppReady || hasRestoredScrollRef.current) {
      return
    }

    hasRestoredScrollRef.current = true

    const savedScrollPosition = Number(
      window.sessionStorage.getItem(scrollPositionKey)
    )

    if (!Number.isFinite(savedScrollPosition) || savedScrollPosition <= 0) {
      return
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollPosition, left: 0, behavior: 'auto' })
    })
  }, [isAppReady])

  const gmailTo = 'asadasif1704@gmail.com'
  const gmailSubject = 'Hello Asif'
  const gmailBody =
    "Hi Asif,\n\nI hope you're doing well.\n\nI found your portfolio and wanted to reach out.\n\nBest regards,\n[Your Name]\n"

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    gmailTo
  )}&su=${encodeURIComponent(gmailSubject)}&body=${encodeURIComponent(gmailBody)}`

  const handleContactClick = (e) => {
    if (typeof window === 'undefined') return

    const ua = window.navigator.userAgent
    const isMobileUA =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    const isIPadTouch =
      window.navigator.platform === 'MacIntel' &&
      window.navigator.maxTouchPoints > 1

    if (isMobileUA || isIPadTouch) {
      e.preventDefault()
      const mailtoUrl = `mailto:${gmailTo}?subject=${encodeURIComponent(
        gmailSubject
      )}&body=${encodeURIComponent(gmailBody)}`
      window.location.href = mailtoUrl
    }
  }

  const cvHref = '/Resume_MdAsaduzzaman.pdf'

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
          <EmailOverlay />
          <SocialOverlay />
          <Navbar cvHref={cvHref} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,68rem)_1fr]">
            <div className="hidden lg:block" />

            <main className="px-5 sm:px-6 [&_p]:text-justify [&_li]:text-justify">
              <IntroSection />
              <AboutSection />
              <ProjectsSection />
              <PublicationsSection />
              <ContactSection
                gmailComposeUrl={gmailComposeUrl}
                onContactClick={handleContactClick}
              />
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
