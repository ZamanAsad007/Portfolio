import { useEffect, useRef, useState } from 'react'

export default function useRevealOnScroll({ threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (revealed) return

    const target = ref.current
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [revealed, threshold])

  return { ref, revealed }
}
