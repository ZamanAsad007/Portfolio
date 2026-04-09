import { useEffect, useRef, useState } from 'react'
import { FaTruckLoading } from 'react-icons/fa'

const DEFAULT_GREETINGS = [
  'Hello',
  'হ্যালো',
  'Hola',
  'Bonjour',
  'Ciao',
  'Hallo',
  'नमस्ते',
  'こんにちは',
  '안녕하세요',
  '你好',
  'سلام',
]

export default function LoadingOverlay({
  greetings = DEFAULT_GREETINGS,
  shuffleIntervalMs = 150,
  totalDurationMs = 1800,
  fadeDurationMs = 300,
  onDone,
}) {
  const [greetingText, setGreetingText] = useState(greetings[0] ?? 'Hello')
  const [isFadingOut, setIsFadingOut] = useState(false)
  const finishedRef = useRef(false)

  useEffect(() => {
    finishedRef.current = false

    let greetIndex = 0
    let shuffleIntervalId = null
    const timeoutIds = []

    const start = () => {
      shuffleIntervalId = window.setInterval(() => {
        setGreetingText(greetings[greetIndex] ?? 'Hello')
        greetIndex = (greetIndex + 1) % Math.max(1, greetings.length)
      }, shuffleIntervalMs)

      timeoutIds.push(
        window.setTimeout(() => {
          window.clearInterval(shuffleIntervalId)
          setIsFadingOut(true)

          timeoutIds.push(
            window.setTimeout(() => {
              if (finishedRef.current) return
              finishedRef.current = true
              onDone?.()
            }, fadeDurationMs),
          )
        }, totalDurationMs),
      )
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start, { once: true })
    } else {
      start()
    }

    return () => {
      window.clearInterval(shuffleIntervalId)
      timeoutIds.forEach((id) => window.clearTimeout(id))
    }
  }, [fadeDurationMs, greetings, onDone, shuffleIntervalMs, totalDurationMs])

  return (
    <div
      id="intro-overlay"
      className={
        'intro-overlay fixed inset-0 z-[100] grid place-items-center bg-[rgb(35,37,48)] ' +
        (isFadingOut ? 'fade-out' : '')
      }
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="text-center">
        <div className="hello-shuffle text-4xl font-semibold tracking-tight text-slate-100">
          {greetingText}
        </div>
        <div className="mt-4 flex justify-center">
          <FaTruckLoading
            color="#f0883e"
            size={48}
            style={{ animation: 'bounce 0.8s ease-in-out infinite' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
