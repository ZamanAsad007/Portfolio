import { useCallback, useEffect, useRef, useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'
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
  const [copyFeedback, setCopyFeedback] = useState('')
  const hasRestoredScrollRef = useRef(false)
  const copyFeedbackTimeoutRef = useRef(null)

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

  const showCopyFeedback = useCallback((message) => {
    setCopyFeedback(message)

    if (copyFeedbackTimeoutRef.current) {
      window.clearTimeout(copyFeedbackTimeoutRef.current)
    }

    copyFeedbackTimeoutRef.current = window.setTimeout(() => {
      setCopyFeedback('')
      copyFeedbackTimeoutRef.current = null
    }, 1800)
  }, [])

  const handleEmailCopy = useCallback(
    async (event) => {
      event.preventDefault()

      if (typeof window === 'undefined') return

      try {
        await window.navigator.clipboard.writeText(gmailTo)
        showCopyFeedback('Copied to clipboard')
      } catch {
        const fallbackInput = document.createElement('textarea')
        fallbackInput.value = gmailTo
        fallbackInput.setAttribute('readonly', '')
        fallbackInput.style.position = 'fixed'
        fallbackInput.style.opacity = '0'
        fallbackInput.style.pointerEvents = 'none'
        document.body.appendChild(fallbackInput)
        fallbackInput.select()

        try {
          document.execCommand('copy')
          showCopyFeedback('Copied to clipboard')
        } finally {
          document.body.removeChild(fallbackInput)
        }
      }
    },
    [gmailTo, showCopyFeedback]
  )

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
          <EmailOverlay onEmailClick={handleEmailCopy} />
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
              <Footer onEmailClick={handleEmailCopy} />
            </main>

            <div className="hidden lg:block" />
          </div>

          {copyFeedback && (
            <div
              className="fixed bottom-8 left-10 z-[60] flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-emerald-950/90 px-4 py-3 text-sm font-semibold text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-emerald-400/20 backdrop-blur-md"
              role="status"
              aria-live="polite"
            >
              <MdCheckCircle className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
              <span>{copyFeedback}</span>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
