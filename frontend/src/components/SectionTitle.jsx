import { useEffect, useRef } from 'react'
import useTextDecode from '../hooks/useTextDecode.js'

function extractText(children) {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join('')
  }
  if (children && typeof children === 'object' && children.props?.children) {
    return extractText(children.props.children)
  }
  return ''
}

export default function SectionTitle({ children, revealed }) {
  const containerRef = useRef(null)
  const hasTriggeredRef = useRef(false)
  const text = extractText(children)
  const { items, isScrambling, trigger } = useTextDecode(text)

  // Trigger decode on intersection with viewport
  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true
          trigger()
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [trigger])

  // Also trigger if parent passes revealed=true
  useEffect(() => {
    if (revealed && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true
      trigger()
    }
  }, [revealed, trigger])

  const handleMouseEnter = () => {
    trigger()
  }

  if (!text) {
    return (
      <h2 className="font-heading flex w-full items-center gap-4 text-left text-3xl font-semibold tracking-tight text-slate-300 md:text-4xl">
        <span
          aria-hidden="true"
          className="text-4xl font-black leading-none text-brand md:text-5xl"
        >
          |
        </span>
        <span className="shrink-0">{children}</span>
        <span className="h-px min-w-0 flex-1 bg-slate-500/50" />
      </h2>
    )
  }

  return (
    <h2
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
      className="font-heading group flex w-full cursor-pointer select-none items-center gap-4 text-left text-3xl font-semibold tracking-tight text-slate-300 md:text-4xl"
    >
      <span
        aria-hidden="true"
        className={`text-4xl font-black leading-none text-brand transition-all duration-300 md:text-5xl ${
          isScrambling
            ? 'scale-110 drop-shadow-[0_0_12px_rgba(45,196,181,0.85)]'
            : 'group-hover:drop-shadow-[0_0_8px_rgba(45,196,181,0.5)]'
        }`}
      >
        |
      </span>

      <span className="relative shrink-0" aria-hidden="true">
        {/* Invisible natural text ensures zero layout shift */}
        <span className="invisible select-none" aria-hidden="true">
          {text}
        </span>

        {/* Animated terminal decode characters */}
        <span className="absolute left-0 top-0 flex items-center whitespace-nowrap">
          {items.map((item, idx) => (
            <span
              key={idx}
              className={
                item.status === 'resolved'
                  ? 'text-slate-300 transition-colors duration-150'
                  : item.status === 'frontier'
                    ? 'text-white drop-shadow-[0_0_8px_rgba(45,196,181,0.9)]'
                    : 'text-brand/90 drop-shadow-[0_0_4px_rgba(45,196,181,0.35)]'
              }
            >
              {item.char}
            </span>
          ))}
        </span>
      </span>

      <span
        className={`h-px min-w-0 flex-1 transition-all duration-500 ${
          isScrambling
            ? 'bg-gradient-to-r from-brand/60 via-slate-500/50 to-slate-500/20'
            : 'bg-slate-500/50 group-hover:bg-slate-500/80'
        }`}
      />
    </h2>
  )
}
